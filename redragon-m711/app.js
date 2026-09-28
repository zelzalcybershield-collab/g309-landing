/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0751D11BL?tag=zoq-21';
const STORE_KEY = 'redragon-m711-lang';

const dict = {
  "ar": {
    "nav.tagline": "M711 · أسود",
    "nav.specs": "المواصفات",
    "nav.connect": "سلكي ولا لاسلكي",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ماوس جيمنج · سلكي",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Redragon M711",
    "hero.title2": "COBRA",
    "hero.sub": "ماوس جيمنج سلكي بـ7 أزرار قابلة للبرمجة و12,400 DPI وإضاءة RGB",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#38 في أكثر ماوسات الكمبيوتر مبيعاً على أمازون",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · يُشحن من Amazon.eg",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "الحساسية",
    "hero.chip1v": "12,400 DPI",
    "hero.chip2l": "الأزرار",
    "hero.chip2v": "7 قابلة للبرمجة",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "ادفع كاش عند الباب",
    "trust.delivery": "شحن من أمازون",
    "trust.deliverySub": "يُشحن بواسطة Amazon.eg مباشرة",
    "trust.returns": "إرجاع مرن",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "87% تقييمات إيجابية من أكثر من ألف عميل",
    "k.weight": "12,400 نقطة",
    "k.weightSub": "حساسية بصرية معلنة",
    "k.dpi": "7 أزرار قابلة للبرمجة",
    "k.dpiSub": "كل الأزرار في متناول إيدك",
    "k.batt": "اتصال USB سلكي",
    "k.battSub": "مفيش بطارية ولا شحن",
    "k.btns": "إضاءة خلفية RGB",
    "k.btnsSub": "قابلة للتخصيص",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "حساسية 12,400 DPI",
    "s1.b": "مستشعر بصري بدقة 12,400 نقطة لكل بوصة. تحساسية كافية للألعاب الشائعة، وتديك تحكم أدق في التصويب من الماوسات المبتدئة.",
    "s2.t": "7 أزرار قابلة للبرمجة",
    "s2.b": "سبعة أزرار تقدر تربطها بوظائف مختلفة أثناء اللعب. أزرار جانبية بتوفّر عليك الرجوع للكيبورد في نص الجولة.",
    "s3.t": "إضاءة خلفية RGB",
    "s3.b": "إضاءة خلفية قابلة للتخصيص بتكمّل شكل الماوس على المكتب وبتديك إحساس بليل الجولة. الماوس متوصل من كابل USB.",
    "s4.t": "سلكي — ما فيش بطارية",
    "s4.b": "الكابل جزء من التصميم: ما فيش بطارية تموت في نص الماتش، وما فيش أي احتمال تأخير من الاتصال. بتوصّله وتشتغل على طول.",
    "s5.t": "تصميم مريح للاستخدام الطويل",
    "s5.b": "الشكل مصمم للإيد اليمنى ويوزّع الضغط على إيدك، فتلاقي راحتك في جولات طويلة وميڤات ما بتتعبش بعدها.",
    "s6.t": "خفيف على المكتب",
    "s6.b": "ماوس خفيف بيمنع إيدك من التعب على المكتب، ومتجه للابتوب والكمبيوتر الشخصي عبر منفذ USB.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود مع إضاءة خلفية RGB",
    "t.sensor": "الحساسية",
    "t.sensorV": "12,400 DPI · مستشعر بصري",
    "t.switch": "الأزرار",
    "t.switchV": "7 أزرار قابلة للبرمجة",
    "t.weight": "الوزن",
    "t.weightV": "خفيف الوزن (بدون رقم معلن)",
    "t.size": "الاتصال",
    "t.conn": "التوافق",
    "t.connV": "لابتوب وكمبيوتر شخصي",
    "t.batt": "الإضاءة",
    "t.battV": "RGB خلفية قابلة للتخصيص",
    "t.os": "الاستخدام",
    "t.osV": "جيمنج · اليد اليمنى",
    "t.hand": "يُشحن من",
    "t.handV": "Amazon.eg",
    "t.inbox": "في العلبة",
    "t.inboxV": "الماوس + كابل USB متصل",
    "conn.eyebrow": "سلكي ولا لاسلكي",
    "conn.title": "الفرق بين الماوسين",
    "conn.sub": "الاختيار بينهم بيعتمد على إزاي بتلعب وبتستخدمه",
    "conn.btnLs": "سلكي (زي ده)",
    "conn.btnBt": "لاسلكي",
    "conn.m1l": "زمن الاستجابة",
    "conn.m1Ls": "فوري عبر الكابل",
    "conn.m1Bt": "يعتمد على الاتصال اللاسلكي",
    "conn.m2l": "الطاقة",
    "conn.m2Ls": "مفيش بطارية ولا شحن",
    "conn.m2Bt": "محتاج شحن أو بطارية",
    "conn.m3l": "اللي بيفرقه",
    "conn.m3Ls": "ثبات مضمون من غير انقطاع",
    "conn.m3Bt": "حرية أكبر في الحركة",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الكابل جزء من التصميم: ما فيش بطارية تموت نص الجولة، ولا أي احتمال تأخير من الاتصال. بتوصّله وخلاص.",
    "conn.noteBt": "اللاسلكي مريح وبيخلّيك تتحرك بحرية على المكتب من غير كابل، بس بيحتاج شحن أو بطارية، وزمن الاستجابة ممكن يزيد شوية.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج أصلي من ريدراجون، ويوصلك من أمازون مصر",
    "box.i1": "ماوس Redragon M711 أسود",
    "box.i2": "كابل USB متصل بالماوس",
    "box.i3": "مش محتاج بطارية ولا دونجل استقبال",
    "box.i4": "بيشتغل على طول من غير إعدادات",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Redragon M711 Cobra — ماوس جيمنج سلكي 7 أزرار — أسود",
    "offer.seller": "يُشحن من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "الإرجاع",
    "offer.retV": "حسب سياسة أمازون",
    "offer.buyNow": "اشترِ الآن من أمازون",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "offer.syncLabel": "السعر متزامن تلقائياً من صفحة أمازون",
    "offer.syncStale": "تعذّر التحديث، معروض آخر سعر معروف",
    "offer.instTitle": "خيارات التقسيط",
    "offer.instSub": "تقسيط على فترات مختلفة من خلال بنوك مصر",
    "offer.months": "شهر",
    "offer.p1": "256.33 EGP / شهرياً",
    "offer.p2": "128.17 EGP / شهرياً",
    "offer.p3": "64.08 EGP / شهرياً",
    "offer.p4": "32.04 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج وتقييم 4.4 من 5 بناءً على 8,879 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "7 أزرار قابلة للبرمجة و12,400 DPI",
    "rev.n1": "التحكم",
    "rev.v1": "أفضل من المبتدئين",
    "rev.q2": "إضاءة RGB بتصميم أسود",
    "rev.n2": "الشكل",
    "rev.v2": "مكمّل للمكتب",
    "rev.q3": "سلكي USB من غير بطارية",
    "rev.n3": "الاتصال",
    "rev.v3": "مضمون",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الماوس سلكي ولا لاسلكي؟",
    "faq.a1": "سلكي، بيتوصل بمنفذ USB. مفيش بطارية ولا دونجل استقبال، وبتوصّله ويشتغل على طول.",
    "faq.q2": "ينفع مع أي جهاز؟",
    "faq.a2": "منتج مخصوص للابتوب والكمبيوتر الشخصي، يعني أي جهاز فيه منفذ USB. مفيش نسخة مخصصة للأجهزة اللي مفيهاش منفذ USB عادي.",
    "faq.q3": "يعني إيه 12,400 DPI؟",
    "faq.a3": "معناها عدد النقاط اللي الماوس بيحسّها في كل بوصة. الرقم أعلى = حساسية أعلى وحركة أهدى على الشاشة. 12,400 نقطة لكل بوصة هو الرقم المعلن للمنتج ده.",
    "faq.q4": "إضاءة الـRGB بتتحكم في إزاي؟",
    "faq.a4": "الماوس عليه إضاءة خلفية RGB قابلة للتخصيص. لو عايز تفاصيل عن أوضاع الإضاءة المتاحة، شوف الصور والوصف على صفحة المنتج.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "الدفع عند الاستلام متاح على أمازون مصر للمنتج. كمان ممكن تدفع أونلاين أو بالتقسيط حسب البنك.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع حسب سياسة أمازون مصر المطبّقة على المنتج. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تغيّر الماوس بتاعك؟",
    "cta.sub": "اطلبه من أمازون مصر — 7 أزرار و12,400 DPI وإضاءة RGB",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج Redragon M711 Cobra. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا M711",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN"
  },
  "en": {
    "nav.tagline": "M711 · Black",
    "nav.specs": "Specs",
    "nav.connect": "Wired vs Wireless",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming Mouse · Wired",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Redragon M711",
    "hero.title2": "COBRA",
    "hero.sub": "Wired gaming mouse with 7 programmable buttons, 12,400 DPI and RGB lighting",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#38 in best-selling computer mice on Amazon",
    "hero.priceLabel": "Price incl. tax",
    "hero.vat": "Price includes VAT · Ships from Amazon.eg",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See instalments",
    "hero.chip1l": "Sensitivity",
    "hero.chip1v": "12,400 DPI",
    "hero.chip2l": "Buttons",
    "hero.chip2v": "7 programmable",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Pay at the door",
    "trust.delivery": "Ships from Amazon",
    "trust.deliverySub": "Dispatched directly by Amazon.eg",
    "trust.returns": "Flexible returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "87% positive ratings from 1K+ customers",
    "k.weight": "12,400 counts",
    "k.weightSub": "Published optical sensitivity",
    "k.dpi": "7 programmable buttons",
    "k.dpiSub": "All within reach of your hand",
    "k.batt": "Wired USB",
    "k.battSub": "No battery, no charging",
    "k.btns": "RGB backlighting",
    "k.btnsSub": "Customisable",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "12,400 DPI sensitivity",
    "s1.b": "An optical sensor rated at 12,400 counts per inch — enough for the games most people play, and more precise aiming than a basic office mouse.",
    "s2.t": "7 programmable buttons",
    "s2.b": "Seven buttons you can map to different functions while you play. The side buttons save you reaching for the keyboard mid-round.",
    "s3.t": "Customisable RGB backlighting",
    "s3.b": "A customisable backlight that finishes the look on your desk and adds a bit of atmosphere to a late session. The mouse is wired over USB.",
    "s4.t": "Wired — no battery",
    "s4.b": "The cable is part of the design: there's no battery to die mid-match and no chance of input lag from the connection. Plug it in and play.",
    "s5.t": "Ergonomic for long sessions",
    "s5.b": "The shape is built for the right hand and spreads pressure across it, so you stay comfortable through long queues and long matches.",
    "s6.t": "Light on the desk",
    "s6.b": "A lightweight mouse that keeps hand fatigue down, and it works with laptops and desktops over plain USB.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Black with RGB backlighting",
    "t.sensor": "Sensitivity",
    "t.sensorV": "12,400 DPI · optical sensor",
    "t.switch": "Buttons",
    "t.switchV": "7 programmable buttons",
    "t.weight": "Weight",
    "t.weightV": "Lightweight (no figure published)",
    "t.size": "Connection",
    "t.conn": "Compatibility",
    "t.connV": "Laptop and desktop",
    "t.batt": "Lighting",
    "t.battV": "Customisable RGB backlight",
    "t.os": "Use",
    "t.osV": "Gaming · right-handed",
    "t.hand": "Ships from",
    "t.handV": "Amazon.eg",
    "t.inbox": "In the box",
    "t.inboxV": "The mouse + attached USB cable",
    "conn.eyebrow": "Wired vs wireless",
    "conn.title": "How the two differ",
    "conn.sub": "The choice comes down to how you play and how you use it",
    "conn.btnLs": "Wired (this one)",
    "conn.btnBt": "Wireless",
    "conn.m1l": "Response time",
    "conn.m1Ls": "Instant, over the cable",
    "conn.m1Bt": "Depends on the wireless link",
    "conn.m2l": "Power",
    "conn.m2Ls": "No battery, no charging",
    "conn.m2Bt": "Needs charging or batteries",
    "conn.m3l": "The trade-off",
    "conn.m3Ls": "Steady, with no interruptions",
    "conn.m3Bt": "More freedom to move",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "The cable is part of the design: no battery dies mid-match, and no chance of lag from the connection. Plug it in and you're set.",
    "conn.noteBt": "Wireless is tidier and lets you move freely without a cable, but it needs charging or batteries, and response time can be slightly higher.",
    "box.title": "What arrives in the box",
    "box.sub": "Genuine Redragon, shipped by Amazon.eg",
    "box.i1": "Redragon M711 mouse, black",
    "box.i2": "USB cable attached to the mouse",
    "box.i3": "No battery and no receiver dongle needed",
    "box.i4": "Works straight away, no setup",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Redragon M711 Cobra — Wired Gaming Mouse, 7 Buttons — Black",
    "offer.seller": "Ships from Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "Per Amazon's policy",
    "offer.buyNow": "Buy now on Amazon",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "offer.syncLabel": "Price syncs automatically from the Amazon listing",
    "offer.syncStale": "Update failed — showing the last known price",
    "offer.instTitle": "Instalment options",
    "offer.instSub": "Pay over time through Egyptian banks",
    "offer.months": "months",
    "offer.p1": "EGP 256.33 / mo",
    "offer.p2": "EGP 128.17 / mo",
    "offer.p3": "EGP 64.08 / mo",
    "offer.p4": "EGP 32.04 / mo",
    "offer.instNote": "Figures are indicative and depend on your bank and the active offers",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specifications and a 4.4 out of 5 rating from 8,879 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "7 programmable buttons at 12,400 DPI",
    "rev.n1": "Control",
    "rev.v1": "A step up from basics",
    "rev.q2": "RGB lighting on a black body",
    "rev.n2": "Looks",
    "rev.v2": "Finishes the desk",
    "rev.q3": "Wired USB, no battery",
    "rev.n3": "Connection",
    "rev.v3": "Dependable",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is the mouse wired or wireless?",
    "faq.a1": "Wired, into a USB port. There's no battery and no receiver dongle — plug it in and it works.",
    "faq.q2": "Will it work with any device?",
    "faq.a2": "It's made for laptops and desktops — any device with a USB port. There is no separate low-latency or console variant listed here.",
    "faq.q3": "What does 12,400 DPI mean?",
    "faq.a3": "It's how many points the sensor registers per inch of movement. A higher number means higher sensitivity and smaller, steadier movements on screen. 12,400 counts per inch is the published figure for this mouse.",
    "faq.q4": "How do I control the RGB lighting?",
    "faq.a4": "The mouse has customisable RGB backlighting. For the specific lighting modes available, check the photos and the description on the product page.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Cash on delivery is available on Amazon.eg for this item. You can also pay online or in instalments depending on your bank.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns follow the Amazon.eg policy that applies to this product. Check the return policy on the product page before you buy.",
    "cta.title": "Ready for a proper upgrade?",
    "cta.sub": "Order it on Amazon.eg — 7 buttons, 12,400 DPI and RGB lighting",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Redragon M711 Cobra. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the M711",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN"
  }
};

