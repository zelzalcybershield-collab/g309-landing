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
    "nav.tagline": "7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã‚Â· Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å ",
    "nav.specs": "Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â§Ã˜ÂµÃ™ÂÃ˜Â§Ã˜Âª",
    "nav.aud": "Ã™â€¦Ã™Å Ã™â€  Ã™â€žÃ™Å Ã™â€¡",
    "nav.offer": "Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡",
    "nav.faq": "Ã˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã˜Â´Ã˜Â§Ã˜Â¦Ã˜Â¹Ã˜Â©",
    "nav.buy": "Ã˜Â§Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Â Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ ",
    "hero.eyebrow": "Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨",
    "hero.stock": "Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â®Ã˜Â²Ã™Ë†Ã™â€ ",
    "hero.outOfStock": "Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã˜Â­Ã˜Â§Ã™â€žÃ™Å Ã˜Â§Ã™â€¹",
    "hero.title1": "Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨",
    "hero.title2": "Ã˜Â£Ã™â€žÃ™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å ",
    "hero.sub": "Ã™Å Ã˜Â®Ã™ÂÃ™Â Ã˜Â£Ã™â€žÃ™â€¦ Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ˜Â¨Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¸Ã™â€¡Ã˜Â± Ã˜Â¨Ã˜Â³Ã˜Â¨Ã˜Â¹Ã˜Â© Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Â© Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â¹Ã˜Â¯Ã™Å Ã™â€žÃ˜Å’ Ã˜Â®Ã™ÂÃ™Å Ã™Â Ã™Ë†Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã¢â‚¬â€ Ã˜ÂªÃ˜Â­Ã˜Â· Ã˜Â¹Ã™â€žÃ™Å Ã™â€¡ Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã™Æ’ Ã™Ë†Ã™Å Ã˜Â¨Ã˜Â¯Ã˜Â£ Ã™Å Ã˜Â±Ã˜ÂªÃ˜Â§Ã˜Â­ Ã˜Â¬Ã˜Â³Ã˜Â¯Ã™Æ’",
    "hero.reviews": "Ã™â€¦Ã™â€  {n} Ã˜ÂªÃ™â€šÃ™Å Ã™Å Ã™â€¦ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ ",
    "hero.buy": "Ã™â€žÃ™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™Ë†Ã™â€¦Ã˜Â¹Ã˜Â±Ã™ÂÃ˜Â© Ã˜Â³Ã˜Â¹Ã˜Â±Ã™â€¡ Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦ Ã¢â‚¬â€ Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã™â€¡Ã™â€ Ã˜Â§",
    "hero.chip1l": "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª",
    "hero.chip1v": "7 Ã™â€¦Ã˜Â³Ã˜ÂªÃ™Ë†Ã™Å Ã˜Â§Ã˜Âª",
    "hero.chip2l": "Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€š",
    "hero.chip2v": "10Ã¢â‚¬â€œ15.6\"",
    "gal.eyebrow": "Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "gal.title": "Ã˜Â´Ã™Ë†Ã™ÂÃ™â€¡ Ã˜Â¹Ã™â€  Ã™â€šÃ˜Â±Ã˜Â¨",
    "gal.sub": "Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Â± Ã™â€¦Ã™â€  Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â³Ã™â€¦Ã™Å Ã˜Â© Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "gal.prev": "Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â§Ã˜Â¨Ã™â€šÃ˜Â©",
    "gal.next": "Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã™â€žÃ™Å Ã˜Â©",
    "gal.close": "Ã˜Â¥Ã˜ÂºÃ™â€žÃ˜Â§Ã™â€š",
    "gal.label": "Ã˜ÂµÃ™Ë†Ã˜Â±Ã˜Â© Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "trust.cod": "Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹ Ã˜Â¹Ã™â€ Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ™â€žÃ˜Â§Ã™â€¦ Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­",
    "trust.codSub": "Ã™â€žÃ™Æ’Ã™â€ž Ã˜Â¹Ã™â€¦Ã™â€žÃ™Å Ã˜Â© Ã˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "trust.delivery": "Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "trust.deliverySub": "Ã™â€¦Ã™Ë†Ã˜Â§Ã˜Â¹Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜ÂµÃ™Å Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "trust.returns": "Ã˜Â§Ã˜Â³Ã˜ÂªÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¹ 15Ã¢â‚¬â€œ30 Ã™Å Ã™Ë†Ã™â€¦",
    "trust.returnsSub": "Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â³Ã™Å Ã˜Â§Ã˜Â³Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â·Ã˜Â¨Ã™â€˜Ã™â€šÃ˜Â© Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "trust.prime": "Ã˜Â®Ã™ÂÃ™Å Ã™Â Ã˜Â¬Ã˜Â¯Ã™â€¹Ã˜Â§",
    "trust.primeSub": "Ã™Å Ã˜Â®Ã˜Â²Ã™â€  Ã˜Â¨Ã˜Â³Ã™â€¡Ã™Ë†Ã™â€žÃ˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™Å Ã˜Â¨Ã˜Â©",
    "k.weight": "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª",
    "k.weightSub": "7 Ã™â€¦Ã˜Â³Ã˜ÂªÃ™Ë†Ã™Å Ã˜Â§Ã˜Âª Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â¹Ã˜Â¯Ã™Å Ã™â€ž",
    "k.dpi": "Ã˜Â§Ã™â€žÃ˜Â­Ã™â€¦Ã™â€ž",
    "k.dpiSub": "Ã™Å Ã˜Â¯Ã˜Â¹Ã™â€¦ Ã˜Â­Ã˜ÂªÃ™â€° 5 Ã™Æ’Ã˜Â¬Ã™â€¦",
    "k.batt": "Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€¡Ã™Ë†Ã™Å Ã˜Â©",
    "k.battSub": "Ã˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã™â€¦Ã™ÂÃ˜ÂªÃ™Ë†Ã˜Â­ Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯",
    "k.btns": "Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â¬Ã™â€¦",
    "k.btnsSub": "10Ã¢â‚¬â€œ15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â©",
    "specs.eyebrow": "Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â§Ã˜ÂµÃ™ÂÃ˜Â§Ã˜Âª",
    "specs.title": "Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â§Ã˜ÂµÃ™ÂÃ˜Â§Ã˜Âª Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â±Ã™â€šÃ˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™Å Ã™â€šÃ™Å Ã˜Â©",
    "specs.sub": "Ã™â€¦Ã™â€  Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "specs.table": "Ã˜Â§Ã™â€žÃ™Ë†Ã˜Â±Ã™â€šÃ˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€šÃ™â€ Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ™Æ’Ã˜Â§Ã™â€¦Ã™â€žÃ˜Â©",
    "s1.t": "7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Â© Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â¹Ã˜Â¯Ã™Å Ã™â€ž",
    "s1.b": "Ã˜ÂªÃ™â€šÃ˜Â¯Ã˜Â± Ã˜ÂªÃ˜Â¹Ã˜Â¯Ã™â€˜Ã™â€žÃ™â€¡ Ã™â€žÃ˜Â²Ã˜Â§Ã™Ë†Ã™Å Ã˜Â© Ã™Ë†Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹ Ã™â€¦Ã˜Â±Ã™Å Ã˜Â­Ã™Å Ã™â€  Ã™â€žÃ™Æ’Ã˜ÂªÃ™ÂÃ™Æ’ Ã™Ë†Ã˜Â±Ã™â€šÃ˜Â¨Ã˜ÂªÃ™Æ’Ã˜Å’ Ã™Å Ã™â€šÃ™â€žÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Â¯ Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â·Ã™Ë†Ã™Å Ã™â€žÃ˜Â©.",
    "s2.t": "Ã˜Â£Ã™â€žÃ™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ Ã™â€šÃ™Ë†Ã™Å  Ã™Ë†Ã˜Â®Ã™ÂÃ™Å Ã™Â",
    "s2.b": "Ã™â€¦Ã˜ÂµÃ™â€ Ã™Ë†Ã˜Â¹ Ã™â€¦Ã™â€  Ã˜Â³Ã˜Â¨Ã™Å Ã™Æ’Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â£Ã™â€žÃ™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ Ã˜Â³Ã™â€¦Ã™Å Ã™Æ’Ã˜Â©Ã˜Å’ Ã™â€šÃ™Ë†Ã™Å  Ã™Å Ã™Æ’Ã™ÂÃ™Å  Ã™â€žÃ™Å Ã˜Â¯Ã˜Â¹Ã™â€¦ Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã˜Â¨Ã™Ë†Ã˜Â²Ã™â€  Ã™Å Ã˜ÂµÃ™â€ž Ã™â€žÃ™â‚¬5 Ã™Æ’Ã˜Â¬Ã™â€¦Ã˜Å’ Ã™Ë†Ã˜Â®Ã™ÂÃ™Å Ã™Â Ã˜Â¬Ã˜Â¯Ã™â€¹Ã˜Â§ Ã™â€¦Ã˜Â§ Ã™Å Ã˜Â²Ã™Å Ã˜Â¯Ã˜Â´ Ã™â€¦Ã™â€  Ã˜Â­Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â´Ã™â€ Ã˜Â·Ã˜Â©.",
    "s3.t": "Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã™Ë†Ã™Å Ã˜Â®Ã˜Â²Ã™â€  Ã˜Â¨Ã˜Â³Ã™â€¡Ã™Ë†Ã™â€žÃ˜Â©",
    "s3.b": "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã˜Â¨Ã™Å Ã˜Â³Ã™â€¡Ã™â€˜Ã™â€ž Ã˜Â­Ã™â€¦Ã™â€žÃ™â€¡ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™Å Ã˜Â¨Ã˜Â©Ã˜Å’ Ã™â€¦Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â² Ã™â€žÃ™â€žÃ˜ÂªÃ™â€ Ã™â€šÃ™â€ž Ã˜Â¨Ã™Å Ã™â€  Ã˜Â§Ã™â€žÃ˜Â¨Ã™Å Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã™Æ’Ã˜ÂªÃ˜Â¨ Ã˜Â£Ã™Ë† Ã˜Â§Ã™â€žÃ˜Â³Ã™ÂÃ˜Â±.",
    "s4.t": "Ã˜ÂªÃ™â€¡Ã™Ë†Ã™Å Ã˜Â© Ã˜Â£Ã™ÂÃ˜Â¶Ã™â€ž Ã™â€žÃ˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨",
    "s4.b": "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜ÂªÃ™Ë†Ã˜Â­ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã™ÂÃ™â€ž Ã˜Â¨Ã™Å Ã˜Â­Ã˜Â³Ã™â€˜Ã™â€  Ã˜ÂªÃ˜Â¯Ã™ÂÃ™â€š Ã˜Â§Ã™â€žÃ™â€¡Ã™Ë†Ã˜Â§Ã˜Â¡ Ã™Ë†Ã™Å Ã™â€šÃ™â€žÃ™â€ž Ã™â€¦Ã™â€  Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹ Ã˜Â­Ã˜Â±Ã˜Â§Ã˜Â±Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¡Ã˜Â§Ã˜Â² Ã˜Â£Ã˜Â«Ã™â€ Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã˜Â§Ã™â€¦ Ã™â€žÃ™ÂÃ˜ÂªÃ˜Â±Ã˜Â§Ã˜Âª Ã˜Â·Ã™Ë†Ã™Å Ã™â€žÃ˜Â©.",
    "s5.t": "Ã˜Â­Ã™â€¦Ã˜Â§Ã™Å Ã˜Â© Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã™Æ’",
    "s5.b": "Ã˜Â¨Ã™â€¡Ã˜Â§ Ã™Ë†Ã˜Â³Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â³Ã™Å Ã™â€žÃ™Å Ã™Æ’Ã™Ë†Ã™â€  Ã™â€¦Ã˜Â§Ã™â€ Ã˜Â¹Ã˜Â© Ã™â€žÃ™â€žÃ˜Â§Ã™â€ Ã˜Â²Ã™â€žÃ˜Â§Ã™â€š Ã™ÂÃ™Ë†Ã™â€š Ã™Ë†Ã˜ÂªÃ˜Â­Ã˜ÂªÃ˜Å’ Ã˜ÂªÃ˜Â­Ã˜Â§Ã™ÂÃ˜Â¸ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Â²Ã™Æ’ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â¯Ã˜Â´ Ã™Ë†Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â±Ã™Æ’Ã˜Â© Ã˜Â£Ã˜Â«Ã™â€ Ã˜Â§Ã˜Â¡ Ã˜Â§Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â§Ã˜Â¨Ã˜Â©.",
    "s6.t": "Ã™â€¦Ã˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€š Ã™Ë†Ã˜Â§Ã˜Â³Ã˜Â¹ Ã˜Â§Ã™â€žÃ™â€ Ã˜Â·Ã˜Â§Ã™â€š",
    "s6.b": "Ã™Å Ã™â€ Ã˜Â§Ã˜Â³Ã˜Â¨ Ã˜Â£Ã˜ÂºÃ™â€žÃ˜Â¨ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â§Ã˜Âª Ã™â€¦Ã™â€  10 Ã˜Â¥Ã™â€žÃ™â€° 15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â©Ã˜Å’ Ã™Ë†Ã™Å Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦ Ã™Æ’Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â¨ Ã˜Â£Ã™Å Ã˜Â¶Ã˜Â§Ã™â€¹ Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã˜Â¬Ã˜Â©.",
    "t.brand": "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â§Ã˜Â±Ã™Æ’Ã˜Â©",
    "t.model": "Ã˜Â§Ã™â€žÃ™â€ Ã™Ë†Ã˜Â¹",
    "t.color": "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â§Ã˜Â¯Ã˜Â©",
    "t.colorV": "Ã˜Â£Ã™â€žÃ™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦",
    "t.sensor": "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª",
    "t.sensorV": "7 Ã™â€¦Ã˜Â³Ã˜ÂªÃ™Ë†Ã™Å Ã˜Â§Ã˜Âª Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Â© Ã™â€žÃ™â€žÃ˜ÂªÃ˜Â¹Ã˜Â¯Ã™Å Ã™â€ž",
    "t.switch": "Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â£Ã™â€šÃ˜ÂµÃ™â€° Ã™â€žÃ™â€žÃ™Ë†Ã˜Â²Ã™â€ ",
    "t.switchV": "Ã˜Â­Ã˜ÂªÃ™â€° 5 Ã™Æ’Ã˜Â¬Ã™â€¦",
    "t.weight": "Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€š",
    "t.weightV": "10Ã¢â‚¬â€œ15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â©",
    "t.size": "Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å ",
    "t.sizeV": "Ã™â€ Ã˜Â¹Ã™â€¦",
    "t.conn": "Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€¡Ã™Ë†Ã™Å Ã˜Â©",
    "t.connV": "Ã˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã™â€¦Ã™ÂÃ˜ÂªÃ™Ë†Ã˜Â­ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã™ÂÃ™â€ž",
    "t.batt": "Ã˜Â§Ã™â€žÃ™Ë†Ã˜Â²Ã™â€ ",
    "t.battV": "Ã˜Â®Ã™ÂÃ™Å Ã™Â Ã˜Â¬Ã˜Â¯Ã™â€¹Ã˜Â§",
    "t.os": "Ã˜Â§Ã™â€žÃ˜Â­Ã™â€¦Ã˜Â§Ã™Å Ã˜Â©",
    "t.osV": "Ã™Ë†Ã˜Â³Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â³Ã™Å Ã™â€žÃ™Å Ã™Æ’Ã™Ë†Ã™â€  Ã™â€¦Ã˜Â§Ã™â€ Ã˜Â¹Ã˜Â© Ã™â€žÃ™â€žÃ˜Â§Ã™â€ Ã˜Â²Ã™â€žÃ˜Â§Ã™â€š",
    "t.hand": "Ã˜Â§Ã™â€žÃ˜Â¶Ã™â€¦Ã˜Â§Ã™â€ ",
    "t.handV": "Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â³Ã™Å Ã˜Â§Ã˜Â³Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€žÃ™â€žÃ˜Â¥Ã˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¹",
    "t.inbox": "Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€žÃ˜Â¨Ã˜Â©",
    "t.inboxV": "Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ + Ã™Æ’Ã™Å Ã˜Â³ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â®Ã˜Â²Ã™Å Ã™â€  Ã˜Â§Ã™â€žÃ™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â­Ã™â€¦Ã™â€ž",
    "offer.eyebrow": "Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã™Ë†Ã˜Â¶",
    "offer.title": "Ã˜Â§Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Â Ã™â€¦Ã™â€  Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "offer.productName": "Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã˜Â£Ã™â€žÃ™Ë†Ã™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ 7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã¢â‚¬â€ 10-15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â©",
    "offer.seller": "Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "offer.inStock": "Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â±",
    "offer.inStockOut": "Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â±",
    "offer.ship": "Ã™â€¦Ã™Ë†Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜ÂµÃ™Å Ã™â€ž",
    "offer.shipV": "Ã˜Â¨Ã˜ÂªÃ˜Â´Ã™Ë†Ã™Â Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â¹Ã˜Â¯ Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "offer.ret": "Ã™â€¦Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¹",
    "offer.retV": "15Ã¢â‚¬â€œ30 Ã™Å Ã™Ë†Ã™â€¦ Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â³Ã™Å Ã˜Â§Ã˜Â³Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ ",
    "offer.buyNow": "Ã™â€žÃ™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™Ë†Ã™â€¦Ã˜Â¹Ã˜Â±Ã™ÂÃ˜Â© Ã˜Â³Ã˜Â¹Ã˜Â±Ã™â€¡ Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦ Ã¢â‚¬â€ Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã™â€¡Ã™â€ Ã˜Â§",
    "offer.checkout": "Ã˜Â¨Ã˜ÂªÃ˜ÂªÃ™â€¦ Ã˜Â¹Ã™â€¦Ã™â€žÃ™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "rev.eyebrow": "Ã™â€žÃ™Å Ã™â€¡ Ã˜ÂªÃ˜Â®Ã˜ÂªÃ˜Â§Ã˜Â±Ã™â€¡",
    "rev.title": "Ã˜Â£Ã˜Â³Ã˜Â¨Ã˜Â§Ã˜Â¨ Ã˜ÂªÃ˜Â®Ã™â€žÃ™Å Ã™Æ’ Ã˜ÂªÃ˜Â®Ã˜ÂªÃ˜Â§Ã˜Â±Ã™â€¡",
    "rev.sub": "Ã˜Â¹Ã™â€¦Ã™â€žÃ™Å  Ã˜Â¬Ã˜Â¯Ã˜Â§Ã™â€¹ Ã™Ë†Ã˜Â³Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€šÃ˜ÂªÃ˜ÂµÃ˜Â§Ã˜Â¯Ã™Å  Ã˜ÂªÃ™â€šÃ™Å Ã™Å Ã™â€¦ 3.9 Ã™â€¦Ã™â€  5 Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±",
    "rev.count": "{n} Ã˜ÂªÃ™â€šÃ™Å Ã™Å Ã™â€¦ Ã‚Â· {r} Ã™â€¦Ã™â€  5",
    "rev.q1": "7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª",
    "rev.n1": "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¹Ã˜Â¯Ã™Å Ã™â€ž",
    "rev.v1": "Ã™Å Ã˜Â±Ã™Å Ã˜Â­ Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ˜Â¨Ã˜Â©",
    "rev.q2": "Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å ",
    "rev.n2": "Ã˜Â§Ã™â€žÃ™â€ Ã™â€šÃ™â€ž",
    "rev.v2": "Ã™Å Ã˜Â®Ã˜Â²Ã™â€  Ã˜Â¨Ã˜Â³Ã™â€¡Ã™Ë†Ã™â€žÃ˜Â©",
    "rev.q3": "Ã˜ÂªÃ™â€¡Ã™Ë†Ã™Å Ã˜Â© Ã˜Â¬Ã™Å Ã˜Â¯Ã˜Â©",
    "rev.n3": "Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯",
    "rev.v3": "Ã˜Â£Ã™â€šÃ™â€ž Ã˜Â³Ã˜Â®Ã™Ë†Ã™â€ Ã˜Â©",
    "faq.eyebrow": "Ã˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã˜Â´Ã˜Â§Ã˜Â¦Ã˜Â¹Ã˜Â©",
    "faq.title": "Ã˜Â£Ã˜Â³Ã˜Â¦Ã™â€žÃ˜Â© Ã™Å Ã˜Â³Ã˜Â£Ã™â€žÃ™â€¡Ã˜Â§ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Å Ã™â€ ",
    "faq.q1": "Ã™Å Ã™â€ Ã˜Â§Ã˜Â³Ã˜Â¨ Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ 15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â©Ã˜Å¸",
    "faq.a1": "Ã™â€ Ã˜Â¹Ã™â€¦Ã˜Å’ Ã™â€¦Ã™â€ Ã˜Â§Ã˜Â³Ã˜Â¨ Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â§Ã˜Âª Ã™â€¦Ã™â€  10 Ã˜Â¥Ã™â€žÃ™â€° 15.6 Ã˜Â¨Ã™Ë†Ã˜ÂµÃ˜Â© Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â¨Ã˜Â¹Ã˜Â§Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â§Ã˜Â³Ã™Å Ã˜Â©.",
    "faq.q2": "Ã™â€¡Ã™â€ž Ã™â€¡Ã™Ë† Ã™â€šÃ™Ë†Ã™Å  Ã™Æ’Ã™ÂÃ˜Â§Ã™Å Ã˜Â©Ã˜Å¸",
    "faq.a2": "Ã™Å Ã˜Â¯Ã˜Â¹Ã™â€¦ Ã˜Â­Ã˜ÂªÃ™â€° 5 Ã™Æ’Ã˜Â¬Ã™â€¦Ã˜Å’ Ã™Æ’Ã˜Â§Ã™ÂÃ™Å  Ã™â€žÃ™â€¦Ã˜Â¹Ã˜Â¸Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â§Ã˜Âª Ã˜Â¨Ã™â€¦Ã˜Â§ Ã™ÂÃ™Å Ã™â€¡Ã˜Â§ Ã˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â«Ã™â€šÃ™Å Ã™â€žÃ˜Â©.",
    "faq.q3": "Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã™Ë†Ã˜Â³Ã™â€¡Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã™â€¦Ã™â€žÃ˜Å¸",
    "faq.a3": "Ã™â€ Ã˜Â¹Ã™â€¦Ã˜Å’ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã™Ë†Ã™Å Ã˜Â£Ã˜ÂªÃ™Å  Ã™â€¦Ã˜Â¹ Ã™Æ’Ã™Å Ã˜Â³ Ã˜ÂªÃ˜Â®Ã˜Â²Ã™Å Ã™â€  Ã˜ÂµÃ˜ÂºÃ™Å Ã˜Â±Ã˜Å’ Ã™Å Ã™â€šÃ˜Â¯Ã˜Â± Ã™Å Ã˜Â¯Ã˜Â®Ã™â€ž Ã˜Â¨Ã˜Â³Ã™â€¡Ã™Ë†Ã™â€žÃ˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™Å Ã˜Â¨Ã˜Â©.",
    "faq.q4": "Ã˜Â¨Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯ Ã™ÂÃ™Å  Ã˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨Ã˜Å¸",
    "faq.a4": "Ã™â€ Ã˜Â¹Ã™â€¦Ã˜Å’ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜ÂµÃ™â€¦Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜ÂªÃ™Ë†Ã˜Â­ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã™ÂÃ™â€ž Ã˜Â¨Ã™Å Ã˜Â­Ã˜Â³Ã™â€˜Ã™â€  Ã˜ÂªÃ˜Â¯Ã™ÂÃ™â€š Ã˜Â§Ã™â€žÃ™â€¡Ã™Ë†Ã˜Â§Ã˜Â¡ Ã™Ë†Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯ Ã™ÂÃ™Å  Ã˜ÂªÃ™â€šÃ™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â±Ã˜Â§Ã˜Â±Ã˜Â©.",
    "faq.q5": "Ã˜Â£Ã™â€šÃ˜Â¯Ã˜Â± Ã˜Â£Ã˜Â¯Ã™ÂÃ˜Â¹ Ã™Æ’Ã˜Â§Ã˜Â´ Ã˜Â¹Ã™â€ Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ™â€žÃ˜Â§Ã™â€¦Ã˜Å¸",
    "faq.a5": "Ã˜Â£Ã™Å Ã™Ë†Ã˜Â© Ã¢â‚¬â€ Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹ Ã˜Â¹Ã™â€ Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ™â€žÃ˜Â§Ã™â€¦ Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­ Ã™â€žÃ™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â±Ã˜Å’ Ã™Ë†Ã™ÂÃ™Å  Ã˜Â·Ã˜Â±Ã™â€š Ã˜Â¯Ã™ÂÃ˜Â¹ Ã˜ÂªÃ˜Â§Ã™â€ Ã™Å Ã˜Â© Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™Ë†Ã™â€šÃ˜Âª Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹.",
    "faq.q6": "Ã˜Â£Ã™â€šÃ˜Â¯Ã˜Â± Ã˜Â£Ã˜Â±Ã˜Â¬Ã™â€˜Ã˜Â¹Ã™â€¡ Ã™â€žÃ™Ë† Ã™â€¦Ã˜Â´ Ã™â€¦Ã™â€ Ã˜Â§Ã˜Â³Ã˜Â¨Ã˜Å¸",
    "faq.a6": "Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜Â±Ã™Ë†Ã˜Â¶ Ã™ÂÃ™Å  Ã™â€¦Ã˜Â¹Ã˜Â¸Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬Ã˜Â§Ã˜Âª Ã™ÂÃ˜ÂªÃ˜Â±Ã˜Â© Ã˜Â§Ã˜Â³Ã˜ÂªÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¹ Ã™â€¦Ã™â€  15Ã¢â‚¬â€œ30 Ã™Å Ã™Ë†Ã™â€¦ Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â³Ã™Å Ã˜Â§Ã˜Â³Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ . Ã˜Â±Ã˜Â§Ã˜Â¬Ã˜Â¹ Ã˜ÂªÃ™ÂÃ˜Â§Ã˜ÂµÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¹ Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã™â€šÃ˜Â¨Ã™â€ž Ã™â€¦Ã˜Â§ Ã˜ÂªÃ˜Â´Ã˜ÂªÃ˜Â±Ã™Å .",
    "cta.title": "Ã˜Â¬Ã˜Â§Ã™â€¡Ã˜Â² Ã˜ÂªÃ˜Â±Ã˜ÂªÃ˜Â§Ã˜Â­ Ã˜Â±Ã™â€šÃ˜Â¨Ã˜ÂªÃ™Æ’Ã˜Å¸",
    "cta.sub": "Ã˜Â§Ã˜Â·Ã™â€žÃ˜Â¨ Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜Â£Ã™â€žÃ™Ë†Ã™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ Ã™â€¦Ã™â€  Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â± Ã¢â‚¬â€ 7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã™Ë†Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å ",
    "cta.buy": "Ã˜Â§Ã˜Â·Ã™â€žÃ˜Â¨ Ã™â€¦Ã™â€  Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™Ë†Ã˜Â´Ã™Ë†Ã™Â Ã˜Â³Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦",
    "cta.questions": "Ã˜Â¹Ã˜Â§Ã™Å Ã˜Â² Ã˜ÂªÃ˜Â³Ã˜Â£Ã™â€ž Ã˜Â£Ã™Æ’Ã˜ÂªÃ˜Â±Ã˜Å¸",
    "footer.about": "Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã™â€¡Ã˜Â¨Ã™Ë†Ã˜Â· Ã™â€žÃ˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã˜Â£Ã™â€žÃ™Ë†Ã™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦. Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â±Ã™â€šÃ˜Â§Ã™â€¦ Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Â© Ã™â€žÃ™â€žÃ˜ÂªÃ˜ÂºÃ™Å Ã™Å Ã˜Â± Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ .",
    "footer.h1": "Ã˜Â§Ã™â€žÃ˜ÂµÃ™ÂÃ˜Â­Ã˜Â©",
    "footer.h2": "Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬",
    "footer.h3": "Ã˜ÂªÃ˜Â§Ã˜Â¨Ã˜Â¹Ã™â€ Ã˜Â§",
    "footer.l1": "Ã˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™â€¦Ã™â€  Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ ",
    "footer.l2": "Ã™â€¦Ã˜Â­Ã˜ÂªÃ™Ë†Ã™Å Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€žÃ˜Â¨Ã˜Â©",
    "footer.l3": "Ã™â€¦Ã˜Â²Ã˜Â§Ã™Å Ã˜Â§",
    "footer.disclaimer": "Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â£Ã˜Â±Ã™â€šÃ˜Â§Ã™â€¦ Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€žÃ˜Â© Ã™â€žÃ™â€žÃ˜ÂªÃ˜ÂºÃ™Å Ã™Å Ã˜Â± Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™ÂÃ˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ . Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â§Ã˜ÂµÃ™ÂÃ˜Â§Ã˜Âª Ã™Æ’Ã™â€¦Ã˜Â§ Ã™Ë†Ã˜Â±Ã˜Â¯Ã˜Âª Ã™ÂÃ™Å  Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬.",
    "footer.madeBy": "Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã™â€¡Ã˜Â¨Ã™Ë†Ã˜Â· Ã‚Â· AR / EN",
    "aud.eyebrow": "Ã˜Â¯Ã™â€¡ Ã™â€žÃ™Å Ã™â€¡",
    "aud.title": "Ã˜Â§Ã™â€žÃ™â€žÃ™Å  Ã™â€¡Ã™Å Ã˜Â³Ã˜ÂªÃ™ÂÃ™Å Ã˜Â¯ Ã™â€¦Ã™â€ Ã™â€¡",
    "aud.sub": "Ã™â€¦Ã™ÂÃ™Å Ã˜Â¯ Ã˜Â¬Ã˜Â¯Ã˜Â§Ã™â€¹ Ã™â€žÃ˜Â£Ã™Å  Ã˜Â­Ã˜Â¯ Ã˜Â¨Ã™Å Ã˜Â³Ã™â€¡Ã˜Â± Ã™â€šÃ˜Â¯Ã˜Â§Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã™â€žÃ˜Â³Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã˜Â·Ã™Ë†Ã™Å Ã™â€žÃ˜Â©",
    "aud.a1t": "Ã˜Â§Ã™â€žÃ™â€¦Ã™Ë†Ã˜Â¸Ã™ÂÃ™Å Ã™â€  Ã˜Â¹Ã™â€  Ã˜Â¨Ã™ÂÃ˜Â¹Ã˜Â¯",
    "aud.a1b": "Ã™Å Ã˜Â®Ã™ÂÃ™Â Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Â¯ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â±Ã™â€šÃ˜Â¨Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¸Ã™â€¡Ã˜Â± Ã˜Â®Ã™â€žÃ˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â¬Ã˜ÂªÃ™â€¦Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦Ã™Å .",
    "aud.a2t": "Ã˜Â§Ã™â€žÃ˜Â·Ã™â€žÃ˜Â§Ã˜Â¨",
    "aud.a2b": "Ã™â€¦Ã˜Â±Ã™Å Ã˜Â­ Ã™â€žÃ™â€žÃ˜Â¯Ã˜Â±Ã˜Â§Ã˜Â³Ã˜Â© Ã™â€žÃ˜Â³Ã˜Â§Ã˜Â¹Ã˜Â§Ã˜Âª Ã˜Â·Ã™Ë†Ã™Å Ã™â€žÃ˜Â© Ã™Ë†Ã˜Â³Ã˜Â¹Ã˜Â±Ã™â€¡ Ã˜Â§Ã™â€šÃ˜ÂªÃ˜ÂµÃ˜Â§Ã˜Â¯Ã™Å  Ã˜Â¬Ã˜Â¯Ã˜Â§Ã™â€¹.",
    "aud.a3t": "Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã™ÂÃ˜Â±Ã™Ë†Ã™â€ ",
    "aud.a3b": "Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å  Ã˜Â¬Ã˜Â¯Ã™â€¹Ã˜Â§ Ã™Ë†Ã™Å Ã˜Â®Ã˜Â²Ã™â€  Ã˜Â¨Ã˜Â³Ã™â€¡Ã™Ë†Ã™â€žÃ˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™Å Ã˜Â¨Ã˜Â© Ã˜Â¨Ã˜Â¯Ã™Ë†Ã™â€  Ã™â€¦Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â®Ã˜Â¯ Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â­Ã˜Â© Ã™Æ’Ã˜Â¨Ã™Å Ã˜Â±Ã˜Â©.",
    "aud.a4t": "Ã˜Â£Ã™Å  Ã˜Â­Ã˜Â¯ Ã˜Â¨Ã™Å Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã™Æ’Ã˜Â«Ã™Å Ã˜Â±",
    "aud.a4b": "Ã™Å Ã˜Â­Ã˜Â³Ã™â€˜Ã™â€  Ã™Ë†Ã˜Â¶Ã˜Â¹ Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â³Ã™â€¦ Ã™Ë†Ã™Å Ã˜Â³Ã˜Â§Ã˜Â¹Ã˜Â¯ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã˜Â¯ Ã™ÂÃ™Å  Ã™â€ Ã™ÂÃ˜Â³ Ã˜Â§Ã™â€žÃ™Ë†Ã™â€šÃ˜Âª.",
    "hero.cta2": "Ã˜ÂªÃ™ÂÃ˜Â§Ã˜ÂµÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã˜ÂµÃ™Å Ã™â€ž",
    "offer.today": "Ã™â€¦Ã˜Â¹Ã˜Â±Ã™ÂÃ˜Â© Ã˜Â³Ã˜Â¹Ã˜Â± Ã˜Â§Ã™â€žÃ™Å Ã™Ë†Ã™â€¦ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€ Ã˜Â´Ã˜Â·Ã˜Â© Ã™â€¦Ã˜Â¨Ã˜Â§Ã˜Â´Ã˜Â±Ã˜Â©Ã™â€¹ Ã™â€¦Ã™â€  Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€ ",
    "offer.payTitle": "Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹ Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€šÃ˜Â³Ã™Å Ã˜Â·",
    "offer.paySub": "Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã˜Â¨Ã™Å Ã™Ë†Ã™ÂÃ˜Â± Ã˜Â·Ã˜Â±Ã™â€š Ã˜Â¯Ã™ÂÃ˜Â¹ Ã™â€¦Ã˜ÂªÃ˜Â¹Ã˜Â¯Ã˜Â¯Ã˜Â© Ã™Ë†Ã˜Â®Ã™Å Ã˜Â§Ã˜Â±Ã˜Â§Ã˜Âª Ã˜ÂªÃ™â€šÃ˜Â³Ã™Å Ã˜Â· Ã˜Â­Ã˜Â³Ã˜Â¨ Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â·Ã˜Â§Ã™â€šÃ˜Â©Ã˜Å’ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ˜Â¹ Ã˜Â¹Ã™â€ Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ™â€žÃ˜Â§Ã™â€¦ Ã™â€¦Ã˜ÂªÃ˜Â§Ã˜Â­ Ã¢â‚¬â€ Ã™Ë†Ã™Æ’Ã™â€ž Ã˜ÂªÃ™ÂÃ˜Â§Ã˜ÂµÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â± Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â®Ã˜ÂµÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â±Ã™Ë†Ã˜Â¶ Ã˜Â¨Ã˜ÂªÃ˜Â¸Ã™â€¡Ã˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã™â€ Ã™ÂÃ˜Â³Ã™â€¡Ã˜Â§ Ã™â€žÃ˜Â­Ã˜Â¸Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â±Ã˜Â§Ã˜Â¡.",
    "offer.payNote": "Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â± Ã™Ë†Ã˜Â£Ã™Å  Ã˜Â¹Ã˜Â±Ã™Ë†Ã˜Â¶ Ã˜Â­Ã˜Â§Ã™â€žÃ™Å Ã˜Â© Ã¢â‚¬â€ Ã™Æ’Ã™â€ž Ã˜Â¯Ã™â€¡ Ã˜Â¹Ã™â€žÃ™â€° Ã˜ÂµÃ™ÂÃ˜Â­Ã˜Â© Ã˜Â£Ã™â€¦Ã˜Â§Ã˜Â²Ã™Ë†Ã™â€  Ã˜Â¨Ã˜Â³.",
    "nav.all": "Ã™Æ’Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã™â€ Ã˜ÂªÃ˜Â¬Ã˜Â§Ã˜Âª"
  },
  "en": {
    "nav.tagline": "7 heights Ã‚Â· foldable",
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
    "hero.sub": "Relieves neck and back strain with 7 adjustable heights Ã¢â‚¬â€ lightweight, foldable and better for your posture",
    "hero.reviews": "{n} ratings on Amazon",
    "hero.buy": "Buy & see today's price Ã¢â‚¬â€ click here",
    "hero.chip1l": "Heights",
    "hero.chip1v": "7 levels",
    "hero.chip2l": "Fits",
    "hero.chip2v": "10Ã¢â‚¬â€œ15.6\"",
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
    "trust.returns": "15Ã¢â‚¬â€œ30 day returns",
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
    "k.btnsSub": "10Ã¢â‚¬â€œ15.6 inches",
    "specs.eyebrow": "Specs",
    "specs.title": "The real numbers, straight from the listing",
    "specs.sub": "From the amazon.eg product page",
    "specs.table": "Full technical sheet",
    "s1.t": "7 adjustable heights",
    "s1.b": "Find the angle and height that suits your neck and shoulders Ã¢â‚¬â€ reduces strain through long work sessions.",
    "s2.t": "Strong yet light aluminium",
    "s2.b": "Made from thick aluminium alloy, it's sturdy enough to hold up to 5kg while remaining very light for travel.",
    "s3.t": "Foldable, easy to carry",
    "s3.b": "The foldable design slips into your bag with ease Ã¢â‚¬â€ perfect for moving between home, office or on the road.",
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
    "t.weightV": "10Ã¢â‚¬â€œ15.6 inches",
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
    "offer.productName": "Aluminium Laptop Stand Ã¢â‚¬â€ 7 heights, fits 10Ã¢â‚¬â€œ15.6\"",
    "offer.seller": "Available on Amazon.eg",
    "offer.inStock": "In stock",
    "offer.inStockOut": "Out of stock",
    "offer.ship": "Delivery",
    "offer.shipV": "See the date on the product page",
    "offer.ret": "Returns",
    "offer.retV": "15Ã¢â‚¬â€œ30 days per Amazon's policy",
    "offer.buyNow": "Buy & see today's price Ã¢â‚¬â€ click here",
    "offer.checkout": "Checkout and payment happen on Amazon.eg",
    "rev.eyebrow": "Why choose it",
    "rev.title": "Reasons to pick this one",
    "rev.sub": "Practical, affordable and rated 3.9 out of 5 on Amazon.eg",
    "rev.count": "{n} ratings Ã‚Â· {r} of 5",
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
    "faq.a1": "Yes Ã¢â‚¬â€ it fits laptops from 10 to 15.6 inches.",
    "faq.q2": "Is it strong enough?",
    "faq.a2": "It supports up to 5kg, enough for most laptops including some heavier models.",
    "faq.q3": "Is it foldable and easy to carry?",
    "faq.a3": "Yes Ã¢â‚¬â€ the foldable design comes with a small pouch, so it fits easily in your bag.",
    "faq.q4": "Does it help cool the laptop?",
    "faq.a4": "Yes Ã¢â‚¬â€ the open-bottom design improves airflow and helps reduce heat.",
    "faq.q5": "Can I pay cash on delivery?",
    "faq.a5": "Yes Ã¢â‚¬â€ cash on delivery is available for this item on Amazon Egypt, and other payment methods appear on the Amazon page at checkout.",
    "faq.q6": "Can I return it if it's not right for me?",
    "faq.a6": "Most products enjoy a 15Ã¢â‚¬â€œ30 day return window per Amazon's policy. Check the return details on the product page before you buy.",
    "cta.title": "Ready to give your neck a break?",
    "cta.sub": "Order the aluminium laptop stand on Amazon.eg Ã¢â‚¬â€ 7 heights, foldable",
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
    "footer.madeBy": "Landing page Ã‚Â· AR / EN",
    "aud.eyebrow": "Who it's for",
    "aud.title": "Who benefits from it",
    "aud.sub": "Helpful for anyone who spends long hours in front of a laptop",
    "aud.a1t": "Remote workers",
    "aud.a1b": "Eases neck and back strain through meetings and your workday.",
    "aud.a2t": "Students",
    "aud.a2b": "Comfortable for long study sessions and very affordable.",
    "aud.a3t": "Travellers",
    "aud.a3b": "Foldable and slim Ã¢â‚¬â€ fits easily in your bag without taking much space.",
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
    ? 'Ã˜Â­Ã˜Â§Ã™â€¦Ã™â€ž Ã™â€žÃ˜Â§Ã˜Â¨Ã˜ÂªÃ™Ë†Ã˜Â¨ Ã˜Â£Ã™â€žÃ™Ë†Ã™â€¦Ã™â€ Ã™Å Ã™Ë†Ã™â€¦ Ã¢â‚¬â€ 7 Ã˜Â§Ã˜Â±Ã˜ÂªÃ™ÂÃ˜Â§Ã˜Â¹Ã˜Â§Ã˜ÂªÃ˜Å’ Ã™â€šÃ˜Â§Ã˜Â¨Ã™â€ž Ã™â€žÃ™â€žÃ˜Â·Ã™Å Ã˜Å’ Ã™â€¦Ã˜Â¹ Ã˜ÂªÃ™â€¡Ã™Ë†Ã™Å Ã˜Â©'
    : 'Aluminium Laptop Stand Ã¢â‚¬â€ 7 heights, foldable, ventilated';

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
