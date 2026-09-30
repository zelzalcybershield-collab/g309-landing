/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0GP73ZP6L?tag=zoq-21';
const STORE_KEY = 'infinix-xpad-30e-lang';

const dict = {
  "ar": {
    "nav.tagline": "INFINIX XPAD 30E · أزرق غامق",
    "nav.specs": "المواصفات",
    "nav.connect": "العلبة والمحتوى",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "تابلت 11 بوصة · نسخة 4G",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Infinix Xpad",
    "hero.title2": "30E",
    "hero.sub": "شاشة 11 بوصة بتردد 120 هرتز ومعالج G80 وبطارية 7200mAh — مع اتصال 4G",
    "hero.reviews": "{n} تقييم على أمازون",
    "hero.rank": "#14 في أجهزة التابلت على أمازون",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "11\" 120Hz",
    "hero.chip2l": "الاتصال",
    "hero.chip2v": "4G + Wi-Fi",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "دفع إلكتروني — من غير كاش",
    "trust.delivery": "شحن مجاني سريع",
    "trust.deliverySub": "توصيل مجاني حسب صفحة أمازون",
    "trust.returns": "إرجاع مجاني",
    "trust.returnsSub": "15 يوم بعد التوصيل",
    "trust.prime": "ضمان 12 شهرًا",
    "trust.primeSub": "يغطي عيوب التصنيع",
    "k.weight": "الشاشة",
    "k.weightSub": "11 بوصة · 2000×1920",
    "k.dpi": "الذاكرة",
    "k.dpiSub": "4+4 جيجا رام · 128 جيجا",
    "k.batt": "البطارية",
    "k.battSub": "7200 مللي أمبير ساعة",
    "k.btns": "الاتصال",
    "k.btnsSub": "4G · Wi-Fi · Bluetooth 5.2",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة الفنية الكاملة",
    "s1.t": "شاشة 11 بوصة بتردد 120 هرتز",
    "s1.b": "شاشة IPS بدقة 2000×1920 ونسبة عرض 16:10، بمعدل تحديث 120 هرتز — تمرير سلس واستجابة أسرع في الاستخدام اليومي والألعاب الخفيفة.",
    "s2.t": "معالج ميديا تيك G80",
    "s2.b": "معالج ثماني النواة من MediaTek مع كارت رسوميات مدمج، للتطبيقات والفيديو والألعاب الخفيفة، واندرويد 15 كنظام تشغيل.",
    "s3.t": "4+4 جيجا رام و128 جيجا",
    "s3.b": "ذاكرة وصول عشوائي 4+4 جيجا (4 جيجا مادية مع 4 جيجا توسعة) وسعة تخزين 128 جيجا، مع منفذ microSD لو حبيت توسّع.",
    "s4.t": "كاميرات 8MP + 5MP",
    "s4.b": "كاميرا خلفية 8 ميجابكسل وأمامية 5 ميجابكسل مع تقريب رقمي 4× — صور ومكالمات فيديو بجودة كويسة.",
    "s5.t": "بطارية 7200mAh وشحن سريع",
    "s5.b": "بطارية 7200 مللي أمبير ساعة مع شحن سريع 10 واط عبر منفذ Type-C، والوزن 498 جرام بس.",
    "s6.t": "اتصال 4G وشريحة نانو",
    "s6.b": "يدعم شريحة نانو وميكرو SD مع واي فاي 5 وNFC وبلوتوث 5.2 — تقدر تتصل بالإنترنت من غير ما تعتمد على واي فاي.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أزرق غامق",
    "t.sensor": "المعالج",
    "t.sensorV": "MediaTek G80",
    "t.switch": "الذاكرة",
    "t.switchV": "4+4 جيجا رام · 128 جيجا",
    "t.weight": "الشاشة",
    "t.weightV": "11\" · 2000×1920 · IPS",
    "t.size": "مساحة التخزين",
    "t.connV": "4G · Wi-Fi · NFC · BT 5.2",
    "t.conn": "الاتصال",
    "t.batt": "البطارية",
    "t.battV": "7200 مللي أمبير ساعة · شحن سريع 10 واط",
    "t.os": "نظام التشغيل",
    "t.osV": "Android 15",
    "t.hand": "سنة الصنع",
    "t.handV": "2026",
    "t.inbox": "في العلبة",
    "t.inboxV": "تابلت · شاحن سريع · دليل وبطاقة ضمان",
    "conn.eyebrow": "العلبة والمحتوى",
    "conn.title": "إيه اللي جاي معاك",
    "conn.sub": "اللي بيتوصل مع المنتج فعلاً واللي بيتحسب بحساب منفصل",
    "conn.btnLs": "العرض الكامل على أمازون",
    "conn.btnBt": "الجهاز لوحده",
    "conn.m1l": "الشاحن السريع",
    "conn.m1Ls": "متضمن في العلبة",
    "conn.m1Bt": "لو اشتريت الجهاز لوحده بدون العرض",
    "conn.m2l": "ذاكرة microSD",
    "conn.m2Ls": "الجهاز فيه منفذ microSD للتوسعة",
    "conn.m2Bt": "مش متضمن — بتوسّعها بنفسك",
    "conn.m3l": "القلم النشط والكفر",
    "conn.m3Ls": "الشاشة بتدعم القلم النشط",
    "conn.m3Bt": "مش متضمن",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "اللي قدامك هو التابلت مع الشاحن السريع ودليل المستخدم وبطاقة الضمان. الجهاز يدعم القلم النشط و microSD، بس الاتنين مش متضمنين في العلبة.",
    "conn.noteBt": "لو جالك عرض من غير ملحقات، الشاحن السريع والوثائق بيبقوا بحساب منفصل. اتأكد من محتويات العرض على صفحة أمازون قبل الشراء.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع على أمازون مصر",
    "box.i1": "تابلت انفنيكس اكس باد 30E (X1102B) — أزرق غامق — 128 جيجا",
    "box.i2": "شاحن سريع 10 واط",
    "box.i3": "دليل المستخدم وبطاقة الضمان",
    "box.i4": "ضمان محدود 12 شهرًا من انفنيكس يغطي عيوب التصنيع",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Infinix Xpad 30E (X1102B) — MediaTek G80 / 4+4 / 128GB / 4G — أزرق غامق",
    "offer.seller": "معروض للبيع على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "شحن مجاني حسب صفحة أمازون",
    "offer.ret": "الإرجاع",
    "offer.retV": "استرداد كامل أو تبديل خلال 15 يوم",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "Android 15 · 4G",
    "rev.q1": "شاشة 120 هرتز",
    "rev.n1": "الشاشة",
    "rev.v1": "2000×1920",
    "rev.q2": "بطارية 7200mAh",
    "rev.n2": "البطارية",
    "rev.v2": "شحن 10 واط",
    "rev.q3": "اتصال 4G",
    "rev.n3": "الاتصال",
    "rev.v3": "شريحة نانو",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "فيه شريحة اتصال؟",
    "faq.a1": "أيوه. الموديل X1102B على أمازون مصر مكتوب فيه «شريحة اتصال نانو» ويدعم تكنولوجيا 4G، وكمان واي فاي وNFC وبلوتوث 5.2. كمان فيه منفذ microSD للتوسعة.",
    "faq.q2": "الذاكرة كام؟",
    "faq.a2": "ذاكرة الوصول العشوائي 4+4 جيجا — يعني 4 جيجا رامات مادية مع 4 جيجا توسعة — وسعة التخزين 128 جيجا. وصف المنتج على أمازون بيكتبها «رام: 4+4، روم: 128GB».",
    "faq.q3": "كاميرا الجهاز إيه؟",
    "faq.a3": "كاميرا خلفية 8 ميجابكسل وكاميرا أمامية 5 ميجابكسل، مع تقريب رقمي 4×. أسفل المواصفات مذكور كمان التعرف على خط اليد (OCR) وشاشة تعمل باللمس مع دعم القلم.",
    "faq.q4": "ينفع أدفع كاش عند الاستلام؟",
    "faq.a4": "لا. صفحة أمازون مصر بتقول إن المنتج ده من هذا البائع يدعم الدفع بالبطاقة فقط عند الشراء. الخيارات المتاحة هي البطاقة الإلكترونية والتقسيط، وكل التفاصيل بتظهر على صفحة المنتج قبل ما تأكد الطلب.",
    "faq.q5": "البطارية كام؟",
    "faq.a5": "7200 مللي أمبير ساعة مع شحن سريع 10 واط منفذ Type-C. البطارية مكتوبة 7200 mAh في اسم المنتج ووصفه في صفحة أمازون.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "أيوه. سياسة الإرجاع على صفحة المنتج بتذكر استرداد المبلغ بالكامل أو تبديل خلال 15 يوم بعد التوصيل. راجع السياسة على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تجربته؟",
    "cta.sub": "اطلبه من أمازون مصر — انفنيكس اكس باد 30E بشاشة 11 بوصة 120 هرتز واتصال 4G",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج انفنيكس اكس باد 30E. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Infinix",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الجهاز ده ليه",
    "aud.title": "اللي هيفيد معاه انفنيكس اكس باد 30E",
    "aud.sub": "تابلت بشاشة 120 هرتز واتصال 4G — للدراسة والترفيه والاستخدام اليومي",
    "aud.a1t": "اللي بيذاكر وبيقرا كتير",
    "aud.a1b": "شاشة 11 بوصة بدقة 2000×1920 بمعدل تحديث 120 هرتز ووزن 498 جرام — تلاقيها مريحة للقراءة والكورسات الطويلة.",
    "aud.a2t": "اللي مشغول بالاتصال",
    "aud.a2b": "شريحة نانو مع 4G يعني إنك فاضي البيانات في أي مكان، وكمان منفذ microSD لو الذاكرة امتلأت.",
    "aud.a3t": "اللي شغّال على الترفيه",
    "aud.a3b": "معالج G80 وكارت شاشة مدمج مع شاشة 120 هرتز — فيديوهات سلسة وألعاب خفيفة بتتجاوب مع التمرير.",
    "aud.a4t": "اللي بيدوّر على قيمة مقابل السعر",
    "aud.a4b": "بتحصل على 8 جيجا رام و128 جيجا وبطارية 7200mAh وضمان 12 شهرًا، مع اعتماد أمازون مصر.",
    "var.eyebrow": "اختيار النمط",
    "var.title": "النسخة المعروضة في الصفحة دي",
    "var.sub": "المنتج ده معروض في صفحة أمازون بنسخة واحدة، والمواصفات الأساسية كلها في الجدول فوق.",
    "var.note": "التقييمات وأرقام التقييم كما ظهرت على صفحة أمازون مصر وقت تحديث الصفحة وقد تتغير حسب التوفر — السعر الحي بيظهر دائمًا على صفحة المنتج نفسه على أمازون.",
    "var.i1.tag": "متوفر الآن",
    "var.i1.name": "انفنيكس اكس باد 30E — أزرق غامق",
    "var.i1.dim": "128 جيجا · 4+4 جيجا رام · 4G",
    "var.i1.rating": "5.0 من 5 نجوم",
    "var.i1.count": "4 تقييمات على أمازون",
    "var.i1.note": "دفع بالبطاقة · معروض على Amazon.eg",
    "var.i1.buy": "شوفه على أمازون",
    "var.i2.tag": "النسخة المعروضة في الصفحة دي",
    "var.i2.name": "انفنيكس اكس باد 30E — أزرق غامق",
    "var.i2.dim": "128 جيجا · 4+4 جيجا رام · 4G",
    "var.i2.rating": "5.0 من 5 نجوم",
    "var.i2.count": "4 تقييمات على أمازون",
    "var.i2.note": "دفع بالبطاقة · معروض على Amazon.eg",
    "var.i2.buy": "شوفه على أمازون",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "المنتج ده مدفوع بالبطاقة الإلكترونية على أمازون مصر، مع خيارات تقسيط حسب بطاقتك — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس."
  },
  "en": {
    "nav.tagline": "INFINIX XPAD 30E · Dark Blue",
    "nav.specs": "Specs",
    "nav.connect": "In the box",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "11-inch tablet · 4G version",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Infinix Xpad",
    "hero.title2": "30E",
    "hero.sub": "An 11-inch 120Hz screen, the G80 chipset and a 7200 mAh battery — with 4G",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#14 in Computer Tablets on Amazon",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Display",
    "hero.chip1v": "11\" 120Hz",
    "hero.chip2l": "Connectivity",
    "hero.chip2v": "4G + Wi-Fi",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Electronic payment — no cash",
    "trust.delivery": "Fast free shipping",
    "trust.deliverySub": "Free delivery per the Amazon listing",
    "trust.returns": "Free returns",
    "trust.returnsSub": "15 days after delivery",
    "trust.prime": "12-month warranty",
    "trust.primeSub": "Covers manufacturing defects",
    "k.weight": "Display",
    "k.weightSub": "11 inches · 2000×1920",
    "k.dpi": "Memory",
    "k.dpiSub": "4+4GB RAM · 128GB",
    "k.batt": "Battery",
    "k.battSub": "7200 mAh",
    "k.btns": "Connectivity",
    "k.btnsSub": "4G · Wi-Fi · Bluetooth 5.2",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "11-inch 120Hz display",
    "s1.b": "An IPS 2000×1920 screen at a 16:10 aspect ratio with a 120Hz refresh rate — smooth scrolling and quicker response for daily use and light gaming.",
    "s2.t": "MediaTek G80 chipset",
    "s2.b": "An octa-core MediaTek processor with integrated graphics, for apps, video and light games, running Android 15.",
    "s3.t": "4+4GB RAM and 128GB",
    "s3.b": "4+4GB of RAM (4GB physical plus 4GB expansion) and 128GB of storage, with a microSD slot if you want more room.",
    "s4.t": "8MP + 5MP cameras",
    "s4.b": "An 8MP rear camera and a 5MP front camera with 4x digital zoom — good photos and video calls.",
    "s5.t": "7200 mAh battery with fast charging",
    "s5.b": "A 7200 mAh battery with 10W fast charging over Type-C, and the whole tablet weighs 498 g.",
    "s6.t": "4G and a nano SIM",
    "s6.b": "It takes a nano SIM and a microSD card, plus dual-band Wi-Fi 5, NFC and Bluetooth 5.2 — so you can stay online without relying on Wi-Fi.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Dark blue",
    "t.sensor": "Chipset",
    "t.sensorV": "MediaTek G80",
    "t.switch": "Memory",
    "t.switchV": "4+4GB RAM · 128GB",
    "t.weight": "Display",
    "t.weightV": "11\" · 2000×1920 · IPS",
    "t.size": "Storage",
    "t.connV": "4G · Wi-Fi · NFC · BT 5.2",
    "t.conn": "Connectivity",
    "t.batt": "Battery",
    "t.battV": "7200 mAh · 10W fast charging",
    "t.os": "Operating system",
    "t.osV": "Android 15",
    "t.hand": "Year",
    "t.handV": "2026",
    "t.inbox": "In the box",
    "t.inboxV": "Tablet · fast charger · guide & warranty card",
    "conn.eyebrow": "What's in the box",
    "conn.title": "What comes with it",
    "conn.sub": "What actually ships with the product and what is charged separately",
    "conn.btnLs": "The full offer on Amazon",
    "conn.btnBt": "Tablet only",
    "conn.m1l": "Fast charger",
    "conn.m1Ls": "Included in the box",
    "conn.m1Bt": "If you buy the tablet on its own",
    "conn.m2l": "microSD card",
    "conn.m2Ls": "The tablet has a microSD slot to expand storage",
    "conn.m2Bt": "Not included — you add it yourself",
    "conn.m3l": "Active pen / cover",
    "conn.m3Ls": "The display supports an active pen",
    "conn.m3Bt": "Not included",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "What you see here is the tablet with the fast charger, the user guide and the warranty card. The tablet supports an active pen and a microSD card, but neither is in the box.",
    "conn.noteBt": "Buy without the bundle and the fast charger and the documents are extra. Check the box contents on the Amazon listing before you order.",
    "box.title": "What arrives",
    "box.sub": "Listed on Amazon.eg",
    "box.i1": "Infinix Xpad 30E tablet (X1102B) — dark blue — 128GB",
    "box.i2": "10W fast charger",
    "box.i3": "User guide and warranty card",
    "box.i4": "Infinix 12-month limited warranty covering manufacturing defects",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Infinix Xpad 30E (X1102B) — MediaTek G80 / 4+4 / 128GB / 4G — dark blue",
    "offer.seller": "Listed on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free delivery per the Amazon listing",
    "offer.ret": "Returns",
    "offer.retV": "Full refund or replacement within 15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the manufacturer's published specifications",
    "rev.count": "Android 15 · 4G",
    "rev.q1": "120Hz screen",
    "rev.n1": "Display",
    "rev.v1": "2000×1920",
    "rev.q2": "7200 mAh battery",
    "rev.n2": "Battery",
    "rev.v2": "10W charging",
    "rev.q3": "4G connectivity",
    "rev.n3": "Connection",
    "rev.v3": "Nano SIM",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Does it take a SIM card?",
    "faq.a1": "Yes. The X1102B listing on amazon.eg states a nano SIM slot and 4G, plus Wi-Fi, NFC and Bluetooth 5.2. There is also a microSD slot for extra storage.",
    "faq.q2": "How much memory?",
    "faq.a2": "4+4GB of RAM — 4GB of physical memory plus 4GB of expansion — and 128GB of storage. The product description on Amazon writes it as \"RAM: 4+4, ROM: 128GB\".",
    "faq.q3": "What cameras does it have?",
    "faq.a3": "An 8MP rear camera and a 5MP front camera, with 4x digital zoom. The specs also list handwriting recognition (OCR) and a touch display with pen support.",
    "faq.q4": "Can I pay cash on delivery?",
    "faq.a4": "No. The amazon.eg page states that this product from this seller is card-only at checkout. The available options are electronic card payment and instalments, and every detail shows on the product page before you confirm the order.",
    "faq.q5": "How big is the battery?",
    "faq.a5": "7200 mAh with 10W fast charging over Type-C. The 7200 mAh figure appears in the product title and description on Amazon.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Yes. The return policy on the product page states a full refund or replacement within 15 days of delivery. Check the policy on the product page before you buy.",
    "cta.title": "Ready to try it?",
    "cta.sub": "Order it on Amazon.eg — an Infinix Xpad 30E with an 11-inch 120Hz screen and 4G",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Infinix Xpad 30E. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why Infinix",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Infinix Xpad 30E suits",
    "aud.sub": "A 120Hz tablet with 4G — for study, entertainment and daily use",
    "aud.a1t": "Heavy readers and studiers",
    "aud.a1b": "An 11-inch 2000×1920 screen at 120Hz in a 498 g body — comfortable for long reading and courses.",
    "aud.a2t": "People who need to stay connected",
    "aud.a2b": "A nano SIM with 4G means mobile data anywhere, and there is a microSD slot for when storage runs out.",
    "aud.a3t": "People into entertainment",
    "aud.a3b": "The G80 chipset with integrated graphics and a 120Hz screen — smooth video and light games that keep up with your scrolling.",
    "aud.a4t": "Buyers chasing value",
    "aud.a4b": "You get 8GB of RAM, 128GB of storage, a 7200 mAh battery and a 12-month warranty, backed by Amazon.eg.",
    "var.eyebrow": "Pick a variant",
    "var.title": "The version this page covers",
    "var.sub": "This product is listed in a single version on Amazon, and every baseline spec is in the table above.",
    "var.note": "Ratings and review counts as shown on the Amazon.eg listing when this page was last updated and can change with availability — the live price always shows on the product page at Amazon.",
    "var.i1.tag": "In stock now",
    "var.i1.name": "Infinix Xpad 30E — dark blue",
    "var.i1.dim": "128GB · 4+4GB RAM · 4G",
    "var.i1.rating": "5.0 out of 5 stars",
    "var.i1.count": "4 ratings on Amazon",
    "var.i1.note": "Card payment · Listed on Amazon.eg",
    "var.i1.buy": "See it on Amazon",
    "var.i2.tag": "The version this page covers",
    "var.i2.name": "Infinix Xpad 30E — dark blue",
    "var.i2.dim": "128GB · 4+4GB RAM · 4G",
    "var.i2.rating": "5.0 out of 5 stars",
    "var.i2.count": "4 ratings on Amazon",
    "var.i2.note": "Card payment · Listed on Amazon.eg",
    "var.i2.buy": "See it on Amazon",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "This item is paid for by electronic card on Amazon.eg, with instalment options depending on your card - every price, instalment, discount and deal detail appears on Amazon's own page at checkout.",
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
    ? 'انفنيكس اكس باد 30E — تابلت 11 بوصة 4G برام 8 جيجا'
    : 'Infinix Xpad 30E — 11-inch 4G tablet with 8GB RAM';

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
const LIVE_KEY = 'infinix-xpad-30e-live';
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];
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
