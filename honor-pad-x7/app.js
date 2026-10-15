/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FKC36CC9?tag=zoq-21';
const STORE_KEY = 'honor-pad-x7-lang';

const dict = {
  "ar": {
    "nav.tagline": "8.7 بوصة · 90Hz · 7020mAh",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "تابلت HONOR بشاشة 90Hz",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "HONOR",
    "hero.title2": "Pad X7",
    "hero.sub": "تابلت 8.7 بوصة بشاشة 90Hz وبطارية 7020mAh وذاكرة 4GB/128GB — مع كوفر وكيس ومنفذ شحن، وضمان سنة",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#4 في تابلت الكمبيوتر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "8.7 بوصة · 90Hz",
    "hero.chip2l": "الذاكرة",
    "hero.chip2v": "4GB + 128GB",
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
    "trust.prime": "ضمان سنة من HONOR",
    "trust.primeSub": "والضريبة والرسوم مدفوعة — سعر نهائي حسب الصفحة",
    "k.weight": "الشاشة",
    "k.weightSub": "8.7 بوصة IPS بـ90Hz و500 nits",
    "k.dpi": "البطارية",
    "k.dpiSub": "7020mAh ليثيوم بوليمر للاستخدام الطويل",
    "k.batt": "المعالج",
    "k.battSub": "سنابدراجون 680 — 2.4 جيجا هرتز",
    "k.btns": "النظام",
    "k.btnsSub": "أندرويد 15 — الأحدث من HONOR",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شاشة 8.7 بوصة بـ90Hz",
    "s1.b": "شاشة IPS LCD بدقة 1340×800 ونسب 16:10 و16.7 مليون لون — تمرير أنعم وسواد أعمق من التابلتات العادية.",
    "s2.t": "راحة للعين مع ميزات الحماية المتعددة",
    "s2.b": "ميزات حماية متعددة للعين من HONOR — مستوى إضاءة مناسب وإشعاع أزرق مخفّف لقراءة ومشاهدة لفترات طويلة.",
    "s3.t": "بطارية 7020mAh تعيش معاك",
    "s3.b": "بطارية ضخمة 7020mAh ليثيوم بوليمر — يوم كامل من الدروس والمشاهدة والألعاب من غير قلق من الشاحن.",
    "s4.t": "صوت محيط غني",
    "s4.b": "حقل صوتي محيطي يغني تجربة المشاهدة والاجتماعات — صوت واضح وواسع من التابلت نفسه.",
    "s5.t": "كاميرا 8MP + 5MP للمكالمات",
    "s5.b": "كاميرا خلفية 8 ميجا وأمامية 5 ميجا بفلاش مدمج — مكالمات فيديو بجودة HD ومذكرات مصوّرة واضحة.",
    "s6.t": "ذاكرة 4GB + 128GB رام وتخزين",
    "s6.b": "4 جيجا رام مع 128 جيجا تخزين وأندرويد 15 — سعة مكتبة كاملة وتطبيقات بدون تقطيع.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي (Gray)",
    "t.sensor": "النوع",
    "t.sensorV": "تابلت أندرويد",
    "t.switch": "رقم الموديل",
    "t.switchV": "JMS-W09",
    "t.weight": "الوزن",
    "t.weightV": "365 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "WiFi · بلوتوث",
    "t.batt": "البطارية",
    "t.battV": "7020mAh ليثيوم بوليمر",
    "t.os": "النظام",
    "t.osV": "أندرويد 15",
    "t.hand": "الضمان",
    "t.handV": "سنة واحدة من المُصنّع",
    "t.inbox": "في العلبة",
    "t.inboxV": "التابلت + كفر + الشاحن",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "تابلت للاستخدام اليومي، من غير ما تدفع كتير",
    "conn.sub": "تابلت HONOR Pad X7 مقابل تابلت فخم عالي السعر — الفرق في الأداء الرسومي والإكسسوارات",
    "conn.btnLs": "HONOR Pad X7 (زي ده)",
    "conn.btnBt": "تابلت فخم غالي",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر معقول مع كفر وشاحن في العلبة",
    "conn.m1Bt": "سعر أعلى بكتير وإكسسوارات مكلفة",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "الدروس والمشاهدة والقراءة والتصفح والاجتماعات",
    "conn.m2Bt": "الرسم والألعاب الثقيلة والتصميم",
    "conn.m3l": "فرق الاستخدام",
    "conn.m3Ls": "شاشة 90Hz وبطارية ضخمة وكفر جاهز — لكل اليوم",
    "conn.m3Bt": "شاشة أفضل وأداء أقوى وملحقات أكتر — لما الاستخدام احترافي",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو الاستخدام دراسة ومشاهدة وتصفح، التابلت ده بيغطي كل ده بميزانية معقولة وبكفر وشاحن في العلبة.",
    "conn.noteBt": "التابلت الفخم بيستاهل لو الرسم والأداء الثقيل شغلك، لكن كتير من استخدمه اليومي مش هيحس بالفرق.",
    "box.title": "في العلبة إيه؟",
    "box.sub": "المحتوى المرفق حسب صفحة المنتج على أمازون مصر — التابلت + الكفر + الشاحن.",
    "box.i1": "تابلت HONOR Pad X7",
    "box.i2": "كفر حماية (Cover Case)",
    "box.i3": "شاحن",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "تابلت HONOR Pad X7 — 4 جيجا رام / 128 جيجا — رمادي — WiFi + كفر — 8.7 بوصة 90Hz",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.1 من 5 بناءً على 247 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "90",
    "rev.n1": "هرتز",
    "rev.v1": "شاشة أنعم في التمرير",
    "rev.q2": "7020",
    "rev.n2": "mAh",
    "rev.v2": "بطارية تكفي اليوم",
    "rev.q3": "365",
    "rev.n3": "جرام",
    "rev.v3": "خفيف للاستخدام الطويل",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بستلم إيه بالظبط؟",
    "faq.a1": "تابلت HONOR Pad X7 (4GB رام / 128GB) مع كفر حماية وشاحن — كل ده في نفس العلبة حسب الصفحة.",
    "faq.q2": "أندرويد بكام؟",
    "faq.a2": "أندرويد 15 بتحديث HONOR — نسخة حديثة بتدعم تطبيقات الجوجل بلاي.",
    "faq.q3": "فيه منفذ سيم؟",
    "faq.a3": "النسخة دي WiFi فقط (موديل JMS-W09) — للاتصال بالنت عبر الواي فاي فقط.",
    "faq.q4": "البطارية تشد قد إيه؟",
    "faq.a4": "7020mAh ليثيوم بوليمر حسب الصفحة — تكفي جلسة استخدام طويلة من دراسة أو مشاهد أو ألعاب خفيفة.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "الضمان والاسترجاع؟",
    "faq.a6": "ضمان سنة واحدة من المُصنّع حسب الصفحة، مع إرجاع مجاني خلال 15 يوم حسب سياسة أمازون.",
    "cta.title": "جاهز تحمل تابلتك معاك؟",
    "cta.sub": "اطلب تابلت HONOR Pad X7 من أمازون مصر — 8.7 بوصة و90Hz وبطارية 7020mAh ودفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف السعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لتابلت HONOR Pad X7. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه Pad X7",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "التابلت ده ليه",
    "aud.title": "اللي هيفيد معاهم Pad X7",
    "aud.sub": "شاشة أنعم وبطارية أكبر — تابلت للبيت والدراسة",
    "aud.a1t": "الطلبة والمحاضرات",
    "aud.a1b": "شاشة 8.7 بوصة مناسبة لمراجعة المحتوى والملفات وكتابة الملاحظات، وبطارية تكفي اليوم الدراسي.",
    "aud.a2t": "مشاهدة الأفلام والمسلسلات",
    "aud.a2b": "شاشة 90Hz وصوت محيطي بيدّي تجربة مشاهدة مريحة وحجم مناسب للسرير والكنبة.",
    "aud.a3t": "الاستخدام العائلي للأطفال",
    "aud.a3b": "ميزات حماية العين مفيدة لجلوس الأطفال، ونظام أندرويد 15 يمشي تطبيقات تعليمية وترفيهية.",
    "aud.a4t": "اللي بيدوّر على تابلت بكفر",
    "aud.a4b": "الكفر والشاحن مرفقين في العلبة — بتفتح وتبدأ على طول من غير مشتريات إضافية.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "8.7″ · 90Hz · 7020mAh",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "HONOR tablet, 90Hz screen",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HONOR",
    "hero.title2": "Pad X7",
    "hero.sub": "An 8.7-inch tablet with a 90Hz screen, a 7020mAh battery, 4GB/128GB and a cover case in the box, with a one-year warranty",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#4 in Computer Tablets",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Display",
    "hero.chip1v": "8.7″ · 90Hz",
    "hero.chip2l": "Memory",
    "hero.chip2v": "4GB + 128GB",
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
    "trust.prime": "One-year HONOR warranty",
    "trust.primeSub": "tax paid - the price includes duties as listed",
    "k.weight": "Display",
    "k.weightSub": "an 8.7-inch IPS at 90Hz and 500 nits",
    "k.dpi": "Battery",
    "k.dpiSub": "7020mAh lithium polymer for long sessions",
    "k.batt": "Chip",
    "k.battSub": "Snapdragon 680 - 2.4 GHz",
    "k.btns": "System",
    "k.btnsSub": "Android 15 - the latest from HONOR",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "An 8.7-inch 90Hz display",
    "s1.b": "An IPS LCD at 1340×800 with a 16:10 ratio and 16.7 million colors - smoother scrolling and deeper blacks than ordinary tablets.",
    "s2.t": "Multiple eye-care features",
    "s2.b": "HONOR’s range of eye-care features - comfortable brightness and reduced blue light for long reading and viewing sessions.",
    "s3.t": "A 7020mAh battery that lasts",
    "s3.b": "A massive 7020mAh lithium polymer battery - a full day of classes, streaming and games without charger anxiety.",
    "s4.t": "Immersive surround sound",
    "s4.b": "A surround sound field that lifts movies and meetings - clear, wide audio from the tablet itself.",
    "s5.t": "8MP + 5MP dual camera for calls",
    "s5.b": "An 8MP rear and 5MP front camera with built-in flash - HD video calls and crisp captured notes.",
    "s6.t": "4GB RAM + 128GB storage",
    "s6.b": "4GB of RAM with 128GB of storage on Android 15 - room for a full library and apps without stutter.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Gray",
    "t.sensor": "Type",
    "t.sensorV": "Android tablet",
    "t.switch": "Model number",
    "t.switchV": "JMS-W09",
    "t.weight": "Weight",
    "t.weightV": "365 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "WiFi · Bluetooth",
    "t.batt": "Battery",
    "t.battV": "7020mAh lithium polymer",
    "t.os": "OS",
    "t.osV": "Android 15",
    "t.hand": "Warranty",
    "t.handV": "1 year manufacturer",
    "t.inbox": "In the box",
    "t.inboxV": "Tablet + cover case + charger",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "An everyday tablet without the big spend",
    "conn.sub": "The HONOR Pad X7 versus a premium tablet - the gap is graphics power and extras",
    "conn.btnLs": "HONOR Pad X7 (this one)",
    "conn.btnBt": "A premium tablet",
    "conn.m1l": "Cost",
    "conn.m1Ls": "a fair price with cover and charger included",
    "conn.m1Bt": "A much higher price and pricey accessories",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Classes, streaming, reading, browsing and meetings",
    "conn.m2Bt": "Drawing, heavy games and design work",
    "conn.m3l": "What changes",
    "conn.m3Ls": "A 90Hz screen, huge battery and a ready cover - for all of the day",
    "conn.m3Bt": "A better screen, stronger performance and more accessories - when the use is pro",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If the job is study, streaming and browsing, this tablet covers it at a sensible budget with a cover and charger included.",
    "conn.noteBt": "A premium tablet earns its keep for drawing and heavy performance, but much of daily use will not feel the difference.",
    "box.title": "What is in the box?",
    "box.sub": "The included contents per the amazon.eg listing - tablet + cover case + charger.",
    "box.i1": "The HONOR Pad X7 tablet",
    "box.i2": "A protective cover case",
    "box.i3": "A charger",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "HONOR Pad X7 tablet - 4GB RAM / 128GB - Gray - WiFi + cover - 8.7-inch 90Hz",
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
    "rev.sub": "Product specs and a 4.1 out of 5 rating from 247 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "90",
    "rev.n1": "Hz",
    "rev.v1": "a smoother screen",
    "rev.q2": "7020",
    "rev.n2": "mAh",
    "rev.v2": "a battery that lasts the day",
    "rev.q3": "365",
    "rev.n3": "g",
    "rev.v3": "light for long use",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What exactly do I get?",
    "faq.a1": "The HONOR Pad X7 tablet (4GB RAM / 128GB) with a protective cover and a charger - all in the same box as listed.",
    "faq.q2": "Which Android version?",
    "faq.a2": "Android 15 with HONOR’s update - a recent version that supports Google Play apps.",
    "faq.q3": "Does it have a SIM slot?",
    "faq.a3": "This variant is WiFi only (model JMS-W09) - internet through WiFi only.",
    "faq.q4": "How long does the battery last?",
    "faq.a4": "7020mAh lithium polymer as listed - enough for a long session of study, streaming or light gaming.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Warranty and returns?",
    "faq.a6": "A one-year manufacturer warranty as listed, with free returns within 15 days per Amazon’s policy.",
    "cta.title": "Ready to carry your tablet with you?",
    "cta.sub": "Order the HONOR Pad X7 on Amazon.eg - 8.7-inch 90Hz, a 7020mAh battery and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the HONOR Pad X7 tablet. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why Pad X7",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Pad X7 suits",
    "aud.sub": "A smoother screen and a bigger battery - a tablet for home and study",
    "aud.a1t": "Students and classes",
    "aud.a1b": "An 8.7-inch screen for reviewing content and documents and taking notes, with a battery that covers the school day.",
    "aud.a2t": "Movie and series lovers",
    "aud.a2b": "A 90Hz screen and surround sound make for comfortable viewing at a size that suits bed and sofa.",
    "aud.a3t": "Family and kids",
    "aud.a3b": "Eye-care features help with children’s screen time, and Android 15 runs educational and entertainment apps.",
    "aud.a4t": "Anyone after a tablet with a case",
    "aud.a4b": "The cover and charger are both included - unbox, set up and you are ready without extra buys.",
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
    ? 'تابلت HONOR Pad X7 — 8.7 بوصة 90Hz و4GB/128 جيجا رمادي | أمازون مصر'
    : 'HONOR Pad X7 Tablet - 8.7-inch 90Hz, 4GB / 128GB, Gray | Amazon Egypt';

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
const LIVE_KEY = 'honor-pad-x7-live';
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
const GAL_FILES = ["img/hp-00.jpg","img/hp-01.jpg","img/hp-02.jpg","img/hp-03.jpg","img/hp-04.jpg","img/hp-05.jpg","img/hp-06.jpg","img/hp-07.jpg","img/hp-08.jpg","img/hp-09.jpg"];
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
