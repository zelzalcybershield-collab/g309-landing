/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B09QFLZ43Y?tag=zoq-21';
const STORE_KEY = 'hugomova-sunset-lamp-lang';

const dict = {
  "ar": {
    "nav.tagline": "16 لون · 360° · ريموت",
    "nav.specs": "المواصفات",
    "nav.connect": "اقتصادية ولا فخمة",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "مصباح غروب بإضاءة RGB",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "HUGOMOVA",
    "hero.title2": "Sunset Projection",
    "hero.sub": "مصباح غروب بتقنية LED بـ16 لون ودوران 360° وريموت للتحكم — لجو رومانسي وصور وبارتيهات وماينتج عنك",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في فئته (#104 في Tools & Home Improvement)",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الألوان",
    "hero.chip1v": "16 لون",
    "hero.chip2l": "الدوران",
    "hero.chip2v": "360 درجة",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه وهو شغال",
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
    "trust.prime": "ضمان سنة بجودة هوغو",
    "trust.primeSub": "ودعم 7 أيام 24 ساعة من هوغو موفا",
    "k.weight": "الألوان",
    "k.weightSub": "16 لون RGB بتتحكم من الريموت",
    "k.dpi": "الدوران",
    "k.dpiSub": "رأس يدور 360 درجة بحرية",
    "k.batt": "الطاقة",
    "k.battSub": "USB بخروج 5 فولت و5 وات",
    "k.btns": "الخامة",
    "k.btnsSub": "ألومنيوم + سيليكا + PVC وعدسة كريستال",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "16 لون RGB و4 أنماط إضاءة",
    "s1.b": "إضاءة LED بـ16 لون RGB مع أنماط Flash / Strobe / Fade / Smooth — جرب الرومانسي والهادئ والحفلة بضغطة زرار من الريموت.",
    "s2.t": "دوران 360 درجة لكامل الغرفة",
    "s2.b": "رأس المصباح بيلف 360 درجة، فتقدر توجّه الضوء على الستارة أو السقف أو الحيطة وتظلّل أي شكل عايزه.",
    "s3.t": "تحكم في السطوع بلا حدود",
    "s3.b": "عدّل درجة السطوع من الريموت حسب المكان — أنماط وطمبات حفلات جاهزة ليك في أي وقت.",
    "s4.t": "عدسة أكبر وزاوية أوسع",
    "s4.b": "عدسة الكريستال السماكة والزاوية الأوسع بيدوا غروب غني بالتفاصيل على الحيطة — أوضح وأكبر من المصابيح التقليدية.",
    "s5.t": "خامات متينة وثبات على الأرض",
    "s5.b": "ألومنيوم عالي الجودة + سيليكا + PVC، مع قاعدة ثابتة وعميل مانع للانزلاق وطبقة قطنية تحافظ على الأرض بدون خدوش.",
    "s6.t": "اقتصادي في الطاقة وموفّر ليناسب",
    "s6.b": "لمبة LED 5 وات موفّرة للطاقة وبدون وهج قوي، وعمر تشغيلي طويل — تشتغل من باور أو لابتوب بمنفذ USB.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "متعدد الألوان (16 لون)",
    "t.sensor": "النوع",
    "t.sensorV": "مصباح غروب / إضاءة ليلية",
    "t.switch": "رمز الموديل",
    "t.switchV": "B09QFLZ43Y",
    "t.weight": "الطاقة",
    "t.weightV": "USB · 5 فولت · 5 وات",
    "t.size": "الأبعاد",
    "t.conn": "التوصيل",
    "t.connV": "USB (سلك طاقة مرفق)",
    "t.batt": "التحكم",
    "t.battV": "ريموت لاسلكي",
    "t.os": "الاستخدام",
    "t.osV": "داخلي · غرفة نوم · بارتيه · تصوير",
    "t.hand": "الضمان",
    "t.handV": "سنة واحدة من هوغو موفا (حسب الصفحة)",
    "t.inbox": "في العلبة",
    "t.inboxV": "سلك الطاقة + الريموت",
    "conn.eyebrow": "اقتصادية ولا فخمة",
    "conn.title": "إضاءة الجو، من غير ما تدفع كتير",
    "conn.sub": "مصباح غروب جاهز بالريموت مقابل إضاءة احترافية للاستوديوهات — الفرق في السعر والتحكم",
    "conn.btnLs": "مصباح HUGOMOVA (زي ده)",
    "conn.btnBt": "إضاءة احترافية للاستوديو",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر اقتصادي وإضاءة جو كاملة",
    "conn.m1Bt": "سعر مرتفع لحلول استوديو مخصّصة",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "تزيين غرفة نوم أو أوضة أو تصوير المنزل والبارتيه",
    "conn.m2Bt": "التصوير الاحترافي باحتياج إضاءة دقيقة",
    "conn.m3l": "فرق الاستخدام",
    "conn.m3Ls": "16 لون ودوران 360° وريموت — جاهز في ثانية وبتكلفة بسيطة",
    "conn.m3Bt": "تحكم لوني متقدم وملحقات أكتر — لما يكون الشغل محتاجه",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو عايز جو دافي وصور حلوة وبارتيه جاهز، المصباح ده بيأدي الغرض بسعر بسيط من غير أي تجهيز.",
    "conn.noteBt": "الإضاءة الاحترافية بتستاهل لو في شغل تفصيلي، لكن أغلب الاستخدام اليومي مش هتحتاجها وهايدفعك أكتر.",
    "box.title": "في العلبة إيه؟",
    "box.sub": "المحتوى المرفق حسب صفحة المنتج على أمازون مصر — سلك الطاقة والريموت.",
    "box.i1": "مصباح HUGOMOVA Sunset Projection",
    "box.i2": "ريموت لاسلكي للتحكم",
    "box.i3": "سلك طاقة USB",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "HUGOMOVA Sunset Projection — مصباح غروب ذكي 16 لون وريموت ودوران 360°",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "التوصيل",
    "offer.shipV": "توصيل مجاني حسب الصفحة",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15 يوم وإرجاع مجاني حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "مواصفات المنتج وتقييم 3.8 من 5 بناءً على 397 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "16",
    "rev.n1": "الألوان",
    "rev.v1": "وأربع أنماط إضاءة",
    "rev.q2": "360°",
    "rev.n2": "الدوران",
    "rev.v2": "وجيه على أي حيطة",
    "rev.q3": "USB",
    "rev.n3": "الطاقة",
    "rev.v3": "من باور بانك أو لابتوب",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "إيه اللي بيميزه؟",
    "faq.a1": "16 لون RGB وريموت لاسلكي ودوران 360° بزاوية أوسع وعدسة كريستال أكبر — جو كامل بضغطة زرار.",
    "faq.q2": "بيشتغل إزاي؟",
    "faq.a2": "مصباح LED 5 وات بيشتغل بمنفذ USB (5 فولت) — توصلها بباور بانك أو شاحن أو لابتوب من غير أدوات.",
    "faq.q3": "أقدر أتحكم في السطوع؟",
    "faq.a3": "أيوة، من الريموت اللاسلكي — ومعاه أنماط Flash / Strobe / Fade / Smooth لكل الجلسات.",
    "faq.q4": "مناسب للتصوير؟",
    "faq.a4": "مناسب جداً لجو التصوير المنزلي والخلفيات الدافئة، خاصة مع القاعدة الثابتة وإمكانية توجيه الضوء 360°.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "لو وصلني فيه مشكلة؟",
    "faq.a6": "الصفحة بتتكلم عن ضمان سنة ودعم 24/7، مع إرجاع مجاني خلال 15 يوم حسب سياسة أمازون — راجع تفاصيل الاسترجاع على صفحة المنتج.",
    "cta.title": "جاهز تغيّر جو الأوضة؟",
    "cta.sub": "اطلب مصباح HUGOMOVA Sunset من أمازون مصر — 16 لون وريموت ودوران 360° والدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف السعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لمصباح HUGOMOVA Sunset Projection الذكي. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه HUGOMOVA",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "المنتج ده ليه",
    "aud.title": "اللي هيفيد معاهم المصباح",
    "aud.sub": "إضاءة جو بلمسة ريموت — للغرفة والتصوير والحفلات",
    "aud.a1t": "اللي بيحبوا جو دافي",
    "aud.a1b": "إضاءة غروب وردية وبرتقالية بتنشر جو رومانسي في أوضة النوم أو المعيشة من أول دقيقة.",
    "aud.a2t": "صنّاع المحتوى",
    "aud.a2b": "خلفية إضاءة ثابتة لتصوير الفيديو والصور والبث المباشر — ودوران 360° بيظبط الزاوية اللي تعجبك.",
    "aud.a3t": "أصحاب الحفلات والشلة",
    "aud.a3b": "أنماط Flash / Strobe / Fade / Smooth و16 لون بتحوّل أي أوضة لحفلة صغيرة في ثواني.",
    "aud.a4t": "اللي بيدوّر على هدية حلوة",
    "aud.a4b": "هدية بسيطة وبميزانية معقولة لأصحابك أو لبيتك — بتفتح وتشتغل على طول من الريموت.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "16 colors · 360° · remote",
    "nav.specs": "Specs",
    "nav.connect": "Budget or premium",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Sunset projection lamp, RGB light",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "HUGOMOVA",
    "hero.title2": "Sunset Projection",
    "hero.sub": "A sunset LED projection lamp with 16 colors, 360° rotation and a remote - for a cosy mood, photos, parties and content",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in its subcategory (#104 in Tools & Home Improvement)",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Colors",
    "hero.chip1v": "16 colors",
    "hero.chip2l": "Rotation",
    "hero.chip2v": "360°",
    "gal.eyebrow": "From the product",
    "gal.title": "See it working",
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
    "trust.prime": "One-year guarantee",
    "trust.primeSub": "7/24 customer service from HugoMova",
    "k.weight": "Colors",
    "k.weightSub": "16 RGB colors driven by the remote",
    "k.dpi": "Rotation",
    "k.dpiSub": "a head that turns a full 360°",
    "k.batt": "Power",
    "k.battSub": "USB at 5 V and 5 W",
    "k.btns": "Build",
    "k.btnsSub": "aluminium + silica + PVC and a crystal lens",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "16 RGB colors and 4 light modes",
    "s1.b": "LED light with 16 RGB colors and Flash / Strobe / Fade / Smooth effects - switch from cosy to calm to party with one remote button.",
    "s2.t": "360° rotation across the room",
    "s2.b": "The lamp head turns a full 360°, letting you aim the light onto a curtain, wall or ceiling and shape the glow you want.",
    "s3.t": "Freely adjustable brightness",
    "s3.b": "Dial the brightness from the remote to suit the room - with party-ready effects on tap any time.",
    "s4.t": "A thicker lens and wider angle",
    "s4.b": "The thicker crystal lens and wider angle throw a richly detailed sunset onto the wall - clearer and bigger than ordinary projectors.",
    "s5.t": "Sturdy build and stable base",
    "s5.b": "High-quality aluminium + silica + PVC with a stable base, a non-slip pad and a cotton layer that protects your floor from scratches.",
    "s6.t": "Energy-efficient and long lasting",
    "s6.b": "A 5 W energy-efficient LED with no harsh glare and a long service life - runs off a USB port on a power bank or laptop.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Multicolour (16 colors)",
    "t.sensor": "Type",
    "t.sensorV": "Sunset / night light",
    "t.switch": "Model number",
    "t.switchV": "B09QFLZ43Y",
    "t.weight": "Power",
    "t.weightV": "USB · 5 V · 5 W",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "USB (power cable included)",
    "t.batt": "Control",
    "t.battV": "Wireless remote",
    "t.os": "Use",
    "t.osV": "Indoor · bedroom · party · photography",
    "t.hand": "Warranty",
    "t.handV": "One year from HugoMova (per the listing)",
    "t.inbox": "In the box",
    "t.inboxV": "Power cable + remote control",
    "conn.eyebrow": "Budget or premium",
    "conn.title": "Mood lighting, without the big spend",
    "conn.sub": "A ready-to-run remote sunset lamp versus studio-grade lighting - the gap is price and control",
    "conn.btnLs": "HUGOMOVA lamp (this one)",
    "conn.btnBt": "Professional studio lighting",
    "conn.m1l": "Cost",
    "conn.m1Ls": "an economical price for a full mood setup",
    "conn.m1Bt": "A higher price for bespoke studio rigs",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Decorating a bedroom, room or home/party content",
    "conn.m2Bt": "Professional shoots that need precision lighting",
    "conn.m3l": "What changes",
    "conn.m3Ls": "16 colors, 360° rotation and a remote - set up in seconds at a low cost",
    "conn.m3Bt": "Advanced color control and more rigging - when the job truly needs it",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If you want a warm mood, good photos and a ready party vibe, this lamp does the job cheaply with zero setup.",
    "conn.noteBt": "Pro lighting is worth it for detailed work, but most everyday use will never need it and it costs far more.",
    "box.title": "What is in the box?",
    "box.sub": "The included contents per the amazon.eg listing - the power cable and the remote.",
    "box.i1": "The HUGOMOVA Sunset Projection lamp",
    "box.i2": "A wireless remote control",
    "box.i3": "A USB power cable",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "HUGOMOVA Sunset Projection - 16-color smart sunset lamp with remote and 360° rotation",
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
    "rev.sub": "Product specs and a 3.8 out of 5 rating from 397 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "16",
    "rev.n1": "Colors",
    "rev.v1": "and four light modes",
    "rev.q2": "360°",
    "rev.n2": "Rotation",
    "rev.v2": "aimed at any wall",
    "rev.q3": "USB",
    "rev.n3": "Power",
    "rev.v3": "from a power bank or laptop",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "What sets it apart?",
    "faq.a1": "16 RGB colors, a wireless remote and 360° rotation with a wider angle and a thicker crystal lens - a full mood on one button.",
    "faq.q2": "How is it powered?",
    "faq.a2": "A 5 W LED that runs off a USB port (5 V) - plug it into a power bank, charger or laptop, no tools needed.",
    "faq.q3": "Can I control the brightness?",
    "faq.a3": "Yes, from the wireless remote - and it ships with Flash / Strobe / Fade / Smooth effects for every setting.",
    "faq.q4": "Is it good for photography?",
    "faq.a4": "Great for home shoots and warm backdrops, especially with the stable base and 360° light aiming.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "What if it arrives faulty?",
    "faq.a6": "The listing mentions a one-year guarantee and 24/7 support, plus free returns within 15 days per Amazon’s policy - check the return details on the product page.",
    "cta.title": "Ready to change the mood of the room?",
    "cta.sub": "Order the HUGOMOVA Sunset lamp on Amazon.eg - 16 colors, remote, 360° rotation and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the HUGOMOVA Sunset Projection lamp. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why HUGOMOVA",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the lamp suits",
    "aud.sub": "Remote mood lighting - for the room, photos and parties",
    "aud.a1t": "Cosy-mood lovers",
    "aud.a1b": "Pink and orange sunset light that spreads a romantic mood across a bedroom or living room from minute one.",
    "aud.a2t": "Content creators",
    "aud.a2b": "A steady lighting backdrop for video, photos and live streams - with 360° rotation to nail the angle you want.",
    "aud.a3t": "Party hosts",
    "aud.a3b": "Flash / Strobe / Fade / Smooth effects and 16 colors turn any room into a little party in seconds.",
    "aud.a4t": "Anyone after a lovely gift",
    "aud.a4b": "A simple, budget-friendly gift for friends or your own place - unpack, power up and it just works from the remote.",
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
    ? 'مصباح HUGOMOVA Sunset Projection غروب 16 لون وريموت | أمازون مصر'
    : 'HUGOMOVA Sunset Projection Lamp, 16 colors with remote | Amazon Egypt';

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
const LIVE_KEY = 'hugomova-sunset-lamp-live';
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
const GAL_FILES = ["img/hg-00.jpg","img/hg-01.jpg","img/hg-02.jpg","img/hg-03.jpg","img/hg-04.jpg","img/hg-05.jpg","img/hg-06.jpg"];
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
