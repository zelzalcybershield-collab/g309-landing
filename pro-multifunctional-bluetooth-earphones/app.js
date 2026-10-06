/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0F6ZXZCKB?tag=zoq-21';
const STORE_KEY = 'pro-multifunctional-bluetooth-earphones-lang';

const dict = {
  "ar": {
    "nav.tagline": "A9 PRO · بلوتوث 5.4 · أبيض",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "سماعة أذن · بلوتوث لاسلكية",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "سماعة A9",
    "hero.title2": "PRO لاسلكية",
    "hero.sub": "سماعة أذن لاسلكية بتقنية بلوتوث 5.4 وشاشة لمس، تصميم in-ear بيدعم نظامين، ومقاومة 140 أوم مع خاصية عزل الضوضاء النشط. بتشتغل مع كل الموبايلات من غير ما تحتاج سلك خالص.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "سماعة in-ear لاسلكية",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "البلوتوث",
    "hero.chip1v": "5.4",
    "hero.chip2l": "المقاومة",
    "hero.chip2v": "140 أوم",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج على أمازون مصر — اضغط أي صورة لتكبيرها.",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "متاح لهذا المنتج",
    "trust.delivery": "شحن سريع ومجاني",
    "trust.deliverySub": "توصيل عبر أمازون مصر",
    "trust.returns": "إرجاع مجاني 15 يوم",
    "trust.returnsSub": "استرداد كامل أو تبديل",
    "trust.prime": "شاشة لمس",
    "trust.primeSub": "تحكم باللمس من على السماعة",
    "k.weight": "نوع التوصيل",
    "k.weightSub": "بلوتوث لاسلكي 5.4",
    "k.dpi": "المقاومة",
    "k.dpiSub": "140 أوم",
    "k.batt": "عزل الضوضاء",
    "k.battSub": "خاصية ANC مدمجة",
    "k.btns": "التحكم",
    "k.btnsSub": "شاشة لمس على السماعة",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "سماعة أذن لاسلكية in-ear بتقنية بلوتوث 5.4 وشاشة لمس، بتصميم يدعم النظامين ومقاومة 140 أوم — مناسبة للمكالمات والرياضة والاستخدام اليومي.",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "بلوتوث 5.4 لاسلكي خالص",
    "s1.b": "بتتصل بالموبايل عن طريق بلوتوث 5.4 من غير أي سلك. الاتصال سريع ومستقر، فتقدر تستخدمها في الموبايل أو التابلت أو الكمبيوتر اللي فيه بلوتوث.",
    "s2.t": "شاشة لمس على السماعة",
    "s2.b": "فيها شاشة لمس على كل سماعة، تقدر تتحكم في التشغيل والإيقاف والمكالمات والصوت من على ودنك من غير ما تفتح الموبايل.",
    "s3.t": "تصميم in-ear يدعم النظامين",
    "s3.b": "التصميم in-ear بيدخل في ودنك ويحبس الصوت كويس، وكمان بيدعم النظامين — يعني كل تليفون يطلب النظام اللي هو شغال بيه.",
    "s4.t": "عزل ضوضاء نشط ANC",
    "s4.b": "فيها خاصية عزل الضوضاء النشط (Active Noise Cancellation) بتقلل الصوت العالي اللي حواليك — مفيدة في المترو والسوق لما تسمع حاجة بصوت عالي.",
    "s5.t": "مقاومة 140 أوم",
    "s5.b": "المقاومة 140 أوم، وده معناه إنها متوسطة الثقل — بتديك صوت متوازن بين الباس والصوت العالي من غير ما الصوت يبقى خام.",
    "s6.t": "أبيض · من غير jack",
    "s6.b": "اللون أبيض وشكله صغير داخل الأذن. مفيش مدخل سماعة (No Jack) لأن الاتصال كله لاسلكي — يعني مفيش سلك يتلف أو يتشابك في جيبك.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض",
    "t.sensor": "نوع التركيب",
    "t.sensorV": "داخل الأذن (In Ear)",
    "t.switch": "المقاومة",
    "t.switchV": "140 أوم",
    "t.weight": "الاتصال",
    "t.weightV": "بلوتوث لاسلكي",
    "t.size": "عزل الضوضاء",
    "t.sizeV": "نشط (ANC)",
    "t.conn": "تقنية الاتصال",
    "t.connV": "بلوتوث 5.4",
    "t.batt": "مدخل السماعة",
    "t.battV": "مفيش (لاسلكي)",
    "t.os": "الأجهزة",
    "t.osV": "كل الموبايلات والأجهزة الداعمة للبلوتوث",
    "t.hand": "التحكم",
    "t.handV": "شاشة لمس على السماعة",
    "t.inbox": "في العلبة",
    "t.inboxV": "السماعتين + العلبة",
    "conn.eyebrow": "الاتصال",
    "conn.title": "بلوتوث 5.4 من غير أسلاك",
    "conn.sub": "افتح البلوتوث في موبايلك ووصّل السماعة — من غير سلك ولا إعدادات معقدة.",
    "conn.btnLs": "بلوتوث 5.4",
    "conn.btnBt": "شاشة اللمس",
    "conn.m1l": "نوع الاتصال",
    "conn.m1Ls": "بلوتوث 5.4",
    "conn.m1Bt": "شاشة لمس",
    "conn.m2l": "نظام التشغيل",
    "conn.m2Ls": "يدعم النظامين",
    "conn.m2Bt": "من غير إعدادات",
    "conn.m3l": "التحكم",
    "conn.m3Ls": "من على السماعة",
    "conn.m3Bt": "لمس واحد",
    "conn.vizTitle": "نقل البيانات",
    "conn.noteLs": "الاتصال لاسلكي بالكامل: السماعة بتتصل بالموبايل عن طريق بلوتوث 5.4 من غير أي سلك في الطريق، والصوت بينتقل مباشرة من الموبايل للسماعة.",
    "conn.noteBt": "شاشة اللمس بتديك تحكم سريع: لمسة واحدة للتشغيل والإيقاف، ولمسة للمكالمات، من غير ما تفتح الموبايل أو تفتح التطبيق.",
    "box.title": "اللي هيوصلك",
    "box.sub": "سماعة A9 PRO، ومنتج معروض على أمازون مصر",
    "box.i1": "سماعة A9 PRO — أبيض",
    "box.i2": "علبة الشحن",
    "box.i3": "دليل المستخدم",
    "box.i4": "بطاقة الضمان",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Air-pro buds PRO A9 — Bluetooth 5.4 Touch Screen, White",
    "offer.seller": "معروضة على أمازون مصر — البائع والشحن يظهرون على صفحة المنتج",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "شحن مجاني — التاريخ يظهر على صفحة المنتج",
    "offer.ret": "مدة الإرجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من صفحة المنتج على أمازون",
    "rev.count": "بلوتوث 5.4 · ANC · 140 أوم",
    "rev.q1": "بلوتوث 5.4 — اتصال مستقر",
    "rev.n1": "الاتصال",
    "rev.v1": "من غير أسلاك",
    "rev.q2": "عزل ضوضاء نشط",
    "rev.n2": "الضوضاء",
    "rev.v2": "أهدأ surround",
    "rev.q3": "شاشة لمس",
    "rev.n3": "التحكم",
    "rev.v3": "من غير فتح الموبايل",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "السماعة دي سلكية ولا لاسلكية؟",
    "faq.a1": "لاسلكية بالكامل. بتتصل عن طريق بلوتوث 5.4 ومفيش مدخل سماعة (No Jack) — يعني مفيش سلك خالص.",
    "faq.q2": "هتشتغل مع موبايلي؟",
    "faq.a2": "أيوا، صفحة المنتج بتكتب إنها متوافقة مع كل الموبايلات وتدعم النظامين. كل اللي محتاجه إن موبايلك فيه بلوتوث.",
    "faq.q3": "عزل الضوضاء ده بيشتغل ازاي؟",
    "faq.a3": "الصفحة بتذكر خاصية Active Noise Cancellation — يعني بتقلل الضوضاء المحيطة. بتفيد في الأماكن المزدحمة زي المترو أو السوق.",
    "faq.q4": "أقدر أتحكم فيها من غير ما أفتح الموبايل؟",
    "faq.a4": "أيوا، فيها شاشة لمس على السماعة نفسها، فتقدر تشغل وتوقف وترد على المكالمات وتظبط الصوت باللمس.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "أيوا، صفحة المنتج على أمازون مصر بتكتب إن الدفع عند الاستلام متاح. كمان ينفع تدفع بالبطاقة أو تقسط مع بنوك مختارة.",
    "faq.q6": "أقدر أرجّعها لو مش عاجباني؟",
    "faq.a6": "أيوا، صفحة المنتج بتكتب «15 يوم للإرجاع» و«إرجاع مجاني». راجع سياسة الإرجاع على الصفحة قبل ما تشتري.",
    "cta.title": "جاهز تسمع من غير أسلاك؟",
    "cta.sub": "اطلبها دلوقتي من أمازون مصر — شحن مجاني، إرجاع 15 يوم، ودفع عند الاستلام.",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج سماعة A9 PRO اللاسلكية. كل الأسعار والتوفر مبنية على صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "المواصفات",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر والعروض. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين السماعة دي ليه",
    "aud.title": "اللي هيفيد معاه A9 PRO",
    "aud.sub": "سماعة لاسلكية في الأذن للمكالمات والرياضة والاستخدام اليومي",
    "aud.a1t": "اللي بيتصل طول اليوم",
    "aud.a1b": "شاشة اللمس بتديك تحكم في المكالمات والصوت من على السماعة من غير ما تفتح الموبايل — مفيدة في الشغل والقيادة.",
    "aud.a2t": "اللي بيمشي ويجري",
    "aud.a2b": "التصميم in-ear صغير وبيحبس في ودنك، وبلوتوث 5.4 من غير سلك يتشابك أو يتلف — مناسب للرياضة والخروج.",
    "aud.a3t": "اللي بيسمع في أماكن مزدحمة",
    "aud.a3b": "خاصية عزل الضوضاء النشط بتقلل الصوت العالي حواليك، فبتفيد في المترو والسوق لما تسمع بصوت عالي.",
    "aud.a4t": "اللي بيدور على سماعة يومية بسيطة",
    "aud.a4b": "سعرها في المتناول، لاسلكية بالكامل، وبتشتغل مع كل الموبايلات — يعني بتفتحها وتستخدمها على طول.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "A9 PRO · Bluetooth 5.4 · White",
    "nav.specs": "Specs",
    "nav.connect": "Connection",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "In-ear earphones · Wireless Bluetooth",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "A9 PRO",
    "hero.title2": "Wireless Earbuds",
    "hero.sub": "Wireless in-ear earphones with Bluetooth 5.4 and a touch screen, a dual-system design, 140 Ohm impedance and active noise cancellation. Works with all phones, no wires at all.",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "Wireless in-ear earphones",
    "hero.buy": "Buy & see today's price - click here",
    "hero.chip1l": "Bluetooth",
    "hero.chip1v": "5.4",
    "hero.chip2l": "Impedance",
    "hero.chip2v": "140 Ohm",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the product page on Amazon.eg - click any image to enlarge it.",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Available for this item",
    "trust.delivery": "Fast free delivery",
    "trust.deliverySub": "Delivered by Amazon.eg",
    "trust.returns": "Free 15-day returns",
    "trust.returnsSub": "Full refund or replacement",
    "trust.prime": "Touch screen",
    "trust.primeSub": "Control it straight from the buds",
    "k.weight": "Connection",
    "k.weightSub": "Bluetooth 5.4 wireless",
    "k.dpi": "Impedance",
    "k.dpiSub": "140 Ohm",
    "k.batt": "Noise control",
    "k.battSub": "Built-in ANC",
    "k.btns": "Controls",
    "k.btnsSub": "Touch screen on the buds",
    "specs.eyebrow": "Specs",
    "specs.title": "Everything you need to know",
    "specs.sub": "Wireless in-ear earphones with Bluetooth 5.4 and a touch screen, dual-system design and 140 Ohm impedance - good for calls, sport and everyday use.",
    "specs.table": "Full spec sheet",
    "s1.t": "Bluetooth 5.4, fully wireless",
    "s1.b": "Connects to your phone over Bluetooth 5.4 with no cable at all. The connection is quick and stable, so you can use it with a phone, tablet or a Bluetooth-enabled laptop.",
    "s2.t": "Touch screen on the buds",
    "s2.b": "Each earbud has a touch panel, so you can control play and pause, calls and volume from your ear without opening your phone.",
    "s3.t": "In-ear design, dual system",
    "s3.b": "The in-ear design sits in your ear and seals the sound well, and it supports dual systems - so it works with whichever system your phone runs.",
    "s4.t": "Active noise cancellation",
    "s4.b": "Active Noise Cancellation (ANC) reduces the loud noise around you - useful on the metro or in a busy market when you want to listen at higher volume.",
    "s5.t": "140 Ohm impedance",
    "s5.b": "At 140 Ohm the impedance is mid-range, which gives a balanced sound between bass and treble instead of something harsh.",
    "s6.t": "White · no jack",
    "s6.b": "White, and small enough to sit inside your ear. There is no headphone jack because it is fully wireless - no cable to fray or tangle in your pocket.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "White",
    "t.sensor": "Ear placement",
    "t.sensorV": "In Ear",
    "t.switch": "Impedance",
    "t.switchV": "140 Ohm",
    "t.weight": "Connectivity",
    "t.weightV": "Wireless Bluetooth",
    "t.size": "Noise control",
    "t.sizeV": "Active (ANC)",
    "t.conn": "Wireless tech",
    "t.connV": "Bluetooth 5.4",
    "t.batt": "Headphone jack",
    "t.battV": "None (wireless)",
    "t.os": "Devices",
    "t.osV": "All Bluetooth-enabled phones and devices",
    "t.hand": "Controls",
    "t.handV": "Touch screen on the buds",
    "t.inbox": "In the box",
    "t.inboxV": "Two earbuds + case",
    "conn.eyebrow": "Connection",
    "conn.title": "Bluetooth 5.4, no wires",
    "conn.sub": "Turn on Bluetooth on your phone and pair the buds - no cable, no complicated setup.",
    "conn.btnLs": "Bluetooth 5.4",
    "conn.btnBt": "Touch screen",
    "conn.m1l": "Connection type",
    "conn.m1Ls": "Bluetooth 5.4",
    "conn.m1Bt": "Touch screen",
    "conn.m2l": "System support",
    "conn.m2Ls": "Dual system",
    "conn.m2Bt": "No setup needed",
    "conn.m3l": "Controls",
    "conn.m3Ls": "From the buds",
    "conn.m3Bt": "Single tap",
    "conn.vizTitle": "Data flow",
    "conn.noteLs": "Fully wireless: the earbuds connect to your phone over Bluetooth 5.4 with no cable in between, and audio goes straight from the phone to the earbuds.",
    "conn.noteBt": "The touch screen gives you quick control: one tap to play and pause, one to answer calls, without opening your phone or the app.",
    "box.title": "What you get",
    "box.sub": "A9 PRO earphones, listed on Amazon.eg",
    "box.i1": "A9 PRO earbuds - White",
    "box.i2": "Charging case",
    "box.i3": "User manual",
    "box.i4": "Warranty card",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Air-pro buds PRO A9 - Bluetooth 5.4 Touch Screen, White",
    "offer.seller": "Listed on Amazon.eg - seller and shipping appear on the product page",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free delivery - date shown on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price - click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the specifications as listed on the product page on Amazon",
    "rev.count": "Bluetooth 5.4 · ANC · 140 Ohm",
    "rev.q1": "Bluetooth 5.4 - stable connection",
    "rev.n1": "Connection",
    "rev.v1": "No wires",
    "rev.q2": "Active noise cancellation",
    "rev.n2": "Noise",
    "rev.v2": "Quieter around you",
    "rev.q3": "Touch screen",
    "rev.n3": "Controls",
    "rev.v3": "No need to open the phone",
    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.q1": "Are they wired or wireless?",
    "faq.a1": "Fully wireless. They connect over Bluetooth 5.4 and there is no headphone jack - so no cable at all.",
    "faq.q2": "Will they work with my phone?",
    "faq.a2": "Yes - the product page states they are compatible with all phones and support dual systems. All you need is a Bluetooth-enabled phone.",
    "faq.q3": "How does the noise cancelling work?",
    "faq.a3": "The page lists Active Noise Cancellation, which reduces surrounding noise. It helps in crowded places like the metro or a market.",
    "faq.q4": "Can I control them without opening my phone?",
    "faq.a4": "Yes - there is a touch screen on the earbuds themselves, so you can play, pause, answer calls and adjust volume by touch.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - the product page on Amazon.eg states cash on delivery is available. You can also pay by card or split the payment with selected banks.",
    "faq.q6": "Can I return them if they are not right for me?",
    "faq.a6": "Yes - the product page states 15-day returns and free returns. Check the return policy on the page before you buy.",
    "cta.title": "Ready to go wireless?",
    "cta.sub": "Order now from Amazon.eg - free delivery, 15-day returns and cash on delivery.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "Have a question?",
    "footer.about": "Landing page for the A9 PRO wireless earphones. Prices and availability come from the product page on Amazon.eg at time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Specifications",
    "footer.disclaimer": "Prices and figures can change with availability and offers. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who benefits from the A9 PRO",
    "aud.sub": "Wireless in-ear earphones for calls, sport and everyday use",
    "aud.a1t": "Anyone on calls all day",
    "aud.a1b": "The touch screen lets you handle calls and volume from the earbuds without opening your phone - handy at work or while driving.",
    "aud.a2t": "Anyone who walks and exercises",
    "aud.a2b": "The in-ear design is small and sits snugly, and Bluetooth 5.4 means no cable to tangle or fray - good for sport and going out.",
    "aud.a3t": "Anyone listening in busy places",
    "aud.a3b": "Active noise cancellation reduces the loud noise around you, which helps on the metro or in a busy market.",
    "aud.a4t": "Anyone after a simple daily pair",
    "aud.a4b": "Affordable, fully wireless and compatible with all phones - so you can just open the case and use them.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page on Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card - and all price, instalment, discount and offer details appear on Amazon's page at checkout.",
    "offer.payNote": "Price, instalments and any current offers - all on the Amazon page.",
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
    ? 'سماعة A9 PRO لاسلكية — بلوتوث 5.4 وشاشة لمس | أمازون مصر'
    : 'A9 PRO Wireless Earbuds - Bluetooth 5.4, Touch Screen | Amazon Egypt';

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
const LIVE_KEY = 'pro-multifunctional-bluetooth-earphones-live';
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
const GAL_FILES = ["img/pb-00.jpg","img/pb-01.jpg","img/pb-02.jpg","img/pb-03.jpg","img/pb-04.jpg","img/pb-05.jpg"];
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
