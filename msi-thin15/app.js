/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0H2JFT6FV?tag=zoq-21';
const STORE_KEY = 'msi-thin15-lang';

const dict = {
  "ar": {
    "nav.tagline": "THIN 15 · رمادي",
    "nav.specs": "المواصفات",
    "nav.connect": "الشاشة والأداء",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "لابتوب جيمنج · 15.6 بوصة",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "MSI Thin 15",
    "hero.title2": "B13UC",
    "hero.sub": "معالج i7-13620H وشاشة 144Hz وكارت شاشة RTX 3050 مستقل",
    "hero.reviews": "الأكثر مبيعاً في اللابتوبات على أمازون",
    "hero.rank": "#1 في اللابتوبات التقليدية على أمازون",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · يُشحن من Amazon.eg",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "المعالج",
    "hero.chip1v": "i7-13620H",
    "hero.chip2l": "الشاشة",
    "hero.chip2v": "FHD 144Hz",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "ادفع كاش عند الباب",
    "trust.delivery": "شحن من أمازون",
    "trust.deliverySub": "يُشحن بواسطة Amazon.eg مباشرة",
    "trust.returns": "إرجاع مرن",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "#1 في فئته",
    "trust.primeSub": "الأكثر مبيعاً بين اللابتوبات على أمازون",
    "k.weight": "شاشة 144Hz",
    "k.weightSub": "15.6 بوصة FHD بتردد عالي",
    "k.dpi": "10 نوى معالجة",
    "k.dpiSub": "Intel Core i7-13620H",
    "k.batt": "كرت شاشة RTX 3050",
    "k.battSub": "4 جيجا GDDR6 مستقل",
    "k.btns": "واي فاي 6E",
    "k.btnsSub": "Intel AX211",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شاشة 15.6 بوصة FHD بتردد 144Hz",
    "s1.b": "شاشة ips-level بدقة 1920×1080 وتردد 144 هرتز. التردد العالي معناه إطارات أكثر في الثانية، فتلعب وتشاهد أنعم من الشاشات الـ60 هرتز.",
    "s2.t": "كرت شاشة RTX 3050 مستقل",
    "s2.b": "كرت شاشة NVIDIA GeForce RTX 3050 بـ4 جيجا GDDR6 مستقل. ده اللي بيخلّي الألعاب تمشي بسلاسة بدل ما تعتمد على رسومات المعالج المدمجة.",
    "s3.t": "معالج i7-13620H بـ10 نوى",
    "s3.b": "معالج Intel Core i7 من الجيل 13 بـ10 نوى. أداء متكافئ بين اللعب والمهام اليومية والتعديل، من غير ما الجهاز يهنّج مع تعدّد المهام.",
    "s4.t": "16 جيجا رام DDR4 و512 جيجا SSD",
    "s4.b": "ذاكرة 16 جيجا DDR4 بسرعة 3200 ميجاهرتز، وتخزين 512 جيجا من نوع NVMe PCIe Gen4x4: إقلاع وتحميل أسرع، ومساحة كافية للألعاب والتطبيقات.",
    "s5.t": "كيبورد بإضاءة خلفية زرقاء",
    "s5.b": "الكيبورد بإضاءة خلفية زرقاء تديك رؤية واضحة في العتمة من غير ما تفتح لمبة. تصميم خفيف ورفيع يسهل تنقله.",
    "s6.t": "واي فاي 6E من Intel",
    "s6.b": "مودم Intel Wi-Fi 6E AX211 لاتصال سريع ومستقر. مناسب إنك على شبكة بيت فيها أكتر من جهاز شغال في نفس الوقت.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي (Cosmos Gray)",
    "t.sensor": "المعالج",
    "t.sensorV": "Intel Core i7-13620H · 10 نوى",
    "t.switch": "كرت الشاشة",
    "t.switchV": "NVIDIA RTX 3050 · 4GB GDDR6",
    "t.weight": "الشاشة",
    "t.weightV": "15.6\" FHD · 144Hz · IPS-Level",
    "t.size": "الذاكرة",
    "t.conn": "التخزين",
    "t.connV": "16GB DDR4-3200 · 512GB NVMe",
    "t.batt": "نظام التشغيل",
    "t.battV": "غير محدد في صفحة المنتج",
    "t.os": "مميزات خاصة",
    "t.osV": "كيبورد بإضاءة · واي فاي 6E",
    "t.hand": "يُشحن من",
    "t.handV": "Amazon.eg",
    "t.inbox": "مهم قبل الشراء",
    "t.inboxV": "راجع نظام التشغيل مع البائع",
    "conn.eyebrow": "الشاشة والأداء",
    "conn.title": "ليه التردد 144Hz يفرق",
    "conn.sub": "أعلى من التردد اللي متعود عليه، وبتفرق أكتر في الألعاب سريعة الحركة",
    "conn.btnLs": "144Hz",
    "conn.btnBt": "60Hz",
    "conn.m1l": "الإطارات في الثانية",
    "conn.m1Ls": "أكثر بشكل ملحوظ",
    "conn.m1Bt": "أقل بكتير",
    "conn.m2l": "سلاسة الحركة",
    "conn.m2Ls": "حركة أنعم في التصويب",
    "conn.m2Bt": "تباين واضح في اللعب السريع",
    "conn.m3l": "النتيجة",
    "conn.m3Ls": "ألعاب تنافسية أنعم",
    "conn.m3Bt": "يتحمل بس يلاحظ الفرق",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "شاشة 144 هرتز بتعرض إطارات أكتر في الثانية، فالحركة في الألعاب السريعة وتصويبك بيبقى أنعم وأوضح. مع كارت شاشة مستقل، الفرق بيبان في نفس الوقت.",
    "conn.noteBt": "مع 60 هرتز هتلعب عادي، بس لو تلعب ألعاب سريعة أو تنافسية هتحس بالفرق في نعومة الحركة وسرعة استجابة التصويب.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع ويُشحن من أمازون مصر",
    "box.i1": "لابتوب MSI Thin 15 B13UC رمادي",
    "box.i2": "كيبورد بإضاءة خلفية زرقاء",
    "box.i3": "الشاحن والكابل",
    "box.i4": "⚠️ نظام التشغيل مش محدد في الصفحة — راجع البائع",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "MSI Thin 15 B13UC — i7-13620H / RTX 3050 / 16GB — رمادي",
    "offer.seller": "يُشحن من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "الإرجاع",
    "offer.retV": "حسب سياسة أمازون",
    "offer.buyNow": "اشترِ الآن من أمازون",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "offer.syncLabel": "السعر متزامن تلقائياً من صفحة أمازون",
    "offer.syncStale": "تعذّر التحديث، معروض آخر سعر معروف",
    "offer.instTitle": "خيارات التقسيط",
    "offer.instSub": "تقسيط على فترات مختلفة من خلال بنوك مصر",
    "offer.months": "شهر",
    "offer.p1": "13,833.00 EGP / شهرياً",
    "offer.p2": "6,916.50 EGP / شهرياً",
    "offer.p3": "3,458.25 EGP / شهرياً",
    "offer.p4": "1,729.13 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "#1 في فئته على أمازون",
    "rev.q1": "شاشة 15.6 بوصة FHD بتردد 144Hz",
    "rev.n1": "الشاشة",
    "rev.v1": "144Hz",
    "rev.q2": "كرت شاشة RTX 3050 بـ4 جيجا",
    "rev.n2": "الرسوميات",
    "rev.v2": "مستقل",
    "rev.q3": "معالج i7-13620H بـ10 نوى",
    "rev.n3": "المعالج",
    "rev.v3": "الجيل 13",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "نظام التشغيل اللي عليه جاهز؟",
    "faq.a1": "⚠️ صفحة المنتج مذكورهاش نظام التشغيل بشكل صحيح — حقل «نظام التشغيل» فيها مكتوب فيه «New» وده مش نظام تشغيل. اسأل البائع على أمازون قبل ما تشتري، خصوصاً إن السعر 41,499 جنيه.",
    "faq.q2": "ينفع للألعاب؟",
    "faq.a2": "المنتج مُعلن كـلابتوب جيمنج، ومعاه كرت شاشة مستقل RTX 3050 وشاشة بتردد 144Hz. الأداء الفعلي بيعتمد على اللعبة نفسها وعلى الإعدادات اللي تختارها.",
    "faq.q3": "يعني إيه 144Hz؟",
    "faq.a3": "معناها عدد المرات اللي الشاشة بتحدّث فيها كل ثانية. شاشة 144 هرتز بتعرض صورة جديدة 144 مرة في الثانية، وده بيخلّي الحركة في الألعاب أنعم وأوضح من شاشة 60 هرتز.",
    "faq.q4": "فيه واي فاي؟",
    "faq.a4": "أيوه، فيه مودم Intel Wi-Fi 6E AX211، وهو من أحدث معايير الواي فاي وبيصلح للشبكات اللي فيها أجهزة كتير.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "الدفع عند الاستلام متاح على أمازون مصر للمنتج. كمان ممكن تدفع أونلاين أو بالتقسيط حسب البنك.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع حسب سياسة أمازون مصر المطبّقة على المنتج. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تشوف Thin 15؟",
    "cta.sub": "اطلبه من أمازون مصر — شاشة 144Hz وكارت RTX 3050 ومعالج i7",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج MSI Thin 15 B13UC. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Thin 15",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN"
  },
  "en": {
    "nav.tagline": "THIN 15 · Gray",
    "nav.specs": "Specs",
    "nav.connect": "Display & Performance",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming Laptop · 15.6-inch",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "MSI Thin 15",
    "hero.title2": "B13UC",
    "hero.sub": "i7-13620H, a 144Hz display, and dedicated RTX 3050 graphics",
    "hero.reviews": "A best-seller among laptops on Amazon",
    "hero.rank": "#1 in Traditional Laptops on Amazon",
    "hero.priceLabel": "Price incl. tax",
    "hero.vat": "Price includes VAT · Ships from Amazon.eg",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See instalments",
    "hero.chip1l": "CPU",
    "hero.chip1v": "i7-13620H",
    "hero.chip2l": "Display",
    "hero.chip2v": "FHD 144Hz",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Pay at the door",
    "trust.delivery": "Ships from Amazon",
    "trust.deliverySub": "Dispatched directly by Amazon.eg",
    "trust.returns": "Flexible returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "#1 in its class",
    "trust.primeSub": "A best-selling laptop on Amazon",
    "k.weight": "144Hz display",
    "k.weightSub": "15.6-inch FHD at a high refresh rate",
    "k.dpi": "10 processing cores",
    "k.dpiSub": "Intel Core i7-13620H",
    "k.batt": "RTX 3050 graphics",
    "k.battSub": "Dedicated, 4GB GDDR6",
    "k.btns": "Wi-Fi 6E",
    "k.btnsSub": "Intel AX211",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "15.6-inch FHD at 144Hz",
    "s1.b": "An IPS-level 1920×1080 panel running at 144Hz. A higher refresh rate means more frames per second, so games and video look smoother than on a 60Hz screen.",
    "s2.t": "Dedicated RTX 3050 graphics",
    "s2.b": "A dedicated NVIDIA GeForce RTX 3050 with 4GB GDDR6. That's what lets games run smoothly instead of falling back on the CPU's integrated graphics.",
    "s3.t": "i7-13620H with 10 cores",
    "s3.b": "A 13th-generation Intel Core i7 with 10 cores. It balances gaming with everyday work and editing without bogging down when you multitask.",
    "s4.t": "16GB DDR4 and a 512GB SSD",
    "s4.b": "16GB of DDR4 at 3200MHz, plus a 512GB NVMe PCIe Gen4x4 drive: faster boots and load times, with room for your games and apps.",
    "s5.t": "Blue backlit keyboard",
    "s5.b": "The keyboard lights up in blue, so you can still see the keys in the dark without turning on a lamp. The thin, light chassis is easy to carry around.",
    "s6.t": "Intel Wi-Fi 6E",
    "s6.b": "An Intel Wi-Fi 6E AX211 modem for a fast, stable connection — useful on a home network with several devices online at once.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Gray (Cosmos Gray)",
    "t.sensor": "CPU",
    "t.sensorV": "Intel Core i7-13620H · 10 cores",
    "t.switch": "Graphics",
    "t.switchV": "NVIDIA RTX 3050 · 4GB GDDR6",
    "t.weight": "Display",
    "t.weightV": "15.6\" FHD · 144Hz · IPS-Level",
    "t.size": "Memory",
    "t.conn": "Storage",
    "t.connV": "16GB DDR4-3200 · 512GB NVMe",
    "t.batt": "Operating system",
    "t.battV": "Not stated on the listing",
    "t.os": "Special features",
    "t.osV": "Backlit keyboard · Wi-Fi 6E",
    "t.hand": "Ships from",
    "t.handV": "Amazon.eg",
    "t.inbox": "Before you buy",
    "t.inboxV": "Confirm the OS with the seller",
    "conn.eyebrow": "Display & performance",
    "conn.title": "Why 144Hz makes a difference",
    "conn.sub": "A step up from what you're used to, and it shows most in fast-moving games",
    "conn.btnLs": "144Hz",
    "conn.btnBt": "60Hz",
    "conn.m1l": "Frames per second",
    "conn.m1Ls": "Noticeably more",
    "conn.m1Bt": "Considerably fewer",
    "conn.m2l": "Motion clarity",
    "conn.m2Ls": "Smoother aiming",
    "conn.m2Bt": "Obvious difference in fast games",
    "conn.m3l": "Result",
    "conn.m3Ls": "Smoother competitive play",
    "conn.m3Bt": "Playable, but you'll notice",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "A 144Hz panel redraws 144 times a second, so movement in fast games and your aiming look smoother and clearer. Paired with dedicated graphics, the difference shows immediately.",
    "conn.noteBt": "A 60Hz screen plays fine, but in fast or competitive titles you'll feel the difference in motion smoothness and how quickly aiming responds.",
    "box.title": "What arrives in the box",
    "box.sub": "Listed and shipped by Amazon.eg",
    "box.i1": "MSI Thin 15 B13UC laptop, gray",
    "box.i2": "Blue backlit keyboard",
    "box.i3": "Charger and cable",
    "box.i4": "⚠️ The OS is not stated on the listing — ask the seller",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "MSI Thin 15 B13UC — i7-13620H / RTX 3050 / 16GB — Gray",
    "offer.seller": "Ships from Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "Per Amazon's policy",
    "offer.buyNow": "Buy now on Amazon",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "offer.syncLabel": "Price syncs automatically from the Amazon listing",
    "offer.syncStale": "Update failed — showing the last known price",
    "offer.instTitle": "Instalment options",
    "offer.instSub": "Pay over time through Egyptian banks",
    "offer.months": "months",
    "offer.p1": "EGP 13,833.00 / mo",
    "offer.p2": "EGP 6,916.50 / mo",
    "offer.p3": "EGP 3,458.25 / mo",
    "offer.p4": "EGP 1,729.13 / mo",
    "offer.instNote": "Figures are indicative and depend on your bank and the active offers",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the manufacturer's published specifications",
    "rev.count": "#1 in its class on Amazon",
    "rev.q1": "15.6-inch FHD at 144Hz",
    "rev.n1": "Display",
    "rev.v1": "144Hz",
    "rev.q2": "RTX 3050 with 4GB GDDR6",
    "rev.n2": "Graphics",
    "rev.v2": "Dedicated",
    "rev.q3": "i7-13620H with 10 cores",
    "rev.n3": "CPU",
    "rev.v3": "13th gen",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Which operating system does it come with?",
    "faq.a1": "⚠️ The listing doesn't state this correctly — the operating system field says \"New\", which isn't an operating system. Ask the seller on Amazon before you buy, especially at EGP 41,499.",
    "faq.q2": "Is it good for games?",
    "faq.a2": "It's advertised as a gaming laptop, with a dedicated RTX 3050 and a 144Hz display. Real performance depends on the game and the settings you pick.",
    "faq.q3": "What does 144Hz mean?",
    "faq.a3": "It's how many times per second the display redraws. A 144Hz screen draws a new image 144 times a second, which makes movement in games smoother and clearer than a 60Hz screen.",
    "faq.q4": "Does it have Wi-Fi?",
    "faq.a4": "Yes — an Intel Wi-Fi 6E AX211 modem, one of the latest Wi-Fi standards, and it handles busy networks well.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Cash on delivery is available on Amazon.eg for this item. You can also pay online or in instalments depending on your bank.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns follow the Amazon.eg policy that applies to this product. Check the return policy on the product page before you buy.",
    "cta.title": "Ready to look at the Thin 15?",
    "cta.sub": "Order it on Amazon.eg — 144Hz display, RTX 3050 graphics and an i7",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the MSI Thin 15 B13UC. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Thin 15",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN"
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
    ? 'MSI Thin 15 B13UC — لابتوب جيمنج i7-13620H وشاشة 144Hz'
    : 'MSI Thin 15 B13UC — i7-13620H Gaming Laptop with a 144Hz Display';

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

/* ---------- live price (price.json) ----------
   price.json is written by scripts/update-price.mjs on a cron
   (see .github/workflows/price.yml). The page only reads it,
   so no secret ever ships to the browser.                        */

const PRICE_URL = 'price.json';
const LIVE_KEY = 'msi-thin15-live';
const LIVE_TTL = 8 * 60 * 60 * 1000; // 8h — keep a copy a bit longer than the cron

let live = null; // last known good data, or null if price.json has never loaded

const fmtPrice = (n) =>
  Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

function fmtDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-EG', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    }).format(d);
  } catch {
    return d.toISOString().slice(0, 16).replace('T', ' ');
  }
}

