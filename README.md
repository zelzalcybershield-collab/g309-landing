# Landing Pages — منتجات أمازون مصر

موقع صفحات هبوط لمنتجات على أمازون مصر، عربي/إنجليزي، مع **سعر يتحدّث تلقائياً** من
صفحة المنتج. خمس منتجات حالياً، وكل منتج في رابط واحد فقط.

```
index.html                فهرس الجذر — مولّد، بيقائمة كل المنتجات
products/*.json           مصدر الحقيقة لكل منتج (النص، المواصفات، الصورة)
build/build.mjs           يولّد مجلد لكل منتج
build/hub.mjs             يولّد فهرس الجذر من المنتجات
build/template.{html,js}  القالب المشترك — صفر نص منتجات
build/verify.mjs          فحص بعد التوليد
img/                      صور المصدر، تُنسخ لكل مجلد منتج
scripts/update-price.mjs  سعر/تقييم/توفر، مع fallback لقراءة الصفحة
.github/workflows/price.yml  يجدول التشغيل كل 4 ساعات
```

**الجذر `/` فهرس، مش صفحة منتج.** كان قبل كده نسخة تانية من صفحة G309
(`syncToRoot`)، وده كان معناه رابطين لنفس المنتج. كل منتج دلوقتي في `/<dir>/` واحد بس.

## التشغيل

```bash
node scripts/update-price.mjs     # تحديث السعر مرة واحدة
node scripts/update-price.mjs     # جرّب مسار الفشل
FORCE_STALE=1 node scripts/update-price.mjs
```

## النشر على GitHub Pages

