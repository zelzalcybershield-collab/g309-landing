/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FDH43N59?tag=zoq-21';
const STORE_KEY = 'honor-pad-10-lang';

const dict = {
  "ar": {
    "nav.tagline": "HONOR PAD 10 · رمادي",
    "nav.specs": "المواصفات",
    "nav.connect": "العلبة والمحتوى",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "تابلت 12.1 بوصة · معدل 120Hz",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "HONOR Pad",
    "hero.title2": "10",
    "hero.sub": "شاشة 12.1 بوصة 2.5K بمعدل 120Hz وبطارية 10,100mAh و8+256 جيجا — مع ضمان سنة",
    "hero.reviews": "{n} تقييم على أمازون",
    "hero.rank": "يُنفَّذ من Amazon.eg · شحن مجاني واستلام غدًا",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "12.1\" 2.5K 120Hz",
    "hero.chip2l": "البطارية",
    "hero.chip2v": "10,100mAh · 35W",
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
    "trust.prime": "بطارية 10,100mAh",
    "trust.primeSub": "شحن فائق حتى 35 واط",
    "k.weight": "الشاشة",
    "k.weightSub": "12.1 بوصة · 4:3 · 120Hz",
    "k.dpi": "البطارية",
    "k.dpiSub": "10,100mAh · شحن 35W",
    "k.batt": "التخزين",
    "k.battSub": "8 + 256 جيجا",
    "k.btns": "المعالج",
    "k.btnsSub": "Snapdragon 7 Gen 3",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة الفنية الكاملة",
    "s1.t": "شاشة 12.1 بوصة 2.5K بمعدل 120Hz",
    "s1.b": "شاشة LCD بدقة 2560×1600 ونسبة 4:3 تنعش بمعدل 120 هرتز لتجربة أدق وأكثر سلاسة، مع نسبة شاشة إلى الهيكل 88% وأكثر من مليار لون وتدرج لوني DCI-P3Wide وحماية مريحة للعين. نص أوضح، وتمرير أملس، وقراءة طويلة مريحة.",
    "s2.t": "خفيف ورفيع للغاية — 525 جرام",
    "s2.b": "تصميم أخف بنسبة 29% وأرفع بنسبة 7% حسب الشركة المصنعة، ووزن السلعة 525 جرام. تصميم قابل للطي بزاوية 270 درجة، فيوفر شعور حمل سهل حتى مع الشاشة الكبيرة. مثالي للتنقل والقراءة في أي مكان.",
    "s3.t": "بطارية 10,100mAh بشحن فائق 35 واط",
    "s3.b": "بطارية كبيرة موثقة على صفحة المنتج مع تقنية شحن فائق 35 واط، فتقدر تشتغل طول اليوم وتشحن بسرعة ترجع لحد التمام.",
    "s4.t": "Snapdragon 7 الجيل الثالث",
    "s4.b": "معالج سناب دراجون 7 الجيل 3 بتردد 2.63 جيجاهرتز من Qualcomm لتشغيل سلس للتطبيقات والألعاب والإنتاجية، مع أندرويد 15 وماجيك OS 9.0.",
    "s5.t": "8GB رام + 256GB تخزين",
    "s5.b": "ذاكرة 8 جيجا رام ومساحة تخزين 256 جيجا تخزّن ملفاتك وتطبيقاتك ومحتواك من غير ما تقلق على المساحة.",
    "s6.t": "ضمان سنة والتزام أمازون",
    "s6.b": "ضمان لمدة عام من الشركة المصنعة، والمنتج يُشحن ويُنفَّذ من Amazon.eg نفسها مع إرجاع مجاني خلال 15 يوم حسب السياسة.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي",
    "t.sensor": "المعالج",
    "t.sensorV": "Snapdragon 7 Gen 3",
    "t.switch": "الذاكرة",
    "t.switchV": "8GB RAM",
    "t.weight": "الشاشة",
    "t.weightV": "12.1\" · 2560×1600 · 120Hz",
    "t.size": "مساحة التخزين",
    "t.connV": "Wi-Fi · Bluetooth",
    "t.conn": "الاتصال",
    "t.batt": "البطارية",
    "t.battV": "10,100mAh · شحن فائق حتى 35 واط",
    "t.os": "نظام التشغيل",
    "t.osV": "Magic OS 9.0 (Android 15)",
    "t.hand": "يُنفَّذ من",
    "t.handV": "Amazon.eg · موديل HEY3-W00",
    "t.inbox": "في العلبة",
    "t.inboxV": "ضمان سنة · شاحن وكابل Type-C",
    "conn.eyebrow": "العلبة والمحتوى",
    "conn.title": "إيه اللي جاي معاك بالظبط",
    "conn.sub": "الجزء المضمون من العرض وسعر الملحقات — بص قبل ما تدفع",
    "conn.btnLs": "هذه النسخة (Wi-Fi)",
    "conn.btnBt": "خيارات أخرى في المعرض",
    "conn.m1l": "القلم النشط",
    "conn.m1Ls": "مش متضمن — نسخة Wi-Fi المستقلة",
    "conn.m1Bt": "متاح في نسخة «مع قلم» بنفس عائلة المنتج",
    "conn.m2l": "الاتصال",
    "conn.m2Ls": "Wi-Fi · Bluetooth",
    "conn.m2Bt": "نسخ 5G متاحة كمنتجات منفصلة في المعرض",
    "conn.m3l": "الشاحن والكابل",
    "conn.m3Ls": "حسب الباقة المعلنة في صفحة أمازون",
    "conn.m3Bt": "المحتوى يظهر في صفحة المنتج نفسها",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "النسخة اللي قدامك Wi-Fi ومش متضمنة قلم. المؤكد في العلبة حسب صفحة أمازون: التابلت + ضمان سنة من الشركة المصنعة + الشاحن والكابل كما يظهران في العرض. لو عايز نسخة بقلم، أمازون بيبيع نسخ «مع قلم» في نفس عائلة المنتج.",
    "conn.noteBt": "النسخة اللي قدامك هي Wi-Fi المستقلة ومش متضمنة قلم. نسخ «مع قلم» و5G متاحة كمنتجات منفصلة على صفحة أمازون.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع ويُنفَّذ من أمازون مصر",
    "box.i1": "تابلت هونر باد 10 رمادي — 8GB رام + 256GB",
    "box.i2": "ضمان لمدة عام من الشركة المصنعة",
    "box.i3": "الشاحن والكابل حسب الباقة المعلنة في صفحة أمازون",
    "box.i4": "القلم والجراب والكيبورد مش متضمنين — بيتباعوا منفصلين",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "HONOR Pad 10 — Snapdragon 7 Gen 3 / 8+256 / Wi-Fi — رمادي",
    "offer.seller": "تُشحن وتُنفَّذ مباشرة من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "شحن مجاني · استلام غدًا حسب صفحة أمازون",
    "offer.ret": "الإرجاع",
    "offer.retV": "إرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت في صفحة أمازون",
    "rev.count": "Android 15 · Magic UI 9.0",
    "rev.q1": "بطارية 10,100 أمبير",
    "rev.n1": "البطارية",
    "rev.v1": "طوال اليوم · شحن 35W",
    "rev.q2": "Snapdragon 7 Gen 3",
    "rev.n2": "المعالج",
    "rev.v2": "قوي وسلس",
    "rev.q3": "تخزين 256 جيجا",
    "rev.n3": "الذاكرة",
    "rev.v3": "8GB RAM + 256GB",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الفرق بينه وبين هونر باد X9a؟",
    "faq.a1": "باد 10 الأحدث والأكبر: شاشة 12.1 بوصة بمعدل 120 هرتز (مقابل 11.5 بوصة لـX9a)، معالج Snapdragon 7 الجيل 3 (مقابل 685)، بطارية 10,100mAh موثقة بالصفحة، وتخزين 256 جيجا. سعره أعلى لأنه فئة أعلى — لو الميزانية محددة وLTE هو الأولوية، X9a أفضل قيمة.",
    "faq.q2": "البطارية فعلًا 10,100 أمبير؟",
    "faq.a2": "نعم، صفحة أمازون بتذكر 10,100 مللي أمبير في الساعة في اسم المنتج وفي مواصفاته، مع تقنية الشحن الفائق 35 واط. خلي بالك العمر الفعلي بالاستخدام الحقيقي دايماً بيختلف حسب الإعدادات وشدة الاستخدام.",
    "faq.q3": "إيه اللي في العلبة بالظبط؟",
    "faq.a3": "حسب صفحة أمازون: التابلت + ضمان سنة من الشركة المصنعة + الشاحن والكابل كما يظهران في العرض. مش متضمنين: القلم والجراب والكيبورد — دول يتباعوا منفصلين. اتأكد من محتوى العرض على صفحة المنتج.",
    "faq.q4": "ينفع أدفع كاش عند الاستلام؟",
    "faq.a4": "أيوه. صفحة أمازون مصر بتعرض «الدفع عند الاستلام متوفر» على المنتج ده. في بعض العروض السريعة بتبقى البطاقة بس، فدايم شوف خيارات الدفع على صفحة المنتج قبل ما تأكد الطلب.",
    "faq.q5": "القلم متضمن؟",
    "faq.a5": "النسخة دي (Wi-Fi المستقلة) مش متضمنة قلم. لو عايز قلم أصلي من نفس المتجر، اختار نسخة «مع قلم» من نفس عائلة باد 10 على صفحة أمازون.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع حسب سياسة أمازون مصر على المنتج، وبيبدأ عادةً بطلب رجوع مجاني. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تجرب الشاشة الأسرع؟",
    "cta.sub": "اطلبه من أمازون مصر — هونر باد 10 بشاشة 12.1 بوصة 120Hz وبطارية 10,100mAh",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج هونر باد 10. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا HONOR",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الجهاز ده ليه",
    "aud.title": "اللي هيفيد معاه هونر باد 10",
    "aud.sub": "تابلت شاشة كبيرة بمعدل 120Hz وبطارية ضخمة — للدراسة والإنتاجية والترفيه",
    "aud.a1t": "اللي بيذاكر وبيقرا كتير",
    "aud.a1b": "شاشة 12.1 بوصة بدقة 2.5K بمعدل 120 هرتز مع حماية مريحة للعين — نص أوضح وتمرير أملس وقراءة طويلة من غير تعب.",
    "aud.a2t": "مستخدم طوال اليوم",
    "aud.a2b": "بطارية 10,100mAh مع شحن فائق 35 واط: شغل، شوف، وتصفح ساعات من غير قلقل على الشاحن.",
    "aud.a3t": "اللي شغّال على الإنتاجية",
    "aud.a3b": "معالج Snapdragon 7 Gen 3 وذاكرة 8 + 256 جيجا تكفي لتعدد المهام وتخزين ملفات الشغل والكورسات.",
    "aud.a4t": "اللي بيدوّر على تجربة أسرع",
    "aud.a4b": "التفرقة بين 60 و120 هرتز بتبان في أول سكرول: بتحصل على شاشة أسرع وبطارية موثقة وضمان سنة، باعتماد أمازون مصر نفسها.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "HONOR PAD 10 · Gray",
    "nav.specs": "Specs",
    "nav.connect": "In the box",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "12.1-inch tablet · 120Hz",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HONOR Pad",
    "hero.title2": "10",
    "hero.sub": "A 12.1-inch 2.5K 120Hz display, a 10,100mAh battery and 8+256GB — with a 1-year warranty",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "Fulfilled by Amazon.eg · free delivery, next day",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Display",
    "hero.chip1v": "12.1\" 2.5K 120Hz",
    "hero.chip2l": "Battery",
    "hero.chip2v": "10,100mAh · 35W",
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
    "trust.prime": "10,100mAh battery",
    "trust.primeSub": "Fast charging up to 35W",
    "k.weight": "Display",
    "k.weightSub": "12.1 inches · 4:3 · 120Hz",
    "k.dpi": "Battery",
    "k.dpiSub": "10,100mAh · 35W charging",
    "k.batt": "Storage",
    "k.battSub": "8+256GB",
    "k.btns": "Chipset",
    "k.btnsSub": "Snapdragon 7 Gen 3",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "12.1-inch 2.5K display at 120Hz",
    "s1.b": "An LCD 2560×1600 screen at a 4:3 ratio that refreshes at 120Hz for a sharper, smoother experience, with an 88% screen-to-body ratio, over a billion colours, DCI-P3Wide colour and eye comfort. Sharper text, silky scrolling and comfortable long reading.",
    "s2.t": "Ultra-light and thin - 525 g",
    "s2.b": "A design that is 29% lighter and 7% thinner per the manufacturer, at an item weight of 525 g. The 270-degree foldable design keeps it easy to hold even with the big screen. Ideal for commute and reading anywhere.",
    "s3.t": "10,100mAh battery with 35W fast charging",
    "s3.b": "A large battery documented on the listing with 35W fast-charge technology, so you can work all day and top back up quickly.",
    "s4.t": "Snapdragon 7 Gen 3",
    "s4.b": "The Snapdragon 7 Gen 3 at 2.63 GHz from Qualcomm drives smooth apps, gaming and productivity, running Android 15 with Magic OS 9.0.",
    "s5.t": "8GB RAM + 256GB storage",
    "s5.b": "8GB of RAM and 256GB of storage hold your files, apps and content without stressing about space.",
    "s6.t": "1-year warranty and Amazon backing",
    "s6.b": "A 1-year manufacturer warranty, and the product ships and is fulfilled by Amazon.eg itself, with free returns within 15 days per the policy.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Gray",
    "t.sensor": "Chipset",
    "t.sensorV": "Snapdragon 7 Gen 3",
    "t.switch": "Memory",
    "t.switchV": "8GB RAM",
    "t.weight": "Display",
    "t.weightV": "12.1\" · 2560×1600 · 120Hz",
    "t.size": "Storage",
    "t.connV": "Wi-Fi · Bluetooth",
    "t.conn": "Connectivity",
    "t.batt": "Battery",
    "t.battV": "10,100mAh · fast charging up to 35W",
    "t.os": "Operating system",
    "t.osV": "Magic OS 9.0 (Android 15)",
    "t.hand": "Fulfilled by",
    "t.handV": "Amazon.eg · model HEY3-W00",
    "t.inbox": "In the box",
    "t.inboxV": "1-yr warranty · charger and Type-C cable",
    "conn.eyebrow": "What's in the box",
    "conn.title": "Exactly what comes with it",
    "conn.sub": "The guaranteed part of the offer and the price of the extras — glance before you pay",
    "conn.btnLs": "This version (Wi-Fi)",
    "conn.btnBt": "Other options in the store",
    "conn.m1l": "Active pen",
    "conn.m1Ls": "Not included — the standalone Wi-Fi version",
    "conn.m1Bt": "Available as a \"with pen\" variant in the same family",
    "conn.m2l": "Connectivity",
    "conn.m2Ls": "Wi-Fi · Bluetooth",
    "conn.m2Bt": "5G variants exist as separate listings in the store",
    "conn.m3l": "Charger and cable",
    "conn.m3Ls": "Per the bundle stated on the Amazon listing",
    "conn.m3Bt": "The contents show on the product page itself",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "This version is Wi-Fi and does not include a pen. What the listing guarantees in the box: the tablet + a 1-year manufacturer warranty + the charger and cable as shown in the offer. Want a pen? Amazon sells \"with pen\" variants in the same Pad 10 family.",
    "conn.noteBt": "The listing in front of you is the standalone Wi-Fi version without a pen. \"With pen\" and 5G variants exist as separate products on the Amazon page.",
    "box.title": "What arrives",
    "box.sub": "Listed and fulfilled by Amazon.eg",
    "box.i1": "HONOR Pad 10 tablet, gray — 8GB RAM + 256GB",
    "box.i2": "1-year manufacturer warranty",
    "box.i3": "Charger and cable per the bundle stated on the Amazon listing",
    "box.i4": "A pen, case and keyboard are not included — sold separately",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "HONOR Pad 10 — Snapdragon 7 Gen 3 / 8+256 / Wi-Fi — Gray",
    "offer.seller": "Shipped and fulfilled directly by Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free shipping · next-day delivery per the Amazon listing",
    "offer.ret": "Returns",
    "offer.retV": "Free returns per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the specifications on the Amazon listing",
    "rev.count": "Android 15 · Magic UI 9.0",
    "rev.q1": "10,100mAh battery",
    "rev.n1": "Battery",
    "rev.v1": "All day · 35W charge",
    "rev.q2": "Snapdragon 7 Gen 3",
    "rev.n2": "Chipset",
    "rev.v2": "Fast and smooth",
    "rev.q3": "256GB storage",
    "rev.n3": "Memory",
    "rev.v3": "8GB RAM + 256GB",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "How does it differ from the HONOR Pad X9a?",
    "faq.a1": "The Pad 10 is the newer, bigger one: a 12.1-inch 120Hz display (vs 11.5\" for the X9a), a Snapdragon 7 Gen 3 (vs the 685), a 10,100mAh battery stated on the listing, and 256GB of storage. It costs more because it is a higher tier — if budget is tight and LTE matters most, the X9a is the better value.",
    "faq.q2": "Is the battery really 10,100mAh?",
    "faq.a2": "Yes, the Amazon listing states 10,100mAh in the product name and specs, along with 35W fast-charge technology. Remember that real-life battery life always varies with settings and usage intensity.",
    "faq.q3": "What exactly is in the box?",
    "faq.a3": "Per the Amazon listing: the tablet + a 1-year manufacturer warranty + the charger and cable as shown in the offer. Not included: a pen, case and keyboard — those sell separately. Check the offer contents on the product page.",
    "faq.q4": "Can I pay cash on delivery?",
    "faq.a4": "Yes. The Amazon Egypt listing shows \"cash on delivery available\" for this product. Some quick deals are card only, so always check the payment options on the product page before confirming the order.",
    "faq.q5": "Is the pen included?",
    "faq.a5": "This standalone Wi-Fi version does not include a pen. If you want an official pen from the same store, pick a \"with pen\" variant of the same Pad 10 family on Amazon.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns follow the Amazon.eg policy for this product, usually starting with a free return request. Check the return policy on the product page before ordering.",
    "cta.title": "Ready for a faster display?",
    "cta.sub": "Order it on Amazon.eg — a HONOR Pad 10 with a 12.1-inch 120Hz screen and a 10,100mAh battery",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the HONOR Pad 10. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why HONOR",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the HONOR Pad 10 suits",
    "aud.sub": "A big 120Hz tablet with a massive battery — for study, productivity and entertainment",
    "aud.a1t": "Heavy readers and studiers",
    "aud.a1b": "A 12.1-inch 2.5K screen at 120Hz with comfortable eye protection — sharper text, smoother scrolling and long reading without fatigue.",
    "aud.a2t": "All-day users",
    "aud.a2b": "A 10,100mAh battery with 35W fast charging: work, watch and browse for hours without chasing the charger.",
    "aud.a3t": "Productivity folks",
    "aud.a3b": "A Snapdragon 7 Gen 3 and 8+256GB of memory handle multitasking and store work files and courses comfortably.",
    "aud.a4t": "Buyers chasing a faster feel",
    "aud.a4b": "The 60-to-120Hz difference shows on the first scroll: you get a faster screen, a documented battery, a 1-year warranty and Amazon.eg backing.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card - every price, instalment, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price, instalments and any current offers - all of it lives on Amazon's page only.",
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
    ? 'هونر باد 10 (8+256) — تابلت 12.1 بوصة 2.5K بمعدل 120Hz'
    : 'HONOR Pad 10 (8+256) — 12.1-inch 2.5K 120Hz tablet';

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
const LIVE_KEY = 'honor-pad-10-live';
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg"];
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
