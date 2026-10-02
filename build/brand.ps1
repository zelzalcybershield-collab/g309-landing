# Collects the brand assets from brand/inbox and reports what belongs where.
#
#   powershell -File build/brand.ps1
#
# The Facebook profile picture and cover cannot be fetched here (Facebook 400s
# every host and the page needs a login), so the pictures are dropped in by hand
# and this script sorts them out. It classifies by aspect ratio rather than by
# filename, because whatever the files are called is not a reliable signal:
#
#   square / portrait  -> brand/logo.png   the profile picture
#   wide (ratio > 1.3) -> cover reference  the cover, read for its palette
#
# For the cover it prints a ranked palette so the theme colours are taken from
# the actual artwork rather than guessed. Nothing is written to the cover path
# on purpose: the cover is a reference, not something the page ships.

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

# Paths resolve from this script's own location, not the caller's working
# directory. Running it from anywhere but the repo root used to print
# "no inbox at brand\inbox" and exit 0, which looks like it had already worked.
$root = Split-Path -Parent (Split-Path -Parent $PSCommandPath)
$inbox = Join-Path $root 'brand\inbox'
$logoOut = Join-Path $root 'brand\logo.png'
$coverOut = Join-Path $root 'brand\cover.jpg'

if (-not (Test-Path $inbox)) { Write-Output "no inbox at $inbox"; exit 0 }

$files = Get-ChildItem $inbox -File | Where-Object {
  $_.Extension -match '^\.(png|jpe?g|webp|bmp)$'
}
if (-not $files) { Write-Output 'inbox is empty - drop the profile picture and the cover in there'; exit 0 }

function Get-Rank([System.Drawing.Image]$img, [int]$samples = 60) {
  # Downscale to a thumbnail, then count colours. Sampling a small bitmap keeps
  # this fast on a 2000px cover and smooths the photo down to real colours
  # instead of counting every near-identical pixel separately.
  $w = 60; $h = [int](60 * $img.Height / $img.Width)
  if ($h -lt 1) { $h = 1 }
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.DrawImage($img, 0, 0, $w, $h)
  $g.Dispose()

  $counts = @{}
  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $p = $bmp.GetPixel($x, $y)
      # Quantise to 5 bits per channel: near-duplicates collapse into one bucket.
      $key = '{0:X2}{1:X2}{2:X2}' -f (($p.R -shr 3) * 8), (($p.G -shr 3) * 8), (($p.B -shr 3) * 8)
      if ($counts.ContainsKey($key)) { $counts[$key] += 1 } else { $counts[$key] = 1 }
    }
  }
  $bmp.Dispose()
  return $counts.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First $samples
}

$logo = $null; $cover = $null
foreach ($f in $files) {
  $img = [System.Drawing.Image]::FromFile($f.FullName)
  $ratio = $img.Width / $img.Height
  $kind = if ($ratio -lt 1.3) { 'profile' } else { 'cover' }
  Write-Output ('{0,-22} {1,5}x{2,-5} ratio {3,5:N2}  -> {4}' -f $f.Name, $img.Width, $img.Height, $ratio, $kind)
  if ($kind -eq 'profile' -and -not $logo) { $logo = $img; $logoSrc = $f.FullName }
  elseif ($kind -eq 'cover' -and -not $cover) { $cover = $img; $coverSrc = $f.FullName }
  else { $img.Dispose() }
}

if ($logo) {
  # Normalise the profile picture to a square PNG so the CSS crop is predictable.
  # Capped at 256px: the logo renders at 36px in the nav and 32px in the footer,
  # so 256 is already 7x oversampled on a retina screen. The source is 1254px and
  # 1.9MB, which is a megabyte of payload the visitor downloads to draw a badge
  # the size of a coin.
  $side = [int][Math]::Min([Math]::Max($logo.Width, $logo.Height), 256)
  # 32bppArgb so any transparency in the source survives; the canvas is never
  # cleared, because clearing to black would paint out the transparent parts and
  # turn a transparent logo into a black square.
  $out = New-Object System.Drawing.Bitmap $side, $side, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.SmoothingMode = 'HighQuality'
  $g.PixelOffsetMode = 'HighQuality'
  $g.CompositingQuality = 'HighQuality'
  # Cover-fit: scale until the image fills the square, then centre it so the
  # overflow is cropped evenly. The destination rectangle has to start at the
  # canvas origin, not at (side - source) / 2 - the source is larger than the
  # target, so that offset is negative and would place the whole logo
  # off-canvas and leave a blank square behind.
  $scale = [Math]::Max($side / $logo.Width, $side / $logo.Height)
  $dw = [int][Math]::Ceiling($logo.Width * $scale)
  $dh = [int][Math]::Ceiling($logo.Height * $scale)
  $dx = [int][Math]::Floor(($side - $dw) / 2)
  $dy = [int][Math]::Floor(($side - $dh) / 2)
  $g.DrawImage($logo, $dx, $dy, $dw, $dh)
  $g.Dispose()
  $out.Save($logoOut, [System.Drawing.Imaging.ImageFormat]::Png)
  $out.Dispose()
  $kb = [int]((Get-Item $logoOut).Length / 1KB)
  Write-Output ''
  Write-Output ("logo  -> {0}  ({1}x{1} square png, {2} KB, cover-fit from {3}x{4})" -f $logoOut, $side, $kb, $logo.Width, $logo.Height)
  $logo.Dispose()
} else {
  Write-Output 'no profile picture found (need a square-ish image in the inbox)'
}

if ($cover) {
  # The cover now gets its own full-width banner strip, shown without an overlay,
  # so it has to be sharp enough for its own text to read. Cap the output at the
  # source width (2056) and keep quality high: on a max-w-6xl page the banner is
  # ~1100px wide, so shipping it at source res makes the title text crisp on a
  # retina screen instead of soft.
  $cw = [int][Math]::Min($cover.Width, 2056)
  $ch = [int][Math]::Ceiling($cover.Height * $cw / $cover.Width)
  $cOut = New-Object System.Drawing.Bitmap $cw, $ch, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g2 = [System.Drawing.Graphics]::FromImage($cOut)
  $g2.InterpolationMode = 'HighQualityBicubic'
  $g2.PixelOffsetMode = 'HighQuality'
  $g2.DrawImage($cover, 0, 0, $cw, $ch)
  $g2.Dispose()
  # Encoder quality via the JPEG codec parameters; a plain Save() would sit at
  # the default 75.
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 85
  $cOut.Save($coverOut, $codec, $ep)
  $cOut.Dispose(); $ep.Dispose()

  Write-Output ''
  Write-Output ("cover -> {0}  ({1}x{2} jpg q85, {3} KB)" -f $coverOut, $cw, $ch, [int]((Get-Item $coverOut).Length / 1KB))

  Write-Output 'cover palette, most common first:'
  $i = 0
  foreach ($c in (Get-Rank $cover)) {
    $i++
    if ($i -gt 12) { break }
    $hex = '#' + $c.Key
    $r = [Convert]::ToInt32($c.Key.Substring(0,2),16)
    $g2v = [Convert]::ToInt32($c.Key.Substring(2,2),16)
    $b = [Convert]::ToInt32($c.Key.Substring(4,2),16)
    # Rough perceived brightness, to tell an accent apart from a dark base.
    $lum = [int](0.299*$r + 0.587*$g2v + 0.114*$b)
    Write-Output ('  {0,2}. {1}  rgb({2,3},{3,3},{4,3})  lum {5,3}' -f $i, $hex, $r, $g2v, $b, $lum)
  }
  $cover.Dispose()
} else {
  Write-Output 'no cover found (need a wide image in the inbox)'
}
