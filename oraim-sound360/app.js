/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0F7FVY8FS?tag=zoq-21';
const STORE_KEY = 'oraim-sound360-lang';

const dict = {
  "ar": {
    "nav.tagline": "SpaceBuds Neo · لاسلكية",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "لمين تنفع",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة",
    "nav.buy": "اشتري دلوقتي",
    "hero.eyebrow": "سماعة أذن لاسلكية · بلوتوث 5.4",
    "hero.stock": "متوفر",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "أورايـمو",
    "hero.title2": "SPACEBUDS NEO",
    "hero.sub": "سماعة أذن لاسلكية بالكامل من أورايـمو Sound360: صوت محيطي، وضع ألعاب بزمن استجابة منخفض، و30 ساعة تشغيل مع العلبة. مقاومة للعرق IPX4 ومناسبة للرياضة.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#7 في السماعات داخل الأذن",
    "hero.buy": "اشتري وشوف سعر اليوم — اضغط هنا",
    "hero.chip1l": "مدة التشغيل",
    "hero.chip1v": "30 ساعة",
    "hero.chip2l": "البلوتوث",
    "hero.chip2v": "5.4",
    "gal.eyebrow": "المنتج",
    "gal.title": "شوفها عن قرب",
    "gal.sub": "صور من صفحة المنتج الرسمية على أمازون مصر — اضغط أي صورة لتكبيرها.",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "اقفل",
    "gal.label": "صورة المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "متاح لهذا المنتج",
    "trust.delivery": "توصيل سريع ومجاني",
    "trust.deliverySub": "بتوصّلها أمازون مصر",
    "trust.returns": "استرجاع مجاني 15 يوم",
    "trust.returnsSub": "استرداد كامل أو استبدال",
    "trust.prime": "متجر أورايـمو",
    "trust.primeSub": "معروضة على أمازون مصر",
    "k.weight": "مدة التشغيل",
    "k.weightSub": "5 ساعات + 25 ساعة بالعلبة",
    "k.dpi": "البلوتوث",
    "k.dpiSub": "5.4 · مدى 10 متر",
    "k.batt": "الوزن",
    "k.battSub": "100 جرام",
    "k.btns": "التقييم",
    "k.btnsSub": "4.0 من 5 · 465 تقييم",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل اللي تحتاجها",
    "specs.sub": "سماعة أذن لاسلكية بالكامل من أورايـمو: صوت محيطي Sound360، وضع ألعاب بزمن استجابة منخفض، وميكروفونين لتقليل ضوضاء المكالمات. الخامة بوليكربونات (PC) ومنشأها الصين، ومقاومة للعرق والمية بمعيار IPX4، ومعاها تحكم من تطبيق أورايـمو. مواصفاتها كما وردت في صفحة المنتج على أمازون.",
    "specs.table": "الورقة الفنية الكاملة",
    "s1.t": "صوت محيطي Sound360",
    "s1.b": "تقنية الصوت المحيطي بتاعت أورايـمو بتعيد توزيع الصوت الستيريو وبتوسّع مجال السمع، فبتحس إن الصوت جاي حوالينك بدل جاي في ودنك. وتحتها درايفر ديناميكي على مقاومة 32 أوم، بيشتغل على مدى ترددي من 20 هرتز لـ20,000 هرتز.",
    "s2.t": "30 ساعة تشغيل",
    "s2.b": "السماعة نفسها بتشتغل 5 ساعات على الشحنة الواحدة، والعلبة بتضيف 25 ساعة كمان، فالمجموع 30 ساعة من غير ما تفكر في الشاحن.",
    "s3.t": "وضع الألعاب",
    "s3.b": "مع البلوتوث 5.4 والوضع المخصص للألعاب، الصوت والصورة بيتزامنوا في ثواني — من غير تأخير محسوس في ألعاب الموبايل.",
    "s4.t": "ميكروفونين للمكالمات",
    "s4.b": "في ميكروفونين لتقليل الضوضاء مع خوارزمية بيشتغلوا مع بعض، بيقللوا الصوت اللي حواليك وقت ما تتكلم في أي مكان.",
    "s5.t": "مقاومة للعرق IPX4",
    "s5.b": "مقاومة للماء والعرق، فتفضل معاك في الجيم أو الجري من غير ما تقلق من العرق ولا من رذاذ المية.",
    "s6.t": "تتحكم من التطبيق",
    "s6.b": "التحكم بيتم من تطبيق أورايـمو على موبايلك — وكمان فيه مستشعر داخل العلبة بيوصّل السماعة أوتوماتيك أول ما تفتح الغطاء. الهيكل من البوليكربونات (PC) والقطعة أصلية ومنشأها الصين، والوزن 100 جرام بس.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "النوع",
    "t.sensorV": "سماعة داخل الأذن لاسلكية بالكامل",
    "t.switch": "رقم القطعة",
    "t.switchV": "OTW-323-BK",
    "t.weight": "الوزن",
    "t.weightV": "100 جرام",
    "t.size": "مدى البلوتوث",
    "t.conn": "الاتصال",
    "t.connV": "بلوتوث 5.4 لاسلكي",
    "t.batt": "البطارية",
    "t.battV": "30 ساعة (5 + 25 بالعلبة)",
    "t.os": "الأجهزة المتوافقة",
    "t.osV": "موبايلات",
    "t.hand": "التركيب",
    "t.handV": "داخل الأذن (In-Ear)",
    "t.inbox": "في العلبة",
    "t.inboxV": "السماعة + العلبة + دليل المستخدم",
    "conn.eyebrow": "الاتصال",
    "conn.title": "بلوتوث 5.4 ومزامنة فورية",
    "conn.sub": "بتتصل أوتوماتيك لما تفتح العلبة، ومدى 10 متر، والوضع المخصص للألعاب بيخلي الصوت والصورة متزامنين.",
    "conn.btnLs": "بلوتوث 5.4",
    "conn.btnBt": "وضع الألعاب",
    "conn.m1l": "التقنية",
    "conn.m1Ls": "بلوتوث 5.4",
    "conn.m1Bt": "لاسلكي بالكامل",
    "conn.m2l": "المدى",
    "conn.m2Ls": "10 متر",
    "conn.m2Bt": "بدون أسلاك",
    "conn.m3l": "التحكم",
    "conn.m3Ls": "من التطبيق",
    "conn.m3Bt": "مع مستشعر داخل العلبة",
    "conn.vizTitle": "التزامن",
    "conn.noteLs": "البلوتوث 5.4 مع وضع الألعاب بيخلي الصوت والصورة يتزامنوا في ثواني، فتلاحظ فرق واضح في ألعاب الموبايل خصوصاً.",
    "conn.noteBt": "مستشعر العلبة بيوصّل السماعة بجهازك أوتوماتيك أول ما تفتح الغطاء — من غير ما تفتح إعدادات البلوتوث في موبايلك.",
    "box.title": "اللي هتستلمه",
    "box.sub": "سماعة أورايـمو أصلية، معروضة على أمازون مصر",
    "box.i1": "سماعة أورايـمو SpaceBuds Neo — أسود",
    "box.i2": "علبة الشحن",
    "box.i3": "دليل المستخدم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشتري على أمازون مصر",
    "offer.productName": "Oraimo SpaceBuds Neo OTW-323 — أسود",
    "offer.seller": "متجر أورايـمو على أمازون مصر — البائع والشحن مبينين على صفحة المنتج",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "بكرة 3 أكتوبر (إلى القاهرة الجديدة)",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشتري وشوف سعر اليوم — اضغط هنا",
    "offer.checkout": "الدفع والشراء بيتموا على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "بناءً على مواصفات المنتج كما وردت في صفحة المنتج على أمازون",
    "rev.count": "30 ساعة · بلوتوث 5.4 · IPX4",
    "rev.q1": "30 ساعة تشغيل مع العلبة",
    "rev.n1": "البطارية",
    "rev.v1": "5 + 25 ساعة",
    "rev.q2": "صوت محيطي Sound360",
    "rev.n2": "الصوت",
    "rev.v2": "محيط",
    "rev.q3": "وضع ألعاب بزمن منخفض",
    "rev.n3": "الألعاب",
    "rev.v3": "مزامنة فورية",
    "faq.eyebrow": "أسئلة",
    "faq.title": "أسئلة المشترين",
    "faq.q1": "السماعة لاسلكية بالكامل ولا فيها سلك؟",
    "faq.a1": "لاسلكية بالكامل. بتتصل عن طريق بلوتوث 5.4 من غير أي سلك أو منفذ، ومفيش شحن لازم تعمله غير لما يبطي.",
    "faq.q2": "بتشتغل على موبايل إيه؟",
    "faq.a2": "الصفحة بتحدد الأجهزة المتوافقة إنها موبايلات. أي موبايل يدعم البلوتوث 5.4 هيربط بيها عادي، والتحكم بيتم من تطبيق أورايـمو.",
    "faq.q3": "بتعمل كام ساعة؟",
    "faq.a3": "30 ساعة إجمالي. السماعة نفسها 5 ساعات على الشحنة الواحدة، والعلبة بتضيف 25 ساعة كمان. زمن الشحن 5 ساعات.",
    "faq.q4": "مقاومة للمية والعرق؟",
    "faq.a4": "أيوه. مقاومة للماء والعرق، والعنوان بيحدد معيار IPX4، وده معناه إنها تتحمل العرق ورذاذ المية — يعني تنفع للرياضة والجيم. مش معناه إنها تغرق في مية.",
    "faq.q5": "أقدر أرجعها لو مش عاجباني؟",
    "faq.a5": "أيوه. صفحة المنتج بتكتب «15 يوم للاسترجاع» مع استرجاع مجاني — استرداد كامل أو استبدال. اقرأ سياسة الاسترجاع على الصفحة قبل ما تطلب.",
    "faq.q6": "فيها ضمان؟",
    "faq.a6": "مهم تقرأ ده: صفحة المنتج على أمازون بتكتب «No Warranty» — يعني المنتج ده معروف إنه بدون ضمان. لو ده عامل فرق في قرارك، خد في اعتبارك الاسترجاع خلال 15 يوم، وراجع صفحة المنتج على أمازون على طول لأن ده ممكن يتغير.",
    "cta.title": "جاهز تجرب سماعة أورايـمو؟",
    "cta.sub": "اطلبها دلوقتي على أمازون مصر — توصيل سريع، استرجاع مجاني 15 يوم، والدفع عند الاستلام متاح.",
    "cta.buy": "اطلب على أمازون وشوف سعر اليوم",
    "cta.questions": "عندك أسئلة تانية؟",
    "footer.about": "صفحة هبوط لسماعة أورايـمو SpaceBuds Neo. الأسعار والتوفر مأخوذة من صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "اشتري على أمازون",
    "footer.l2": "اللي في العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام ممكن تتغير حسب التوفر والعروض. Oraimo علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · عربي / إنجليزي",
    "aud.eyebrow": "لمين تنفع",
    "aud.title": "مين هيلاقي فيها فايدة",
    "aud.sub": "سماعة لاسلكية للجيم والرياضة والمكالمات، بـ30 ساعة تشغيل",
    "aud.a1t": "اللي بيلعب على الموبايل",
    "aud.a1b": "وضع الألعاب مع البلوتوث 5.4 بيخلي الصوت والصورة يتزامنوا في ثواني، والميكروفونين بيقللوا ضوضاء حواليك وانت بتلعب أو بتكلم.",
    "aud.a2t": "اللي بيمشي أو بيتدرّب",
    "aud.a2b": "مقاومة العرق والمية بمعيار IPX4 والتثبيت داخل الأذن اللي بيفضل ثابت — من الجري للجيم، من غير قلق من العرق.",
    "aud.a3t": "اللي بيحب صوت محيطي",
    "aud.a3b": "صوت Sound360 المحيطي بيوسّع مجال السمع، فبتحس إن الصوت جاي حوالينك. وبتشغّل 30 ساعة مع العلبة من غير ما تفكر في الشحن.",
    "aud.a4t": "اللي عايز سماعة من غير أسلاك خالص",
    "aud.a4b": "لاسلكية بالكامل من غير منفذ ولا سلك، وبتتصل أوتوماتيك أول ما تفتح العلبة. 100 جرام بس، ومفيش حاجة لازم تتعلمها.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "شوف سعر اليوم والعروض المتاحة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "SpaceBuds Neo · Wireless",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "hero.eyebrow": "Wireless earbuds · Bluetooth 5.4",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Oraimo",
    "hero.title2": "SPACEBUDS NEO",
    "hero.sub": "True wireless earbuds from Oraimo with Sound360 spatial audio, a low-latency Game Mode and 30 hours of playtime with the case. IPX4 sweat-resistant and built for sport.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "#7 in In-Ear Headphones",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Playtime",
    "hero.chip1v": "30 hours",
    "hero.chip2l": "Bluetooth",
    "hero.chip2v": "5.4",
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
    "trust.prime": "Oraimo Store",
    "trust.primeSub": "Listed on Amazon Egypt",
    "k.weight": "Playtime",
    "k.weightSub": "5 h + 25 h in the case",
    "k.dpi": "Bluetooth",
    "k.dpiSub": "5.4 · 10 m range",
    "k.batt": "Weight",
    "k.battSub": "100 g",
    "k.btns": "Rating",
    "k.btnsSub": "4.0 of 5 · 465 ratings",
    "specs.eyebrow": "Specifications",
    "specs.title": "Every detail you need",
    "specs.sub": "True wireless earbuds from Oraimo: Sound360 spatial audio, a low-latency Game Mode and two microphones for clearer calls. Polycarbonate (PC) housing, made in China, IPX4 water and sweat resistance, and control from the Oraimo app. Every figure below is taken from the Amazon product page.",
    "specs.table": "Full technical sheet",
    "s1.t": "Sound360 spatial audio",
    "s1.b": "Oraimo's spatial sound re-renders stereo and widens the sound field, so the audio feels like it is around you rather than inside one ear. Underneath sits a dynamic driver at 32 Ohms impedance, working across a 20Hz - 20,000Hz frequency range.",
    "s2.t": "30 hours of playtime",
    "s2.b": "The earbuds run 5 hours on a charge and the case adds 25 more, for 30 hours in total without thinking about a charger.",
    "s3.t": "Low-latency Game Mode",
    "s3.b": "With Bluetooth 5.4 and Game Mode, audio and video sync within seconds — no noticeable delay in mobile games.",
    "s4.t": "Two microphones for calls",
    "s4.b": "Two noise-reducing microphones work together with an algorithm to cut the noise around you whenever you take a call.",
    "s5.t": "IPX4 sweat resistance",
    "s5.b": "Water and sweat resistant, so they keep going through the gym or a run without worrying about sweat or splashes.",
    "s6.t": "Control from the app",
    "s6.b": "You control them from the Oraimo app on your phone — and a hall sensor in the case connects the earbuds the moment you open the lid. The housing is polycarbonate (PC), the piece is made in China, and it all weighs just 100 g.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "True wireless in-ear earbuds",
    "t.switch": "Part number",
    "t.switchV": "OTW-323-BK",
    "t.weight": "Weight",
    "t.weightV": "100 g",
    "t.size": "Bluetooth range",
    "t.conn": "Connectivity",
    "t.connV": "Bluetooth 5.4, wireless",
    "t.batt": "Battery",
    "t.battV": "30 hours (5 + 25 in the case)",
    "t.os": "Compatible devices",
    "t.osV": "Cellphones",
    "t.hand": "Fit",
    "t.handV": "In-ear",
    "t.inbox": "In the box",
    "t.inboxV": "Earbuds + charging case + user manual",
    "conn.eyebrow": "Connectivity",
    "conn.title": "Bluetooth 5.4, connected instantly",
    "conn.sub": "They connect on their own when you open the case, with a 10 m range, and Game Mode keeps audio and video in sync.",
    "conn.btnLs": "Bluetooth 5.4",
    "conn.btnBt": "Game Mode",
    "conn.m1l": "Technology",
    "conn.m1Ls": "Bluetooth 5.4",
    "conn.m1Bt": "Fully wireless",
    "conn.m2l": "Range",
    "conn.m2Ls": "10 metres",
    "conn.m2Bt": "No cables",
    "conn.m3l": "Control",
    "conn.m3Ls": "From the app",
    "conn.m3Bt": "With a hall sensor",
    "conn.vizTitle": "Sync",
    "conn.noteLs": "Bluetooth 5.4 with Game Mode gets audio and video syncing within seconds, which you notice most in mobile games.",
    "conn.noteBt": "The hall sensor in the case connects the earbuds to your device the moment you open the lid — no digging through your phone's Bluetooth menu.",
    "box.title": "What you get",
    "box.sub": "Genuine Oraimo earbuds, listed on Amazon Egypt",
    "box.i1": "Oraimo SpaceBuds Neo earbuds — black",
    "box.i2": "Charging case",
    "box.i3": "User manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "Oraimo SpaceBuds Neo OTW-323 — Black",
    "offer.seller": "Oraimo Store on Amazon Egypt — seller & shipping are shown on the product page",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Saturday, 3 October (to New Cairo City)",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Based on the product specifications as listed on the Amazon product page",
    "rev.count": "30 hours · Bluetooth 5.4 · IPX4",
    "rev.q1": "30 hours with the case",
    "rev.n1": "Battery",
    "rev.v1": "5 + 25 hours",
    "rev.q2": "Sound360 spatial audio",
    "rev.n2": "Sound",
    "rev.v2": "Immersive",
    "rev.q3": "Low-latency Game Mode",
    "rev.n3": "Gaming",
    "rev.v3": "Instant sync",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Are the earbuds fully wireless?",
    "faq.a1": "Fully wireless. They connect over Bluetooth 5.4 with no cable and no jack, so there is nothing to plug in and nothing to keep charged between uses.",
    "faq.q2": "What devices do they work with?",
    "faq.a2": "The product page lists cellphones as the compatible devices. Any phone with Bluetooth 5.4 will pair with them, and control happens from the Oraimo app.",
    "faq.q3": "How long does the battery last?",
    "faq.a3": "30 hours in total. The earbuds run 5 hours on one charge and the case adds another 25. A full charge takes 5 hours.",
    "faq.q4": "Are they water and sweat resistant?",
    "faq.a4": "Yes. They are listed as water resistant, and the title gives the rating as IPX4 — which means they handle sweat and splashes, so they are fine for sport and the gym. It does not mean they can be submerged.",
    "faq.q5": "Can I return them if I do not like them?",
    "faq.a5": "Yes. The product page states \"15 days Returnable\" with free returns — a full refund or a replacement. Check the return policy on the page before you order.",
    "faq.q6": "Is it under warranty?",
    "faq.a6": "This one matters: the product page on Amazon lists \"No Warranty\" for this item, so it is sold without a manufacturer warranty. If that affects your decision, factor in the 15-day return window, and always re-check the product page on Amazon, since this can change.",
    "cta.title": "Ready to try the Oraimo?",
    "cta.sub": "Order it now on Amazon Egypt — fast delivery, free 15-day returns, and cash on delivery.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the Oraimo SpaceBuds Neo. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. Oraimo is a registered trademark.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the SpaceBuds Neo suit",
    "aud.sub": "Wireless earbuds for gaming, sport and calls, with 30 hours of playtime",
    "aud.a1t": "People who game on a phone",
    "aud.a1b": "Game Mode with Bluetooth 5.4 syncs audio and video within seconds, and the two microphones cut the noise around you while you play or talk.",
    "aud.a2t": "People who run or train",
    "aud.a2b": "IPX4 sweat and water resistance with a secure in-ear fit that stays put — from a run to the gym, without worrying about sweat.",
    "aud.a3t": "People who like immersive sound",
    "aud.a3b": "Sound360 spatial audio widens the sound field so it feels like the audio is around you. And 30 hours with the case means you are not thinking about charging.",
    "aud.a4t": "Anyone who wants cable-free earbuds",
    "aud.a4b": "Fully wireless with no jack and no cable, and they connect on their own the moment you open the case. Just 100 g, and nothing to learn.",
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
    ? 'سماعة أورايـمو SpaceBuds Neo لاسلكية | أمازون مصر'
    : 'Oraimo SpaceBuds Neo Wireless Earbuds | Amazon Egypt';

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
const LIVE_KEY = 'oraim-sound360-live';
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg"];
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
