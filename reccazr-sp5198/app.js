/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0GC79QNXN?tag=zoq-21';
const STORE_KEY = 'reccazr-sp5198-lang';

const dict = {
  "ar": {
    "nav.tagline": "10 واط · 2.0CH",
    "nav.specs": "المواصفات",
    "nav.connect": "سلكي · USB+AUX",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "سماعات مكتبية · RGB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "RECCAZR SP5198",
    "hero.title2": "10 واط · إضاءة RGB",
    "hero.sub": "سماعات مكتبية صغيرة بتعطي صوت واضح وباس حلو، وإضاءة RGB بها 6 أوضاع — تعمل بسلك USB وسماعة AUX ما تحتاجش باور خارجي",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "سماعات مكتبية 2.0CH — متوفرة على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "القوة",
    "hero.chip1v": "10 واط",
    "hero.chip2l": "الأوضاع",
    "hero.chip2v": "6 أوضاع RGB",
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
    "trust.prime": "تقييم العملاء",
    "trust.primeSub": "تقييم 3.3 من 5 على أمازون مصر",
    "k.weight": "نظام الصوت",
    "k.weightSub": "2.0CH · ستيريو واضح",
    "k.dpi": "الباس",
    "k.dpiSub": "مضخم باس مستقل لتحسين العمق",
    "k.batt": "التشغيل",
    "k.battSub": "USB + AUX 3.5مم",
    "k.btns": "الإضاءة",
    "k.btnsSub": "6 أوضاع RGB أو إيقافها",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "صوت واضح مع باس حلو",
    "s1.b": "نظام 2.0CH بقوة 10 واط مع مضخم باس مستقل، يعطي توازناً بين الصوت العالي والواطئ ويجعل الموسيقى والألعاب مسلية جداً بجانب الشاشة.",
    "s2.t": "6 أوضاع لإضاءة RGB",
    "s2.b": "سماعات SP5198 فيها 6 أوضاع إضاءة ديناميكية مختلفة تليق بأجواء اللعب أو الغناء، وتقدر تحط وضع المفضل أو تطفّي الإضاءة تماماً بالضغط على الزر.",
    "s3.t": "تحكم سهل على المكتب",
    "s3.b": "في أزرار للتحكم في رفع وخفض الصوت بالإضافة لزر واحد لتغيير أوضاع الإضاءة — تحكم مباشر بدون ما تبحث في إعدادات الكمبيوتر.",
    "s4.t": "USB + AUX — Plug & Play",
    "s4.b": "تشتغل مباشرة عن طريق USB للتغذية ووصلة AUX 3.5مم للصوت — ما فيش تعريفات ولا باور خارجي، ما عليك إلا توصلها وبدأت تستمتع.",
    "s5.t": "متوافقة مع أغلب الأجهزة",
    "s5.b": "تصلح للكمبيوتر، اللابتوب، المونيتور، البروجيكتور، وأي جهاز فيه مخرج AUX 3.5مم — مناسبة جداً للإستخدام المكتبي والكتبي العادي.",
    "s6.t": "تصميم مدروس لمكتبك",
    "s6.b": "تصميم رمزي الملاحظ (نوتة موسيقية) مع إضاءة ناعمة، بيأخذ مساحة صغيرة على المكتب وبطلة للشاشة الكبيرة أو ثنائي الشاشة.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "إضاءة",
    "t.colorV": "RGB · 6 أوضاع",
    "t.sensor": "نظام الصوت",
    "t.sensorV": "2.0CH ستيريو",
    "t.switch": "القوة الإجمالية",
    "t.switchV": "10 واط (2 × 5 واط)",
    "t.weight": "المصدر",
    "t.weightV": "USB Powered",
    "t.size": "التوصيل",
    "t.sizeV": "AUX 3.5مم",
    "t.conn": "التحكم",
    "t.connV": "رفع/خفض صوت + تغيير أوضاع الإضاءة",
    "t.batt": "الباس",
    "t.battV": "باس ريفلكس مستقل",
    "t.os": "التوافق",
    "t.osV": "PC · Laptop · Monitor · Projector",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "سماعتين + كابل AUX 3.5مم + كابل USB للتغذية",
    "conn.eyebrow": "التوصيل",
    "conn.title": "ملاحظة عن التوصيل",
    "conn.sub": "سماعات USB Powered زي دي بتعمل توصيل واحد للصوت والتغذية — Plug & Play مباشرة",
    "conn.btnLs": "Plug & Play",
    "conn.btnBt": "سماعات بلوتوث",
    "conn.m1l": "التوصيل",
    "conn.m1Ls": "وصلة USB + AUX واحدة عملية",
    "conn.m1Bt": "لاسلكي عبر بلوتوث",
    "conn.m2l": "التأخير",
    "conn.m2Ls": "منخفض جداً وصوت متزامن مع الفيديو",
    "conn.m2Bt": "يمكن فيه تأخير خفيف حسب الجهاز",
    "conn.m3l": "الأنسب لـ",
    "conn.m3Ls": "مكتب عمل وتركيز على الفيديو والألعاب",
    "conn.m3Bt": "نقل بين غرف أو بدون كابلات خلفية",
    "conn.vizTitle": "مقارنة سريعة",
    "conn.noteLs": "التصميم المكتبي غالباً بيرجّح السلكي (USB+AUX) عشان يقلل التأخير ويبقى صوت واضح بدون قطع. مناسب جداً لو هتحطها جامدة جنب المونيتور.",
    "conn.noteBt": "البلوتوث مريح جداً، لكن في بعض الأجهزة بيظهر تأخير بسيط في الفيديوهات أو الألعاب السريعة. لو مرتاح بالكابلات، النسخة السلكية هنا توفير عملي للغاية.",
    "box.title": "اللي هيوصلك",
    "box.sub": "سماعات مكتبية جاهزة للتوصيل فوراً، متوفرة على أمازون مصر",
    "box.i1": "سماعتا RECCAZR SP5198",
    "box.i2": "كابل AUX 3.5مم",
    "box.i3": "كابل USB للتغذية",
    "box.i4": "دليل الاستخدام",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "RECCAZR SP5198 — سماعات مكتبية 10 واط RGB 2.0CH",
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
    "rev.sub": "نظام صوتي اقتصادي وتعليمي للمكتب تقييم 3.3 من 5 على أمازون مصر",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "10 واط واضح",
    "rev.n1": "الصوت",
    "rev.v1": "كافي لمكتب صغير",
    "rev.q2": "RGB 6 أوضاع",
    "rev.n2": "المظهر",
    "rev.v2": "يضيف جو حلو",
    "rev.q3": "Plug & Play",
    "rev.n3": "التوصيل",
    "rev.v3": "بدون تعريفات",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "هل تحتاج إلى باور خارجي؟",
    "faq.a1": "لا — السماعات USB Powered، بتتغذّى من منفذ USB والكابل بيشمل USB للتغذية وصلة AUX للصوت.",
    "faq.q2": "هل تعمل مع أي جهاز فيه AUX؟",
    "faq.a2": "أيوة — أي جهاز فيه مخرج AUX 3.5مم سيتوافق، مع العلم أن التغذية بتبقى من USB وبالتالي غالباً تستخدم مع PC أو Laptop.",
    "faq.q3": "هل إضاءة RGB ممكن أطفّيها؟",
    "faq.a3": "أيوة — فيه 6 أوضاع للإضاءة وتقدر تطفّيها بالزر الخاص بتغيير الأوضاع أو حسب إعداداتك، مكتوب في اللستنغ تقدر تغلقها.",
    "faq.q4": "هل فيه تأخير في الصوت؟",
    "faq.a4": "مع التوصيل السلكي (USB+AUX) التأخير عادة قليل جداً وغير ملحوظ في أغلب الاستخدامات المكتبية والفيديوهات العادية.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تزيّن مكتبك بصوت أنيق؟",
    "cta.sub": "اطلب RECCAZR SP5198 من أمازون مصر — 10 واط RGB بسعر اقتصادي جداً",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لسماعات RECCAZR SP5198 المكتبية. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا RECCAZR",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "السماعات دي ليه",
    "aud.title": "اللي هيستفيد منها",
    "aud.sub": "اقتصادية جداً ومناسبة لأي مكتب صغير أو مكان دراسي بتقدر تحطها بجانب الشاشة مباشرة",
    "aud.a1t": "مستخدمو المكتب اليومي",
    "aud.a1b": "مؤتمرات الفيديو والموسيقى الخلفية أثناء الشغل — كافية جداً وقوية أكثر من سماعات اللابتوب.",
    "aud.a2t": "الطلاب ومكتبات الدراسة",
    "aud.a2b": "صوت واضح بدون ضوضاء تشتت، وإضاءة ناعمة، وأسعار بتبدأ 315 جنيه تقريباً حسب التوفر.",
    "a3.t": "من يحب جو المكتب",
    "a3.b": "إضاءة RGB تضيف لمسة جميلة لأي مكتب، وتوصيلها بسيط للغاية.",
    "aud.a4t": "حاجات بسيطة وسريعة",
    "aud.a4b": "لو عايز تحسن صوت جهازك فوراً بدون صرف كبير وبلا تعقيد، دي خيار ممتاز.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "10W · 2.0CH",
    "nav.specs": "Specs",
    "nav.connect": "USB+AUX · Wired",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Desktop speakers · RGB",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "RECCAZR SP5198",
    "hero.title2": "10W · RGB",
    "hero.sub": "Compact desktop speakers with clear sound and a touch of bass, 6 RGB modes — USB-powered with 3.5mm AUX, no extra adapter needed",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "2.0CH desktop speakers — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Power",
    "hero.chip1v": "10W",
    "hero.chip2l": "Modes",
    "hero.chip2v": "6 RGB modes",
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
    "trust.prime": "Customer ratings",
    "trust.primeSub": "Rated 3.3 out of 5 on Amazon.eg",
    "k.weight": "System",
    "k.weightSub": "2.0CH · clear stereo",
    "k.dpi": "Bass",
    "k.dpiSub": "Independent bass reflex",
    "k.batt": "Input",
    "k.battSub": "USB + 3.5mm AUX",
    "k.btns": "Lighting",
    "k.btnsSub": "6 RGB modes or off",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Clear sound with a touch of bass",
    "s1.b": "A 2.0CH 10W setup with an independent bass reflex strikes a nice balance — music and games sound lively next to your screen.",
    "s2.t": "6 dynamic RGB modes",
    "s2.b": "Six different lighting effects set the mood for work or play, and you can pick your favourite or turn the lights off entirely.",
    "s3.t": "Easy desk controls",
    "s3.b": "Dedicated volume up/down buttons and a single button to switch RGB modes — quick, direct control with no digging in menus.",
    "s4.t": "USB + AUX — plug and play",
    "s4.b": "No drivers, no wall adapter — power comes via USB, audio via 3.5mm AUX. Just plug them in and enjoy.",
    "s5.t": "Works with most gear",
    "s5.b": "PC, laptop, monitor, projector or any device with a 3.5mm jack — perfect for everyday office and study use.",
    "s6.t": "A small design with flair",
    "s6.b": "The musical-note styling and soft RGB glow take little space on your desk and look right at home on a single or dual-screen setup.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Lighting",
    "t.colorV": "RGB · 6 modes",
    "t.sensor": "Audio system",
    "t.sensorV": "2.0CH stereo",
    "t.switch": "Total power",
    "t.switchV": "10W (2 × 5W)",
    "t.weight": "Power",
    "t.weightV": "USB powered",
    "t.size": "Connection",
    "t.sizeV": "3.5mm AUX",
    "t.conn": "Controls",
    "t.connV": "Vol +/– and RGB mode",
    "t.batt": "Bass",
    "t.battV": "Independent bass reflex",
    "t.os": "Compatibility",
    "t.osV": "PC · laptop · monitor · projector",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "Two speakers + 3.5mm AUX cable + USB power cable",
    "conn.eyebrow": "Connection",
    "conn.title": "A note on connection",
    "conn.sub": "USB-powered speakers like these use USB for power and AUX for audio — true plug and play",
    "conn.btnLs": "Plug & play",
    "conn.btnBt": "Bluetooth",
    "conn.m1l": "Link",
    "conn.m1Ls": "One simple USB + AUX run",
    "conn.m1Bt": "Wireless over Bluetooth",
    "conn.m2l": "Latency",
    "conn.m2Ls": "Very low, audio syncs well with video",
    "conn.m2Bt": "Can be a small delay on some devices",
    "conn.m3l": "Best for",
    "conn.m3Ls": "Desk work, calls and video watching",
    "conn.m3Bt": "Moving between rooms or a cable-free look",
    "conn.vizTitle": "Quick comparison",
    "conn.noteLs": "Wired (USB+AUX) is often the safest pick for desks — minimal lag, clear sound, no dropouts. Ideal if the speakers stay next to your monitor.",
    "conn.noteBt": "Bluetooth is convenient, but some devices introduce a little delay on video or fast-paced games. If you don't mind cables, the wired option here is great value.",
    "box.title": "What's in the box",
    "box.sub": "Ready to plug in — available on Amazon.eg",
    "box.i1": "RECCAZR SP5198 speakers (pair)",
    "box.i2": "3.5mm AUX cable",
    "box.i3": "USB power cable",
    "box.i4": "User manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "RECCAZR SP5198 — 10W RGB desktop speakers 2.0CH",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15–30 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose them",
    "rev.title": "Reasons to pick these",
    "rev.sub": "An affordable desk audio upgrade rated 3.3 out of 5 on Amazon.eg",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "Clear 10W",
    "rev.n1": "Sound",
    "rev.v1": "More than laptop",
    "rev.q2": "6 RGB modes",
    "rev.n2": "Looks",
    "rev.v2": "Nice desk touch",
    "rev.q3": "Plug & play",
    "rev.n3": "Ease",
    "rev.v3": "No fuss",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Do I need an external power adapter?",
    "faq.a1": "No — these are USB-powered, so they draw power from the USB port. The cable includes USB for power and the 3.5mm AUX for audio.",
    "faq.q2": "Will they work with any device that has AUX?",
    "faq.a2": "Yes — any device with a 3.5mm output can send audio via AUX. For power, you'll typically use a USB port from a PC/laptop.",
    "faq.q3": "Can I turn the RGB lights off?",
    "faq.a3": "Yes — there are 6 RGB modes, and you can cycle to off using the lighting button as described on the listing.",
    "faq.q4": "Is there noticeable audio delay?",
    "faq.a4": "With a wired USB+AUX setup, latency is minimal and usually unnoticeable for general desktop use and video playback.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready for a quick desk upgrade?",
    "cta.sub": "Order the RECCAZR SP5198 on Amazon.eg — 10W RGB speakers at a great price",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for RECCAZR SP5198 desktop speakers. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why RECCAZR",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who they are for",
    "aud.title": "Who gets the most from them",
    "aud.sub": "Cheap, easy and effective — perfect for any small desk or study space",
    "aud.a1t": "Everyday office users",
    "aud.a1b": "Video calls and background music while you work — much clearer and fuller than built-in laptop speakers.",
    "aud.a2t": "Students",
    "aud.a2b": "A small, affordable upgrade for your study desk. Clear sound without breaking the bank.",
    "aud.a4t": "Anyone who wants instant results",
    "aud.a4b": "If you want to improve your machine's sound straight away without spending much, this is a solid pick.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and cash on delivery is available - every price, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price and any current offers - all of it lives on Amazon's page only.",
    "nav.all": "All Products",
    "a3.t": "Desk enthusiasts",
    "a3.b": "The RGB glow adds a nice touch to any setup, and they're dead simple to set up."
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
    ? 'RECCAZR SP5198 — سماعات مكتبية 2.0CH بقوة 10 واط وإضاءة RGB'
    : 'RECCAZR SP5198 — 10W USB-powered RGB desktop speakers';

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
const LIVE_KEY = 'reccazr-sp5198-live';
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
const GAL_FILES = ["img/reccazr-sp5198-01.jpg","img/reccazr-sp5198-02.jpg","img/reccazr-sp5198-03.jpg","img/reccazr-sp5198-04.jpg"];
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
