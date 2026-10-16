/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0GTLCZWVQ?tag=zoq-21';
const STORE_KEY = 'arzum-okka-minio-coffee-lang';

const dict = {
  "ar": {
    "nav.tagline": "5 أكواب · 80 ثانية",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "ماكينة قهوة تركية أوتوماتيك",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Arzum OKKA",
    "hero.title2": "Minio OK0050-04",
    "hero.sub": "ماكينة قهوة تركية أوتوماتيك بحجم 5 فناجين، شاشة لمس رقمية وإطفاء أوتوماتيكي — قهوة أصلية في 80 ثانية",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#2 في ماكينات القهوة التركية",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "الكمية",
    "hero.chip1v": "5 فناجين",
    "hero.chip2l": "التحضير",
    "hero.chip2v": "80 ثانية",
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
    "trust.prime": "ضمان سنة من الوكيل",
    "trust.primeSub": "سنة واحدة من وكيل Arzum في مصر «New Star»",
    "k.weight": "الكمية",
    "k.weightSub": "5 فناجين قهوة تركية في المرة",
    "k.dpi": "التحضير",
    "k.dpiSub": "80 ثانية للتحضير السريع",
    "k.batt": "التحكم",
    "k.battSub": "شاشة لمس رقمية بلمسة واحدة",
    "k.btns": "الأمان",
    "k.btnsSub": "منع الفوران وإطفاء أوتوماتيكي",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "لوحة لمس رقمية بلمسة واحدة",
    "s1.b": "لوحة لمس رقمية بتشغيل بلمسة واحدة وإشارات LED — بتعمل القهوة التركية الأصلية من غير تعقيد.",
    "s2.t": "قهوة في 80 ثانية لـ5 فناجين",
    "s2.b": "تحضير سريع يطلع لحد 5 فناجين قهوة تركية غنية في حوالي 80 ثانية — نتيجة المقاهي بسرعة ودقة.",
    "s3.t": "وضع التحضير البطيء",
    "s3.b": "وظيفة محسّنة للتحضير البطيء تستخلص نكهة أعمق وأقوى — تجربة مذاق أرقى لعشّاق القهوة التركية.",
    "s4.t": "أمان ذكي وإطفاء أوتوماتيكي",
    "s4.b": "نظام ذكي لمنع الفوران فوق وتوقف أوتوماتيكي بعد 29 دقيقة — استخدام مطمئن بدون قلق.",
    "s5.t": "خامات متينة ولامعة",
    "s5.b": "بلاستيك وإستانلس ستيل بلمسة نهائية لامعة بلون أسود ونحاسي — تصميم مضغوط عصري للمطبخ.",
    "s6.t": "ملعقة قهوة ومعيار مرفق",
    "s6.b": "الطقم بيجي بملعقة القهوة والدليل — بتضبط المعيار من أول مرة وتاخد نفس المذاق كل يوم.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود ونحاسي",
    "t.sensor": "النوع",
    "t.sensorV": "ماكينة قهوة تركية",
    "t.switch": "رقم الموديل",
    "t.switchV": "OK0050-04",
    "t.weight": "السعة",
    "t.weightV": "5 فناجين",
    "t.size": "الأبعاد",
    "t.conn": "الطاقة",
    "t.connV": "360-420 واط",
    "t.batt": "الجهد",
    "t.battV": "220-240 فولت",
    "t.os": "الخامة",
    "t.osV": "بلاستيك + إستانلس ستيل",
    "t.hand": "الضمان",
    "t.handV": "سنة واحدة من الوكيل «New Star»",
    "t.inbox": "في العلبة",
    "t.inboxV": "الماكينة + ملعقة القهوة + دليل الاستخدام",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "قهوة تركية حقيقية بدون بوتاجاز ولا خبرة",
    "conn.sub": "ماكينة تركية أوتوماتيك مقابل الكنكة التقليدية وماكينة الإسبريسو — الفرق في التحكم والوقت والتنظيف",
    "conn.btnLs": "Arzum OKKA Minio (زي دي)",
    "conn.btnBt": "كنكة تقليدية / ماكينة إسبريسو",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "دفعة مرة واحدة وكل فنجان من ضغطة واحدة",
    "conn.m1Bt": "الكنكة رخيصة بس محتاجة متابعة، والإسبريسو أغلى بكتير",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي بيحب القهوة التركية ويكررها يومياً من غير واقفة على البوتاجاز",
    "conn.m2Bt": "اللي عايز ينوّع مشروبات وأشكال مختلفة بكل مرة",
    "conn.m3l": "فرق الاستخدام",
    "conn.m3Ls": "80 ثانية ووقف أوتوماتيكي — مفيش فوران فوق ومفيش تنظيف معقد",
    "conn.m3Bt": "مرونة أكبر ونتيجة محتاجة مهارة ووقت ومتابعة",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو القهوة التركية جزء من يومك، الماكينة دي بتطلع فنجان ثابت المذاق بضغطة واحدة، من غير واقفة ولا رسك.",
    "conn.noteBt": "الطريقة التقليدية ليها طعم وروح، بس محتاجة وقت ومهارة كل مرة عايز توصل لنفس النتيجة.",
    "box.title": "في العلبة إيه؟",
    "box.sub": "المحتوى المرفق حسب صفحة المنتج على أمازون مصر",
    "box.i1": "ماكينة Arzum OKKA Minio",
    "box.i2": "ملعقة قياس القهوة",
    "box.i3": "دليل الاستخدام والضمان",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Arzum OKKA Minio — ماكينة قهوة تركية أوتوماتيك 5 فناجين — أسود ونحاسي",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.0 من 5 بناءً على 13 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "5",
    "rev.n1": "فناجين",
    "rev.v1": "في المرة الواحدة",
    "rev.q2": "80",
    "rev.n2": "ثانية",
    "rev.v2": "لتحضير سريع",
    "rev.q3": "29",
    "rev.n3": "دقيقة",
    "rev.v3": "لإطفاء أوتوماتيكي آمن",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "بتعمل كام فنجان؟",
    "faq.a1": "سعتها 5 فناجين في المرة الواحدة حسب الصفحة — مناسبة للبيت والضيوف.",
    "faq.q2": "بتاخد وقت قد إيه؟",
    "faq.a2": "الوصف بيقول لحد 5 فناجين في حوالي 80 ثانية، مع وضع تحضير بطيء لنكهة أعمق.",
    "faq.q3": "بتقف لوحدها؟",
    "faq.a3": "أيوة — فيها إطفاء أوتوماتيكي بعد 29 دقيقة ونظام ذكي لمنع الفوران فوق.",
    "faq.q4": "بتغسل في غسالة الأطباق؟",
    "faq.a4": "الصفحة بتذكر إنها لا — تُغسل يدوياً حسب التعليمات المرفقة.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "في ضمان؟",
    "faq.a6": "أيوة — ضمان سنة واحدة من وكيل Arzum في مصر «New Star» حسب الصفحة.",
    "cta.title": "جاهز لفنجان قهوة تركية حقيقي؟",
    "cta.sub": "اطلب Arzum OKKA Minio من أمازون مصر — 5 فناجين في 80 ثانية ودفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف السعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لماكينة القهوة التركية Arzum OKKA Minio. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه OKKA Minio",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الماكينة دي ليه",
    "aud.title": "اللي هتفيد معاهم الماكينة",
    "aud.sub": "فنجان قهوة تركية ثابت المذاق بضغطة واحدة",
    "aud.a1t": "عشّاق القهوة التركية",
    "aud.a1b": "نفس المذاق الغني من غير وقوف على البوتاجاز ولا انتظار — بضغطة واحدة صباحاً ومساءً.",
    "aud.a2t": "البيوت المزدحمة والضيوف",
    "aud.a2b": "لحد 5 فناجين في المرة الواحدة — تستقبل الضيوف من غير لف ودوران في المطبخ.",
    "aud.a3t": "المكاتب والصباح السريع",
    "aud.a3b": "حجم مضغوط وتشغيل بلمسة واحدة وإطفاء أوتوماتيكي — آمنة وسهلة في أي مكان.",
    "aud.a4t": "هدية لعشّاق القهوة",
    "aud.a4b": "هدية عملية بتشغيل بلمسة واحدة — أصلية بمذاق المقهى وضمان سنة من الوكيل.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "5 cups · 80 seconds",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Automatic Turkish coffee machine",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Arzum OKKA",
    "hero.title2": "Minio OK0050-04",
    "hero.sub": "An automatic Turkish coffee machine for 5 cups, with a digital touch panel and auto shut-off - real coffee in 80 seconds",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#2 in Turkish coffee machines",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Capacity",
    "hero.chip1v": "5 cups",
    "hero.chip2l": "Brew time",
    "hero.chip2v": "80 seconds",
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
    "trust.prime": "One-year agent warranty",
    "trust.primeSub": "One year from Arzum’s Egypt agent, “New Star”",
    "k.weight": "Capacity",
    "k.weightSub": "5 cups of Turkish coffee at a time",
    "k.dpi": "Brew time",
    "k.dpiSub": "80 seconds for rapid brewing",
    "k.batt": "Control",
    "k.battSub": "a digital one-touch touch panel",
    "k.btns": "Safety",
    "k.btnsSub": "overflow prevention and auto shut-off",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "A digital one-touch panel",
    "s1.b": "A digital touch board with one-touch operation and LED alerts - authentic Turkish coffee without the fuss.",
    "s2.t": "80 seconds for up to 5 cups",
    "s2.b": "Rapid brewing delivers up to 5 cups of rich Turkish coffee in around 80 seconds - café results with speed and precision.",
    "s3.t": "A slow brewing mode",
    "s3.b": "An enhanced slow-brew function extracts deeper, richer flavour - an elevated experience for Turkish coffee lovers.",
    "s4.t": "Smart safety and auto shut-off",
    "s4.b": "An intelligent overflow-prevention system and automatic shut-off after 29 minutes - worry-free brewing.",
    "s5.t": "Durable, glossy build",
    "s5.b": "Plastic and stainless steel with a glossy finish in black and copper - a modern compact look for the kitchen.",
    "s6.t": "Measuring spoon included",
    "s6.b": "The package includes the coffee measuring spoon and a manual - dial the dose from the first go and get the same taste daily.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black & Copper",
    "t.sensor": "Type",
    "t.sensorV": "Turkish coffee machine",
    "t.switch": "Model number",
    "t.switchV": "OK0050-04",
    "t.weight": "Capacity",
    "t.weightV": "5 cups",
    "t.size": "Dimensions",
    "t.conn": "Power",
    "t.connV": "360-420 W",
    "t.batt": "Voltage",
    "t.battV": "220-240 V",
    "t.os": "Material",
    "t.osV": "Plastic + stainless steel",
    "t.hand": "Warranty",
    "t.handV": "One year from the agent “New Star”",
    "t.inbox": "In the box",
    "t.inboxV": "The machine + measuring spoon + manual",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "Real Turkish coffee with no stove and no skill",
    "conn.sub": "An automatic Turkish machine versus a traditional pot and an espresso machine - the gap is control, time and cleanup",
    "conn.btnLs": "Arzum OKKA Minio (this one)",
    "conn.btnBt": "A traditional pot / espresso machine",
    "conn.m1l": "Cost",
    "conn.m1Ls": "a one-off price with a cup from every single press",
    "conn.m1Bt": "a pot is cheap but needs watching, and espresso costs far more",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone who loves Turkish coffee daily without standing over a stove",
    "conn.m2Bt": "Anyone who wants to switch drinks and styles every time",
    "conn.m3l": "What changes",
    "conn.m3Ls": "80 seconds and an auto stop - no overflow and no complex cleanup",
    "conn.m3Bt": "More flexibility with a result that needs skill, time and attention",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If Turkish coffee is part of your day, this machine delivers a consistent cup in one press, with no standing and no risk.",
    "conn.noteBt": "The traditional way has its charm, but it takes time and skill every time you want the same result.",
    "box.title": "What is in the box?",
    "box.sub": "The included contents per the amazon.eg listing",
    "box.i1": "The Arzum OKKA Minio machine",
    "box.i2": "A coffee measuring spoon",
    "box.i3": "The manual and warranty",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Arzum OKKA Minio - automatic Turkish coffee machine, 5 cups - Black & Copper",
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
    "rev.sub": "Product specs and a 4.0 out of 5 rating from 13 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "5",
    "rev.n1": "Cups",
    "rev.v1": "at a time",
    "rev.q2": "80",
    "rev.n2": "Seconds",
    "rev.v2": "for rapid brewing",
    "rev.q3": "29",
    "rev.n3": "Minutes",
    "rev.v3": "for a safe auto shut-off",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "How many cups does it make?",
    "faq.a1": "Its capacity is 5 cups at once as listed - suited to home and guests.",
    "faq.q2": "How long does it take?",
    "faq.a2": "The description says up to 5 cups in around 80 seconds, with a slow-brew mode for a deeper flavour.",
    "faq.q3": "Does it switch off by itself?",
    "faq.a3": "Yes - it has an automatic shut-off after 29 minutes and a smart overflow-prevention system.",
    "faq.q4": "Is it dishwasher safe?",
    "faq.a4": "The listing says no - wash it by hand following the supplied manual.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Is there a warranty?",
    "faq.a6": "Yes - a one-year warranty from Arzum’s agent in Egypt, “New Star”, as listed.",
    "cta.title": "Ready for a real cup of Turkish coffee?",
    "cta.sub": "Order the Arzum OKKA Minio on Amazon.eg - 5 cups in 80 seconds, cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Arzum OKKA Minio Turkish coffee machine. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why OKKA Minio",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the machine suits",
    "aud.sub": "A consistent Turkish coffee in a single press",
    "aud.a1t": "Turkish coffee lovers",
    "aud.a1b": "The same rich taste without standing over a stove or waiting - one press morning and evening.",
    "aud.a2t": "Busy homes and guests",
    "aud.a2b": "Up to 5 cups at once - host guests without running around the kitchen.",
    "aud.a3t": "Offices and quick mornings",
    "aud.a3b": "A compact size, one-touch operation and auto shut-off - safe and easy anywhere.",
    "aud.a4t": "A gift for coffee fans",
    "aud.a4b": "A practical gift with one-touch operation - café-grade taste with a one-year agent warranty.",
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
    ? 'Arzum OKKA Minio — ماكينة قهوة تركية أوتوماتيك 5 فناجين | أمازون مصر'
    : 'Arzum OKKA Minio Automatic Turkish Coffee Machine, 5 Cups | Amazon Egypt';

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
const LIVE_KEY = 'arzum-okka-minio-coffee-live';
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
const GAL_FILES = ["img/az-00.jpg","img/az-01.jpg","img/az-02.jpg","img/az-03.jpg","img/az-04.jpg","img/az-05.jpg"];
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
