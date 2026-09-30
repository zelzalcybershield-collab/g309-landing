/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0H2JH8ZRV?tag=zoq-21';
const STORE_KEY = 'msi-modern15-lang';

const dict = {
  "ar": {
    "nav.tagline": "Modern 15 F1MG · Urban Silver",
    "nav.specs": "المواصفات",
    "nav.connect": "اللي بيفرق بين الأجهزة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "لابتوب أعمال · 15.6 بوصة",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "MSI Modern 15",
    "hero.title2": "F1MG",
    "hero.sub": "لابتوب أعمال خفيف: معالج Core 5 من إنتل، شاشة FHD ضد الانعكاس، 512GB NVMe، وسنة ضمان دولي",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "لابتوب أعمال خفيف بضمان سنة · 15.6 بوصة FHD",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الضمان",
    "hero.chip1v": "سنة ضمان دولي",
    "hero.chip2l": "الشاشة",
    "hero.chip2v": "15.6 بوصة FHD ضد الانعكاس",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "أمازون: غير مؤهل للدفع عند الاستلام",
    "trust.delivery": "شحن من أمازون",
    "trust.deliverySub": "يُشحن ويُنفَّذ من Amazon.eg مباشرة",
    "trust.returns": "إرجاع خلال 15 يوم",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "ضمان سنة",
    "trust.primeSub": "سنة ضمان دولي مذكورة في وصف المنتج",
    "k.weight": "15.6 بوصة FHD",
    "k.weightSub": "شاشة 1920×1080 ضد الانعكاس",
    "k.dpi": "سنة ضمان دولي",
    "k.dpiSub": "مذكور في وصف المنتج",
    "k.batt": "512GB NVMe",
    "k.battSub": "قرص PCIe من الجيل الرابع",
    "k.btns": "Wi-Fi 6E",
    "k.btnsSub": "Intel AX211",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "سنة ضمان دولي مكتوبة في المنتج",
    "s1.b": "وصف المنتج على أمازون مصر بيذكر ضمان دولي لمدة سنة. ده مش كلام موزّع في الإعلانات — الضمان مذكور في وصف المنتج نفسه، وده اللي بيقلّل قلقك خصوصاً لو هتشتريه للاستخدام اليومي.",
    "s2.t": "شاشة 15.6 بوصة FHD ضد الانعكاس",
    "s2.b": "شاشة 1920×1080 بتقنية IPS-Level مع فلتر ضد الانعكاس. النص بيبقى واضح من غير وهج على الشاشة، وده مهم في الشغل المكتبي والدراسة الطويلة قدام ضوء النهار.",
    "s3.t": "512GB NVMe من الجيل الرابع",
    "s3.b": "قرص PCIe Gen4x4: فتح البرامج والملفات أسرع بكتير من الهارد العادي، والإقلاع بيبقى أسرع. 512 جيجا يكفي للنظام وملفاتك الأساسية من غير ما تفكر في هارد خارجي كل يوم.",
    "s4.t": "Core 5 من إنتل مع Wi-Fi 6E",
    "s4.b": "معالج Intel Core 5 120U كافي للمهام اليومية: إيميلات، مستندات، متصفح، وفيديوهات. ومعاه Wi-Fi 6E (Intel AX211) فالاتصال أسرع وأكثر ثباتاً في الأماكن المزدحمة.",
    "s5.t": "بطارية 46.8Whr ليوم عمل كامل",
    "s5.b": "بطارية من 3 خلايا بسعة 46.8Whr. وصف المنتج على أمازون بيقول إنها تدعم \"all-day work\"، يعني يوم شغل عادي من غير ما تدور على الشاحن في نص اليوم.",
    "s6.t": "يُنفَّذ من Amazon.eg مع إرجاع 15 يوم",
    "s6.b": "المنتج بينفَّذ من Amazon.eg مباشرة، والشحن مجاني والإرجاع متاح خلال 15 يوم.",
    "t.brand": "الماركة",
    "t.model": "MSI Modern 15 F1MG",
    "t.color": "اللون",
    "t.colorV": "Urban Silver — فضي",
    "t.sensor": "المعالج",
    "t.sensorV": "Intel Core 5 120U",
    "t.switch": "كرت الشاشة",
    "t.switchV": "Intel Graphics — مدمج",
    "t.weight": "التصميم",
    "t.weightV": "خفيف ومناسب للتنقل اليومي",
    "t.size": "15.6 بوصة",
    "t.conn": "الشبكة",
    "t.connV": "Wi-Fi 6E · Intel AX211",
    "t.batt": "البطارية",
    "t.battV": "3 خلايا · 46.8Whr",
    "t.os": "نظام التشغيل",
    "t.osV": "يُختار نظام التشغيل عند الشراء",
    "t.hand": "الضمان",
    "t.handV": "سنة ضمان دولي",
    "t.inbox": "كود الموديل",
    "t.inboxV": "9S7-15S112",
    "conn.eyebrow": "اختار على أساس استخدامك",
    "conn.title": "اللي هيفرق معاك فعلاً",
    "conn.sub": "مفيش جهاز أحسن من غيره، فيه جهاز مناسب لاستخدامك. دي مقارنة تاخدها في الاعتبار قبل ما تدفع.",
    "conn.btnLs": "استخدامك: شغل ودراسة",
    "conn.btnBt": "لو بتشتغل على ألعاب",
    "conn.m1l": "اللي بتشغله",
    "conn.m1Ls": "مكتب ودراسة وتصفح",
    "conn.m1Bt": "ألعاب ثلاثية الأبعاد",
    "conn.m2l": "الشاشة",
    "conn.m2Ls": "15.6 بوصة ضد الانعكاس",
    "conn.m2Bt": "شاشة أسرع لو بتلعب",
    "conn.m3l": "اللي بيفرقه",
    "conn.m3Ls": "سنة ضمان دولي",
    "conn.m3Bt": "سعر أعلى بكتير",
    "conn.vizTitle": "الخلاصة",
    "conn.noteLs": "لو يومك بين الإيميلات والمستندات والمكالمات والتصفح، فده الجهاز اللي هيشغل ده بتركيز وراحة، بحجم سعر معقول ومعاها سنة ضمان. شاشة 60 هرتز مريحة للقراءة والكتابة، والقرص السريع بيخلي الشغل ما يتلخبطش.",
    "conn.noteBt": "لو الألعاب جزء أساسي من يومك، فمحتاج جهاز بكارت شاشة مستقل ومعدل تحديث أعلى. ده سعر مختلف تماماً، والقرار هنا حسب أولوياتك أنت.",
    "box.title": "اللي بتستلمه",
    "box.sub": "المؤكد من صفحة المنتج على أمازون",
    "box.i1": "لابتوب MSI Modern 15 F1MG بلون Urban Silver",
    "box.i2": "جهاز خفيف الوزن مصمم للتنقل",
    "box.i3": "يُنفَّذ من Amazon.eg — مش من بائع خارجي",
    "box.i4": "إرجاع متاح خلال 15 يوم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "MSI Modern 15 F1MG Business Laptop — Intel Core 5 120U — Urban Silver",
    "offer.seller": "يُشحن ويُنفَّذ من Amazon.eg",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "الإرجاع",
    "offer.retV": "15 يوم",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج كما وردت في صفحة أمازون مصر",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "سنة ضمان دولي مكتوبة في الوصف",
    "rev.n1": "الضمان",
    "rev.v1": "مكتوب في المنتج",
    "rev.q2": "شاشة FHD ضد الانعكاس 15.6 بوصة",
    "rev.n2": "راحة العين",
    "rev.v2": "للاستخدام اليومي",
    "rev.q3": "يُنفَّذ من Amazon.eg مع إرجاع 15 يوم",
    "rev.n3": "الشراء",
    "rev.v3": "أأمن",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "إيه اللي أعمله بيه؟",
    "faq.a1": "كل الشغل المكتبي والدراسي: إيميلات، مستندات Word وExcel، عروض تقديمية، بحث على الإنترنت، اجتماعات فيديو، وفيديوهات. كمان ممتاز كجهاز للقراءة والتصفح اليومي. معالج Core 5 ورام 8 جيجا وقرص NVMe من الجيل الرابع كفاية للمهام دي كله مع فتح تطبيقات كتير في نفس الوقت.",
    "faq.q2": "نظام التشغيل إيه؟",
    "faq.a2": "المنتج بيوصلك من غير نظام تشغيل مثبت، وده اختيار مش عيب: تقدر تثبّت النظام اللي إنت معتاد عليه، ويندوز أو لينكس، بالشكل اللي يريحك. ابعت سؤال للبائع على أمازون قبل ما تدفع عشان تتأكد من التفاصيل.",
    "faq.q3": "الضمان موجود فعلاً؟",
    "faq.a3": "أيوا. وصف المنتج على أمازون بيذكر «سنة ضمان دولي»، ومكرر في مميزات المنتج. يعني الضمان جزء من مواصفات المنتج المكتوبة على الصفحة، مش وعد شفوي.",
    "faq.q4": "أقدر أدفع عند الاستلام؟",
    "faq.a4": "لأ. صفحة المنتج مكتوب عليها إن المنتج مؤهل للدفع بالبطاقة فقط على صفحة الدفع، وغير مؤهل للدفع عند الاستلام (COD). ادفع بالبطاقة، وكمان أمازون بيعرض التقسيط على بنوك مختارة.",
    "faq.q5": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a5": "أيوا. الإرجاع متاح خلال 15 يوم حسب سياسة أمازون على المنتج. لو الجهاز وصل وحسّيت إنه مش مناسب، ابدأ الإرجاع من صفحة الطلب على أمازون.",
    "faq.q6": "فيه خصم؟",
    "faq.a6": "أي خصومات أو عروض نشطة على المنتج بتظهر على صفحة أمازون نفسها وقت الشراء — الصفحة دي مبتعرضش أكواد خصم.",
    "cta.title": "محتاج لابتوب شغل خفيف؟",
    "cta.sub": "اطلبه من أمازون مصر — Core 5 وشاشة FHD وسنة ضمان دولي",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج MSI Modern 15 F1MG. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "المواصفات",
    "footer.l3": "لماذا Modern 15",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الجهاز ده ليه",
    "aud.title": "اللي هيفيد معاه Modern 15",
    "aud.sub": "لابتوب أعمال خفيف بضمان سنة، للمكتب والدراسة وكل شغل اليوم",
    "aud.a1t": "الموظفين وأصحاب المكاتب",
    "aud.a1b": "شاشة 15.6 بوصة FHD ضد الانعكاس معناها نص واضح من غير وهج، وكيبورد بإضاءة خلفية بيخلي الشغل بالليل مريح. ومعاه سنة ضمان دولي.",
    "aud.a2t": "الطلاب",
    "aud.a2b": "Core 5 مع 8 جيجا رام و512 جيجا هارد كافي للمحاضرات وWord وExcel والبحث. وحجم 15.6 بوصة بياخده معاك في أي شنطة.",
    "aud.a3t": "أصحاب العمل الحر والمشاريع الصغيرة",
    "aud.a3b": "شبكة Wi-Fi 6E بتخلي الاتصال ثابت حتى في المقاهي المزدحمة، والقرص NVMe من الجيل الرابع بيخلي فتح الملفات سريع من غير انتظار.",
    "aud.a4t": "اللي بيدور على جهاز يدوم",
    "aud.a4b": "سنة ضمان دولي مكتوبة في وصف المنتج نفسه. لما تصرف مبلغ كده، الضمان المكتوب ده بيدي راحة تفرق.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس."
  },
  "en": {
    "nav.tagline": "Modern 15 F1MG · Urban Silver",
    "nav.specs": "Specs",
    "nav.connect": "What separates them",
    "nav.aud": "Who for",
    "nav.offer": "Price & buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy now",
    "hero.eyebrow": "Business laptop · 15.6 inch",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "MSI Modern 15",
    "hero.title2": "F1MG",
    "hero.sub": "A light business laptop: Intel Core 5, anti-glare FHD display, 512GB NVMe, and a 1-year international warranty",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "A light business laptop with a 1-year warranty · 15.6 inch FHD",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Warranty",
    "hero.chip1v": "1-year international",
    "hero.chip2l": "Display",
    "hero.chip2v": "15.6 inch FHD anti-glare",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product page on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Amazon: not eligible for cash on delivery",
    "trust.delivery": "Shipped by Amazon",
    "trust.deliverySub": "Shipped and fulfilled by Amazon.eg directly",
    "trust.returns": "Returnable for 15 days",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "1-year warranty",
    "trust.primeSub": "A 1-year international warranty is stated in the description",
    "k.weight": "15.6 inch FHD",
    "k.weightSub": "1920×1080 anti-glare panel",
    "k.dpi": "1-year warranty",
    "k.dpiSub": "Stated in the description",
    "k.batt": "512GB NVMe",
    "k.battSub": "PCIe Gen4 drive",
    "k.btns": "Wi-Fi 6E",
    "k.btnsSub": "Intel AX211",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specs as listed on the amazon.eg product page",
    "specs.table": "The full technical sheet",
    "s1.t": "A 1-year international warranty, written into the listing",
    "s1.b": "The amazon.eg description states a 1-year international warranty. This is not marketing copy bolted onto the title — it is in the product description itself, which takes one concern off the table if you plan to use this every day.",
    "s2.t": "15.6 inch FHD anti-glare display",
    "s2.b": "A 1920×1080 IPS-Level panel with an anti-glare filter. Text stays readable without a glare washing it out, which matters in office work and in long study sessions in daylight.",
    "s3.t": "512GB NVMe on the fourth generation",
    "s3.b": "A PCIe Gen4x4 drive: opening apps and files is far quicker than a mechanical hard drive, and boot-up is faster too. 512GB is enough for the OS and your working files without reaching for external storage daily.",
    "s4.t": "Intel Core 5 with Wi-Fi 6E",
    "s4.b": "The Intel Core 5 120U handles everyday work: email, documents, browsing, and video. Paired with Wi-Fi 6E (Intel AX211) for faster, steadier connections in crowded places.",
    "s5.t": "A 46.8Whr battery for a full working day",
    "s5.b": "A 3-cell 46.8Whr battery. The amazon.eg description says it supports \"all-day work\", so a normal working day without hunting for a charger halfway through.",
    "s6.t": "Fulfilled by Amazon.eg with 15-day returns",
    "s6.b": "The item is fulfilled by Amazon.eg directly, delivery is free, and returns are open for 15 days.",
    "t.brand": "Brand",
    "t.model": "MSI Modern 15 F1MG",
    "t.color": "Colour",
    "t.colorV": "Urban Silver",
    "t.sensor": "Processor",
    "t.sensorV": "Intel Core 5 120U",
    "t.switch": "Graphics",
    "t.switchV": "Intel Graphics — integrated",
    "t.weight": "Design",
    "t.weightV": "Lightweight, built to carry",
    "t.size": "15.6 inches",
    "t.conn": "Network",
    "t.connV": "Wi-Fi 6E · Intel AX211",
    "t.batt": "Battery",
    "t.battV": "3-cell · 46.8Whr",
    "t.os": "Operating system",
    "t.osV": "Operating system chosen at purchase",
    "t.hand": "Warranty",
    "t.handV": "1-year international",
    "t.inbox": "Model code",
    "t.inboxV": "9S7-15S112",
    "conn.eyebrow": "Pick by how you will use it",
    "conn.title": "What will actually matter to you",
    "conn.sub": "No machine is better in the abstract, there is a machine that fits how you work. Here is the comparison to weigh before you spend.",
    "conn.btnLs": "Your use: work and study",
    "conn.btnBt": "If you work on games",
    "conn.m1l": "What you run",
    "conn.m1Ls": "Office, study and browsing",
    "conn.m1Bt": "3D games",
    "conn.m2l": "Display",
    "conn.m2Ls": "15.6 inch anti-glare",
    "conn.m2Bt": "A faster panel if you game",
    "conn.m3l": "What separates them",
    "conn.m3Ls": "1-year warranty",
    "conn.m3Bt": "A lot higher in price",
    "conn.vizTitle": "In short",
    "conn.noteLs": "If your day is email, documents, calls and browsing, this is the machine that will handle it with focus and comfort, at a sensible price and with a year of warranty behind it. A 60Hz panel is easy to read and write on, and the fast drive keeps work from stalling.",
    "conn.noteBt": "If games are a big part of your day you want a discrete GPU and a faster display. That is a very different price, and the call comes down to your own priorities.",
    "box.title": "What you receive",
    "box.sub": "Confirmed on the amazon.eg product page",
    "box.i1": "MSI Modern 15 F1MG laptop in Urban Silver",
    "box.i2": "A lightweight device built to travel",
    "box.i3": "Fulfilled by Amazon.eg — not a third-party seller",
    "box.i4": "Returns available for 15 days",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on amazon.eg",
    "offer.productName": "MSI Modern 15 F1MG Business Laptop — Intel Core 5 120U — Urban Silver",
    "offer.seller": "Shipped and fulfilled by Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery date",
    "offer.shipV": "Check the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15 days",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Purchase and payment happen on amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to choose it",
    "rev.sub": "Product specs as listed on the amazon.eg page",
    "rev.count": "{n} ratings · {r} out of 5",
    "rev.q1": "1-year international warranty in the description",
    "rev.n1": "Warranty",
    "rev.v1": "In writing",
    "rev.q2": "15.6 inch FHD anti-glare display",
    "rev.n2": "Eye comfort",
    "rev.v2": "For daily use",
    "rev.q3": "Fulfilled by Amazon.eg, 15-day returns",
    "rev.n3": "Buying",
    "rev.v3": "Lower risk",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What can I do with it?",
    "faq.a1": "All the office and study work: email, Word and Excel documents, presentations, web research, video calls, and video. It is also a good everyday reading and browsing machine. The Core 5, 8GB of RAM and Gen4 NVMe drive handle all of that with several apps open at once.",
    "faq.q2": "Which operating system does it run?",
    "faq.a2": "It arrives without an operating system installed, which is a choice rather than a flaw: you set up whichever system you actually use, Windows or Linux, the way you want it. Ask the seller on Amazon before you pay to confirm the details.",
    "faq.q3": "Is the warranty real?",
    "faq.a3": "Yes. The description states a 1-year international warranty, and it is repeated in the feature list. So the warranty is part of the published product specs rather than a verbal promise.",
    "faq.q4": "Can I pay cash on delivery?",
    "faq.a4": "No. The product page states this item is eligible for card payment only at checkout and is not eligible for Cash on Delivery (COD). Pay by card; Amazon also offers instalments through select banks.",
    "faq.q5": "Can I return it if I do not like it?",
    "faq.a5": "Yes. Returns are available for 15 days under Amazon policy for this item. If it arrives and turns out not to suit you, start the return from your order page on Amazon.",
    "faq.q6": "Is there a discount?",
    "faq.a6": "Any active discounts or offers on the item appear on Amazon's own page at checkout - this page does not carry discount codes.",
    "cta.title": "Need a light laptop for work?",
    "cta.sub": "Order it on amazon.eg — Core 5, an FHD display, and a 1-year international warranty",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "Want to ask more?",
    "footer.about": "A landing page for the MSI Modern 15 F1MG. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "Specs",
    "footer.l3": "Why the Modern 15",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specs as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Modern 15 suits",
    "aud.sub": "A light business laptop with a 1-year warranty, for the office, study and everyday work",
    "aud.a1t": "Office and desk workers",
    "aud.a1b": "A 15.6 inch FHD anti-glare display keeps text clear without glare, and the white backlit keyboard makes evening work easier. A 1-year international warranty is included.",
    "aud.a2t": "Students",
    "aud.a2b": "A Core 5 with 8GB of RAM and a 512GB drive handles lectures, Word, Excel and research. At 15.6 inches it fits any bag.",
    "aud.a3t": "Freelancers and small business owners",
    "aud.a3b": "Wi-Fi 6E holds a steady connection even in busy cafes, and the Gen4 NVMe drive opens files fast without the wait.",
    "aud.a4t": "Anyone who wants a machine that lasts",
    "aud.a4b": "A 1-year international warranty written into the description. At this price, a warranty in writing is worth a lot of peace of mind.",
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
    ? 'MSI Modern 15 F1MG — لابتوب أعمال Core 5 بشاشة 15.6 بوصة وضمان سنة'
    : 'MSI Modern 15 F1MG — 15.6 inch Core 5 Business Laptop with 1-Year Warranty';

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
const LIVE_KEY = 'msi-modern15-live';
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
const GAL_FILES = ["img/518TZAH-A0L.jpg","img/51nSfv2apFL.jpg","img/51M5RByPO6L.jpg","img/41R8qtzim7L.jpg"];
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
