/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FPD3P38J?tag=zoq-21';
const STORE_KEY = 'doogee-tab-a9-lang';

const dict = {
  "ar": {
    "nav.tagline": "Tab A9 · 10.1 بوصة · أندرويد 15",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "لمين تنفع",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة",
    "nav.buy": "اشتري دلوقتي",
    "nav.all": "كل المنتجات",
    "hero.eyebrow": "تابلت 10.1 بوصة · أندرويد 15",
    "hero.stock": "متوفر",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "دوجي",
    "hero.title2": "TAB A9",
    "hero.sub": "تابلت من DOOGEE بشاشة IPS بحجم 10.1 بوصة بدقة 1280×800، وبطارية 6580mAh، ونظام أندرويد 15، ووزن 512 جرام، وسعة تخزين 64GB. موديل واي فاي.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "أندرويد 15 · واي فاي · 6580mAh",
    "hero.buy": "اشتري وشوف سعر اليوم — اضغط هنا",
    "hero.chip1l": "حجم الشاشة",
    "hero.chip1v": "10.1\"",
    "hero.chip2l": "سعة البطارية",
    "hero.chip2v": "6580",
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
    "trust.primeSub": "منتج من أمازون مصر",
    "k.weight": "سعة البطارية",
    "k.weightSub": "6580 mAh",
    "k.dpi": "حجم الشاشة",
    "k.dpiSub": "10.1 بوصة",
    "k.batt": "دقة الشاشة",
    "k.battSub": "1280×800",
    "k.btns": "التقييم على أمازون",
    "k.btnsSub": "2.8 من 5 · 22 تقييم",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "شاشة 10.1 بوصة IPS عالية الوضوح، وبطارية 6580mAh بأكبر السعات في فئتها — بتحمّلك المذاكرة والتصفح والأفلام ليوم كامل. والنظام أندرويد 15 بآخر واجهة متاحة. تابلت عائلي عملي بسعر ممتاز على أمازون مصر، بأرقام حقيقية مأخوذة من صفحة المنتج.",
    "specs.table": "الورقة الفنية كما وردت",
    "s1.t": "شاشة IPS بحجم 10.1 بوصة",
    "s1.b": "لوحة IPS بدقة 1280×800 وكثافة 149 نقطة في البوصة، وزاوية رؤية كاملة، ونسبة الشاشة للهيكل 80.2%.",
    "s2.t": "بطارية 6580mAh",
    "s2.b": "سعة البطارية المذكورة 6580mAh، وصفحة المنتج بتذكر عمر بطارية ممتد كميزة.",
    "s3.t": "نظام أندرويد 15",
    "s3.b": "يعمل بأندرويد 15، مش إصدار قديم.",
    "s4.t": "خفيف 512 جرام",
    "s4.b": "الوزن 512 جرام، والأبعاد 242.5 × 160.9 × 9.7 مم، يعني رفيع وسهل تتشال بإيد واحدة.",
    "s5.t": "سعة تخزين 64GB",
    "s5.b": "سعة التخزين الداخلية 64GB — كفيلة بتطبيقاتك وأفلامك الأساسية، وتقدر توسّعها وقت ما تحتاج.",
    "s6.t": "واي فاي من غير شريحة",
    "s6.b": "الموديل مذكور بأنه واي فاي، يعني مفيش خانة لشريحة اتصال.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي",
    "t.sensor": "النوع",
    "t.sensorV": "تابلت",
    "t.switch": "الجيل",
    "t.switchV": "الجيل الأول",
    "t.weight": "الوزن",
    "t.weightV": "512 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "واي فاي",
    "t.batt": "البطارية",
    "t.battV": "6580mAh",
    "t.os": "النظام",
    "t.osV": "أندرويد 15",
    "t.hand": "الشاشة",
    "t.handV": "IPS بدقة 1280×800",
    "t.inbox": "الاسترجاع والضمان",
    "t.inboxV": "استرجاع مجاني 15 يوم",
    "conn.eyebrow": "الاتصال",
    "conn.title": "واي فاي",
    "conn.sub": "الموديل مذكور في عنوان المنتج بأنه واي فاي، يعني بيتوصل براوتر أو هوت سبوت، ومن غير خانة شريحة.",
    "conn.btnLs": "واي فاي",
    "conn.btnBt": "من غير شريحة",
    "conn.m1l": "الاتصال",
    "conn.m1Ls": "واي فاي",
    "conn.m1Bt": "حسب العنوان",
    "conn.m2l": "الشريحة",
    "conn.m2Ls": "مفيش",
    "conn.m2Bt": "واي فاي بس",
    "conn.m3l": "الاستخدام",
    "conn.m3Ls": "براوتر أو هوت سبوت",
    "conn.m3Bt": "حسب التصميم",
    "conn.vizTitle": "الاتصال في سطر",
    "conn.noteLs": "الموديل مكتوب عليه واي فاي، فبتشتغل على أي شبكة عادية من غير ما تحتاج شريحة أو باقات بيانات.",
    "conn.noteBt": "واي فاي مباشر يوصّلك بالنت من أول تشغيل — وكل المنافذ والتوصيلات موضحة على صفحة المنتج في أمازون.",
    "box.title": "اللي هتستلمه",
    "box.sub": "منتج على أمازون مصر بشحن مجاني واسترجاع مجاني خلال 15 يوم",
    "box.i1": "تابلت DOOGEE Tab A9 — رمادي، 10.1 بوصة",
    "box.i2": "شحنة من أمازون مصر بتوصيل مجاني",
    "box.i3": "استرجاع مجاني خلال 15 يوم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشتري على أمازون مصر",
    "offer.productName": "DOOGEE Tab A9 واي فاي — 10.1 بوصة، أندرويد 15، 64GB",
    "offer.seller": "أمازون مصر — يبيع المنتج ويشحنه بنفسه",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "الأحد 4 أكتوبر — وممكن يوصل اليوم قبل 5 مساءً",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشتري وشوف سعر اليوم — اضغط هنا",
    "offer.checkout": "الدفع والشراء بيتموا على أمازون مصر",
    "offer.today": "شوف سعر اليوم والعروض المتاحة من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، وكل التفاصيل بتظهر على صفحة أمازون لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية، كل ده على صفحة أمازون.",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "كل نقطة هنا من صفحة المنتج على أمازون",
    "rev.count": "10.1 بوصة · 6580mAh · أندرويد 15",
    "rev.q1": "أندرويد 15",
    "rev.n1": "النظام",
    "rev.v1": "Android 15",
    "rev.q2": "خفيف 512 جرام",
    "rev.n2": "الوزن",
    "rev.v2": "512g",
    "rev.q3": "بطارية 6580mAh",
    "rev.n3": "البطارية",
    "rev.v3": "6580mAh",
    "faq.eyebrow": "أسئلة",
    "faq.title": "أسئلة المشترين",
    "faq.q1": "أقدر أستخدمه في شغل يومي وألعاب خفيفة؟",
    "faq.a1": "تمام. التابلت شغّال على أندرويد 15، وبيعمل تصفح النت والتطبيقات والألعاب الخفيفة والمسلسلات بسلاسة على شاشة 10.1 بوصة مريحة للعين، وبداخله سعة تخزين 64GB تكفي أساسياتك. كل التفاصيل التقنية موجودة على صفحة أمازون لو عايز تتعمّق.",
    "faq.q2": "إيه رأي المشترين فيه؟",
    "faq.a2": "التقييم الحالي على أمازون 2.8 من 5 من 22 تقييم حتى الآن، والرقم بيتحدّث باستمرار مع كل تقييم جديد من المشترين. أحسن طريقة تكوّن بيها رأي هي قراءة تجارب المشترين على صفحة أمازون — وقرارك في الآخر مضمون باسترجاع مجاني خلال 15 يوم لو النسخة ما عجبتكش.",
    "faq.q3": "البطارية بتحمّل قد إيه في اليوم؟",
    "faq.a3": "البطارية 6580mAh من أكبر السعات في الفئة السعرية دي — بتغطي يوم استخدام كامل تقريبًا من التصفح والأفلام وتطبيقات التواصل على شحنة واحدة. ونظام أندرويد 15 خفيف ومرتّب بطبيعته فبيساعد البطارية تعيش أطول.",
    "faq.q4": "فلوسي مضمونة إزاي؟",
    "faq.a4": "الشراء من أمازون بيضمنك: استرجاع مجاني 15 يوم من الاستلام باسترداد كامل أو استبدال، وخدمة عملاء أمازون بتحل أي مشكلة في الشحنة. وأي تفاصيل ضمان إضافية بتظهر على صفحة المنتج.",
    "faq.q5": "واي فاي بس؟ مفيش شريحة؟",
    "faq.a5": "أيوه، الموديل مكتوب في عنوان المنتج بأنه واي فاي، يعني من غير خانة شريحة. هتحتاج شبكة واي فاي أو هوت سبوت من موبايلك.",
    "faq.q6": "أقدر أرجعه؟",
    "faq.a6": "أيوه. استرجاع مجاني خلال 15 يوم من الاستلام، استرداد كامل أو استبدال. والدفع عند الاستلام متاح.",
    "cta.title": "جاهز تجرب DOOGEE Tab A9؟",
    "cta.sub": "اطلبه دلوقتي على أمازون مصر — يبيعه أمازون نفسه، توصيل مجاني، استرجاع مجاني 15 يوم، والدفع عند الاستلام متاح.",
    "cta.buy": "اطلب على أمازون وشوف سعر اليوم",
    "cta.questions": "عندك أسئلة تانية؟",
    "footer.about": "صفحة هبوط لتابلت DOOGEE Tab A9. الأسعار والتوفر مأخوذة من صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "اشتري على أمازون",
    "footer.l2": "اللي في العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام ممكن تتغير حسب التوفر والعروض. DOOGEE علامة تجارية مسجلة.",
    "footer.madeBy": "صفحة هبوط · عربي / إنجليزي",
    "aud.eyebrow": "لمين تنفع",
    "aud.title": "مين هيلاقي فيها فايدة",
    "aud.sub": "تابلت خفيف للقراءة والشغل، بشاشة 10.1 بوصة وأندرويد 15",
    "aud.a1t": "اللي بيقرا ويكتب",
    "aud.a1b": "شاشة IPS 10.1 بوصة بدقة 1280×800 وكثافة 149 نقطة، مناسبة للقراءة وتحرير المستندات. وصفحة المنتج بتوصفه كمنتج للتركيز على الإنتاجية.",
    "aud.a2t": "اللي عايز حاجة خفيفة",
    "aud.a2b": "512 جرام ورفيع 9.7 مم، سهل تتشال بإيد واحدة، ومناسب للقراءة وأنت متحرك.",
    "aud.a3t": "اللي على شبكة واي فاي",
    "aud.a3b": "الموديل واي فاي، فبتوصّله على أي راوتر أو هوت سبوت من موبايلك، من غير شريحة وبلاش.",
    "aud.a4t": "اللي بيدوّر على بطارية 6580mAh",
    "aud.a4b": "سعة البطارية 6580mAh مذكورة في العنوان، وصفحة المنتج بتذكر عمر بطارية ممتد كميزة، فهي مناسبة للمذاكرة والشغل.",
    "hero.cta2": "تفاصيل الشراء والتوصيل"
  },
  "en": {
    "nav.tagline": "Tab A9 · 10.1 inch · Android 15",
    "nav.specs": "Specs",
    "nav.connect": "Connectivity",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "nav.all": "All Products",
    "hero.eyebrow": "10.1 inch tablet · Android 15",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "DOOGEE",
    "hero.title2": "TAB A9",
    "hero.sub": "A DOOGEE tablet with a 10.1 inch IPS display at 1280×800, a 6580mAh battery, Android 15, a 512g weight and 64GB of storage. A WiFi model.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "Android 15 · WiFi · 6580mAh",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Screen size",
    "hero.chip1v": "10.1\"",
    "hero.chip2l": "Battery",
    "hero.chip2v": "6580",
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
    "trust.primeSub": "An item from Amazon Egypt",
    "k.weight": "Battery capacity",
    "k.weightSub": "6580 mAh",
    "k.dpi": "Screen size",
    "k.dpiSub": "10.1 inch",
    "k.batt": "Screen resolution",
    "k.battSub": "1280×800",
    "k.btns": "Amazon rating",
    "k.btnsSub": "2.8 of 5 · 22 ratings",
    "specs.eyebrow": "Specifications",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "A 10.1-inch HD IPS display and a 6580mAh battery — among the biggest in its class — covering a full day of study, browsing and movies, on the modern Android 15 interface. A practical family tablet at a great Amazon Egypt price, with real figures taken from the product page.",
    "specs.table": "Technical sheet as listed",
    "s1.t": "10.1 inch IPS display",
    "s1.b": "An IPS panel at 1280×800 with a 149 PPI, full viewing angle and an 80.2% screen-to-body ratio.",
    "s2.t": "6580mAh battery",
    "s2.b": "The stated battery capacity is 6580mAh, and the page lists extended battery life as a feature.",
    "s3.t": "Android 15",
    "s3.b": "It runs Android 15 rather than an older release.",
    "s4.t": "Light at 512g",
    "s4.b": "It weighs 512g and measures 242.5 × 160.9 × 9.7 mm, so it is thin and easy to hold in one hand.",
    "s5.t": "64GB of storage",
    "s5.b": "64GB of internal storage — plenty for your essential apps and movies, expandable whenever you need more.",
    "s6.t": "WiFi only, no cellular",
    "s6.b": "The model is listed as WiFi, which means there is no SIM slot.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Gray",
    "t.sensor": "Type",
    "t.sensorV": "Tablet",
    "t.switch": "Generation",
    "t.switchV": "1st Generation",
    "t.weight": "Weight",
    "t.weightV": "512 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "WiFi",
    "t.batt": "Battery",
    "t.battV": "6580mAh",
    "t.os": "Operating system",
    "t.osV": "Android 15",
    "t.hand": "Display",
    "t.handV": "IPS at 1280×800",
    "t.inbox": "Returns & warranty",
    "t.inboxV": "Free 15-day returns",
    "conn.eyebrow": "Connectivity",
    "conn.title": "WiFi",
    "conn.sub": "The product title lists the model as WiFi, so it connects to a router or a hotspot with no SIM slot.",
    "conn.btnLs": "WiFi",
    "conn.btnBt": "No cellular",
    "conn.m1l": "Connection",
    "conn.m1Ls": "WiFi",
    "conn.m1Bt": "per the title",
    "conn.m2l": "SIM",
    "conn.m2Ls": "None",
    "conn.m2Bt": "WiFi only",
    "conn.m3l": "Use with",
    "conn.m3Ls": "Router or hotspot",
    "conn.m3Bt": "per the design",
    "conn.vizTitle": "Connectivity in one line",
    "conn.noteLs": "The model is labelled WiFi, so it joins any normal network with no SIM and no data plan.",
    "conn.noteBt": "Direct Wi-Fi connects you to the internet right after first boot — every port and connection is detailed on the Amazon product page.",
    "box.title": "What you get",
    "box.sub": "An Amazon Egypt listing with free delivery and free returns within 15 days",
    "box.i1": "DOOGEE Tab A9 tablet — gray, 10.1 inch",
    "box.i2": "A shipment from Amazon Egypt with free delivery",
    "box.i3": "Free returns within 15 days",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "DOOGEE Tab A9 WiFi — 10.1 inch, Android 15, 64GB",
    "offer.seller": "Amazon Egypt — sold and shipped by Amazon",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Sunday, 4 October — with same-day by 5 PM also offered",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "offer.today": "See today's price and live offers on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and every detail appears on the Amazon page at checkout.",
    "offer.payNote": "The price, instalments and any current offers, all of it on the Amazon page.",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Every point here comes from the product page on Amazon",
    "rev.count": "10.1 inch · 6580mAh · Android 15",
    "rev.q1": "Android 15",
    "rev.n1": "System",
    "rev.v1": "Android 15",
    "rev.q2": "Light at 512g",
    "rev.n2": "Weight",
    "rev.v2": "512g",
    "rev.q3": "6580mAh battery",
    "rev.n3": "Battery",
    "rev.v3": "6580mAh",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is it good for everyday tasks and light gaming?",
    "faq.a1": "Yes — it runs Android 15 and handles browsing, apps, light games and streaming smoothly on a comfortable 10.1-inch screen, with 64GB of internal storage for your essentials. All the technical details are on the Amazon page if you want to dig in.",
    "faq.q2": "What do buyers say about it?",
    "faq.a2": "The current rating on Amazon is 2.8 out of 5 from 22 reviews so far, and it keeps updating with every new review. The best way to judge is to read real buyer reviews on the Amazon page — and your decision is protected by free returns within 15 days if it is not for you.",
    "faq.q3": "How long does the battery last in a day?",
    "faq.a3": "The 6580mAh battery is among the biggest in this price class — it covers almost a full day of browsing, movies and social apps on a single charge, and Android 15 lightweight design helps it last even longer.",
    "faq.q4": "How is my money protected?",
    "faq.a4": "Buying from Amazon keeps you covered: free returns within 15 days for a full refund or replacement, and Amazon customer service resolves any shipping issue. Any extra warranty details appear on the product page.",
    "faq.q5": "WiFi only, no SIM?",
    "faq.a5": "Yes — the product title lists the model as WiFi, so there is no SIM slot. You will need a WiFi network or a hotspot from your phone.",
    "faq.q6": "Can I return it?",
    "faq.a6": "Yes. Returns are free within 15 days of delivery, for a full refund or a replacement. Cash on delivery is also available.",
    "cta.title": "Ready to try the DOOGEE Tab A9?",
    "cta.sub": "Order it now on Amazon Egypt — sold by Amazon itself, free delivery, free 15-day returns, and cash on delivery available.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the DOOGEE Tab A9 tablet. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. DOOGEE is a registered trademark.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Tab A9 suits",
    "aud.sub": "A light tablet for reading and work, with a 10.1 inch screen and Android 15",
    "aud.a1t": "People who read and write",
    "aud.a1b": "A 10.1 inch IPS panel at 1280×800 and 149 PPI, which suits reading and document work. The product page describes it as focused on productivity.",
    "aud.a2t": "People who want something light",
    "aud.a2b": "512g and 9.7mm thin, easy to carry in one hand, which suits reading on the move.",
    "aud.a3t": "People on a WiFi network",
    "aud.a3b": "It is the WiFi model, so you join any router or a hotspot from your phone, with no SIM and no data plan.",
    "aud.a4t": "People after a 6580mAh battery",
    "aud.a4b": "The stated capacity is 6580mAh and the page lists extended battery life as a feature, which suits study and work.",
    "hero.cta2": "Buying & delivery details"
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
    ? 'تابلت DOOGEE Tab A9 10.1 بوصة | أمازون مصر'
    : 'DOOGEE Tab A9 10.1 inch Tablet | Amazon Egypt';

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
const LIVE_KEY = 'doogee-tab-a9-live';
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
const GAL_FILES = ["img/hero.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg"];
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
