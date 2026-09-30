/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0HJB5H9NM?tag=zoq-21';
const STORE_KEY = 'iphone-pro-burgundy-lang';

const dict = {
  "ar": {
    "nav.tagline": "APPLE · BURGUNDY",
    "nav.specs": "المواصفات",
    "nav.connect": "الألوان والسعات",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ايفون 18 برو · بورغندي · 2TB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "iPhone 18",
    "hero.title2": "Pro",
    "hero.sub": "شاشة Super Retina XDR 6.3 بوصة وكاميرا Fusion 48 ميجا بفتحة متغيرة وصولاً لـ8x زووم بجودة بصرية — بسعة 2 تيرا بايت.",
    "hero.reviews": "{n} تقييم على أمازون",
    "hero.rank": "إصدار 2TB · لون بورغندي · 5G",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "6.3\" Super Retina XDR",
    "hero.chip2l": "الكاميرا",
    "hero.chip2v": "48MP Fusion · 8x",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "حسب الخيارات المعروضة على صفحة أمازون",
    "trust.delivery": "تنفيذ من أمازون",
    "trust.deliverySub": "Shipper / Seller: Amazon.eg",
    "trust.returns": "إرجاع مجاني",
    "trust.returnsSub": "خلال المدة المسموحة وبدون رسوم شحن",
    "trust.prime": "شريحتين اتصال",
    "trust.primeSub": "SIM + eSIM · 5G · Unlocked",
    "k.weight": "شاشة 6.3 بوصة",
    "k.weightSub": "Super Retina XDR",
    "k.dpi": "كاميرا 48MP",
    "k.dpiSub": "Fusion بفتحة متغيرة",
    "k.batt": "زووم 8x",
    "k.battSub": "بجودة بصرية",
    "k.btns": "سعة 2TB",
    "k.btnsSub": "أقصى سعة في العائلة",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شاشة 6.3 بوصة Super Retina XDR",
    "s1.b": "شاشة أدق وأكثر إشراقاً مع طبقة مضادة للانعكاس، وProMotion حتى 120Hz. التمرير والفيديو والألعاب توضح بسلاسة أعلى.",
    "s2.t": "هيكل ألومنيوم بلون موحّد",
    "s2.b": "هيكل ألمنيوم بالكامل مع زجاج خلفي بنفس لون الجهاز لشكل متناسق. اللون البورغندي متوفر في تشكيلة أربعة ألوان.",
    "s3.t": "درع خزفي من الأمام والخلف",
    "s3.b": "Ceramic Shield خلفي وCeramic Shield 2 أمامي بمقاومة خدش أفضل 3 مرات من ايفون 16 برو.",
    "s4.t": "كاميرا Fusion 48 ميجا",
    "s4.b": "كاميرا رئيسية بفتحة متغيرة بتحسّن التصوير في الضوء المنخفض وعمق المجال، مع تحكمات Pro مخصصة وزوم 8x بجودة بصرية.",
    "s5.t": "كاميرا أمامية Center Stage 18 ميجا",
    "s5.b": "بتكيّر الإطار لوحدة لتسع ناس أكتر في الكادر، مع تسجيل Dual Capture من الأمام والخلف معاً.",
    "s6.t": "5G وشريحتين وUSB-C",
    "s6.b": "اتصال 5G مع شريحة + eSIM، ومنفذ USB-C للشحن والنقل. الجهاز شغال بأي شبكة (Unlocked).",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "بورغندي",
    "t.sensor": "المعالج",
    "t.sensorV": "Apple Silicon · iOS",
    "t.switch": "الذاكرة",
    "t.switchV": "2TB تخزين",
    "t.weight": "الشاشة",
    "t.weightV": "6.3\" · Super Retina XDR · ProMotion 120Hz",
    "t.size": "مساحة التخزين",
    "t.connV": "5G · Dual SIM · Wi-Fi · USB-C",
    "t.conn": "الاتصال",
    "t.batt": "البطارية",
    "t.battV": "All-day battery life",
    "t.os": "نظام التشغيل",
    "t.osV": "iOS",
    "t.hand": "يُنفَّذ من",
    "t.handV": "Amazon.eg مباشرة",
    "t.inbox": "الحماية",
    "t.inboxV": "Ceramic Shield 2 + خلفي",
    "conn.eyebrow": "الألوان والسعات",
    "conn.title": "اللي قدامك تحديداً",
    "conn.sub": "عائلة iPhone 18 Pro — كل نسخة بتتباع كمنتج منفصل على أمازون",
    "conn.btnLs": "بورغندي 2TB",
    "conn.btnBt": "نسخ تانية",
    "conn.m1l": "السعة",
    "conn.m1Ls": "2TB — أقصى سعة",
    "conn.m1Bt": "512GB و1TB",
    "conn.m2l": "اللون",
    "conn.m2Ls": "بورغندي",
    "conn.m2Bt": "أسود · فضي · Glacier",
    "conn.m3l": "الاتصال",
    "conn.m3Ls": "5G · Dual SIM · USB-C",
    "conn.m3Bt": "نفس المنافذ والاتصالات",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "النسخة المعروضة دي هي 2TB باللون البورغندي — أقصى سعة تخزين متاحة في عائلة iPhone 18 Pro.",
    "conn.noteBt": "قبل ما تحدد، اتأكد من السعة واللون على صفحة أمازون نفسها — كل لون وسعة بيتباعوا كمنتج منفصل بسعره الخاص.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع ويُنفَّذ من أمازون مصر",
    "box.i1": "ايفون 18 برو — 2TB — لون بورغندي",
    "box.i2": "كابل شحن USB-C من Apple",
    "box.i3": "توثيق وضمان حسب سياسة البائع على الصفحة",
    "box.i4": "المحتوى الكامل للعلبة — مؤكد من صفحة أمازون",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "iPhone 18 Pro — 2TB — بورغندي (Amazon.eg)",
    "offer.seller": "Shipper / Seller: Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "الإرجاع",
    "offer.retV": "مجاني خلال المدة المسموحة",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على المواصفات كما وردت من صفحة أمازون",
    "rev.count": "5G · Dual SIM · USB-C",
    "rev.q1": "شاشة ProMotion حتى 120Hz",
    "rev.n1": "الشاشة",
    "rev.v1": "6.3\" XDR",
    "rev.q2": "كاميرا Fusion بفتحة متغيرة",
    "rev.n2": "الكاميرا",
    "rev.v2": "48MP · 8x",
    "rev.q3": "سعة 2TB",
    "rev.n3": "التخزين",
    "rev.v3": "2TB",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "نسخة 256 جيجا؟",
    "faq.a1": "الاتساعات المتاحة لعائلة iPhone 18 Pro على الصفحة: 512GB و1TB و2TB — مفيش نسخة 256 جيجا. الرابط هنا للنسخة 2TB بالبورغندي.",
    "faq.q2": "بيشتغل بالشريحة المصرية؟",
    "faq.a2": "أيوه. الموديل 5G مع شريحة + eSIM (Dual SIM) والجهاز Unlocked مش مقفول على شركة، فبينفع مع أي شبكة.",
    "faq.q3": "الكاميرا كويسة؟",
    "faq.a3": "كاميرا Fusion خلفية 48 ميجا بفتحة متغيرة مع تحكمات Pro وزوم 8x بجودة بصرية، وكاميرا أمامية Center Stage 18 ميجا بتسجيل Dual Capture. ده اللي موثّق في صفحة أمازون.",
    "faq.q4": "البطارية بتكمل كام؟",
    "faq.a4": "Apple بتوصفها إنها all-day battery — والمدة الفعلية بتختلف حسب الاستخدام. أرقام أكتر على صفحة أمازون.",
    "faq.q5": "ينفع أدفع كاش عند الاستلام؟",
    "faq.a5": "وسايل الدفع والتقسيط المتاحة بتظهر على صفحة أمازون نفسها وقت الدفع — صفحتنا مبتعرضش تفاصيل مالية.",
    "faq.q6": "الضمان بيشتغل في مصر؟",
    "faq.a6": "حسب سياسة البائع على صفحة أمازون مصر. راجع تفاصيل الضمان والإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تجربه؟",
    "cta.sub": "اطلبه من أمازون مصر — ايفون 18 برو 2TB بورغندي بشاشة 6.3 بوصة وكاميرا Fusion",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط للـiPhone 18 Pro (2TB بورغندي). الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "الألوان والسعات",
    "footer.l3": "لماذا iPhone 18 Pro",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الموبايل ده ليه",
    "aud.title": "اللي الـiPhone 18 Pro يناسبهم",
    "aud.sub": "موبايل Pro بشاشة XDR وكاميرا Fusion وسعة 2TB — للاستخدام اليومي والسفر والتصوير",
    "aud.a1t": "اللي بيصور كتير",
    "aud.a1b": "كاميرا 48 ميجا بفتحة متغيرة وزوم 8x بجودة بصرية وتسجيل من الكاميرتين معاً. فرق حقيقي في فيديو وصور أب مستشفى.. أب أضيئ.",
    "aud.a2t": "اللي محتاج مساحة تخزين ضخمة",
    "aud.a2b": "2 تيرا بايت تكفيك لصور وفيديو 4K وسنين من الملفات من غير ما تفكر مرتين في المساحة.",
    "aud.a3t": "المسافرين واللي بيغيّروا شبكات",
    "aud.a3b": "شريحة + eSIM واتصال 5G وجهاز Unlocked — تنقل بين شبكات وسفر من غير تفكير.",
    "aud.a4t": "اللي بيحب اللون البورغندي",
    "aud.a4b": "لون جديد في تشكيلة الألوان جنب الأسود والفضي وGlacier — مع هيكل ألومنيوم بلون موحّد.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس."
  },
  "en": {
    "nav.tagline": "APPLE · BURGUNDY",
    "nav.specs": "Specs",
    "nav.connect": "Colours & sizes",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "iPhone 18 Pro · Burgundy · 2TB",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "iPhone 18",
    "hero.title2": "Pro",
    "hero.sub": "A 6.3-inch Super Retina XDR display and a 48MP Fusion camera with variable aperture, up to 8x optical-quality zoom — in 2TB.",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "2TB · Burgundy · 5G",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Display",
    "hero.chip1v": "6.3\" Super Retina XDR",
    "hero.chip2l": "Camera",
    "hero.chip2v": "48MP Fusion · 8x",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Per the options shown on the Amazon page",
    "trust.delivery": "Fulfilled by Amazon",
    "trust.deliverySub": "Shipper / Seller: Amazon.eg",
    "trust.returns": "Free returns",
    "trust.returnsSub": "Within the allowed period and no shipping fees",
    "trust.prime": "Dual SIM",
    "trust.primeSub": "SIM + eSIM · 5G · Unlocked",
    "k.weight": "6.3-inch display",
    "k.weightSub": "Super Retina XDR",
    "k.dpi": "48MP camera",
    "k.dpiSub": "Fusion with variable aperture",
    "k.batt": "8x zoom",
    "k.battSub": "Optical-quality",
    "k.btns": "2TB storage",
    "k.btnsSub": "The largest in the family",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "6.3-inch Super Retina XDR display",
    "s1.b": "Sharper and brighter with an antireflection coating and ProMotion up to 120Hz. Scrolling, video and games feel noticeably smoother.",
    "s2.t": "Aluminum unibody with matching colour",
    "s2.b": "A full aluminum body with color-matched back glass for a uniform look. Burgundy is part of a four-colour lineup.",
    "s3.t": "Ceramic Shield front and back",
    "s3.b": "Ceramic Shield on the back and Ceramic Shield 2 on the front, with 3x better scratch resistance than the iPhone 16 Pro.",
    "s4.t": "48MP Fusion camera",
    "s4.b": "A main camera with variable aperture for better low-light shots and depth of field, custom Pro controls, and 8x optical-quality zoom.",
    "s5.t": "18MP Center Stage front camera",
    "s5.b": "Auto-adjusts the frame to fit more people, with front and rear Dual Capture video at the same time.",
    "s6.t": "5G, dual SIM and USB-C",
    "s6.b": "5G with a SIM + eSIM combo, plus a USB-C port for charging and transfer. Unlocked for any network.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Burgundy",
    "t.sensor": "Chip",
    "t.sensorV": "Apple Silicon · iOS",
    "t.switch": "Memory",
    "t.switchV": "2TB storage",
    "t.weight": "Display",
    "t.weightV": "6.3\" · Super Retina XDR · ProMotion 120Hz",
    "t.size": "Storage",
    "t.connV": "5G · Dual SIM · Wi-Fi · USB-C",
    "t.conn": "Connectivity",
    "t.batt": "Battery",
    "t.battV": "All-day battery life",
    "t.os": "Operating system",
    "t.osV": "iOS",
    "t.hand": "Fulfilled by",
    "t.handV": "Amazon.eg directly",
    "t.inbox": "Protection",
    "t.inboxV": "Ceramic Shield 2 + back",
    "conn.eyebrow": "Colours & sizes",
    "conn.title": "What you are actually looking at",
    "conn.sub": "The iPhone 18 Pro family — every variant sells as its own listing on Amazon",
    "conn.btnLs": "Burgundy 2TB",
    "conn.btnBt": "Other variants",
    "conn.m1l": "Storage",
    "conn.m1Ls": "2TB — the largest",
    "conn.m1Bt": "512GB and 1TB",
    "conn.m2l": "Colour",
    "conn.m2Ls": "Burgundy",
    "conn.m2Bt": "Black · Silver · Glacier",
    "conn.m3l": "Connectivity",
    "conn.m3Ls": "5G · Dual SIM · USB-C",
    "conn.m3Bt": "Same ports and radios",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "This listing is the 2TB Burgundy — the largest storage offered in the iPhone 18 Pro family.",
    "conn.noteBt": "Before you decide, confirm the storage and colour on the Amazon page itself — each colour and size sells as its own listing at its own price.",
    "box.title": "What arrives in the box",
    "box.sub": "Listed and fulfilled by amazon.eg",
    "box.i1": "iPhone 18 Pro — 2TB — Burgundy",
    "box.i2": "Apple USB-C charging cable",
    "box.i3": "Documentation and warranty per the seller's policy on the listing",
    "box.i4": "Full box contents — confirmed on the Amazon page",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "iPhone 18 Pro — 2TB — Burgundy (Amazon.eg)",
    "offer.seller": "Shipper / Seller: Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "Free within the allowed period",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the specifications as listed on the Amazon page",
    "rev.count": "5G · Dual SIM · USB-C",
    "rev.q1": "ProMotion display up to 120Hz",
    "rev.n1": "Display",
    "rev.v1": "6.3\" XDR",
    "rev.q2": "Fusion camera with variable aperture",
    "rev.n2": "Camera",
    "rev.v2": "48MP · 8x",
    "rev.q3": "2TB storage",
    "rev.n3": "Storage",
    "rev.v3": "2TB",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is there a 256GB version?",
    "faq.a1": "The sizes offered for the iPhone 18 Pro family on this listing are 512GB, 1TB and 2TB — there is no 256GB. The link here is the 2TB Burgundy.",
    "faq.q2": "Does it work with a local SIM?",
    "faq.a2": "Yes. The model is 5G with a SIM + eSIM combo (dual SIM), and it is unlocked, so it works on any network.",
    "faq.q3": "Is the camera good?",
    "faq.a3": "A 48MP Fusion rear camera with variable aperture, Pro controls and 8x optical-quality zoom, plus an 18MP Center Stage front camera with Dual Capture. That is what the Amazon listing documents.",
    "faq.q4": "How long does the battery last?",
    "faq.a4": "Apple rates it as all-day battery life, and real time varies with usage. Figures are on the Amazon page.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "The payment and instalment options available appear on the Amazon page itself at checkout — this page does not state financial details.",
    "faq.q6": "Does the warranty work in Egypt?",
    "faq.a6": "Per the seller's policy on the amazon.eg listing. Check the warranty and return details on the product page before buying.",
    "cta.title": "Ready to try it?",
    "cta.sub": "Order it on Amazon.eg — an iPhone 18 Pro 2TB Burgundy with a 6.3-inch screen and a Fusion camera",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the iPhone 18 Pro (2TB Burgundy). Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "Colours & sizes",
    "footer.l3": "Why iPhone 18 Pro",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the iPhone 18 Pro suits",
    "aud.sub": "A Pro phone with an XDR display, a Fusion camera and 2TB — for daily use, travel and photography",
    "aud.a1t": "People who shoot a lot",
    "aud.a1b": "A 48MP camera with variable aperture, 8x optical-quality zoom and capturing from both cameras at once. A real difference in photos and video in dim light.",
    "aud.a2t": "People who need huge storage",
    "aud.a2b": "2TB covers years of photos, 4K video and files without ever thinking about space.",
    "aud.a3t": "Travellers and network switchers",
    "aud.a3b": "A SIM + eSIM combo, 5G and an unlocked device — moving between networks or countries without a second thought.",
    "aud.a4t": "Fans of the burgundy look",
    "aud.a4b": "A new colour in the lineup beside Black, Silver and Glacier, over an aluminum body with a matching tone.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card - every price, instalment, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price, instalments and any current offers - all of it lives on Amazon's page only."
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
    ? 'iPhone 18 Pro — 2TB بورغندي | شاشة Super Retina XDR 6.3 وكاميرا Fusion 48 ميجا'
    : 'iPhone 18 Pro — 2TB Burgundy | 6.3-inch Super Retina XDR and a 48MP Fusion camera';

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
const LIVE_KEY = 'iphone-pro-burgundy-live';
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
const GAL_FILES = ["img/iph-00.jpg","img/iph-01.jpg","img/iph-02.jpg","img/iph-03.jpg","img/iph-04.jpg","img/iph-05.jpg","img/iph-06.jpg","img/iph-07.jpg","img/iph-08.jpg","img/iph-09.jpg"];
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