```bash
git init -b main
git add .
git commit -m "landing pages"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

 بعدها من **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.

### تفعيل التحديث التلقائي

1. **Settings → Actions → General → Workflow permissions → Read and write**
2. **Settings → Secrets and variables → Actions → New repository secret**
   - `AMZN_CLIENT_ID` · `AMZN_CLIENT_SECRET` · `AMZN_PARTNER_TAG`

الـworkflow بيمرّ على كل ملف في `products/*.json`، ويقرأ منه `asin` و`dir` — مفيش
متغير `AMZN_ASIN` ولا `PRODUCT_URL` ثابت. بيشتغل كل 4 ساعات، وبيعمل commit لملفات
`price.json` و`index.html` بس لو حاجة اتغيّرت.

> **مش بيأثر على حساب الأفيليت.** رابط الجلب `amazon.eg/dp/<ASIN>` من غير أي
> `tag=`، ومفيش credentials ولا تسجيل دخول للمتصفح، ومفيش أي طلب لـAssociates Central.
> الخطر الوحيد الحقيقي إن أمازون تحجب الـIP بعد طلبات متكررة من سيرفر، وده
> يوقف التحديث **مش** يأذي الحساب. لو `stale: true` في `price.json`، ده معناه
> إن أمازون بدأت تحجب — ساعتها إما تغيّر الـIP، وإما ترجع للتحديث اليدوي.

## إضافة منتج جديد

الصفحات بتتولّد من `products/<slug>.json` — مفيش نسخ ولصق.

```bash
node build/build.mjs            # كل المنتجات + فهرس الجذر
node build/build.mjs g309       # منتج واحد (من غير تحديث الفهرس)
node build/verify.mjs           # فحص الصفحات بعد التوليد
```

`build/template.html` و `build/template.js` فيهما **صفر** نص منتجات — أي نص في
القالب بيتنسخ لكل المنتجات، وده اللي كان بيخلّي صفحة لابتوب تطلع فيها كلام ماوس.
`verify.mjs` بيتأكد من ده صريح.

`verify.mjs` كمان بيتأكد إن الجذر فهرس لا صفحة منتج: بيوصل لكل منتج مرة واحدة
بالظبط، ومفيهوش رابط شرائي بتاج الأفيليت.

### شكل ملف المنتج

```jsonc
{
  "slug": "g309",
  "asin": "B0D5WNNTZP",     // لازم يبدأ بـ B0 و 8 خانات
  "dir": "g309",            // المجلد اللي هيتولّد فيه — "/" بيجيب فهرس الجذر
  "images": {
    "from": "img",          // مجلد الصور المصدر
    "hero": "g309-00.jpg",
    "gallery": ["g309-00.jpg", "..."]
  },
  "meta": {
    "brand": "Logitech G309",
    "heroImg": "g309-00.jpg",
    "heroAlt": "...",
    "priceAmount": "2799",
    "titleAr": "...", "titleEn": "...",
    "descAr": "...",  "descEn": "...",
    "ogTitleAr": "...", "ogDescAr": "..."
  },
  "dict": {
    "ar": { "hero.title1": "..." },   // 183 مفتاح
    "en": { "hero.title1": "..." }
  },
  "stats": [
    { "v": "86", "suffix": "g" },     // أربع بلاطات الأرقام الكبيرة
    { "v": "25000", "comma": true },
    { "v": "300", "suffix": "+" },
    { "v": "6" }
  ]
}
```

`build.mjs` يرفض المنتج لو ناقصه حاجة، أو لو `ar` و `en` مختلفين في عدد المفاتيح،
أو لو صورة مش موجودة. ولو اتقفل أي marker فاضي، البناء يفشل بدل ما ينتج صفحة
مكسورة.

> **ليه `stats` موجودة:** الأرقام الكبيرة في شريط الإحصائيات كانت مكتوبة hardcoded
> في `template.html` كأرقام ماوس G309 (‏86g / 25000 / 300+ / 6). العناوين كانت داتا،
> والأرقام لأ — فصفحات اللابتوب والتابلت كانت بتقول «86g» فوق شاشة 15.6 بوصة
> و«25,000» فوق «سنة ضمان». دلوقتي `stats` بتاخد ترتيب `k.weight` و `k.dpi` و
> `k.batt` و `k.btns`. القيمة `text` بتطبع كما هي (‏`6E`، `USB`، `RGB`، `2.4K`)
> لأن `countUp()` بترسم `NaN` على أي قيمة مش رقمية. و`verify.mjs` بيفشل لو بلاطة
> واحدة عرضت رقم بتاع منتج تاني.

> **ملاحظة:** كل صفحة مستقلة تمامًا (HTML + JS + صور + سعرها). سبب كده إن سِكربت
> التحديث يعدّل `price.json` جوّه كل مجلد على حدة، ولو شاركتوا ملف واحد كان خطأ في
> منتج هيبوّظ الباقي.

## أسلوب الكتابة (قواعد المحتوى)

الصفحات صفحات **بيع** — حاجتنا إن الزائر يشتري، والمكسب من العمولات. وده معناه:

1. **نكتب عن الجوانب المشرقة والحقيقية للمنتج**، ونقود بالمواصفات المفيدة
   (البطارية، الشاشة، المعالج، الضمان، الاسترجاع، السعر) بأسلوب إيجابي.
2. **ممنوع نهائيًا الكلام اللي بيسيء للمنتج** أو بيضعف ثقة المشتري، حتى لو كان
   "صدقًا": ممنوع «الصفحة مختصرة»، «مش هنخترع أرقام»، «ملاحظة أمانة»، «التقييم
   مش موثوق»، «بيانات الصفحة متعارضة»، «اسأل البائع الأول». كل دي كانت بتخلي
   الزائر يشك في المنتج نفسه.
3. **من غير تضليل:** بنذكر الحقائق اللي صفحة أمازون أو بيانات المصنّع الرسمية
   بتوثقها. لو في رقم مش متأكدين منه، **بنحذفه أو بنسكت عنه** — مش بنذكره
   سلبيًا ومش بنخترع رقم.
4. **الاستثناءات الصادقة:** الحاجات اللي بتخص قرار الشراء فعلاً بنقولها
   بوضوح وبدون تهويل — زي إن المنتج واي فاي بس (مفيش شريحة)، أو إن الدفع عند
   الاستلام غير متاح — وتقليبها على الحقيقة الموجود (واي فاي نقي أخف وأسعار
   أرخص، والدفع بكل الطرق على صفحة أمازون).
5. **التقييمات:** بنعرض الرقم زي ما هو بدون تحليل سلبي، وبنحوّل القارئ لقراءة
   تقييمات أمازون (دي تريفيق للدفع كمان). لو عينة التقييمات صغيرة، منذكرش
   أننا بنتكلم عنها.

المراجعة مطلوبة قبل أي تغيير محتوى: لو أي جملة ممكن تخلي المشتري يقول "المنتج
ده وحش"، خلّيها بيع.

## إزاي بيشتغل

```
Amazon  ──►  update-price.mjs  ──►  price.json  ──►  index.html (fetch)
                (GitHub Actions)      (commit)        (زرار + كاش 8 ساعات)
```

- المفتاح/التوكن **مش** بيوصل المتصفح — الصفحة بتقرأ `price.json` ساكنة بس.
- لو فشل الجلب: السعر القديم **يفضل معروض** و`stale: true` بتظهر علامة "تعذّر التحديث".
  يعني الصفحة **مبتعرضش** سعر غلط ولا صفر.
- الداتا بتتحدّث كل 4 ساعات، و`localStorage` بيخزّن آخر نسخة 8 ساعات.

## تغييرات سريعة

| عايز تعمل إيه | فين |
|---|---|
| رابط الشراء | `app.js` → `PRODUCT_URL` |
| نص عربي/إنجليزي | `app.js` → `dict.ar` / `dict.en` |
| تكرار الجلب | `.github/workflows/price.yml` → `cron` |
| إزاي بيتقرأ السعر | `scripts/update-price.mjs` → `parsePage()` |
| إزاي بيتطلب السعر من الـAPI | `scripts/update-price.mjs` → `fetchFromApi()` |

## مصدر البيانات

السكربت بيستخدم مصدرين بالترتيب:

1. **Amazon Creators API** (الأساسي) — لو فيه credentials
2. **قراءة صفحة المنتج** (fallback) — لو الـAPI مش متاح أو فشل

```bash
SOURCE=api node scripts/update-price.mjs     # إلزام الـAPI، يفشل بصوت عالي
SOURCE=scrape node scripts/update-price.mjs   # اختبار الـfallback
```

**ليه الـAPI أفضل:** رسمي من أمازون، مش بياخد influence، وبيوصف السعر بسعر الشراء
بدل أي رقم في الصفحة. ومبيهوش SigV4 — هو Bearer token عادي، فمفيش مكتبات.

### تفعيل Creators API

من Associates Central بتاعك هتلاقي `Client ID` و `Client Secret`
(الاسم في الواجهة: **Credential ID** / **Credential Secret**) و **Version**
(`3.2` لمصر لأنها في منطقة EU).

ضيفهم كـ **repository secrets** في GitHub (مش variables — دي أسرار):

| الاسم | القيمة |
|---|---|
| `AMZN_CLIENT_ID` | الـ Credential ID |
| `AMZN_CLIENT_SECRET` | الـ Credential Secret |
| `AMZN_PARTNER_TAG` | الـ tracking id بتاعك، مثل `yourtag-21` |

`AMZN_ASIN` هي **variable** (مش secret) = `B0D5WNNTZP`.

اختبرهم محلياً قبل ما ترفع:

```powershell
$env:AMZN_CLIENT_ID="..."; $env:AMZN_CLIENT_SECRET="..."; $env:AMZN_PARTNER_TAG="yourtag-21"
$env:SOURCE="api"; node scripts/update-price.mjs
```

لازم تشوف `source: creators-api` في الـoutput.

**شرطين لازم يتوفروا:** الحساب يكون مسجّل في برنامج أمازون مصر، و **١٠ عمليات بيع
مؤهلة خلال آخر ٣٠ يوم** عشان الوصول للـAPI يتفتح.

### تفاصيل الـAPI المستخدمة

```
Token : POST https://api.amazon.co.uk/auth/o2/token      (EU، version 3.2)
        { "grant_type":"client_credentials", "scope":"creatorsapi::default", ... }

Items : POST https://creatorsapi.amazon/catalog/v1/getItems
        headers: Authorization: Bearer <token>
                 x-marketplace: www.amazon.eg
        body   : { "itemIds":["B0D5WNNTZP"], "marketplace":"www.amazon.eg",
                   "partnerTag":"...", "condition":"New",
                   "resources":["offersV2.listings.price", ...] }
```

> **ملاحظة:** الـAPI **مفيهوش** resource للتقييم/reviews. عشان كده السكربت بياخد
> السعر والتوفر من الـAPI، وبيحمل آخر قيمة للتقييم من الـscrape قدامها
> (مش بيسيبها `null`).