let lang = 'ar';

/* ---------- i18n ---------- */
function t(key) {
  return (dict[lang] && dict[lang][key]) ?? (dict.ar[key] ?? key);
}

function applyLang(next) {
  lang = next;
  localStorage.setItem(STORE_KEY, lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = lang === 'ar'
    ? 'Redragon M711 — ماوس جيمنج سلكي بـ7 أزرار و12,400 DPI'
    : 'Redragon M711 — Wired Gaming Mouse with 7 Buttons and 12,400 DPI';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'ع';
  renderMode(currentMode);
  renderGallery();
  renderLive();
}

/* ---------- live price (price.json) ----------
   price.json is written by scripts/update-price.mjs on a cron
   (see .github/workflows/price.yml). The page only reads it,
   so no secret ever ships to the browser.                        */

const PRICE_URL = 'price.json';
const LIVE_KEY = 'redragon-m711-live';
const LIVE_TTL = 8 * 60 * 60 * 1000; // 8h — keep a copy a bit longer than the cron

let live = null; // last known good data, or null if price.json has never loaded

const fmtPrice = (n) =>
  Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

function fmtDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-EG', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    }).format(d);
  } catch {
    return d.toISOString().slice(0, 16).replace('T', ' ');
  }
}

/* substitutes {n} reviews / {r} rating inside i18n strings */
function applyTokens() {
  if (!live) return;
  const n = Number(live.reviews) || 0;
  const r = Number(live.rating) || 0;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const raw = t(el.dataset.i18n);
    if (!raw.includes('{')) return;
    el.textContent = raw
      .replace(/\{n\}/g, n.toLocaleString('en-US'))
      .replace(/\{r\}/g, r.toFixed(1));
  });
}

