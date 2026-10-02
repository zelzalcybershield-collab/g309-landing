/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B09DTZ7X8Z?tag=zoq-21';
const STORE_KEY = 'tatybo-gaming-headset-lang';

const dict = {
  "ar": {
    "nav.tagline": "سلكي · RGB",
    "nav.specs": "المواصفات",
    "nav.connect": "سلكي ولا بلوتوث",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "هيدسيت جيمنج · سلكي",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Tatybo Gaming",
    "hero.title2": "50MM · RGB",
    "hero.sub": "هيدسيت جيمنج بدرايفرات 50مم وصوت محيطي 3D وميكروفون 360° وتضوية RGB — للكونسول والكمبيوتر والموبايل",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في أجهزة Nintendo Switch جيمنج الأكثر مبيعاً — متوفر على أمازون مصر",
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
    "trust.primeSub": "تقييم 4.4 من 5 من 1594 عميل على أمازون",
    "k.weight": "درايفرات 50مم",
    "k.weightSub": "صوت محيطي 3D بقوة",
    "k.dpi": "ميكروفون 360°",
    "k.dpiSub": "مانع للتشويش وقابل للضبط",
    "k.batt": "وسائد إسفنجية",
    "k.battSub": "ناعمة وتدور 90° للراحة",
    "k.btns": "RGB بـ4 أوضاع",
    "k.btnsSub": "تغيّر بضغطة زر",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "صوت محيطي 3D بدرايفرات 50مم",
    "s1.b": "درايفرات ديناميكية 50مم بتقدم صوت عالي الوضوح وحضور قوي، وصوت محيطي 3D بيعطيك إحساس بالمسار والاتجاه أثناء اللعب — صوت كأنك في قلب الحدث.",
    "s2.t": "ميكروفون 360° مانع للتشويش",
    "s2.b": "ميكروفون مرن تدوره 360° وتضبطه على زاويتك، مع تقليل التشويش لصوت واضح لفريقك، وتتحكم في مستوى الصوت من أزرار على الكابل مباشرة.",
    "s3.t": "راحة في جلسات طويلة",
    "s3.b": "وسائد أذن إسفنجية ناعمة بتقلل الضغط والحرارة على الأذن، وطربوش قابل للتعديل، وأذان تدور 90° للطي وحملها بسهولة.",
    "s4.t": "إضاءة RGB بأربعة أوضاع",
    "s4.b": "أزر ضغطة بسيطة تتنقل بين أربعة أوضاع إضاءة RGB — لمسة شكل تناسب اللعب أو الأفلام أو جو المكتب.",
    "s5.t": "متوافق مع كل منصاتك",
    "s5.b": "ميكروفون 3.5مم وكابل USB مع محول 1 إلى 2: PS4 وPS5 وXbox One وPC وماك وموبايل وSwitch وiPad — هيدسيت واحد لكل أجهزتك.",
    "s6.t": "متخصص في Nintendo Switch",
    "s6.b": "مرتب #1 في هيدسيتات Nintendo Switch جيمنج على أمازون، و#10 في سماعات Over-Ear — اختيار مجرّب من اللاعبين.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود مع إضاءة RGB",
    "t.sensor": "الدرايفر",
    "t.sensorV": "50 مم ديناميكي",
    "t.switch": "الميكروفون",
    "t.switchV": "360° قابل للضبط مانع للتشويش",
    "t.weight": "الوزن",
    "t.weightV": "0.5 كجم",
    "t.size": "التصميم",
    "t.conn": "الاتصال",
    "t.connV": "3.5 مم و USB (مع محول 1→2)",
    "t.batt": "الإضاءة",
    "t.battV": "RGB — 4 أوضاع",
    "t.os": "التوافق",
    "t.osV": "PS4 · PS5 · Xbox One · PC · Mac · موبايل · Switch · iPad",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "الهيدسيت + كابل USB + محول 1 إلى 2 + دليل الاستخدام",
    "conn.eyebrow": "سلكي ولا بلوتوث",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "الاتصال السلكي أو اللاسلكي — الخيار بينهم فرق حقيقي، والمقارنة تاخدها في الاعتبار",
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
    "box.i1": "هيدسيت Tatybo XW2",
    "box.i2": "كابل USB",
    "box.i3": "محول 1 إلى 2",
    "box.i4": "دليل الاستخدام",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Tatybo — هيدسيت جيمنج سلكي 50مم صوت محيطي 3D مع مايك 360° وRGB",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.4 من 5 بناءً على 1594 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "50مم وصوت 3D",
    "rev.n1": "الصوت",
    "rev.v1": "محيطي وواضح",
    "rev.q2": "مايك 360°",
    "rev.n2": "التواصل",
    "rev.v2": "واضح مع الفريق",
    "rev.q3": "وسائد تدور 90°",
    "rev.n3": "الراحة",
    "rev.v3": "لجلسات طويلة",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "ينفع مع البلوتوث؟",
    "faq.a1": "الهيدسيت سلكي (ليس بلوتوث) — بيتوصل بجاك 3.5مم أو كابل USB، وده ميزة في الألعاب: مفيش تأخير في الصوت ومفيش بطارية تشحنها.",
    "faq.q2": "ينفع على الكونسول بتاعي؟",
    "faq.a2": "أيوا — متوافق مع PS4 وPS5 وXbox One وPC وماك وموبايل وSwitch وiPad، بفضل جاك 3.5مم وكابل USB مع محول 1 إلى 2.",
    "faq.q3": "الميكروفون شغال إزاي؟",
    "faq.a3": "ميكروفون مرن تدوره 360° وتضبط زاويته، مع تقليل التشويش لصوت واضح لفريقك في اللعب أو المكالمات.",
    "faq.q4": "الأوضاع RGB بيتغيّروا إزاي؟",
    "faq.a4": "بضغطة زر على الهيدسيت بتتنقل بين أربعة أوضاع إضاءة RGB — تقدر تختار اللي يناسب جو اللعب أو الفيلم أو المكتب.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تسمع فرق؟",
    "cta.sub": "اطلب Tatybo من أمازون مصر — 50مم وصوت 3D ومايك 360°",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لهيدسيت Tatybo جيمنج. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Tatybo",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الهيدسيت ده ليه",
    "aud.title": "اللي هيفيد معاه Tatybo",
    "aud.sub": "صوت محيطي ومايك وراحة — لكل عشان تجربة لعب متكاملة",
    "aud.a1t": "اللاعبين على الكونسول والكمبيوتر",
    "aud.a1b": "درايفرات 50مم وصوت محيطي 3D بيخليك تسمع الاتجاهات بوضوح، والسلك بيعطي صوت فوري من غير تأخير — ميزة حاسمة في الألعاب السريعة.",
    "aud.a2t": "الفرق والطوابير أونلاين",
    "aud.a2b": "الميكروفون 360° بمانع التشويش بيوصل صوتك واضح لفريقك، وأزرار التحكم على الكابل تخلّيك ترفع الصوت أو تكتمه بسرعة.",
    "aud.a3t": "مستخدمين Switch والموبايل",
    "aud.a3b": "مرتب #1 في هيدسيتات Nintendo Switch جيمنج على أمازون، وبيشتغل برضه مع الموبايل والتابلت واللابتوب في نفس الوقت.",
    "aud.a4t": "اللي بيلعبوا سوا بالبيت",
    "aud.a4b": "وسائد إسفنجية ناعمة وأذان تدور للطي، فتقدر تشاركه مع أخوك أو شريكك ويفضل في حالة جيدة.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Wired · RGB",
    "nav.specs": "Specs",
    "nav.connect": "Wired vs Bluetooth",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming headset · Wired",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Tatybo Gaming",
    "hero.title2": "50MM · RGB",
    "hero.sub": "A gaming headset with 50mm drivers, 3D surround sound, a 360° mic and RGB lighting — for consoles, PC and mobile",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in Nintendo Switch Gaming Headsets — available on Amazon.eg",
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
    "trust.primeSub": "Rated 4.4 out of 5 by 1594 customers on Amazon",
    "k.weight": "50mm drivers",
    "k.weightSub": "Powerful 3D surround",
    "k.dpi": "360° mic",
    "k.dpiSub": "Noise-reducing, adjustable",
    "k.batt": "Memory-foam cushions",
    "k.battSub": "Soft, 90° rotating cups",
    "k.btns": "4 RGB modes",
    "k.btnsSub": "Change with one button",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "3D surround with 50mm drivers",
    "s1.b": "50mm dynamic drivers deliver clear, punchy audio, and 3D surround gives you a sense of space and direction while playing — sound that puts you in the scene.",
    "s2.t": "360° noise-cancelling mic",
    "s2.b": "A flexible mic you rotate a full 360° and aim your way, with noise reduction for clear voice with your team, plus volume controls right on the cable.",
    "s3.t": "Comfort for long sessions",
    "s3.b": "Soft memory-foam cushions reduce pressure and heat on your ears, an adjustable headband, and cups that rotate 90° for easy packing.",
    "s4.t": "RGB with four modes",
    "s4.b": "A simple button press cycles through four RGB lighting modes — a look that fits gaming, films or your desk.",
    "s5.t": "Compatible across your platforms",
    "s5.b": "A 3.5mm jack and USB cable with a 1-to-2 splitter: PS4, PS5, Xbox One, PC, Mac, mobile, Switch and iPad — one headset for everything.",
    "s6.t": "A favourite on Switch",
    "s6.b": "Ranked #1 in Nintendo Switch Gaming Headsets on Amazon and #10 in Over-Ear Headphones — a pick tried by real players.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Black with RGB",
    "t.sensor": "Driver",
    "t.sensorV": "50 mm dynamic",
    "t.switch": "Microphone",
    "t.switchV": "360° adjustable, noise-reducing",
    "t.weight": "Weight",
    "t.weightV": "0.5 kg",
    "t.size": "Design",
    "t.conn": "Connection",
    "t.connV": "3.5 mm and USB (with 1→2 splitter)",
    "t.batt": "Lighting",
    "t.battV": "RGB — 4 modes",
    "t.os": "Compatibility",
    "t.osV": "PS4 · PS5 · Xbox One · PC · Mac · Mobile · Switch · iPad",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "Headset + USB cable + 1-to-2 splitter + user manual",
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
    "box.i1": "Tatybo XW2 headset",
    "box.i2": "USB cable",
    "box.i3": "1-to-2 splitter",
    "box.i4": "User manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Tatybo — Wired Gaming Headset 50mm 3D Surround with 360° Mic and RGB",
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
    "rev.sub": "Product specs and a 4.4 out of 5 rating from 1594 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "50mm and 3D sound",
    "rev.n1": "Audio",
    "rev.v1": "Surround, clear",
    "rev.q2": "360° mic",
    "rev.n2": "Comms",
    "rev.v2": "Clear to your team",
    "rev.q3": "90° rotating cushions",
    "rev.n3": "Comfort",
    "rev.v3": "For long sessions",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Does it work over Bluetooth?",
    "faq.a1": "This headset is wired (not Bluetooth) — it connects via a 3.5mm jack or USB cable, which is an advantage in games: no audio lag and no battery to charge.",
    "faq.q2": "Will it work with my console?",
    "faq.a2": "Yes — compatible with PS4, PS5, Xbox One, PC, Mac, mobile, Switch and iPad, thanks to the 3.5mm jack and USB cable with a 1-to-2 splitter.",
    "faq.q3": "How does the mic work?",
    "faq.a3": "A flexible mic you rotate a full 360° and set at your angle, with noise reduction for clear voice with your team in games or calls.",
    "faq.q4": "How do the RGB modes change?",
    "faq.a4": "A button press on the headset cycles through four RGB lighting modes — pick the one that fits the game, a film or your desk.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to hear the difference?",
    "cta.sub": "Order the Tatybo on Amazon.eg — 50mm, 3D sound and a 360° mic",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Tatybo gaming headset. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Tatybo",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Tatybo suits",
    "aud.sub": "Surround sound, a mic and comfort — for a complete gaming experience",
    "aud.a1t": "Console and PC gamers",
    "aud.a1b": "50mm drivers and 3D surround let you hear directions clearly, and wired gives instant audio with zero lag — a real edge in fast games.",
    "aud.a2t": "Online teams and squads",
    "aud.a2b": "The 360° noise-cancelling mic gets your voice to the team clearly, and cable controls let you mute or adjust volume in a second.",
    "aud.a3t": "Switch and mobile users",
    "aud.a3b": "Ranked #1 in Nintendo Switch Gaming Headsets on Amazon, and it also works with your phone, tablet and laptop when you need it.",
    "aud.a4t": "Households sharing a headset",
    "aud.a4b": "Soft cushions and 90° folding cups make sharing easy — hand it to a sibling or friend and it is still in good shape.",
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
    ? 'هيدسيت جيمنج Tatybo — درايفرات 50مم صوت محيطي 3D وميكروفون 360° وإضاءة RGB'
    : 'Tatybo Gaming Headset — 50mm Drivers, 3D Surround, 360° Mic, RGB';

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
const LIVE_KEY = 'tatybo-gaming-headset-live';
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
const GAL_FILES = ["img/tatybo-gaming-headset-01.jpg","img/tatybo-gaming-headset-02.jpg","img/tatybo-gaming-headset-03.jpg"];
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
