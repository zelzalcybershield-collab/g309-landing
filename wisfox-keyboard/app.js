/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B09NPW3VH3?tag=zoq-21';
const STORE_KEY = 'wisfox-keyboard-lang';

const dict = {
  "ar": {
    "nav.tagline": "QWY-CE0142 · معدني · RGB",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "لمين تنفع",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة",
    "nav.buy": "اشتري دلوقتي",
    "hero.eyebrow": "كيبورد جيمنج معدني · إضاءة RGB",
    "hero.stock": "متوفر",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "كيبورد",
    "hero.title2": "WISFOX RGB",
    "hero.sub": "كيبورد جيمنج سلكي من ويسفوكس بهيكل معدني وإضاءة LED بألوان قوس قزح، 104 مفتاح، 19 مفتاح غير متعارض مع بعض، و12 مفتاح وسائط. القاعدة معدنية بمقاس 44.3 × 17.2 × 3 سم.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#3 في كيبوردات الكمبيوتر",
    "hero.buy": "اشتري وشوف سعر اليوم — اضغط هنا",
    "hero.chip1l": "عدد المفاتيح",
    "hero.chip1v": "104",
    "hero.chip2l": "مفاتيح بدون تعارض",
    "hero.chip2v": "19",
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
    "trust.deliverySub": "توصيل تديره أمازون مصر",
    "trust.returns": "استرجاع مجاني 15 يوم",
    "trust.returnsSub": "استرداد كامل أو استبدال",
    "trust.prime": "محجوز من أمازون",
    "trust.primeSub": " Hardware Market Egypt على أمازون مصر",
    "k.weight": "عدد المفاتيح",
    "k.weightSub": "104 مفتاح",
    "k.dpi": "مفاتيح بدون تعارض",
    "k.dpiSub": "19 مفتاح مع بعض",
    "k.batt": "التقييم",
    "k.battSub": "3.8 من 5 · 170 تقييم",
    "k.btns": "مفاتيح الوسائط",
    "k.btnsSub": "12 مجموعة وسائط",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل اللي تحتاجها",
    "specs.sub": "كيبورد جيمنج سلكي بهيكل معدني وإضاءة LED بألوان قوس قزح. 104 مفتاح، 19 مفتاح غير متعارض مع بعض، 12 مفتاح وسائط، ونوع المفاتيح Clicky. الأبعاد 44.3 × 17.2 × 3 سم. مواصفاته كما وردت في صفحة المنتج على أمازون.",
    "specs.table": "الورقة الفنية الكاملة",
    "s1.t": "إضاءة LED بألوان قوس قزح",
    "s1.b": "الإضاءة الملونة بتدي اللوحة جو مختلف عن ضو أبيض عادي، وبتكون واضحة في إضاءة الغرفة المنخفضة.",
    "s2.t": "هيكل معدني",
    "s2.b": "مصفوف من معدن متين ومقاوم للرشاشات، وغطاء المفاتيح مطبوع بتقنية الحفر بالليزر، بتصميم رقيق عايم.",
    "s3.t": "19 مفتاح مع بعض",
    "s3.b": "التصميم غير المتعارض بيخليك تضغط 19 مفتاح في نفس الوقت، من غير أوامر زيادة ولا تكرار.",
    "s4.t": "12 مفتاح وسائط",
    "s4.b": "12 مجموعة مفاتيح وسائط بتتحكم في الصوت وتنضبط عليه من غير ما تفتح أي برنامج.",
    "s5.t": "حامل موبايل",
    "s5.b": "في حامل في الكيبورد بيتkeiّب عليه الموبايل أو التابلت، عشان تشوف حاجة وأنت بتلعب أو بتشرح.",
    "s6.t": "سلكي بـUSB",
    "s6.b": "سلك USB مدمج — بيتوصل في أي كمبيوتر أو PS4 أو Xbox One. متوافق مع ويندوز من 95 لأحدث الإصدارات، وMac OS.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "النوع",
    "t.sensorV": "كيبورد جيمنج سلكي",
    "t.switch": "رقم القطعة",
    "t.switchV": "CE0142",
    "t.weight": "عدد المفاتيح",
    "t.weightV": "104",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "USB سلكي",
    "t.batt": "المفاتيح",
    "t.battV": "Clicky",
    "t.os": "الأجهزة المتوافقة",
    "t.osV": "كمبيوتر · PS4 · Xbox One",
    "t.hand": "الخامة",
    "t.handV": "معدن",
    "t.inbox": "في العلبة",
    "t.inboxV": "الكيبورد + دليل المستخدم",
    "conn.eyebrow": "الاتصال",
    "conn.title": "سلك USB واحد",
    "conn.sub": "سلك USB مدمج بيتوصل في الكمبيوتر أو الكونسول. مفيش بلوتوث ولا بطاريات ولا إعدادات.",
    "conn.btnLs": "USB",
    "conn.btnBt": "سلكي",
    "conn.m1l": "الواجهة",
    "conn.m1Ls": "USB",
    "conn.m1Bt": "سلك مدمج",
    "conn.m2l": "الطاقة",
    "conn.m2Ls": "كهرباء سلكية",
    "conn.m2Bt": "مفيش بطاريات",
    "conn.m3l": "التوافق",
    "conn.m3Ls": "ويندوز وMac",
    "conn.m3Bt": "وPS4 وXbox",
    "conn.vizTitle": "متوافق مع",
    "conn.noteLs": "سلك USB واحد وخلاص: الكيبورد بيوصّل باي جهاز USB، وويندوز من 95 لحد أحدث نسخة.",
    "conn.noteBt": "ملاحظة مهمة: صفحة المنتج بتقول إن خصائص الوسائط (زرار الصوت والحجم) مش متاحة على Mac OS.",
    "box.title": "اللي هتستلمه",
    "box.sub": "كيبورد ويسفوكس أصلي، معروض على أمازون مصر",
    "box.i1": "كيبورد جيمنج WISFOX — أسود",
    "box.i2": "سلك USB مدمج",
    "box.i3": "دليل المستخدم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشتري على أمازون مصر",
    "offer.productName": "WISFOX Metal Backlit RGB Gaming Keyboard — أسود",
    "offer.seller": "Hardware Market Egypt — يبيع من متجره، وأمازون بتتولى الشحن",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "السبت 3 أكتوبر (إلى القاهرة الجديدة)",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشتري وشوف سعر اليوم — اضغط هنا",
    "offer.checkout": "الدفع والشراء بيتموا على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "بناءً على مواصفات المنتج كما وردت في صفحة المنتج على أمازون",
    "rev.count": "104 مفتاح · معدني · RGB",
    "rev.q1": "19 مفتاح مع بعض",
    "rev.n1": "بدون تعارض",
    "rev.v1": "19 مفتاح",
    "rev.q2": "هيكل معدني مقاوم للرش",
    "rev.n2": "الخامة",
    "rev.v2": "معدن",
    "rev.q3": "إضاءة بألوان قوس قزح",
    "rev.n3": "الإضاءة",
    "rev.v3": "RGB",
    "faq.eyebrow": "أسئلة",
    "faq.title": "أسئلة المشترين",
    "faq.q1": "الكيبورد ميكانيكي ولا عادي؟",
    "faq.a1": "صفحة المنتج بتكتب نوع المفاتيح «Clicky»، بس مفيش ذكر لكلمة ميكانيكي. يعني نقدر نقول مفاتيح بتبوس (Clicky) — من غير ما نأكد إنها ميكانيكية، لأن الصفحة نفسها مش بتقول كده.",
    "faq.q2": "كام مفتاح فيه؟",
    "faq.a2": "الجدول الفني بيقول 104 مفتاح (Number of Keys: 104 و Button Quantity: 104). لاحظ إن فيه تعارض بسيط في بيانات أمازون نفسها: نص وصف المنتج بيقول 105 مفتاح، لكن الجدول الفني بيقول 104 في كل الخانات — والتزمنا بالجدول الفني.",
    "faq.q3": "بيشتغل على إيه؟",
    "faq.a3": "سلك USB، فبيشتغل على الكمبيوتر والـPS4 والـXbox One. متوافق مع ويندوز من 95/98/XP/2000/ME/VISTA/7/8/10، ومع Mac OS وLinux. ملاحظة: صفحة المنتج بتقول إن خصائص الوسائط مش متاحة على Mac OS.",
    "faq.q4": "الإضاءة إيه؟",
    "faq.a4": "إضاءة LED بألوان قوس قزح (Rainbow LED Backlight)، وكمان مذكور إنها Backlit وErgonomic. من غير RGB مخصص بالألوان ولا إضاءة جانبية — اللي مكتوب هو قوس قزح.",
    "faq.q5": "أقدر أرجعه؟",
    "faq.a5": "أيوه. صفحة المنتج مكتوب فيها «15 يوم للاسترجاع» مع استرجاع مجاني — استرداد كامل أو استبدال.",
    "faq.q6": "فيه ضمان؟",
    "faq.a6": "مهم: صفحة المنتج على أمازون مفيهاش أي ذكر لشروط ضمان — مفيه مدة ضمان ولا كلام عنه. لو الضمان مهم ليك، راجع صفحة المنتج على أمازون أو اسأل البائع عن الضمان قبل ما تشتري.",
    "cta.title": "جاهز تجرب كيبورد ويسفوكس؟",
    "cta.sub": "اطلبه دلوقتي على أمازون مصر — توصيل سريع، استرجاع مجاني 15 يوم، والدفع عند الاستلام متاح.",
    "cta.buy": "اطلب على أمازون وشوف سعر اليوم",
    "cta.questions": "عندك أسئلة تانية؟",
    "footer.about": "صفحة هبوط لكيبورد WISFOX المعدني. الأسعار والتوفر مأخوذة من صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "اشتري على أمازون",
    "footer.l2": "اللي في العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام ممكن تتغير حسب التوفر والعروض. WisFox علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · عربي / إنجليزي",
    "aud.eyebrow": "لمين تنفع",
    "aud.title": "مين هيلاقي فيها فايدة",
    "aud.sub": "كيبورد معدني بإضاءة قوس قزح، للألعاب والاستخدام اليومي",
    "aud.a1t": "اللي بيلعب على الكمبيوتر",
    "aud.a1b": "19 مفتاح بيتضغطوا مع بعض من غير تعارض، ومفاتيح Clicky استجابة سريعة. والإضاءة بتديك تقدر تلاقي الأرقام وانت بتبص على الشاشة.",
    "aud.a2t": "اللي بيكتب أو بيشتغل كتير",
    "aud.a2b": "104 مفتاح و12 مفتاح وسائط للتحكم في الصوت، والمصفوف المعدني متين. والأبعاد 44.3 سم عرضاً يعني بيسيب مساحة كافية للماوس جنبه.",
    "aud.a3t": "اللي بيلعب على PS4 أو Xbox",
    "aud.a3b": "سلك USB واحد بيشتغل على الكمبيوتر والPS4 والـXbox One، فمش محتاج تشتري حاجة مختلفة لكل جهاز.",
    "aud.a4t": "اللي عايز إضاءة في الغرفة الضلمة",
    "aud.a4b": "إضاءة LED بألوان قوس قزح بتوضح شكل الكيبورد في الإضاءة المنخفضة، وكمان فيها حامل موبايل يريحك وأنت بتبص على حاجة وأنت بتلعب.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "شوف سعر اليوم والعروض المتاحة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "QWY-CE0142 · Metal · RGB",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "hero.eyebrow": "Metal gaming keyboard · RGB lighting",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "WISFOX",
    "hero.title2": "RGB KEYBOARD",
    "hero.sub": "A wired gaming keyboard from WisFox with a metal chassis and rainbow LED backlighting, 104 keys, 19 non-conflicting keys and 12 multimedia keys. Metal plate sized 44.3 × 17.2 × 3 cm.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "#3 in Computer Keyboards",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Keys",
    "hero.chip1v": "104",
    "hero.chip2l": "Non-conflicting",
    "hero.chip2v": "19",
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
    "trust.deliverySub": "Delivery managed by Amazon",
    "trust.returns": "Free 15-day returns",
    "trust.returnsSub": "Full refund or replacement",
    "trust.prime": "Fulfilled by Amazon",
    "trust.primeSub": "Sold by Hardware Market Egypt",
    "k.weight": "Number of keys",
    "k.weightSub": "104 keys",
    "k.dpi": "Non-conflicting",
    "k.dpiSub": "19 at once",
    "k.batt": "Rating",
    "k.battSub": "3.8 of 5 · 170 ratings",
    "k.btns": "Multimedia keys",
    "k.btnsSub": "12 combinations",
    "specs.eyebrow": "Specifications",
    "specs.title": "Every detail you need",
    "specs.sub": "A wired gaming keyboard with a metal chassis and rainbow LED backlighting. 104 keys, 19 non-conflicting keys, 12 multimedia keys and Clicky switches. Dimensions 44.3 × 17.2 × 3 cm. Every figure is taken from the Amazon product page.",
    "specs.table": "Full technical sheet",
    "s1.t": "Rainbow LED backlight",
    "s1.b": "The coloured backlight gives the board its own look and stays easy to read when the room lighting is low.",
    "s2.t": "Metal chassis",
    "s2.b": "Built from durable, splash-resistant metal, with the key printing done by laser carving and an ultra-thin floating keycap design.",
    "s3.t": "19 keys at once",
    "s3.b": "The non-conflicting design lets you press 19 keys simultaneously, with no extra or repeated commands during play.",
    "s4.t": "12 multimedia keys",
    "s4.b": "12 multimedia key combinations let you adjust and control audio without opening any software.",
    "s5.t": "Phone stand",
    "s5.b": "There is a stand in the keyboard that holds a phone or tablet, so you can keep something in view while you play or present.",
    "s6.t": "Wired over USB",
    "s6.b": "A built-in USB cable — it plugs into any computer, PS4 or Xbox One. Compatible with Windows from 95 up, and Mac OS.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Wired gaming keyboard",
    "t.switch": "Part number",
    "t.switchV": "CE0142",
    "t.weight": "Number of keys",
    "t.weightV": "104",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "Wired USB",
    "t.batt": "Switches",
    "t.battV": "Clicky",
    "t.os": "Compatible devices",
    "t.osV": "PC · PS4 · Xbox One",
    "t.hand": "Material",
    "t.handV": "Metal",
    "t.inbox": "In the box",
    "t.inboxV": "Keyboard + user manual",
    "conn.eyebrow": "Connectivity",
    "conn.title": "One USB cable",
    "conn.sub": "A built-in USB cable plugs into a computer or a console. No Bluetooth, no batteries, no configuration.",
    "conn.btnLs": "USB",
    "conn.btnBt": "Wired",
    "conn.m1l": "Interface",
    "conn.m1Ls": "USB",
    "conn.m1Bt": "Built-in cable",
    "conn.m2l": "Power",
    "conn.m2Ls": "Corded electric",
    "conn.m2Bt": "No batteries",
    "conn.m3l": "Compatibility",
    "conn.m3Ls": "Windows & Mac",
    "conn.m3Bt": "and PS4 / Xbox",
    "conn.vizTitle": "Works with",
    "conn.noteLs": "One USB cable and that is it: the keyboard plugs into any USB port, and works on Windows from 95 up to the latest version.",
    "conn.noteBt": "One thing worth knowing: the product page states that the media features (volume and play buttons) are not available on Mac OS.",
    "box.title": "What you get",
    "box.sub": "Genuine WisFox keyboard, listed on Amazon Egypt",
    "box.i1": "WISFOX gaming keyboard — black",
    "box.i2": "Built-in USB cable",
    "box.i3": "User manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "WISFOX Metal Backlit RGB Gaming Keyboard — Black",
    "offer.seller": "Hardware Market Egypt — sold by them, shipping handled by Amazon",
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
    "rev.count": "104 keys · Metal · RGB",
    "rev.q1": "19 keys at once",
    "rev.n1": "Non-conflicting",
    "rev.v1": "19 keys",
    "rev.q2": "Splash-resistant metal chassis",
    "rev.n2": "Material",
    "rev.v2": "Metal",
    "rev.q3": "Rainbow backlighting",
    "rev.n3": "Lighting",
    "rev.v3": "RGB",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is the keyboard mechanical?",
    "faq.a1": "The product page lists the switch type as \"Clicky\" but never uses the word mechanical. So the honest answer is that the switches are clicky — we cannot confirm they are mechanical, because the page itself does not say so.",
    "faq.q2": "How many keys does it have?",
    "faq.a2": "The technical table says 104 keys (Number of Keys: 104 and Button Quantity: 104). Worth noting a small inconsistency in Amazon's own data: the product description text says 105 keys, while the spec table says 104 in every field — we went with the spec table.",
    "faq.q3": "What does it work with?",
    "faq.a3": "It is a USB wired keyboard, so it works on a computer, PS4 and Xbox One. It is compatible with Windows 95/98/XP/2000/ME/VISTA/7/8/10, plus Mac OS and Linux. One note: the product page states the media features are not available on Mac OS.",
    "faq.q4": "What is the lighting like?",
    "faq.a4": "It is rainbow LED backlighting, and the specs also list it as backlit and ergonomic. There is no per-key custom RGB or side lighting mentioned — what is listed is rainbow.",
    "faq.q5": "Can I return it?",
    "faq.a5": "Yes. The product page states \"15 days Returnable\" with free returns — a full refund or a replacement.",
    "faq.q6": "Is it under warranty?",
    "faq.a6": "Worth knowing: the product page on Amazon makes no mention of any warranty terms at all — no warranty period and no warranty statement. If a warranty matters to you, check the product page on Amazon or ask the seller about warranty cover before you buy.",
    "cta.title": "Ready to try the WisFox?",
    "cta.sub": "Order it now on Amazon Egypt — fast delivery, free 15-day returns, and cash on delivery.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the WISFOX metal gaming keyboard. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. WisFox is a registered trademark.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the WisFox suits",
    "aud.sub": "A metal keyboard with rainbow backlighting, for gaming and everyday use",
    "aud.a1t": "People who game on a PC",
    "aud.a1b": "19 keys press at once with no ghosting, and clicky switches that respond quickly. The backlight also lets you find the keys without taking your eyes off the screen for long.",
    "aud.a2t": "People who type or work a lot",
    "aud.a2b": "104 keys plus 12 multimedia keys for audio control, on a durable metal plate. At 44.3 cm wide it still leaves room for a mouse beside it.",
    "aud.a3t": "People who game on PS4 or Xbox",
    "aud.a3b": "One USB cable works across a computer, the PS4 and Xbox One, so you are not buying a different board for each device.",
    "aud.a4t": "Anyone who wants lighting in a dim room",
    "aud.a4b": "Rainbow LED backlighting shows the shape of the board in low light, and the phone stand keeps something in view while you play.",
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
    ? 'كيبورد ويسفوكس معدني RGB للألعاب | أمازون مصر'
    : 'WISFOX Metal RGB Gaming Keyboard | Amazon Egypt';

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
const LIVE_KEY = 'wisfox-keyboard-live';
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
