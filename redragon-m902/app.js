/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B00MB7L4SW?tag=zoq-21';
const STORE_KEY = 'redragon-m902-lang';

const dict = {
  "ar": {
    "nav.tagline": "M902 · أسود",
    "nav.specs": "المواصفات",
    "nav.connect": "سلكي ولا لاسلكي",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ماوس جيمنج · سلكي",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Redragon M902",
    "hero.title2": "SAMSARA",
    "hero.sub": "ماوس جيمنج سلكي بحساس بصري وتصميم مريح وإضاءة LED — لبي سي واللابتوب",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "متوفر على أمازون مصر بشحن سريع ومجاني",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الحساس",
    "hero.chip1v": "بصري",
    "hero.chip2l": "الاتصال",
    "hero.chip2v": "USB سلكي",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "ادفع كاش عند الباب",
    "trust.delivery": "شحن سريع ومجاني",
    "trust.deliverySub": "شحن سريع ومجاني من أمازون مصر",
    "trust.returns": "استرجاع مجاني",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.1 من 5 من 310 عميل على أمازون",
    "k.weight": "التقييم على أمازون",
    "k.weightSub": "4.1 من 5 — من 310 تقييم",
    "k.dpi": "حساس بصري",
    "k.dpiSub": "حركة بتتقري بضوء من غير أجزاء متحركة",
    "k.batt": "اتصال سلكي",
    "k.battSub": "مفيش بطارية ولا شحن",
    "k.btns": "إضاءة LED",
    "k.btnsSub": "ألوان متعددة — قوس قزح",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "حساس بصري",
    "s1.b": "الحساس البصري بيقرا الحركة بضوء ويعمل من غير أجزاء متحركة، وبيشتغل على الأسطح العادية من غير ماوس باد. اختيار عملي للشغل اليومي والألعاب.",
    "s2.t": "تصميم مريح للاستخدام الطويل",
    "s2.b": "الشكل المريح بيستخدم باليدين الاتنين عادي، وبيوزّع الضغط على إيدك، فتكمّل شغل طويل على المكتب من غير تعب زايد.",
    "s3.t": "سلكي — ما فيش بطارية",
    "s3.b": "الكابل جزء من البساطة: توصّله بمنفذ USB ويشتغل على طول. ما فيش بطارية تخلص، ولا شحن تستناه، ولا دونجل استقبال ينضيع.",
    "s4.t": "إضاءة LED بألوان قوس قزح",
    "s4.b": "جسم أسود مع إضاءة LED بألوان متعددة، بتدي لمسة مميزة على المكتب وتكمّل أي تجهيز. الصور على أمازون بتوريك شكلها الفعلي.",
    "s5.t": "متوافق مع بي سي ولابتوب",
    "s5.b": "بيشتغل مع الكمبيوتر الشخصي واللابتوب على ويندوز، وأي جهاز فيه منفذ USB. مخصوص لأجهزة الكمبيوتر واللابتوب.",
    "s6.t": "من أمازون مصر",
    "s6.b": "متوفر على أمازون مصر بشحن سريع ومجاني، وخيار الدفع عند الاستلام متاح على صفحة المنتج.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "الحساس",
    "t.sensorV": "بصري",
    "t.switch": "الأزرار",
    "t.switchV": "أزرار أساسية وعجلة تمرير",
    "t.weight": "الوزن",
    "t.weightV": "خفيف",
    "t.size": "الاتصال",
    "t.conn": "التوافق",
    "t.connV": "بي سي ولابتوب (ويندوز)",
    "t.batt": "الإضاءة",
    "t.battV": "LED بألوان متعددة",
    "t.os": "الاستخدام",
    "t.osV": "ألعاب",
    "t.hand": "يُشحن من",
    "t.handV": "Amazon.eg",
    "t.inbox": "في العلبة",
    "t.inboxV": "الماوس + دليل المستخدم",
    "conn.eyebrow": "سلكي ولا لاسلكي",
    "conn.title": "الفرق بين الماوسين",
    "conn.sub": "الاختيار بينهم بيعتمد على إزاي بتلعب وبتستخدمه",
    "conn.btnLs": "سلكي (زي ده)",
    "conn.btnBt": "لاسلكي",
    "conn.m1l": "زمن الاستجابة",
    "conn.m1Ls": "فوري عبر الكابل",
    "conn.m1Bt": "يعتمد على الاتصال اللاسلكي",
    "conn.m2l": "الطاقة",
    "conn.m2Ls": "مفيش بطارية ولا شحن",
    "conn.m2Bt": "محتاج شحن أو بطارية",
    "conn.m3l": "اللي بيفرقه",
    "conn.m3Ls": "ثبات مضمون من غير انقطاع",
    "conn.m3Bt": "حرية أكبر في الحركة",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الكابل جزء من التصميم: ما فيش بطارية تموت نص الجولة، ولا أي احتمال تأخير من الاتصال. بتوصّله وخلاص.",
    "conn.noteBt": "اللاسلكي مريح وبيخلّيك تتحرك بحرية على المكتب من غير كابل، بس بيحتاج شحن أو بطارية، وزمن الاستجابة ممكن يزيد شوية.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج أصلي من ريدراجون، ويوصلك بشحن سريع ومجاني من أمازون مصر",
    "box.i1": "ماوس Redragon M902 أسود",
    "box.i2": "دليل المستخدم",
    "box.i3": "مش محتاج بطارية ولا دونجل استقبال",
    "box.i4": "بيشتغل على طول من غير إعدادات",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Redragon SAMSARA M902-RGB — ماوس جيمنج سلكي — أسود",
    "offer.seller": "شحن سريع ومجاني من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "الإرجاع",
    "offer.retV": "مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج وتقييم 4.1 من 5 بناءً على 310 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "حساس بصري وتصميم مريح",
    "rev.n1": "الراحة",
    "rev.v1": "باليدين",
    "rev.q2": "إضاءة LED على جسم أسود",
    "rev.n2": "الشكل",
    "rev.v2": "مكمّل للمكتب",
    "rev.q3": "سلكي USB من غير بطارية",
    "rev.n3": "الاتصال",
    "rev.v3": "مضمون",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الماوس سلكي ولا لاسلكي؟",
    "faq.a1": "سلكي، بيتوصل بمنفذ USB. مفيش بطارية ولا دونجل استقبال، وبتوصّله يشتغل على طول.",
    "faq.q2": "ينفع مع أي جهاز؟",
    "faq.a2": "مخصوص للابتوب والكمبيوتر الشخصي — أي جهاز فيه منفذ USB عادي، وبيشتغل على ويندوز.",
    "faq.q3": "إيه نوع الحساس؟",
    "faq.a3": "الحساس بصري، وده معناها إن الحركة بتتقري بضوء من غير أجزاء متحركة، وبيشتغل على الأسطح العادية من غير ماوس باد. التفاصيل الكاملة موجودة في وصف المنتج على صفحة أمازون.",
    "faq.q4": "الإضاءة شكلها إيه؟",
    "faq.a4": "إضاءة LED بألوان متعددة على جسم أسود. الصور على صفحة المنتج بتوريك شكل الإضاءة، وأي تفاصيل إضافية موجودة في وصف أمازون.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "أيوا. صفحة أمازون مصر بتعرض خيار الدفع عند الاستلام للمنتج ده، فتقدر تدفع كاش عند الاستلام. كمان ينفع تدفع بطاقة أو تقسط على عدة شهور مع بنوك مختارة.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع متاح ومرن حسب سياسة أمازون مصر المطبّقة على المنتج، مع استرجاع مجاني. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تغيّر الماوس بتاعك؟",
    "cta.sub": "اطلبه من أمازون مصر — سلكي، حساس بصري، وإضاءة LED",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج Redragon SAMSARA M902-RGB. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا M902",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الماوس ده ليه",
    "aud.title": "اللي هيفيد معاه M902",
    "aud.sub": "سلكي ومريح وبيضيف لمسة إضاءة، لكل عايز ماوس يشتغل من غير تعقيد",
    "aud.a1t": "اللي بيلعب على اللابتوب",
    "aud.a1b": "سلكي USB بيشتغل على أي لابتوب فيه منفذ، والاتصال ثابت من غير بطارية تقطع في أهم لحظة.",
    "aud.a2t": "اللي بيقضي ساعات على المكتب",
    "aud.a2b": "التصميم المريح اللي بيستخدم باليدين بيفرّق في الشغل الطويل اليومي، وبيوزّع الضغط على إيدك من غير تعب زايد.",
    "aud.a3t": "اللي عايز ماوس بدون تعقيد",
    "aud.a3b": "توصّله ويشتغل على طول، من غير بطاريات ولا دونجل ولا إعدادات. بساطة في التوصيل وثبات في التشغيل.",
    "aud.a4t": "اللي عايز لمسة شكل",
    "aud.a4b": "إضاءة LED بألوان قوس قزح على جسم أسود بتدي لمسة مميزة على المكتب، مكملة لأي تجهيز.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "M902 · Black",
    "nav.specs": "Specs",
    "nav.connect": "Wired vs Wireless",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming Mouse · Wired",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Redragon M902",
    "hero.title2": "SAMSARA",
    "hero.sub": "Wired gaming mouse with an optical sensor, an ergonomic design and LED lighting — for PC and laptop",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "Available on Amazon.eg with fast, free shipping",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Sensor",
    "hero.chip1v": "Optical",
    "hero.chip2l": "Connection",
    "hero.chip2v": "Wired USB",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Pay at the door",
    "trust.delivery": "Fast, free shipping",
    "trust.deliverySub": "Fast and free shipping from Amazon.eg",
    "trust.returns": "Free returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.1 out of 5 by 310 customers on Amazon",
    "k.weight": "Rating on Amazon",
    "k.weightSub": "4.1 out of 5 — from 310 reviews",
    "k.dpi": "Optical sensor",
    "k.dpiSub": "Movement read by light, no moving parts",
    "k.batt": "Wired connection",
    "k.battSub": "No battery, no charging",
    "k.btns": "LED lighting",
    "k.btnsSub": "Multi-colour — rainbow",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Optical sensor",
    "s1.b": "An optical sensor reads movement with light and has no moving parts — it works on ordinary surfaces with no mouse pad. A practical pick for daily work and gaming.",
    "s2.t": "Ergonomic for long sessions",
    "s2.b": "The comfortable shape works with both hands and spreads pressure across it, so you can keep going through a long day at the desk without extra fatigue.",
    "s3.t": "Wired — no battery",
    "s3.b": "The cable is part of the simplicity: plug it into a USB port and it works. No battery to drain, no charge to wait for, no receiver dongle to lose.",
    "s4.t": "Rainbow LED lighting",
    "s4.b": "A black body with multi-colour LED lighting that adds a distinctive touch to the desk and completes any setup. The photos on Amazon show its real look.",
    "s5.t": "PC and laptop compatible",
    "s5.b": "Works with desktop PCs and laptops on Windows, and any device with a normal USB port. Made for computers and laptops.",
    "s6.t": "On Amazon.eg",
    "s6.b": "Available on Amazon.eg with fast, free shipping, and cash-on-delivery is offered on the product page.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Black",
    "t.sensor": "Sensor",
    "t.sensorV": "Optical",
    "t.switch": "Buttons",
    "t.switchV": "Main buttons and scroll wheel",
    "t.weight": "Weight",
    "t.weightV": "Lightweight",
    "t.size": "Connection",
    "t.conn": "Compatibility",
    "t.connV": "PC and laptop (Windows)",
    "t.batt": "Lighting",
    "t.battV": "Multi-colour LED",
    "t.os": "Use",
    "t.osV": "Gaming",
    "t.hand": "Ships from",
    "t.handV": "Amazon.eg",
    "t.inbox": "In the box",
    "t.inboxV": "Mouse + user manual",
    "conn.eyebrow": "Wired vs wireless",
    "conn.title": "How the two differ",
    "conn.sub": "The choice comes down to how you play and how you use it",
    "conn.btnLs": "Wired (this one)",
    "conn.btnBt": "Wireless",
    "conn.m1l": "Response time",
    "conn.m1Ls": "Instant, over the cable",
    "conn.m1Bt": "Depends on the wireless link",
    "conn.m2l": "Power",
    "conn.m2Ls": "No battery, no charging",
    "conn.m2Bt": "Needs charging or batteries",
    "conn.m3l": "The trade-off",
    "conn.m3Ls": "Steady, with no interruptions",
    "conn.m3Bt": "More freedom to move",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "The cable is part of the design: no battery dies mid-match, and no chance of lag from the connection. Plug it in and you're set.",
    "conn.noteBt": "Wireless is tidier and lets you move freely without a cable, but it needs charging or batteries, and response time can be slightly higher.",
    "box.title": "What arrives in the box",
    "box.sub": "Genuine Redragon, shipped from Amazon.eg with fast, free delivery",
    "box.i1": "Redragon M902 mouse, black",
    "box.i2": "User manual",
    "box.i3": "No battery and no receiver dongle needed",
    "box.i4": "Works straight away, no setup",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Redragon SAMSARA M902-RGB — Wired Gaming Mouse — Black",
    "offer.seller": "Fast, free shipping from Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "Free per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.1 out of 5 rating from 310 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "Optical sensor and ergonomic shape",
    "rev.n1": "Comfort",
    "rev.v1": "Both hands",
    "rev.q2": "LED lighting on a black body",
    "rev.n2": "Looks",
    "rev.v2": "Finishes the desk",
    "rev.q3": "Wired USB, no battery",
    "rev.n3": "Connection",
    "rev.v3": "Dependable",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is the mouse wired or wireless?",
    "faq.a1": "Wired, into a USB port. There's no battery and no receiver dongle — plug it in and it works.",
    "faq.q2": "Will it work with any device?",
    "faq.a2": "It's built for laptops and desktops — any device with a normal USB port, running Windows.",
    "faq.q3": "What kind of sensor is it?",
    "faq.a3": "It's optical: movement is read with light and there are no moving parts, and it works on ordinary surfaces with no mouse pad. The full details are in the product description on the Amazon page.",
    "faq.q4": "What does the lighting look like?",
    "faq.a4": "Multi-colour LED lighting on a black body. The photos on the product page show the real look, and any extra detail is in the Amazon description.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes. The Amazon Egypt product page offers cash-on-delivery for this item, so you can pay at the door. You can also pay by card, or split the payment over several months with select banks.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns are flexible per the Amazon.eg policy that applies to this product, with free returns. Check the return details on the product page before you buy.",
    "cta.title": "Ready for a proper upgrade?",
    "cta.sub": "Order it on Amazon.eg — wired, optical sensor and LED lighting",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Redragon SAMSARA M902-RGB. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the M902",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the M902 suits",
    "aud.sub": "Wired, comfortable, with a touch of lighting — for anyone who wants a mouse that just works",
    "aud.a1t": "Laptop gamers",
    "aud.a1b": "Wired over USB, it works with any laptop that has a port, and the connection stays steady with no battery cutting out at the worst moment.",
    "aud.a2t": "People at the desk for hours",
    "aud.a2b": "The ergonomic shape works with both hands and spreads the pressure, so a long working day on the desk stays comfortable.",
    "aud.a3t": "Anyone who wants a no-fuss mouse",
    "aud.a3b": "Plug it in and it works — no batteries, no dongle, no setup. Simple to connect, steady to use.",
    "aud.a4t": "Anyone who wants a distinctive desk",
    "aud.a4b": "Rainbow LED lighting on a black body adds a distinctive touch to the desk and completes any setup.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card - every price, instalment, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price, instalments and any current offers - all of it lives on Amazon's page only.",
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
    ? 'Redragon M902 — ماوس جيمنج سلكي بحساس بصري وإضاءة LED'
    : 'Redragon M902 — Wired Gaming Mouse with Optical Sensor and LED Lighting';

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
const LIVE_KEY = 'redragon-m902-live';
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
const GAL_FILES = ["img/m902-00.jpg","img/m902-01.jpg","img/m902-02.jpg","img/m902-03.jpg","img/m902-04.jpg","img/m902-05.jpg","img/m902-06.jpg"];
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
