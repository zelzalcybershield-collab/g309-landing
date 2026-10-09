/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FMR7H8FT?tag=zoq-21';
const STORE_KEY = 'oraimo-watch6-osw807-lang';

const dict = {
  "ar": {
    "nav.tagline": "2.04 بوصة · 8 أيام · بلوتوث 5.3",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ساعة ذكية شاشة 2.04 بوصة",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Oraimo",
    "hero.title2": "Watch 6 OSW-807",
    "hero.sub": "ساعة ذكية بشاشة 2.04 بوصة وبلوتوث 5.3 للمكالمات، متابعة صحية 24/7 وبطارية تكفي 8 أيام",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#7 في الساعات الذكية على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "شاشة",
    "hero.chip1v": "2.04 بوصة HD",
    "hero.chip2l": "البطارية",
    "hero.chip2v": "8 أيام",
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
    "trust.returns": "استرجاع 15 يوم",
    "trust.returnsSub": "وإرجاع مجاني حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة صوتية معروفة",
    "trust.primeSub": "تقييم 4.1 من 5 من 211 عميل على أمازون",
    "k.weight": "الشاشة",
    "k.weightSub": "2.04 بوصة بجودة HD",
    "k.dpi": "البطارية",
    "k.dpiSub": "ليثيوم أيون — متوسط 8 أيام",
    "k.batt": "المقاومة",
    "k.battSub": "مية وغبار حتى 1.5 متر",
    "k.btns": "الوزن",
    "k.btnsSub": "200 جرام حسب الصفحة",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شاشة 2.04 بوصة HD",
    "s1.b": "شاشة كبيرة 2.04 بوصة بجودة HD — عرض أوضح للإشعارات والوجوه والبيانات الصحية، والجودة دي مذكورة في اسم المنتج نفسه.",
    "s2.t": "وجوه ساعة بتقنية الذكاء الاصطناعي",
    "s2.b": "AI-Generated Watch Faces بتصاميم لا نهائية بتتكيف مع مزاجك وهيدومك — شكل جديد كل يوم زي ما بيقول الوصف.",
    "s3.t": "متابعة صحية شاملة 24/7",
    "s3.b": "نبض القلب على مدار الساعة وSpO₂ وتحليل النوم والخطوات والسعرات والمسافة — والورقة بتذكر قياس ضغط الدم كمان.",
    "s4.t": "بطارية حتى 8 أيام",
    "s4.b": "بطارية ليثيوم أيون بمتوسط حياة 8 أيام وشحن 3 ساعات — تكفي الاستخدام اليومي والتدريبات الطويلة.",
    "s5.t": "اتصال ذكي بلوتوث 5.3",
    "s5.b": "إشعارات فورية للمكالمات والمسجات والتطبيقات، وتحكم في تشغيل الموسيقى وكاميرا الموبايل من المعصم.",
    "s6.t": "تصميم يتحمل المية والغبار",
    "s6.b": "مقاومة مية وغبار حتى 1.5 متر بمستوى مكتوب Waterproof — للاستخدام اليومي والرياضة الخارجية حسب ورقة المواصفات.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود (Black)",
    "t.sensor": "النوع",
    "t.sensorV": "ساعة ذكية",
    "t.switch": "رقم الموديل",
    "t.switchV": "OSW-807",
    "t.weight": "الوزن",
    "t.weightV": "200 جرام حسب الصفحة",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "بلوتوث 5.3",
    "t.batt": "البطارية",
    "t.battV": "ليثيوم أيون · 8 أيام · شحن 3 ساعات",
    "t.os": "التوافق",
    "t.osV": "أندرويد · iOS",
    "t.hand": "الضمان",
    "t.handV": "حسب صفحة المنتج",
    "t.inbox": "في العلبة",
    "t.inboxV": "الساعة الذكية (Watch)",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "ساعة فيها كل ده، والسعر مختلف",
    "conn.sub": "ساعة ذكية اقتصادية بوظائف كاملة وساعة ذكية فخمة — الفرق في السعر والنظام حول الشاشة",
    "conn.btnLs": "ساعة Oraimo OSW-807 (زي دي)",
    "conn.btnBt": "ساعة ذكية فخمة",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر اقتصادي مقابل كل الميزات دي",
    "conn.m1Bt": "سعر مرتفع بحزام ونظام متطور",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي عايز مكالمات وصحة وإشعارات ببلوتوث معقولة",
    "conn.m2Bt": "اللي محتاج نظام تطبيقات وأكو سبيئة كاملة",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "شاشة 2.04 واتصال بلوتوث والرياضة — بنصف إلى أقل من السعر الفخم",
    "conn.m3Bt": "المرونة والجودة والإكسسوارات أكتر — من عنده قيمة السعر",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو المطلوب ساعة تعمل المكالمات والمتابعة الصحية والإشعارات بتكلفة معقولة، Oraimo بتقدم ده من غير بطء في التعامل اليومي.",
    "conn.noteBt": "الساعة الفخمة بتجيب هاردوير ونظام أقوى، بس كتير من ميزاتها بترجع لعمل أساسي زي الإشعارات والرياضة — يعني بتدفع زيادة لاستخدام مش بيتغير كتير.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المحتوى حسب Built-In Media على صفحة أمازون مصر",
    "box.i1": "ساعة Oraimo Watch 6",
    "box.i2": "سوار سيليكون أسود",
    "box.i3": "قدرات صحية ولياقة واتصال",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Oraimo Watch 6 OSW-807 — ساعة ذكية 2.04 بوصة بلوتوث 5.3 — أسود",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 4.1 من 5 بناءً على 211 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "2.04″",
    "rev.n1": "الشاشة",
    "rev.v1": "واضحة للنهار والليل",
    "rev.q2": "8 أيام",
    "rev.n2": "البطارية",
    "rev.v2": "بمتوسط استخدام ذكر رسمي",
    "rev.q3": "5.3",
    "rev.n3": "البلوتوث",
    "rev.v3": "مكالمات ثابتة من المعصم",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بتقيس إيه؟",
    "faq.a1": "نبض القلب 24/7 وSpO₂ وتحليل النوم والخطوات والسعرات والمسافة — مع قياس ضغط الدم من ضمن المقاييس المذكورة.",
    "faq.q2": "بطاريتها تعيش قد إيه؟",
    "faq.a2": "متوسط الحياة 8 أيام حسب الورقة التقنية، وشحنتها من الصفر بتاخد حوالي 3 ساعات.",
    "faq.q3": "بتشتغل مع الآيفون؟",
    "faq.a3": "الورقة بتشاور على توافق Android Devices و iOS Devices — فبتفيض مع أندرويد والآيفون معاً.",
    "faq.q4": "بتتحمل المية؟",
    "faq.a4": "مستوى المقاومة Waterproof بسمك 1.5 متر حسب الورقة — تحتمل الرش والمطر والخروج، مش غوص.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني واسترجاع خلال 15 يوم حسب سياسة أمازون. راجع التفاصيل على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تعيش يومك من المعصم؟",
    "cta.sub": "اطلب Oraimo Watch 6 OSW-807 من أمازون مصر — شاشة 2.04 بوصة وصحة واتصال وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لساعة Oraimo Watch 6 OSW-807 الذكية. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه OSW-807",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الساعة دي ليه",
    "aud.title": "اللي هتفيد معاهم Oraimo",
    "aud.sub": "صحة نهارية ومكالمات وإشعارات ببلوتوث — ساعة يومية للإنتاج والرياضة",
    "aud.a1t": "اللي متابعين صحتهم",
    "aud.a1b": "نبض وSpO₂ ونوم على المعصم طول اليوم — ومؤشرات بتفضل متاحة من غير موبايل.",
    "aud.a2t": "اللي شغلهم اتصالات",
    "aud.a2b": "مكالمات بلوتوث 5.3 وردّها من المعصم — وإشعارات المسجات والتطبيقات قدامك فوراً.",
    "aud.a3t": "اللي بيحبوا يغيّروا شكل الساعة",
    "aud.a3b": "وجوه ساعة من الذكاء الاصطناعي كل يوم — شكل بيتغير مع مزاجك من غير ما تشتري وجوه.",
    "aud.a4t": "اللي بيدوّر على هدية عملية",
    "aud.a4b": "تصميم أسود أنيق بيناسب الرجالة والستات (Unisex) — هدية شغالة في الشغل والرياضة.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "2.04″ · 8 days · BT 5.3",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Smart watch, 2.04-inch display",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Oraimo",
    "hero.title2": "Watch 6 OSW-807",
    "hero.sub": "A smart watch with a 2.04-inch display, Bluetooth 5.3 calling, 24/7 health tracking and an 8-day battery",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#7 in smartwatches on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Display",
    "hero.chip1v": "2.04-inch HD",
    "hero.chip2l": "Battery",
    "hero.chip2v": "8 days",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery available",
    "trust.codSub": "For your purchase on Amazon.eg",
    "trust.delivery": "Available on Amazon.eg",
    "trust.deliverySub": "Delivery dates on the product page",
    "trust.returns": "15-day returns",
    "trust.returnsSub": "Free returns under Amazon's policy for this item",
    "trust.prime": "Known and trusted brand",
    "trust.primeSub": "Rated 4.1 out of 5 by 211 customers on Amazon",
    "k.weight": "Screen",
    "k.weightSub": "a 2.04-inch HD panel",
    "k.dpi": "Battery",
    "k.dpiSub": "lithium ion - 8-day average",
    "k.batt": "Resistance",
    "k.battSub": "water & dust to 1.5 m",
    "k.btns": "Weight",
    "k.btnsSub": "200 g as listed",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "A 2.04-inch HD display",
    "s1.b": "A big 2.04-inch HD screen - clearer notifications, faces and health data, and the display is right in the name.",
    "s2.t": "AI-generated watch faces",
    "s2.b": "AI-generated watch faces with endless designs that adapt to your mood and outfit - a fresh look every day, as the description says.",
    "s3.t": "24/7 comprehensive health",
    "s3.b": "24/7 heart rate, SpO₂, sleep analysis, steps, calories and distance - with blood pressure among the listed metrics.",
    "s4.t": "Up to 8 days on a charge",
    "s4.b": "A lithium ion battery averaging 8 days per the sheet, in a 3-hour charge - enough for daily use and long workouts.",
    "s5.t": "Smart Bluetooth 5.3 calls",
    "s5.b": "Instant call, message and app alerts, plus music playback and phone-camera control straight from the wrist.",
    "s6.t": "Water and dust resistant",
    "s6.b": "Water and dust resistance to 1.5 m, listed as waterproof - for daily wear and outdoor activity per the spec sheet.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Smart watch",
    "t.switch": "Model number",
    "t.switchV": "OSW-807",
    "t.weight": "Weight",
    "t.weightV": "200 g as listed",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "Bluetooth 5.3",
    "t.batt": "Battery",
    "t.battV": "lithium ion · 8 days · 3 h charge",
    "t.os": "Compatibility",
    "t.osV": "Android · iOS",
    "t.hand": "Warranty",
    "t.handV": "per the product page",
    "t.inbox": "In the box",
    "t.inboxV": "The smart watch",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "Same features, different price",
    "conn.sub": "A fully loaded budget smart watch and a premium one - the gap is price, ecosystem and build",
    "conn.btnLs": "Oraimo OSW-807 (this one)",
    "conn.btnBt": "A premium smart watch",
    "conn.m1l": "Cost",
    "conn.m1Ls": "an economical price for this feature set",
    "conn.m1Bt": "A higher price for a more advanced system around it",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone wanting calls, health and alerts over solid Bluetooth",
    "conn.m2Bt": "Anyone who needs a full app store and ecosystem",
    "conn.m3l": "What changes",
    "conn.m3Ls": "2.04-inch display, BT calling and fitness - at a fraction of premium price",
    "conn.m3Bt": "More versatility, polish and extras - if the price fits you",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If what you need is a watch that handles calls, health and notifications at a sensible cost, Oraimo delivers that without slowing your day.",
    "conn.noteBt": "Premium watches bring premium hardware and extras, but many features boil down to basic alerts and workouts - you pay more for usage that often stays the same.",
    "box.title": "What arrives",
    "box.sub": "Content per the Built-In Media field on the amazon.eg product page",
    "box.i1": "The Oraimo Watch 6",
    "box.i2": "A black silicone strap",
    "box.i3": "Health, fitness and call capability",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Oraimo Watch 6 OSW-807 - smart watch, 2.04-inch, Bluetooth 5.3 - black",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days and free returns per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.1 out of 5 rating from 211 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "2.04″",
    "rev.n1": "Display",
    "rev.v1": "bright for day and night",
    "rev.q2": "8 days",
    "rev.n2": "Battery",
    "rev.v2": "official average use",
    "rev.q3": "5.3",
    "rev.n3": "Bluetooth",
    "rev.v3": "steady wrist calls",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What does it track?",
    "faq.a1": "24/7 heart rate, SpO₂, sleep analysis, steps, calories and distance - with blood pressure among the listed metrics.",
    "faq.q2": "How long does the battery last?",
    "faq.a2": "The sheet lists an 8-day average battery life, with a full charge in roughly 3 hours.",
    "faq.q3": "Does it work with iPhone?",
    "faq.a3": "The sheet lists both Android devices and iOS devices - so it pairs with Android and iPhone alike.",
    "faq.q4": "Is it waterproof?",
    "faq.a4": "The resistance level is listed waterproof to 1.5 m - it handles splashes, rain and outdoors, not diving.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing points to free returns and a 15-day return window per Amazon’s policy. Check the details on the product page before you buy.",
    "cta.title": "Ready to run your day from the wrist?",
    "cta.sub": "Order the Oraimo Watch 6 OSW-807 on Amazon.eg - 2.04-inch screen, health and calls, on cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Oraimo Watch 6 OSW-807 smart watch. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why OSW-807",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Oraimo suits",
    "aud.sub": "Daily health, calls and notifications over Bluetooth - a daily watch for work and workouts",
    "aud.a1t": "Health-minded users",
    "aud.a1b": "Heart rate, SpO₂ and sleep on the wrist all day - indicators that stay handy without the phone.",
    "aud.a2t": "Call-heavy workers",
    "aud.a2b": "Bluetooth 5.3 calls answered from the wrist, with messages and app alerts right there.",
    "aud.a3t": "Fans of fresh looks",
    "aud.a3b": "AI-generated watch faces change daily - a fitting new look without buying new ones.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "A sleek black design that suits men and women (unisex) - a working gift for work and gym.",
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
    ? 'ساعة Oraimo Watch 6 OSW-807 ذكية 2.04 بوصة بلوتوث | أمازون مصر'
    : 'Oraimo Watch 6 OSW-807 Smart Watch, 2.04-inch, Bluetooth 5.3 | Amazon Egypt';

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
const LIVE_KEY = 'oraimo-watch6-osw807-live';
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
const GAL_FILES = ["img/o7-00.jpg","img/o7-01.jpg","img/o7-02.jpg","img/o7-03.jpg","img/o7-04.jpg","img/o7-05.jpg","img/o7-06.jpg","img/o7-07.jpg","img/o7-08.jpg","img/o7-09.jpg"];
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
