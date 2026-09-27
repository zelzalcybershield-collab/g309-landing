# Logitech G309 — Landing Page

صفحة هبوط لمنتج Logitech G309 LIGHTSPEED، عربي/إنجليزي، مع **سعر يتحدّث تلقائياً** من صفحة أمازون.

```
index.html            الصفحة
app.js                الترجمة + الوضع التفاعلي + قراءة السعر
price.json            السعر/التقييم/التوفر (بيتحدّث أوتوماتيك)
scripts/update-price.mjs   Creators API، مع fallback لقراءة الصفحة
.github/workflows/price.yml  يجدول التشغيل كل 4 ساعات
```

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
git commit -m "landing page"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```

بعدها من **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.

### تفعيل التحديث التلقائي

1. **Settings → Actions → General → Workflow permissions → Read and write**
2. **Settings → Secrets and variables → Actions → New repository variable**
   - الاسم: `AMZN_ASIN` · القيمة: `B0D5WNNTZP`
   - (اختياري: لو غيّرت الدومين غيّر `PRODUCT_URL` في `scripts/update-price.mjs`)

الـworkflow بيشتغل كل 4 ساعات، وبيعمل commit لـ`price.json` بس لو السعر اتغيّر.

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

