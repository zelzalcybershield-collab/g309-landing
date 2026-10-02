/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0C66CFQRV?tag=zoq-21';
const STORE_KEY = 'asus-va24ehf-lang';

const dict = {
  "ar": {
    "nav.tagline": "VA24EHF · أسود",
    "nav.specs": "المواصفات",
    "nav.connect": "مسطحة ولا منحنية",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "شاشة ألعاب · IPS",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "ASUS VA24EHF",
    "hero.title2": "IPS 100Hz",
    "hero.sub": "شاشة ألعاب 24 بوصة بدقة Full HD ولوحة IPS ومعدل تحديث 100Hz مع Eye Care",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "ضمان 3 سنوات من المصنع — متوفر على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الدقة",
    "hero.chip1v": "FHD 1920×1080",
    "hero.chip2l": "معدل التحديث",
    "hero.chip2v": "100Hz",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفها عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "بطاقة أو تقسيط",
    "trust.codSub": "دفع إلكتروني — بدون كاش",
    "trust.delivery": "متوفر على أمازون مصر",
    "trust.deliverySub": "مواعيد التوصيل على صفحة المنتج",
    "trust.returns": "استرجاع 15–30 يوم",
    "trust.returnsSub": "حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.4 من 5 من 941 عميل على أمازون",
    "k.weight": "لوحة IPS",
    "k.weightSub": "زاوية عرض 178° وألوان ثابتة",
    "k.dpi": "دقة Full HD",
    "k.dpiSub": "1920×1080 — وضوح مريح لليومي",
    "k.batt": "معدل التحديث",
    "k.battSub": "100Hz مع مزامنة للحركة السلسة",
    "k.btns": "Eye Care",
    "k.btnsSub": "فلتر الضوء الأزرق المعتمد",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر وبيانات ASUS الرسمية",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "لوحة IPS بإطارات Frameless",
    "s1.b": "لوحة IPS بتدي ألوان ثابتة وزاوية عرض 178° من أي اتجاه، والتصميم frameless بيسهّل تركيب أكثر من شاشة جنب بعض من غير حدود ظاهرة.",
    "s2.t": "دقة Full HD 1920×1080",
    "s2.b": "الدقة الكلاسيكية المريحة ليومك كله — نصوص أوضح، ومساحة شغل مريحة، وتنفع مع أغلب أجهزة اللابتوب والكمبيوتر من غير ما تحمّل كارت الشاشة.",
    "s3.t": "معدل تحديث 100Hz و1ms MPRT",
    "s3.b": "سلاسة أعلى من الشاشات القياسية 60Hz، مع استجابة 1ms MPRT وتقنية Adaptive-Sync اللي بتقلل تقطيع الصورة في الألعاب السريعة.",
    "s4.t": "راحة للعين من بروح Certified",
    "s4.b": "فلتر الضوء الأزرق المعتمد من TÜV Rheinland وتقنية تقليل الوميض (Flicker Free) بيقللوا إجهاد العين في الجلسات الطويلة.",
    "s5.t": "تركيب على الحائط",
    "s5.b": "الشاشة متوافقة مع تركيب VESA، فتقدر تثبتها على الحائط وتوفر مساحة المكتب وتجربتك في الشغل أو اللعب.",
    "s6.t": "Adaptive-Sync وFreeSync",
    "s6.b": "المزامنة بتخلي معدل التحديث يتناسق مع كارت الشاشة، فتقل قطع الصورة والتقطيع في اللحظات الحساسة في اللعب.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود",
    "t.sensor": "الدقة",
    "t.sensorV": "FHD 1920×1080",
    "t.switch": "معدل التحديث",
    "t.switchV": "100Hz (Adaptive-Sync / FreeSync)",
    "t.weight": "الوزن",
    "t.weightV": "2.84 كجم",
    "t.size": "اللوحة",
    "t.conn": "المنافذ",
    "t.connV": "HDMI و VGA",
    "t.batt": "الإضافات",
    "t.battV": "Eye Care · Flicker Free",
    "t.os": "الاستخدام",
    "t.osV": "ألعاب وشغل ومشاهدة",
    "t.hand": "الضمان",
    "t.handV": "3 سنوات من المصنع",
    "t.inbox": "في العلبة",
    "t.inboxV": "الشاشة + القاعدة + كابل HDMI + كابل الطاقة + دليل المستخدم والكروت",
    "conn.eyebrow": "مسطحة ولا منحنية",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "الاختيار بين المسطحة والمنحنية بيتوقف على استخدامك واستعدادك المادي — المقارنة تاخدها في الاعتبار",
    "conn.btnLs": "مسطحة (زي دي)",
    "conn.btnBt": "منحنية",
    "conn.m1l": "وضوح النصوص",
    "conn.m1Ls": "أوضح للوثائق والجداول والأكواد",
    "conn.m1Bt": "إحساس أوسع في الألعاب والأفلام",
    "conn.m2l": "الأنسب لـ",
    "conn.m2Ls": "شغل مكتب ومستندات وبرمجة",
    "conn.m2Bt": "ألعاب وأفلام",
    "conn.m3l": "اللي بيفرقه",
    "conn.m3Ls": "سعر غالباً أقل وتركيب على المكتب عادي",
    "conn.m3Bt": "غالباً أغلى ويحتاج مساحة أكبر",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "الشاشة المسطحة بدقة Full HD دي خيار عملي لو يومك الشغل والمستندات والبرمجة — النصوص أوضح، والسعر غالباً أقل. وفي الألعاب برضو أداء مريح بفضل 100Hz و Adaptive-Sync.",
    "conn.noteBt": "المنحنية بتدي إحساس أوسع في الألعاب والأفلام بس غالباً أغلى وبتحتاج مساحة أكبر على المكتب. لو شغلك كله مستندات، المسطحة أوضح وأرخص.",
    "box.title": "اللي هيوصلك",
    "box.sub": "منتج أصلي من ASUS مع كل ملحقاته في العلبة، متوفر على أمازون مصر",
    "box.i1": "شاشة VA24EHF مقاس 24 بوصة",
    "box.i2": "قاعدة التركيب",
    "box.i3": "كابل HDMI",
    "box.i4": "كابل طاقة ودليل المستخدم",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "ASUS VA24EHF — شاشة ألعاب 24 بوصة IPS Full HD 100Hz — أسود",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15–30 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 4.4 من 5 بناءً على 941 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "IPS و Full HD",
    "rev.n1": "الشاشة",
    "rev.v1": "ألوان واضحة",
    "rev.q2": "100Hz وAdaptive-Sync",
    "rev.n2": "الأداء",
    "rev.v2": "سلاسة بلا تقطيع",
    "rev.q3": "Eye Care معتمد",
    "rev.n3": "العين",
    "rev.v3": "راحة للجلسات الطويلة",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "الشاشة مقاسها كام؟",
    "faq.a1": "المقاس المسوّق 24 بوصة والمنطقة المرئية 23.8 بوصة، بلوحة IPS ودقة Full HD (1920×1080).",
    "faq.q2": "معدل التحديث كام؟",
    "faq.a2": "100Hz مع استجابة 1ms MPRT وتقنيات Adaptive-Sync وFreeSync للمزامنة — الأرقام دي من صفحة المنتج على أمازون وبيانات ASUS الرسمية.",
    "faq.q3": "المنافذ المتاحة إيه؟",
    "faq.a3": "منفذ HDMI ومنفذ VGA، والعملية فيها أزرار تحكم في القائمة وسهولة ضبط، مع دعم تركيب VESA على الحائط.",
    "faq.q4": "تنفع للشغل غير الألعاب؟",
    "faq.a4": "أيوا — دي جوهرتها أصلاً: إعدادات Eye Care المعتمدة من TÜV Rheinland لتقليل إجهاد العين في جلسات القراءة والشغل الطويلة، مع وضوح مريح للوثائق.",
    "faq.q5": "ينفع أدفع عند الاستلام؟",
    "faq.a5": "لأ — الدفع عند الاستلام غير متاح لهذا المنتج حسب صفحة أمازون مصر، والدفع إلكتروني بالبطاقة أو التقسيط. كل الطرق المتاحة بتظهر على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تعلّق شاشة المكتب؟",
    "cta.sub": "اطلب ASUS VA24EHF من أمازون مصر — 24 بوصة IPS و100Hz وEye Care",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لشاشة ASUS VA24EHF. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا VA24EHF",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج وبيانات المصنع الرسمية.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "مين الشاشة دي ليه",
    "aud.title": "اللي هتفرق معاهم VA24EHF",
    "aud.sub": "سلاسة بشاشة يومية مريحة للعين — لكل عايز شاشة عملية",
    "aud.a1t": "اللاعبين بشغف",
    "aud.a1b": "100Hz مع استجابة 1ms MPRT وAdaptive-Sync بتقلل تقطيع الصورة وتمسح الحركة في الألعاب السريعة، فتلعب بسلاسة من غير قطع.",
    "aud.a2t": "اللي يومهم شغل قدام الشاشة",
    "aud.a2b": "دقة Full HD بلوحة IPS بتدى وضوح مريح للوثائق والجداول، وتقنيات Eye Care المعتمدة بتقلل إجهاد العين في الجلسات الطويلة.",
    "aud.a3t": "اللي بيدوروا على مساحة مكتب",
    "aud.a3b": "التصميم frameless يشجعك تثبتها على الحائط بتركيب VESA وتوفر مساحة سطح المكتب — وشاشتك سايباك مكتب مرتب.",
    "aud.a4t": "اللي عايز شاشة إضافية بأسعار عملية",
    "aud.a4b": "سعر في المتناول من أمازون ومقاس واحد لكل استخداماتك: لعب وشغل ومشاهدة، من علامة ASUS الموثوقة بضمان 3 سنوات.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة — وكل تفاصيل السعر والتقسيط والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر والتقسيط وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "VA24EHF · Black",
    "nav.specs": "Specs",
    "nav.connect": "Flat vs Curved",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Gaming Monitor · IPS",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "ASUS VA24EHF",
    "hero.title2": "IPS 100Hz",
    "hero.sub": "A 24-inch gaming monitor with Full HD resolution, an IPS panel, a 100Hz refresh rate and ASUS Eye Care",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "3-year manufacturer warranty — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Resolution",
    "hero.chip1v": "FHD 1920×1080",
    "hero.chip2l": "Refresh rate",
    "hero.chip2v": "100Hz",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Card or instalments",
    "trust.codSub": "Electronic payment — card or instalments",
    "trust.delivery": "Available on Amazon.eg",
    "trust.deliverySub": "Delivery dates on the product page",
    "trust.returns": "15–30 day returns",
    "trust.returnsSub": "Per Amazon's policy for this item",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.4 out of 5 by 941 customers on Amazon",
    "k.weight": "IPS panel",
    "k.weightSub": "178° viewing angles, stable colours",
    "k.dpi": "Full HD resolution",
    "k.dpiSub": "1920×1080 — comfortable clarity for daily use",
    "k.batt": "Refresh rate",
    "k.battSub": "100Hz with sync for smooth motion",
    "k.btns": "Eye Care",
    "k.btnsSub": "Certified blue-light filter",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page and ASUS's official data",
    "specs.table": "Full technical sheet",
    "s1.t": "IPS panel with a frameless design",
    "s1.b": "An IPS panel gives stable colours and 178° viewing angles from any direction, while the frameless design makes stacking multiple screens side by side easy with no visible bezels.",
    "s2.t": "Full HD 1920×1080 resolution",
    "s2.b": "The comfortable classic resolution for your whole day — crisper text, a comfortable working area, and smooth with most laptops and PCs without overloading your GPU.",
    "s3.t": "100Hz refresh rate and 1ms MPRT",
    "s3.b": "Smoother than a standard 60Hz screen, with 1ms MPRT response and Adaptive-Sync that reduces screen tearing in fast games.",
    "s4.t": "Certified eye comfort",
    "s4.b": "A TÜV Rheinland-certified blue-light filter and flicker-free technology reduce eye strain during long sessions.",
    "s5.t": "Wall mountable",
    "s5.b": "VESA wall mounting keeps your desk free and puts the screen at the best height for work or play.",
    "s6.t": "Adaptive-Sync and FreeSync",
    "s6.b": "Adaptive sync keeps the refresh rate in step with your graphics card, reducing screen tearing and stutter at the critical moments.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "Black",
    "t.sensor": "Resolution",
    "t.sensorV": "FHD 1920×1080",
    "t.switch": "Refresh rate",
    "t.switchV": "100Hz (Adaptive-Sync / FreeSync)",
    "t.weight": "Weight",
    "t.weightV": "2.84 kg",
    "t.size": "Panel",
    "t.conn": "Ports",
    "t.connV": "HDMI and VGA",
    "t.batt": "Extras",
    "t.battV": "Eye Care · Flicker Free",
    "t.os": "Use",
    "t.osV": "Gaming, work and viewing",
    "t.hand": "Warranty",
    "t.handV": "3 years from the manufacturer",
    "t.inbox": "In the box",
    "t.inboxV": "Monitor + stand + HDMI cable + power cable + user manual and cards",
    "conn.eyebrow": "Flat vs curved",
    "conn.title": "The difference that matters",
    "conn.sub": "The choice between flat and curved comes down to how you use it and your budget — worth weighing before you pay",
    "conn.btnLs": "Flat (this one)",
    "conn.btnBt": "Curved",
    "conn.m1l": "Text clarity",
    "conn.m1Ls": "Crisper for documents, spreadsheets and code",
    "conn.m1Bt": "A wider feel in games and films",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Office work, documents and coding",
    "conn.m2Bt": "Games and films",
    "conn.m3l": "The trade-off",
    "conn.m3Ls": "Usually cheaper and sits fine on a normal desk",
    "conn.m3Bt": "Usually pricier and needs more space",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "This flat Full HD screen is the practical pick when your day is documents, spreadsheets and coding — text reads crisper and the price is usually lower. Gaming still runs smoothly thanks to 100Hz and Adaptive-Sync.",
    "conn.noteBt": "A curved screen gives a wider feel in games and films but is usually pricier and needs more desk space. If your work is mostly documents, flat is clearer and cheaper.",
    "box.title": "What arrives in the box",
    "box.sub": "Genuine ASUS with all accessories included, available on Amazon.eg",
    "box.i1": "VA24EHF 24-inch monitor",
    "box.i2": "Stand",
    "box.i3": "HDMI cable",
    "box.i4": "Power cable and user manual",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "ASUS VA24EHF — 24\" IPS Full HD 100Hz Gaming Monitor — Black",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15–30 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 4.4 out of 5 rating from 941 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "IPS and Full HD",
    "rev.n1": "Display",
    "rev.v1": "Clear, consistent colours",
    "rev.q2": "100Hz and Adaptive-Sync",
    "rev.n2": "Performance",
    "rev.v2": "Smooth, tear-free",
    "rev.q3": "Certified Eye Care",
    "rev.n3": "Comfort",
    "rev.v3": "Easy on the eyes",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What size is the screen?",
    "faq.a1": "Marketed as 24\" with a 23.8\" viewable area, an IPS panel and Full HD resolution (1920×1080).",
    "faq.q2": "What is the refresh rate?",
    "faq.a2": "100Hz with 1ms MPRT response and Adaptive-Sync plus FreeSync for synchronisation — these figures are in the product listing on Amazon and ASUS's official data.",
    "faq.q3": "What ports does it have?",
    "faq.a3": "One HDMI port and one VGA port, with OSD menu buttons for easy adjustment and VESA wall-mount support.",
    "faq.q4": "Is it good for work, not just gaming?",
    "faq.a4": "Yes — that is exactly its strength: TÜV Rheinland-certified Eye Care settings reduce eye strain during long reading and working sessions, with comfortable document clarity.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "No — cash on delivery is not available for this item, per the Amazon Egypt page; payment is electronic by card or instalments. Every available method appears on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to set up your desk?",
    "cta.sub": "Order the ASUS VA24EHF on Amazon.eg — 24\" IPS, 100Hz and Eye Care",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the ASUS VA24EHF monitor. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the VA24EHF",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page and official manufacturer data.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the VA24EHF suits",
    "aud.sub": "Smooth gaming with an everyday, eye-friendly screen — for anyone who wants a practical display",
    "aud.a1t": "Passionate gamers",
    "aud.a1b": "100Hz with 1ms MPRT and Adaptive-Sync cut tearing and smear in fast games, so you play smoothly with no cut frames.",
    "aud.a2t": "People working at a screen all day",
    "aud.a2b": "Full HD on an IPS panel keeps documents and spreadsheets crisp, and the certified Eye Care tech eases eye strain during long sessions.",
    "aud.a3t": "Anyone reclaiming desk space",
    "aud.a3b": "A frameless design that mounts on the wall with VESA frees your desk surface — a tidy desk with a great screen.",
    "aud.a4t": "Anyone after a practical second screen",
    "aud.a4b": "An approachable price from Amazon and one size for every use: gaming, work and viewing, from the trusted ASUS brand with a 3-year warranty.",
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
    ? 'ASUS VA24EHF — شاشة ألعاب 24 بوصة IPS بدقة Full HD و100Hz'
    : 'ASUS VA24EHF — 24" IPS Full HD 100Hz Eye Care Gaming Monitor';

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
const LIVE_KEY = 'asus-va24ehf-live';
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
const GAL_FILES = ["img/asus-va24ehf-01.jpg","img/asus-va24ehf-02.jpg","img/asus-va24ehf-03.jpg","img/asus-va24ehf-04.jpg"];
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