function renderLive() {
  if (!live) return;

  if (live.price != null) {
    document.querySelectorAll('[data-bind="price"]').forEach((el) => { el.textContent = fmtPrice(live.price); });
  }
  if (live.rating != null) {
    document.querySelectorAll('[data-bind="rating"]').forEach((el) => { el.textContent = Number(live.rating).toFixed(1); });
    document.querySelectorAll('[data-needs-rating]').forEach((el) => { el.classList.remove('hidden'); });
  }
  // No rating -> the star rows stay hidden. They used to be hardcoded to 4.9 in
  // the markup, so every product that had no rating of its own quietly showed the
  // G309 score. A product with no reviews should show no stars.
  if (live.updatedAt) {
    const label = document.querySelector('[data-bind="updatedAt"]');
    if (label) label.textContent = fmtDate(live.updatedAt) + (live.stale ? ' ' + t('offer.syncStale') : '');
  }

  // stock badges
  document.querySelectorAll('[data-bind="stock"]').forEach((el) => {
    const out = live.inStock === false;
    el.textContent = out
      ? t(el.dataset.stockOut || 'hero.outOfStock')
      : t(el.dataset.stockIn || 'hero.stock');
    el.classList.toggle('border-emerald-400/30', !out);
    el.classList.toggle('bg-emerald-500/10', !out);
    el.classList.toggle('text-emerald-300', !out);
    el.classList.toggle('border-rose-400/30', out);
    el.classList.toggle('bg-rose-500/10', out);
    el.classList.toggle('text-rose-300', out);
  });

  applyTokens();
}

