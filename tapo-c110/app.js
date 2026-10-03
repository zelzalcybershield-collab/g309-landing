/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B08ZNRFQBM?tag=zoq-21';
const STORE_KEY = 'tapo-c110-lang';

const dict = {
  "ar": {
    "nav.tagline": "2K · Wi-Fi",
    "nav.specs": "المواصفات",
    "nav.connect": "تخزين محلي ولا اشتراك",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "كاميرا مراقبة داخلية · 2K",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Tapo C110",
    "hero.title2": "2K · 3MP",
    "hero.sub": "كاميرا داخلية 2K بجودة عالية، رؤية ليلية حتى 30 قدم، محادثة صوتية ثنائية الاتجاه — من غير رسوم شهرية",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "من TP-Link — علامة موثوقة في الشبكات والمراقبة — متوفر على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الدقة",
    "hero.chip1v": "2K 3MP",
    "hero.chip2l": "الرؤية الليلية",
    "hero.chip2v": "30 قدم",
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
    "trust.returns": "استرجاع 15–30 يوم",
    "trust.returnsSub": "حسب سياسة أمازون المطبّقة على المنتج",
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 4.5 من 5 من 5052 عميل على أمازون",
    "k.weight": "التقييم",
    "k.weightSub": "4.5 من 5 من العملاء",
    "k.dpi": "الرؤية الليلية",
    "k.dpiSub": "صورة واضحة حتى 30 قدم",
    "k.batt": "التخزين",
    "k.battSub": "SD محلي لغاية 128 جيجا",
    "k.btns": "الدقة",
    "k.btnsSub": "2K · 3 ميجابيكسل",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "تصوير 2K برؤية ليلية 30 قدم",
    "s1.b": "مستشعر 3 ميجابيكسل (2304×1296) لصورة عالية الوضوح في النهار، ورؤية ليلية بالأشعة تحت الحمراء تصل 30 قدم لقنوات متابعة واضحة في الظلام.",
    "s2.t": "بلا رسوم شهرية إجبارية",
    "s2.b": "مش محتاج هب منفصل ولا اشتراك إجباري — تحفظ على كارت SD داخل الكاميرا حتى 128 جيجا وترجع للفيديوهات متى ما احتجت.",
    "s3.t": "كشف حركة وذكاء اصطناعي",
    "s3.b": "كشف الحركة بيبعت إشعار لفونك فور ما يحصل أي حركة، مع مناطق نشاط مخصصة تحدد فيها مكان المتابعة بالظبط، وتقنية ذكاء اصطناعي بتفصل بين البشر والحيوانات الأليفة.",
    "s4.t": "محادثة ثنائية الاتجاه",
    "s4.b": "ميكروفون وسماعة مدمجة تسمح لك تكلم عيلتك أو تهدئ العيل في البيت من أي مكان — زي غرفة مراقبة بالأساس في التليفون.",
    "s5.t": "سريعة التركيب ومتعددة الاستخدام",
    "s5.b": "تشبكها بالواي فاي مباشرة وتثبتها على الحائط أو تقفها على أي سطح — التركيب سريع بالمسمار والقوالب المرافقة في العلبة.",
    "s6.t": "تشغل مع Alexa و Google",
    "s6.b": "متوافقة مع أنظمة المساعد الصوتي Amazon Alexa و Google Assistant، فتقدر تشوف الكاميرا عن طريق الأوامر الصوتية على شاشتك الذكية.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أبيض",
    "t.sensor": "الدقة",
    "t.sensorV": "3 ميجابيكسل (2304×1296)",
    "t.switch": "الرؤية الليلية",
    "t.switchV": "30 قدم بالأشعة تحت الحمراء",
    "t.weight": "الوزن",
    "t.weightV": "0.07 كجم",
    "t.size": "البُعد",
    "t.conn": "الاتصال",
    "t.connV": "Wi-Fi أحادي النطاق",
    "t.batt": "التخزين",
    "t.battV": "MicroSD محلي حتى 128 جيجا",
    "t.os": "التوافق",
    "t.osV": "iOS · Android · Alexa · Google Assistant",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "الكاميرا + محول الطاقة + مسمار التركيب + قوالب التركيب + دليل البدء السريع",
    "conn.eyebrow": "تخزين محلي ولا اشتراك",
    "conn.title": "الفرق اللي بيفرق معاك",
    "conn.sub": "تخزينك على الكارت ولا على سحابة باشتراك — المقارنة تاخدها في الاعتبار",
    "conn.btnLs": "تخزين محلي (زي دي)",
    "conn.btnBt": "اشتراك سحابي",
    "conn.m1l": "الرسوم",
    "conn.m1Ls": "مفيش رسوم — تشتري كارت SD مرة",
    "conn.m1Bt": "رسوم شهرية أو سنوية",
    "conn.m2l": "الوصول",
    "conn.m2Ls": "بتشوف التسجيل من داخل تطبيق الكاميرا",
    "conn.m2Bt": "سحابة وصل لكل أجهزتك لو الإشتراك شغال",
    "conn.m3l": "الأنسب لـ",
    "conn.m3Ls": "ميزانية ثابتة بدون مصاريف متكررة",
    "conn.m3Bt": "نسخ احتياطي سحابي وأمان خارج البيت",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "كاميرا زي دي بتشتريها مرة وتدفع تاني غير كارت SD اختياري — التسجيل بيتخزن جوه الكاميرا نفسها. لو مش بتحب المصاريف الشهرية، ده الخيار الأوضح.",
    "conn.noteBt": "الاشتراكات السحابية بتديك نسخة من تسجيلاتك برا البيت وتوصيل أسهل من أي مكان، بس بتدفع شهرياً. لو البيت معاك الواي فاي والبيانات، السحابة أمان إنكشاري.",
    "box.title": "اللي هيوصلك",
    "box.sub": "كاميرا أصلية بكامل محتويات التركيب، متوفر على أمازون مصر",
    "box.i1": "كاميرا Tapo C110",
    "box.i2": "محول طاقة",
    "box.i3": "مسامير وقوالب التركيب",
    "box.i4": "دليل البدء السريع",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "TP-Link Tapo C110 — كاميرا داخلية 2K (3MP) مع رؤية ليلية وصوت باتجاهين",
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
    "rev.sub": "مواصفات المنتج وتقييم 4.5 من 5 بناءً على 5052 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "2K ورؤية ليلية",
    "rev.n1": "الصورة",
    "rev.v1": "واضحة نهار وليل",
    "rev.q2": "بلا رسوم شهرية",
    "rev.n2": "التكلفة",
    "rev.v2": "كارت SD فقط",
    "rev.q3": "ذكاء اصطناعي وكشف حركة",
    "rev.n3": "الذكاء",
    "rev.v3": "إشعارات ذكية",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "هل في رسوم شهرية؟",
    "faq.a1": "الكاميرا تشتغل من غير أي رسوم شهرية إجبارية — التسجيل بيتخزن محلياً على كارت MicroSD حتى 128 جيجا (الكارت مش متضمن).",
    "faq.q2": "محتاجة هب منفصل؟",
    "faq.a2": "لا — بتشتغل مباشرة مع راوتر الواي فاي من غير أي هب أو وحدات إضافية.",
    "faq.q3": "الرؤية الليلية تصل لقد إيه؟",
    "faq.a3": "رؤية ليلية بالأشعة تحت الحمراء تصل إلى 30 قدم (حوالي 9 أمتار) لصورة واضحة في الظلام الكامل.",
    "faq.q4": "بتسجل الفيديو فين؟",
    "faq.a4": "بيتسجل محلياً على كارت MicroSD في الكاميرا حتى 128 جيجا، وتقدر برضه تختار اشتراكات سحابية إن احتجتها حسب صفحة المنتج.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تأمن بيتك؟",
    "cta.sub": "اطلب Tapo C110 من أمازون مصر — 2K بلا رسوم شهرية",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لكاميرا TP-Link Tapo C110. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "لماذا Tapo",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الكاميرا دي ليه",
    "aud.title": "اللي هتفيد معاه Tapo C110",
    "aud.sub": "مراقبة واضحة وكشف ذكي — لكل حد عايز عين على مكان بقرب من غير رسوم",
    "aud.a1t": "أولاد صغيرين ومولودات",
    "aud.a1b": "صوت ثنائي الاتجاه بيخليك تسمع وتطمن وتكلم مولودك من أي مكان، والتصوير الليلي واضح لو نفسك تطمن في الليل.",
    "aud.a2t": "أصحاب الحيوانات الأليفة",
    "aud.a2b": "ذكاء اصطناعي بيميز الحيوانات الأليفة وبيقلل الإشعارات المزيفة، فتشوف كلبك أو قطتك وهي لعبها لو كنت برا البيت.",
    "aud.a3t": "مكاتب ومتاجر صغيرة",
    "aud.a3b": "كشف الحركة مع مناطق نشاط مخصصة بيعطيك إنذارات في وقتها لو في حركة مش متوقعة أثناء الليل — بتكلفة بسيطة من غير اشتراك.",
    "aud.a4t": "كبار السن والعيلة البعيدة",
    "aud.a4b": "متابعة الأهل من بعيد مع محادثة صوتية فورية — تشوفهم وتكلمهم في نفس اللحظة، وده أهم لأقاربك الكبار.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "2K · Wi-Fi",
    "nav.specs": "Specs",
    "nav.connect": "Local vs subscription",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Indoor security camera · 2K",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Tapo C110",
    "hero.title2": "2K · 3MP",
    "hero.sub": "An indoor 2K camera with crisp HD, night vision up to 30ft and two-way talk — with no monthly fee",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "From TP-Link — a trusted name in networking and monitoring — available on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Resolution",
    "hero.chip1v": "2K 3MP",
    "hero.chip2l": "Night vision",
    "hero.chip2v": "30ft",
    "gal.eyebrow": "From the product",
    "gal.title": "See it up close",
    "gal.sub": "Photos from the official product listing on amazon.eg",
    "gal.prev": "Previous image",
    "gal.next": "Next image",
    "gal.close": "Close",
    "gal.label": "Product photo",
    "trust.cod": "Cash on delivery available",
    "trust.codSub": "For your purchase on Amazon.eg",
    "trust.delivery": "Available on Amazon.eg",
    "trust.deliverySub": "Delivery dates on the product page",
    "trust.returns": "15–30 day returns",
    "trust.returnsSub": "Per Amazon's policy for this item",
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 4.5 out of 5 by 5052 customers on Amazon",
    "k.weight": "Rating",
    "k.weightSub": "4.5 of 5 from customers",
    "k.dpi": "Night vision",
    "k.dpiSub": "Clear image up to 30ft",
    "k.batt": "Storage",
    "k.battSub": "Local SD up to 128GB",
    "k.btns": "Resolution",
    "k.btnsSub": "2K · 3MP",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "2K video with 30ft night vision",
    "s1.b": "A 3MP sensor (2304×1296) gives crisp daytime detail, and infrared night vision reaches 30ft for clear monitoring in the dark.",
    "s2.t": "No forced monthly fee",
    "s2.b": "No separate hub and no required subscription — record on an SD card inside the camera (up to 128GB) and go back to clips whenever you need.",
    "s3.t": "Motion detection with AI",
    "s3.b": "Motion detection sends a phone alert the moment something moves, custom activity zones let you watch exactly the area you choose, and AI tells people apart from pets.",
    "s4.t": "Two-way talk",
    "s4.b": "A built-in mic and speaker let you talk to your family or calm the pet from anywhere — a live camera in your phone.",
    "s5.t": "Simple setup, many uses",
    "s5.b": "Connect to Wi-Fi directly and mount it on a wall or just stand it on a shelf — setup is quick with the screws and templates in the box.",
    "s6.t": "Works with Alexa and Google",
    "s6.b": "Compatible with Amazon Alexa and Google Assistant, so you can check the camera hands-free on your smart displays.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Colour",
    "t.colorV": "White",
    "t.sensor": "Resolution",
    "t.sensorV": "3MP (2304×1296)",
    "t.switch": "Night vision",
    "t.switchV": "30ft infrared",
    "t.weight": "Weight",
    "t.weightV": "0.07 kg",
    "t.size": "Dimensions",
    "t.conn": "Connection",
    "t.connV": "Wi-Fi single band",
    "t.batt": "Storage",
    "t.battV": "Local MicroSD up to 128GB",
    "t.os": "Compatibility",
    "t.osV": "iOS · Android · Alexa · Google Assistant",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "Camera + power adapter + mounting screws + mounting templates + quick start guide",
    "conn.eyebrow": "Local vs subscription",
    "conn.title": "The difference that matters",
    "conn.sub": "Storage on your card or cloud with a subscription — the comparison helps you decide",
    "conn.btnLs": "Local storage (this one)",
    "conn.btnBt": "Cloud subscription",
    "conn.m1l": "Cost",
    "conn.m1Ls": "No fee — buy an SD card once",
    "conn.m1Bt": "Monthly or yearly fee",
    "conn.m2l": "Access",
    "conn.m2Ls": "View recordings inside the camera app",
    "conn.m2Bt": "Cloud clips across devices while active",
    "conn.m3l": "Best for",
    "conn.m3Ls": "A fixed budget with no recurring cost",
    "conn.m3Bt": "Cloud backup and off-site safety",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "A camera like this is bought once and the only extra is an optional SD card — recordings stay on the camera. If you dislike monthly fees, this is the clearer pick.",
    "conn.noteBt": "Subscriptions give you off-site copies of your clips and easier access anywhere, but at a recurring cost. If your home has Wi-Fi and you want the extra layer, cloud is your safety net.",
    "box.title": "What arrives",
    "box.sub": "An original camera with everything for setup, available on Amazon.eg",
    "box.i1": "Tapo C110 camera",
    "box.i2": "Power adapter",
    "box.i3": "Mounting screws and templates",
    "box.i4": "Quick start guide",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "TP-Link Tapo C110 — 2K (3MP) indoor camera with night vision and two-way talk",
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
    "rev.sub": "Product specs and a 4.5 out of 5 rating from 5052 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "2K and night vision",
    "rev.n1": "Image",
    "rev.v1": "Clear day and night",
    "rev.q2": "No monthly fee",
    "rev.n2": "Cost",
    "rev.v2": "Only an SD card",
    "rev.q3": "AI and motion detection",
    "rev.n3": "Intelligence",
    "rev.v3": "Smart alerts",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Is there a monthly fee?",
    "faq.a1": "The camera works with no forced monthly fee — recordings store locally on a MicroSD card up to 128GB (card not included).",
    "faq.q2": "Does it need a hub?",
    "faq.a2": "No — it connects directly to your Wi-Fi router with no hub or extra units.",
    "faq.q3": "How far does night vision reach?",
    "faq.a3": "Infrared night vision reaches 30ft (about 9 metres) for a clear image in complete darkness.",
    "faq.q4": "Where does the video record?",
    "faq.a4": "It records locally on a MicroSD card in the camera up to 128GB, and optional cloud subscriptions are also available per the product page.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to secure your home?",
    "cta.sub": "Order the Tapo C110 on Amazon.eg — 2K with no monthly fee",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the TP-Link Tapo C110 camera. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why the Tapo",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Tapo C110 suits",
    "aud.sub": "Clear monitoring with smart detection — for anyone who wants an eye on a place with no fees",
    "aud.a1t": "Parents of babies and toddlers",
    "aud.a1b": "Two-way talk lets you hear, check in and talk to your baby from anywhere, and night vision is clear when you want peace of mind at night.",
    "aud.a2t": "Pet owners",
    "aud.a2b": "AI tells pets apart and cuts false alerts, so you can watch your dog or cat play while you are away — clear day and night.",
    "aud.a3t": "Small offices and shops",
    "aud.a3b": "Motion detection with custom activity zones gives timely alerts if something moves unexpectedly at night — at a small cost with no subscription.",
    "aud.a4t": "Elderly family and loved ones",
    "aud.a4b": "Keeping an eye on family from afar with instant two-way talk — see them and speak in the same moment, which means a lot for older relatives.",
    "hero.cta2": "Buying & delivery details",
    "offer.today": "See today's price and live offers directly on the product page at Amazon",
    "offer.payTitle": "Payment & instalments",
    "offer.paySub": "Amazon offers multiple payment methods and instalment options depending on the item and your card, and cash on delivery is available - every price, discount and deal detail appears on Amazon's own page at checkout.",
    "offer.payNote": "The price and any current offers - all of it lives on Amazon's page only.",
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
    ? 'كاميرا Tapo C110 من TP-Link — 2K 3MP، رؤية ليلية، صوت باتجاهين، بلا رسوم شهرية'
    : 'TP-Link Tapo C110 Camera — 2K 3MP, Night Vision, 2-Way Talk, No Monthly Fee';

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
const LIVE_KEY = 'tapo-c110-live';
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
const GAL_FILES = ["img/tapo-c110-01.jpg","img/tapo-c110-02.jpg","img/tapo-c110-03.jpg","img/tapo-c110-04.jpg"];
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
