/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B099H9GZV1?tag=zoq-21';
const STORE_KEY = 'wd-hard-drive-case-lang';

const dict = {
  "ar": {
    "nav.tagline": "Hard Shell · 70 جم",
    "nav.specs": "المواصفات",
    "nav.connect": "صلب ولا ناعم",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "غلاف واقي Hard Shell",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Western Digital",
    "hero.title2": "جراب القرص الصلب",
    "hero.sub": "غلاف Hard Shell من بلاستيك EVA يحمي القرص الصلب عند الحمل — أسود، مقاس 50 × 50 × 50 مم ووزن 70 جرام",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في حقائب وأغطية القرص الصلب على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "الخامة",
    "hero.chip1v": "EVA صلب",
    "hero.chip2l": "الوزن",
    "hero.chip2v": "70 جرام",
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
    "trust.returns": "استرجاع 15 يوم",
    "trust.returnsSub": "وإرجاع مجاني حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.4 من 5 من 343 عميل على أمازون",
    "k.weight": "الوزن",
    "k.weightSub": "70 جرام — بيترمي في شنطة",
    "k.dpi": "المقاس",
    "k.dpiSub": "قشرة 50 × 50 × 50 مم",
    "k.batt": "التقييم",
    "k.battSub": "من 343 تقييم على أمازون",
    "k.btns": "المراجعات",
    "k.btnsSub": "تقييم موثّق على أمازون مصر",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "قشرة صلبة من EVA",
    "s1.b": "Shell Type مكتوب Hard والخامة Ethylene Vinyl Acetate — يعني قشرة صلبة بتحمل الضغط والصدمات بدل منطاد الناعم.",
    "s2.t": "تصنيف حقائب وأغطية الأقراص",
    "s2.b": "الصفحة بتصنف المنتج ضمن Hard Drive Bags & Cases — يعني الغطاء ده معمول ليحمي القرص الصلب في تنقلك.",
    "s3.t": "خفيف وبياخد مكان صغير",
    "s3.b": "وزن 70 جرام وأبعاد 50 × 50 × 50 مم — يعني محفظة صغيرة تقيلش في الشنطة بس تُحمي.",
    "s4.t": "لون أسود بساطة",
    "s4.b": "اللون أسود بنمط Solid — شكل هادي يناسب الشنطة والشغل من غير ما يلفت النظر.",
    "s5.t": "مش مقاومة للمية",
    "s5.b": "صفحة المواصفات بتوضح Not Water Resistant — يعني حماية من الصدامات والشد، ومش غطاء للمية.",
    "s6.t": "شحن آمن ومضمون",
    "s6.b": "الوصف مكتوب Comes in a proper and secure packaging — بيوصل مغلف صح من أمازون.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود (Black)",
    "t.sensor": "النوع",
    "t.sensorV": "غلاف واقي Hard Shell",
    "t.switch": "رقم الموديل",
    "t.switchV": "2724-34172-37-77",
    "t.weight": "الوزن",
    "t.weightV": "70 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الخامة",
    "t.connV": "إيثيلين فينيل أسيتات (EVA)",
    "t.batt": "التوافق",
    "t.battV": "أقراص صلبة · لابتوب (حسب الصفحة)",
    "t.os": "ميزات إضافية",
    "t.osV": "حماية رقمية آمنة · نمط صلب",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون — استرجاع 15 يوم",
    "t.inbox": "في العلبة",
    "t.inboxV": "غلاف WD الصلب باللون الأسود",
    "conn.eyebrow": "صلب ولا ناعم",
    "conn.title": "طريقتين تتعبهما نوع الحماية",
    "conn.sub": "قشرة EVA صلبة ومنطاد قماش ناعم — الاتنين بيحفظوا القرص، الفرق في مستوى الحماية",
    "conn.btnLs": "غلاف EVA صلب (زي ده)",
    "conn.btnBt": "منطاد قماش ناعم",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر اقتصادي حسب الصفحة",
    "conn.m1Bt": "غالباً أرخص وشائع في الجوهدية",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي بيحط القرص في شنطة مليانة أغراض بتصدم فيه",
    "conn.m2Bt": "اللي عايز تغليف خفيف جداً للدرج أو الشنطة الناعمة",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "قشرة صلبة بتمتص الصدمات وتسند القرص في مكانه",
    "conn.m3Bt": "مرن وبياخد مكان أقل، بس حمايته من الضغط أقل",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو القرص بيسافر معاك في شنطة مليانة، القشرة الصلبة بتفرق في لحظة الصدمة — القرص معلق فيها مش طايف.",
    "conn.noteBt": "المنطاد الناعم يكفي للدرج أو الجيب، بس لو حد وسط الضغط على الشنطة، القشرة الصلبة أقوى في الحماية.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المحتوى حسب صفحة المنتج على أمازون مصر — الغلاف جاهز من غير أدوات",
    "box.i1": "غلاف Western Digital الصلب",
    "box.i2": "خامة EVA سوداء بسيطة",
    "box.i3": "حماية من الصدمات والشد",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Western Digital — غلاف قرص صلب Hard Shell أسود 2724-34172-37-77",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج وتقييم 4.4 من 5 بناءً على 343 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "70 جم",
    "rev.n1": "الوزن",
    "rev.v1": "خفيف ومحمول",
    "rev.q2": "4.4",
    "rev.n2": "التقييم",
    "rev.v2": "من 343 مراجعة",
    "rev.q3": "EVA",
    "rev.n3": "الخامة",
    "rev.v3": "قشرة صلبة واقية",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "ينفع لقرصي الصلب؟",
    "faq.a1": "الصفحة بتصنف المنتج ضمن حقائب وأغطية القرص الصلب (Hard Drive Bags & Cases) والتوافق مكتوب مع اللابتوب — قارن مقاس جهازك بالغلاف قبل الشراء.",
    "faq.q2": "مقاومة للمية؟",
    "faq.a2": "لأ — صفحة المواصفات بتقول نهائياً Not Water Resistant.",
    "faq.q3": "خامته ايه؟",
    "faq.a3": "بلاستيك إيثيلين فينيل أسيتات (EVA) — قشرة صلبة بتلف الجهاز وبتتحمل الصدمات.",
    "faq.q4": "مقاسه عامل كام؟",
    "faq.a4": "الأبعاد المذكورة على الصفحة 50 × 50 × 50 مللي متر والوزن 70 جرام.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني واسترجاع خلال 15 يوم حسب سياسة أمازون. راجع التفاصيل على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تحمي قرصك في الشنطة؟",
    "cta.sub": "اطلب غلاف Western Digital الصلب من أمازون مصر — EVA حماية ووزن 70 جرام وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لغلاف Western Digital الصلب للقرص الصلب. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه Hard Shell",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الغلاف ده ليه",
    "aud.title": "اللي هيفيد معاه WD",
    "aud.sub": "قرص صلب بيتقلب في شنطتك — الغلاف الصلب بيثبّته ويحميه أثناء التنقل",
    "aud.a1t": "اللي بيحمل القرص كل يوم",
    "aud.a1b": "شنطة الشغل أو الجامعة بقت مليانة طبقات — القشرة بتشد القرص من الصدمات الجانبية والضغط.",
    "aud.a2t": "اللي بيسافر باللاب توب والقرص",
    "aud.a2b": "في المطار والسفر البعيد، الغلاف الصلب بيحمي القرص وهو ماشي مع الكشف والتنقل.",
    "aud.a3t": "اللي بيدوّر على حماية رخيصة",
    "aud.a3b": "سعر اقتصادي مقابل طبقة حماية صلبة — أرخص بكثير من فقدان بيانات الشغل.",
    "aud.a4t": "اللي بيدوّر على هدية عملية",
    "aud.a4b": "هدية صغيرة مناسبة لأي حد شغال بقرص صلب أو بيحتفظ بملفات على قرص خارجي.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Hard Shell · 70 g",
    "nav.specs": "Specs",
    "nav.connect": "Hard vs soft",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Hard Shell safety cover",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Western Digital",
    "hero.title2": "Hard Drive Cover",
    "hero.sub": "A Hard Shell EVA cover that protects the hard drive in transit - black, 50 × 50 × 50 mm, weighing 70 g",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in hard drive bags & cases on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Material",
    "hero.chip1v": "Hard EVA",
    "hero.chip2l": "Weight",
    "hero.chip2v": "70 g",
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
    "trust.returnsSub": "Free returns under Amazon's policy for this item",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.4 out of 5 by 343 customers on Amazon",
    "k.weight": "Weight",
    "k.weightSub": "70 g - no bag drag",
    "k.dpi": "Size",
    "k.dpiSub": "A 50 × 50 × 50 mm shell",
    "k.batt": "Rating",
    "k.battSub": "across 343 ratings on Amazon",
    "k.btns": "Reviews",
    "k.btnsSub": "verified ratings on Amazon Egypt",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "A hard EVA shell",
    "s1.b": "The sheet lists Shell Type: Hard, made of ethylene vinyl acetate - a rigid shell that takes pressure and bumps instead of a soft pouch.",
    "s2.t": "A hard drive bag & case",
    "s2.b": "The listing ranks in Hard Drive Bags & Cases - so this cover is built to shield the hard drive on the move.",
    "s3.t": "Light and space-smart",
    "s3.b": "70 g and 50 × 50 × 50 mm - a small pouch that adds no weight to the bag yet still protects.",
    "s4.t": "Simple black",
    "s4.b": "Black with a solid pattern - a plain look that blends into the bag and the office.",
    "s5.t": "Not water resistant",
    "s5.b": "The spec sheet says not water resistant - it is protection against bumps and wear, not a rain jacket.",
    "s6.t": "Safe, secure packaging",
    "s6.b": "The listing states it comes in proper and secure packaging - shipped well-packed from Amazon.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Hard Shell safety cover",
    "t.switch": "Model number",
    "t.switchV": "2724-34172-37-77",
    "t.weight": "Weight",
    "t.weightV": "70 g",
    "t.size": "Dimensions",
    "t.conn": "Material",
    "t.connV": "Ethylene vinyl acetate (EVA)",
    "t.batt": "Compatibility",
    "t.battV": "Hard drives · laptops (as listed)",
    "t.os": "Extra features",
    "t.osV": "Digital, secure · solid pattern",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's policy - 15-day returns",
    "t.inbox": "In the box",
    "t.inboxV": "The hard WD cover, black",
    "conn.eyebrow": "Hard or soft",
    "conn.title": "Protection, two different ways",
    "conn.sub": "A rigid EVA shell and a soft fabric pouch - both store the drive, the difference is how much they protect",
    "conn.btnLs": "Rigid EVA shell (this one)",
    "conn.btnBt": "Soft fabric pouch",
    "conn.m1l": "Cost",
    "conn.m1Ls": "An economical price per the listing",
    "conn.m1Bt": "Usually cheaper, common with retail drives",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone packing the drive with things that could knock it",
    "conn.m2Bt": "Anyone after a feather-light wrap for a drawer or soft bag",
    "conn.m3l": "What changes",
    "conn.m3Ls": "A rigid case that absorbs impact and holds the drive in place",
    "conn.m3Bt": "Flexible and slimmer, but weaker against heavy pressure",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If the drive travels in a busy bag, the rigid case counts at the moment of impact - the drive sits held, not floating.",
    "conn.noteBt": "A soft pouch is fine for a drawer or pocket, but if the bag gets squashed, the rigid shell protects more.",
    "box.title": "What arrives",
    "box.sub": "Content per the product page on Amazon.eg - the cover needs no assembly",
    "box.i1": "The Western Digital hard cover",
    "box.i2": "A simple black EVA shell",
    "box.i3": "Bump and wear protection",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Western Digital - hard drive Hard Shell cover, black, 2724-34172-37-77",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days and free returns per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.4 out of 5 rating from 343 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "70 g",
    "rev.n1": "Weight",
    "rev.v1": "light and portable",
    "rev.q2": "4.4",
    "rev.n2": "Rating",
    "rev.v2": "across 343 reviews",
    "rev.q3": "EVA",
    "rev.n3": "Material",
    "rev.v3": "a hard protective shell",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Will it fit my hard drive?",
    "faq.a1": "The listing ranks in hard drive bags & cases and names laptops for compatibility - compare your device size with the cover before you buy.",
    "faq.q2": "Is it water resistant?",
    "faq.a2": "No - the spec sheet clearly says not water resistant.",
    "faq.q3": "What material is it?",
    "faq.a3": "Ethylene vinyl acetate (EVA) - a rigid shell that wraps the device and takes knocks.",
    "faq.q4": "What size is it?",
    "faq.a4": "The listing gives 50 × 50 × 50 millimetres and 70 grams.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing points to free returns and a 15-day return window per Amazon’s policy. Check the details on the product page before you buy.",
    "cta.title": "Ready to protect the drive in the bag?",
    "cta.sub": "Order the Western Digital hard cover on Amazon.eg - EVA protection, 70 g and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Western Digital hard drive safety cover. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why Hard Shell",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the WD suits",
    "aud.sub": "A hard drive tossed into your bag - the rigid cover holds and shields it while you move",
    "aud.a1t": "Anyone carrying the drive daily",
    "aud.a1b": "Work or uni bags pile up layers - the shell pulls the drive away from side knocks and pressure.",
    "aud.a2t": "Travellers with a laptop and drive",
    "aud.a2b": "At airports and over long trips, the rigid cover protects the drive through checks and transit.",
    "aud.a3t": "Anyone after cheap protection",
    "aud.a3b": "An economical price for a rigid protection layer - far cheaper than losing working data.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "A small, appropriate gift for anyone working with a hard drive or keeping files on an external disk.",
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
    ? 'غلاف قرص صلب Western Digital Hard Shell أسود | أمازون مصر'
    : 'Western Digital Hard Drive Safety Cover, Black | Amazon Egypt';

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
const LIVE_KEY = 'wd-hard-drive-case-live';
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
const GAL_FILES = ["img/wd-00.jpg","img/wd-01.jpg"];
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
