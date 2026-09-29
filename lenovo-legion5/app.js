/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0H9S4JPML?tag=zoq-21';
const STORE_KEY = 'lenovo-legion5-lang';

const dict = {
  "ar": {
    "nav.tagline": "LEGION 5 · أسود",
    "nav.specs": "المواصفات",
    "nav.connect": "الأداء الرسومي",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "لابتوب جيمنج · 15.6 بوصة",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Lenovo Legion 5",
    "hero.title2": "15IRX10",
    "hero.sub": "معالج i7-14700HX بـ20 نواة، كارت شاشة RTX 5060، و32 جيجا رام DDR5",
    "hero.reviews": "{n} تقييم على أمازون",
    "hero.rank": "موديل Legion 5 · إصدار 15IRX10",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · يُشحن من Amazon.eg",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "المعالج",
    "hero.chip1v": "i7-14700HX",
    "hero.chip2l": "كرت الشاشة",
    "hero.chip2v": "RTX 5060",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "دفع إلكتروني — من غير كاش",
    "trust.delivery": "شحن من أمازون",
    "trust.deliverySub": "يُشحن بواسطة Amazon.eg مباشرة",
    "trust.returns": "إرجاع مرن",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "بائع موثّق",
    "trust.primeSub": "المنتج معروض للبيع على أمازون مصر",
    "k.weight": "معالج 20 نواة",
    "k.weightSub": "Intel Core i7-14700HX",
    "k.dpi": "32 جيجا رام",
    "k.dpiSub": "DDR5-5600 ثنائي القناة (2×16GB)",
    "k.batt": "كرت شاشة RTX 5060",
    "k.battSub": "8 جيجا GDDR7 · 572 AI TOPS",
    "k.btns": "1 تيرا SSD",
    "k.btnsSub": "PCIe 4.0 NVMe",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "20 نواة في معالج واحد",
    "s1.b": "معالج Intel Core i7-14700HX بـ20 نواة يجمع بين نوى أداء ونوى كفاءة، فتقدر تشغّل ألعاب تقيلة وتقفل معاها مشاريع ومتصفحات كتير من غير ما الجهاز يهنّج.",
    "s2.t": "32 جيجا رام DDR5-5600",
    "s2.b": "ذاكرة 32 جيجا DDR5-5600 في إعداد ثنائي القناة (2×16GB SODIMM). مساحتك كفاية تفتح مشاريع كتير والتعديلات والمتصفحات مع بعض، من غير ما الجهاز يعتمد على القرص الصلب.",
    "s3.t": "كرت شاشة RTX 5060 مستقل",
    "s3.b": "كرت شاشة مستقل NVIDIA GeForce RTX 5060 بذاكرة 8 جيجا GDDR7. ده اللي بيخلّي الألعاب تشتغل بإعدادات عالية، وبيخلّي الجهاز يرسم الرسومات بمفرده عن المعالج.",
    "s4.t": "1 تيرا SSD من نوع PCIe 4.0",
    "s4.b": "قرص M.2 2242 من نوع NVMe PCIe 4.0 x4 بسعة 1 تيرا: إقلاع سريع وتحميل الألعاب والملفات أسرع، ومساحة كفاية للألعاب والتطبيقات مع بعض.",
    "s5.t": "572 AI TOPS لتسريع الذكاء الاصطناعي",
    "s5.b": "كرت الشاشة بيدعم حتى 572 AI TOPS، وده بيسرّع مهام الذكاء الاصطناعي زي توليد الصور والمؤثرات البصرية، بالإضافة إلى ألعابك}",
    "s6.t": "كيبورد بإضاءة خلفية",
    "s6.b": "الكيبورد فيه إضاءة خلفية، فتلعب أو تشتغل بالليل من غير ما تحتاج لمبة إضافية. الشاشة مقاس 15.6 بوصة، والجهاز اتصنّف كخفيف.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود (Eclipse Black)",
    "t.sensor": "المعالج",
    "t.sensorV": "Intel Core i7-14700HX · 20 نواة",
    "t.switch": "كرت الشاشة",
    "t.switchV": "NVIDIA GeForce RTX 5060 · 8GB GDDR7",
    "t.weight": "الذاكرة",
    "t.weightV": "32 GB DDR5-5600 (2×16GB)",
    "t.conn": "التخزين",
    "t.connV": "1TB PCIe 4.0 NVMe SSD",
    "t.batt": "نظام التشغيل",
    "t.battV": "DOS — بدون ترخيص ويندوز",
    "t.os": "مميزات خاصة",
    "t.osV": "كيبورد بإضاءة خلفية",
    "t.hand": "يُشحن من",
    "t.handV": "Amazon.eg",
    "t.inbox": "في العلبة",
    "t.inboxV": "الجهاز + كابل الشحن + الكتيب",
    "conn.eyebrow": "الأداء الرسومي",
    "conn.title": "ليه كرت الشاشة المستقل مهم",
    "conn.sub": "أغلب اللابتوبات بتعتمد على رسومات المعالج المدمجة. الفرق ده بيوضح نفسه في الألعاب",
    "conn.btnLs": "مع RTX 5060",
    "conn.btnBt": "بالرسومات المدمجة",
    "conn.m1l": "نوع الكارت",
    "conn.m1Ls": "مستقل بذاكرة خاصة",
    "conn.m1Bt": "مدمج في المعالج",
    "conn.m2l": "ذاكرة الرسوميات",
    "conn.m2Ls": "8 جيجا GDDR7 مستقلة",
    "conn.m2Bt": "ذاكرة مشتركة مع المعالج",
    "conn.m3l": "النتيجة",
    "conn.m3Ls": "ألعاب بإعدادات عالية ورسومات ثابتة",
    "conn.m3Bt": "مناسب للمتصفح والألعاب الخفيفة فقط",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "كرت الشاشة المستقل بيعمل الرسومات بمفرده، من غير ما يستعير من المعالج، وبيحتفظ بذاكرته الخاصة. مع 8 جيجا GDDR7 تقدر تشغّل الألعاب على إعدادات عالية وتلعب بدقة أعلى.",
    "conn.noteBt": "الرسومات المدمجة بتاخد من رامات الجهاز نفسه وبتعتمد على المعالج، فبيبقى أداؤها محدود مع الألعاب اللي محتاجة رسومات كتير.",
    "box.title": "اللي هيوصلك",
    "box.sub": "الجهاز أصلي من لينوفو، ويوصلك من أمازون مصر",
    "box.i1": "لابتوب Lenovo Legion 5 15IRX10 أسود",
    "box.i2": "كابل الشحن",
    "box.i3": "كتيّب الاستخدام",
    "box.i4": "الجهاز بييجي بنظام DOS — محتاج ترخيص ويندوز منفصل",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Lenovo Legion 5 15IRX10 — i7-14700HX / RTX 5060 / 32GB — أسود",
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
    "offer.p1": "29,999.67 EGP / شهرياً",
    "offer.p2": "14,999.83 EGP / شهرياً",
    "offer.p3": "7,499.92 EGP / شهرياً",
    "offer.p4": "3,749.96 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "20 نواة معالج i7-14700HX",
    "rev.n1": "المعالج",
    "rev.v1": "أداء عالي",
    "rev.q2": "32 جيجا رام DDR5-5600 ثنائي القناة",
    "rev.n2": "الذاكرة",
    "rev.v2": "سعة كبيرة",
    "rev.q3": "كرت شاشة RTX 5060 بـ8 جيجا GDDR7",
    "rev.n3": "الرسوميات",
    "rev.v3": "مستقل",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الجهاز فيه ويندوز؟",
    "faq.a1": "لأ، المنتج بييجي بنظام DOS بدون ترخيص ويندوز. لو عايز ويندوز، لازم تشتري رخصة منفصلة وتثبتها بنفسك.",
    "faq.q2": "هل يكفي للألعاب الحديثة؟",
    "faq.a2": "المنتج مُعلن أنه يشغّل ألعاب AAA على إعدادات عالية، بفضل المعالج i7-14700HX وكارت الشاشة RTX 5060 بـ8 جيجا GDDR7. الأداء الفعلي بيعتمد على اللعبة نفسها وعلى الإعدادات اللي تختارها.",
    "faq.q3": "هل الكارت شاشة مدمج؟",
    "faq.a3": "لأ، فيه كرت شاشة مستقل NVIDIA GeForce RTX 5060 بـ8 جيجا GDDR7، وده اللي بيخلّي الألعاب تمشي بإعدادات أعلى.",
    "faq.q4": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a4": "إرجاع حسب سياسة أمازون مصر المطبّقة على المنتج. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "faq.q5": "ينفع أدفع كاش عند الاستلام؟",
    "faq.a5": "لأ. صفحة المنتج على أمازون مصر مكتوب عليها «Electronic Payment Only» — المنتج ده غير مؤهل للدفع عند الاستلام. ادفع ببطاقة أو اقسط على عدة شهور مع بنوك مختارة.",
    "faq.q6": "المنتج أصلي وبضمان؟",
    "faq.a6": "المنتج معروض للبيع على أمازون مصر ويُشحن من Amazon.eg، وبذلك بياخد ضمان أمازون. راجع شروط الضمان على صفحة المنتج.",
    "cta.title": "جاهز تلعب على Legion 5؟",
    "cta.sub": "اطلبه دلوقتي من أمازون مصر — معالج 20 نواة وكارت RTX 5060 و32 جيجا رام",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج Lenovo Legion 5 15IRX10. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Legion 5",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "t.size": "مقاس الشاشة",
    "offer.copy": "نسخ",
    "offer.couponTitle": "خصم 10% ببطاقات البنك الأهلي",
    "offer.couponSub": "اختار الكود حسب نوع بطاقتك — الخصم من أمازون نفسه",
    "offer.couponNote": "اضغط على الكود للنسخ، واستخدمه في صفحة الدفع. يعمل فقط على بطاقة NBE Visa المؤهلة (Signature للكود الأول، Platinum للكود التاني).",
    "aud.eyebrow": "مين الجهاز ده ليه",
    "aud.title": "اللي هيفيد معاه Legion 5",
    "aud.sub": "عشرين نواة وكارت 8 جيجا GDDR7 ورام 32 جيجا، لمن محتاج أعلى مستوى في فئته",
    "aud.a1t": "اللي بيلعب ألعاب 2025 و2026",
    "aud.a1b": "كارت RTX 5060 بـ8 جيجا GDDR7 مش كارت إعدادات منخفضة. ده بيخلي الألعاب الحديثة تشتغل على إعدادات عالية مع معدل إطارات ثابت.",
    "aud.a2t": "اللي بيعمل مونتاج أو شغل بيحتاج كارت شاشة",
    "aud.a2b": "نفس الكارت بيقوّي شغل المونتاج والتصميم والمعالجة. وقبل كده، عشرين نواة ورام 32 جيجا معناها برامج كتير مع بعض من غير ما الجهاز يهنج.",
    "aud.a3t": "اللي بيعمل شغل ويلعب",
    "aud.a3b": "لو شغلك بياخد يوم كامل وعايز تلعب بعده، الجهاز ده بيعمل الاتنين: أداء عالي في الشغل، ونفس الأداء في الألعاب بعدين.",
    "aud.a4t": "اللي عايز جهاز يخدمه سنين",
    "aud.a4b": "رام 32 جيجا وهارد 1 تيرا مواصفات مش بتخلص بسرعة. جهاز واحد يقدر يغطي الشغل والدراسة والألعاب مع بعض."
  },
  "en": {
    "nav.tagline": "LEGION 5 · Black",
    "nav.specs": "Specs",
    "nav.connect": "Graphics",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming Laptop · 15.6-inch",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Lenovo Legion 5",
    "hero.title2": "15IRX10",
    "hero.sub": "i7-14700HX with 20 cores, RTX 5060 graphics, and 32GB DDR5 RAM",
    "hero.reviews": "{n} rating on Amazon",
    "hero.rank": "Legion 5 model · 15IRX10",
    "hero.priceLabel": "Price incl. tax",
    "hero.vat": "Price includes VAT · Ships from Amazon.eg",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See instalments",
    "hero.chip1l": "CPU",
    "hero.chip1v": "i7-14700HX",
    "hero.chip2l": "Graphics",
    "hero.chip2v": "RTX 5060",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Electronic payment — no cash",
    "trust.delivery": "Ships from Amazon",
    "trust.deliverySub": "Dispatched directly by Amazon.eg",
    "trust.returns": "Flexible returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "Listed seller",
    "trust.primeSub": "The product is sold on amazon.eg",
    "k.weight": "20-core CPU",
    "k.weightSub": "Intel Core i7-14700HX",
    "k.dpi": "32GB RAM",
    "k.dpiSub": "DDR5-5600 dual channel (2×16GB)",
    "k.batt": "RTX 5060 graphics",
    "k.battSub": "8GB GDDR7 · 572 AI TOPS",
    "k.btns": "1TB SSD",
    "k.btnsSub": "PCIe 4.0 NVMe",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "20 cores in one CPU",
    "s1.b": "The Intel Core i7-14700HX combines 20 cores — performance and efficiency cores together — so it can handle demanding games and heavy multitasking at the same time without the machine slowing down.",
    "s2.t": "32GB DDR5-5600 RAM",
    "s2.b": "32GB of DDR5-5600 memory in a dual-channel 2×16GB SODIMM setup. Plenty of headroom to keep many apps, browser tabs and creative tools open at once without leaning on the SSD.",
    "s3.t": "Dedicated RTX 5060 graphics",
    "s3.b": "A dedicated NVIDIA GeForce RTX 5060 with 8GB of GDDR7. This is what lets modern games run at higher settings — and it renders 3D graphics independently of the CPU.",
    "s4.t": "1TB PCIe 4.0 SSD",
    "s4.b": "A 1TB M.2 2242 NVMe drive on PCIe 4.0 x4: fast boots, quick game loading, and enough room for your games and apps together.",
    "s5.t": "572 AI TOPS for AI workloads",
    "s5.b": "The GPU delivers up to 572 AI TOPS, which speeds up AI-assisted tasks like image generation and visual effects, on top of your games.",
    "s6.t": "Backlit keyboard",
    "s6.b": "The keyboard is backlit, so you can game or work late without turning on an extra lamp. The screen is 15.6 inches, and the machine is listed as lightweight.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Black (Eclipse Black)",
    "t.sensor": "CPU",
    "t.sensorV": "Intel Core i7-14700HX · 20 cores",
    "t.switch": "Graphics",
    "t.switchV": "NVIDIA GeForce RTX 5060 · 8GB GDDR7",
    "t.weight": "Memory",
    "t.weightV": "32 GB DDR5-5600 (2×16GB)",
    "t.conn": "Storage",
    "t.connV": "1TB PCIe 4.0 NVMe SSD",
    "t.batt": "Operating system",
    "t.battV": "DOS — no Windows licence",
    "t.os": "Special features",
    "t.osV": "Backlit keyboard",
    "t.hand": "Ships from",
    "t.handV": "Amazon.eg",
    "t.inbox": "In the box",
    "t.inboxV": "Laptop + charger + documentation",
    "conn.eyebrow": "Graphics",
    "conn.title": "Why a dedicated GPU matters",
    "conn.sub": "Most laptops lean on the CPU's integrated graphics. The difference shows up in games",
    "conn.btnLs": "With RTX 5060",
    "conn.btnBt": "Integrated graphics",
    "conn.m1l": "Graphics type",
    "conn.m1Ls": "Dedicated, with its own memory",
    "conn.m1Bt": "Built into the CPU",
    "conn.m2l": "Graphics memory",
    "conn.m2Ls": "8GB dedicated GDDR7",
    "conn.m2Bt": "Shared with system RAM",
    "conn.m3l": "Result",
    "conn.m3Ls": "Games at high settings, steady frame rates",
    "conn.m3Bt": "Fine for browsing and lighter games",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "A dedicated GPU renders on its own, without borrowing from the CPU, and keeps its own memory. With 8GB of GDDR7 you can run games at higher settings and higher resolutions.",
    "conn.noteBt": "Integrated graphics share the system's RAM and depend on the CPU, so performance drops on anything that needs heavy 3D rendering.",
    "box.title": "What arrives in the box",
    "box.sub": "Genuine Lenovo, shipped by Amazon.eg",
    "box.i1": "Lenovo Legion 5 15IRX10 laptop, black",
    "box.i2": "Power adapter",
    "box.i3": "Documentation",
    "box.i4": "The laptop ships with DOS — a Windows licence is not included",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Lenovo Legion 5 15IRX10 — i7-14700HX / RTX 5060 / 32GB — Black",
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
    "offer.p1": "EGP 29,999.67 / mo",
    "offer.p2": "EGP 14,999.83 / mo",
    "offer.p3": "EGP 7,499.92 / mo",
    "offer.p4": "EGP 3,749.96 / mo",
    "offer.instNote": "Figures are indicative and depend on your bank and the active offers",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the manufacturer's published specifications",
    "rev.count": "{n} rating · {r} of 5",
    "rev.q1": "20-core i7-14700HX CPU",
    "rev.n1": "Processor",
    "rev.v1": "High performance",
    "rev.q2": "32GB DDR5-5600 dual-channel RAM",
    "rev.n2": "Memory",
    "rev.v2": "Very roomy",
    "rev.q3": "RTX 5060 with 8GB GDDR7",
    "rev.n3": "Graphics",
    "rev.v3": "Dedicated",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Does it come with Windows?",
    "faq.a1": "No. The product ships with DOS and no Windows licence. If you want Windows, you'll need to buy a licence separately and install it yourself.",
    "faq.q2": "Is it enough for modern games?",
    "faq.a2": "The product is advertised as handling AAA gaming at high settings thanks to the i7-14700HX and the RTX 5060 with 8GB GDDR7. Real performance depends on the game and the settings you pick.",
    "faq.q3": "Is the graphics card dedicated?",
    "faq.a3": "Yes — there's a dedicated NVIDIA GeForce RTX 5060 with 8GB GDDR7, which is what allows games to run at higher settings.",
    "faq.q4": "Can I return it if I don't like it?",
    "faq.a4": "Returns follow the Amazon.eg policy that applies to this product. Check the return policy on the product page before you buy.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "No. The Amazon Egypt product page marks this item \"Electronic Payment Only\" — it is not eligible for cash on delivery. Pay by card, or split the payment over several months with select banks.",
    "faq.q6": "Is it genuine and under warranty?",
    "faq.a6": "The product is sold on Amazon.eg and ships from Amazon.eg, so it carries Amazon's warranty. Check the warranty terms on the product page.",
    "cta.title": "Ready to game on the Legion 5?",
    "cta.sub": "Order it on Amazon.eg — 20-core CPU, RTX 5060 graphics and 32GB of RAM",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Lenovo Legion 5 15IRX10. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Legion 5",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "t.size": "Screen size",
    "offer.copy": "Copy",
    "offer.couponTitle": "10% off with NBE cards",
    "offer.couponSub": "Pick the code for your card type — the discount is Amazon’s",
    "offer.couponNote": "Click a code to copy it, then apply it at checkout. Valid only on an eligible NBE Visa card: Signature for the first code, Platinum for the second.",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Legion 5 suits",
    "aud.sub": "20 cores, 8GB of GDDR7 graphics and 32GB of RAM, for whoever needs the top of this class",
    "aud.a1t": "Players on 2025 and 2026 titles",
    "aud.a1b": "An RTX 5060 with 8GB of GDDR7 is not a low-settings card. It keeps modern games at high settings with a steady frame rate.",
    "aud.a2t": "Anyone doing video or GPU work",
    "aud.a2b": "The same GPU speeds up editing, design and rendering. Before that, 20 cores and 32GB of RAM mean a lot of programs can run at once without the machine stalling.",
    "aud.a3t": "People who work then play",
    "aud.a3b": "If work takes the whole day and you still want to game after, this does both: full performance on the job, and the same performance on the games.",
    "aud.a4t": "Anyone who wants one machine for years",
    "aud.a4b": "32GB of RAM and a 1TB SSD are not specs that run out quickly. One machine can cover work, study and gaming together."
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
    ? 'Lenovo Legion 5 15IRX10 — لابتوب جيمنج i7-14700HX و RTX 5060'
    : 'Lenovo Legion 5 15IRX10 — i7-14700HX Gaming Laptop with RTX 5060';

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
const LIVE_KEY = 'lenovo-legion5-live';
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

  if (live.price != null) {
    document.querySelectorAll('[data-bind="price"]').forEach((el) => { el.textContent = fmtPrice(live.price); });
  }
  if (live.rating != null) {
    document.querySelectorAll('[data-bind="rating"]').forEach((el) => { el.textContent = Number(live.rating).toFixed(1); });
    document.querySelectorAll('[data-needs-rating]').forEach((el) => { el.classList.remove('hidden'); });
  }
  // No rating -> the star rows stay hidden. They used to be hardcoded to 4.9 in
  // the markup, so every product that had no rating of its own quietly showed the
  // G309 score. A product with no reviews should show no stars.
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
const GAL_FILES = ["img/legion5-00.jpg","img/legion5-01.jpg","img/legion5-02.jpg","img/legion5-03.jpg","img/legion5-04.jpg","img/legion5-05.jpg","img/legion5-06.jpg","img/legion5-07.jpg","img/legion5-08.jpg","img/legion5-09.jpg","img/legion5-10.jpg"];
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
