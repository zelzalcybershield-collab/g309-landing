/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B0CLPKWSHQ?tag=zoq-21';
const STORE_KEY = 'joyroom-power-bank-lang';

const dict = {
  "ar": {
    "nav.tagline": "مغناطيس · 10000mAh · 20W",
    "nav.specs": "المواصفات",
    "nav.connect": "مغناطيس ولا عادي",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "موزّع مغناطيسي محمول · MagSafe",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "Joyroom",
    "hero.title2": "JR-W020 20W",
    "hero.sub": "موزّع مغناطيسي 10000 مللي أمبير بشحن USB-C PD حتى 20 واط وشحن لاسلكي MagSafe متوافق مع آيفون 12 إلى 15",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.rank": "#1 في باور بانك الموبايل على أمازون مصر",
    "hero.buy": "للشراء ومعرفة سعرها اليوم — اضغط هنا",
    "hero.chip1l": "سعة البطارية",
    "hero.chip1v": "10000 mAh",
    "hero.chip2l": "الشحن اللاسلكي",
    "hero.chip2v": "MagSafe",
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
    "trust.prime": "ماركة موثوقة",
    "trust.primeSub": "تقييم 3.6 من 5 من 220 عميل على أمازون",
    "k.weight": "سعة البطارية",
    "k.weightSub": "10000 مللي أمبير",
    "k.dpi": "قوة الشحن",
    "k.dpiSub": "حتى 20 واط USB-C PD",
    "k.batt": "الوزن",
    "k.battSub": "205 جرام فقط",
    "k.btns": "زمن شحنتها",
    "k.btnsSub": "4 ساعات من الصفر",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "شحن مغناطيسي بختم Qi",
    "s1.b": "ماغنيتات قوية بتثبّت الموبايل في مكانه للشحن اللاسلكي — زي ما مكتوب في الوصف، مع دعم Qi لبقية الأجهزة.",
    "s2.t": "USB-C PD حتى 20 واط",
    "s2.b": "خرج سلكي 20 واط من USB-C Power Delivery — يعني شحن سريع للموبايل والجهاز نفسه بيخد 4 ساعات عشان يمتلئ.",
    "s3.t": "سعة 10000 مللي أمبير",
    "s3.b": "بطارية ليثيوم بوليمر 10000 مللي أمبير بتوفّر شحنات متعددة للموبايل — مناسبة للسفر والشغل والاستخدام اليومي.",
    "s4.t": "سلكي ولاسلكي معاً",
    "s4.b": "فيها شحن مغناطيسي ولاسلكي Qi وشحن سلكي USB-C — يعني مرونة إنك تستخدم اللي معاك وقتها.",
    "s5.t": "خفيف 205 جرام",
    "s5.b": "وزن 205 جرام وأبعاد 14 × 7 × 1.6 سم — بيدخل في الجيب أو الشنطة من غير ما ياخذ مكان، والبطارية ليثيوم بوليمر.",
    "s6.t": "ضمان 12 شهر",
    "s6.b": "صفحة المنتج بتذكر ضمان 12 شهر من Joyroom وموديل JR-W020، مع شهادة بلد المنشأ الصين.",
    "t.brand": "الماركة",
    "t.model": "الموديل",
    "t.color": "اللون",
    "t.colorV": "أسود (Black)",
    "t.sensor": "النوع",
    "t.sensorV": "موزّع مغناطيسي محمول",
    "t.switch": "رقم الموديل",
    "t.switchV": "JR-W020",
    "t.weight": "الوزن",
    "t.weightV": "205 جرام",
    "t.size": "الأبعاد",
    "t.conn": "الاتصال",
    "t.connV": "USB Type-A · USB Type-C",
    "t.batt": "سعة البطارية",
    "t.battV": "10000 مللي أمبير · ليثيوم بوليمر",
    "t.os": "التوافق",
    "t.osV": "iPhone 12–15 · أجهزة Qi · USB-C",
    "t.hand": "الضمان",
    "t.handV": "12 شهراً حسب صفحة المنتج",
    "t.inbox": "في العلبة",
    "t.inboxV": "موزّع Joyroom W020 باللون الأسود",
    "conn.eyebrow": "مغناطيس ولا عادي",
    "conn.title": "الفرق اللي بيبان من أول استخدام",
    "conn.sub": "موزّع مغناطيسي MagSafe ووح شحن Qi عادي — المقارنة بتوضح ليه المغناطيس بيوفر عليك ترتيب",
    "conn.btnLs": "موزّع Joyroom مغناطيسي (زي ده)",
    "conn.btnBt": "وح شحن Qi عادي",
    "conn.m1l": "التكلفة",
    "conn.m1Ls": "سعر أعلى شوية لأنه بطارية 10000 مللي أمبير و20 واط مدمجين في واحدة",
    "conn.m1Bt": "أرخص لأنه شاحن بس من غير بطارية جوّاه",
    "conn.m2l": "الأفضل لـ",
    "conn.m2Ls": "اللي بيتحرك كتير وعايز يشحن وهو في الطريق",
    "conn.m2Bt": "اللي ما بيتحركش كتير وبيشحن على المكتب أو البيت",
    "conn.m3l": "اللي بيتغير",
    "conn.m3Ls": "الموبايل بيلزق وتفضل محتفظ بالشحن في حركتك، وعندك كمان خرج سلكي 20 واط",
    "conn.m3Bt": "بتحط الموبايل وتشكّل مكانه، ولو حركته ممكن يفصل عن الشحن",
    "conn.vizTitle": "خلاصة الفرق",
    "conn.noteLs": "لو بتشحن وأنت ماشي أو بتحب تسيب الموبايل من غير كابل، المغناطيس بيمنع الانزلاق والانفصال — والموزّع بيشيل معاك بطارية 10000 مللي أمبير بدل ما تدور على كهربا.",
    "conn.noteBt": "الوح العادي بيشحن من غير أي فكّر، بس بيفضل مربوط في الشاحن وبطنه محتاج مساحة سطح ونص ثابت.",
    "box.title": "اللي هيوصلك",
    "box.sub": "المحتوى حسب ما هو مكتوب في Included Components و Warranty Description في صفحة المنتج، متوفر على أمازون مصر",
    "box.i1": "موزّع Joyroom W020 باللون الأسود",
    "box.i2": "ضمان 12 شهراً من Joyroom",
    "box.i3": "توافق MagSafe وQi وUSB-C",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "Joyroom JR-W020 — موزّع مغناطيسي 10000mAh شحن 20W — أسود",
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
    "rev.sub": "مواصفات المنتج وتقييم 3.6 من 5 بناءً على 220 تقييم على أمازون",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "10000 mAh",
    "rev.n1": "السعة",
    "rev.v1": "بطارية ليثيوم بوليمر",
    "rev.q2": "20W PD",
    "rev.n2": "الشحن",
    "rev.v2": "USB-C Power Delivery",
    "rev.q3": "MagSafe",
    "rev.n3": "اللاسلكي",
    "rev.v3": "مغناطيس + Qi",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "سعتها كام؟",
    "faq.a1": "سعة البطارية 10000 مللي أمبير، من نوع ليثيوم بوليمر، حسب مواصفات الصفحة.",
    "faq.q2": "بتشحن بسرعة كام؟",
    "faq.a2": "خرج سلكي 20 واط من USB-C Power Delivery، وشحن لاسلكي MagSafe متوافق مع Qi — ومن مكتوب 4 ساعات لشحنتها هي.",
    "faq.q3": "هتشحن آيفون بتاعي؟",
    "faq.a3": "صفحة المنتج بتقول متوافق لاسلكي مع iPhone 12 و 13 و 14 و 15، ومع أي جهاز Android وسماعات بتيجي بـ Qi.",
    "faq.q4": "محتاج أسنّة ولا كابل معين؟",
    "faq.a4": "محتاج USB-C عشان الشحن السلكي والشحن بتاعها هي — والشاحن اللاسلكي بيشتغل من غير كابل موصول في الموبايل.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعها لو مش مناسبة؟",
    "faq.a6": "الصفحة بتشاور على إرجاع مجاني واسترجاع خلال 15 يوم حسب سياسة أمازون. راجع التفاصيل على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز تسيب كابل الشحن في الشنطة؟",
    "cta.sub": "اطلب موزّع Joyroom JR-W020 من أمازون مصر — 10000 مللي أمبير و20 واط ومغناطيس MagSafe وبدفع عند الاستلام",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لموزّع Joyroom JR-W020 المغناطيسي. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "ليه MagSafe",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "الموزّع ده ليه",
    "aud.title": "اللي هيفيد معاه Joyroom",
    "aud.sub": "شحن مغناطيسي وسلكي وسعة كبيرة في قطعة واحدة — لكل عايز طاقة في الشنطة",
    "aud.a1t": "أصحاب iPhone 12 إلى 15",
    "aud.a1b": "المغناطيس بيلزق الموبايل في مكانه ويبدأ الشحن اللاسلكي من غير ما تفكّر في مكانه — زي ما مكتوب في الوصف.",
    "aud.a2t": "اللي بيتحرك كتير في اليوم",
    "aud.a2b": "10000 مللي أمبير بتعدي موبايلك مرات كتير في الشغل والسفر واليوم اليومي.",
    "aud.a3t": "اللي معاهم أجهزة USB-C",
    "aud.a3b": "في مخرجين — USB Type-A و USB Type-C — فتشاور على أكتر من نوع كابل عندك.",
    "aud.a4t": "اللي بيدوروا على هدية عملية",
    "aud.a4b": "لون أسود بسيط وضمان 12 شهراً من Joyroom — هدية بطيمن ومفيد في الشنطة كل يوم.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "Magnetic · 10,000 mAh · 20W",
    "nav.specs": "Specs",
    "nav.connect": "Magnetic vs plain",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Magnetic power bank · MagSafe",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Joyroom",
    "hero.title2": "JR-W020 20W",
    "hero.sub": "A 10,000 mAh magnetic power bank with USB-C PD up to 20W and MagSafe-compatible wireless charging for iPhone 12 through 15",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.rank": "#1 in mobile phone portable power banks on Amazon.eg",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Battery capacity",
    "hero.chip1v": "10,000 mAh",
    "hero.chip2l": "Wireless charging",
    "hero.chip2v": "MagSafe",
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
    "trust.prime": "Trusted brand",
    "trust.primeSub": "Rated 3.6 out of 5 by 220 customers on Amazon",
    "k.weight": "Battery capacity",
    "k.weightSub": "10,000 mAh",
    "k.dpi": "Charging power",
    "k.dpiSub": "Up to 20W USB-C PD",
    "k.batt": "Weight",
    "k.battSub": "205 grams only",
    "k.btns": "Charge time",
    "k.btnsSub": "4 hours from empty",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "Magnetic charging, Qi certified",
    "s1.b": "Strong magnets hold the phone in place for wireless charging - as the listing states, with Qi support for other devices.",
    "s2.t": "USB-C PD up to 20W",
    "s2.b": "A 20W wired output over USB-C Power Delivery - so the phone charges fast, and the bank itself takes 4 hours to fill up.",
    "s3.t": "10,000 mAh",
    "s3.b": "A 10,000 mAh lithium polymer battery that covers several charges - suited to travel, work and daily use.",
    "s4.t": "Wired and wireless together",
    "s4.b": "It does magnetic and Qi wireless charging plus USB-C wired charging - so you can use whatever is at hand.",
    "s5.t": "205 grams",
    "s5.b": "205 grams and 14 × 7 × 1.6 cm - it fits a pocket or bag without eating space, and the cell is lithium polymer.",
    "s6.t": "12-month warranty",
    "s6.b": "The listing states a 12-month Joyroom warranty, model JR-W020, and China as the country of origin.",
    "t.brand": "Brand",
    "t.model": "Model",
    "t.color": "Color",
    "t.colorV": "Black",
    "t.sensor": "Type",
    "t.sensorV": "Magnetic power bank",
    "t.switch": "Model number",
    "t.switchV": "JR-W020",
    "t.weight": "Weight",
    "t.weightV": "205 g",
    "t.size": "Dimensions",
    "t.conn": "Connectivity",
    "t.connV": "USB Type-A · USB Type-C",
    "t.batt": "Battery capacity",
    "t.battV": "10,000 mAh · lithium polymer",
    "t.os": "Compatibility",
    "t.osV": "iPhone 12-15 · Qi devices · USB-C",
    "t.hand": "Warranty",
    "t.handV": "12 months as listed",
    "t.inbox": "In the box",
    "t.inboxV": "Joyroom W020 power bank, black",
    "conn.eyebrow": "Magnetic or plain",
    "conn.title": "The difference you feel on day one",
    "conn.sub": "A MagSafe magnetic bank and a plain Qi charging pad - the comparison shows why magnets save the fiddling",
    "conn.btnLs": "Joyroom magnetic bank (this one)",
    "conn.btnBt": "Plain Qi charging pad",
    "conn.m1l": "Cost",
    "conn.m1Ls": "A bit pricier because 10,000 mAh and 20W live in one device",
    "conn.m1Bt": "Cheaper because it is only a charger with no battery inside",
    "conn.m2l": "Best for",
    "conn.m2Ls": "Anyone on the move who needs to charge while out",
    "conn.m2Bt": "Anyone who stays put and charges at a desk or at home",
    "conn.m3l": "What changes",
    "conn.m3Ls": "The phone sticks on and keeps charging while you move, and you still get a 20W wired output",
    "conn.m3Bt": "You place and line up the phone, and a nudge can break the charging connection",
    "conn.vizTitle": "The difference in short",
    "conn.noteLs": "If you charge on the go, or like leaving the phone cable-free, the magnets stop it slipping and stopping - and the bank carries 10,000 mAh with you instead of hunting for a socket.",
    "conn.noteBt": "A plain pad is fuss-free, but it stays tethered to the wall and needs a flat, still surface.",
    "box.title": "What arrives",
    "box.sub": "Content per the Included Components and Warranty Description fields on the product page, available on Amazon.eg",
    "box.i1": "The Joyroom W020 power bank, black",
    "box.i2": "A 12-month Joyroom warranty",
    "box.i3": "MagSafe, Qi and USB-C compatibility",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Joyroom JR-W020 — 10,000 mAh magnetic power bank, 20W charging — black",
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
    "rev.sub": "Product specs and a 3.6 out of 5 rating from 220 ratings on Amazon",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "10,000 mAh",
    "rev.n1": "Capacity",
    "rev.v1": "Lithium polymer cell",
    "rev.q2": "20W PD",
    "rev.n2": "Charging",
    "rev.v2": "USB-C Power Delivery",
    "rev.q3": "MagSafe",
    "rev.n3": "Wireless",
    "rev.v3": "Magnets + Qi",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "How big is it?",
    "faq.a1": "The battery is 10,000 mAh, lithium polymer, per the listing specs.",
    "faq.q2": "How fast does it charge?",
    "faq.a2": "A 20W wired output over USB-C Power Delivery, plus MagSafe-compatible Qi wireless charging - and the listing gives 4 hours to refill the bank itself.",
    "faq.q3": "Will it charge my iPhone?",
    "faq.a3": "The listing says it wirelessly supports iPhone 12, 13, 14 and 15, plus any Qi Android phone and earbuds.",
    "faq.q4": "Do I need a stand or a special cable?",
    "faq.a4": "You need USB-C for wired charging and for refilling it - while the wireless side needs no cable plugged into the phone.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes - cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "The listing points to free returns and a 15-day return window per Amazon’s policy. Check the details on the product page before you buy.",
    "cta.title": "Ready to leave the charging cable in the bag?",
    "cta.sub": "Order the Joyroom JR-W020 on Amazon.eg - 10,000 mAh, 20W, MagSafe magnets and cash on delivery",
    "cta.buy": "Order on Amazon & see today’s price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for the Joyroom JR-W020 magnetic power bank. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Why MagSafe",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it is for",
    "aud.title": "Who the Joyroom suits",
    "aud.sub": "Magnetic and wired charging with a big cell in one object - for anyone who wants power in the bag",
    "aud.a1t": "iPhone 12 to 15 owners",
    "aud.a1b": "The magnets snap the phone into place and wireless charging starts without you eyeballing the position - as the listing states.",
    "aud.a2t": "Anyone out all day",
    "aud.a2b": "10,000 mAh gets a phone through work, travel and ordinary days.",
    "aud.a3t": "Anyone with USB-C gear",
    "aud.a3b": "There are two ports, USB Type-A and USB Type-C, so more than one cable type at home fits.",
    "aud.a4t": "Anyone after a practical gift",
    "aud.a4b": "A plain black finish and a 12-month Joyroom warranty - a gift that stays useful in the bag every day.",
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
    ? 'موزّع Joyroom JR-W020 المغناطيسي 10000mAh 20W | أمازون مصر'
    : 'Joyroom JR-W020 Magnetic Power Bank, 10,000 mAh, 20W | Amazon Egypt';

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
const LIVE_KEY = 'joyroom-power-bank-live';
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
const GAL_FILES = ["img/jr-00.jpg","img/jr-01.jpg","img/jr-02.jpg","img/jr-03.jpg","img/jr-04.jpg","img/jr-05.jpg","img/jr-06.jpg","img/jr-07.jpg","img/jr-08.jpg"];
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
