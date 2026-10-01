/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0CJX8RF48?tag=zoq-21';
const STORE_KEY = 'redragon-k552-kumara-lang';

const dict = {
  "ar": {
    "nav.tagline": "Redragon K552 · ميكانيكي · RGB",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "لمين تنفع",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة",
    "nav.buy": "اشتري دلوقتي",
    "nav.all": "كل المنتجات",
    "hero.eyebrow": "كيبورد ميكانيكي · إضاءة RGB",
    "hero.stock": "متوفر",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "ريدراجون K552",
    "hero.title2": "KUMARA RGB",
    "hero.sub": "كيبورد جيمنج ميكانيكي من ريدراجون بمفاتيح زرقاء (Blue Switch)، إضاءة RGB بألوان قوس قزح، 87 مفتاح بحجم TKL، ومفاتيح عربي/إنجليزي. هيكل من الألومنيوم، متوصل بالسلك عبر USB، ومتوافق مع اللابتوب.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "ضمان 12 شهر من الوكيل",
    "hero.buy": "اشتري وشوف سعر اليوم — اضغط هنا",
    "hero.chip1l": "عدد المفاتيح",
    "hero.chip1v": "87",
    "hero.chip2l": "حجم الكيبورد",
    "hero.chip2v": "TKL",
    "gal.eyebrow": "المنتج",
    "gal.title": "شوفها عن قرب",
    "gal.sub": "صور من صفحة المنتج الرسمية على أمازون مصر — اضغط أي صورة لتكبيرها.",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "اقفل",
    "gal.label": "صورة المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "متاح لهذا المنتج",
    "trust.delivery": "توصيل مجاني من أمازون",
    "trust.deliverySub": "وشحن من أمازون مصر",
    "trust.returns": "استرجاع مجاني 15 يوم",
    "trust.returnsSub": "استرداد كامل أو استبدال",
    "trust.prime": "يبيعه أمازون نفسه",
    "trust.primeSub": "منتج أصلي من أمازون مصر",
    "k.weight": "عدد المفاتيح",
    "k.weightSub": "87 مفتاح",
    "k.dpi": "الإضاءة",
    "k.dpiSub": "RGB بألوان قوس قزح",
    "k.batt": "مدة الضمان",
    "k.battSub": "12 شهر من الوكيل",
    "k.btns": "حجم الكيبورد",
    "k.btnsSub": "TKL من غير keypad",
    "specs.eyebrow": "المواصفات",
    "specs.title": "اللي صفحة المنتج بتأكده",
    "specs.sub": "دي كل المواصفات اللي صفحة ريدراجون K552 على أمازون مصر بتذكرها فعلاً، من غير أي زيادة. الصفحة مختصرة جداً: مفيش فيها أبعاد ولا وزن ولا ترتيب في المبيعات، فمش هنخترع أرقام. اللي مكتوب تحت هو الحرفي من صفحة المنتج.",
    "specs.table": "الورقة الفنية كما وردت",
    "s1.t": "مفاتيح ميكانيكية زرقاء",
    "s1.b": "الكيبورد ميكانيكي بمفاتيح زرقاء (Blue Switch)، مش من نوع الغشاء (membrane).",
    "s2.t": "إضاءة RGB بألوان قوس قزح",
    "s2.b": "إضاءة خلفية بألوان قوس قزح، وصفحة المنتج بتوثّقها كـRGB.",
    "s3.t": "87 مفتاح بحجم TKL",
    "s3.b": "حجم TKL (من غير الكيبورد الرقمي على اليمين) بـ87 مفتاح، فبيسيب مساحة أكبر للماوس على المكتب.",
    "s4.t": "مفاتيح عربي/إنجليزي",
    "s4.b": "المفاتيح مكتوبة عربي وإنجليزي على نفس المفتاح، فتكتب عربي من غير ما تغيّر اللغة كل مرة.",
    "s5.t": "هيكل من الألومنيوم",
    "s5.b": "الخامة المسجّلة للمنتج هي الألومنيوم، والستايل مودرن.",
    "s6.t": "ضمان 12 شهر من الوكيل",
    "s6.b": "الضمان المذكور في صفحة المنتج هو 12 شهر من الوكيل (dealer).",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "النوع",
    "t.sensorV": "كيبورد جيمنج ميكانيكي",
    "t.switch": "نوع المفتاح",
    "t.switchV": "Blue Switch",
    "t.weight": "عدد المفاتيح",
    "t.weightV": "87",
    "t.size": "الحجم",
    "t.conn": "الاتصال",
    "t.connV": "USB سلكي",
    "t.batt": "الخامة",
    "t.battV": "ألومنيوم",
    "t.os": "الأجهزة المتوافقة",
    "t.osV": "لابتوب",
    "t.hand": "الإضاءة",
    "t.handV": "RGB",
    "t.inbox": "مدة الضمان",
    "t.inboxV": "12 شهر من الوكيل",
    "conn.eyebrow": "الاتصال",
    "conn.title": "سلك USB واحد",
    "conn.sub": "سلكي بالكامل عبر USB، متوافق مع اللابتوب حسب جدول المواصفات. مفيش بلوتوث ولا بطاريات.",
    "conn.btnLs": "USB",
    "conn.btnBt": "سلكي",
    "conn.m1l": "الواجهة",
    "conn.m1Ls": "USB",
    "conn.m1Bt": "سلكي",
    "conn.m2l": "الطاقة",
    "conn.m2Ls": "كهرباء سلكية",
    "conn.m2Bt": "مفيش بطاريات",
    "conn.m3l": "التوافق",
    "conn.m3Ls": "لابتوب",
    "conn.m3Bt": "حسب الجدول الفني",
    "conn.vizTitle": "مواصفات الاتصال",
    "conn.noteLs": "سلك USB واحد وخلاص: الكيبورد بيوصّل باي منفذ USB، وصفحة المنتج بتكتب إن الأجهزة المتوافقة هي اللابتوب.",
    "conn.noteBt": "ملاحظة أمانة: صفحة المنتج ما بتذكرش ولا الماك ولا البليستيشن — عامة على أجهزة USB. ولو بتفكر تشغّله على جهاز مش لابتوب، تأكد الأول.",
    "box.title": "اللي هتستلمه",
    "box.sub": "منتج معروض على أمازون مصر",
    "box.i1": "كيبورد Redragon K552 KUMARA ميكانيكي — أسود",
    "box.i2": "ضمان 12 شهر من الوكيل",
    "box.i3": "استرجاع مجاني خلال 15 يوم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشتري على أمازون مصر",
    "offer.productName": "Redragon K552 KUMARA — ميكانيكي، مفاتيح زرقاء، RGB، 87 مفتاح TKL",
    "offer.seller": "أمازون مصر — يبيع المنتج ويشحنه بنفسه",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "غداً 3 أكتوبر — وممكن يوصل اليوم قبل 5 مساءً",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشتري وشوف سعر اليوم — اضغط هنا",
    "offer.checkout": "الدفع والشراء بيتموا على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "كل نقطة هنا من صفحة المنتج على أمازون — مفيش حاجة زايدة",
    "rev.count": "87 مفتاح · ألومنيوم · RGB",
    "rev.q1": "مفاتيح عربي/إنجليزي",
    "rev.n1": "الكتابة",
    "rev.v1": "عربي + إنجليزي",
    "rev.q2": "هيكل ألومنيوم",
    "rev.n2": "الخامة",
    "rev.v2": "ألومنيوم",
    "rev.q3": "ضمان 12 شهر",
    "rev.n3": "الضمان",
    "rev.v3": "من الوكيل",
    "faq.eyebrow": "أسئلة",
    "faq.title": "أسئلة المشترين",
    "faq.q1": "المفاتيح ميكانيكية فعلاً؟",
    "faq.a1": "أيوه — اسم المنتج نفسه فيه كلمة Mechanical، والجدول الفني بيوصفه كيبورد جيمنج ميكانيكي، والمفاتيح زرقاء (Blue Switch). يعني إنه ميكانيكي بمفاتيح حقيقية، مش غشاء (membrane).",
    "faq.q2": "المفاتيح دي مريحة إيه؟",
    "faq.a2": "بصراحة صفحة المنتج بتقول «Blue Switch» ومش بتشرح الإحساس أو قوة الضغط المطلوبة. فمش هنخترعلك وصف — لو الإحساس مهم ليك، جرّب كيبورد بمفاتيح زرقاء قبل ما تشتري.",
    "faq.q3": "فيه anti-ghosting ولا N-Key Rollover؟",
    "faq.a3": "مش مذكور. صفحة المنتج ما فيهاش أي ذكر لـanti-ghosting ولا N-Key Rollover، فما نقدرش نأكدلك الرقم ده على الـ87 مفتاح. لو ده مهم ليك، اسأل البائع قبل الشراء.",
    "faq.q4": "أبعاده قد إيه؟",
    "faq.a4": "مفيش أبعاد ولا وزن في صفحة المنتج — الحقول دي مش موجودة أصلاً. اللي نعرفه إن حجمه TKL من غير الكيبورد الرقمي، يعني أصغر من الكيبورد الكامل. المسافة الفعلية على مكتبك هي اللي هتحدد لو يمشي معاك ولا لأ.",
    "faq.q5": "الضمان إيه؟",
    "faq.a5": "الضمان المذكور في صفحة المنتج هو 12 شهر من الوكيل (dealer) — يعني من البائع، مش من الشركة المصنعة. وده الرقم الوحيد المكتوب؛ مفيش تفاصيل تانية عن التغطية.",
    "faq.q6": "أقدر أرجعه؟",
    "faq.a6": "أيوه. الاسترجاع مجاني خلال 15 يوم من الاستلام، واسترداد كامل أو استبدال. وفيه كمان خيار الدفع عند الاستلام.",
    "cta.title": "جاهز تجرب ريدراجون K552؟",
    "cta.sub": "اطلبه دلوقتي على أمازون مصر — يبيعه أمازون نفسه، توصيل مجاني، استرجاع مجاني 15 يوم، والدفع عند الاستلام متاح.",
    "cta.buy": "اطلب على أمازون وشوف سعر اليوم",
    "cta.questions": "عندك أسئلة تانية؟",
    "footer.about": "صفحة هبوط لكيبورد Redragon K552 KUMARA الميكانيكي. الأسعار والتوفر مأخوذة من صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "اشتري على أمازون",
    "footer.l2": "اللي في العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام ممكن تتغير حسب التوفر والعروض. Redragon علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · عربي / إنجليزي",
    "aud.eyebrow": "لمين تنفع",
    "aud.title": "مين هيلاقي فيها فايدة",
    "aud.sub": "كيبورد ميكانيكي عربي/إنجليزي، بحجم TKL من غير keypad",
    "aud.a1t": "اللي بيكتب عربي",
    "aud.a1b": "المفاتيح مكتوبة عربي وإنجليزي على نفس المفتاح، فتكتب عربي وإنجليزي من غير ما تبدّل لغة الجهاز كل مرة.",
    "aud.a2t": "اللي عايز مساحة على المكتب",
    "aud.a2b": "حجم TKL معناه 87 مفتاح من غير الكيبورد الرقمي على اليمين، فبيسيب مساحة راحة للماوس وللساعة أو الكوب.",
    "aud.a3t": "اللي بيلعب على اللابتوب",
    "aud.a3b": "سلك USB واحد وميكانيكي بمفاتيح زرقاء، وصفحة المنتج بتكتب إن الأجهزة المتوافقة هي اللابتوب.",
    "aud.a4t": "اللي عايز ألوان على مكتبه",
    "aud.a4b": "إضاءة RGB بألوان قوس قزح — نفس الفكرة اللي في كل كيبوردات ريدراجون، وبتدي شكل مميز في الغرفة الضلمة.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "شوف سعر اليوم والعروض المتاحة مباشرةًاً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفّر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصمات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس."
  },
  "en": {
    "nav.tagline": "Redragon K552 · Mechanical · RGB",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "nav.all": "All Products",
    "hero.eyebrow": "Mechanical keyboard · RGB lighting",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Redragon K552",
    "hero.title2": "KUMARA RGB",
    "hero.sub": "A mechanical gaming keyboard from Redragon with blue switches, rainbow RGB backlighting, 87 keys in a TKL layout, and Arabic/English keycaps. Aluminium chassis, wired over USB, listed as laptop compatible.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "12-month warranty from the dealer",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Keys",
    "hero.chip1v": "87",
    "hero.chip2l": "Layout size",
    "hero.chip2v": "TKL",
    "gal.eyebrow": "The product",
    "gal.title": "See it up close",
    "gal.sub": "Images from the official product page on Amazon Egypt — click any one to enlarge.",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product image",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Available for this item",
    "trust.delivery": "Free delivery from Amazon",
    "trust.deliverySub": "Shipped by Amazon Egypt",
    "trust.returns": "Free 15-day returns",
    "trust.returnsSub": "Full refund or replacement",
    "trust.prime": "Sold by Amazon itself",
    "trust.primeSub": "Genuine item from Amazon Egypt",
    "k.weight": "Number of keys",
    "k.weightSub": "87 keys",
    "k.dpi": "Lighting",
    "k.dpiSub": "Rainbow RGB",
    "k.batt": "Warranty",
    "k.battSub": "12 months from dealer",
    "k.btns": "Layout size",
    "k.btnsSub": "TKL, no numpad",
    "specs.eyebrow": "Specifications",
    "specs.title": "What the product page confirms",
    "specs.sub": "These are all the specifications the Redragon K552 page on Amazon Egypt actually lists — nothing added. The listing is very short: it has no dimensions, no weight and no sales rank, so we are not inventing numbers. Everything below is quoted from the product page.",
    "specs.table": "Technical sheet as listed",
    "s1.t": "Blue mechanical switches",
    "s1.b": "A mechanical keyboard with blue switches rather than ordinary membrane keys.",
    "s2.t": "Rainbow RGB backlighting",
    "s2.b": "Rainbow LED backlighting, which the product page documents as RGB.",
    "s3.t": "87 keys in a TKL layout",
    "s3.b": "A TKL layout (no numeric keypad on the right) with 87 keys, which leaves more desk space for your mouse.",
    "s4.t": "Arabic/English keycaps",
    "s4.b": "Arabic and English are printed together on each keycap, so you can type Arabic without switching the system language every time.",
    "s5.t": "Aluminium chassis",
    "s5.b": "The material recorded for this product is aluminium, in a modern style.",
    "s6.t": "12-month dealer warranty",
    "s6.b": "The warranty stated on the product page is 12 months from the dealer.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Mechanical gaming keyboard",
    "t.switch": "Switch type",
    "t.switchV": "Blue Switch",
    "t.weight": "Number of keys",
    "t.weightV": "87",
    "t.size": "Size",
    "t.conn": "Connectivity",
    "t.connV": "Wired USB",
    "t.batt": "Material",
    "t.battV": "Aluminium",
    "t.os": "Compatible devices",
    "t.osV": "Laptop",
    "t.hand": "Lighting",
    "t.handV": "RGB",
    "t.inbox": "Warranty",
    "t.inboxV": "12 months from dealer",
    "conn.eyebrow": "Connectivity",
    "conn.title": "One USB cable",
    "conn.sub": "Fully wired over USB, and the spec table lists laptops as the compatible devices. No Bluetooth and no batteries.",
    "conn.btnLs": "USB",
    "conn.btnBt": "Wired",
    "conn.m1l": "Interface",
    "conn.m1Ls": "USB",
    "conn.m1Bt": "Wired",
    "conn.m2l": "Power",
    "conn.m2Ls": "Corded electric",
    "conn.m2Bt": "No batteries",
    "conn.m3l": "Compatibility",
    "conn.m3Ls": "Laptop",
    "conn.m3Bt": "per the spec table",
    "conn.vizTitle": "Connectivity specs",
    "conn.noteLs": "One USB cable and that is it: the keyboard plugs into any USB port, and the product page lists laptops as the compatible devices.",
    "conn.noteBt": "An honest note: the product page does not mention a PC, a PlayStation or an Xbox — only laptops in the compatibility field. If you plan to use it on something other than a laptop, check first.",
    "box.title": "What you get",
    "box.sub": "An item sold on Amazon Egypt",
    "box.i1": "Redragon K552 KUMARA mechanical keyboard — black",
    "box.i2": "12-month warranty from the dealer",
    "box.i3": "Free returns within 15 days",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "Redragon K552 KUMARA — mechanical, blue switches, RGB, 87-key TKL",
    "offer.seller": "Amazon Egypt — sold and shipped by Amazon",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Tomorrow, 3 October — with same-day by 5 PM also offered",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Every point here comes from the Amazon product page — nothing extra",
    "rev.count": "87 keys · Aluminium · RGB",
    "rev.q1": "Arabic/English keycaps",
    "rev.n1": "Typing",
    "rev.v1": "Arabic + English",
    "rev.q2": "Aluminium chassis",
    "rev.n2": "Material",
    "rev.v2": "Aluminium",
    "rev.q3": "12-month warranty",
    "rev.n3": "Warranty",
    "rev.v3": "From the dealer",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Are the switches really mechanical?",
    "faq.a1": "Yes — the product name itself includes the word Mechanical, the spec table describes it as a mechanical gaming keyboard, and the switches are blue (Blue Switch). So it is mechanical, not a membrane board.",
    "faq.q2": "How do the switches feel?",
    "faq.a2": "Honestly, the product page says \"Blue Switch\" and does not describe the feel or the actuation force. We will not invent a description for you — if the feel matters to you, try a blue-switch keyboard before you buy.",
    "faq.q3": "Does it have anti-ghosting or N-Key Rollover?",
    "faq.a3": "Not stated. The product page makes no mention of anti-ghosting or N-Key Rollover, so we cannot promise you a figure across those 87 keys. If that matters, ask the seller before ordering.",
    "faq.q4": "What are the dimensions?",
    "faq.a4": "There are no dimensions and no weight on the product page — those fields are simply absent. What we do know is that it is a TKL layout with no numeric keypad, so it is smaller than a full-size board. The real question is whether it fits your desk.",
    "faq.q5": "What is the warranty?",
    "faq.a5": "The warranty stated on the product page is 12 months from the dealer — that is, from the seller rather than the manufacturer. It is the only figure written down; no further coverage detail is given.",
    "faq.q6": "Can I return it?",
    "faq.a6": "Yes. Returns are free within 15 days of delivery, for a full refund or a replacement. Cash on delivery is also available for this item.",
    "cta.title": "Ready to try the Redragon K552?",
    "cta.sub": "Order it now on Amazon Egypt — sold by Amazon itself, free delivery, free 15-day returns, and cash on delivery available.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the Redragon K552 KUMARA mechanical keyboard. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. Redragon is a registered trademark.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the K552 suits",
    "aud.sub": "A mechanical keyboard with Arabic/English keys, in a TKL layout with no numpad",
    "aud.a1t": "People who type Arabic",
    "aud.a1b": "Arabic and English are printed together on each keycap, so you can write in either language without switching the device language every time.",
    "aud.a2t": "People who want desk space",
    "aud.a2b": "TKL means 87 keys with no numeric keypad on the right, which frees up room for the mouse and a cup or a clock.",
    "aud.a3t": "People who game on a laptop",
    "aud.a3b": "One USB cable, mechanical blue switches, and the product page lists laptops as the compatible devices.",
    "aud.a4t": "Anyone who wants colour on their desk",
    "aud.a4b": "Rainbow RGB backlighting — the same look as the rest of the Redragon range, and it stands out in a dim room.",
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
    ? 'كيبورد ريدراجون K552 ميكانيكي RGB | أمازون مصر'
    : 'Redragon K552 Mechanical RGB Keyboard | Amazon Egypt';

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
const LIVE_KEY = 'redragon-k552-kumara-live';
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"];
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