function initLivePrice() {
  // 1) show the cached copy immediately so the page never flashes a stale hardcoded price
  try {
    const cached = JSON.parse(localStorage.getItem(LIVE_KEY) || 'null');
    if (cached && Date.now() - new Date(cached.checkedAt).getTime() < LIVE_TTL) {
      live = cached;
      renderLive();
    }
  } catch { /* ignore bad cache */ }

  // 2) then refresh from price.json
  fetch(PRICE_URL, { cache: 'no-cache' })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
    .then((data) => {
      if (!data || data.price == null) return;
      live = data;
      localStorage.setItem(LIVE_KEY, JSON.stringify(data));
      renderLive();
    })
    .catch(() => { /* keep whatever we already had */ });
}

/* ---------- connectivity demo ---------- */
let currentMode = 'ls';
const MODES = {
  ls: ['conn.m1Ls', 'conn.m2Ls', 'conn.m3Ls', 'conn.noteLs'],
  bt: ['conn.m1Bt', 'conn.m2Bt', 'conn.m3Bt', 'conn.noteBt'],
};

function renderMode(mode) {
  currentMode = mode;
  const keys = MODES[mode];

  document.querySelectorAll('.modeBtn').forEach((btn) => {
    const active = btn.dataset.mode === mode;
    btn.className = 'modeBtn rounded-lg px-5 py-2.5 text-sm font-extrabold transition ' +
      (active ? 'bg-white text-ink-950' : 'text-slate-400 hover:text-white');
  });

  ['m1', 'm2', 'm3'].forEach((id, i) => {
    document.getElementById(id).textContent = t(keys[i]);
  });
  document.getElementById('connNote').textContent = t(keys[3]);

  // animation speed follows the mode
  const fast = document.getElementById('packetGroup');
  const slow = document.getElementById('pulseGroup');
  const cur = document.getElementById('cursorGroup');
  [fast, slow, cur].forEach((g) => {
    g.style.display = 'none';
    g.style.animation = 'none';
  });
  const show = mode === 'ls' ? fast : slow;
  const curDur = mode === 'ls' ? '0.6s' : '2.2s';
  show.style.display = '';
  show.style.animation = `marquee ${curDur} linear infinite`;
  cur.style.display = '';
  cur.style.animation = `marquee ${curDur} linear infinite`;
  cur.style.opacity = mode === 'ls' ? '1' : '.25';
}

