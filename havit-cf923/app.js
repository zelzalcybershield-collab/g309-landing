/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0GHYY8QMH?tag=zoq-21';
const STORE_KEY = 'havit-cf923-lang';

const dict = {
  "ar": {
    "nav.tagline": "CF923 · 3 مراوح",
    "nav.specs": "المواصفات",
    "nav.connect": "زجاج ولا أكريليك",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "كيس جيمنج · ميد تاوير",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Havit CF923",
    "hero.title2": "RGB · Tempered Glass",
    "hero.sub": "كيس كمبيوتر يلمع في مكتبك: زجاج شفاف مع إضاءة RGB و3 مراوح جاهزة — ميد تاوير واسع يسهل تركيب قطعك وتنظيم الكابلات",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "من Havit — ومرّقم #1 في كيسات الكمبيوتر على أمازون — متوفر على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "المراوح",
    "hero.chip1v": "3 مراوح RGB",
    "hero.chip2l": "الزجاج",
    "hero.chip2v": "Tempered Glass",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
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
    "trust.prime": "#1 في كيسات الكمبيوتر",
    "trust.primeSub": "المرتبة #1 في الفئة على أمازون",
    "k.weight": "التبريد",
    "k.weightSub": "3 مراوح RGB تشتغل فوراً + أماكن لمراوح زيادة",
    "k.dpi": "الكارت المتوافق",
    "k.dpiSub": "كروت شاشة لحد طول 345 مم",
    "k.batt": "الأبعاد",
    "k.battSub": "35 × 21 × 38 سم ميد تاوير",
    "k.btns": "التوسعة",
    "k.btnsSub": "7 فتحات PCI-E للبطاقات",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "زجاج Tempered يبان فيه كل حاجة",
    "s1.b": "بانيل جانبي من زجاج Tempered بسماكة 3مم مع إضاءة RGB تعطي شكل فخم وإضاءة رائعة لقطعك — ومقاوم للخدش أكثر من الأكريليك في الاستخدام اليومي.",
    "s2.t": "3 مراوح RGB معاك من أول يوم",
    "s2.b": "الكيس بييجي بثلاثة مراوح RGB جاهزة تشتغل فوراً، ومدعم يركّب لغاية 5 مراوح (12سم في الأعلى والخلف) ويدعم تبريد مياه من الأعلى.",
    "s3.t": "متوافق مع كل الأحجام",
    "s3.b": "بياخد لوحات ATX وMicro-ATX وMini-ITX، وكروت شاشة لحد 345مم ومبردات معالج لحد ارتفاع 165مم — مساحة تكفي قطع قوية من غير ما تتحشر.",
    "s4.t": "منفذ USB 3.0 على الواجهة",
    "s4.b": "واجهة أمامية فيها USB 3.0 بالإضافة لـUSB 2.0، مع صوت HD وأزرار الباور والريست، وباور سبلاي قياسي (ATX).",
    "s5.t": "مساحة كابلات مريحة",
    "s5.b": "مستخدمين اللستنغ بيمدحوه إنه واسع وسهل في التنظيم — إدارة الكابلات بقت لعبة، فالنتيجة تطلع مرتبة ونضيفة.",
    "s6.t": "خامات عملية",
    "s6.b": "هيكل ستيل بسمك 0.4مم بيوفر الحماية ويسهّل إدارة الكابلات، والكيس الكامل بوزن حوالي 3.7 كجم قبل ما تركّب القطع الداخلية.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "النوع",
    "t.colorV": "ميد تاوير · زجاج Tempered",
    "t.sensor": "متوافق مع",
    "t.sensorV": "ATX · Micro-ATX · Mini-ITX",
    "t.switch": "المراوح",
    "t.switchV": "3 مراوح RGB جاهزة · لغاية 5 مراوح 12سم",
    "t.weight": "كروت الشاشة",
    "t.weightV": "لغاية 345مم",
    "t.size": "المبردات",
    "t.sizeV": "لغاية 165مم لمراوح الهواء · مياه من الأعلى",
    "t.conn": "الواجهة الأمامية",
    "t.connV": "USB 3.0 + USB 2.0 + HD Audio + باور وريست",
    "t.batt": "التخزين",
    "t.battV": "HDD 3.5 ×1 أو SSD 2.5 ×1",
    "t.os": "الوزن",
    "t.osV": "3.7 كجم",
    "t.hand": "الضمان",
    "t.handV": "سنة حسب المذكور",
    "t.inbox": "في العلبة",
    "t.inboxV": "الكيس + 3 مراوح RGB مركّبة + علبة كرتون محمية",
    "conn.eyebrow": "زجاج ولا أكريليك",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "يارات البانيل الجانبي — شفاف ولا مش متعب؟ (زجاج Tempered موفرة)",
    "conn.btnLs": "زجاج Tempered (دي)",
    "conn.btnBt": "بانيل أكريليك",
    "conn.m1l": "الشكل",
    "conn.m1Ls": "شفافية واضحة وإضاءة RGB ساطعة من غير تشويش",
    "conn.m1Bt": "شفافية مشتتة وبتزغلل مع الإضاءة وراءها",
    "conn.m2l": "المتانة",
    "conn.m2Bt": "سريع الخدش والتعتيم مع التنظيف المتكرر",
    "conn.m2Ls": "سطح زجاج صلب يقاوم الخدوش المعهودة",
    "conn.m3l": "الأنسب لـ",
    "conn.m3Ls": "مين بيفتح كيسه ويستعرض قطعه بالإضاءة",
    "conn.m3Bt": "الميزانيات الضيقة اللي مفضلة الكيس الخفيف",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الزجاج Tempered عامل شغلته: شفاف ومتين، والإضاءة RGB تبان أجمل ما تكون وراءه. ولو حبيت تعديل لاحق، الزجاج بيضبط مع التبريد والماء في ثواني — اختيار الفخامة وطول العمر.",
    "conn.noteBt": "الأكريليك أرخص وأخف، لكنه بيميل للخدش وبيضيع شفافيته مع الوقت وبيطلع مظهر الصور من ورا الإضاءة. لو مش حابب العرض الزجاجي أو مش بتفتح كيسك، فهوه بديل عملية بسيط.",
    "box.title": "اللي هيوصلك",
    "box.sub": "كيس جيمنج كامل بالمراوح جاهز للتركيب، متوفر على أمازون مصر",
    "box.i1": "كيس Havit CF923",
    "box.i2": "3 مراوح RGB مركّبة",
    "box.i3": "بانيل زجاج Tempered",
    "box.i4": "علبة كرتون محمية للشحن",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Havit CF923 — كيس كمبيوتر جيمنج ميد تاوير RGB",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15–30 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "قيمته من تجارب المستخدمين وتقييم 5.0 من 5 على أمازون مصر",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "شكل فخم",
    "rev.n1": "التصميم",
    "rev.v1": "زجاج + RGB",
    "rev.q2": "مراوح جاهزة",
    "rev.n2": "التبريد",
    "rev.v2": "3 من أول يوم",
    "rev.q3": "مساحة مريحة",
    "rev.n3": "التركيب",
    "rev.v3": "كابلات سهلة",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بياكس بيقطع كرت أغلى جهاز؟",
    "faq.a1": "الكيس بيستوعب كروت شاشة لحد طول 345مم — فمعظم الكروت القوية والحديثة جاية ضمن الحد ده، ومبردات معالج لحد 165مم.",
    "faq.q2": "المراوح اللي جاية كفاية؟",
    "faq.a2": "بييجي بثلاثة مراوح RGB جاهزة تشتغل فوراً، وبيدعم تركيب لغاية 5 مراوح 12سم، وتبريد مياه من الأعلى لو عايز تطور.",
    "faq.q3": "أقدر أركب باورسوپلي كبيير؟",
    "faq.a3": "أيوة — الكيس متوافق مع الباورسوپلي القياسي ATX، فأغلب أحجام الـPSU المنتشرة في السوق مفيش مشكلة في تركيبها.",
    "faq.q4": "ينفع أكتب فيه HDD وSSD مع بعض؟",
    "faq.a4": "اللستنغ بيحدد وحدة تخزين واحدة: HDD مقاس 3.5 بوصة أو SSD مقاس 2.5 بوصة — راجع التفاصيل على صفحة المنتج للتأكد من ترتيب الكابلات.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تبني جهازك بشوية لمع؟",
    "cta.sub": "اطلب Havit CF923 من أمازون مصر — كيس ميد تاوير بزجاج و3 مراوح RGB",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لكيس الكمبيوتر Havit CF923. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Havit",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الكيس ده ليه",
    "aud.title": "اللي هيستفيد منه",
    "aud.sub": "ميد تاوير عملية تبدأ منه أول بيلد أو ترقية ليك — بدون مغالاة",
    "aud.a1t": "مجمعي أول بيلد",
    "aud.a1b": "لو دي أول مره تختار قطعك، الكيس بييجي بمراوح جاهزة وشاسيه واسع — التركيب والتعليم فيه أسهل لقيا للوحات ATX أو M-ATX.",
    "aud.a2t": "اللي عايز شكل يلمع",
    "aud.a2b": "الزجاج Tempered مع إضاءة RGB تجيب شكل مكتبك مرحلة تانية — وعشان مناسب لجميع الأذواق بيشتغل كمان من غير تعديل.",
    "aud.a3t": "ترقيات دون تغيير الكل",
    "aud.a3b": "متوافق مع كروت شاشة لحد 345مم ومبردات الهواء لحد 165مم وتبريد مياه علوي — بياخد مكونات قوية متطورة لتطوير جهازك الحالي.",
    "aud.a4t": "عرض المكتب والحماية",
    "aud.a4b": "هيكل ستيل 0.4مم ووزن 3.7 كجم يروّح الثبات، والزجاج السميك يقي القطع من الخارج بدون ما يخفي جمالها.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "CF923 · 3 fans",
    "nav.specs": "Specs",
    "nav.connect": "Glass vs Acrylic",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming case · Mid-tower",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Havit CF923",
    "hero.title2": "RGB · Tempered Glass",
    "hero.sub": "A PC case that lights up your desk: clear glass with RGB lighting and 3 fans ready — a roomy mid-tower that makes building and cable management easy",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "From Havit — ranked #1 in Computer Cases on Amazon — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Fans",
    "hero.chip1v": "3 RGB fans",
    "hero.chip2l": "Glass",
    "hero.chip2v": "Tempered",
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
    "trust.prime": "#1 in Computer Cases",
    "trust.primeSub": "Seller rank #1 in the category on Amazon",
    "k.weight": "Cooling",
    "k.weightSub": "3 RGB fans out of the box + room for more",
    "k.dpi": "GPU clearance",
    "k.dpiSub": "Graphics cards up to 345mm",
    "k.batt": "Dimensions",
    "k.battSub": "35 × 21 × 38 cm mid-tower",
    "k.btns": "Expansion",
    "k.btnsSub": "7 PCI-E slots",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Tempered glass that shows it all",
    "s1.b": "A side panel of 3mm tempered glass with RGB lighting brings a premium, glowing look to your parts — and resists scratches far better than acrylic in daily use.",
    "s2.t": "3 RGB fans from day one",
    "s2.b": "The case ships with three RGB fans ready to run, supports up to 5 fans (12cm top and rear) and handles a top-mounted liquid cooler.",
    "s3.t": "Compatible with every size",
    "s3.b": "It fits ATX, Micro-ATX and Mini-ITX boards, graphics cards up to 345mm and air coolers up to 165mm tall — room for serious hardware without squeezing.",
    "s4.t": "Front USB 3.0",
    "s4.b": "The front panel has USB 3.0 plus USB 2.0, HD audio, power and reset buttons, and standard ATX PSU support.",
    "s5.t": "Comfortable cable space",
    "s5.b": "Reviewers praise it as spacious and easy to work with — cable management becomes a breeze, and the finish looks tidy.",
    "s6.t": "Practical materials",
    "s6.b": "A 0.4mm steel frame keeps things solid while staying neat, and the full case weighs around 3.7kg before your parts go in.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Type",
    "t.colorV": "Mid-tower · tempered glass",
    "t.sensor": "Motherboard support",
    "t.sensorV": "ATX · Micro-ATX · Mini-ITX",
    "t.switch": "Fans",
    "t.switchV": "3 RGB ready · up to 5 × 12cm",
    "t.weight": "GPU clearance",
    "t.weightV": "Up to 345mm",
    "t.size": "CPU cooler",
    "t.sizeV": "Up to 165mm air · top liquid",
    "t.conn": "Front panel",
    "t.connV": "USB 3.0 + USB 2.0 + HD Audio + power & reset",
    "t.batt": "Storage bays",
    "t.battV": "HDD 3.5 ×1 or SSD 2.5 ×1",
    "t.os": "Weight",
    "t.osV": "3.7kg",
    "t.hand": "Warranty",
    "t.handV": "1 year as stated",
    "t.inbox": "In the box",
    "t.inboxV": "Case + 3 RGB fans installed + protective carton",
    "conn.eyebrow": "Glass vs acrylic",
    "conn.title": "The difference that matters",
    "conn.sub": "The side panel — show it off or keep it simple",
    "conn.btnLs": "Tempered glass (this one)",
    "conn.btnBt": "Acrylic panel",
    "conn.m1l": "Look",
    "conn.m1Ls": "Clear transparency and vivid RGB without haze",
    "conn.m1Bt": "Washed-out look that glares with lights behind",
    "conn.m2l": "Durability",
    "conn.m2Bt": "Scratches and clouds quickly with regular cleaning",
    "conn.m2Ls": "Hard glass surface resists the usual scratches",
    "conn.m3l": "Best for",
    "conn.m3Ls": "Anyone who opens the case and shows the build",
    "conn.m3Bt": "Tight budgets preferring a light panel",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "Tempered glass does its job: clear and tough, and RGB lighting looks its best behind it. If you tinker later, glass also suits liquid cooling builds in seconds — the premium, long-lasting choice.",
    "conn.noteBt": "Acrylic is cheaper and lighter, but it tends to scratch, loses clarity over time and washes out the look behind lights. If you don't need a showcase, it's a simple, practical alternative.",
    "box.title": "What arrives",
    "box.sub": "A complete gaming case with fans, ready to build, available on Amazon.eg",
    "box.i1": "Havit CF923 case",
    "box.i2": "3 RGB fans installed",
    "box.i3": "Tempered glass panel",
    "box.i4": "Protective shipping carton",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Havit CF923 — RGB mid-tower gaming PC case",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15–30 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Its value from user experiences and a 5.0 out of 5 rating on amazon.eg",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "Premium look",
    "rev.n1": "Design",
    "rev.v1": "Glass + RGB",
    "rev.q2": "Fans included",
    "rev.n2": "Cooling",
    "rev.v2": "3 from day one",
    "rev.q3": "Room to build",
    "rev.n3": "Building",
    "rev.v3": "Easy cables",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Will it take an expensive big GPU?",
    "faq.a1": "The case fits graphics cards up to 345mm long — most modern high-end cards fall within that, and CPU coolers up to 165mm.",
    "faq.q2": "Are the included fans enough?",
    "faq.a2": "It ships with three RGB fans ready to run, supports up to 5 × 12cm fans total, and a top-mounted liquid cooler for later upgrades.",
    "faq.q3": "Can I install a large PSU?",
    "faq.a3": "Yes — the case supports the standard ATX PSU format, so most common power supply sizes mount without issues.",
    "faq.q4": "Can I use an HDD and SSD together?",
    "faq.a4": "The listing specifies one storage bay: a 3.5\" HDD or a 2.5\" SSD — check the product page for exact cabling details.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to build with a bit of shine?",
    "cta.sub": "Order the Havit CF923 on Amazon.eg — mid-tower with glass & 3 RGB fans",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Havit CF923 PC case. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why Havit",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who gets the most from it",
    "aud.sub": "A practical mid-tower to start your first build or upgrade — without overspending",
    "aud.a1t": "First-time builders",
    "aud.a1b": "If this is your first time choosing parts, the case comes with fans fitted and a roomy chassis — assembling an ATX or M-ATX build is straightforward.",
    "aud.a2t": "Showcase lovers",
    "aud.a2b": "Tempered glass with RGB lighting takes your desk to another level — and it also works fine without any modding.",
    "aud.a3t": "Incremental upgraders",
    "aud.a3b": "With 345mm GPU clearance, 165mm air-cooler headroom and top liquid support, it takes strong modern components to upgrade your rig.",
    "aud.a4t": "Desk display and protection",
    "aud.a4b": "A 0.4mm steel frame at 3.7kg adds stability, and the thick glass guards your parts while keeping the beauty visible.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and cash on delivery is available - every price, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price and any current offers - all of it lives on Amazon's page only.",
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
    ? 'Havit CF923 — كيس كمبيوتر جيمنج ميد تاوير بزجاج Tempered و3 مراوح RGB'
    : 'Havit CF923 — RGB gaming PC case with tempered glass & 3 RGB fans';

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
const LIVE_KEY = 'havit-cf923-live';
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
const GAL_FILES = ["img/havit-cf923-01.jpg","img/havit-cf923-02.jpg"];
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
