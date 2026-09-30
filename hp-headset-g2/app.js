/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B09FQBN3SG?tag=zoq-21';
const STORE_KEY = 'hp-headset-g2-lang';

const dict = {
  "ar": {
    "nav.tagline": "G2 · USB-A · أسود",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "سماعة رأس · سلكية USB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "سماعة HP",
    "hero.title2": "STEREO G2",
    "hero.sub": "سماعة رأس ستيريو سلكية بمنفذ USB-A، كابل 1.8 متر ووزن 95 جرام فقط، بتركيب على الأذن (supra-auricular) وتحكّم في الصوت من على الكابل.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#262 في سماعات الأذن over-ear",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الوزن",
    "hero.chip1v": "95 g",
    "hero.chip2l": "طول الكابل",
    "hero.chip2v": "1.8 m",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر — اضغط أي صورة لتكبيرها.",
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
    "trust.prime": "متجر HP",
    "trust.primeSub": "صفحة المنتج على أمازون مصر",
    "k.weight": "الوزن",
    "k.weightSub": "خفيف على الرأس طول اليوم",
    "k.dpi": "نوع التوصيل",
    "k.dpiSub": "سلكي بمنفذ USB-A",
    "k.batt": "طول الكابل",
    "k.battSub": "1.8 متر",
    "k.btns": "التحكم في الصوت",
    "k.btnsSub": "من على الكابل",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "سماعة ستيريو سلكية بمنفذ USB-A ووزن خفيف، مناسبة للشغل والدروس والمكالمات على الكمبيوتر — وصفحة المنتج على أمازون تذكر ضمان 3 شهور.",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "سلكي بمنفذ USB-A",
    "s1.b": "بتتوصّل مباشرة في منفذ USB-A من غير محوّل ولا بلوتوث ولا بطاريات. يعني توصل وتشتغل في ثانية — على الكمبيوتر أو اللابتوب.",
    "s2.t": "كابل 1.8 متر",
    "s2.b": "الكابل بطول 1.8 متر، يوصلك بعيد عن الجهاز براحة. على المكتب العادي مش محتاج تطوّل ولا تقصّر.",
    "s3.t": "وزن 95 جرام فقط",
    "s3.b": "من خفيف السماعات، فتلاقيها مريحة على الرأس لفترات طويلة — في حصة أو في اجتماعات أو في جولة ألعاب طويلة.",
    "s4.t": "تركيب على الأذن",
    "s4.b": "تصميم supra-auricular (على الأذن) بفتحات مريحة للأذن، مناسب للاستخدام اليومي.",
    "s5.t": "تحكّم في الصوت من الكابل",
    "s5.b": "زر تحكّم في الصوت موجود على الكابل (in-line control)، عشان ترفع أو تنزّل الصوت من غير ما تفتح الجهاز.",
    "s6.t": "ستيريو — من اليمين والشمال",
    "s6.b": "صوت ستيريو جهتين (يمين ويسار) عبر منفذ USB-A واحد — مناسب للموسيقى والفيديو والشغل على الكمبيوتر.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "النوع",
    "t.sensorV": "سماعة رأس over-ear ستيريو",
    "t.switch": "رقم القطعة",
    "t.switchV": "428H5AA",
    "t.weight": "الوزن",
    "t.weightV": "95 جم",
    "t.size": "طول الكابل",
    "t.conn": "الاتصال",
    "t.connV": "سلكي USB-A",
    "t.batt": "البطارية",
    "t.battV": "لا يحتاج بطاريات (سلكي)",
    "t.os": "أنظمة التشغيل",
    "t.osV": "أجهزة الكمبيوتر اللي فيها منفذ USB-A",
    "t.hand": "التركيب",
    "t.handV": "على الأذن (supra-auricular)",
    "t.inbox": "في العلبة",
    "t.inboxV": "السماعة + دليل المستخدم + الضمان",
    "conn.eyebrow": "الاتصال",
    "conn.title": "سلك واحد، من غير إعدادات",
    "conn.sub": "البسّها في منفذ USB-A وخلاص — من غير بلوتوث ولا بطاريات ولا إعدادات.",
    "conn.btnLs": "USB-A",
    "conn.btnBt": "التحكم على الكابل",
    "conn.m1l": "نوع الوصلة",
    "conn.m1Ls": "USB-A",
    "conn.m1Bt": "على الكابل",
    "conn.m2l": "الطاقة",
    "conn.m2Ls": "من منفذ الجهاز",
    "conn.m2Bt": "مفيش بطاريات",
    "conn.m3l": "التحكم",
    "conn.m3Ls": "الصوت من الجهاز",
    "conn.m3Bt": "زر على الكابل",
    "conn.vizTitle": "نقل البيانات",
    "conn.noteLs": "توصيل مباشر: الكابل يدخل في منفذ USB-A في الجهاز، والسماعة بتشتغل على طول من غير ما تحتاج إعدادات أو تعريف.",
    "conn.noteBt": "زر التحكم على الكابل بيخليك ترفع وتنزّل الصوت بسرعة من غير ما تفتح الجهاز — مفيد في الشغل والدروس.",
    "box.title": "اللي هيوصلك",
    "box.sub": "سماعة HP أصلية، ومنتج معروض على أمازون مصر",
    "box.i1": "سماعة رأس HP Stereo G2 — أسود",
    "box.i2": "كابل 1.8 متر موصول بمنفذ USB-A",
    "box.i3": "دليل المستخدم",
    "box.i4": "بطاقة الضمان",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "HP Headset Stereo G2-428H5AA — Black",
    "offer.seller": "متجر HP على أمازون مصر — البائع والشحن يظهرون على صفحة المنتج",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "غداً 1 م (إلى القاهرة الجديدة)",
    "offer.ret": "مدة الإرجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من صفحة المنتج على أمازون",
    "rev.count": "95 جرام · USB-A · كابل 1.8 م",
    "rev.q1": "95 جرام فقط — خفيف على الرأس",
    "rev.n1": "الوزن",
    "rev.v1": "خفيف جداً",
    "rev.q2": "سلكي USB-A — من غير إعدادات",
    "rev.n2": "الاتصال",
    "rev.v2": "موصول وشغال",
    "rev.q3": "كابل 1.8 متر",
    "rev.n3": "الكابل",
    "rev.v3": "طول مريح",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "السماعة دي سلكية ولا لاسلكية؟",
    "faq.a1": "سلكية. بتتوصّل بمنفذ USB-A عن طريق كابل 1.8 متر موصول في السماعة — يعني من غير بلوتوث ولا بطاريات ولا شحن.",
    "faq.q2": "هل بتشتغل على اللابتوب والكمبيوتر؟",
    "faq.a2": "أيوا، أي جهاز فيه منفذ USB-A (اللي هو المنفذ المستطيل الكبير) — الكمبيوتر واللابتوب والديسكتوب. من غير محوّل ولا تعريف.",
    "faq.q3": "عليها ميكروفون؟",
    "faq.a3": "صفحة المنتج بتوصفها كسماعة رأس ستيريو (stereo headset) فيها تحكّم في الصوت على الكابل، والمواصفات المنشورة عليها ما بتذكرش ميكروفون. كل التفاصيل موجودة في صفحة المنتج على أمازون.",
    "faq.q4": "أقدر أرجّعها لو مش عاجباني؟",
    "faq.a4": "أيوا. صفحة المنتج بتكتب «15 يوم للإرجاع» و«إرجاع مجاني ومريح» — واسترداد كامل أو تبديل. راجع سياسة الإرجاع على الصفحة قبل ما تشتري.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "أيوا. صفحة المنتج على أمازون مصر بتكتب إن الدفع عند الاستلام متاح لهذا المنتج. كمان ينفع تدفع بالبطاقة أو تقسط على عدة شهور مع بنوك مختارة.",
    "faq.q6": "المنتج أصلي وبضمان؟",
    "faq.a6": "المنتج من ماركة HP ومعروض على أمازون مصر (فيه رابط لمتجر HP على الصفحة). صفحة المنتج بتذكر ضمان 3 شهور — راجع شروط الضمان على الصفحة قبل ما تشتري.",
    "cta.title": "جاهز تجرّب HP G2؟",
    "cta.sub": "اطلبها دلوقتي من أمازون مصر — شحن سريع، إرجاع مجاني 15 يوم، ودفع عند الاستلام.",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج HP Headset Stereo G2. كل الأسعار والتوفر مبنية على صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر والعروض. HP علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين السماعة دي ليه",
    "aud.title": "اللي هيفيد معاه HP G2",
    "aud.sub": "سماعة سلكية بسيطة وأصلبة للشغل والدروس والكمبيوتر",
    "aud.a1t": "اللي شغله على الكمبيوتر",
    "aud.a1b": "دخّلها في منفذ USB-A وخلاص — من غير إعدادات ولا تعريف ولا بلوتوث. لو شغلك كله على الكمبيوتر، دي سماعة بتديك صوت ستيريو من أول لحظة.",
    "aud.a2t": "اللي بيحضّر أو بيسمع دروس أونلاين",
    "aud.a2b": "كابل 1.8 متر يديك مرونة في جلستك، والصوت الستيريو بيفرق في سماع المحاضرات والفيديوهات.",
    "aud.a3t": "اللي بيلعب على الكمبيوتر",
    "aud.a3b": "سعرها في المتناول ووزنها 95 جرام خفيف على الرأس في جلسات طويلة. تحكّم في الصوت من على الكابل يخلّيك تعدّل من غير ما تفتح اللعبة.",
    "aud.a4t": "اللي بيدور على سماعة يومية بسيطة",
    "aud.a4b": "سلكي USB-A من غير بطاريات ولا شحن — بتديك نتيجة مضمونة كل مرة بتستخدمها، وميحصلش تأخير.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس."
  },
  "en": {
    "nav.tagline": "G2 · USB-A · Black",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "hero.eyebrow": "Headset · Wired USB",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HP Headset",
    "hero.title2": "STEREO G2",
    "hero.sub": "A wired stereo headset with a USB-A plug, a 1.8 m cable and just 95 g of weight — supra-auricular fit with in-line volume control.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "#262 in Over-Ear Headphones",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Weight",
    "hero.chip1v": "95 g",
    "hero.chip2l": "Cable length",
    "hero.chip2v": "1.8 m",
    "gal.eyebrow": "The product",
    "gal.title": "See it up close",
    "gal.sub": "Images from the official product page on Amazon Egypt — click any one to enlarge.",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product image",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Available for this item",
    "trust.delivery": "Fast, free delivery",
    "trust.deliverySub": "Delivered by Amazon Egypt",
    "trust.returns": "Free 15-day returns",
    "trust.returnsSub": "Full refund or replacement",
    "trust.prime": "HP Store",
    "trust.primeSub": "Listed on Amazon Egypt",
    "k.weight": "Weight",
    "k.weightSub": "Light on your head all day",
    "k.dpi": "Connection",
    "k.dpiSub": "Wired, USB-A plug",
    "k.batt": "Cable length",
    "k.battSub": "1.8 m",
    "k.btns": "Volume control",
    "k.btnsSub": "In-line on the cable",
    "specs.eyebrow": "Specifications",
    "specs.title": "Every detail you need",
    "specs.sub": "A straightforward wired USB-A stereo headset with a light build — made for work, classes and calls on your computer. The Amazon product page lists a 3-month warranty.",
    "specs.table": "Full technical sheet",
    "s1.t": "Wired USB-A",
    "s1.b": "Plugs straight into a USB-A port — no adapter, no Bluetooth, no batteries. Connect it and you are set, on a desktop or a laptop.",
    "s2.t": "1.8 m cable",
    "s2.b": "The cable runs 1.8 metres, giving you room to sit back from the machine. On a normal desk there is nothing to shorten or extend.",
    "s3.t": "Only 95 g",
    "s3.b": "One of the lighter headsets around, so it stays comfortable over long stretches — a class, a meeting, or a long gaming session.",
    "s4.t": "On-ear fit",
    "s4.b": "A supra-auricular (on-ear) design with comfortable open ear cups, suited to everyday use.",
    "s5.t": "In-line volume control",
    "s5.b": "Volume control sits on the cable itself, so you can raise or lower the sound without opening anything up.",
    "s6.t": "Stereo, both sides",
    "s6.b": "Two-channel stereo audio over a single USB-A connection — suited to music, video and everyday computer work.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Over-ear stereo headset",
    "t.switch": "Part number",
    "t.switchV": "428H5AA",
    "t.weight": "Weight",
    "t.weightV": "95 g",
    "t.size": "Cable length",
    "t.conn": "Connectivity",
    "t.connV": "Wired USB-A",
    "t.batt": "Battery",
    "t.battV": "None needed (wired)",
    "t.os": "Systems",
    "t.osV": "Computers with a USB-A port",
    "t.hand": "Fit",
    "t.handV": "On-ear (supra-auricular)",
    "t.inbox": "In the box",
    "t.inboxV": "Headset + user guide + warranty",
    "conn.eyebrow": "Connectivity",
    "conn.title": "One cable, no setup",
    "conn.sub": "Plug it into a USB-A port and you are done — no Bluetooth, no batteries, no configuration.",
    "conn.btnLs": "USB-A",
    "conn.btnBt": "In-line control",
    "conn.m1l": "Connector",
    "conn.m1Ls": "USB-A",
    "conn.m1Bt": "On the cable",
    "conn.m2l": "Power",
    "conn.m2Ls": "From the port",
    "conn.m2Bt": "No batteries",
    "conn.m3l": "Control",
    "conn.m3Ls": "From the device",
    "conn.m3Bt": "Cable button",
    "conn.vizTitle": "Data transfer",
    "conn.noteLs": "Direct connection: the cable goes into the USB-A port on your machine and the headset runs from there — no drivers, no pairing, nothing to set up.",
    "conn.noteBt": "The in-line control lets you raise and lower the volume in a second without opening anything — handy for work and classes.",
    "box.title": "What you get",
    "box.sub": "A genuine HP headset, listed on Amazon Egypt",
    "box.i1": "HP Stereo G2 headset — black",
    "box.i2": "1.8 m cable with a USB-A plug",
    "box.i3": "User guide",
    "box.i4": "Warranty card",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "HP Headset Stereo G2-428H5AA — Black",
    "offer.seller": "HP Store on Amazon Egypt — seller & shipping are shown on the product page",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Tomorrow by 1 PM (to New Cairo City)",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Based on the product specifications as listed on the Amazon product page",
    "rev.count": "95 g · USB-A · 1.8 m cable",
    "rev.q1": "Only 95 g — light on your head",
    "rev.n1": "Weight",
    "rev.v1": "Very light",
    "rev.q2": "Wired USB-A — nothing to set up",
    "rev.n2": "Connection",
    "rev.v2": "Plug in & go",
    "rev.q3": "A 1.8 m cable",
    "rev.n3": "The cable",
    "rev.v3": "Comfortable reach",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is this headset wired or wireless?",
    "faq.a1": "Wired. It connects through a 1.8 m cable with a USB-A plug already attached to the headset — no Bluetooth, no batteries, no charging.",
    "faq.q2": "Does it work on laptops and desktops?",
    "faq.a2": "Yes — any machine with a USB-A port (the larger rectangular one). Desktops, laptops and docks all work, with no adapter and no driver setup.",
    "faq.q3": "Does it have a microphone?",
    "faq.a3": "The product page describes it as a stereo headset with in-line volume control, and the published specifications do not list a microphone. The full details are on the Amazon product page.",
    "faq.q4": "Can I return it if I do not like it?",
    "faq.a4": "Yes. The product page states \"15 days Returnable\" with free returns — a full refund or a replacement. Check the return policy on the page before you buy.",
    "faq.q5": "Is cash on delivery available?",
    "faq.a5": "Yes. The Amazon Egypt product page states that cash on delivery is available on this item. You can also pay by card, or split the payment over several months with select banks.",
    "faq.q6": "Is it genuine and under warranty?",
    "faq.a6": "It is an HP product listed on Amazon Egypt (the page links to the HP Store). The product page lists a 3-month warranty — check the warranty terms on the page before you buy.",
    "cta.title": "Ready to try the HP G2?",
    "cta.sub": "Order it now on Amazon Egypt — fast delivery, free 15-day returns, and cash on delivery.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the HP Headset Stereo G2. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. HP is a registered trademark.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the HP G2 suits",
    "aud.sub": "A simple, dependable wired headset for work, classes and computer use",
    "aud.a1t": "People who work on a computer",
    "aud.a1b": "Plug it into a USB-A port and you are done — no setup, no drivers, no Bluetooth. If your day is all computer-based, this gives you stereo sound from the first second.",
    "aud.a2t": "People in online classes or meetings",
    "aud.a2b": "The 1.8 m cable gives you freedom to sit how you like, and the stereo sound makes a real difference when you are listening to lectures and video calls.",
    "aud.a3t": "People who game on a PC",
    "aud.a3b": "An affordable headset at 95 g that stays light through long sessions. The in-line volume control means you can adjust without alt-tabbing out of the game.",
    "aud.a4t": "Anyone after a straightforward daily headset",
    "aud.a4b": "Wired USB-A with no batteries and no charging — the same dependable result every time you plug it in, with nothing to wait for.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card - every price, instalment, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price, instalments and any current offers - all of it lives on Amazon's page only."
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
    ? 'سماعة HP Stereo G2 سلكية USB-A | أمازون مصر'
    : 'HP Stereo G2 Wired USB-A Headset | Amazon Egypt';

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
const LIVE_KEY = 'hp-headset-g2-live';
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
const GAL_FILES = ["img/hp-00.jpg","img/hp-01.jpg","img/hp-02.jpg","img/hp-03.jpg","img/hp-04.jpg","img/hp-05.jpg"];
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
