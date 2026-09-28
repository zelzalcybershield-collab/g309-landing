/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   · Coupon code copy
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0FSZZP7K3?tag=zoq-21';
const STORE_KEY = 'tcl-nxtpaper14-lang';

const dict = {
  "ar": {
    "nav.tagline": "NXTPAPER · رمادي",
    "nav.specs": "المواصفات",
    "nav.connect": "العلبة والمحتويات",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "تابلت 14.3 بوصة · الجيل الثاني",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "TCL Nxtpaper",
    "hero.title2": "14.3",
    "hero.sub": "شاشة 2.4K وبطارية 10,000mAh — ومعاك كيبورد وقلم في نفس العلبة",
    "hero.reviews": "تقييم {r} من {n} تقييم على أمازون",
    "hero.rank": "تابلت من الجيل الثاني بـ Android 14",
    "hero.priceLabel": "السعر شامل الضريبة",
    "hero.vat": "السعر يشمل ضريبة القيمة المضافة · يتنفذ بواسطة Amazon.eg",
    "hero.buy": "اشترِ من أمازون",
    "hero.installments": "اعرف التقسيط",
    "hero.chip1l": "الشاشة",
    "hero.chip1v": "14.3\" 2.4K",
    "hero.chip2l": "البطارية",
    "hero.chip2v": "10,000mAh",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
    "gal.sub": "الصور من صفحة المنتج على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام",
    "trust.codSub": "ادفع كاش عند الباب",
    "trust.delivery": "تنفيذ من أمازون",
    "trust.deliverySub": "Fulfilled by Amazon",
    "trust.returns": "إرجاع مرن",
    "trust.returnsSub": "حسب سياسة الإرجاع على صفحة المنتج",
    "trust.prime": "العلبة كاملة",
    "trust.primeSub": "كيبورد وقلم وجراب وسندة",
    "k.weight": "شاشة 2.4K",
    "k.weightSub": "14.3 بوصة بدقة 2400×1600",
    "k.dpi": "سطوع 400 نيت",
    "k.dpiSub": "واضح في الشمس ومناسب للقراءة",
    "k.batt": "بطارية 10,000mAh",
    "k.battSub": "حتى 9 ساعات استخدام",
    "k.btns": "كيبورد وقلم",
    "k.btnsSub": "KB40 لاسلكي + T-Pen نشط",
    "specs.eyebrow": "المواصفات",
    "specs.title": "كل التفاصيل التي تحتاجها",
    "specs.sub": "المواصفات كما وردت في صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شاشة 14.3 بوصة بدقة 2.4K",
    "s1.b": "شاشة كبيرة بدقة 2400×1600 وسطوع 400 نيت. دقة أعلى من التابلت العادي، فالنص أوضح والصور أوضح — ومناسبة للقراءة الطويلة.",
    "s2.t": "كيبورد وقلم وجراب كلهم في العلبة",
    "s2.b": "العلبة فيها كيبورد KB40 لاسلكي وقلم T-Pen نشط وجراب TPU وجراب Flip وسندة. مش هتحتاج تشتري أي واحد فيهم من بره.",
    "s3.t": "بطارية 10,000mAh",
    "s3.b": "بطارية بسعة 10,000mAh بتدّيك لحد 9 ساعات استخدام حسب الشركة. يعني تقدر تاخده معاك في الشغل أو السفر من غير ما تدور على كهربا.",
    "s4.t": "أندرويد 14 مع 256 جيجا",
    "s4.b": "أندرويد 14، وتخزين 256 جيجا، ورام 8 جيجا قابلة للتوسيع بـ8 جيجا إضافية. أداء كافي للتطبيقات والفيديو والألعاب الخفيفة.",
    "s5.t": "كاميرات 8 ميجا خلفية و13+5 أمامية",
    "s5.b": "كاميرا خلفية 8 ميجا مع فلاش، وكاميرتين أماميتين 13 ميجا و5 ميجا. تسجيل فيديو 1080p ومعاها فتح بالوجه.",
    "s6.t": "متين مزوّد بحماية للعين",
    "s6.b": "تصنيف IP54 ضد الأتربة والماء، وشاشة حاصلة على جائزة التصميم منخفض الأزرق 2024. وبلوتوث 5.3 مع 4 سماعات.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "رمادي مطفي",
    "t.sensor": "المعالج",
    "t.sensorV": "MTK G99",
    "t.switch": "الذاكرة",
    "t.switchV": "8GB + 8GB إضافية",
    "t.weight": "الشاشة",
    "t.weightV": "14.3\" · 2400×1600 · 400 nits",
    "t.size": "مساحة التخزين",
    "t.connV": "WiFi · Bluetooth 5.3",
    "t.conn": "الاتصال",
    "t.batt": "البطارية",
    "t.battV": "10,000 mAh · حتى 9 ساعات",
    "t.os": "نظام التشغيل",
    "t.osV": "Android 14 · الجيل الثاني",
    "t.hand": "يُنفَّذ من",
    "t.handV": "Amazon.eg",
    "t.inbox": "الحماية",
    "t.inboxV": "IP54 · Face Unlock",
    "conn.eyebrow": "العلبة والمحتويات",
    "conn.title": "اللي جاي معاك جوّه العلبة",
    "conn.sub": "كل حاجة متضمنة في سعر المنتج نفسه",
    "conn.btnLs": "مع العلبة الكاملة",
    "conn.btnBt": "تابلت لوحده",
    "conn.m1l": "القلم",
    "conn.m1Ls": "T-Pen نشط في العلبة",
    "conn.m1Bt": "مش موجود",
    "conn.m2l": "الكيبورد",
    "conn.m2Ls": "KB40 لاسلكي في العلبة",
    "conn.m2Bt": "مش موجود",
    "conn.m3l": "الحماية",
    "conn.m3Ls": "جراب TPU + Flip + سندة",
    "conn.m3Bt": "مش موجود",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الكيبورد والقلم والجراب والسندة كلهم جوّه العلبة وبسعر المنتج نفسه. يعني المنتج جاهز للاستخدام فوراً، من غير ما تدفع زيادة على أي حاجة منهم.",
    "conn.noteBt": "لو اشتريت التابلت لوحده، هتلاقي نفسك بتشتري القلم والكيبورد والجراب والسندة كلهم بأسعار منفصلة. وبتجمع، التكلفة بتكون أعلى بكتير.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المنتج معروض للبيع ويُنفَّذ من أمازون مصر",
    "box.i1": "تابلت TCL Nxtpaper 14.3 رمادي مطفي",
    "box.i2": "كيبورد KB40 لاسلكي + قلم T-Pen نشط",
    "box.i3": "جراب TPU + جراب Flip + سندة",
    "box.i4": "شاحن 33W + كابل Type-C",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "TCL Nxtpaper 14.3 — G99 / 8GB+8GB / 256GB — رمادي",
    "offer.seller": "يتنفذ من Amazon.eg",
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
    "offer.p1": "1,299.92 EGP / شهرياً",
    "offer.p2": "649.96 EGP / شهرياً",
    "offer.p3": "433.31 EGP / شهرياً",
    "offer.p4": "324.98 EGP / شهرياً",
    "offer.instNote": "الأرقام استرشادية وتعتمد على البنك والعروض",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مبني على مواصفات المنتج كما وردت من الشركة المصنّعة",
    "rev.count": "أندرويد 14 · الجيل الثاني",
    "rev.q1": "شاشة 14.3 بوصة بدقة 2.4K",
    "rev.n1": "الشاشة",
    "rev.v1": "2400×1600",
    "rev.q2": "كيبورد وقلم في العلبة",
    "rev.n2": "المحتويات",
    "rev.v2": "مُضمنان",
    "rev.q3": "بطارية 10,000mAh",
    "rev.n3": "البطارية",
    "rev.v3": "9 ساعات",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الكيبورد والقلم جوا العلبة فعلاً؟",
    "faq.a1": "أيوه. صفحة المنتج بذكر إن العلبة فيها كيبورد KB40 لاسلكي وقلم T-Pen نشط وجراب TPU وجراب Flip وسندة وشاحن 33W وكابل Type-C.",
    "faq.q2": "فيه شريحة.sim؟",
    "faq.a2": "لا، الموديل واي فاي بس (WiFi only). مش بيقبل شريحة اتصالات. لو محتاج اتصال بالشريحة، ده مش الموديل المناسب.",
    "faq.q3": "الشاشة كويسة للقراءة؟",
    "faq.a3": "الشاشة 14.3 بوصة بدقة 2400×1600 وسطوع 400 نيت، والشاشة حاصلة على جائزة التصميم منخفض الأزرق 2024. الشاشة دي مصممة أساساً للقراءة.",
    "faq.q4": "البطارية بتكمّل كام؟",
    "faq.a4": "البطارية 10,000mAh، والشركة بتقول لحد 9 ساعات استخدام. الرقم ده بيختلف حسب إيه اللي بتعمله على الجهاز وإيه سطوع الشاشة.",
    "faq.q5": "ينفع ألعاب؟",
    "faq.a5": "معالج MTK G99 ورام 8 جيجا — يعني ألعاب خفيفة وتطبيقات وفيديو. مش موديل موجه للألعاب التقيلة.",
    "faq.q6": "أقدر أرجّعه لو مش عاجبني؟",
    "faq.a6": "الإرجاع حسب سياسة أمازون مصر المطبّقة على المنتج. راجع سياسة الإرجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تجربته؟",
    "cta.sub": "اطلبه من أمازون مصر — تابلت 14.3 بوصة 2.4K مع كيبورد وقلم في العلبة",
    "cta.buy": "اطلب من أمازون",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمنتج TCL Nxtpaper 14.3. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Nxtpaper",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "offer.copy": "نسخ",
    "offer.couponTitle": "خصم 10% ببطاقات البنك الأهلي",
    "offer.couponSub": "اختار الكود حسب نوع بطاقتك — الخصم من أمازون نفسه",
    "offer.couponNote": "اضغط على الكود للنسخ، واستخدمه في صفحة الدفع. يعمل فقط على بطاقة NBE Visa المؤهلة (Signature للكود الأول، Platinum للكود التاني)."
  },
  "en": {
    "nav.tagline": "NXTPAPER · Gray",
    "nav.specs": "Specs",
    "nav.connect": "What's in the box",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "14.3-inch tablet · 2nd generation",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "TCL Nxtpaper",
    "hero.title2": "14.3",
    "hero.sub": "A 2.4K screen and a 10,000mAh battery — keyboard and pen included",
    "hero.reviews": "Rated {r}/5 from {n} ratings on Amazon",
    "hero.rank": "2nd-generation tablet running Android 14",
    "hero.priceLabel": "Price incl. tax",
    "hero.vat": "Price includes VAT · Fulfilled by Amazon.eg",
    "hero.buy": "Buy on Amazon",
    "hero.installments": "See instalments",
    "hero.chip1l": "Display",
    "hero.chip1v": "14.3\" 2.4K",
    "hero.chip2l": "Battery",
    "hero.chip2v": "10,000mAh",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery",
    "trust.codSub": "Pay at the door",
    "trust.delivery": "Fulfilled by Amazon",
    "trust.deliverySub": "Dispatched by Amazon.eg",
    "trust.returns": "Flexible returns",
    "trust.returnsSub": "Per the return policy on the product page",
    "trust.prime": "Full bundle",
    "trust.primeSub": "Keyboard, pen, case and stand",
    "k.weight": "2.4K display",
    "k.weightSub": "14.3 inches at 2400×1600",
    "k.dpi": "400 nits",
    "k.dpiSub": "Readable in sunlight",
    "k.batt": "10,000mAh battery",
    "k.battSub": "Up to 9 hours of use",
    "k.btns": "Keyboard and pen",
    "k.btnsSub": "KB40 wireless + active T-Pen",
    "specs.eyebrow": "Specs",
    "specs.title": "Every detail you need",
    "specs.sub": "Specifications as listed on the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "14.3-inch 2.4K display",
    "s1.b": "A large 2400×1600 screen at 400 nits. Higher resolution than a typical tablet, so text is sharper and images look cleaner — and it suits long reading sessions.",
    "s2.t": "Keyboard, pen and case in the box",
    "s2.b": "The box holds a KB40 wireless keyboard, an active T-Pen, a TPU case, a flip case and a stand. None of them need buying separately.",
    "s3.t": "10,000mAh battery",
    "s3.b": "A 10,000mAh battery rated at up to 9 hours of use by the manufacturer, so it can last a work day or a trip without hunting for a socket.",
    "s4.t": "Android 14 with 256GB",
    "s4.b": "Android 14, 256GB of storage, and 8GB of RAM expandable by another 8GB. Enough for apps, video and light gaming.",
    "s5.t": "8MP rear, 13MP + 5MP front",
    "s5.b": "An 8MP rear camera with flash and two front cameras at 13MP and 5MP. Records 1080p video, and unlocks by face.",
    "s6.t": "Built to last, kind to your eyes",
    "s6.b": "Rated IP54 against dust and water, on a display that won the 2024 Low Blue Light design award. Bluetooth 5.3 and four speakers.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Matte gray",
    "t.sensor": "Chipset",
    "t.sensorV": "MTK G99",
    "t.switch": "Memory",
    "t.switchV": "8GB + 8GB expandable",
    "t.weight": "Display",
    "t.weightV": "14.3\" · 2400×1600 · 400 nits",
    "t.size": "Storage",
    "t.connV": "WiFi · Bluetooth 5.3",
    "t.conn": "Connectivity",
    "t.batt": "Battery",
    "t.battV": "10,000 mAh · up to 9 hours",
    "t.os": "Operating system",
    "t.osV": "Android 14 · 2nd generation",
    "t.hand": "Fulfilled by",
    "t.handV": "Amazon.eg",
    "t.inbox": "Protection",
    "t.inboxV": "IP54 · Face Unlock",
    "conn.eyebrow": "What's in the box",
    "conn.title": "What actually arrives with it",
    "conn.sub": "Everything is included in the product price",
    "conn.btnLs": "Full bundle",
    "conn.btnBt": "Tablet only",
    "conn.m1l": "The pen",
    "conn.m1Ls": "Active T-Pen included",
    "conn.m1Bt": "Not included",
    "conn.m2l": "The keyboard",
    "conn.m2Ls": "KB40 wireless included",
    "conn.m2Bt": "Not included",
    "conn.m3l": "Protection",
    "conn.m3Ls": "TPU case + flip + stand",
    "conn.m3Bt": "Not included",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "The keyboard, pen, case and stand are all in the box at the product's price. So it's ready to use out of the box, with nothing extra to pay for.",
    "conn.noteBt": "Bought on its own, the pen, keyboard, case and stand are each sold separately — and together they add up to a lot more.",
    "box.title": "What arrives in the box",
    "box.sub": "Listed and fulfilled by Amazon.eg",
    "box.i1": "TCL Nxtpaper 14.3 tablet, matte gray",
    "box.i2": "KB40 wireless keyboard + active T-Pen",
    "box.i3": "TPU case + flip case + stand",
    "box.i4": "33W charger + Type-C cable",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "TCL Nxtpaper 14.3 — G99 / 8GB+8GB / 256GB — Gray",
    "offer.seller": "Fulfilled by Amazon.eg",
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
    "offer.p1": "EGP 1,299.92 / mo",
    "offer.p2": "EGP 649.96 / mo",
    "offer.p3": "EGP 433.31 / mo",
    "offer.p4": "EGP 324.98 / mo",
    "offer.instNote": "Figures are indicative and depend on your bank and the active offers",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Based on the manufacturer's published specifications",
    "rev.count": "Android 14 · 2nd generation",
    "rev.q1": "14.3-inch 2.4K display",
    "rev.n1": "Display",
    "rev.v1": "2400×1600",
    "rev.q2": "Keyboard and pen in the box",
    "rev.n2": "Bundle",
    "rev.v2": "Included",
    "rev.q3": "10,000mAh battery",
    "rev.n3": "Battery",
    "rev.v3": "9 hours",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Are the keyboard and pen really included?",
    "faq.a1": "Yes. The listing states the box contains a KB40 wireless keyboard, an active T-Pen, a TPU case, a flip case, a stand, a 33W charger and a Type-C cable.",
    "faq.q2": "Does it take a SIM card?",
    "faq.a2": "No — this model is WiFi only. It does not accept a mobile SIM. If you need cellular, this is not the model for it.",
    "faq.q3": "Is the screen good for reading?",
    "faq.a3": "The screen is 14.3 inches at 2400×1600 and 400 nits, and it won the 2024 Low Blue Light design award. The display was built with reading in mind.",
    "faq.q4": "How long does the battery last?",
    "faq.a4": "The battery is 10,000mAh and the manufacturer quotes up to 9 hours of use. Real numbers vary with what you're running and the screen brightness.",
    "faq.q5": "Is it good for games?",
    "faq.a5": "An MTK G99 with 8GB of RAM — so light games, apps and video. It isn't aimed at heavy titles.",
    "faq.q6": "Can I return it if I don't like it?",
    "faq.a6": "Returns follow the Amazon.eg policy that applies to this product. Check the return policy on the product page before you buy.",
    "cta.title": "Ready to try it?",
    "cta.sub": "Order it on Amazon.eg — a 14.3-inch 2.4K tablet with keyboard and pen in the box",
    "cta.buy": "Order on Amazon",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the TCL Nxtpaper 14.3. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why Nxtpaper",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "offer.copy": "Copy",
    "offer.couponTitle": "10% off with NBE cards",
    "offer.couponSub": "Pick the code for your card type — the discount is Amazon’s",
    "offer.couponNote": "Click a code to copy it, then apply it at checkout. Valid only on an eligible NBE Visa card: Signature for the first code, Platinum for the second."
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
    ? 'TCL Nxtpaper 14.3 — تابلت 2.4K مع كيبورد وقلم داخل العلبة'
    : 'TCL Nxtpaper 14.3 — 2.4K tablet with keyboard and pen in the box';

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
const LIVE_KEY = 'tcl-nxtpaper14-live';
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
const GAL_FILES = ["img/tcl-00.jpg","img/tcl-01.jpg","img/tcl-02.jpg","img/tcl-03.jpg","img/tcl-04.jpg","img/tcl-05.jpg","img/tcl-06.jpg","img/tcl-08.jpg"];
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
