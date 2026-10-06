/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B08JH6DXCQ?tag=zoq-21';
const STORE_KEY = 'titanwolf-mousepad-lang';

const dict = {
  "ar": {
    "nav.tagline": "800×300 · RGB 11 وضع",
    "nav.specs": "المواصفات",
    "nav.connect": "بإضاءة ولا بدون",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "مصادة ماوس · RGB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Titanwolf",
    "hero.title2": "800×300 RGB",
    "hero.sub": "مصادة ماوس XXL بمقاس 800×300 مم وإضاءة RGB بـ11 وضع وسطح مجهري قابل للغسل — للألعاب والمكتب",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#169 في مساند الماوس على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "المقاس",
    "hero.chip1v": "800 × 300 مم",
    "hero.chip2l": "أوضاع الإضاءة",
    "hero.chip2v": "11 وضع RGB",
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
    "trust.returnsSub": "حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.2 من 5 من 343 عميل على أمازون",
    "k.weight": "المقاس الممتد",
    "k.weightSub": "80 × 30 سم تحت الماوس والكيبورد",
    "k.dpi": "أوضاع الإضاءة",
    "k.dpiSub": "7 ألوان + 4 مؤثرات",
    "k.batt": "التقييم على أمازون",
    "k.battSub": "من 343 تقييم على الصفحة",
    "k.btns": "الوزن",
    "k.btnsSub": "635 جم — سطح مجهري",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "مقاس XXL بطول 800 × 300 مم",
    "s1.b": "مساحة ممتدة بتسع الماوس جنب الكيبورد، فالحركة بتبقى حرة والشكل على المكتب بيبقى مرتّب.",
    "s2.t": "إضاءة RGB بـ11 وضع",
    "s2.b": "سبع ألوان وأربع مؤثرات تبدّل منهم على حسب مزاجك — إضاءة حوالين السطح بتدي المكتب أجواء من غير ما تشتت.",
    "s3.t": "سطح مجهري دقيق",
    "s3.b": "نسيج مجهري بيدي الماوس قبضة وانزلاقة متوازنة — دقة أعلى في الألعاب وراحة في الشغل اليومي.",
    "s4.t": "قابلة للغسل",
    "s4.b": "مكتوبة في صفحة المنتج Washable surface — تقدر تغسل السطح وترجعه ينشف ويستخدم تاني من غير ما تبوظ.",
    "s5.t": "لون أسود وشكل مستطيل",
    "s5.b": "لون أسود بسيط وستايل مستطيل بيتآخوا مع أي مكتب أو لابتوب، والثيم Plain يعني من غير رسومات مزدحمة.",
    "s6.t": "للألعاب والمكتب",
    "s6.b": "مكتوبة في الصفحة استخداماتها Gaming و Office — تخدم اللعب السريع والشغل اليومي بنفس السطح.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "النوع",
    "t.sensorV": "مصادة ماوس ممتدة بإضاءة RGB",
    "t.switch": "رقم الموديل",
    "t.switchV": "A304548x2",
    "t.weight": "الوزن",
    "t.weightV": "635 جم",
    "t.size": "المقاس",
    "t.conn": "الخامة",
    "t.connV": "سطح مجهري من القماش",
    "t.batt": "الإضاءة",
    "t.battV": "RGB — 11 وضع (7 ألوان + 4 مؤثرات)",
    "t.os": "الاستخدام",
    "t.osV": "ألعاب ومكتب",
    "t.hand": "الضمان",
    "t.handV": "بدون ضمان مذكور في صفحة المنتج",
    "t.inbox": "في العلبة",
    "t.inboxV": "المصادة نفسها (قطعة واحدة)",
    "conn.eyebrow": "بإضاءة ولا بدون",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "مصادة RGB ومصادة عادية — المقارنة بتوضح ليه الإضاءة بتفرق في شكل المكتب",
    "conn.btnLs": "RGB بـ11 وضع (زي دي)",
    "conn.btnBt": "بدون إضاءة",
    "conn.m1l": "الإضاءة",
    "conn.m1Ls": "11 وضع — 7 ألوان + 4 مؤثرات",
    "conn.m1Bt": "لون المكتب الطبيعي بس",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "مكتب ألعاب وأجواء غرفة",
    "conn.m2Bt": "شغل بسيط من غير ديكور",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "ألوان حوالي الماوس والكيبورد وإحساس ألعاب أكتر",
    "conn.m3Bt": "بساطة أكتر — من غير إضاءة ولا مؤثرات",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "إضاءة RGB بـ11 وضع بتلف حوالين السطح فالمكتب بياخد شكل تاني بالليل، وتقدر تغيّر اللون أو المؤثر في ثانية.",
    "conn.noteBt": "المصادة من غير إضاءة بسيطة ووظيفية — بتاخد شكل المكتب زي ما هو من غير ألوان تانية حوالي السطح.",
    "box.title": "اللي هيوصلك",
    "box.sub": "مصادة واحدة جاهزة تفتحها من غير تركيب، متوفرة على أمازون مصر",
    "box.i1": "مصادة ماوس XXL 800×300 مم",
    "box.i2": "سطح مجهري قابل للغسل",
    "box.i3": "إضاءة RGB بأحد عشر وضع",
    "box.i4": "لون أسود",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Titanwolf — مصادة ماوس XXL 800×300 مم بإضاءة RGB و11 وضع — أسود",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 4.2 من 5 بناءً على 343 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "800×300 مم",
    "rev.n1": "المساحة",
    "rev.v1": "الماوس والكيبورد مع بعض",
    "rev.q2": "11 وضع RGB",
    "rev.n2": "الأجواء",
    "rev.v2": "ألوان حوالي المكتب",
    "rev.q3": "قابل للغسل",
    "rev.n3": "النظافة",
    "rev.v3": "تغسله وترجعه تاني",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "المصادة مقاسها كام؟",
    "faq.a1": "800 × 300 مم (80 × 30 سم) — وهي مقاس XXL زي ما مكتوب في صفحة المنتج، وبتسع الماوس جنب الكيبورد.",
    "faq.q2": "فيها كام وضع إضاءة؟",
    "faq.a2": "أحد عشر وضع — سبعة ألوان وأربعة مؤثرات، زي ما مكتوب في أول صفحة المنتج: LED Multi Colour with 11 Modes.",
    "faq.q3": "السطح بينضف إزاي؟",
    "faq.a3": "مكتوبة في الصفحة Washable surface — يعني تقدر تغسل السطح وتحطه ينشف، وترجع تستخدمه عادي.",
    "faq.q4": "السطح بينزلق؟",
    "faq.a4": "السطح مجهري (micro-textured fabric) زي ما مكتوب في المواصفات — بيدّي الماوس قبضة متوازنة بين الانزلاقة والثبات.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "الصفحة بتشاور على استرجاع خلال 15 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تلوّن مكتبك؟",
    "cta.sub": "اطلب مصادة Titanwolf 800×300 مم من أمازون مصر — RGB بـ11 وضع وقابلة للغسل وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمصادة ماوس Titanwolf RGB مقاس 800×300 مم. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه Titanwolf",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "المصادة دي ليه",
    "aud.title": "اللي هيفيد معاه Titanwolf",
    "aud.sub": "مساحة أوسع وإضاءة حوالين السطح — لكل عايز مكتب مرتب وأجواء لعب",
    "aud.a1t": "اللاعبين",
    "aud.a1b": "المقاس 800 مم بيخلّي مكان الماوس جنب الكيبورد، والسطح المجهري بيدي دقة أعلى في الألعاب السريعة.",
    "aud.a2t": "أصحاب المكاتب واللي بيتشغلوا شغل شاشة",
    "aud.a2b": "سطح واحد تحت الماوس والكيبورد بيرتب المكتب، والإضاءة بتدي شكل أهدى في الشغل الطويل.",
    "aud.a3t": "اللي عايزين إضاءة لون للمكتب",
    "aud.a3b": "سبع ألوان وأربع مؤثرات تبدّلهم على حسب مزاجك — تغيير بسيط بيوصل فرق واضح في شكل المكتب.",
    "aud.a4t": "اللي بيدوروا على هدية عملية",
    "aud.a4b": "مقاس كبير وإضاءة RGB وسعر في المتناول — هدية عملية لأي لاعب أو صاحب مكتب في المناسبات.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "800×300 · 11 RGB modes",
    "nav.specs": "Specs",
    "nav.connect": "RGB vs plain",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Mouse pad · RGB",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Titanwolf",
    "hero.title2": "800×300 RGB",
    "hero.sub": "An XXL 800×300 mm gaming mouse mat with 11-mode RGB lighting and a washable micro-textured surface — for gaming and office",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#169 in mouse pads on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Size",
    "hero.chip1v": "800 × 300 mm",
    "hero.chip2l": "Light modes",
    "hero.chip2v": "11 RGB modes",
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
    "trust.returnsSub": "Per Amazon's policy for this item",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.2 out of 5 by 343 customers on Amazon",
    "k.weight": "Extended size",
    "k.weightSub": "80 × 30 cm for mouse and keyboard",
    "k.dpi": "Light modes",
    "k.dpiSub": "7 colours + 4 effects",
    "k.batt": "Amazon rating",
    "k.battSub": "From 343 ratings on the listing",
    "k.btns": "Weight",
    "k.btnsSub": "635 g — micro-textured surface",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "XXL size, 800 × 300 mm",
    "s1.b": "An extended area that fits the mouse beside the keyboard, so movement stays free and the desk stays tidy.",
    "s2.t": "11-mode RGB lighting",
    "s2.b": "Seven colours and four effects to switch between — light around the edge sets a mood without being distracting.",
    "s3.t": "Micro-textured surface",
    "s3.b": "A micro-textured weave gives the mouse an even mix of grip and glide — more precision in games, more comfort at work.",
    "s4.t": "Washable",
    "s4.b": "The listing states a washable surface — you can wash it, let it dry and keep using it without damage.",
    "s5.t": "Black, rectangular",
    "s5.b": "A plain black rectangle that sits with any desk or laptop, and a plain theme with no busy artwork.",
    "s6.t": "For gaming and office",
    "s6.b": "The listing names gaming and office as its uses — it serves fast play and daily work from the same surface.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Extended RGB mouse mat",
    "t.switch": "Model number",
    "t.switchV": "A304548x2",
    "t.weight": "Weight",
    "t.weightV": "635 g",
    "t.size": "Size",
    "t.conn": "Material",
    "t.connV": "Micro-textured fabric surface",
    "t.batt": "Lighting",
    "t.battV": "RGB — 11 modes (7 colours + 4 effects)",
    "t.os": "Use",
    "t.osV": "Gaming and office",
    "t.hand": "Warranty",
    "t.handV": "No warranty listed on the product page",
    "t.inbox": "In the box",
    "t.inboxV": "The pad itself (one piece)",
    "conn.eyebrow": "RGB or plain",
    "conn.title": "The difference that matters",
    "conn.sub": "An RGB pad and a plain pad — the comparison shows why the lighting changes the desk",
    "conn.btnLs": "RGB with 11 modes (this one)",
    "conn.btnBt": "No lighting",
    "conn.m1l": "Lighting",
    "conn.m1Ls": "11 modes — 7 colours + 4 effects",
    "conn.m1Bt": "Just the desk’s natural colour",
    "conn.m2l": "Best for",
    "conn.m2Ls": "A gaming desk and room mood",
    "conn.m2Bt": "Simple work with no décor",
    "conn.m3l": "What changes",
    "conn.m3Ls": "Colour around mouse and keyboard, more of a gaming feel",
    "conn.m3Bt": "Simpler — no lighting, no effects",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "RGB lighting runs around the edge, so the desk looks different at night, and you can swap the colour or effect in a second.",
    "conn.noteBt": "A pad without lighting is plain and functional — it takes the desk as it is, with no extra colour around the surface.",
    "box.title": "What arrives",
    "box.sub": "One ready-to-use pad, no setup needed, available on Amazon.eg",
    "box.i1": "XXL mouse mat, 800 × 300 mm",
    "box.i2": "Washable micro-textured surface",
    "box.i3": "RGB lighting with eleven modes",
    "box.i4": "Black finish",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Titanwolf — XXL 800×300 mm RGB gaming mouse mat with 11 modes — Black",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.2 out of 5 rating from 343 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "800 × 300 mm",
    "rev.n1": "Space",
    "rev.v1": "Mouse and keyboard together",
    "rev.q2": "11 RGB modes",
    "rev.n2": "Mood",
    "rev.v2": "Colour around the desk",
    "rev.q3": "Washable",
    "rev.n3": "Cleaning",
    "rev.v3": "Wash it and use it again",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What size is the pad?",
    "faq.a1": "800 × 300 mm (80 × 30 cm) — listed as XXL on the product page, and it fits the mouse beside the keyboard.",
    "faq.q2": "How many lighting modes?",
    "faq.a2": "Eleven modes — seven colours and four effects, exactly as the listing states: LED Multi Colour with 11 Modes.",
    "faq.q3": "How do I clean the surface?",
    "faq.a3": "The listing says washable surface - so you can wash it, let it dry, and carry on using it.",
    "faq.q4": "Does the mouse slip on it?",
    "faq.a4": "The specs list a micro-textured fabric surface - it gives the mouse an even balance of glide and grip.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing shows a 15-day return window per Amazon’s policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to light up your desk?",
    "cta.sub": "Order the Titanwolf 800×300 mm mat on Amazon.eg — 11-mode RGB, washable and cash-on-delivery ready",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Titanwolf 800×300 mm RGB mouse mat. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Titanwolf",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Titanwolf suits",
    "aud.sub": "More room and light around the surface — for anyone who wants a tidy desk and a gaming mood",
    "aud.a1t": "Gamers",
    "aud.a1b": "The 800 mm width keeps room for the mouse beside the keyboard, and the micro-textured surface adds precision in fast games.",
    "aud.a2t": "Office and screen workers",
    "aud.a2b": "One surface under mouse and keyboard keeps the desk organised, and the lighting gives long sessions a calmer feel.",
    "aud.a3t": "Anyone after coloured lighting",
    "aud.a3b": "Seven colours and four effects to switch between - a small change that visibly shifts how the desk looks.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "A large size, RGB lighting and an approachable price - a practical gift for any gamer or desk owner.",
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
    ? 'مصادة Titanwolf RGB مقاس 800×300 مم | أمازون مصر'
    : 'Titanwolf XXL RGB Gaming Mouse Mat 800×300 mm | Amazon Egypt';

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
const LIVE_KEY = 'titanwolf-mousepad-live';
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
const GAL_FILES = ["img/tm-00.jpg","img/tm-01.jpg","img/tm-02.jpg","img/tm-03.jpg","img/tm-04.jpg","img/tm-05.jpg","img/tm-06.jpg","img/tm-07.jpg"];
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
