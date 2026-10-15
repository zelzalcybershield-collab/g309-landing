/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0DTKN38RC?tag=zoq-21';
const STORE_KEY = 'generic-football-size5-lang';

const dict = {
  "ar": {
    "nav.tagline": "مقاس 5 · خياطة بالآلة",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "كرة قدم مقاس 5",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Champions",
    "hero.title2": "Football Size 5",
    "hero.sub": "كرة قدم مقاس 5 بخيط بالآلة وتصميم متعدد الألوان — للتمرين والمباريات على النجيل والترتان والصالة",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#82 في كرات التمرين",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "المقاس",
    "hero.chip1v": "مقاس 5",
    "hero.chip2l": "الخياطة",
    "hero.chip2v": "بالآلة",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفها عن قرب",
    "gal.sub": "الصور من صفحة المنتج الرسمية على أمازون مصر",
    "gal.prev": "الصورة السابقة",
    "gal.next": "الصورة التالية",
    "gal.close": "إغلاق",
    "gal.label": "صورة من المنتج",
    "trust.cod": "الدفع عند الاستلام متاح",
    "trust.codSub": "لكل عملية شراء على أمازون مصر",
    "trust.delivery": "توصيل مجاني",
    "trust.deliverySub": "على أمازون مصر حسب الصفحة",
    "trust.returns": "استرجاع 15 يوم",
    "trust.returnsSub": "وإرجاع مجاني حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "مناسبة لكل الملاعب",
    "trust.primeSub": "نجيل · ترتان · صالات داخلية",
    "k.weight": "المقاس",
    "k.weightSub": "مقاس 5 — المعتاد للكبار والتمرين",
    "k.dpi": "الخياطة",
    "k.dpiSub": "مخيطة بالآلة لمتانة أعلى",
    "k.batt": "الاستخدام",
    "k.battSub": "تجربة مريحة واستقبال واضح للمبتدئين",
    "k.btns": "التصميم",
    "k.btnsSub": "مطبوع متعدد الألوان — واضح في الملعب",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "مقاس 5 المعتاد للكبار",
    "s1.b": "مقاس 5 هو المقاس الأساسي في المباريات والتمارين للاعبين من 12 سنة وأكبر — مناسب للمدرسة والأكاديمية والنادي.",
    "s2.t": "خياطة بالآلة لمتانة أعلى",
    "s2.b": "الخياطة بالآلة بتخلي الكرة تقاوم التمرين الشديد والاستخدام المتكرر أكتر من الكرات الملصقة.",
    "s3.t": "دقة وتحكم أعلى",
    "s3.b": "تصميم بيحسّن دقة التسديد والتحكم والاستجابة — مشجع للمبتدئين في اكتساب مهارة أساسية.",
    "s4.t": "تصميم متعدد الألوان",
    "s4.b": "بتصميم متعدد الألوان مميز — سهل تلاقيها في الملعب وبتعجب الأطفال والعائلة.",
    "s5.t": "تصلح للنجيل والترتان والصالة",
    "s5.b": "مناسبة للنجيل الطبيعي والصناعي وأرضيات الصالات الداخلية — كورة واحدة لكل الأجواء.",
    "s6.t": "خامة بلاستيكية متينة",
    "s6.b": "من مادة بلاستيكية معالجة بخيط مزدوج — بساطة وسعر معقول مع أداء كويس للتجربة اليومية.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "متعدد الألوان",
    "t.sensor": "النوع",
    "t.sensorV": "كرة قدم",
    "t.switch": "رقم الموديل",
    "t.switchV": "NC-202",
    "t.weight": "المقاس",
    "t.weightV": "مقاس 5",
    "t.size": "الخياطة",
    "t.conn": "الخامة",
    "t.connV": "بلاستيك",
    "t.batt": "الملاعب",
    "t.battV": "نجيل · ترتان · صالة",
    "t.os": "الفئة العمرية",
    "t.osV": "أطفال (Kid)",
    "t.hand": "الضمان",
    "t.handV": "لا يوجد ضمان حسب الصفحة",
    "t.inbox": "في العلبة",
    "t.inboxV": "كرة قدم واحدة مقاس 5",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "كرة للتمرين اليومي، من غير ما تدفع كتير",
    "conn.sub": "كرة تمرين اقتصادية مقابل كرة مباريات احترافية — الفرق في الخامات والطبقات والسعر",
    "conn.btnLs": "كرة Champions (زي دي)",
    "conn.btnBt": "كرة مباريات احترافية",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر اقتصادي عالي الاستخدام وموفّر",
    "conn.m1Bt": "سعر أعلى وبتتأثر بملاعب صلبة",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "التمرين اليومي والمدرسة واللعب في الشارع والحوش",
    "conn.m2Bt": "المباريات الرسمية والاستخدام الاحترافي",
    "conn.m3l": "فرق الاستخدام",
    "conn.m3Ls": "خياطة بالآلة وطبقة واحدة — عملية وسهلة التغيير",
    "conn.m3Bt": "خامات وطبقات متعددة وملمس احترافي — لما كل مباراة محسوبة",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو محتاج كورة للعب اليومي والتمرين والمدرسة، دي بتأدي الغرض بسعر معقول وأنت مرتاح تغيرها لو خربت.",
    "conn.noteBt": "كرة المباريات بتستاهل لو بتلعب بجدية على أرضية نضيفة، لكن للعب العادي الفرق مش كبير.",
    "box.title": "في العلبة إيه؟",
    "box.sub": "المحتوى المرفق حسب صفحة المنتج على أمازون مصر — كرة واحدة.",
    "box.i1": "كرة Champions مقاس 5",
    "box.i2": "تصميم متعدد الألوان",
    "box.i3": "جاهزة للتمرين والمباريات",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "كرة قدم Champions League مقاس 5 — متعددة الألوان",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "توصيل مجاني حسب الصفحة",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختارها",
    "rev.title": "أسباب تخليك تختارها",
    "rev.sub": "مواصفات المنتج وتقييم 3.0 من 5 بناءً على 13 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "5",
    "rev.n1": "المقاس",
    "rev.v1": "المقاس المعتاد للمباريات",
    "rev.q2": "3",
    "rev.n2": "ملاعب",
    "rev.v2": "نجيل وترتان وصالة",
    "rev.q3": "1",
    "rev.n3": "خياطة بالآلة",
    "rev.v3": "لمتانة أطول",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "المقاس ده مناسب لمين؟",
    "faq.a1": "مقاس 5 هو المعتاد للاعبين من حوالي 12 سنة وأكبر والبالغين — للتمرين والمباريات غير الرسمية.",
    "faq.q2": "بتيجي مفرغة؟",
    "faq.a2": "الصفحة بتذكر إنها جاهزة للاستخدام الرياضي؛ لو وصلت غير مفرغة استخدم منفاخ كرات عادي قبل اللعب.",
    "faq.q3": "بتناسب أي أرضية؟",
    "faq.a3": "الوصف بيقول مناسبة للنجيل والترتان والصالات الداخلية — تكيف سهل مع البيئات المختلفة.",
    "faq.q4": "خامتها إيه؟",
    "faq.a4": "الخامة المذكورة بلاستيك بخياطة بالآلة — مناسبة للاستخدام اليومي بعيد عن الملاعب الاحترافية.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "في ضمان أو استرجاع؟",
    "faq.a6": "الصفحة بتذكر إن مفيش ضمان للمنتج، مع إرجاع مجاني خلال 15 يوم حسب سياسة أمازون — راجع التفاصيل قبل الشراء.",
    "cta.title": "جاهز تنزل الملعب؟",
    "cta.sub": "اطلب كرة Champions مقاس 5 من أمازون مصر — خياطة بالآلة ودفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف السعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لكرة قدم مقاس 5. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه مقاس 5",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الكرة دي ليه",
    "aud.title": "اللي هتفيد معاهم الكرة",
    "aud.sub": "كرة تمرين عملية للمدرسة والحوش والنادي — بسعر معقول",
    "aud.a1t": "الطلبة والنوادي",
    "aud.a1b": "كرة مقاس 5 بتستحمل التمرين اليومي والمباريات الداخلية من غير ما تقلق من الفقدان.",
    "aud.a2t": "اللعب في الحوش",
    "aud.a2b": "تصميم متعدد الألوان وصعب الضياع — مناسبة للعب بعد المدرسة في أي مكان مفتوح.",
    "aud.a3t": "الآباء للأطفال",
    "aud.a3b": "الفئة العمرية مذكورة Kid ومقاس 5 مناسب للأطفال الأكبر والبداية في المهارات.",
    "aud.a4t": "الأكاديميات والمدارس",
    "aud.a4b": "سعر اقتصادي يناسب شراء أكثر من كورة لعلبة التمرين بدون ميزانية كبيرة.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Size 5 · machine stitched",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Size 5 football",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Champions",
    "hero.title2": "Football Size 5",
    "hero.sub": "A size 5 machine-stitched football in a multi-color print - for training and matches on grass, turf or indoor floors",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#82 in Training Footballs",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Size",
    "hero.chip1v": "Size 5",
    "hero.chip2l": "Stitching",
    "hero.chip2v": "Machine",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery available",
    "trust.codSub": "For your purchase on Amazon.eg",
    "trust.delivery": "Free delivery",
    "trust.deliverySub": "on Amazon.eg as listed",
    "trust.returns": "15-day returns",
    "trust.returnsSub": "Free returns under Amazon's policy for this item",
    "trust.prime": "Fits every pitch",
    "trust.primeSub": "grass · turf · indoor courts",
    "k.weight": "Size",
    "k.weightSub": "size 5 - the usual for adults and training",
    "k.dpi": "Stitching",
    "k.dpiSub": "machine stitched for extra durability",
    "k.batt": "Use",
    "k.battSub": "a comfortable strike and clear touch for beginners",
    "k.btns": "Design",
    "k.btnsSub": "a multi-color print - easy to spot on the pitch",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "The size 5 for adults",
    "s1.b": "Size 5 is the standard for matches and training from age 12 and up - right for school, academy and club play.",
    "s2.t": "Machine stitching for durability",
    "s2.b": "Machine stitching helps the ball withstand intense practice and repeated use better than glued balls.",
    "s3.t": "More accuracy and control",
    "s3.b": "A design that improves shooting accuracy, control and response - encouraging beginners to build a core skill.",
    "s4.t": "A multi-color design",
    "s4.b": "A distinctive multi-color print - easy to spot on the field and a hit with kids and family.",
    "s5.t": "Works on grass, turf and indoor",
    "s5.b": "Suited to natural and artificial grass and indoor court floors - one ball for every setting.",
    "s6.t": "A durable plastic build",
    "s6.b": "A plastic build with machine stitching - simplicity and a fair price with a solid everyday feel.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Multicolor",
    "t.sensor": "Type",
    "t.sensorV": "Football",
    "t.switch": "Model number",
    "t.switchV": "NC-202",
    "t.weight": "Size",
    "t.weightV": "Size 5",
    "t.size": "Stitching",
    "t.conn": "Material",
    "t.connV": "Plastic",
    "t.batt": "Surfaces",
    "t.battV": "Grass · turf · indoor",
    "t.os": "Age range",
    "t.osV": "Kid",
    "t.hand": "Warranty",
    "t.handV": "no warranty as listed",
    "t.inbox": "In the box",
    "t.inboxV": "One size 5 football",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "A ball for daily training, without paying much",
    "conn.sub": "An economical training ball versus a pro match ball - the gap is materials, layers and price",
    "conn.btnLs": "Champions ball (this one)",
    "conn.btnBt": "A pro match ball",
    "conn.m1l": "Cost",
    "conn.m1Ls": "a low price you can use a lot",
    "conn.m1Bt": "A higher price that suffers on hard pitches",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Daily training, school, street and yard play",
    "conn.m2Bt": "Official matches and professional use",
    "conn.m3l": "What changes",
    "conn.m3Ls": "Machine stitching and a single layer - practical and easy to replace",
    "conn.m3Bt": "Multiple layers, better materials and a pro touch - when every match counts",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If you need a ball for daily play, practice and school, this one does the job cheaply and you will not mind replacing it.",
    "conn.noteBt": "A match ball is worth it if you play seriously on a clean pitch, but for casual play the difference is small.",
    "box.title": "What is in the box?",
    "box.sub": "The included contents per the amazon.eg listing - one ball.",
    "box.i1": "The Champions size 5 football",
    "box.i2": "A multi-color design",
    "box.i3": "Ready for training and matches",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Champions League print football, size 5 - multi color",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "Free delivery as listed",
    "offer.ret": "Returns",
    "offer.retV": "15 days and free returns per Amazon's policy",
    "offer.buyNow": "Buy & see today's price — click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Product specs and a 3.0 out of 5 rating from 13 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "5",
    "rev.n1": "Size",
    "rev.v1": "the match-day standard",
    "rev.q2": "3",
    "rev.n2": "Surfaces",
    "rev.v2": "grass, turf and indoor",
    "rev.q3": "1",
    "rev.n3": "Machine stitched",
    "rev.v3": "for longer durability",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Who is size 5 for?",
    "faq.a1": "Size 5 is the usual for players from around 12 and up and adults - for practice and casual matches.",
    "faq.q2": "Does it arrive inflated?",
    "faq.a2": "The listing describes it as ready for sports use; if it arrives soft, top it up with an ordinary ball pump before play.",
    "faq.q3": "Which surfaces suit it?",
    "faq.a3": "The description says it suits grass, turf and indoor pitches - it adapts easily across environments.",
    "faq.q4": "What is it made of?",
    "faq.a4": "The listed material is plastic with machine stitching - fine for daily use away from pro pitches.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Is there a warranty or returns?",
    "faq.a6": "The listing states no warranty for this item, with free returns within 15 days per Amazon’s policy - check the details before buying.",
    "cta.title": "Ready to hit the pitch?",
    "cta.sub": "Order the Champions size 5 football on Amazon.eg - machine stitched, cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for a size 5 football. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why size 5",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the football suits",
    "aud.sub": "A practical training ball for school, yard and club - at a sensible price",
    "aud.a1t": "Schools and clubs",
    "aud.a1b": "A size 5 ball that takes daily training and casual matches without the worry of losing an expensive ball.",
    "aud.a2t": "Yard and street play",
    "aud.a2b": "A multi-color print that is easy to spot - great for after-school play anywhere open.",
    "aud.a3t": "Parents and kids",
    "aud.a3b": "The listed age range is kids, and size 5 suits older children building their first skills.",
    "aud.a4t": "Academies and schools",
    "aud.a4b": "An economical price that allows buying more than one ball for a training bag on a small budget.",
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
    ? 'كرة قدم Champions مقاس 5 بخياطة بالآلة — متعددة الألوان | أمازون مصر'
    : 'Champions Football Size 5, Machine Stitched - Multi Color | Amazon Egypt';

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
const LIVE_KEY = 'generic-football-size5-live';
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
const GAL_FILES = ["img/fb-00.jpg","img/fb-01.jpg"];
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
