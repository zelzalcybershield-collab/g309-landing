/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B091J67GN4?tag=zoq-21';
const STORE_KEY = 'joyroom-stylus-jr-bp560-lang';

const dict = {
  "ar": {
    "nav.tagline": "دقة القرص · بدون بطارية",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "قلم ستايلس Joyroom",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Joyroom",
    "hero.title2": "JR-BP560 Stylus",
    "hero.sub": "قلم ستايلس سلبي برأس قرص دقيق وبدون بطارية — يشتغل على كل الشاشات اللمسية من آبل وأندرويد ومايكروسوفت",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في أقلام الموبايل (#12 في الإلكترونيات)",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الرأس",
    "hero.chip1v": "قرص دقيق",
    "hero.chip2l": "الطول",
    "hero.chip2v": "16.5 سم",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام متاح",
    "trust.codSub": "لكل عملية شراء على أمازون مصر",
    "trust.delivery": "توصيل مجاني",
    "trust.deliverySub": "على أمازون مصر حسب الصفحة",
    "trust.returns": "استرجاع 15 يوم",
    "trust.returnsSub": "وإرجاع مجاني حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة أصلية موثوقة",
    "trust.primeSub": "تقييم 4.2 من 5 من 2806 عميل على أمازون",
    "k.weight": "الرأس",
    "k.weightSub": "رأس قرص دقيق للرسم والكتابة",
    "k.dpi": "الأطراف",
    "k.dpiSub": "أطراف قابلة للتبديل في أي وقت",
    "k.batt": "البطارية",
    "k.battSub": "بدون بطارية — سلبي واشتغل على طول",
    "k.btns": "الخامة",
    "k.btnsSub": "جسم ألومنيوم بلون أبيض",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "رأس قرص لدقة أعلى",
    "s1.b": "رأس القرص الشفاف بيدّي دقة أعلى بكتير من الأصبع في الكتابة والرسم والتحديد — منغير ما تسيب أي نقطة.",
    "s2.t": "أطراف قابلة للتبديل",
    "s2.b": "ميزة الأطراف القابلة للتبديل تعني إنك تقدر تغيّر الرأس في أي وقت — عمر أقوى والقلم يفضل معاك.",
    "s3.t": "توافق شامل لأي شاشة لمسية",
    "s3.b": "يشتغل على iPad و iPhone وأجهزة أندرويد وأجهزة مايكروسوفت والتابلت وكل الشاشات اللمسية السعوية.",
    "s4.t": "بدون بطارية ولا بلوتوث",
    "s4.b": "قلم سلبي بالكامل — مش محتاج شحن ولا إقران، تفتح الشاشة وتكتب على طول من غير تعقيد.",
    "s5.t": "جسم ألومنيوم أنيق",
    "s5.b": "هيكل من الألومنيوم بلون أبيض نظيف، بوزن مريح ومسكة صافية تناسب الكتابة الطويلة.",
    "s6.t": "حجم مناسب للجيب والمحطة",
    "s6.b": "بطول 16.5 سم وقطر 0.9 سم — يناسب الشنطة والجيب ويبقى معاك على اليوم كله.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض (White)",
    "t.sensor": "النوع",
    "t.sensorV": "قلم ستايلس سلبي",
    "t.switch": "رقم الموديل",
    "t.switchV": "JR-BP560",
    "t.weight": "الوزن",
    "t.weightV": "50 جرام حسب الصفحة",
    "t.size": "الأبعاد",
    "t.conn": "التوافق",
    "t.connV": "كل الشاشات اللمسية السعوية",
    "t.batt": "البطارية",
    "t.battV": "لا يوجد — بدون بطاريات",
    "t.os": "الأجهزة",
    "t.osV": "iPad · iPhone · أندرويد · تابلت",
    "t.hand": "الضمان",
    "t.handV": "حسب صفحة المنتج",
    "t.inbox": "في العلبة",
    "t.inboxV": "قلم الجوييم JR-BP560 (قطعة واحدة)",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "قلم دقيق، من غير شحن ولا تعقيد",
    "conn.sub": "قلم ستايلس سلبي بقرص دقيق مقابل قلم نشط ذكي — الفرق في البطارية والحساسية",
    "conn.btnLs": "Joyroom JR-BP560 (زي ده)",
    "conn.btnBt": "قلم نشط ذكي",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر اقتصادي وغير معرّض للشحن",
    "conn.m1Bt": "سعر أعلى لازم يتشحن وبيت خاصة",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "التنقل اليومي والملاحظات والتصفح والرسم الخفيف",
    "conn.m2Bt": "الرسم المتقدّم بالضغط وحساسية الميل",
    "conn.m3l": "فرق الاستخدام",
    "conn.m3Ls": "توافق مع أي جهاز وبدون بطارية — جاهز دايماً",
    "conn.m3Bt": "ميزات احترافية وصحة أكتر وسعر أعلى",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو محتاج تكتب وتؤشر وتتنقل بسرعة على كل جهاز، القلم ده بيأدي الغرض من غير شحن ولا تعقيد.",
    "conn.noteBt": "القلم النشط بيستاهل لو الرسم الاحترافي شغلك، لكن أغلب الناس مش بيتحسّنوه على ملاحظاتهم اليومية.",
    "box.title": "في العلبة إيه؟",
    "box.sub": "المحتوى المرفق حسب صفحة المنتج على أمازون مصر — القلم وعدد قطعة واحدة.",
    "box.i1": "قلم Joyroom JR-BP560",
    "box.i2": "رأس قرص مثبّت مسبقاً",
    "box.i3": "بدون بطاريات أو شاحن",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Joyroom JR-BP560 Stylus Pen — قلم ستايلس بقرض دقيق للشاشات اللمسية — أبيض",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "توصيل مجاني حسب الصفحة",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج وتقييم 4.2 من 5 بناءً على 2806 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "16.5",
    "rev.n1": "سم",
    "rev.v1": "طول يناسب الجيب",
    "rev.q2": "4.2",
    "rev.n2": "من 5",
    "rev.v2": "من أكثر من 2800 عميل",
    "rev.q3": "#1",
    "rev.n3": "الأكثر رواجاً",
    "rev.v3": "في أقلام الموبايل",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بيشتغل مع إيه؟",
    "faq.a1": "كل الشاشات اللمسية السعوية — iPad و iPhone وأجهزة أندرويد وأجهزة مايكروسوفت والتابلت.",
    "faq.q2": "محتاج بطارية أو شحن؟",
    "faq.a2": "لا، قلم سلبي بالكامل — بدون بطاريات وبدون بلوتوث، يستخدم على طول.",
    "faq.q3": "الأطراف بتتبدل؟",
    "faq.a3": "أيوة، الأطراف قابلة للتبديل في أي وقت حسب الصفحة — والقلم بيجي برأس قرص دقيق مركب.",
    "faq.q4": "بيخدش الشاشة؟",
    "faq.a4": "رأس القرص مصمم للاستخدام على شاشات اللمس، وبيستخدم بشاشة نظيفة وبدون ضغط زائد للحفاظ عليها.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني خلال 15 يوم حسب سياسة أمازون — راجع تفاصيل الاسترجاع على صفحة المنتج.",
    "cta.title": "جاهز تكتب بدقة على أي شاشة؟",
    "cta.sub": "اطلب قلم Joyroom JR-BP560 من أمازون مصر — رأس قرص دقيق وبدون بطارية والدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف السعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لقلم Joyroom JR-BP560 ستايلس. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه JR-BP560",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "المنتج ده ليه",
    "aud.title": "اللي هيفيد معاهم القلم",
    "aud.sub": "كتابة ورسم خفيف بلا شحن — على أي جهاز",
    "aud.a1t": "الطلبة والمحاضرات",
    "aud.a1b": "تدوين سريع وتحديد في المحاضرات والملفات من غير بطارية ولا إقران — يفتح من غير رقم حبر.",
    "aud.a2t": "أصحاب التابلت",
    "aud.a2b": "يناسب iPad وأجهزة أندرويد ومايكروسوفت — قلم واحد لكل أجهزتك من غير مشاركة نصل.",
    "aud.a3t": "الرسم والتخطيط",
    "aud.a3b": "رأس قرص شفاف بيدّي دقة أعلى في الخطوط والتفاصيل وحسّن شغل الملاحظات والبروتوتايب.",
    "aud.a4t": "الهدية العملية",
    "aud.a4b": "هدية بسيطة وسعرها معقول لأي حد عنده موبايل أو تابلت — بتفك وتشتغل على طول.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Disc precision · no battery",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Joyroom stylus pen",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Joyroom",
    "hero.title2": "JR-BP560 Stylus",
    "hero.sub": "A passive disc-tip stylus with no battery that works on every capacitive screen from Apple, Android and Microsoft",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in Mobile Phone Stylus Pens (#12 in Electronics)",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Tip",
    "hero.chip1v": "Precision disc",
    "hero.chip2l": "Length",
    "hero.chip2v": "16.5 cm",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery available",
    "trust.codSub": "For your purchase on Amazon.eg",
    "trust.delivery": "Free delivery",
    "trust.deliverySub": "on Amazon.eg as listed",
    "trust.returns": "15-day returns",
    "trust.returnsSub": "Free returns under Amazon's policy for this item",
    "trust.prime": "A trusted brand",
    "trust.primeSub": "Rated 4.2 out of 5 by 2806 customers on Amazon",
    "k.weight": "Tip",
    "k.weightSub": "a precision disc tip for drawing and writing",
    "k.dpi": "Tips",
    "k.dpiSub": "tips you can swap any time",
    "k.batt": "Battery",
    "k.battSub": "none - passive and ready instantly",
    "k.btns": "Build",
    "k.btnsSub": "an aluminium body in white",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "A disc tip for real precision",
    "s1.b": "The transparent disc tip is far more precise than a finger for writing, drawing and selecting - without missing a point.",
    "s2.t": "Interchangeable tips",
    "s2.b": "Interchangeable tips mean you can swap the head any time - a longer life and a pen that stays with you.",
    "s3.t": "Universal capacitive fit",
    "s3.b": "Works on iPad, iPhone, Android devices, Microsoft tablets and every capacitive touch screen.",
    "s4.t": "No battery, no Bluetooth",
    "s4.b": "A fully passive pen - no charging and no pairing; unlock the screen and write straight away.",
    "s5.t": "A sleek aluminium body",
    "s5.b": "An aluminium enclosure in clean white, with a comfortable weight and a tidy grip for long writing.",
    "s6.t": "A pocket-friendly size",
    "s6.b": "At 16.5 cm long and 0.9 cm wide - it fits a bag or pocket and can stay with you all day.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "White",
    "t.sensor": "Type",
    "t.sensorV": "Passive stylus pen",
    "t.switch": "Model number",
    "t.switchV": "JR-BP560",
    "t.weight": "Weight",
    "t.weightV": "50 g as listed",
    "t.size": "Dimensions",
    "t.conn": "Compatibility",
    "t.connV": "All capacitive touch screens",
    "t.batt": "Battery",
    "t.battV": "None - no batteries required",
    "t.os": "Devices",
    "t.osV": "iPad · iPhone · Android · tablets",
    "t.hand": "Warranty",
    "t.handV": "per the product page",
    "t.inbox": "In the box",
    "t.inboxV": "The Joyroom JR-BP560 pen (single piece)",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "Precision pen, no charging, no fuss",
    "conn.sub": "A passive disc stylus versus an active smart pencil - the gap is battery and sensitivity",
    "conn.btnLs": "Joyroom JR-BP560 (this one)",
    "conn.btnBt": "An active smart pencil",
    "conn.m1l": "Cost",
    "conn.m1Ls": "an economical price that never needs charging",
    "conn.m1Bt": "A higher price that needs charging and can be device-specific",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Everyday note-taking, browsing and light drawing",
    "conn.m2Bt": "Advanced drawing with pressure and tilt sensitivity",
    "conn.m3l": "What changes",
    "conn.m3Ls": "Universal fit and no battery - always ready",
    "conn.m3Bt": "Pro features, more palm rejection and a bigger price",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If you need to write, tap and scroll across all your devices, this pen does the job with no charging and no fuss.",
    "conn.noteBt": "An active pencil earns its keep for serious drawing, but most people never feel the gain in daily notes.",
    "box.title": "What is in the box?",
    "box.sub": "The included contents per the amazon.eg listing - the pen, one count.",
    "box.i1": "The Joyroom JR-BP560 pen",
    "box.i2": "A pre-fitted disc tip",
    "box.i3": "No batteries or charger",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Joyroom JR-BP560 Stylus Pen - precision disc tip for capacitive screens - white",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free delivery as listed",
    "offer.ret": "Returns",
    "offer.retV": "15 days and free returns per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.2 out of 5 rating from 2806 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "16.5",
    "rev.n1": "cm",
    "rev.v1": "a pocket-friendly length",
    "rev.q2": "4.2",
    "rev.n2": "of 5",
    "rev.v2": "from 2800+ customers",
    "rev.q3": "#1",
    "rev.n3": "Bestseller",
    "rev.v3": "in mobile phone stylus pens",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What does it work with?",
    "faq.a1": "Every capacitive touch screen - iPad, iPhone, Android devices, Microsoft tablets and more.",
    "faq.q2": "Does it need a battery or charging?",
    "faq.a2": "No - it is fully passive, with no batteries and no Bluetooth, ready to use instantly.",
    "faq.q3": "Can the tips be replaced?",
    "faq.a3": "Yes - the listing says the tips can be replaced any time, and the pen arrives with a precision disc tip fitted.",
    "faq.q4": "Will it scratch the screen?",
    "faq.a4": "The disc tip is intended for touch screens; use it on a clean screen without excess pressure to keep it safe.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right?",
    "faq.a6": "The listing points to free returns within 15 days per Amazon’s policy - check the return details on the product page.",
    "cta.title": "Ready to write precisely on any screen?",
    "cta.sub": "Order the Joyroom JR-BP560 on Amazon.eg - precision disc tip, no battery, cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Joyroom JR-BP560 stylus. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why JR-BP560",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the stylus suits",
    "aud.sub": "Charging-free writing and light drawing - on any device",
    "aud.a1t": "Students and note-takers",
    "aud.a1b": "Fast notes and highlighting in lectures and documents with no battery or pairing - always fresh ink.",
    "aud.a2t": "Tablet owners",
    "aud.a2b": "Fits iPad, Android and Microsoft tablets - one pen across your devices with no shared tip.",
    "aud.a3t": "Drawing and sketching",
    "aud.a3b": "A transparent disc tip gives greater line precision and detail for notes and quick prototypes.",
    "aud.a4t": "A practical gift",
    "aud.a4b": "A simple, affordable gift for anyone with a phone or tablet - unbox and it just works.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and cash on delivery is available - every price, discount and deal detail appears on Amazon’s own page at checkout.",
    "offer.payNote": "The price and any current offers - all of it lives on Amazon’s page only.",
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
    ? 'قلم Joyroom JR-BP560 ستايلس برأس قرص دقيق للشاشات | أمازون مصر'
    : 'Joyroom JR-BP560 Precision Disc Stylus Pen | Amazon Egypt';

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
const LIVE_KEY = 'joyroom-stylus-jr-bp560-live';
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
const GAL_FILES = ["img/js-00.jpg","img/js-01.jpg","img/js-02.jpg","img/js-03.jpg","img/js-04.jpg","img/js-05.jpg","img/js-06.jpg","img/js-07.jpg"];
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
