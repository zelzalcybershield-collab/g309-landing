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

$inbox = 'brand\inbox'
$logoOut = 'brand\logo.png'

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
  $side = [Math]::Min([Math]::Max($logo.Width, $logo.Height), 256)
  $out = New-Object System.Drawing.Bitmap $side, $side
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.InterpolationMode = 'HighQualityBicubic'
  $g.SmoothingMode = 'HighQuality'
  $g.PixelOffsetMode = 'HighQuality'
  $g.Clear([System.Drawing.Color]::Black)
  $ox = [int](($side - $logo.Width) / 2); $oy = [int](($side - $logo.Height) / 2)
  $g.DrawImage($logo, $ox, $oy, $side, $side)
  $g.Dispose()
  $out.Save($logoOut, [System.Drawing.Imaging.ImageFormat]::Png)
  $out.Dispose()
  $kb = [int]((Get-Item $logoOut).Length / 1KB)
  Write-Output ''
  Write-Output ("logo  -> {0}  ({1}x{1} square png, {2} KB)" -f $logoOut, $side, $kb)
  $logo.Dispose()
} else {
  Write-Output 'no profile picture found (need a square-ish image in the inbox)'
}

if ($cover) {
  Write-Output ''
  Write-Output 'cover palette, most common first:'
  $i = 0
  foreach ($c in (Get-Rank $cover)) {
    $i++
    if ($i -gt 12) { break }
    $hex = '#' + $c.Key
    $r = [Convert]::ToInt32($c.Key.Substring(0,2),16)
    $g2 = [Convert]::ToInt32($c.Key.Substring(2,2),16)
    $b = [Convert]::ToInt32($c.Key.Substring(4,2),16)
    # Rough perceived brightness, to tell an accent apart from a dark base.
    $lum = [int](0.299*$r + 0.587*$g2 + 0.114*$b)
    Write-Output ('  {0,2}. {1}  rgb({2,3},{3,3},{4,3})  lum {5,3}' -f $i, $hex, $r, $g2, $b, $lum)
  }
  $cover.Dispose()
} else {
  Write-Output 'no cover found (need a wide image in the inbox)'
}
