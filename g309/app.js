/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0D5WNNTZP?tag=zoq-21';
const STORE_KEY = 'g309-lang';

const dict = {
  "ar": {
    "nav.tagline": "LIGHTSPEED · أبيض",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "Gaming Mouse · لاسلكي",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "لوجيتك G309",
    "hero.title2": "LIGHTSPEED",
    "hero.sub": "ماوس جيمنج لاسلكي خفيف جداً بـ 86 جرام فقط، بحساس HERO 25K بدقة تتبع تحت الميكرون، ومفاتيح LIGHTFORCE هجينة، وبطارية AA واحدة تدوم أكثر من 300 ساعة لعب.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#155 في أفضل ماوسات PC جيمنج",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · متوفر على أمازون مصر",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "الوزن",
    "hero.chip1v": "86 g",
    "hero.chip2l": "الحساسية",
    "hero.chip2v": "25,000 DPI",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر — اضغط أي صورة لتكبيرها.",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "ادفع كاش عند الباب",
    "trust.delivery": "شحن مجاني",
    "trust.deliverySub": "توصيل سريع ومؤمَّن عبر أمازون",
    "trust.returns": "إرجاع 15 يوم",
    "trust.returnsSub": "استرجاع مجاني بدون مصاريف شحن",
    "trust.prime": "من Amazon",
    "trust.primeSub": "تُشحن وتُسلَّم بواسطة أمازون مصر",
    "k.weight": "الوزن",
    "k.weightSub": "ببطارية AA مرفقة",
    "k.dpi": "أقصى حساسية",
    "k.dpiSub": "تتبع sub-micron بدون تنعيم",
    "k.batt": "ساعة بطارية",
    "k.battSub": "بطارية AA واحدة",
    "k.btns": "أزرار قابلة للبرمجة",
    "k.btnsSub": "اضغط عليها بطرق مختلفة",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "G309 مصمّمة للوصول إلى أعلى أداء ممكن في الجيمنج، بدون تنازل عن الراحة أو التحمّل.",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "وزن 86 جرام فقط",
    "s1.b": "من أخف الماوسات اللاسلكية للجيمنج. مع بطارية AA مرفقة تزن 86 جرام، أو 68 جرام بدون بطارية مع نظام شحن POWERPLAY.",
    "s2.t": "حساس HERO 25K",
    "s2.b": "حساس بصري بدقة 25,000 نقطة لكل بوصة، يتتبّع الإبرة حتى تحت الميكرون الواحد مع صفر تنعيم (zero smoothing) — دقة تصويب لا تخطئ.",
    "s3.t": "مفاتيح LIGHTFORCE الهجينة",
    "s3.b": "مفاتيح ضوئية-ميكانيكية: سرعة المفاتيح الضوئية مع إحساس المفاتيح الميكانيكية، وأداء محسّن للألعاب وبلا نقرات مزدوجة غير مقصودة.",
    "s4.t": "بطارية 300+ ساعة",
    "s4.b": "بطارية AA واحدة تعطيك أكثر من 300 ساعة لعب متواصل. وبفضل ودونجل LIGHTSPEED المدمج، تقدر تلعب ببطارية لا نهائية مع POWERPLAY.",
    "s5.t": "بدون سلك بذكاء",
    "s5.b": "بدّل بين LIGHTSPEED اللاسلكي (زمن استجابة منخفض جداً) والبلوتوث بضغطة واحدة من نفس الماوس —مرونة كاملة بين الجيمنج واستخدام اليوم.",
    "s6.t": "دقة تصويب محسّنة",
    "s6.b": "مزيج من الحساس عالي الدقة والمفاتيح السريعة ووزن خفيف = تحكم أفضل في كل حركة، سواء FPS أو MOBA.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض",
    "t.sensor": "الحساس",
    "t.sensorV": "HERO 25K · 25,000 DPI",
    "t.switch": "المفاتيح",
    "t.switchV": "LIGHTFORCE Hybrid (ضوئي-ميكانيكي)",
    "t.weight": "الوزن",
    "t.weightV": "86 جم (مع البطارية)",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "LIGHTSPEED + بلوتوث",
    "t.batt": "البطارية",
    "t.battV": "1 × AA مرفقة · 300+ ساعة",
    "t.os": "أنظمة التشغيل",
    "t.osV": "Windows · macOS · Linux",
    "t.hand": "الاستخدام",
    "t.handV": "اليد اليمنى",
    "t.inbox": "في العلبة",
    "t.inboxV": "الماوس + بطارية AA",
    "conn.eyebrow": "الاتصال",
    "conn.title": "وضعين في نفس الماوس",
    "conn.sub": "اضغط على الوضع المناسب وأشوف الفرق في سرعة الاستجابة — الماوس نفسها تخدمك في الجيمنج وعلى المكتب.",
    "conn.btnLs": "LIGHTSPEED",
    "conn.btnBt": "بلوتوث",
    "conn.m1l": "زمن الاستجابة",
    "conn.m1Ls": "1 ms",
    "conn.m1Bt": "~ 30 ms",
    "conn.m2l": "المسافة",
    "conn.m2Ls": "10 m",
    "conn.m2Bt": "10 m",
    "conn.m3l": "الاستخدام",
    "conn.m3Ls": "Competitive",
    "conn.m3Bt": "Daily use",
    "conn.vizTitle": "نقل البيانات",
    "conn.noteLs": "وضع LIGHTSPEED هو الوضع المُحسَّن للألعاب: زمن استجابة 1 مللي ثانية تقريباً، مثالي للألعاب التنافسيةlike Valorant و CS.",
    "conn.noteBt": "البلوتوث مثالي للاستخدام اليومي: يوفّر البطارية، يتصل بالساعات والحواسيب والتابلت بدون الحاجة للودونجل.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج أصلي من لوجيتك، ويوصلك في عبوته الأصلية.",
    "box.i1": "ماوس Logitech G309 أبيض",
    "box.i2": "بطارية AA واحدة مرفقة",
    "box.i3": "ودونجل LIGHTSPEED مدمج داخل الماوس",
    "box.i4": "دليل المستخدم وبطاقة الضمان",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Logitech G309 LIGHTSPEED — أبيض",
    "offer.seller": "يُشحن بواسطة Amazon · يبيعه Hardware Market Egypt",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "غداً (إلى القاهرة الجديدة)",
    "offer.ret": "مدة الإرجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشترِ الآن من أمازون",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "offer.syncLabel": "السعر متزامن تلقائياً من صفحة أمازون — آخر تحديث:",
    "offer.syncStale": "(تعذّر التحديث، معروض آخر سعر معروف)",
    "offer.instTitle": "خيارات التقسيط",
    "offer.instSub": "تقسيط على فترات مختلفة من خلال بنوك مصر",
    "offer.months": "شهر",
    "offer.p1": "933.00 EGP / شهرياً",
    "offer.p2": "466.50 EGP / شهرياً",
    "offer.p3": "233.25 EGP / شهرياً",
    "offer.p4": "116.63 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض المتاحة. قيمة فعلية للمبلغ والتقسيط تظهر في صفحة الدفع.",
    "offer.couponTitle": "خصم 10% ببطاقات البنك الأهلي",
    "offer.couponSub": "اختار الكود حسب نوع بطاقتك — الخصم من أمازون نفسه",
    "offer.copy": "نسخ",
    "offer.couponNote": "اضغط على الكود للنسخ، واستخدمه في صفحة الدفع. يعمل فقط على بطاقة NBE Visa المؤهلة (Signature للكود الأول، Platinum للكود التاني).",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "86 جرام · 25,000 DPI · لاسلكي",
    "rev.q1": "86 جرام فقط — والبطارية محسوبة في الوزن",
    "rev.n1": "الوزن",
    "rev.v1": "خفيف جداً",
    "rev.q2": "حساس HERO بدقة 25,000 نقطة",
    "rev.n2": "الحساس",
    "rev.v2": "دقة عالية",
    "rev.q3": "بطارية AA واحدة تكفي أكثر من 300 ساعة لعب",
    "rev.n3": "البطارية",
    "rev.v3": "من غير شحن",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "إيه الفرق بين LIGHTSPEED والبلوتوث؟",
    "faq.a1": "LIGHTSPEED هو الاتصال اللاسلكي المخصص للألعاب من لوجيتك، وزمن استجابته حوالي 1 مللي ثانية — مثالي للألعاب التنافسية. البلوتوث أبطأ (حوالي 30 مللي ثانية) لكنه أوفر في البطارية ومناسب للاستخدام اليومي. تقدر تبدّل بينهم بضغطة من نفس الماوس.",
    "faq.q2": "الماوس ده يشتغل على أي أنظمة؟",
    "faq.a2": "أيوا، G309 متوافق مع Windows و macOS و Linux. الماوس موجه للكمبيوتر (PC)، أما دعم PlayStation أو Xbox بيكون في موديلات مخصصة تانية.",
    "faq.q3": "البطارية بتدوم قد إيه؟",
    "faq.a3": "أكتر من 300 ساعة لعب متواصل على بطارية AA واحدة مرفقة. مع نظام الشحن اللاسلكي POWERPLAY بيبقى المدى لا نهائي.",
    "faq.q4": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a4": "أيوا، تقدر ترجّعه مجاناً خلال 15 يوم من الاستلام بدون أي مصاريف شحن، بشرط يكون المنتج جديد وفي حالته الأصلية. لازم تعمل إرجاع من صفحة الطلبات على أمازون.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "أيوا، الدفع عند الاستلام متاح للمنتج. كمان ينفع تدفع بطاقة أو تقسط على عدة شهور من خلال بنوك مصر. كل الدفعات بتتم بشكل آمن عبر صفحة أمازون.",
    "faq.q6": "المنتج أصلي وبضمان؟",
    "faq.a6": "المنتج أصلي من لوجيتك (المصنّع: Logitech) ومتاح على أمازون مصر. بيوصلك في عبوته الأصلية ومعاه كارت الضمان بتاع لوجيتك.",
    "cta.title": "جاهز تجرّب G309؟",
    "cta.sub": "اطلبه دلوقتي من أمازون مصر — شحن مجاني، إرجاع 15 يوم، ودفع عند الاستلام.",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج Logitech G309 LIGHTSPEED. كل الأسعار والتوفر مبنية على صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر والعروض. شعار Logitech علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · AR / EN"
  },
  "en": {
    "nav.tagline": "LIGHTSPEED · White",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "hero.eyebrow": "Gaming Mouse · Wireless",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Logitech G309",
    "hero.title2": "LIGHTSPEED",
    "hero.sub": "An ultra-light wireless gaming mouse at just 86 g, with the HERO 25K sub-micron sensor, LIGHTFORCE hybrid switches, and a single AA battery that lasts 300+ hours of play.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "#155 in PC Gaming Mice",
    "hero.priceLabel": "Price incl. VAT",
    "hero.vat": "Price includes VAT · Available on Amazon Egypt",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See installments",
    "hero.chip1l": "Weight",
    "hero.chip1v": "86 g",
    "hero.chip2l": "Sensitivity",
    "hero.chip2v": "25,000 DPI",
    "gal.eyebrow": "The product",
    "gal.title": "See it up close",
    "gal.sub": "Images from the official product page on Amazon Egypt — click any one to enlarge.",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product image",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Pay cash at your door",
    "trust.delivery": "Free delivery",
    "trust.deliverySub": "Fast, tracked delivery",
    "trust.returns": "15-day returns",
    "trust.returnsSub": "Free return, no shipping fee",
    "trust.prime": "From Amazon",
    "trust.primeSub": "Shipped & delivered by Amazon Egypt",
    "k.weight": "Weight",
    "k.weightSub": "With included AA battery",
    "k.dpi": "Max sensitivity",
    "k.dpiSub": "Sub-micron tracking, zero smoothing",
    "k.batt": "Hours of battery",
    "k.battSub": "One single AA battery",
    "k.btns": "Programmable buttons",
    "k.btnsSub": "Press them different ways",
    "specs.eyebrow": "Specifications",
    "specs.title": "Every detail you need",
    "specs.sub": "The G309 is built to hit maximum gaming performance, with no compromise on comfort or endurance.",
    "specs.table": "Full technical sheet",
    "s1.t": "Only 86 g light",
    "s1.b": "One of the lightest wireless gaming mice around. 86 g with the included AA battery — or 68 g battery-free with the POWERPLAY wireless charging system.",
    "s2.t": "HERO 25K sensor",
    "s2.b": "An optical sensor rated to 25,000 DPI that tracks exactly to the sub-micron with zero smoothing for pinpoint-accurate aim.",
    "s3.t": "LIGHTFORCE hybrid switches",
    "s3.b": "Optical-mechanical switches deliver the speed of optical with the feel of mechanical, tuned for optimized gaming performance.",
    "s4.t": "300+ hour battery",
    "s4.b": "A single AA battery gives you more than 300 hours of continuous play. And with the LIGHTSPEED receiver built in, you can go endless on battery with POWERPLAY.",
    "s5.t": "Two ways to go wireless",
    "s5.b": "Flip between ultra-low-latency LIGHTSPEED and Bluetooth on the same mouse — total wireless freedom for gaming and everyday use.",
    "s6.t": "Precision you can feel",
    "s6.b": "High-DPI sensor + fast switches + low weight = tighter control on every movement, whether you play FPS or MOBA.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "White",
    "t.sensor": "Sensor",
    "t.sensorV": "HERO 25K · 25,000 DPI",
    "t.switch": "Switches",
    "t.switchV": "LIGHTFORCE Hybrid (optical-mechanical)",
    "t.weight": "Weight",
    "t.weightV": "86 g (with battery)",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "LIGHTSPEED + Bluetooth",
    "t.batt": "Battery",
    "t.battV": "1 × AA included · 300+ hrs",
    "t.os": "OS support",
    "t.osV": "Windows · macOS · Linux",
    "t.hand": "Hand orientation",
    "t.handV": "Right-hand",
    "t.inbox": "In the box",
    "t.inboxV": "Mouse + AA battery",
    "conn.eyebrow": "Connectivity",
    "conn.title": "Two modes, one mouse",
    "conn.sub": "Pick a mode and see the difference in response time — the same mouse covers both your gaming and your desk.",
    "conn.btnLs": "LIGHTSPEED",
    "conn.btnBt": "Bluetooth",
    "conn.m1l": "Response time",
    "conn.m1Ls": "1 ms",
    "conn.m1Bt": "~ 30 ms",
    "conn.m2l": "Range",
    "conn.m2Ls": "10 m",
    "conn.m2Bt": "10 m",
    "conn.m3l": "Best for",
    "conn.m3Ls": "Competitive",
    "conn.m3Bt": "Daily use",
    "conn.vizTitle": "Data transfer",
    "conn.noteLs": "LIGHTSPEED is the gaming-optimised mode: roughly 1 ms response time, ideal for competitive titles like Valorant and CS.",
    "conn.noteBt": "Bluetooth is great for everyday use: it saves battery and pairs with watches, laptops and tablets — no dongle needed.",
    "box.title": "What you get",
    "box.sub": "The genuine Logitech product, delivered in its original box.",
    "box.i1": "Logitech G309 mouse, white",
    "box.i2": "One AA battery included",
    "box.i3": "LIGHTSPEED receiver built into the mouse",
    "box.i4": "User guide and warranty card",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "Logitech G309 LIGHTSPEED — White",
    "offer.seller": "Shipped by Amazon · Sold by Hardware Market Egypt",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Tomorrow (to New Cairo)",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy now on Amazon",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "offer.syncLabel": "Price synced from the Amazon page — last updated:",
    "offer.syncStale": "(could not refresh, showing last known price)",
    "offer.instTitle": "Installment options",
    "offer.instSub": "Split the payment over several periods with Egyptian banks",
    "offer.months": "months",
    "offer.p1": "933.00 EGP / mo",
    "offer.p2": "466.50 EGP / mo",
    "offer.p3": "233.25 EGP / mo",
    "offer.p4": "116.63 EGP / mo",
    "offer.instNote": "Figures are indicative and depend on the bank and current offers. The exact installment and total show at checkout.",
    "offer.couponTitle": "10% off with NBE cards",
    "offer.couponSub": "Pick the code for your card type — the discount is Amazon’s",
    "offer.copy": "Copy",
    "offer.couponNote": "Click a code to copy it, then apply it at checkout. Valid only on an eligible NBE Visa card: Signature for the first code, Platinum for the second.",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Based on the product specifications as published by the manufacturer",
    "rev.count": "86 g · 25,000 DPI · wireless",
    "rev.q1": "Only 86 g — and that includes the battery",
    "rev.n1": "Weight",
    "rev.v1": "Very light",
    "rev.q2": "HERO sensor at 25,000 DPI",
    "rev.n2": "Sensor",
    "rev.v2": "High precision",
    "rev.q3": "One AA battery runs 300+ hours of play",
    "rev.n3": "Battery",
    "rev.v3": "No charging",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What is the difference between LIGHTSPEED and Bluetooth?",
    "faq.a1": "LIGHTSPEED is Logitech's gaming-dedicated wireless tech with roughly 1 ms response time — ideal for competitive titles. Bluetooth is slower (about 30 ms) but saves battery and is better for everyday use. You can switch between them from the same mouse.",
    "faq.q2": "Which systems does this mouse work with?",
    "faq.a2": "The G309 works with Windows, macOS and Linux. It is a PC mouse — the console-compatible variants are separate models.",
    "faq.q3": "How long does the battery last?",
    "faq.a3": "More than 300 hours of continuous play on a single included AA battery. With the POWERPLAY wireless charging system the battery is effectively endless.",
    "faq.q4": "Can I return it if I do not like it?",
    "faq.a4": "Yes — you can return it free of charge within 15 days of delivery with no shipping fees, as long as it is new and in original condition. Start the return from your Amazon Orders page.",
    "faq.q5": "Is cash on delivery available?",
    "faq.a5": "Yes, cash on delivery is available for this product. You can also pay by card or split the payment over several months with Egyptian banks. All payments are processed securely on Amazon.",
    "faq.q6": "Is it genuine and under warranty?",
    "faq.a6": "The product is genuine Logitech (manufacturer: Logitech) and is sold on Amazon Egypt. It arrives in its original box with the Logitech warranty card inside.",
    "cta.title": "Ready to try the G309?",
    "cta.sub": "Order it now on Amazon Egypt — free delivery, 15-day returns, and cash on delivery.",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the Logitech G309 LIGHTSPEED. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. Logitech is a registered trademark.",
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
    ? 'لوجيتك G309 LIGHTSPEED — ماوس جيمنج لاسلكي خفيف | أمازون مصر'
    : 'Logitech G309 LIGHTSPEED — Lightweight Wireless Gaming Mouse | Amazon Egypt';

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
const LIVE_KEY = 'g309-live';
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
const GAL_FILES = ["img/g309-00.jpg","img/g309-01.jpg","img/g309-02.jpg","img/g309-03.jpg","img/g309-04.jpg","img/g309-05.jpg","img/g309-06.jpg","img/g309-07.jpg","img/g309-08.jpg"];
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
