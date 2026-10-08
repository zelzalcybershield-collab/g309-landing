/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FMQZM6YN?tag=zoq-21';
const STORE_KEY = 'mercusys-mc200-lang';

const dict = {
  "ar": {
    "nav.tagline": "360° أفقي · 1080p · أشعة تحت الحمراء",
    "nav.specs": "المواصفات",
    "nav.connect": "دوارة ولا ثابتة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "كاميرا مراقبة منزلية ذكية",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "MERCUSYS",
    "hero.title2": "MC200 Pan & Tilt",
    "hero.sub": "كاميرا منزلية Wi-Fi بدوران 360° أفقي ودقة 1080p، بصوت ثنائي الاتجاه ورؤية ليلية حتى 12 متر",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#3 في كاميرات المراقبة القبب (Dome) على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "الدوران",
    "hero.chip1v": "360° أفقي",
    "hero.chip2l": "الدقة",
    "hero.chip2v": "1080p",
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
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.5 من 5 من 165 عميل على أمازون",
    "k.weight": "الدقة",
    "k.weightSub": "فيديو 1080p عالي الوضوح",
    "k.dpi": "المستشعر",
    "k.dpiSub": "مستشعر بدقة 2 ميجابكسل",
    "k.batt": "الرؤية الليلية",
    "k.battSub": "حتى 12 متر في العتمة",
    "k.btns": "الوزن",
    "k.btnsSub": "220 جرام — سهل التركيب",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "دوران أفقي 360°",
    "s1.b": "الرأس بيدوّر 360° أفقي — زي ما مكتوب في الوصف، بالإمكانيات تغطي كامل الغرفة من غير ما تخلي زوايا ميتة.",
    "s2.t": "فيديو 1080p واضح",
    "s2.b": "1080p high-definition بتفاصيل واضحة — مع مستشعر 2 ميجابكسل بدقة اقتصادية 2 MP حسب ورقة المواصفات.",
    "s3.t": "تتبع حركة ذكي 24/7",
    "s3.b": "الوصف بيشاور على Intelligent motion tracking بتتبع الأشخاص حتى في العتمة، مع تنبيهات فورية لحركة أو وجود شخص أو بكاء رضيع.",
    "s4.t": "رؤية ليلية حتى 12 متر",
    "s4.b": "رؤية ليلية متقدمة حتى 12 متر بعدد 2 من لمبات الأشعة تحت الحمراء (IR LEDs) حسب الورقة التقنية.",
    "s5.t": "صوت ثنائي الاتجاه",
    "s5.b": "ميكروفون وسماعة مدمجان — بتسمع وترد في الوقت الحقيقي وتكلم العيلة والحيوانات الأليفة من التطبيق.",
    "s6.t": "ضمان سنتين من MERCUSYS",
    "s6.b": "صفحة المواصفات بتشاور على ضمان مصنع سنتين، ومنشأ المنتج الصين",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض (White)",
    "t.sensor": "النوع",
    "t.sensorV": "كاميرا مراقبة منزلية ذكية",
    "t.switch": "رقم الموديل",
    "t.switchV": "MC200",
    "t.weight": "الوزن",
    "t.weightV": "220 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "Wi-Fi · تحكم عبر التطبيق",
    "t.batt": "التخزين",
    "t.battV": "حتى 512 جيجا (فلاش مدمج)",
    "t.os": "الحماية",
    "t.osV": "IP20 · رؤية ليلية 12 م · IR LEDs 2",
    "t.hand": "الضمان",
    "t.handV": "سنتان من المصنّع حسب الصفحة",
    "t.inbox": "في العلبة",
    "t.inboxV": "الكاميرا · الدليل · محول الطاقة",
    "conn.eyebrow": "دوارة ولا ثابتة",
    "conn.title": "تغطية كاملة بكاميرا واحدة",
    "conn.sub": "كاميرا Pan & Tilt دوارة وكاميرا ثابتة — الاتنين مراقبة منزلية، الفرق في زاوية التغطية",
    "conn.btnLs": "كاميرا MERCUSYS MC200 الدوارة (زي دي)",
    "conn.btnBt": "كاميرا ثابتة بزاوية واحدة",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر بيغطي الغرفة كلها برأس واحد دوّار",
    "conn.m1Bt": "غالباً أرخص بس بتحتاج أكتر من واحدة لزوايا متعددة",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي عايز يراقب مساحة واسعة بمكان واحد",
    "conn.m2Bt": "اللي محتاج زاوية واحدة ثابتة زي الباب الخلفي",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "الدوران 360° بيتبع الحركة ويحوّر الزاوية من التطبيق",
    "conn.m3Bt": "بتشغل بزاوية قدامها بس — لو ده كفايتك توفير فرق سعر",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو محتاج تغطي صالة أو مخزن أو غرفة استقبال واحدة، الرأس الدوار بينفي الحاجة لكاميرات تانية — ومن شاشة التطبيق تقدر تعدل الزاوية في ثانية.",
    "conn.noteBt": "الكاميرا الثابتة أبسط وأرخص لمراقبة نقطة محددة، بس لو الحركة بتحصل على جنبها هتحتاج ناسيك أو أكتر من كاميرا.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المحتوى حسب Built-In Media على صفحة أمازون مصر",
    "box.i1": "كاميرا MERCUSYS MC200",
    "box.i2": "دليل الاستخدام",
    "box.i3": "محول الطاقة (Power adapter)",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "MERCUSYS MC200 — كاميرا مراقبة منزلية 1080p بدوران 360° — أبيض",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.5 من 5 بناءً على 165 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "1080p",
    "rev.n1": "الجودة",
    "rev.v1": "فيديو عالي الوضوح",
    "rev.q2": "360°",
    "rev.n2": "الدوران",
    "rev.v2": "تغطية أفقية كاملة",
    "rev.q3": "12 م",
    "rev.n3": "الرؤية الليلية",
    "rev.v3": "عتمة حتى 12 متر",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الرؤية بتلف كام؟",
    "faq.a1": "الرأس بيدوّر 360° أفقي كما في الوصف، مع زووم بصري 4x مذكور في ورقة المواصفات.",
    "faq.q2": "هتشتغل في العتمة؟",
    "faq.a2": "أيوه — رؤية ليلية حتى 12 متر بعدد 2 لمبة أشعة تحت الحمراء، بتتبع الأجسام حتى في العتمة الكاملة.",
    "faq.q3": "محتاج اشتراك؟ هل فيه تخزين؟",
    "faq.a3": "ورقة المواصفات بتشاور على ذاكرة فلاش مدمجة حتى 512 جيجا. خطة التخزين السحابي وأي اشتراكات — بتشرح نفسها على صفحة أمازون في تفاصيل خطة التخزين.",
    "faq.q4": "بيتصل إزاي؟",
    "faq.a4": "عن طريق الواي فاي (Connectivity Protocol: Wi-Fi) والتحكم من التطبيق (Control Method: App).",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني واسترجاع خلال 15 يوم حسب سياسة أمازون. راجع التفاصيل على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تغطي البيت من موبايلك؟",
    "cta.sub": "اطلب MERCUSYS MC200 من أمازون مصر — دوراني 360° ورؤية ليلية وصوت بالاتجاهين وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لكاميرا MERCUSYS MC200 المنزلية. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه MC200",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الكاميرا دي ليه",
    "aud.title": "اللي هتفيد معاهم MC200",
    "aud.sub": "بيت أو محل أو رضيع — كاميرا دوّارة بتتابع في الظلام وبتنبّه",
    "aud.a1t": "العائلات والرضّع",
    "aud.a1b": "تنبيهات بكاء الرضيع وحركة الأشخاص — بتحس تشوف الغرفة وتسمعها من التطبيق من غير ما تقف قدامها.",
    "aud.a2t": "المحلات والمكاتب الصغيرة",
    "aud.a2b": "مراقبة داخلية بزاوية 360° — بتراقب الاستقبال أو المخزن بوحدة واحدة بدل شبكة كاميرات.",
    "aud.a3t": "اللي مسافرين كتير",
    "aud.a3b": "تبعت تنبيهات فورية للحركة على موبايلك وانت بره، وشوف البيت في العتمة والنهار.",
    "aud.a4t": "أصحاب الحيوانات الأليفة",
    "aud.a4b": "الصوت بالاتجاهين بيخليك تكلم القطة أو الكلب وتسمع لعبهم وأنت في الشغل.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "360° pan · 1080p · IR night vision",
    "nav.specs": "Specs",
    "nav.connect": "Pan-tilt or fixed",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Smart home security camera",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "MERCUSYS",
    "hero.title2": "MC200 Pan & Tilt",
    "hero.sub": "A Wi-Fi home camera with 360° horizontal pan, 1080p video, two-way audio and night vision of up to 12 m",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#3 in dome surveillance cameras on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Pan",
    "hero.chip1v": "360°",
    "hero.chip2l": "Resolution",
    "hero.chip2v": "1080p",
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
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.5 out of 5 by 165 customers on Amazon",
    "k.weight": "Resolution",
    "k.weightSub": "crisp 1080p HD video",
    "k.dpi": "Sensor",
    "k.dpiSub": "a 2 MP sensor",
    "k.batt": "Night vision",
    "k.battSub": "up to 12 m in the dark",
    "k.btns": "Weight",
    "k.btnsSub": "220 g - easy to mount",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "360° horizontal pan",
    "s1.b": "The head pans 360° horizontally, as the listing states, covering the whole room with no dead angles.",
    "s2.t": "Clear 1080p video",
    "s2.b": "1080p high definition delivers sharp detail - a 2 MP sensor per the spec sheet.",
    "s3.t": "Smart 24/7 motion tracking",
    "s3.b": "The listing highlights intelligent motion tracking that follows subjects even in darkness, with instant alerts on movement, people or a crying baby.",
    "s4.t": "Night vision up to 12 m",
    "s4.b": "Advanced night vision of up to 12 m backed by 2 IR LEDs, per the technical sheet.",
    "s5.t": "Two-way audio",
    "s5.b": "A built-in microphone and speaker let you listen and reply in real time, and talk to family and pets from the app.",
    "s6.t": "2-year MERCUSYS warranty",
    "s6.b": "The spec sheet notes a 2-year manufacturer warranty, and China as the country of origin.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "White",
    "t.sensor": "Type",
    "t.sensorV": "Smart home security camera",
    "t.switch": "Model number",
    "t.switchV": "MC200",
    "t.weight": "Weight",
    "t.weightV": "220 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "Wi-Fi · app control",
    "t.batt": "Storage",
    "t.battV": "Up to 512 GB (built-in flash)",
    "t.os": "Protection",
    "t.osV": "IP20 · 12 m night vision · 2 IR LEDs",
    "t.hand": "Warranty",
    "t.handV": "2 years from the manufacturer as listed",
    "t.inbox": "In the box",
    "t.inboxV": "Camera · manual · power adapter",
    "conn.eyebrow": "Pan-tilt or fixed",
    "conn.title": "Full coverage, one camera",
    "conn.sub": "A pan-tilt camera and a fixed one - both do home surveillance, the difference is the viewing angle",
    "conn.btnLs": "MERCUSYS MC200 pan-tilt (this one)",
    "conn.btnBt": "Fixed single-angle camera",
    "conn.m1l": "Cost",
    "conn.m1Ls": "One price, full room coverage from a single rotating head",
    "conn.m1Bt": "Usually cheaper, but you often need several for multiple angles",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone watching a wide area from one spot",
    "conn.m2Bt": "Anyone mounting one fixed angle, like a back door",
    "conn.m3l": "What changes",
    "conn.m3Ls": "The 360° pan follows motion and swings the angle from the app",
    "conn.m3Bt": "It only sees what is in front of it - fine if that alone is enough",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "To cover one hall, store or reception, a rotating head removes the need for extra cameras - and you can aim it from the screen in a second.",
    "conn.noteBt": "A fixed camera is simpler and cheaper for one specific point, but if activity happens beside it you need another unit or two.",
    "box.title": "What arrives",
    "box.sub": "Content per the Built-In Media field on the amazon.eg product page",
    "box.i1": "The MERCUSYS MC200 camera",
    "box.i2": "The user manual",
    "box.i3": "The power adapter",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "MERCUSYS MC200 - home security camera, 1080p pan & tilt 360° - white",
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
    "rev.sub": "Product specs and a 4.5 out of 5 rating from 165 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "1080p",
    "rev.n1": "Quality",
    "rev.v1": "high-definition video",
    "rev.q2": "360°",
    "rev.n2": "Pan",
    "rev.v2": "full horizontal coverage",
    "rev.q3": "12 m",
    "rev.n3": "Night vision",
    "rev.v3": "darkness up to 12 m",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "How far does it pan?",
    "faq.a1": "The head pans 360° horizontally as described, with a 4x optical zoom noted in the spec sheet.",
    "faq.q2": "Will it work in the dark?",
    "faq.a2": "Yes - night vision of up to 12 m with 2 IR LEDs, following subjects even in complete darkness.",
    "faq.q3": "Do I need a subscription? Is there storage?",
    "faq.a3": "The spec sheet lists built-in flash storage of up to 512 GB. Cloud plans and any subscription terms are spelled out on the Amazon page in the storage plan details.",
    "faq.q4": "How does it connect?",
    "faq.a4": "Over Wi-Fi (connectivity protocol: Wi-Fi) with control through the app (control method: app).",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing points to free returns and a 15-day return window per Amazon’s policy. Check the details on the product page before you buy.",
    "cta.title": "Ready to watch home from your phone?",
    "cta.sub": "Order the MERCUSYS MC200 on Amazon.eg - 360° pan, night vision, two-way audio and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the MERCUSYS MC200 home camera. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why MC200",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the MC200 suits",
    "aud.sub": "A home, a shop or a baby - a rotating camera that tracks in the dark and alerts",
    "aud.a1t": "Families and babies",
    "aud.a1b": "Baby-cry and movement alerts let you see and hear the room from the app without standing in it.",
    "aud.a2t": "Small shops and offices",
    "aud.a2b": "Indoor surveillance at 360° - one unit watches the reception or stock instead of a camera network.",
    "aud.a3t": "Frequent travellers",
    "aud.a3b": "It pushes instant motion alerts to your phone while you are away, and shows the home by day and night.",
    "aud.a4t": "Pet owners",
    "aud.a4b": "Two-way audio lets you talk to the cat or dog and hear them play while you are at work.",
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
    ? 'كاميرا MERCUSYS MC200 منزلية 1080p بدوران 360° | أمازون مصر'
    : 'MERCUSYS MC200 Home Security Camera, 1080p, 360° | Amazon Egypt';

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
const LIVE_KEY = 'mercusys-mc200-live';
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
const GAL_FILES = ["img/mc-00.jpg","img/mc-01.jpg","img/mc-02.jpg","img/mc-03.jpg","img/mc-04.jpg","img/mc-05.jpg","img/mc-06.jpg","img/mc-07.jpg","img/mc-08.jpg"];
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
