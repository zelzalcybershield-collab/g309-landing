/* ============================================================
 * Product landing page - one dictionary per product, injected from the data file.
   · i18n (ar / en) with RTL <-> LTR switching
 * Two-up comparison section
   · Count-up numbers
   ============================================================ */

const PRODUCT_URL = 'https://www.amazon.eg/dp/B08D11MN1M?tag=zoq-21';
const STORE_KEY = 'laptop-stand-alum-lang';

const dict = {
  "ar": {
    "nav.tagline": "7 ارتفاعات · قابل للطي",
    "nav.specs": "المواصفات",
    "nav.aud": "مين ليه",
    "nav.offer": "السعر والشراء",
    "nav.faq": "أسئلة شائعة",
    "nav.buy": "اشترِ الآن",
    "hero.eyebrow": "حامل لابتوب",
    "hero.stock": "متوفر في المخزون",
    "hero.outOfStock": "غير متوفر حالياً",
    "hero.title1": "حامل لابتوب",
    "hero.title2": "ألمنيوم قابل للطي",
    "hero.sub": "يخفف ألم الرقبة والظهر بسبعة ارتفاعات قابلة للتعديل، خفيف وقابل للطي — تحط عليه لابتوبك ويبدأ يرتاح جسدك",
    "hero.reviews": "من {n} تقييم على أمازون",
    "hero.buy": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "hero.chip1l": "الارتفاعات",
    "hero.chip1v": "7 مستويات",
    "hero.chip2l": "التوافق",
    "hero.chip2v": "10–15.6\"",
    "gal.eyebrow": "من المنتج",
    "gal.title": "شوفه عن قرب",
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
    "trust.prime": "خفيف جدًا",
    "trust.primeSub": "يخزن بسهولة في الحقيبة",
    "k.weight": "الارتفاعات",
    "k.weightSub": "7 مستويات للتعديل",
    "k.dpi": "الحمل",
    "k.dpiSub": "يدعم حتى 5 كجم",
    "k.batt": "التهوية",
    "k.battSub": "تصميم مفتوح للتبريد",
    "k.btns": "الحجم",
    "k.btnsSub": "10–15.6 بوصة",
    "specs.eyebrow": "المواصفات",
    "specs.title": "المواصفات بالأرقام الحقيقية",
    "specs.sub": "من صفحة المنتج على أمازون مصر",
    "specs.table": "الورقة التقنية الكاملة",
    "s1.t": "7 ارتفاعات قابلة للتعديل",
    "s1.b": "تقدر تعدّله لزاوية وارتفاع مريحين لكتفك ورقبتك، يقلل الإجهاد خلال ساعات العمل الطويلة.",
    "s2.t": "ألمنيوم قوي وخفيف",
    "s2.b": "مصنوع من سبيكة الألمنيوم سميكة، قوي يكفي ليدعم لابتوب بوزن يصل لـ5 كجم، وخفيف جدًا ما يزيدش من حمل الشنطة.",
    "s3.t": "قابل للطي ويخزن بسهولة",
    "s3.b": "التصميم القابل للطي بيسهّل حمله في الحقيبة، ممتاز للتنقل بين البيت والمكتب أو السفر.",
    "s4.t": "تهوية أفضل لتبريد اللابتوب",
    "s4.b": "التصميم المفتوح من الأسفل بيحسّن تدفق الهواء ويقلل من ارتفاع حرارة الجهاز أثناء الاستخدام لفترات طويلة.",
    "s5.t": "حماية لابتوبك",
    "s5.b": "بها وسادات سيليكون مانعة للانزلاق فوق وتحت، تحافظ على جهازك من الخدش ومن الحركة أثناء الكتابة.",
    "s6.t": "متوافق واسع النطاق",
    "s6.b": "يناسب أغلب اللابتوبات من 10 إلى 15.6 بوصة، ويستخدم كحامل للتابلت والكتب أيضاً حسب الحاجة.",
    "t.brand": "الماركة",
    "t.model": "النوع",
    "t.color": "المادة",
    "t.colorV": "ألمنيوم",
    "t.sensor": "الارتفاعات",
    "t.sensorV": "7 مستويات قابلة للتعديل",
    "t.switch": "الحد الأقصى للوزن",
    "t.switchV": "حتى 5 كجم",
    "t.weight": "التوافق",
    "t.weightV": "10–15.6 بوصة",
    "t.size": "قابل للطي",
    "t.sizeV": "نعم",
    "t.conn": "التهوية",
    "t.connV": "تصميم مفتوح من الأسفل",
    "t.batt": "الوزن",
    "t.battV": "خفيف جدًا",
    "t.os": "الحماية",
    "t.osV": "وسادات سيليكون مانعة للانزلاق",
    "t.hand": "الضمان",
    "t.handV": "حسب سياسة أمازون للإرجاع",
    "t.inbox": "في العلبة",
    "t.inboxV": "حامل اللابتوب + كيس التخزين القابل للحمل",
    "offer.eyebrow": "السعر والعروض",
    "offer.title": "اشترِ من أمازون مصر",
    "offer.productName": "حامل لابتوب ألومنيوم 7 ارتفاعات — 10-15.6 بوصة",
    "offer.seller": "متوفر على أمازون مصر",
    "offer.inStock": "متوفر",
    "offer.inStockOut": "غير متوفر",
    "offer.ship": "موعد التوصيل",
    "offer.shipV": "بتشوف الموعد على صفحة المنتج",
    "offer.ret": "مدة الاسترجاع",
    "offer.retV": "15–30 يوم حسب سياسة أمازون",
    "offer.buyNow": "للشراء ومعرفة سعره اليوم — اضغط هنا",
    "offer.checkout": "بتتم عملية الشراء والدفع على أمازون مصر",
    "rev.eyebrow": "ليه تختاره",
    "rev.title": "أسباب تخليك تختاره",
    "rev.sub": "عملي جداً وسعر اقتصادي تقييم 3.9 من 5 على أمازون مصر",
    "rev.count": "{n} تقييم · {r} من 5",
    "rev.q1": "7 ارتفاعات",
    "rev.n1": "التعديل",
    "rev.v1": "يريح الرقبة",
    "rev.q2": "قابل للطي",
    "rev.n2": "النقل",
    "rev.v2": "يخزن بسهولة",
    "rev.q3": "تهوية جيدة",
    "rev.n3": "التبريد",
    "rev.v3": "أقل سخونة",
    "faq.eyebrow": "أسئلة شائعة",
    "faq.title": "أسئلة يسألها المشترين",
    "faq.q1": "يناسب لابتوب 15.6 بوصة؟",
    "faq.a1": "نعم، مناسب للابتوبات من 10 إلى 15.6 بوصة حسب الأبعاد الأساسية.",
    "faq.q2": "هل هو قوي كفاية؟",
    "faq.a2": "يدعم حتى 5 كجم، كافي لمعظم اللابتوبات بما فيها بعض اللابتوبات الثقيلة.",
    "faq.q3": "قابل للطي وسهل الحمل؟",
    "faq.a3": "نعم، التصميم قابل للطي ويأتي مع كيس تخزين صغير، يقدر يدخل بسهولة في الحقيبة.",
    "faq.q4": "بيساعد في تبريد اللابتوب؟",
    "faq.a4": "نعم، التصميم المفتوح من الأسفل بيحسّن تدفق الهواء ويساعد في تقليل الحرارة.",
    "faq.q5": "أقدر أدفع كاش عند الاستلام؟",
    "faq.a5": "أيوة — الدفع عند الاستلام متاح لهذا المنتج على أمازون مصر، وفي طرق دفع تانية على صفحة أمازون وقت الدفع.",
    "faq.q6": "أقدر أرجّعه لو مش مناسب؟",
    "faq.a6": "المفروض في معظم المنتجات فترة استرجاع من 15–30 يوم حسب سياسة أمازون. راجع تفاصيل الاسترجاع على صفحة المنتج قبل ما تشتري.",
    "cta.title": "جاهز ترتاح رقبتك؟",
    "cta.sub": "اطلب حامل اللابتوب الألومنيوم من أمازون مصر — 7 ارتفاعات وقابل للطي",
    "cta.buy": "اطلب من أمازون وشوف سعر اليوم",
    "cta.questions": "عايز تسأل أكتر؟",
    "footer.about": "صفحة هبوط لحامل لابتوب ألومنيوم. الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون.",
    "footer.h1": "الصفحة",
    "footer.h2": "المنتج",
    "footer.h3": "تابعنا",
    "footer.l1": "شراء من أمازون",
    "footer.l2": "محتويات العلبة",
    "footer.l3": "مزايا",
    "footer.disclaimer": "الأسعار والأرقام قابلة للتغيير حسب التوفر على أمازون. المواصفات كما وردت في صفحة المنتج.",
    "footer.madeBy": "صفحة هبوط · AR / EN",
    "aud.eyebrow": "ده ليه",
    "aud.title": "اللي هيستفيد منه",
    "aud.sub": "مفيد جداً لأي حد بيسهر قدام اللابتوب لساعات طويلة",
    "aud.a1t": "الموظفين عن بُعد",
    "aud.a1b": "يخفف الإجهاد في الرقبة والظهر خلال الاجتماعات والعمل اليومي.",
    "aud.a2t": "الطلاب",
    "aud.a2b": "مريح للدراسة لساعات طويلة وسعره اقتصادي جداً.",
    "aud.a3t": "المسافرون",
    "aud.a3b": "قابل للطي جدًا ويخزن بسهولة في الحقيبة بدون ما ياخد مساحة كبيرة.",
    "aud.a4t": "أي حد بيستخدم اللابتوب كثير",
    "aud.a4b": "يحسّن وضع الجسم ويساعد في التبريد في نفس الوقت.",
    "hero.cta2": "تفاصيل الشراء والتوصيل",
    "offer.today": "معرفة سعر اليوم والخصومات النشطة مباشرةً من صفحة المنتج على أمازون",
    "offer.payTitle": "الدفع والتقسيط",
    "offer.paySub": "أمازون بيوفر طرق دفع متعددة وخيارات تقسيط حسب المنتج والبطاقة، والدفع عند الاستلام متاح — وكل تفاصيل السعر والخصومات والعروض بتظهر على صفحة أمازون نفسها لحظة الشراء.",
    "offer.payNote": "السعر وأي عروض حالية — كل ده على صفحة أمازون بس.",
    "nav.all": "كل المنتجات"
  },
  "en": {
    "nav.tagline": "7 heights · foldable",
    "nav.specs": "Specs",
    "nav.aud": "Who for",
    "nav.offer": "Price & Buy",
    "nav.faq": "FAQ",
    "nav.buy": "Buy Now",
    "hero.eyebrow": "Laptop stand",
    "hero.stock": "In stock",
    "hero.outOfStock": "Currently unavailable",
    "hero.title1": "Aluminium",
    "hero.title2": "Foldable Stand",
    "hero.sub": "Relieves neck and back strain with 7 adjustable heights — lightweight, foldable and better for your posture",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.buy": "Buy & see today's price — click here",
    "hero.chip1l": "Heights",
    "hero.chip1v": "7 levels",
    "hero.chip2l": "Fits",
    "hero.chip2v": "10–15.6\"",
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
    "trust.prime": "Ultra lightweight",
    "trust.primeSub": "Slips easily into your bag",
    "k.weight": "Heights",
    "k.weightSub": "7 adjustable levels",
    "k.dpi": "Load",
    "k.dpiSub": "Supports up to 5kg",
    "k.batt": "Ventilation",
    "k.battSub": "Open-bottom design",
    "k.btns": "Size",
    "k.btnsSub": "10–15.6 inches",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "7 adjustable heights",
    "s1.b": "Find the angle and height that suits your neck and shoulders — reduces strain through long work sessions.",
    "s2.t": "Strong yet light aluminium",
    "s2.b": "Made from thick aluminium alloy, it's sturdy enough to hold up to 5kg while remaining very light for travel.",
    "s3.t": "Foldable, easy to carry",
    "s3.b": "The foldable design slips into your bag with ease — perfect for moving between home, office or on the road.",
    "s4.t": "Better airflow for cooling",
    "s4.b": "The open-bottom design improves airflow, helping to keep your laptop cooler during longer use.",
    "s5.t": "Protects your laptop",
    "s5.b": "Non-slip silicone pads on top and bottom keep your device stable and free from scratches while typing.",
    "s6.t": "Wide compatibility",
    "s6.b": "Fits most laptops from 10 to 15.6 inches, and also works well with tablets and books.",
    "t.brand": "Brand",
    "t.model": "Type",
    "t.color": "Material",
    "t.colorV": "Aluminium",
    "t.sensor": "Heights",
    "t.sensorV": "7 adjustable levels",
    "t.switch": "Max load",
    "t.switchV": "Up to 5kg",
    "t.weight": "Compatibility",
    "t.weightV": "10–15.6 inches",
    "t.size": "Foldable",
    "t.sizeV": "Yes",
    "t.conn": "Ventilation",
    "t.connV": "Open-bottom airflow",
    "t.batt": "Weight",
    "t.battV": "Very lightweight",
    "t.os": "Protection",
    "t.osV": "Anti-slip silicone pads",
    "t.hand": "Warranty",
    "t.handV": "Per Amazon's return policy",
    "t.inbox": "In the box",
    "t.inboxV": "Laptop stand + carry pouch",
    "offer.eyebrow": "Price & offers",
    "offer.title": "Buy on Amazon.eg",
    "offer.productName": "Aluminium Laptop Stand — 7 heights, fits 10–15.6\"",
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
    "rev.sub": "Practical, affordable and rated 3.9 out of 5 on Amazon.eg",
    "rev.count": "{n} ratings · {r} of 5",
    "rev.q1": "7 heights",
    "rev.n1": "Adjustable",
    "rev.v1": "Relieves neck",
    "rev.q2": "Foldable",
    "rev.n2": "Portable",
    "rev.v2": "Easy to pack",
    "rev.q3": "Good airflow",
    "rev.n3": "Cooling",
    "rev.v3": "Runs cooler",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask",
    "faq.q1": "Will it fit a 15.6-inch laptop?",
    "faq.a1": "Yes — it fits laptops from 10 to 15.6 inches.",
    "faq.q2": "Is it strong enough?",
    "faq.a2": "It supports up to 5kg, enough for most laptops including some heavier models.",
    "faq.q3": "Is it foldable and easy to carry?",
    "faq.a3": "Yes — the foldable design comes with a small pouch, so it fits easily in your bag.",
    "faq.q4": "Does it help cool the laptop?",
    "faq.a4": "Yes — the open-bottom design improves airflow and helps reduce heat.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes — cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15–30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to give your neck a break?",
    "cta.sub": "Order the aluminium laptop stand on Amazon.eg — 7 heights, foldable",
    "cta.buy": "Order on Amazon & see today's price",
    "cta.questions": "More questions?",
    "footer.about": "Landing page for an aluminium laptop stand. Prices and figures can change with availability on Amazon.",
    "footer.h1": "Page",
    "footer.h2": "Product",
    "footer.h3": "Follow",
    "footer.l1": "Buy on Amazon",
    "footer.l2": "In the box",
    "footer.l3": "Benefits",
    "footer.disclaimer": "Prices and figures can change with availability on Amazon. Specifications as listed on the product page.",
    "footer.madeBy": "Landing page · AR / EN",
    "aud.eyebrow": "Who it's for",
    "aud.title": "Who benefits from it",
    "aud.sub": "Helpful for anyone who spends long hours in front of a laptop",
    "aud.a1t": "Remote workers",
    "aud.a1b": "Eases neck and back strain through meetings and your workday.",
    "aud.a2t": "Students",
    "aud.a2b": "Comfortable for long study sessions and very affordable.",
    "aud.a3t": "Travellers",
    "aud.a3b": "Foldable and slim — fits easily in your bag without taking much space.",
    "aud.a4t": "Heavy laptop users",
    "aud.a4b": "Improves posture and helps keep your laptop cooler at the same time.",
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
    ? 'حامل لابتوب ألومنيوم — 7 ارتفاعات، قابل للطي، مع تهوية'
    : 'Aluminium Laptop Stand — 7 heights, foldable, ventilated';

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
const LIVE_KEY = 'laptop-stand-alum-live';
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
const GAL_FILES = ["img/laptop-stand-alum-01.jpg","img/laptop-stand-alum-02.jpg","img/laptop-stand-alum-03.jpg"];
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