/* ---------- count up ---------- */
function countUp(el) {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();
  const fmt = (v) => (el.dataset.format === 'comma' ? Math.round(v).toLocaleString('en-US') : String(Math.round(v)));

  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * eased) + (el.dataset.suffix || '') + (el.dataset.prefix || '');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const els = [...document.querySelectorAll('[data-count]')];
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        countUp(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  els.forEach((el) => io.observe(el));
}

/* ---------- coupon copy ---------- */
function initCopy() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(code);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const label = btn.querySelector('span:last-child');
      const prev = label.textContent;
      label.textContent = lang === 'ar' ? 'تم النسخ ✓' : 'Copied ✓';
      setTimeout(() => { label.textContent = prev; }, 1600);
    });
  });
}

/* ---------- buy links ---------- */
function initBuy() {
  document.querySelectorAll('[data-buy]').forEach((a) => { a.href = PRODUCT_URL; });
}

/* ---------- smooth scroll offset for the fixed nav ---------- */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

/* ---------- gallery ----------
   Real product shots pulled from the Amazon listing and served from ./img, so
   the page never hotlinks Amazon. Amazon hands these over in the order the
   seller listed them, so the order is kept as-is. */
const GAL_FILES = ["img/m711-00.jpg","img/m711-01.jpg","img/m711-02.jpg","img/m711-03.jpg","img/m711-04.jpg","img/m711-05.jpg","img/m711-06.jpg","img/m711-07.jpg","img/m711-08.jpg"];
let galItems = [];

