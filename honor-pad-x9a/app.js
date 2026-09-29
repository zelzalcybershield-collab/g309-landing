/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0F54TX745?tag=zoq-21';
const STORE_KEY = 'honor-pad-x9a-lang';

const dict = {
  "ar": {
    "nav.tagline": "HONOR PAD X9a · رمادي",
    "nav.specs": "المواصفات",
    "nav.connect": "العلبة والمحتوى",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "تابلت 11.5 بوصة · نسخة LTE",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "HONOR Pad",
    "hero.title2": "X9a",
    "hero.sub": "شاشة 11.5 بوصة 2.5K وأربع مكبرات صوت و8+128 جيجا — مع غطاء قلاب وضمان سنة",
    "hero.reviews": "{n} تقييم على أمازون",
    "hero.rank": "نسخة LTE — اتصال بالشريحة والواي فاي",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · يتنفذ بواسطة Amazon.eg",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "11.5\" 2.5K",
    "hero.chip2l": "الاتصال",
    "hero.chip2v": "LTE + Wi-Fi",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "كاش عند الباب",
    "trust.codSub": "الدفع عند الاستلام متوفر",
    "trust.delivery": "شحن مجاني سريع",
    "trust.deliverySub": "تشحن من Amazon.eg",
    "trust.returns": "إرجاع مجاني",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "غطاء قلاب + ضمان سنة",
    "trust.primeSub": "متضمنين في العلبة",
    "k.weight": "الشاشة",
    "k.weightSub": "11.5 بوصة · 2508×1504",
    "k.dpi": "مكبرات الصوت",
    "k.dpiSub": "4 سماعات صوت محيطي",
    "k.batt": "التخزين",
    "k.battSub": "8+128 جيجا بتوسعة ذكية",
    "k.btns": "الاتصال",
    "k.btnsSub": "LTE + Wi-Fi · دعم قلم",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة الفنية الكاملة",
    "s1.t": "شاشة 11.5 بوصة بدقة 2.5K",
    "s1.b": "شاشة بدقة 2508×1504 ونسبة الشاشة إلى الجسم 86% وحواف أضيق، مع مزايا حماية العين المتعددة. النص أوضح والصور أنقى والقراءة طويلة مريحة.",
    "s2.t": "أربع مكبرات صوت",
    "s2.b": "أربع مكبرات مع محسن صوت تقدم نغمات قوية وتجربة محيطية غامرة، ورفع مستوى الصوت حسب الشركة بنسبة حتى 200%.",
    "s3.t": "Snapdragon 685",
    "s3.b": "معالج سناب دراغون 685 لتشغيل سلس للتطبيقات والفيديو والألعاب الخفيفة، مع أندرويد 15 وماجيك UI 9.0.",
    "s4.t": "8+128 مع توسعة ذكية",
    "s4.b": "ذاكرة 8 جيجا رام و128 جيجا تخزين، وتقنية HONOR OS Turbo بتسمح بتوسعة الرام ذكياً إلى 8+8 جيجا لأداء سلاسة أكبر.",
    "s5.t": "أندرويد 15 مع Google Kids",
    "s5.b": "نظام أندرويد 15 كامل مع Google Kids المثبت مسبقاً: تحكم الوالدين بوقت الاستخدام وإدارة المحتوى للأطفال.",
    "s6.t": "LTE ودعم القلم",
    "s6.b": "نسخة تدعم شريحة الاتصال مع الواي فاي، والجهاز بيقبل قلم نشط (بيتباع منفصل) وبتيجي في العلبة غطاء قلاب.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي",
    "t.sensor": "المعالج",
    "t.sensorV": "Snapdragon 685",
    "t.switch": "الذاكرة",
    "t.switchV": "8GB + توسعة ذكية 8GB",
    "t.weight": "الشاشة",
    "t.weightV": "11.5\" · 2508×1504 · 2.5K",
    "t.size": "مساحة التخزين",
    "t.connV": "LTE · Wi-Fi · Bluetooth",
    "t.conn": "الاتصال",
    "t.batt": "البطارية",
    "t.battV": "بطارية مدمجة تدوم لوقت طويل — التفاصيل على صفحة المنتج",
    "t.os": "نظام التشغيل",
    "t.osV": "Android 15 · Magic UI 9.0",
    "t.hand": "يُنفَّذ من",
    "t.handV": "Amazon.eg",
    "t.inbox": "في العلبة",
    "t.inboxV": "ضمان سنة · دعم القلم",
    "conn.eyebrow": "العلبة والمحتوى",
    "conn.title": "إيه اللي موش ناقص عليك",
    "conn.sub": "الجزء المضمون من العرض وسعر الملحقات الزيادة — بص قبل ما تدفع",
    "conn.btnLs": "عرض أمازون (LTE)",
    "conn.btnBt": "جهاز لوحده",
    "conn.m1l": "الغطاء القلاب",
    "conn.m1Ls": "متضمن في العلبة (مذكور في اسم المنتج نفسه)",
    "conn.m1Bt": "مش متضمن لو اشتريت من غير عرض",
    "conn.m2l": "القلم النشط",
    "conn.m2Ls": "الجهاز بيدعمه لكنه مش متضمن — بيتباع منفصل",
    "conn.m2Bt": "مش متضمن",
    "conn.m3l": "الاتصال",
    "conn.m3Ls": "LTE — شريحة اتصال + واي فاي",
    "conn.m3Bt": "نسخة واي فاي بس من غير شريحة",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "النسخة اللي قدامك هي LTE: بتشتغل بشريحة اتصال وكمان واي فاي، وبتيجي بغطاء قلاب جوّه العلبة وبضمان سنة. بخصوص القلم: الجهاز بيدعمه لكن صفحة المنتج مش بتحطه جوّه العلبة.",
    "conn.noteBt": "لو جالك عرض من غير ملحقات أو نسخة واي فاي، الغطاء والقلم بيبقوا بحساب منفصل. اتأكد من محتويات العرض على صفحة أمازون قبل الشراء.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع ويُنفَّذ من أمازون مصر",
    "box.i1": "تابلت هونر باد X9a رمادي — نسخة LTE (8+128)",
    "box.i2": "غطاء قلاب متضمن",
    "box.i3": "ضمان لمدة عام من الشركة المصنعة",
    "box.i4": "الشاحن والكابل حسب الباقة المعلنة في صفحة أمازون",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "HONOR Pad X9a — Snapdragon 685 / 8+128 / LTE — رمادي",
    "offer.seller": "تُشحن وتُنفَّذ مباشرة من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "شحن مجاني · استلام غدًا حسب صفحة أمازون",
    "offer.ret": "الإرجاع",
    "offer.retV": "إرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "اشترِ الآن من أمازون",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "offer.syncLabel": "السعر متزامن تلقائياً من صفحة أمازون",
    "offer.syncStale": "تعذّر التحديث، معروض آخر سعر معروف",
    "offer.instTitle": "خيارات التقسيط",
    "offer.instSub": "تقسيط على فترات مختلفة من خلال بنوك مصر",
    "offer.months": "شهر",
    "offer.p1": "1,300.00 EGP / شهرياً",
    "offer.p2": "650.00 EGP / شهرياً",
    "offer.p3": "433.33 EGP / شهرياً",
    "offer.p4": "325.00 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "Android 15 · Magic UI 9.0",
    "rev.q1": "شاشة 11.5 بوصة بدقة 2.5K",
    "rev.n1": "الشاشة",
    "rev.v1": "2508×1504",
    "rev.q2": "8+128 مع توسعة ذكية",
    "rev.n2": "الذاكرة",
    "rev.v2": "8+8 ذكية",
    "rev.q3": "نسخة LTE",
    "rev.n3": "الاتصال",
    "rev.v3": "شريحة + Wi-Fi",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الفرق بين نسخة LTE والواي فاي؟",
    "faq.a1": "النسخة دي هي LTE: تقدر تحط فيها شريحة اتصال وتشتغل ببيانات الموبايل في أي مكان، وكمان واي فاي. النسخة الواي فاي بس بتبقى من غير شريحة وتحتاج شبكة. اسم الموديل في صفحة أمازون بيوضح إن دي نسخة LTE.",
    "faq.q2": "القلم جاي في العلبة؟",
    "faq.a2": "لا. الجهاز بيدعم قلم نشط لكنه مش متضمن في العلبة — بيتباع منفصل. اللي متضمن حسب صفحة المنتج هو الغطاء القلاب وضمان سنة من الشركة المصنعة.",
    "faq.q3": "إيه اللي مضمون في العلبة بالظبط؟",
    "faq.a3": "صفحة المنتج بتذكر غطاء قلاب متضمن وضمان سنة من الشركة المصنعة. بخصوص الشاحن والكابل، المحتوى بيظهر في صفحة أمازون نفسها — اتأكد منه في العرض قبل ما تطلب.",
    "faq.q4": "ينفع أدفع كاش عند الاستلام؟",
    "faq.a4": "أيوه. صفحة أمازون مصر بتعرض «الدفع عند الاستلام متوفر» على المنتج ده. في بعض العروض السريعة بتبقى البطاقة بس، فدايم شوف خيارات الدفع على صفحة المنتج قبل ما تأكد الطلب.",
    "faq.q5": "البطارية بتسع كام بالظبط؟",
    "faq.a5": "صفحة المنتج مش بتحدد رقم سعة ثابت واضح، وفي جدل بين تقييمات المشترين على الرقم. فمش بنعدم رقم في الصفحة دي — جربها في أول استخدام ولو موضوع البطارية حساس عندك اسأل البائع قبل الشراء.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع حسب سياسة أمازون مصر على المنتج، وبيبدأ عادةً بطلب رجوع مجاني. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تجربته؟",
    "cta.sub": "اطلبه من أمازون مصر — هونر باد X9a بشاشة 11.5 بوصة 2.5K مع غطاء قلاب في العلبة",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج هونر باد X9a. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا HONOR",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الجهاز ده ليه",
    "aud.title": "اللي هيفيد معاه هونر باد X9a",
    "aud.sub": "تابلت شاشة كبيرة بجودة 2.5K واتصال LTE — للدراسة والترفيه والاستخدام اليومي",
    "aud.a1t": "اللي بيذاكر وبيقرا كتير",
    "aud.a1b": "شاشة 11.5 بوصة بدقة 2508×1504 ومزايا حماية للعين، ومع LTE تقدر تحضّر من أي مكان من غير ما تدوّر على واي فاي.",
    "aud.a2t": "العيلة والأطفال",
    "aud.a2b": "أندرويد 15 كامل مع Google Kids المثبت: رقابة أبوية على وقت الاستخدام والمحتوى، وشاشة كبيرة تناسب الفيديوهات والكورسات.",
    "aud.a3t": "اللي شغّال على الترفيه",
    "aud.a3b": "أربع مكبرات صوت بتجربة محيطية على شاشة 2.5K — فيديوهات سلسة وألعاب خفيفة ومكالمات فيديو واضحة.",
    "aud.a4t": "اللي بيدوّر على قيمة مقابل السعر",
    "aud.a4b": "في 15,600 جنيه بتاخد شاشة 2.5K و8+128 وتوسعة ذكية وLTE مع غطاء قلاب وضمان سنة، باعتماد أمازون مصر نفسها."
  },
  "en": {
    "nav.tagline": "HONOR PAD X9a · Gray",
    "nav.specs": "Specs",
    "nav.connect": "In the box",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "11.5-inch tablet · LTE version",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HONOR Pad",
    "hero.title2": "X9a",
    "hero.sub": "An 11.5-inch 2.5K screen, four speakers and 8+128GB — with a flip cover and a 1-year warranty",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "LTE version — works on a SIM and Wi-Fi",
    "hero.priceLabel": "Price incl. tax",
    "hero.vat": "Price includes VAT · Fulfilled by Amazon.eg",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See instalments",
    "hero.chip1l": "Display",
    "hero.chip1v": "11.5\" 2.5K",
    "hero.chip2l": "Connectivity",
    "hero.chip2v": "LTE + Wi-Fi",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "COD is available",
    "trust.delivery": "Fast free shipping",
    "trust.deliverySub": "Ships from Amazon.eg",
    "trust.returns": "Free returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "Flip cover + 1-yr warranty",
    "trust.primeSub": "Included in the box",
    "k.weight": "Display",
    "k.weightSub": "11.5 inches · 2508×1504",
    "k.dpi": "Speakers",
    "k.dpiSub": "4 speakers, surround sound",
    "k.batt": "Storage",
    "k.battSub": "8+128GB with smart expansion",
    "k.btns": "Connectivity",
    "k.btnsSub": "LTE + Wi-Fi · pen support",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "11.5-inch 2.5K display",
    "s1.b": "A 2508×1504 screen with an 86% screen-to-body ratio, slimmer bezels and multiple eye-comfort features. Sharper text, cleaner images and comfortable long reading.",
    "s2.t": "Four speakers",
    "s2.b": "Four speakers with a sound booster deliver punchy lows and an immersive surround feel, with volume boosted up to 200% per the manufacturer.",
    "s3.t": "Snapdragon 685",
    "s3.b": "Qualcomm Snapdragon 685 for smooth apps, video and light gaming, running Android 15 with Magic UI 9.0.",
    "s4.t": "8+128 with smart expansion",
    "s4.b": "8GB of RAM and 128GB of storage, with HONOR OS Turbo extending RAM intelligently to 8+8GB for smoother multitasking.",
    "s5.t": "Android 15 with Google Kids",
    "s5.b": "Full Android 15 with Google Kids pre-installed: parental control over screen time and content management for children.",
    "s6.t": "LTE and pen support",
    "s6.b": "A version that takes a SIM card plus Wi-Fi. The tablet supports an active pen (sold separately), and a flip cover ships in the box.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Gray",
    "t.sensor": "Chipset",
    "t.sensorV": "Snapdragon 685",
    "t.switch": "Memory",
    "t.switchV": "8GB + 8GB smart expansion",
    "t.weight": "Display",
    "t.weightV": "11.5\" · 2508×1504 · 2.5K",
    "t.size": "Storage",
    "t.connV": "LTE · Wi-Fi · Bluetooth",
    "t.conn": "Connectivity",
    "t.batt": "Battery",
    "t.battV": "Built-in battery that lasts a long time — see the listing for details",
    "t.os": "Operating system",
    "t.osV": "Android 15 · Magic UI 9.0",
    "t.hand": "Fulfilled by",
    "t.handV": "Amazon.eg",
    "t.inbox": "In the box",
    "t.inboxV": "1-yr warranty · pen support",
    "conn.eyebrow": "What's in the box",
    "conn.title": "What isn't missing",
    "conn.sub": "The guaranteed part of the offer and the price of the extras — glance before you pay",
    "conn.btnLs": "Amazon offer (LTE)",
    "conn.btnBt": "Tablet only",
    "conn.m1l": "Flip cover",
    "conn.m1Ls": "Included in the box (stated in the product name itself)",
    "conn.m1Bt": "Not included if you buy without a bundle",
    "conn.m2l": "Active pen",
    "conn.m2Ls": "Supported, but not included — sold separately",
    "conn.m2Bt": "Not included",
    "conn.m3l": "Connectivity",
    "conn.m3Ls": "LTE — a SIM and Wi-Fi",
    "conn.m3Bt": "Wi-Fi-only version, no SIM",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "This is the LTE version: it runs on a SIM card and Wi-Fi, ships with a flip cover in the box and carries a 1-year warranty. On the pen: the tablet supports one, but the listing does not include it in the box.",
    "conn.noteBt": "Buy without the bundle or a Wi-Fi-only version and the cover and pen are extra. Check the box contents on the Amazon listing before you order.",
    "box.title": "What arrives",
    "box.sub": "Listed and fulfilled by Amazon.eg",
    "box.i1": "HONOR Pad X9a tablet, gray — LTE version (8+128)",
    "box.i2": "Flip cover included",
    "box.i3": "1-year manufacturer warranty",
    "box.i4": "Charger and cable per the bundle stated on the Amazon listing",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "HONOR Pad X9a — Snapdragon 685 / 8+128 / LTE — Gray",
    "offer.seller": "Shipped and fulfilled directly by Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free shipping · next-day delivery per the Amazon listing",
    "offer.ret": "Returns",
    "offer.retV": "Free returns per Amazon's policy",
    "offer.buyNow": "Buy now on Amazon",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "offer.syncLabel": "Price syncs automatically from the Amazon listing",
    "offer.syncStale": "Update failed — showing the last known price",
    "offer.instTitle": "Instalment options",
    "offer.instSub": "Pay over time through Egyptian banks",
    "offer.months": "months",
    "offer.p1": "EGP 1,300.00 / mo",
    "offer.p2": "EGP 650.00 / mo",
    "offer.p3": "EGP 433.33 / mo",
    "offer.p4": "EGP 325.00 / mo",
    "offer.instNote": "Figures are indicative and depend on your bank and the active offers",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the manufacturer's published specifications",
    "rev.count": "Android 15 · Magic UI 9.0",
    "rev.q1": "11.5-inch 2.5K display",
    "rev.n1": "Display",
    "rev.v1": "2508×1504",
    "rev.q2": "8+128 with smart expansion",
    "rev.n2": "Memory",
    "rev.v2": "8+8 smart",
    "rev.q3": "LTE version",
    "rev.n3": "Connectivity",
    "rev.v3": "SIM + Wi-Fi",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What is the difference between the LTE and Wi-Fi versions?",
    "faq.a1": "This is the LTE version: it accepts a SIM card and works on mobile data anywhere, plus Wi-Fi. The Wi-Fi-only version has no SIM tray and needs a network. The model name on the Amazon listing makes the LTE version clear.",
    "faq.q2": "Is the pen in the box?",
    "faq.a2": "No. The tablet supports an active pen but it is not included — it is sold separately. What the listing includes is the flip cover and a 1-year manufacturer warranty.",
    "faq.q3": "What exactly is guaranteed in the box?",
    "faq.a3": "The listing states a flip cover is included along with a 1-year manufacturer warranty. As for the charger and cable, the contents are shown on the Amazon listing itself — check them in the offer before you order.",
    "faq.q4": "Can I pay cash on delivery?",
    "faq.a4": "Yes. The Amazon Egypt listing shows \"cash on delivery available\" for this product. Some quick deals are card only, so always check the payment options on the product page before confirming the order.",
    "faq.q5": "What is the exact battery capacity?",
    "faq.a5": "The listing does not state one clear capacity figure and buyers' reviews disagree on the number. So we do not print one here — try it in early use, and if battery life matters a lot to you, ask the seller before buying.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns follow the Amazon.eg policy for this product, usually starting with a free return request. Check the return policy on the product page before ordering.",
    "cta.title": "Ready to try it?",
    "cta.sub": "Order it on Amazon.eg — a HONOR Pad X9a with an 11.5-inch 2.5K screen and its flip cover in the box",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the HONOR Pad X9a. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why HONOR",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the HONOR Pad X9a suits",
    "aud.sub": "A large 2.5K tablet with LTE connectivity — for study, entertainment and daily use",
    "aud.a1t": "Heavy readers and studiers",
    "aud.a1b": "An 11.5-inch 2508×1504 screen with eye-comfort features, and with LTE you can prep from anywhere without hunting for Wi-Fi.",
    "aud.a2t": "Families and kids",
    "aud.a2b": "Full Android 15 with Google Kids pre-installed: parental control over screen time and content, on a big screen that suits videos and courses.",
    "aud.a3t": "People into entertainment",
    "aud.a3b": "Four speakers in an immersive setup on a 2.5K screen — smooth videos, light games and clear video calls.",
    "aud.a4t": "Buyers chasing value",
    "aud.a4b": "For EGP 15,600 you get a 2.5K screen, 8+128 with smart expansion, LTE, a flip cover and a 1-year warranty, backed by Amazon.eg itself."
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
    ? 'هونر باد X9a (8+128) — تابلت 11.5 بوصة 2.5K بغطاء قلاب'
    : 'HONOR Pad X9a (8+128) — 11.5-inch 2.5K tablet with flip cover';

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
const LIVE_KEY = 'honor-pad-x9a-live';
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
  // A string that interpolates the rating is only meaningful when there is one
  // to interpolate. Substituting 0 instead printed "0 reviews - 0.0 out of 5"
  // on every product whose rating the scraper could not read, which reads as a
  // broken page rather than as an absent rating. Hide the element instead; it
  // comes back with renderLive's data-needs-rating pass when a rating lands.
  const hasRating = live.rating != null;
  const n = Number(live.reviews) || 0;
  const r = Number(live.rating) || 0;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const raw = t(el.dataset.i18n);
    if (!raw.includes('{')) return;
    if (!hasRating) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
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
