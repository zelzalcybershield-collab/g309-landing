/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B097YTYVT7?tag=zoq-21';
const STORE_KEY = 'lupo-hdd-enclosure-lang';

const dict = {
  "ar": {
    "nav.tagline": "2.5 بوصة · USB 3.0",
    "nav.specs": "المواصفات",
    "nav.connect": "علبة ولا قرص جاهز",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "علبة قرص خارجية · USB 3.0",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "LUPO",
    "hero.title2": "2.5″ USB 3.0",
    "hero.sub": "علبة خارجية لقرص 2.5 بوصة بواجهة USB 3.0 وSATA — تركيب بدون أدوات وشفافة لتبديد الحرارة",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في الأغلفة الخارجية على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "مقاس القرص",
    "hero.chip1v": "2.5 بوصة",
    "hero.chip2l": "سرعة النقل",
    "hero.chip2v": "5 Gbps",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفها عن قرب",
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
    "trust.returnsSub": "حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.2 من 5 من 856 عميل على أمازون",
    "k.weight": "سرعة النقل",
    "k.weightSub": "على واجهة USB 3.0",
    "k.dpi": "أقصى سعة",
    "k.dpiSub": "قرص 2.5 بوصة HDD أو SSD",
    "k.batt": "الوزن",
    "k.battSub": "70 جرام — سهل الحمل",
    "k.btns": "مقاس القرص",
    "k.btnsSub": "2.5 بوصة SATA",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شفافة ومادة بلاستيك عالية الجودة",
    "s1.b": "مكتوبة في الوصف High quality clear plastic case for effective heat dissipation — يعني شايف القرص من جوه والبلاستيك بيساعد في تبديد الحرارة.",
    "s2.t": "سرعة تصل إلى 5 جيجابيت في الثانية",
    "s2.b": "Super speed 5Gbps على واجهة USB 3.0 — نقل الملفات والنسخ الاحتياطي بسرعة أعلى من USB 2.0 بفرق واضح.",
    "s3.t": "تركيب بدون أدوات",
    "s3.b": "No tools needed — بتفتح العلبة وتحط القرص وتقفلها في دقايق من غير مفك ولا براغي.",
    "s4.t": "سعة تصل إلى 6 تيرابايت",
    "s4.b": "مواصفات الصفحة بتذكر Memory Storage Capacity 6 TB — فتقدر تركّب قرص 2.5 بوصة سعته كبيرة سواء HDD أو SSD.",
    "s5.t": "خفيفة 70 جرام",
    "s5.b": "وزن 70 جرام وأبعاد 12.5 × 7.9 × 1.3 سم — بتحمّلها معاك في الشنطة من غير ما تحس بيها، ومناسبة للنقل.",
    "s6.t": "للحواسب وماك وبلايستيشن",
    "s6.b": "صفحة المنتج بتوثق Hardware Platform بـ Mac و PlayStation و Windows، والتوافق مع Personal Computer — فالقرص بيشتغل على أكتر من جهاز.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "شفاف (Clear)",
    "t.sensor": "النوع",
    "t.sensorV": "علبة خارجية لقرص 2.5 بوصة",
    "t.switch": "رقم الموديل",
    "t.switchV": "BW0206048 CLEAR",
    "t.weight": "الوزن",
    "t.weightV": "70 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "USB 3.0 + SATA",
    "t.batt": "السرعة",
    "t.battV": "حتى 5 جيجابيت في الثانية",
    "t.os": "التوافق",
    "t.osV": "Windows · macOS · PlayStation",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون — استرجاع 15 يوم",
    "t.inbox": "في العلبة",
    "t.inboxV": "العلبة + كابل USB 3.0",
    "conn.eyebrow": "علبة ولا قرص جاهز",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "علبة خارجية وقرص خارجي جاهز — المقارنة بتوضح ليه العلبة أرخص وأمتع لو قرصك جاهز",
    "conn.btnLs": "علبة LUPO 2.5 بوصة (زي دي)",
    "conn.btnBt": "قرص خارجي جاهز",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "تشتري العلبة بس وتضيف القرص اللي عندك",
    "conn.m1Bt": "السعر بيشمل القرص نفسه",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "من عنده قرص 2.5 بوصة قديم عايز يرجعه للحياة",
    "conn.m2Bt": "اللي محتاج قرص جديد جاهز من الصندوق",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "بترفع أي قرص SATA وتشتغل عليه على USB 3.0 بسرعة 5 جيجابيت في الثانية",
    "conn.m3Bt": "بيشتغل على طول بس بمرونة أقل وتغيير القرص أصعب",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو قرصك الـ 2.5 بوصة لسه شغال أو عندك قرص من لابتوب قديم، العلبة بترجعله حياة بسعر أرخص — بتحطه جوا وتوصله USB 3.0 وتستخدمه زي أي قرص خارجي.",
    "conn.noteBt": "القرص الخارجي الجاهز بينقذك من التركيب، بس بتدفع أكتر للقرص نفسه وبتاخد مرونة أقل في تغييره أو إعادة استخدامه لاحقاً.",
    "box.title": "اللي هيوصلك",
    "box.sub": "علبة LUPO وكابل USB 3.0 — زي ما مكتوب Built-In Media في صفحة المنتج، متوفرة على أمازون مصر",
    "box.i1": "علبة LUPO لقرص 2.5 بوصة",
    "box.i2": "كابل USB 3.0",
    "box.i3": "تركيب بدون أدوات",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "LUPO — علبة قرص خارجية 2.5 بوصة USB 3.0 SATA — شفافة",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 4.2 من 5 بناءً على 856 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "5 جيجابيت/ث",
    "rev.n1": "السرعة",
    "rev.v1": "واجهة USB 3.0",
    "rev.q2": "6 تيرابايت",
    "rev.n2": "السعة",
    "rev.v2": "قرص HDD أو SSD",
    "rev.q3": "بدون أدوات",
    "rev.n3": "التركيب",
    "rev.v3": "في دقايق",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "مقاسها كام؟",
    "faq.a1": "العلبة مصممة لقرص 2.5 بوصة، وأبعادها 12.5 × 7.9 × 1.3 سم ووزنها 70 جرام حسب صفحة المنتج.",
    "faq.q2": "بتستقبل كام سعة؟",
    "faq.a2": "مواصفات الصفحة بتذكر سعة 6 تيرابايت، وبتشتغل مع قرص HDD أو SSD بواجهة SATA.",
    "faq.q3": "محتاج أدوات للتركيب؟",
    "faq.a3": "لأ — مكتوبة في الصفحة No tools needed, easily assembles in minutes، يعني بتفتحها وتحط القرص وتقفلها من غير مفك.",
    "faq.q4": "سرعتها كام؟",
    "faq.a4": "واجهة USB 3.0 بسرعة تصل إلى 5 جيجابيت في الثانية — زي ما مكتوب Super speed 5Gbps في وصف المنتج.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "الصفحة بتشاور على استرجاع خلال 15 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز ترجع قرصك للحياة؟",
    "cta.sub": "اطلب علبة LUPO 2.5 بوصة من أمازون مصر — USB 3.0 وتركيب بدون أدوات وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لعلبة LUPO الخارجية لقرص 2.5 بوصة بواجهة USB 3.0. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه LUPO",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "العلبة دي ليه",
    "aud.title": "اللي هيفيد معاه LUPO",
    "aud.sub": "قرصك القديم يرجع يشتغل على USB 3.0 — لكل عايز تخزين أرخص وأسهل",
    "aud.a1t": "اللي عندهم قرص 2.5 بوصة قديم",
    "aud.a1b": "قرص اللابتوب القديم بيتحوّل لقرص خارجي سريع في دقايق — من غير ما ترمي قطعة لسه شغالة.",
    "aud.a2t": "اللي محتاجين نقل سريع للبيانات",
    "aud.a2b": "5 جيجابيت في الثانية على USB 3.0 بتعمل نسخ الملفات الكبيرة والنسخ الاحتياطي أسرع بوضوح.",
    "aud.a3t": "أصحاب ماك وبلايستيشن",
    "aud.a3b": "صفحة المنتج بتوثق التوافق مع Mac و PlayStation و Windows، فالقرص بيشتغل على أكتر من جهاز في البيت.",
    "aud.a4t": "اللي بيدوروا على هدية عملية",
    "aud.a4b": "سعر في المتناول وشكل شفاف بسيط — هدية عملية لحد محتاج تخزين زيادة أو نقل ملفات.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "2.5 inch · USB 3.0",
    "nav.specs": "Specs",
    "nav.connect": "Enclosure vs drive",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "External drive case · USB 3.0",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "LUPO",
    "hero.title2": "2.5″ USB 3.0",
    "hero.sub": "An external case for a 2.5-inch drive over USB 3.0 and SATA — tool-free assembly and a clear shell for heat dissipation",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in drive enclosures on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Drive size",
    "hero.chip1v": "2.5 inch",
    "hero.chip2l": "Transfer speed",
    "hero.chip2v": "5 Gbps",
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
    "trust.returnsSub": "Per Amazon's policy for this item",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.2 out of 5 by 856 customers on Amazon",
    "k.weight": "Transfer speed",
    "k.weightSub": "Over the USB 3.0 interface",
    "k.dpi": "Max capacity",
    "k.dpiSub": "A 2.5-inch HDD or SSD",
    "k.batt": "Weight",
    "k.battSub": "70 g — easy to carry",
    "k.btns": "Drive size",
    "k.btnsSub": "2.5-inch SATA",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Clear, high-quality plastic shell",
    "s1.b": "The listing states a high quality clear plastic case for effective heat dissipation - so you can see the drive inside and the plastic helps move heat out.",
    "s2.t": "Up to 5 Gbps",
    "s2.b": "Super speed 5Gbps over USB 3.0 - file transfers and backups run noticeably faster than on USB 2.0.",
    "s3.t": "Tool-free assembly",
    "s3.b": "No tools needed - open the case, drop the drive in and close it in minutes, no screwdriver and no screws.",
    "s4.t": "Up to 6 TB",
    "s4.b": "The specs list a 6 TB memory storage capacity - so a large 2.5-inch drive fits, whether it is an HDD or an SSD.",
    "s5.t": "70 grams",
    "s5.b": "70 grams and 12.5 × 7.9 × 1.3 cm - it disappears into a bag, which makes it easy to travel with.",
    "s6.t": "PC, Mac and PlayStation",
    "s6.b": "The listing names Mac, PlayStation and Windows as the hardware platform, and a personal computer as compatible - so the drive works across more than one device.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Clear",
    "t.sensor": "Type",
    "t.sensorV": "External case for a 2.5-inch drive",
    "t.switch": "Model number",
    "t.switchV": "BW0206048 CLEAR",
    "t.weight": "Weight",
    "t.weightV": "70 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "USB 3.0 + SATA",
    "t.batt": "Speed",
    "t.battV": "Up to 5 Gbps",
    "t.os": "Compatibility",
    "t.osV": "Windows · macOS · PlayStation",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's policy - 15-day returns",
    "t.inbox": "In the box",
    "t.inboxV": "The case + a USB 3.0 cable",
    "conn.eyebrow": "Enclosure or ready drive",
    "conn.title": "The difference that matters",
    "conn.sub": "An enclosure and a ready-made portable drive - the comparison shows why the enclosure wins if you already have a drive",
    "conn.btnLs": "LUPO 2.5-inch case (this one)",
    "conn.btnBt": "Ready-made portable drive",
    "conn.m1l": "Cost",
    "conn.m1Ls": "You buy the case and add the drive you already own",
    "conn.m1Bt": "The price includes the drive itself",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone with an old 2.5-inch drive to bring back to life",
    "conn.m2Bt": "Anyone who wants a brand-new drive out of the box",
    "conn.m3l": "What changes",
    "conn.m3Ls": "You drop in any SATA drive and run it over USB 3.0 at 5 Gbps",
    "conn.m3Bt": "It works immediately, but with less flexibility and a harder drive swap",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If your 2.5-inch drive still works, or you have one from an old laptop, the case brings it back for less - drop it in, plug it into USB 3.0 and use it like any portable drive.",
    "conn.noteBt": "A ready-made portable drive saves you the assembly, but you pay more for the drive itself and get less flexibility to swap or reuse it later.",
    "box.title": "What arrives",
    "box.sub": "The LUPO case and a USB 3.0 cable - exactly as the Built-In Media field states on the product page, available on Amazon.eg",
    "box.i1": "The LUPO 2.5-inch case",
    "box.i2": "A USB 3.0 cable",
    "box.i3": "Tool-free assembly",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "LUPO — 2.5-inch external HDD/SSD enclosure, USB 3.0 SATA — Clear",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.2 out of 5 rating from 856 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "5 Gbps",
    "rev.n1": "Speed",
    "rev.v1": "USB 3.0 interface",
    "rev.q2": "6 TB",
    "rev.n2": "Capacity",
    "rev.v2": "HDD or SSD",
    "rev.q3": "Tool-free",
    "rev.n3": "Assembly",
    "rev.v3": "In minutes",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What size is it?",
    "faq.a1": "The case is made for a 2.5-inch drive, and the listing gives 12.5 × 7.9 × 1.3 cm at 70 grams.",
    "faq.q2": "How much capacity does it take?",
    "faq.a2": "The specs list a 6 TB capacity, and it works with an HDD or SSD over SATA.",
    "faq.q3": "Do I need tools to assemble it?",
    "faq.a3": "No - the listing says no tools needed, easily assembles in minutes, so you open it, drop the drive in and close it without a screwdriver.",
    "faq.q4": "How fast is it?",
    "faq.a4": "A USB 3.0 interface at up to 5 Gbps - exactly as the listing states, super speed 5Gbps.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing shows a 15-day return window per Amazon’s policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to bring your drive back?",
    "cta.sub": "Order the LUPO 2.5-inch case on Amazon.eg — USB 3.0, tool-free assembly and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the LUPO 2.5-inch external drive case with USB 3.0. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the LUPO",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the LUPO suits",
    "aud.sub": "Your old drive running again over USB 3.0 - for anyone after cheaper, simpler storage",
    "aud.a1t": "Anyone with an old 2.5-inch drive",
    "aud.a1b": "An old laptop drive becomes a fast external drive in minutes - without throwing away a part that still works.",
    "aud.a2t": "Anyone moving data fast",
    "aud.a2b": "5 Gbps over USB 3.0 makes large file copies and backups visibly quicker.",
    "aud.a3t": "Mac and PlayStation owners",
    "aud.a3b": "The listing names Mac, PlayStation and Windows, so the drive serves more than one device at home.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "An approachable price and a plain clear design - a practical gift for anyone who needs extra storage or file transfer.",
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
    ? 'علبة LUPO الخارجية لقرص 2.5 بوصة USB 3.0 | أمازون مصر'
    : 'LUPO 2.5-inch External HDD/SSD Enclosure, USB 3.0 | Amazon Egypt';

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
const LIVE_KEY = 'lupo-hdd-enclosure-live';
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
const GAL_FILES = ["img/lu-00.jpg","img/lu-01.jpg","img/lu-02.jpg","img/lu-03.jpg","img/lu-04.jpg","img/lu-05.jpg","img/lu-06.jpg","img/lu-07.jpg","img/lu-08.jpg"];
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
