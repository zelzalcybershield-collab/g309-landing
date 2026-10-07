/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B01MR03XWU?tag=zoq-21';
const STORE_KEY = 'bep-hdmi-vga-lang';

const dict = {
  "ar": {
    "nav.tagline": "HDMI → VGA · 1.8 m",
    "nav.specs": "المواصفات",
    "nav.connect": "كابل ولا محول",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "كابل محوّل نشط",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "BEP",
    "hero.title2": "HDMI → VGA",
    "hero.sub": "كابل محوّل نشط من HDMI إلى VGA بطول 1.8 متر وبموصلات مطلية بالذهب لدقة 1080P",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#3 في كابلات HDMI على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "الطول",
    "hero.chip1v": "1.8 متر",
    "hero.chip2l": "الدقة",
    "hero.chip2v": "1080P",
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
    "trust.returnsSub": "وإرجاع مجاني حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة بيع واسع",
    "trust.primeSub": "تقييم 3.8 من 5 من 4,725 عميل على أمازون",
    "k.weight": "الطول",
    "k.weightSub": "6 أقدام / 1.8 متر",
    "k.dpi": "الدقة",
    "k.dpiSub": "خرج VGA بدقة 1080P",
    "k.batt": "الوزن",
    "k.battSub": "8 جرام فقط",
    "k.btns": "التقييم",
    "k.btnsSub": "من 4,725 تقييم على أمازون",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "تحويل نشط من HDMI إلى VGA",
    "s1.b": "كابل محوّل (Active Video Converter) بيحوّل إشارة HDMI لـ VGA بدقة وضوح تصل إلى 1080P — من غير ما تحتاج محولات خارجية.",
    "s2.t": "طول 1.8 متر",
    "s2.b": "6 أقدام/1.8 متر بيعطيك مساحة كافية عشان توصل اللابتوب بالشاشة أو البروجكتر وانت مرتاح في مكانك.",
    "s3.t": "موصلات مطلية بالذهب",
    "s3.b": "المسمى مكتوب Gold-plated في عنوان الصفحة — توصيل أفضل ومقاومة أكتر للتآكل مع الاستخدام اليومي.",
    "s4.t": "شغال مع كتير من الأجهزة",
    "s4.b": "صفحة المواصفات بتشاور على Notebook وPC وLaptop وDVD Player وNintendo Switch وTV وProjector وMonitor.",
    "s5.t": "خفيف 8 جرام",
    "s5.b": "وزن 8 جرام وأبعاد 15.2 × 12.7 × 0.8 سم — الكابل بيتطوى أو بيتلف في حقيبة اللابتوب من غير وزن.",
    "s6.t": "قابس وتشغيل من غير درايفر",
    "s6.b": "تم التوصيل والبدء فورًا — زي ما صفحات المحولات النشطة بتعلن Plug and play، من غير تثبيت برامج.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود (Black)",
    "t.sensor": "النوع",
    "t.sensorV": "كابل محوّل HDMI إلى VGA",
    "t.switch": "رقم الموديل",
    "t.switchV": "HDMI - VGA",
    "t.weight": "الوزن",
    "t.weightV": "8 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "HDMI ذكر · VGA ذكر",
    "t.batt": "التيار",
    "t.battV": "1.5 أمبير",
    "t.os": "التوافق",
    "t.osV": "Notebook · PC · Laptop · Switch · TV · Projector · Monitor",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون — استرجاع 15 يوم",
    "t.inbox": "في العلبة",
    "t.inboxV": "كابل BEP بطول 1.8 متر",
    "conn.eyebrow": "كابل ولا محول",
    "conn.title": "طريقتين توصلوا نفس الحاجة",
    "conn.sub": "كابل محوّل جاهز ومحول منفصل — الاتنين بيحولوا HDMI لـ VGA، الفرق في الطريقة",
    "conn.btnLs": "كابل BEP HDMI→VGA (زي ده)",
    "conn.btnBt": "محول HDMI-to-VGA منفصل",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر واحد بيشمل الكابل والتحويل معاً",
    "conn.m1Bt": "المحول لوحده غالباً محتاج كابل VGA إضافي",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي عايز يوصّل اللابتوب أو الـ Switch على شاشة قديمة بسرعة",
    "conn.m2Bt": "اللي بيمرر محول محمول بين أكتر من شاشة ثابتة",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "وصلتين مباشرة: HDMI في الجهاز وVGA في الشاشة — خط واحد نضيف من غير أجزاء زيادة",
    "conn.m3Bt": "محول صغير في الجيب، بس محتاج تجيب منه سلك VGA عشان تكمل",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو اللابتوب أو الـ Switch عندك فيه HDMI والشاشة قديمة فيها VGA بس، الكابل ده بيوصل الاتنين في خط واحد — من غير محول إضافي ولا درايفر.",
    "conn.noteBt": "المحول المنفصل بياخد مساحة أقل في الحقيبة، بس غالباً هتحتاج كابل VGA جمبه عشان تخرج منه إشارة.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المحتوى حسب صفحة المنتج على أمازون مصر — الكابل جاهز للاستخدام فور الوصول",
    "box.i1": "كابل BEP بطول 1.8 متر",
    "box.i2": "مقابس HDMI وVGA مطلية بالذهب",
    "box.i3": "توافق مع اللابتوب والشاشات والبروجكتر",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "BEP — كابل محوّل HDMI إلى VGA، 1.8 م، أسود",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 3.8 من 5 بناءً على 4,725 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "1.8 m",
    "rev.n1": "الطول",
    "rev.v1": "يغطي مسافة آمنة للشاشة",
    "rev.q2": "1080P",
    "rev.n2": "الدقة",
    "rev.v2": "خرج VGA عبر تحويل نشط",
    "rev.q3": "8 g",
    "rev.n3": "الوزن",
    "rev.v3": "خفيف ومحمول",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بيشتغل مع المونيتور القديم عندي؟",
    "faq.a1": "لو جهازك فيه منفذ HDMI والمونيتور عندك فيه منفذ VGA بس — أيوه. الكابل محوّل نشط بيحوّل HDMI لـ VGA مباشرة.",
    "faq.q2": "محتاج أركب درايفر؟",
    "faq.a2": "لأ — قابس وتشغيل من غير درايفرات، زي ما بتعلن صفحات المحولات النشطة Plug and play.",
    "faq.q3": "بينقل صوت كمان؟",
    "faq.a3": "لأ — VGA بينقل فيديو بس، من غير صوت. الصوت بييجي من مخرج آخر على الجهاز (سماعة أو HDMI للسماعات).",
    "faq.q4": "بيشتغل مع أي أجهزة؟",
    "faq.a4": "صفحة المواصفات بتشاور على Notebook وPC وLaptop وDVD Player وNintendo Switch وTV وProjector وMonitor، مع استثناء بعض أجهزة Apple وPS2/3 وXbox.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني واسترجاع خلال 15 يوم حسب سياسة أمازون. راجع التفاصيل على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز توصل اللابتوب بالشاشة القديمة؟",
    "cta.sub": "اطلب كابل BEP HDMI-to-VGA من أمازون مصر — 1.8 متر ودقة 1080P وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لكابل BEP من HDMI إلى VGA. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه BEP",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الكابل ده ليه",
    "aud.title": "اللي هيفيد معاه BEP",
    "aud.sub": "شاشة قديمة فيها VGA بس — الكابل بيوصلها باللابتوب أو الـ Switch من غير محولات",
    "aud.a1t": "أصحاب اللابتوب والشاشات القديمة",
    "aud.a1b": "معظم اللابتوبات الحديثة من غير جاك VGA — الكابل بينقذ المونيتور القديم ويرجّعه شغال.",
    "aud.a2t": "أصحاب Nintendo Switch",
    "aud.a2b": "التوافق مذكور في الصفحة — توصيل الـ Switch على شاشة عرض أو بروجكتر لمشاركة اللعب.",
    "aud.a3t": "اللي بيعمل عروض تقديمية",
    "aud.a3b": "في قاعات وكلاسات لسه فيها VGA — بتربط اللابتوب بالبروجكتر وتشغّل السلايدز فوراً.",
    "aud.a4t": "اللي بيدوّر على حل من غير تعقيد",
    "aud.a4b": "بدون درايفر ولا محولات — خط واحد من جهازك للشاشة بيخلص القصة.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "HDMI to VGA · 1.8 m",
    "nav.specs": "Specs",
    "nav.connect": "Cable vs adapter",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Active converter cable",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "BEP",
    "hero.title2": "HDMI to VGA",
    "hero.sub": "An active HDMI-to-VGA converter cable at 1.8 m with gold-plated connectors for 1080P output",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#3 in HDMI cables on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Length",
    "hero.chip1v": "1.8 m",
    "hero.chip2l": "Resolution",
    "hero.chip2v": "1080P",
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
    "trust.prime": "Widely ordered",
    "trust.primeSub": "Rated 3.8 out of 5 by 4,725 customers on Amazon",
    "k.weight": "Length",
    "k.weightSub": "6 ft / 1.8 m",
    "k.dpi": "Resolution",
    "k.dpiSub": "1080P VGA output",
    "k.batt": "Weight",
    "k.battSub": "8 grams only",
    "k.btns": "Rating",
    "k.btnsSub": "across 4,725 ratings on Amazon",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Active HDMI-to-VGA conversion",
    "s1.b": "An active converter cable that turns an HDMI signal into VGA at up to 1080P - no external box required.",
    "s2.t": "1.8-metre length",
    "s2.b": "6 ft / 1.8 m gives you room to reach the screen or projector while staying comfortable where you are.",
    "s3.t": "Gold-plated connectors",
    "s3.b": "Gold-plated is right in the listing title - a cleaner signal and better resistance to wear with daily use.",
    "s4.t": "Works with a wide range of devices",
    "s4.b": "The spec sheet names notebooks, PCs, laptops, DVD players, a Nintendo Switch, TVs, projectors and monitors.",
    "s5.t": "Weighs 8 grams",
    "s5.b": "8 grams and 15.2 × 12.7 × 0.8 cm - the cable coils into a laptop bag without adding weight.",
    "s6.t": "Plug and play, no drivers",
    "s6.b": "Connect and go immediately - as active converter listings state, plug and play, with nothing to install.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "HDMI-to-VGA converter cable",
    "t.switch": "Model number",
    "t.switchV": "HDMI - VGA",
    "t.weight": "Weight",
    "t.weightV": "8 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "HDMI male · VGA male",
    "t.batt": "Current",
    "t.battV": "1.5 A",
    "t.os": "Compatibility",
    "t.osV": "Notebook · PC · Laptop · Switch · TV · Projector · Monitor",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's policy - 15-day returns",
    "t.inbox": "In the box",
    "t.inboxV": "The 1.8 m BEP cable",
    "conn.eyebrow": "Cable or adapter",
    "conn.title": "Two ways to do the same job",
    "conn.sub": "A ready converter cable and a separate adapter - both turn HDMI into VGA, the difference is in how",
    "conn.btnLs": "BEP HDMI-to-VGA cable (this one)",
    "conn.btnBt": "Separate HDMI-to-VGA dongle",
    "conn.m1l": "Cost",
    "conn.m1Ls": "One price covers the cable and the conversion in one",
    "conn.m1Bt": "The dongle alone usually needs an extra VGA cable",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone quickly hooking a laptop or Switch to an older screen",
    "conn.m2Bt": "Anyone moving one small dongle between fixed screens",
    "conn.m3l": "What changes",
    "conn.m3Ls": "Two direct plugs: HDMI into the source and VGA into the screen - one clean run, no extra parts",
    "conn.m3Bt": "A tiny dongle in the pocket, but you still source a VGA cable to finish the run",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If your laptop or Switch has HDMI and the screen only has VGA, this cable joins the two in one run - no extra adapter and no driver.",
    "conn.noteBt": "A separate dongle takes less bag space, but you will usually need a VGA cable next to it to carry the signal out.",
    "box.title": "What arrives",
    "box.sub": "Content per the product page on Amazon.eg - the cable is ready to use on arrival",
    "box.i1": "The 1.8 m BEP cable",
    "box.i2": "Gold-plated HDMI and VGA plugs",
    "box.i3": "Laptop, screen and projector compatibility",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "BEP — HDMI-to-VGA converter cable, 1.8 m, black",
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
    "rev.sub": "Product specs and a 3.8 out of 5 rating from 4,725 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "1.8 m",
    "rev.n1": "Length",
    "rev.v1": "spans a comfortable screen reach",
    "rev.q2": "1080P",
    "rev.n2": "Resolution",
    "rev.v2": "VGA output over active conversion",
    "rev.q3": "8 g",
    "rev.n3": "Weight",
    "rev.v3": "light and portable",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Will it work with my old monitor?",
    "faq.a1": "If your device has HDMI and the monitor only has VGA - yes. The cable is an active converter that turns HDMI into VGA directly.",
    "faq.q2": "Do I need to install a driver?",
    "faq.a2": "No - plug and play with no drivers, as active converter listings state.",
    "faq.q3": "Does it carry audio too?",
    "faq.a3": "No - VGA carries video only. Audio comes from another output on the device (speaker or HDMI to speakers).",
    "faq.q4": "Does it work everywhere?",
    "faq.a4": "The spec sheet names notebooks, PCs, laptops, DVD players, a Nintendo Switch, TVs, projectors and monitors - excluding some Apple devices and PS2/3, Xbox.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing points to free returns and a 15-day return window per Amazon’s policy. Check the details on the product page before you buy.",
    "cta.title": "Ready to reach that older screen?",
    "cta.sub": "Order the BEP HDMI-to-VGA cable on Amazon.eg - 1.8 m, 1080P and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the BEP HDMI-to-VGA cable. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why BEP",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the BEP suits",
    "aud.sub": "An older VGA-only screen - this cable links it to a laptop or Switch with no extra boxes",
    "aud.a1t": "Laptop and legacy-monitor owners",
    "aud.a1b": "Most modern laptops dropped the VGA jack - the cable rescues the old monitor and brings it back into use.",
    "aud.a2t": "Nintendo Switch owners",
    "aud.a2b": "Compatibility is listed - hook the Switch up to a display or projector for shared play.",
    "aud.a3t": "People who present",
    "aud.a3b": "Rooms and classes still on VGA - plug the laptop into the projector and present immediately.",
    "aud.a4t": "Anyone after a no-fuss fix",
    "aud.a4b": "No drivers, no extra components - one run from your device to the screen settles it.",
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
    ? 'كابل BEP HDMI إلى VGA 1.8m 1080P | أمازون مصر'
    : 'BEP HDMI to VGA Cable, 1.8 m, 1080P | Amazon Egypt';

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
const LIVE_KEY = 'bep-hdmi-vga-live';
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
const GAL_FILES = ["img/di-00.jpg","img/di-01.jpg","img/di-02.jpg","img/di-03.jpg","img/di-04.jpg","img/di-05.jpg"];
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
