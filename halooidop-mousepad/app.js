/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0DS67F41P?tag=zoq-21';
const STORE_KEY = 'halooidop-mousepad-lang';

const dict = {
  "ar": {
    "nav.tagline": "80×30 · Dark Full Moon",
    "nav.specs": "المواصفات",
    "nav.connect": "كبيرة ولا صغيرة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "مصادة ماوس · مكتبية",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Halooidop",
    "hero.title2": "80×30 CM",
    "hero.sub": "مصادة ماوس مكتبية ممتدة بسطح Lycra ناعم وقاعدة مطاط غير منزلقة — للألعاب والمكتب",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "الدفع عند الاستلام متاح — متوفرة على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "المقاس",
    "hero.chip1v": "80×30 سم",
    "hero.chip2l": "السماكة",
    "hero.chip2v": "3 مم",
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
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.6 من 5 من 246 عميل على أمازون",
    "k.weight": "سطح Lycra",
    "k.weightSub": "انزلاق سلس وسريع للماوس",
    "k.dpi": "قاعدة مطاط",
    "k.dpiSub": "غير منزلقة — تثبت في مكانها",
    "k.batt": "حواف مخيطة",
    "k.battSub": "مش هتتقرمش أو تتفتل",
    "k.btns": "مناسبة للكيبورد",
    "k.btnsSub": "مساحة ماوس وكيبورد مع بعض",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "مقاس ممتد 80×30 سم",
    "s1.b": "مساحة واسعة بتسع الكيبورد والماوس مع بعض، فماوسك يتحرك بحرية ويبقى شكل المكتب منظم ومتناسق.",
    "s2.t": "سطح Lycra فائق النعومة",
    "s2.b": "قماش Lycra رفيع على الوجه بيخلي الماوس ينزلق بسلاسة من غير جهد — حركة أسرع وأدق في الألعاب والشغل.",
    "s3.t": "قاعدة مطاط غير منزلقة",
    "s3.b": "قاعدة مطاط كثيفة بتثبت المصادة في مكانها، فمفيش زحلق أثناء الأكل أو اللعب السريع — ماوسك والكيبورد ثابتين.",
    "s4.t": "حواف مخيطة بدقة",
    "s4.b": "الحواف متخيطة بحواف عالية الجودة فمش هتتقرمش ولا تتفتل مع الاستخدام اليومي — مصادة تدوم.",
    "s5.t": "تصميم Dark Full Moon",
    "s5.b": "تصميم مستوحى من القمر الكامل بتفاصيل جميلة بيضيف لمسة للمكتب، وهو خيار لطيف كهدية للأصدقاء والعيلة.",
    "s6.t": "للألعاب والمكتب",
    "s6.b": "سطح ناعم وقاعدة ثابتة بيصلحوا للاعبين اللي عايزين دقة، وللشغل اليومي اللي عايز راحة — واحدة في كل حتة.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "التصميم",
    "t.colorV": "Dark Full Moon",
    "t.sensor": "المقاس",
    "t.sensorV": "80 × 30 سم (31.5 × 11.8 بوصة)",
    "t.switch": "السماكة",
    "t.switchV": "3 مم",
    "t.weight": "الوزن",
    "t.weightV": "0.43 كجم",
    "t.size": "الشكل",
    "t.conn": "الخامة",
    "t.connV": "سطح Lycra + قاعدة مطاط",
    "t.batt": "الحواف",
    "t.battV": "مخيطة بجودة عالية",
    "t.os": "الاستخدام",
    "t.osV": "ألعاب وشغل مكتبي",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "المصادة نفسها (قطعة واحدة)",
    "conn.eyebrow": "كبيرة ولا صغيرة",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "مصادة المكتب وتريقة ما طبيعية — المقرنة بتوضح ليه دي عملية أكتر",
    "conn.btnLs": "ممتدة 80 سم (زي دي)",
    "conn.btnBt": "مصادة صغيرة",
    "conn.m1l": "المساحة",
    "conn.m1Ls": "بتسع الماوس والكيبورد مع بعض",
    "conn.m1Bt": "بتكفي الماوس بس",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "مكاتب وألعاب وأجواء شغل",
    "conn.m2Bt": "سفر وجهاز لابتوب صغير",
    "conn.m3l": "اللي بيفرقه",
    "conn.m3Ls": "شكل منظم ومساحة حركة أكبر للماوس",
    "conn.m3Bt": "أخف وأرخص غالباً وبتاخد مساحة أقل",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "المصادة الممتدة 80 سم بتغطي مساحة الكيبورد والماوس كلهم، فمكتبك يبقى منظم والماوس بيتحرك بسلاسة من غير ما يخرج من السطح في الألعاب السريعة.",
    "conn.noteBt": "المصادة الصغيرة أخف وبتاخد مساحة أقل على المكتب، بس بتكفي الماوس بس وبتضطر تعلي سطح الشغل لما الماوس يخرج منها.",
    "box.title": "اللي هيوصلك",
    "box.sub": "مصادة واحدة جاهزة تفتحها من غير تركيب، متوفرة على أمازون مصر",
    "box.i1": "مصادة 80×30 سم",
    "box.i2": "سطح Lycra ناعم",
    "box.i3": "قاعدة مطاط غير منزلقة",
    "box.i4": "حواف مخيطة",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Halooidop — مصادة ماوس مكتبية ممتدة 80×30 سم — Dark Full Moon",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.6 من 5 بناءً على 246 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "مقاس 80×30 سم",
    "rev.n1": "المساحة",
    "rev.v1": "كيبورد وماوس معاً",
    "rev.q2": "سطح Lycra",
    "rev.n2": "الانزلاق",
    "rev.v2": "سلس وبدون جهد",
    "rev.q3": "قاعدة مطاط",
    "rev.n3": "الثبات",
    "rev.v3": "في موضعها",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "المصادة مقاسها كام؟",
    "faq.a1": "80 × 30 سم (31.5 × 11.8 بوصة) وسمك 3 مم، وبتسع الكيبورد والماوس مع بعض.",
    "faq.q2": "السطح ينفع مع أي ماوس؟",
    "faq.a2": "السطح Lycra الناعم بيخدم أي ماوس — سلكي أو لاسلكي — وبيعطي انزلاق سلس، وتقدر تستخدمها للجيمز والشغل اليومي.",
    "faq.q3": "القاعدة بتزحلق؟",
    "faq.a3": "القاعدة مطاط كثيف غير منزلق، بتثبت المصادة في مكانها حتى في الحركة السريعة، فلا زحلق في الاستخدام الطبيعي.",
    "faq.q4": "تنفع كهدية؟",
    "faq.a4": "أيوا — تصميم Dark Full Moon جميل وشكلها لطيف على المكتب، وهي هدية عملية لكل اللي قدام الشاشة في المناسبات.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تخلّص مكتبك؟",
    "cta.sub": "اطلب مصادة Halooidop 80×30 سم من أمازون مصر — ناعمة وثابتة وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمصادة ماوس Halooidop 80×30 سم. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Halooidop",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مصادة الماوس دي ليه",
    "aud.title": "اللي هتفيد معاهم Halooidop",
    "aud.sub": "مساحة أوسع وسطح أنعم — لكل عايز مكتب مرتب ولعب سلس",
    "aud.a1t": "اللاعبين",
    "aud.a1b": "مساحة 80 سم بتخلي ماوسك جنب الكيبورد متسحش من السطح في الألعاب السريعة، والسطح الناعم بيدي حركة بدقة أكبر.",
    "aud.a2t": "أصحاب المكاتب واللي بيتشغلوا شغل شاشة",
    "aud.a2b": "مساحة كاملة تحت الكيبورد والماوس بترتب المكتب وتقلل الاهتراء، والقاعدة المطاطية بتثبت كل حاجة في موضعها.",
    "aud.a3t": "اللي عايزين لمسة شكل للمكتب",
    "aud.a3b": "تصميم Dark Full Moon بيفرق في شكل المكتب، وسطح المصيدة النضيف بيدي مكتبك ملمس أنضف وأرتب.",
    "aud.a4t": "اللي بيدوروا على هدية عملية",
    "aud.a4b": "سعر في المتناول وتناسب أي لاعب أو صاحب مكتب — هدية عملية بإحساس شخصي على المواريخ والكريسماس وغيره.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "80×30 · Dark Full Moon",
    "nav.specs": "Specs",
    "nav.connect": "Desk pad vs Small",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Mouse pad · Desk",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Halooidop",
    "hero.title2": "80×30 CM",
    "hero.sub": "An extended desk mouse pad with an ultra-smooth Lycra surface and a non-slip rubber base — for gaming and office",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "Cash on delivery available — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Size",
    "hero.chip1v": "80×30 cm",
    "hero.chip2l": "Thickness",
    "hero.chip2v": "3 mm",
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
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.6 out of 5 by 246 customers on Amazon",
    "k.weight": "Lycra surface",
    "k.weightSub": "Smooth, fast mouse glide",
    "k.dpi": "Rubber base",
    "k.dpiSub": "Non-slip — stays in place",
    "k.batt": "Stitched edges",
    "k.battSub": "Won't fray or peel",
    "k.btns": "Keyboard & mouse",
    "k.btnsSub": "One sheet for both",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Extended 80×30 cm size",
    "s1.b": "A wide area that covers both the keyboard and the mouse, so your mouse moves freely and your desk looks tidy and consistent.",
    "s2.t": "Ultra-smooth Lycra surface",
    "s2.b": "Fine Lycra fabric on top lets the mouse glide effortlessly — faster, more precise movement in games and at work.",
    "s3.t": "Non-slip rubber base",
    "s3.b": "A dense rubber base keeps the pad firmly in place — no sliding during fast play or long work, with both mouse and keyboard steady.",
    "s4.t": "Neatly stitched edges",
    "s4.b": "The stitched edges hold up in daily use without fraying or peeling — a pad that lasts.",
    "s5.t": "Dark Full Moon design",
    "s5.b": "A full-moon inspired design with nice detail that adds a touch to your desk, and it makes a pleasant gift for friends and family.",
    "s6.t": "For gaming and office",
    "s6.b": "A smooth surface and a firm base suit gamers after precision and office users after comfort — one mat for everywhere.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Design",
    "t.colorV": "Dark Full Moon",
    "t.sensor": "Size",
    "t.sensorV": "80 × 30 cm (31.5 × 11.8 in)",
    "t.switch": "Thickness",
    "t.switchV": "3 mm",
    "t.weight": "Weight",
    "t.weightV": "0.43 kg",
    "t.size": "Shape",
    "t.conn": "Material",
    "t.connV": "Lycra surface + rubber base",
    "t.batt": "Edges",
    "t.battV": "Quality stitched edges",
    "t.os": "Use",
    "t.osV": "Gaming and office work",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "The pad itself (one piece)",
    "conn.eyebrow": "Desk pad vs small",
    "conn.title": "The difference that matters",
    "conn.sub": "A desk pad and a small pad are different tools — the comparison shows why this one is more practical",
    "conn.btnLs": "Extended 80 cm (this)",
    "conn.btnBt": "Small pad",
    "conn.m1l": "Coverage",
    "conn.m1Ls": "Covers the mouse and keyboard",
    "conn.m1Bt": "Covers the mouse only",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Desks, gaming and work setups",
    "conn.m2Bt": "Travel and small laptops",
    "conn.m3l": "The trade-off",
    "conn.m3Ls": "Tidy look and more mouse movement",
    "conn.m3Bt": "Lighter, usually cheaper, less space",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "The extended 80 cm pad covers the keyboard and mouse area entirely, keeping your desk tidy and letting the mouse glide smoothly without leaving the surface during fast play.",
    "conn.noteBt": "A small pad is lighter and takes less desk space, but it only serves the mouse and you'll feel the edge mid-swipe.",
    "box.title": "What arrives",
    "box.sub": "One ready-to-use pad, no setup needed, available on Amazon.eg",
    "box.i1": "80×30 cm pad",
    "box.i2": "Smooth Lycra surface",
    "box.i3": "Non-slip rubber base",
    "box.i4": "Stitched edges",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Halooidop — Extended 80×30 cm Desk Mouse Pad — Dark Full Moon",
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
    "rev.sub": "Product specs and a 4.6 out of 5 rating from 246 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "80×30 cm size",
    "rev.n1": "Coverage",
    "rev.v1": "Keyboard and mouse together",
    "rev.q2": "Lycra surface",
    "rev.n2": "Glide",
    "rev.v2": "Smooth and effortless",
    "rev.q3": "Rubber base",
    "rev.n3": "Stability",
    "rev.v3": "Stays put",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What size is the pad?",
    "faq.a1": "80 × 30 cm (31.5 × 11.8 in) at 3 mm thick, covering the keyboard and mouse together.",
    "faq.q2": "Will it work with my mouse?",
    "faq.a2": "The smooth Lycra surface serves any mouse — wired or wireless — with an easy glide, and works for both gaming and daily work.",
    "faq.q3": "Does the base slide around?",
    "faq.a3": "The base is a dense non-slip rubber that holds the pad in place even during fast movement — no slipping in normal use.",
    "faq.q4": "Is it a good gift?",
    "faq.a4": "Yes — the Dark Full Moon design looks nice on a desk, and it is a practical, affordable gift for gamers or office friends during the holidays.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to tidy up your desk?",
    "cta.sub": "Order the Halooidop 80×30 cm pad on Amazon.eg — smooth, stable and cash-on-delivery ready",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Halooidop 80×30 cm mouse pad. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Halooidop",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Halooidop suits",
    "aud.sub": "More room and a smoother surface — for anyone who wants a tidy desk and smooth play",
    "aud.a1t": "Gamers",
    "aud.a1b": "The 80 cm width keeps the mouse with the keyboard and off the desk edge in fast games, and the soft surface supports precise movement.",
    "aud.a2t": "Office and screen workers",
    "aud.a2b": "A full surface under keyboard and mouse tidies the desk and reduces wear, while the rubber base keeps everything in place.",
    "aud.a3t": "Anyone after a desk upgrade look",
    "aud.a3b": "The Dark Full Moon design changes the look of your desk, and a clean pad surface gives it a polished feel.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "An approachable price that suits any gamer or office user — a practical gift with a personal feel for birthdays, Christmas and more.",
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
    ? 'مصادة ماوس كبيرة 80×30 سم — سطح ناعم وقاعدة غير منزلقة لكيبورد وماوس'
    : 'Halooidop Extended Gaming Mouse Pad — 80×30 cm, Non-Slip Desk Mat';

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
const LIVE_KEY = 'halooidop-mousepad-live';
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
const GAL_FILES = ["img/halooidop-mousepad-01.jpg","img/halooidop-mousepad-02.jpg","img/halooidop-mousepad-03.jpg","img/halooidop-mousepad-04.jpg"];
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
