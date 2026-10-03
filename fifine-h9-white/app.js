/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0C6MKMZF1?tag=zoq-21';
const STORE_KEY = 'fifine-h9-white-lang';

const dict = {
  "ar": {
    "nav.tagline": "سلكي · 7.1",
    "nav.specs": "المواصفات",
    "nav.connect": "سلكي ولا بلوتوث",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "هيدسيت جيمنج · سلكي",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "FIFINE AmpliGame",
    "hero.title2": "H9 · WHITE",
    "hero.sub": "هيدسيت جيمنج أبيض بدرايفرات 50مم وصوت محيطي 7.1 ومايك قابل للفصل — للكمبيوتر والكونسول",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "من براند FIFINE المتخصص في المايكات والجيمنج — متوفر على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الدرايفرات",
    "hero.chip1v": "50 مم",
    "hero.chip2l": "الاتصال",
    "hero.chip2v": "3.5 مم + USB",
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
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.3 من 5 من 591 عميل على أمازون",
    "k.weight": "التقييم",
    "k.weightSub": "4.3 من 5 من العملاء",
    "k.dpi": "المعاوقة",
    "k.dpiSub": "32 أوم — متوافقة مع معظم الأجهزة",
    "k.batt": "صوت محيطي",
    "k.battSub": "7.1 قنوات تجربة صوت محيطة",
    "k.btns": "الوزن",
    "k.btnsSub": "0.33 كجم خفيف على رأسك",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "صوت محيطي 7.1 بدرايفرات 50مم",
    "s1.b": "درايفرات ديناميكية 50مم وصوت محيطي 7.1 بتديك تفاصيل واضحة في اللعب — من استجابة الجهة لليسار واليمين لفصل الأصوات في المباريات.",
    "s2.t": "ميكروفون قابل للفصل",
    "s2.b": "الميكروفون بيتفصل بسهولة لما مش محتاجه، وبيترجع بسرعة لما محتاج صوتك واضح لفريقك في الأونلاين والألعاب.",
    "s3.t": "علبة تحكم على الكابل",
    "s3.b": "علبة تحكم مدمجة بتفوت في لحظة: اسكات المايك، رفع درجة صوتك أو صوت اللعب — من غير ما تفصل من الجيم.",
    "s4.t": "اتصال مزدوج 3.5مم و USB",
    "s4.b": "سلك مجدول فيه دعم لجاك 3.5مم وكابل USB — يشتغل على الكمبيوتر وماك وPS4 وPS5 والكونسول والموبايل وSwitch.",
    "s5.t": "راحة في جلسات اللعب الطويلة",
    "s5.b": "وسائد ناعمة وطربوش قابل لتعديل الطول، من مواد تناسب جلسات اللعب الطويلة بدون ما تضغط على الأذن.",
    "s6.t": "براند متخصص في صوت الجيمنج",
    "s6.b": "FIFINE علامة معروفة في مايكات وهيدسيتات البث والجيمنج — ودخولها للأبيض ده ضمن خط AmpliGame لهيدسيتات الجيمنج.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض",
    "t.sensor": "الدرايفر",
    "t.sensorV": "50 مم ديناميكي",
    "t.switch": "الميكروفون",
    "t.switchV": "قابل للفصل مع علبة تحكم",
    "t.weight": "الوزن",
    "t.weightV": "0.33 كجم",
    "t.size": "التصميم",
    "t.conn": "الاتصال",
    "t.connV": "3.5 مم و USB — سلك مجدول",
    "t.batt": "المعاوقة",
    "t.battV": "32 أوم",
    "t.os": "التوافق",
    "t.osV": "PC · Mac · PS4 · PS5 · Switch · XBOX · الكونسول",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "الهيدسيت + مايك قابل للفصل + كابل اتصال + دليل الاستخدام",
    "conn.eyebrow": "سلكي ولا بلوتوث",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "الاتصال السلكي أو اللاسلكي — الخيار بينهم فرق حقيقي، والمقارنة تاخذها في الاعتبار",
    "conn.btnLs": "سلكي (زي دي)",
    "conn.btnBt": "بلوتوث",
    "conn.m1l": "التأخير",
    "conn.m1Ls": "صفر تقريباً — الصوت بيوصلك فوراً",
    "conn.m1Bt": "فيه تأخير بسيط في بعض الموديلات",
    "conn.m2l": "الشحن",
    "conn.m2Ls": "مفيش بطارية ولا شحن — دايماً جاهز",
    "conn.m2Bt": "بطارية بتخلص ومحتاجة شحن",
    "conn.m3l": "الأنسب لـ",
    "conn.m3Ls": "ألعاب تنافسية وبعد ثابت عن الجهاز",
    "conn.m3Bt": "حركة حرة ومشاوير",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الهيدسيت ده سلكي — ومع السلك مكسبين كبار: مفيش تأخير في إشارة الصوت (مهم في الألعاب التنافسية)، ومفيش بطارية تخش عليك تشحنها تاني. جمب الجهاز أو عليه؟ اختيارك.",
    "conn.noteBt": "اللاسلكي بيديك حرية حركة بعيد عن الجهاز، بس في ألعاب الدقة السلك أفضل — وبتحتاج تقلق على شحن البطارية. لو جو حر، البلوتوث، لو دقة وفوران، السلك.",
    "box.title": "اللي هيوصلك",
    "box.sub": "هيدسيت أصلي كامل الاختصاص مع كل كوابل الاتصال، متوفر على أمازون مصر",
    "box.i1": "هيدسيت FIFINE H9W",
    "box.i2": "مايك قابل للفصل",
    "box.i3": "كابلات اتصال 3.5مم و USB",
    "box.i4": "دليل الاستخدام",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "FIFINE AmpliGame H9 — هيدسيت جيمنج سلكي 50مم صوت محيطي 7.1 مع مايك قابل للفصل",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.3 من 5 بناءً على 591 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "50مم وصوت 7.1",
    "rev.n1": "الصوت",
    "rev.v1": "محيطي وواضح",
    "rev.q2": "مايك قابل للفصل",
    "rev.n2": "التواصل",
    "rev.v2": "نظيف مع الفريق",
    "rev.q3": "علبة تحكم على الكابل",
    "rev.n3": "التحكم",
    "rev.v3": "كتم ورفع في ثانية",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "هو سلكي ولا بلوتوث؟",
    "faq.a1": "الهيدسيت سلكي — بيتوصل بجاك 3.5مم أو كابل USB، وده ميزة في الألعاب: مفيش تأخير في الصوت ومفيش بطارية تشحنها.",
    "faq.q2": "ينفع على الكونسول بتاعي؟",
    "faq.a2": "أيوا — متوافق مع الكمبيوتر وماك وPS4 وPS5 ومعظم أجهزة الكونسول والمحمول عبر جاك 3.5مم، وكابل USB للكمبيوتر. راجع صفحة المنتج لتفاصيل جهازك بالظبط.",
    "faq.q3": "الميكروفون بيتفصل فعلاً؟",
    "faq.a3": "أيوا — الميكروفون قابل للفصل والتركيب، وفيه علبة تحكم على الكابل بتخليك تكتم صوتك أو ترفع حجج المايك والسماعة بسرعة.",
    "faq.q4": "الصوت المحيطي 7.1 شغال إزاي؟",
    "faq.a4": "الهيدسيت بيدعم تجربة صوت محيطي 7.1 بفضل معالجة الصوت، ودرايفرات الـ50مم بتقدم تفاصيل قوية — وطبعاً مبيشتغلش مع كل الأجهزة بنفس الإعدادات، راجع صفحة المنتج.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تسمع فرق؟",
    "cta.sub": "اطلب FIFINE AmpliGame من أمازون مصر — 50مم وصوت 7.1 ومايك قابل للفصل",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لهيدسيت FIFINE AmpliGame H9. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا FIFINE",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الهيدسيت ده ليه",
    "aud.title": "اللي هيفيد معاه FIFINE",
    "aud.sub": "صوت محيطي ومايك واضح وراحة — للأشخاص اللي بيدوروا على تجربة لعب متكاملة",
    "aud.a1t": "اللاعبين على الكمبيوتر والكونسول",
    "aud.a1b": "درايفرات 50مم وصوت محيطي 7.1 بيخليك تسمع الاتجاهات بوضوح، والاتصال السلكي بيعطي صوت فوري من غير تأخير.",
    "aud.a2t": "الباعثين والمحتوى الصوتي",
    "aud.a2b": "الميكروفون القابل للفصل مع علبة التحكم مثالي للبث والاستريم: صوت واضح لفريقك أثناء البث — وكتم في ثانية.",
    "aud.a3t": "اللي محتاجين هيدسيت متعدد الاستخدامات",
    "aud.a3b": "بيشتغل بالـ3.5مم على الكونسول والمحمول، وبـUSB على الكمبيوتر — هيدسيت واحد لمهام كتير في الجهاز.",
    "aud.a4t": "اللي بيحبوا اللعب لساعات",
    "aud.a4b": "وسائد ناعمة وطربوش قابل للتعديل بيقللوا الضغط على الأذن، فجلسات اللعب الطويلة تبقى أريح — ولونه الأبيض شكله لذيذ على المكتب.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Wired · 7.1",
    "nav.specs": "Specs",
    "nav.connect": "Wired vs Bluetooth",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming headset · Wired",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "FIFINE AmpliGame",
    "hero.title2": "H9 · WHITE",
    "hero.sub": "A white gaming headset with 50mm drivers, 7.1 surround and a detachable mic — for PC and consoles",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "From FIFINE, a brand built around mics and gaming — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Drivers",
    "hero.chip1v": "50 mm",
    "hero.chip2l": "Connection",
    "hero.chip2v": "3.5mm + USB",
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
    "trust.primeSub": "Rated 4.3 out of 5 by 591 customers on Amazon",
    "k.weight": "Rating",
    "k.weightSub": "4.3 of 5 from customers",
    "k.dpi": "Impedance",
    "k.dpiSub": "32 ohms — fits most devices",
    "k.batt": "Surround",
    "k.battSub": "7.1 channels for a surrounding feel",
    "k.btns": "Weight",
    "k.btnsSub": "0.33 kg light on your head",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "7.1 surround with 50mm drivers",
    "s1.b": "50mm dynamic drivers with 7.1 surround deliver clear, detailed audio in play — from left-right response to separating sounds in matches.",
    "s2.t": "Detachable microphone",
    "s2.b": "The mic pops off easily when you do not need it, and goes back on in seconds when you want your voice clear on comms and in games.",
    "s3.t": "In-line control box",
    "s3.b": "An in-line control box gives you instant control: mute the mic, adjust your voice or game volume — without leaving the game.",
    "s4.t": "Dual 3.5mm and USB connection",
    "s4.b": "A braided cable with both a 3.5mm jack and a USB cable — works with PC, Mac, PS4, PS5 and many console controllers, phones and Switch.",
    "s5.t": "Comfort for long sessions",
    "s5.b": "Soft cushions and an adjustable headband, built from materials that suit long hours of play without pressing on your ears.",
    "s6.t": "A brand built around gaming audio",
    "s6.b": "FIFINE is a recognised name in streaming and gaming mics and headsets — this is the white headset of its AmpliGame line.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "White",
    "t.sensor": "Driver",
    "t.sensorV": "50 mm dynamic",
    "t.switch": "Microphone",
    "t.switchV": "Detachable with in-line control",
    "t.weight": "Weight",
    "t.weightV": "0.33 kg",
    "t.size": "Design",
    "t.conn": "Connection",
    "t.connV": "3.5 mm and USB — braided cable",
    "t.batt": "Impedance",
    "t.battV": "32 ohms",
    "t.os": "Compatibility",
    "t.osV": "PC · Mac · PS4 · PS5 · Switch · XBOX · Consoles",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "Headset + detachable mic + connection cables + user manual",
    "conn.eyebrow": "Wired vs Bluetooth",
    "conn.title": "The difference that matters",
    "conn.sub": "Wired or wireless is a real choice — the comparison helps you decide",
    "conn.btnLs": "Wired (this one)",
    "conn.btnBt": "Bluetooth",
    "conn.m1l": "Latency",
    "conn.m1Ls": "Practically zero — sound arrives instantly",
    "conn.m1Bt": "Slight delay on some models",
    "conn.m2l": "Charging",
    "conn.m2Ls": "No battery, no charging — always ready",
    "conn.m2Bt": "A battery that runs out and needs charging",
    "conn.m3l": "Best for",
    "conn.m3Ls": "Competitive play, fixed distance from the device",
    "conn.m3Bt": "Free movement and on the go",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "This headset is wired — and wired brings two big wins: no audio latency (crucial in competitive play) and no battery to worry about recharging. Sitting at your desk or console? It is the pick.",
    "conn.noteBt": "Wireless gives you freedom away from the device, but in precision games wired is better — and battery life is something you'll manage. Free movement, Bluetooth; instant, accurate audio, wired.",
    "box.title": "What arrives",
    "box.sub": "A complete original headset with all its cables, available on Amazon.eg",
    "box.i1": "FIFINE H9W headset",
    "box.i2": "Detachable mic",
    "box.i3": "3.5mm and USB cables",
    "box.i4": "User manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "FIFINE AmpliGame H9 — Wired Gaming Headset 50mm 7.1 Surround with Detachable Mic",
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
    "rev.sub": "Product specs and a 4.3 out of 5 rating from 591 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "50mm and 7.1 sound",
    "rev.n1": "Audio",
    "rev.v1": "Surround, clear",
    "rev.q2": "Detachable mic",
    "rev.n2": "Comms",
    "rev.v2": "Clean to your team",
    "rev.q3": "In-line control box",
    "rev.n3": "Control",
    "rev.v3": "Mute and adjust in a second",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is it wired or Bluetooth?",
    "faq.a1": "This headset is wired — it connects via a 3.5mm jack or USB cable, which is an advantage in games: no audio lag and no battery to charge.",
    "faq.q2": "Will it work with my console?",
    "faq.a2": "Yes — compatible with PC, Mac, PS4, PS5 and most console controllers and phones via the 3.5mm jack, and a USB cable for PC. Check the product page for your exact setup.",
    "faq.q3": "Is the mic really detachable?",
    "faq.a3": "Yes — the mic snaps on and off, and the in-line control box lets you mute or quickly adjust mic and headphone volume.",
    "faq.q4": "How does 7.1 surround work?",
    "faq.a4": "The headset supports a 7.1 surround experience through audio processing, and the 50mm drivers deliver strong detail — note it won't behave identically across all devices, check the product page.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to hear the difference?",
    "cta.sub": "Order the FIFINE AmpliGame on Amazon.eg — 50mm, 7.1 sound and a detachable mic",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the FIFINE AmpliGame H9 headset. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the FIFINE",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the FIFINE suits",
    "aud.sub": "Surround sound, a clear mic and comfort — for a complete gaming experience",
    "aud.a1t": "PC and console gamers",
    "aud.a1b": "50mm drivers and 7.1 surround let you hear directions clearly, and wired gives instant audio with zero lag.",
    "aud.a2t": "Streamers and content creators",
    "aud.a2b": "The detachable mic with the control box is ideal for streaming: clear voice with a mic that gets out of the way — and instant mute.",
    "aud.a3t": "People wanting one all-rounder",
    "aud.a3b": "It works on 3.5mm for consoles and phones, and over USB on a PC — one headset handled many tasks on your desk.",
    "aud.a4t": "People who play for hours",
    "aud.a4b": "Soft cushions and an adjustable headband reduce ear pressure so long sessions feel easier — and its white look is easy on the desk.",
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
    ? 'هيدسيت FIFINE AmpliGame H9 — درايفرات 50مم وصوت محيطي 7.1 ومايك قابل للفصل'
    : 'FIFINE AmpliGame H9 Headset — 50mm Drivers, 7.1 Surround, Detachable Mic';

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
const LIVE_KEY = 'fifine-h9-white-live';
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
const GAL_FILES = ["img/fifine-h9-white-01.jpg","img/fifine-h9-white-02.jpg","img/fifine-h9-white-03.jpg","img/fifine-h9-white-04.jpg"];
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