function renderGallery() {
  galItems.forEach((b, k) => {
    b.setAttribute('aria-label', `${t('gal.label')} ${k + 1}`);
  });
}

function initGallery() {
  const grid = document.querySelector('[data-gal-grid]');
  if (!grid) return;

  const total = GAL_FILES.length;
  const box = document.querySelector('[data-gal-box]');
  const boxImg = box?.querySelector('[data-gal-box-img]');
  let i = 0;
  let opener = null;

  galItems = GAL_FILES.map((src, n) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className =
      'group relative overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg shadow-black/30 ' +
      'transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-2xl ' +
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400';
    b.innerHTML =
      `<img src="${src}" alt="" width="1200" height="1200" loading="lazy" decoding="async" ` +
      'class="aspect-square w-full select-none object-contain">' +
      '<span class="pointer-events-none absolute inset-0 grid place-items-center bg-ink-950/0 ' +
      'opacity-0 transition duration-300 group-hover:bg-ink-950/25 group-hover:opacity-100">' +
      '<span class="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink-950 shadow-lg">' +
      '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
      'stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg>' +
      '</span></span>';
    b.addEventListener('click', () => { i = n; openBox(); });
    grid.appendChild(b);
    return b;
  });

  function show(n) {
    i = (n + total) % total;
    if (boxImg) boxImg.src = GAL_FILES[i];
  }

  function openBox() {
    if (!box) return;
    opener = document.activeElement;
    show(i);
    box.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    box.querySelector('[data-gal-box-close]')?.focus();
  }
  function closeBox() {
    if (!box) return;
    box.classList.add('hidden');
    document.body.style.overflow = '';
    opener?.focus();
  }

  box?.querySelector('[data-gal-box-close]')?.addEventListener('click', closeBox);
  box?.querySelector('[data-gal-box-prev]')?.addEventListener('click', () => show(i - 1));
  box?.querySelector('[data-gal-box-next]')?.addEventListener('click', () => show(i + 1));
  box?.addEventListener('click', (e) => { if (e.target === box) closeBox(); });

  document.addEventListener('keydown', (e) => {
    const open = box && !box.classList.contains('hidden');
    if (!open) return;
    if (e.key === 'Escape') closeBox();
    else if (e.key === 'ArrowLeft') show(i - 1);
    else if (e.key === 'ArrowRight') show(i + 1);
  });

  renderGallery();
}

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(localStorage.getItem(STORE_KEY) || 'ar');

  document.getElementById('langBtn').addEventListener('click', () => {
    applyLang(lang === 'ar' ? 'en' : 'ar');
  });

  document.querySelectorAll('.modeBtn').forEach((btn) => {
    btn.addEventListener('click', () => renderMode(btn.dataset.mode));
  });

  initBuy();
  initCopy();
  initCounters();
  initScroll();
  initGallery();
  initLivePrice();
});