/* substitutes {n} reviews / {r} rating inside i18n strings */
function applyTokens() {
  if (!live) return;
  const n = Number(live.reviews) || 0;
  const r = Number(live.rating) || 0;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const raw = t(el.dataset.i18n);
    if (!raw.includes('{')) return;
    el.textContent = raw
      .replace(/\{n\}/g, n.toLocaleString('en-US'))
      .replace(/\{r\}/g, r.toFixed(1));
  });
}

function renderLive() {
  if (!live) return;

  if (live.price != null) {
    document.querySelectorAll('[data-bind="price"]').forEach((el) => { el.textContent = fmtPrice(live.price); });
  }
  if (live.rating != null) {
    document.querySelectorAll('[data-bind="rating"]').forEach((el) => { el.textContent = Number(live.rating).toFixed(1); });
  }
  if (live.updatedAt) {
    const label = document.querySelector('[data-bind="updatedAt"]');
    if (label) label.textContent = fmtDate(live.updatedAt) + (live.stale ? ' ' + t('offer.syncStale') : '');
  }

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
  // 1) show the cached copy immediately so the page never flashes a stale hardcoded price
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

/* ---------- coupon copy ---------- */
function initCopy() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const code = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(code);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const label = btn.querySelector('span:last-child');
      const prev = label.textContent;
      label.textContent = lang === 'ar' ? 'تم النسخ ✓' : 'Copied ✓';
      setTimeout(() => { label.textContent = prev; }, 1600);
    });
  });
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
const GAL_FILES = ["img/msi-00.jpg","img/msi-01.jpg","img/msi-02.jpg","img/msi-03.jpg","img/msi-04.jpg","img/msi-05.jpg","img/msi-06.jpg"];
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
  initCopy();
  initCounters();
  initScroll();
  initGallery();
  initLivePrice();
});
