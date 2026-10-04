/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0C4TZPXSP?tag=zoq-21';
const STORE_KEY = 'hiksemi-ssd-128-lang';

const dict = {
  "ar": {
    "nav.tagline": "128GB · 460MB/s",
    "nav.specs": "المواصفات",
    "nav.connect": "SSD ولا HDD",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ذاكرة SSD · 128GB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "HIKSEMI WAVE(S)",
    "hero.title2": "SSD · 128GB",
    "hero.sub": "ذاكرة صلبة ساتا اقتصادية تسرّع جهازك: قراءة حتى 460 ميقا/ثانية وتركيب مباشر في أي لابتوب أو كمبيوتر",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "من HIKSEMI — علامة الذواكر من عائلة Hikvision — متوفر على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "السعة",
    "hero.chip1v": "128GB",
    "hero.chip2l": "القراءة",
    "hero.chip2v": "460MB/s",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفها عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام متاح",
    "trust.codSub": "لكل عملية شراء على أمازون مصر",
    "trust.delivery": "متوفر على أمازون مصر",
    "trust.deliverySub": "مواعيد التوصيل على صفحة المنتج",
    "trust.returns": "استرجاع 15–30 يوم",
    "trust.returnsSub": "حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ضمان طويل",
    "trust.primeSub": "3–5 سنوات حسب المذكور في اللستنغ",
    "k.weight": "السعة",
    "k.weightSub": "128 جيجا تكفي النظام والبرامج الأساسية",
    "k.dpi": "القراءة",
    "k.dpiSub": "حتى 460 ميقا/ثانية",
    "k.batt": "الحرارة المعتادة",
    "k.battSub": "لحد 70 درجة مئوية",
    "k.btns": "الضمان",
    "k.btnsSub": "مذكور في اللستنغ بفترتين",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "سرعة تحسها أول ما تقلب",
    "s1.b": "قراءة حتى 460 ميقا/ثانية وكتابة حتى 370 ميقا/ثانية — النظام يقلب بسرعة والملفات بتفتح من غير الانتظار المعهود في الهاردات القديمة.",
    "s2.t": "ساتا III بأسعار مدروسة",
    "s2.b": "واجهة ساتا 3 بسرعة 6 جيجا/ثانية ومتوافقة أيضاً مع ساتا 2 — تعمل على أي جهاز بيتقل فيه ساتا بنفس المقاس 2.5 بوصة.",
    "s3.t": "خيار العائلة الاقتصادي",
    "s3.b": "هذه النسخة 128GB الخيار الاقتصادي لنظام التشغيل والبرامج الأساسية، بذواكر 3D NAND وأجزاء ميكانيكية صفر — هادية وتقاوم الاهتزازات.",
    "s4.t": "يصلح للابتوب والمكتبي",
    "s4.b": "مخصصة لسطح المكتب واللابتوب وكذلك أجهزة ماك وبي سي، بتشتغل في درجات حرارة من 0 إلى 70 درجة مئوية — تركيب داخلي مباشر.",
    "s5.t": "اختيار صريح للميزانية",
    "s5.b": "لو عايز أسرع ترقية بأقل تكلفة ومساحة كافية للنظام والملفات الأساسية، 128 جيجا دي النقطة المثالية للبداية من غير إسراف.",
    "s6.t": "ضمان مذكور بشفافية",
    "s6.b": "اللستنغ بذكر ضمان في قائمة المميزات (3 سنوات) وضمان في الجدول الفني (5 سنوات) — راجع صفحة المنتج الرسمية للتأكد من الرقم النهائي المطبق على نسختك.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "السعة",
    "t.colorV": "128GB",
    "t.sensor": "النوع",
    "t.sensorV": "سوليد ستيت 2.5 بوصة",
    "t.switch": "الواجهة",
    "t.switchV": "ساتا 3 · 6 جيجا/ثانية",
    "t.weight": "القراءة",
    "t.weightV": "حتى 460 ميقا/ثانية",
    "t.size": "الكتابة",
    "t.conn": "التوافق",
    "t.connV": "لابتوب · مكتبي · ماك وبي سي",
    "t.batt": "الذاكرة",
    "t.battV": "3D NAND · 128GB",
    "t.os": "الضمان",
    "t.osV": "3–5 سنوات حسب المذكور",
    "t.hand": "درجة التشغيل",
    "t.handV": "0–70 درجة مئوية",
    "t.inbox": "في العلبة",
    "t.inboxV": "الذاكرة + دليل التركيب",
    "conn.eyebrow": "SSD ولا HDD",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "ترقية من هارد ميكانيكي لسوليد ستيت — الفرق واضح اليوم الأول",
    "conn.btnLs": "SSD (دي)",
    "conn.btnBt": "HDD تقليدي",
    "conn.m1l": "السرعة",
    "conn.m1Ls": "قراءة/كتابة حتى 460/370 ميقا/ثانية تقريباً",
    "conn.m1Bt": "100 ميقا/ثانية تقريباً وأقل بالملفات الصغيرة",
    "conn.m2l": "الضوضاء والحرارة",
    "conn.m2Ls": "مفيش أجزاء متحركة — أهدأ وأبرد",
    "conn.m2Bt": "أقراص دوارة بتسمعها وتسلخ الحرارة أكتر",
    "conn.m3l": "الأنسب لـ",
    "conn.m3Ls": "نظام التشغيل والبرامج الرئيسية",
    "conn.m3Bt": "أرشفة الملفات الكبيرة والنسخ الاحتياطي",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "السوليد ستيت بياخد السرعة لمرحلة مختلفة: الجهاز يقلب في ثواني، والبرامج تفتح بتناعم. لو جهازك بيبطأ على الهارد القديم، هذي أول ترقية تعملها وبتشع بالفرق من أول دقيقة.",
    "conn.noteBt": "الهارد الميكانيكي فيه أجزاء متحركة ورخيص لكل جيجا — مناسب للتخزين البارد والنسخ الاحتياطي، لكنه مش مناسب لنظام التشغيل لو عايز سرعة فعلية. كثيرون يستخدموا الاثنين مع بعض: SSD للنظام وHDD للأرشفة.",
    "box.title": "اللي هيوصلك",
    "box.sub": "ذاكرة أصلية جاهزة للتركيب، متوفرة على أمازون مصر",
    "box.i1": "HIKSEMI SSD 128GB",
    "box.i2": "دليل التركيب",
    "box.i3": "تصميم أسود خفيف",
    "box.i4": "من عائلة WAVE(S)",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "HIKSEMI WAVE(S) 128GB — SSD ساتا 2.5 بوصة",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15–30 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات الذاكرة وتقييم 4.0 من 5 على أمازون مصر",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "قراءة حتى 460 ميقا/ث",
    "rev.n1": "السرعة",
    "rev.v1": "فرق محسوس",
    "rev.q2": "سعر اقتصادي",
    "rev.n2": "التكلفة",
    "rev.v2": "مناسبة للبداية",
    "rev.q3": "تركيب ساتا قياسي",
    "rev.n3": "السهولة",
    "rev.v3": "في كل الأجهزة",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بتشتغل على أي جهاز؟",
    "faq.a1": "على أي لابتوب أو كمبيوتر مكتبي بيتقل فيه ذاكرة داخلية بنفس مقاس 2.5 بوصة وواجهة ساتا — وتدعم بجانب البي سي أجهزة ماك حسب صفحة اللستنغ.",
    "faq.q2": "128 جيجا حتكون كفاية؟",
    "faq.a2": "الذاكرة دي مثالية لنظام التشغيل والبرامج الأساسية. ولو محتاج مساحة أكبر لمكتبة كبيرة، صفحة النسخة 512 جيجا من نفس العائلة عندنا على الموقع، ويبقى أكيد تراجع الاستخدام اللي محتاجه الأول.",
    "faq.q3": "المقاس هو نفس مقاس الهارد القديم؟",
    "faq.a3": "أيوا — 2.5 بوصة عشان تجلس في المكان نفسه وتوصلك بنفس كابل ساتا في غالبية الأجهزة.",
    "faq.q4": "الضمان كم سنة؟",
    "faq.a4": "اللستنغ بذكر ضمان 3 سنوات في قائمة المميزات و5 سنوات في الجدول الفني — فالأرقام تختلف بين قسائم الصفحة، ودايماً خليك راجع صفحة المنتج الرسمية بنفسك للتأكد من التفاصيل المطبقة على نسختك.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تسرّع جهازك بأقل تكلفة؟",
    "cta.sub": "اطلب HIKSEMI SSD 128GB من أمازون مصر — 2.5 بوصة ساتا",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لذاكرة HIKSEMI SSD. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا HIKSEMI",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الذاكرة دي ليه",
    "aud.title": "اللي هيستفيد منها",
    "aud.sub": "ترقية صغيرة بتكلفة بسيطة تخلي جهازك يرجع أسرع من يوم ما كان جديد",
    "aud.a1t": "أصحاب الأجهزة القديمة",
    "aud.a1b": "اللابتوب اللي بيفتح ببطء والكمبيوتر اللي بيعلق — نقل نظام التشغيل على سوليد ستيت بيفرق بشكل واضح من أول دقيقة.",
    "aud.a2t": "الموظفين والعاملين عن بُعد",
    "aud.a2b": "فتح الملفات والعروض الضخمة والبرامج الثقيلة بتناعم، من غير طفرات صبر على الهارد القديم.",
    "aud.a3t": "الطلاب",
    "aud.a3b": "بسعر معقول تقدر تصلح جهاز الدراسة أو اللابتوب، وذاكرة 128 جيجا تكفي الكتب والملفات والمشاريع الأساسية.",
    "aud.a4t": "اللي بيفكر في البدء بسوليد ستيت",
    "aud.a4b": "لو دي أول تجربة لك مع سوليد ستيت، 128 جيجا اختيار أذكى للخطوة الأولى — التكلفة المنخفضة تخليك تجرب الفرق بثمن أقل.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "128GB · 460MB/s",
    "nav.specs": "Specs",
    "nav.connect": "SSD vs HDD",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "SSD drive · 128GB",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HIKSEMI WAVE(S)",
    "hero.title2": "SSD · 128GB",
    "hero.sub": "An affordable SATA solid-state drive that speeds up your machine: reads up to 460MB/s and slots into any laptop or desktop",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "From HIKSEMI — the storage brand from the Hikvision family — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Capacity",
    "hero.chip1v": "128GB",
    "hero.chip2l": "Read",
    "hero.chip2v": "460MB/s",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery available",
    "trust.codSub": "For your purchase on Amazon.eg",
    "trust.delivery": "Available on Amazon.eg",
    "trust.deliverySub": "Delivery dates on the product page",
    "trust.returns": "15–30 day returns",
    "trust.returnsSub": "Per Amazon's policy for this item",
    "trust.prime": "Long warranty",
    "trust.primeSub": "3–5 years as stated on the listing",
    "k.weight": "Capacity",
    "k.weightSub": "128GB covers the OS and essential apps",
    "k.dpi": "Read",
    "k.dpiSub": "Up to 460MB/s",
    "k.batt": "Operating temp",
    "k.battSub": "Up to 70°C",
    "k.btns": "Warranty",
    "k.btnsSub": "Two figures on the listing",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Speed you feel at boot",
    "s1.b": "Reads up to 460MB/s and writes up to 370MB/s — the system boots fast and files open without the familiar waits of an old drive.",
    "s2.t": "SATA III, budget-minded",
    "s2.b": "A SATA 3 interface at 6Gb/s, also compatible with SATA 2 — it works in any machine that takes a 2.5-inch SATA drive.",
    "s3.t": "The value pick of the family",
    "s3.b": "This 128GB version is the budget option for the OS and core apps, built on 3D NAND with zero moving parts — quiet and vibration-resistant.",
    "s4.t": "Fits laptops and desktops",
    "s4.b": "Specified for desktops, laptops and Mac/PC platforms, rated to run between 0 and 70°C — a direct internal install.",
    "s5.t": "An honest budget choice",
    "s5.b": "If you want the fastest upgrade for the least money with enough space for the OS and essentials, 128GB is the sweet spot to start without overspending.",
    "s6.t": "Warranty, stated transparently",
    "s6.b": "The listing mentions 3 years in the feature bullets and 5 years in the technical table — so the figures differ across the page, always confirm the final terms on the official product page for your unit.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Capacity",
    "t.colorV": "128GB",
    "t.sensor": "Type",
    "t.sensorV": "2.5\" solid state",
    "t.switch": "Interface",
    "t.switchV": "SATA III · 6Gb/s",
    "t.weight": "Read",
    "t.weightV": "Up to 460MB/s",
    "t.size": "Write",
    "t.conn": "Compatibility",
    "t.connV": "Laptop · Desktop · Mac & PC",
    "t.batt": "Flash",
    "t.battV": "3D NAND · 128GB",
    "t.os": "Warranty",
    "t.osV": "3–5 years as stated",
    "t.hand": "Operating range",
    "t.handV": "0–70°C",
    "t.inbox": "In the box",
    "t.inboxV": "Drive + installation guide",
    "conn.eyebrow": "SSD vs HDD",
    "conn.title": "The difference that matters",
    "conn.sub": "Moving from a mechanical drive to solid state — you feel it on day one",
    "conn.btnLs": "SSD (this one)",
    "conn.btnBt": "Traditional HDD",
    "conn.m1l": "Speed",
    "conn.m1Ls": "Up to ~460/370MB/s read/write",
    "conn.m1Bt": "~100MB/s and less on small files",
    "conn.m2l": "Noise & heat",
    "conn.m2Ls": "No moving parts — quieter and cooler",
    "conn.m2Bt": "Spinning platters you hear and more heat",
    "conn.m3l": "Best for",
    "conn.m3Ls": "OS and core apps",
    "conn.m3Bt": "Big-file archives and backups",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "Solid state takes speed to another level: the machine boots within seconds and apps feel snappy. If your device lags on an old drive, it's the first upgrade you make and you'll notice it right away.",
    "conn.noteBt": "A mechanical drive has moving parts and costs less per gigabyte — ideal for cold storage and backups, but not for running the OS if you want real speed. Many people run both: an SSD for the system and an HDD for archiving.",
    "box.title": "What arrives",
    "box.sub": "An original drive, ready to install, available on Amazon.eg",
    "box.i1": "HIKSEMI SSD 128GB",
    "box.i2": "Installation guide",
    "box.i3": "Light black design",
    "box.i4": "WAVE(S) family",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "HIKSEMI WAVE(S) 128GB — 2.5\" SATA SSD",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15–30 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Drive specs and a 4.0 out of 5 rating on amazon.eg",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "Reads up to 460MB/s",
    "rev.n1": "Speed",
    "rev.v1": "Noticeable jump",
    "rev.q2": "Budget price",
    "rev.n2": "Cost",
    "rev.v2": "Easy to start",
    "rev.q3": "Standard SATA install",
    "rev.n3": "Simplicity",
    "rev.v3": "Any machine",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Does it work in any machine?",
    "faq.a1": "Any laptop or desktop that takes an internal drive in the same 2.5-inch size with a SATA interface — and besides PC, the listing notes Mac support too.",
    "faq.q2": "Is 128GB enough?",
    "faq.a2": "This drive is ideal for the OS and essential apps. If you need more room for a large library, the 512GB version of the same family is covered on our other page.",
    "faq.q3": "Is it the same size as my old drive?",
    "faq.a3": "Yes — 2.5 inches, so it sits in the same bay and plugs into the same SATA cable in most machines.",
    "faq.q4": "How long is the warranty?",
    "faq.a4": "The listing mentions 3 years in the feature bullets and 5 years in the technical table — the figures differ between sections, so always double-check the official product page for the exact terms on your unit.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to speed up your machine on a budget?",
    "cta.sub": "Order the HIKSEMI SSD 128GB on Amazon.eg — 2.5-inch SATA",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the HIKSEMI SSD. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why HIKSEMI",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who gets the most from it",
    "aud.sub": "A small upgrade at a small price that makes an ordinary machine feel new again",
    "aud.a1t": "Owners of older machines",
    "aud.a1b": "The laptop that boots slowly and the desktop that stutters — moving the OS onto solid state makes a clear difference from the first minute.",
    "aud.a2t": "Office and remote workers",
    "aud.a2b": "Heavy files, large presentations and big apps open smoothly, without the grind of an old drive.",
    "aud.a3t": "Students",
    "aud.a3b": "For a fair price you can revive a study laptop, and 128GB covers your notes, files and core projects.",
    "aud.a4t": "People trying solid state for the first time",
    "aud.a4b": "If this is your first SSD, 128GB is the smartest first step — a longer warranty and a smaller investment to test the difference.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and cash on delivery is available - every price, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price and any current offers - all of it lives on Amazon's page only.",
    "nav.all": "All Products"
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
    ? 'HIKSEMI SSD 128GB — ساتا 2.5 بوصة، قراءة حتى 460 ميقا/ثانية'
    : 'HIKSEMI SSD 128GB — 2.5" SATA, up to 460MB/s read';

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

/* ---------- live data (price.json) ----------
   price.json is written by scripts/update-price.mjs on a cron
   (see .github/workflows/price.yml). The page only reads it,
   so no secret ever ships to the browser. The pages no longer
   render prices — price.json now feeds the rating and stock
   badges only.                                            */

const PRICE_URL = 'price.json';
const LIVE_KEY = 'hiksemi-ssd-128-live';
const LIVE_TTL = 8 * 60 * 60 * 1000; // 8h — keep a copy a bit longer than the cron

let live = null; // last known good data, or null if price.json has never loaded

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

  if (live.rating != null) {
    document.querySelectorAll('[data-bind="rating"]').forEach((el) => { el.textContent = Number(live.rating).toFixed(1); });
    document.querySelectorAll('[data-needs-rating]').forEach((el) => { el.classList.remove('hidden'); });
  }
  // No rating -> the star rows stay hidden. They used to be hardcoded to 4.9 in
  // the markup, so every product that had no rating of its own quietly showed the
  // G309 score. A product with no reviews should show no stars.

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
  // 1) show the cached rating/review/stock data immediately, then refresh
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
const GAL_FILES = ["img/hiksemi-ssd-128-01.jpg","img/hiksemi-ssd-128-02.jpg"];
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
  initCounters();
  initScroll();
  initGallery();
  initLivePrice();
});
