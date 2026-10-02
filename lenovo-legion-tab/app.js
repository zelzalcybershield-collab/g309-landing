/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0H2F9P83H?tag=zoq-21';
const STORE_KEY = 'lenovo-legion-tab-lang';

const dict = {
  "ar": {
    "nav.tagline": "Legion Tab · 8.8 بوصة · Snapdragon 8 Gen 3",
    "nav.specs": "المواصفات",
    "nav.connect": "الاتصال",
    "nav.aud": "لمين تنفع",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة",
    "nav.buy": "اشتري دلوقتي",
    "nav.all": "كل المنتجات",
    "hero.eyebrow": "تابلت جيمنج 8.8 بوصة · Snapdragon 8 Gen 3",
    "hero.stock": "متوفر",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Lenovo",
    "hero.title2": "LEGION TAB",
    "hero.sub": "تابلت جيمنج من Lenovo بشاشة QHD+ مقاس 8.8 بوصة، معالج Snapdragon 8 Gen 3، ذاكرة 12GB LPDDR5X وتخزين 256GB UFS 4.0، وموديل واي فاي بس. الباقة بتشمل هدية: سماعة Soundcore by Anker Q20i.",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "Snapdragon 8 Gen 3 · 12GB · 256GB",
    "hero.buy": "اشتري وشوف سعر اليوم — اضغط هنا",
    "hero.chip1l": "حجم الشاشة",
    "hero.chip1v": "8.8\"",
    "hero.chip2l": "ذاكرة عشوائية",
    "hero.chip2v": "12GB",
    "gal.eyebrow": "المنتج",
    "gal.title": "شوفها من قرب",
    "gal.sub": "صور من صفحة المنتج الرسمية على أمازون مصر — اضغط أي صورة لتكبيرها.",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "اقفل",
    "gal.label": "صورة المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "دفع إلكتروني — بدون كاش",
    "trust.delivery": "شحن من أمازون",
    "trust.deliverySub": "بيع وشحن مباشرة من Amazon.eg",
    "trust.returns": "استرجاع مرن",
    "trust.returnsSub": "15 يوم من الاستلام",
    "trust.prime": "يبيعه أمازون نفسه",
    "trust.primeSub": "بيع وشحن من Amazon.eg مباشرة",
    "k.weight": "الذاكرة العشوائية",
    "k.weightSub": "12 GB LPDDR5X",
    "k.dpi": "حجم الشاشة",
    "k.dpiSub": "8.8 بوصة",
    "k.batt": "الوزن",
    "k.battSub": "350 جرام",
    "k.btns": "التقييم على أمازون",
    "k.btnsSub": "5.0 من 5 · 2 تقييم",
    "specs.eyebrow": "المواصفات",
    "specs.title": "اللي صفحة المنتج بتأكده",
    "specs.sub": "دي كل المواصفات اللي صفحة Lenovo Legion Tab TB321FU على أمازون مصر بتذكرها. الصفحة بتركّز على المعالج والذاكرة والباقة وطبيعة الاتصال؛ ومش بتذكر النظام ولا البطارية ولا الأبعاد. فبنعرض اللي في الصفحة بس، ومش هنخترع أرقام.",
    "specs.table": "الورقة الفنية كما وردت",
    "s1.t": "معالج Snapdragon 8 Gen 3",
    "s1.b": "Qualcomm Snapdragon 8 Gen 3 بثمانية أنوية: قلب واحد Cortex-X4، وخمسة أنوية Cortex-A720، واتنين Cortex-A520 — زي ما ورد في المواصفات.",
    "s2.t": "ذاكرة 12GB وتخزين 256GB",
    "s2.b": "12GB رام LPDDR5X ملحومة مع تخزين داخلي 256GB UFS 4.0 — دي الأرقام المذكورة صراحة في العنوان والمواصفات.",
    "s3.t": "رسوميات Adreno",
    "s3.b": "معالج رسوميات Qualcomm Adreno مدمج في نفس مجموعة Snapdragon 8 Gen 3، ومخصص للجيمنج والوسائط.",
    "s4.t": "الباقة فيها هدية Soundcore",
    "s4.b": "الباقة بتشمل سماعة Soundcore by Anker Q20i Hybrid Active كهدية مع الشراء — مذكورة في عنوان الصفحة وفي المواصفات.",
    "s5.t": "واي فاي بس من غير شريحة",
    "s5.b": "الموديل مذكور بأنه Wi-Fi Only، يعني اتصال براوتر أو هوت سبوت من غير خانة شريحة.",
    "s6.t": "خفيف 350 جرام وضمان سنة",
    "s6.b": "الوزن المذكور 350 جرام، والضمان سنة واحدة بنوع Carry-in (تسليم الجهاز للصيانة).",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "غير محدد في الصفحة",
    "t.sensor": "النوع",
    "t.sensorV": "تابلت",
    "t.switch": "الطراز",
    "t.switchV": "TB321FU",
    "t.weight": "الوزن",
    "t.weightV": "350 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "واي فاي",
    "t.batt": "البطارية",
    "t.battV": "غير محددة في الصفحة",
    "t.os": "النظام",
    "t.osV": "غير محدد في الصفحة",
    "t.hand": "الشاشة",
    "t.handV": "QHD+ — جيمنج",
    "t.inbox": "الضمان",
    "t.inboxV": "سنة واحدة — Carry-in",
    "conn.eyebrow": "الاتصال",
    "conn.title": "واي فاي",
    "conn.sub": "الموديل مذكور في عنوان المنتج بأنه Wi-Fi Only، يعني بيتوصل براوتر أو هوت سبوت، ومن غير خانة شريحة.",
    "conn.btnLs": "واي فاي",
    "conn.btnBt": "من غير شريحة",
    "conn.m1l": "الاتصال",
    "conn.m1Ls": "واي فاي",
    "conn.m1Bt": "حسب العنوان",
    "conn.m2l": "الشريحة",
    "conn.m2Ls": "مفيش",
    "conn.m2Bt": "Wi-Fi Only",
    "conn.m3l": "الاستخدام",
    "conn.m3Ls": "براوتر أو هوت سبوت",
    "conn.m3Bt": "حسب التصميم",
    "conn.vizTitle": "الاتصال في سطر",
    "conn.noteLs": "الموديل واي فاي بس: بيرتبط بأي شبكة عادية من غير شريحة ولا باقات بيانات.",
    "conn.noteBt": "ملاحظة أمانة: صفحة المنتج ما بتحددش منافذ الشحن والصوت ولا البلوتوث ولا الكاميرات.",
    "box.title": "اللي هتستلمه",
    "box.sub": "باقة على أمازون مصر — التابلت مع هدية Soundcore",
    "box.i1": "تابلت Lenovo Legion Tab TB321FU — 12GB · 256GB",
    "box.i2": "سماعة Soundcore by Anker Q20i — هدية ضمن الباقة",
    "box.i3": "شحنة من أمازون مصر بتوصيل مجاني",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشتري على أمازون مصر",
    "offer.productName": "Lenovo Legion Tab TB321FU — 12GB LPDDR5X، 256GB UFS 4.0، واي فاي، مع هدية Soundcore Q20i",
    "offer.seller": "أمازون مصر — يبيع المنتج ويشحنه بنفسه (Ships from and sold by Amazon.eg)",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "توصيل مجاني عبر Amazon.eg — التواريخ الدقيقة من صفحة أمازون",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "اشتري وشوف سعر اليوم — اضغط هنا",
    "offer.checkout": "الدفع والشراء بيتموا على أمازون مصر",
    "offer.today": "شوف سعر اليوم والعروض المتاحة من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "الدفع إلكتروني بالبطاقة أو خيارات التقسيط حسب المنتج والبطاقة، وكل التفاصيل بتظهر على صفحة أمازون لحظة الشراء. الدفع عند الاستلام غير متاح لهذا المنتج.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية، كل ده على صفحة أمازون.",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "كل نقطة هنا من صفحة المنتج على أمازون",
    "rev.count": "Snapdragon 8 Gen 3 · 12GB · 256GB",
    "rev.q1": "Snapdragon 8 Gen 3",
    "rev.n1": "المعالج",
    "rev.v1": "8 Gen 3",
    "rev.q2": "12GB رام + 256GB",
    "rev.n2": "الذاكرة والتخزين",
    "rev.v2": "LPDDR5X + UFS 4.0",
    "rev.q3": "هدية Soundcore",
    "rev.n3": "الباقة",
    "rev.v3": "Q20i Hybrid Active",
    "faq.eyebrow": "أسئلة",
    "faq.title": "أسئلة المشترين",
    "faq.q1": "كام بوصة الشاشة؟",
    "faq.a1": "جدول بيانات الصفحة ما بيذكرش حجم الشاشة صراحة، لكن موديل Legion Tab (TB321FU) معروف بشاشة 8.8 بوصة QHD+ مخصصة للعرض، وده اللي بيظهر كمان في عروض أمازون لنفس الموديل. لو عايز التأكيد النهائي، افتح الصفحة على أمازون.",
    "faq.q2": "التقييم 5.0 من 5 — بجد؟",
    "faq.a2": "رقم مأخوذ من صفحة أمازون كما هو: 5.0 من 5. لكن عينة التقييمات صغيرة جدًا (تقييمَين بس)، فهي مش مؤشر موثوق على التجربة الحقيقية. لو التقييم مهم ليك، افتح التقييمات على أمازون واقرأها بنفسك.",
    "faq.q3": "سماعة Soundcore هدية فعلًا؟",
    "faq.a3": "الباقة مكتوب عليها إنها بتشمل Soundcore by Anker Q20i Hybrid Active كهدية مع الشراء — دي جزء من هذا العرض تحديدًا. محتويات كل شحنة بتتأكد من صفحة أمازون لحظة الشراء.",
    "faq.q4": "فيه ضمان؟",
    "faq.a4": "جدول بيانات المنتج مكتوب فيه ضمان سنة واحدة بنوع Carry-in (بتسلّم الجهاز للصيانة)، ومدة الاسترجاع 15 يوم من الاستلام. التفاصيل الدقيقة بيحددها سياسة Lenovo في مصر.",
    "faq.q5": "الدفع عند الاستلام متاح؟",
    "faq.a5": "لأ، غير متاح لهذا المنتج — صفحة أمازون بترفض الـCOD هنا. الدفع إلكتروني بالبطاقة أو التقسيط، وكل الطرق المتاحة بتظهر على صفحة أمازون أثناء الدفع.",
    "faq.q6": "أقدر أرجعه؟",
    "faq.a6": "أيوه، الاسترجاع خلال 15 يوم من الاستلام باسترداد كامل أو استبدال، وتاريخ التوصيل الدقيق بيبان على صفحة أمازون عند الشراء.",
    "cta.title": "جاهز تجرب Lenovo Legion Tab؟",
    "cta.sub": "اطلبه دلوقتي على أمازون مصر — يبيعه أمازون نفسه، توصيل مجاني، مدة استرجاع 15 يوم، والدفع ببطاقة أو تقسيط.",
    "cta.buy": "اطلب على أمازون وشوف سعر اليوم",
    "cta.questions": "عندك أسئلة تانية؟",
    "footer.about": "صفحة هبوط لتابلت Lenovo Legion Tab TB321FU. الأسعار والتوفر مأخوذة من صفحة المنتج على أمازون مصر وقت النشر.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "اشتري على أمازون",
    "footer.l2": "اللي في العلبة",
    "footer.l3": "تقييمات العملاء",
    "footer.disclaimer": "الأسعار والأرقام ممكن تتغير حسب التوفر والعروض. Lenovo وSoundcore علامتان تجاريتان مسجلتان.",
    "footer.madeBy": "صفحة هبوط · عربي / إنجليزي",
    "aud.eyebrow": "لمين تنفع",
    "aud.title": "مين هيلاقي فيها فايدة",
    "aud.sub": "تابلت جيمنج بإمكانيات قوية لمحبي الألعاب والاستخدام الشاق والمتنقل",
    "aud.a1t": "اللاعبين",
    "aud.a1b": "معالج Snapdragon 8 Gen 3 وشاشة QHD+ ورسوميات Adreno — الباقة اتسوّقت كمنتج جيمنج في العنوان والمواصفات.",
    "aud.a2t": "اللي عايز ذاكرة كبيرة",
    "aud.a2b": "12GB LPDDR5X مع تخزين 256GB UFS 4.0 — أرقام مذكورة صراحة في العنوان.",
    "aud.a3t": "اللي على شبكة واي فاي",
    "aud.a3b": "الموديل Wi-Fi Only، بيرتبط بأي راوتر أو هوت سبوت من غير شريحة.",
    "aud.a4t": "اللي بيحب الصفقة في الباقة",
    "aud.a4b": "الباقة بتشمل سماعة Soundcore by Anker Q20i كهدية مع التابلت.",
    "hero.cta2": "تفاصيل الشراء والتوصيل"
  },
  "en": {
    "nav.tagline": "Legion Tab · 8.8 inch · Snapdragon 8 Gen 3",
    "nav.specs": "Specifications",
    "nav.connect": "Connectivity",
    "nav.aud": "Who it is for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "nav.all": "All Products",
    "hero.eyebrow": "8.8 inch gaming tablet · Snapdragon 8 Gen 3",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Lenovo",
    "hero.title2": "LEGION TAB",
    "hero.sub": "A Lenovo gaming tablet with a QHD+ 8.8 inch display, Snapdragon 8 Gen 3, 12GB LPDDR5X RAM and 256GB UFS 4.0 storage, and it is a WiFi-only model. The bundle includes a Soundcore by Anker Q20i as a gift.",
    "hero.reviews": "from {n} ratings on Amazon",
    "hero.rank": "Snapdragon 8 Gen 3 · 12GB · 256GB",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Screen size",
    "hero.chip1v": "8.8\"",
    "hero.chip2l": "RAM",
    "hero.chip2v": "12GB",
    "gal.eyebrow": "The product",
    "gal.title": "See it up close",
    "gal.sub": "Images from the official product page on Amazon Egypt — click any one to enlarge.",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product image",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Electronic payment — no cash",
    "trust.delivery": "Ships from Amazon",
    "trust.deliverySub": "Sold and shipped by Amazon.eg directly",
    "trust.returns": "Flexible returns",
    "trust.returnsSub": "15 days from delivery",
    "trust.prime": "Sold by Amazon itself",
    "trust.primeSub": "Sold and shipped by Amazon.eg directly",
    "k.weight": "RAM",
    "k.weightSub": "12 GB LPDDR5X",
    "k.dpi": "Screen size",
    "k.dpiSub": "8.8 inch",
    "k.batt": "Weight",
    "k.battSub": "350 g",
    "k.btns": "Amazon rating",
    "k.btnsSub": "5.0 of 5 · 2 ratings",
    "specs.eyebrow": "Specifications",
    "specs.title": "What the product page confirms",
    "specs.sub": "These are all the specifications the Lenovo Legion Tab TB321FU page on Amazon Egypt lists. The listing focuses on the processor, memory, bundle and connectivity; it states no operating system, battery or dimensions. So we show only what the page shows — we are not inventing figures.",
    "specs.table": "Technical sheet as listed",
    "s1.t": "Snapdragon 8 Gen 3 processor",
    "s1.b": "A Qualcomm Snapdragon 8 Gen 3 with eight cores: one Cortex-X4, five Cortex-A720 and two Cortex-A520 — as listed in the specs.",
    "s2.t": "12GB with 256GB of storage",
    "s2.b": "12GB of soldered LPDDR5X RAM with 256GB of UFS 4.0 internal storage — the figures stated outright in the title and the specs.",
    "s3.t": "Adreno graphics",
    "s3.b": "The integrated Qualcomm Adreno GPU, part of the same Snapdragon 8 Gen 3 package, aimed at gaming and media.",
    "s4.t": "The bundle includes a Soundcore gift",
    "s4.b": "The bundle ships with Soundcore by Anker Q20i Hybrid Active headphones as a complimentary gift — stated in the title and the specs.",
    "s5.t": "WiFi only, no SIM",
    "s5.b": "The model is listed as Wi-Fi Only, so it joins a router or a hotspot with no SIM slot.",
    "s6.t": "Light at 350g with a 1-year warranty",
    "s6.b": "The listed weight is 350 grams, and the warranty is one year, carry-in type.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Not stated on the page",
    "t.sensor": "Type",
    "t.sensorV": "Tablet",
    "t.switch": "Model number",
    "t.switchV": "TB321FU",
    "t.weight": "Weight",
    "t.weightV": "350 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "WiFi",
    "t.batt": "Battery",
    "t.battV": "Not stated on the page",
    "t.os": "Operating system",
    "t.osV": "Not stated on the page",
    "t.hand": "Display",
    "t.handV": "QHD+ — gaming",
    "t.inbox": "Warranty",
    "t.inboxV": "1 year — Carry-in",
    "conn.eyebrow": "Connectivity",
    "conn.title": "WiFi",
    "conn.sub": "The product title lists the model as Wi-Fi Only, so it connects to a router or a hotspot with no SIM slot.",
    "conn.btnLs": "WiFi",
    "conn.btnBt": "No SIM",
    "conn.m1l": "Connection",
    "conn.m1Ls": "WiFi",
    "conn.m1Bt": "per the title",
    "conn.m2l": "SIM",
    "conn.m2Ls": "None",
    "conn.m2Bt": "Wi-Fi Only",
    "conn.m3l": "Use with",
    "conn.m3Ls": "Router or hotspot",
    "conn.m3Bt": "per the design",
    "conn.vizTitle": "Connectivity in one line",
    "conn.noteLs": "The model is WiFi only: it joins any normal network with no SIM and no data plan.",
    "conn.noteBt": "An honest note: the product page does not state the charging or audio ports, Bluetooth or the cameras.",
    "box.title": "What you get",
    "box.sub": "A bundle on Amazon Egypt — the tablet with a Soundcore gift",
    "box.i1": "Lenovo Legion Tab TB321FU tablet — 12GB · 256GB",
    "box.i2": "Soundcore by Anker Q20i — a gift in the bundle",
    "box.i3": "A shipment from Amazon Egypt with free delivery",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon Egypt",
    "offer.productName": "Lenovo Legion Tab TB321FU — 12GB LPDDR5X, 256GB UFS 4.0, WiFi, with a Soundcore Q20i gift",
    "offer.seller": "Amazon Egypt — sold and shipped by Amazon itself (Ships from and sold by Amazon.eg)",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free delivery via Amazon.eg — exact dates shown on the Amazon page",
    "offer.ret": "Return window",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon Egypt",
    "offer.today": "See today's price and live offers on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Payment is electronic by card or via the instalment options depending on the item and your card, and every detail appears on the Amazon page at checkout. Cash on delivery is not available for this item.",
    "offer.payNote": "The price, instalments and any current offers, all of it on the Amazon page.",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Every point here comes from the product page on Amazon",
    "rev.count": "Snapdragon 8 Gen 3 · 12GB · 256GB",
    "rev.q1": "Snapdragon 8 Gen 3",
    "rev.n1": "Processor",
    "rev.v1": "8 Gen 3",
    "rev.q2": "12GB RAM + 256GB",
    "rev.n2": "Memory & storage",
    "rev.v2": "LPDDR5X + UFS 4.0",
    "rev.q3": "Soundcore gift",
    "rev.n3": "The bundle",
    "rev.v3": "Q20i Hybrid Active",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What screen size is it?",
    "faq.a1": "The listing's data table does not state the screen size, but the Legion Tab (TB321FU) is known as an 8.8 inch QHD+ gaming screen, and that is what Amazon's own cross-listings for the same model show. For the final word, open the page on Amazon.",
    "faq.q2": "The rating is 5.0 out of 5 — really?",
    "faq.a2": "The figure comes from the Amazon page as it stands: 5.0 out of 5. But the sample is very small — just two ratings — so it is not a reliable signal about the real experience. If the rating matters, open the reviews on Amazon and read them yourself.",
    "faq.q3": "Is the Soundcore really a gift?",
    "faq.a3": "The bundle is listed as including Soundcore by Anker Q20i Hybrid Active headphones as a complimentary gift — it is part of this specific offer. Every shipment's contents are confirmed on the Amazon page at checkout.",
    "faq.q4": "Is it under warranty?",
    "faq.a4": "The listing's data table states a one-year warranty of the carry-in type. The fine print is set by Lenovo's policy in Egypt.",
    "faq.q5": "Is cash on delivery available?",
    "faq.a5": "No — cash on delivery is not available for this item; the Amazon page refuses COD here. Payment is electronic by card or instalments, and every available method appears on the Amazon page at checkout.",
    "faq.q6": "Can I return it?",
    "faq.a6": "Yes — returns are allowed within 15 days of delivery for a full refund or replacement. The exact delivery date appears on the Amazon page at checkout.",
    "cta.title": "Ready to try the Lenovo Legion Tab?",
    "cta.sub": "Order it now on Amazon Egypt — sold by Amazon itself, free delivery, a 15-day return window, and payment by card or instalments.",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "A landing page for the Lenovo Legion Tab TB321FU tablet. All prices and availability are taken from the Amazon Egypt product page at the time of publishing.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "What's in the box",
    "footer.l3": "Customer reviews",
    "footer.disclaimer": "Prices and figures may change with availability and offers. Lenovo and Soundcore are registered trademarks.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Legion Tab suits",
    "aud.sub": "A powerful gaming tablet for gamers, heavy use and life on the move",
    "aud.a1t": "Gamers",
    "aud.a1b": "A Snapdragon 8 Gen 3, a QHD+ screen and Adreno graphics — the listing markets the bundle as a gaming product in its title and specs.",
    "aud.a2t": "People who want a lot of memory",
    "aud.a2b": "12GB of LPDDR5X with 256GB of UFS 4.0 storage — figures stated outright in the title.",
    "aud.a3t": "People on a WiFi network",
    "aud.a3b": "The model is Wi-Fi Only, so it joins any router or hotspot with no SIM slot.",
    "aud.a4t": "People who want the bundle deal",
    "aud.a4b": "The bundle includes a Soundcore by Anker Q20i with the tablet.",
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
    ? 'تابلت Lenovo Legion Tab TB321FU 12GB | أمازون مصر'
    : 'Lenovo Legion Tab TB321FU 12GB Tablet | Amazon Egypt';

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
const LIVE_KEY = 'lenovo-legion-tab-live';
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
