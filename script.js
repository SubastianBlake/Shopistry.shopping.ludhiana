/* ══════════════════════════════════════════════════════════════
   THE MAGAZINE SHOP × CREATIVE CRAFT BY TMS — site script
   ──────────────────────────────────────────────────────────────
   EDIT EVERYTHING IN THE `SITE` OBJECT BELOW.
   Products, prices, collections, contact details, WhatsApp
   messages — nothing else in this file needs to be touched.
   ══════════════════════════════════════════════════════════════ */

const SITE = {
  brand: {
    heritageName: "The Magazine Shop",
    heritageYear: 1982,
    modernName: "Creative Craft by TMS",
    onlineIdentity: "shopistry.ludhiana.shopping",
    city: "Ludhiana",
    region: "Punjab",
    heritageLine: "The business evolved. The trust stayed.",
  },

  // Editable contact details — fill in and they appear on the site automatically.
  contact: {
    phone: "",
    email: "",
    address: "",
    instagram: "",
    googleMaps: "",
    openingHours: "",
  },

  // WhatsApp conversion system — number + editable message templates.
  whatsapp: {
    number: "919878260506",
    catalogueUrl: "https://wa.me/c/919878260506",
    messages: {
      general:
        "Hello, I found your business through your website. I would like to know more about your stationery and customized products.",
      product: (name) =>
        `Hello, I found this product on your website. Product: ${name}. Please tell me the price, availability and available options.`,
      customization: (name) =>
        `Hello, I am interested in customizing ${name}. Please explain the available customization options, pricing and minimum quantity.`,
      bulk: "Hello, I am interested in a bulk/customized order. Please share the available options, MOQ and bulk pricing.",
      seasonal: (name) =>
        `Hello, I am interested in the ${name} collection. Please share the available products and pricing.`,
    },
  },

  categoryLabels: {
    stationery: "Stationery",
    customized: "Customized",
    gifts: "Gifts",
    school: "School",
    corporate: "Corporate",
    events: "Events",
    seasonal: "Seasonal",
  },

  // Products — leave price/moq null to hide them. Leave images: [] for a
  // typographic card; add "assets/your-photo.jpeg" to show a photo.
  products: [
    {
      id: "personalized-name-pen",
      name: "Personalized Name Pen",
      tagline: "A little name. A little more yours.",
      description: "A well-made everyday pen, engraved with the name you give us. Simple, useful and quietly personal.",
      itemCode: "CC-PEN-01",
      categories: ["customized", "stationery", "seasonal"],
      price: null,
      moq: null,
      unit: "piece",
      availability: null,
      featured: true,
      customization: { available: true },
      images: ["assets/rakhi-gift-set.jpeg"],
    },
    {
      id: "personalized-diary",
      name: "Personalized Diary",
      tagline: "Your plans. Your ideas. Your name on it.",
      description: "A bound diary with your name printed or embossed on the cover. Made to be opened every day.",
      itemCode: "CC-DIA-01",
      categories: ["customized", "stationery", "corporate"],
      price: null,
      moq: null,
      unit: "piece",
      availability: null,
      featured: true,
      customization: { available: true },
      images: ["assets/rakhi-gift-set.jpeg"],
    },
    {
      id: "thermos-gift-set",
      name: "Personalized Thermos Gift Set",
      tagline: "Everyday carry, quietly personal.",
      description: "An insulated bottle and pen set in a gift box, engraved with a name. Suited to offices, travel and gifting.",
      itemCode: "CC-BOT-01",
      categories: ["customized", "gifts", "corporate"],
      price: null,
      moq: null,
      unit: "set",
      availability: null,
      featured: true,
      customization: { available: true },
      images: ["assets/thermos-bottle.jpeg"],
    },
    {
      id: "rakhi-gift-set",
      name: "Rakhi Gift Set",
      tagline: "A little thread. A lot of feeling.",
      description: "A personalized pen and diary set in premium gift packaging, prepared for Raksha Bandhan.",
      itemCode: "CC-RAK-01",
      categories: ["seasonal", "gifts"],
      price: null,
      moq: null,
      unit: "set",
      availability: "seasonal",
      featured: true,
      customization: { available: true },
      images: ["assets/rakhi-gift-set.jpeg"],
    },
    {
      id: "personalized-keychain",
      name: "Personalized Keychain",
      tagline: "Small enough to carry. Personal enough to remember.",
      description: "A keychain finished with a name or short word. A small object that tends to stay with people.",
      itemCode: "CC-KEY-01",
      categories: ["customized", "gifts"],
      price: null,
      moq: null,
      unit: "piece",
      availability: null,
      featured: false,
      customization: { available: true },
      images: [],
    },
    {
      id: "corporate-diary",
      name: "Corporate Branded Diary",
      tagline: "Your brand, part of their everyday.",
      description: "Diaries printed or embossed with your company name and logo, prepared in quantity for teams and clients.",
      itemCode: "CC-COR-01",
      categories: ["corporate"],
      price: null,
      moq: null,
      unit: "piece",
      availability: null,
      featured: false,
      customization: { available: true },
      images: ["assets/rakhi-gift-set.jpeg"],
    },
    {
      id: "promotional-pen",
      name: "Branded Promotional Pen",
      tagline: "Put your name in their hand.",
      description: "Pens printed with your logo or event name, ordered in quantity for promotions, launches and events.",
      itemCode: "CC-PRO-01",
      categories: ["corporate", "events"],
      price: null,
      moq: null,
      unit: "piece",
      availability: null,
      featured: false,
      customization: { available: true },
      images: [],
    },
    {
      id: "everyday-stationery",
      name: "School & Everyday Stationery",
      tagline: "The everyday essentials, done right.",
      description: "Notebooks, writing instruments and school essentials — the everyday stock the shop has carried for decades.",
      itemCode: "TMS-STA-01",
      categories: ["stationery", "school"],
      price: null,
      moq: null,
      unit: null,
      availability: null,
      featured: false,
      customization: { available: false },
      images: [],
    },
  ],

  // Seasonal collections — set active: false to hide. Add an image path later
  // and the card automatically becomes a photographic card.
  collections: [
    { id: "rakhi", name: "Rakhi", tagline: "A little thread. A lot of feeling.", description: "Personalized gift sets prepared for Raksha Bandhan.", image: "assets/rakhi-gift-set.jpeg", active: true },
    { id: "diwali", name: "Diwali", tagline: "Something small, given warmly.", description: "Festive gifting and personalized keepsakes for Diwali.", image: "", active: true },
    { id: "new-year", name: "New Year", tagline: "A fresh page, with your name on it.", description: "Diaries, planners and personalized products for the year ahead.", image: "", active: true },
    { id: "school-reopening", name: "School Reopening", tagline: "Back to school, back to basics.", description: "Everyday school stationery and personalized supplies.", image: "", active: true },
    { id: "wedding-event", name: "Wedding & Event", tagline: "Keepsakes for the day.", description: "Customized products for weddings and special occasions.", image: "", active: true },
    { id: "corporate-gifting", name: "Corporate Gifting", tagline: "Gifts that carry your brand.", description: "Branded gift sets prepared for clients and teams.", image: "", active: true },
  ],

  customizationOptions: [
    { id: "name", icon: "type", label: "A Name", note: "Engraved or printed, on the product itself." },
    { id: "logo", icon: "stamp", label: "A Logo", note: "Your business identity, carried on everyday objects." },
    { id: "message", icon: "message-square", label: "A Message", note: "A short line that means something to someone." },
    { id: "design", icon: "pen-tool", label: "A Design", note: "Artwork and layouts prepared to suit the product." },
    { id: "branding", icon: "badge-check", label: "Branding", note: "Consistent identity across bulk and corporate orders." },
    { id: "image", icon: "image", label: "An Image", note: "Selected products can carry a printed photograph." },
  ],

  segments: [
    { id: "schools", icon: "graduation-cap", title: "For Schools & Students", note: "Everyday stationery and personalized school products." },
    { id: "gifting", icon: "gift", title: "For Gifting", note: "Personalized products that feel more considered." },
    { id: "businesses", icon: "building-2", title: "For Businesses", note: "Corporate stationery, branding and promotional products." },
    { id: "events", icon: "sparkles", title: "For Events", note: "Customized products for occasions and gatherings." },
    { id: "bulk", icon: "boxes", title: "For Bulk Orders", note: "Customization and quantity-based enquiries." },
  ],

  corporateExamples: [
    "Corporate diaries",
    "Branded stationery",
    "Promotional products",
    "Event materials",
    "Customized bulk products",
  ],

  // Heritage timeline — broad language only; add milestones carefully.
  timeline: [
    { year: "1982", title: "The Magazine Shop", note: "The business begins, serving the local community through newspapers and magazines." },
    { year: "Through the Years", title: "Growing With Changing Needs", note: "The shop evolves alongside its customers, moving with what people ask for." },
    { year: "Today", title: "Creative Craft by TMS", note: "Stationery, customized printing and personalized products under a newer name." },
    { year: "Online", title: "shopistry.ludhiana.shopping", note: "The modern digital presence of the same business — discovery that ends in a conversation." },
  ],

  marqueeItems: ["Stationery", "Customized Printing", "Personalized Gifts", "Corporate Branding", "Since 1982", "Ludhiana"],

  gallery: [
    { src: "assets/rakhi-gift-set.jpeg", caption: "Engraved pen and diary — a Rakhi gift set, packed to be given.", category: "Personalized gifts", featured: true },
    { src: "assets/thermos-bottle.jpeg", caption: "A name, engraved — the personalized thermos gift set.", category: "Customized products", featured: false },
    { src: "assets/logo-shopistry.jpeg", caption: "shopistry.ludhiana.shopping — the online identity of the business.", category: "The online identity", featured: false },
  ],

  navLinks: [
    { label: "Home", id: "home" },
    { label: "Our Story", id: "heritage" },
    { label: "Products", id: "products" },
    { label: "Customization", id: "customization" },
    { label: "Bulk & Corporate", id: "corporate" },
    { label: "Collections", id: "collections" },
    { label: "Contact", id: "contact" },
  ],
};

/* ══════════════════════════════════════════════════════════════
   Below this line is the engine — no need to edit.
   ══════════════════════════════════════════════════════════════ */

const waLink = (msg) =>
  `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(msg || SITE.whatsapp.messages.general)}`;
const waProduct = (name) => waLink(SITE.whatsapp.messages.product(name));
const waSeasonal = (name) => waLink(SITE.whatsapp.messages.seasonal(name));

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const pad = (n) => String(n).padStart(2, "0");

/* ── Smooth scrolling (Lenis) ── */
let lenis = null;
if (typeof Lenis !== "undefined") {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -64 });
  else el.scrollIntoView({ behavior: "smooth" });
};

/* ── Navigation ── */
function renderNav() {
  $("#nav-links-desktop").innerHTML = SITE.navLinks.slice(1).map((l) => `
    <button data-scroll="${l.id}" data-testid="nav-link-${l.id}"
      class="group relative text-[13px] font-medium tracking-wide text-smoke transition-colors duration-300 hover:text-charcoal">
      ${l.label}
      <span class="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-[width] duration-300 group-hover:w-full"></span>
    </button>`).join("");

  $("#nav-links-mobile").innerHTML = SITE.navLinks.map((l) => `
    <button data-scroll="${l.id}" data-testid="nav-mobile-link-${l.id}"
      class="border-b border-charcoal/10 py-4 text-left font-serif text-3xl tracking-tight">
      ${l.label}
    </button>`).join("");

  $("#footer-nav").innerHTML = SITE.navLinks.map((l) => `
    <button data-scroll="${l.id}" data-testid="footer-link-${l.id}"
      class="w-fit text-left text-sm text-ivory/70 transition-colors duration-300 hover:text-gold">
      ${l.label}
    </button>`).join("");

  const menu = $("#mobile-menu");
  const openIcon = $("#menu-icon-open");
  const closeIcon = $("#menu-icon-close");
  $("#menu-toggle").addEventListener("click", () => {
    const opening = menu.classList.contains("hidden");
    menu.classList.toggle("hidden", !opening);
    menu.classList.toggle("block", opening);
    openIcon.classList.toggle("hidden", opening);
    closeIcon.classList.toggle("hidden", !opening);
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scroll]");
    if (!btn) return;
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      setTimeout(() => scrollToId(btn.dataset.scroll), 150);
    } else {
      scrollToId(btn.dataset.scroll);
    }
  });
}

/* ── Marquee ── */
function renderMarquee() {
  const group = SITE.marqueeItems.map((item) => `
    <span class="flex items-center">
      <span class="px-8 font-serif text-xl italic tracking-tight text-charcoal/70 sm:text-2xl">${item}</span>
      <span class="h-1.5 w-1.5 rotate-45 bg-gold"></span>
    </span>`).join("");
  $("#marquee-track").innerHTML = `<div class="flex items-center">${group}</div><div class="flex items-center">${group}</div>`;
}

/* ── Customization grid ── */
function renderCustomization() {
  $("#customization-grid").innerHTML = SITE.customizationOptions.map((opt, i) => `
    <div class="group bg-ivory p-7 transition-colors duration-500 hover:bg-paper" data-reveal data-delay="${i * 70}" data-testid="customization-option-${opt.id}">
      <i data-lucide="${opt.icon}" class="h-5 w-5 text-golddark transition-transform duration-300 group-hover:-translate-y-1"></i>
      <h3 class="mt-4 font-serif text-xl tracking-tight">${opt.label}</h3>
      <p class="mt-2 text-sm leading-relaxed text-smoke">${opt.note}</p>
    </div>`).join("");
  $("#customization-cta").href = waLink(SITE.whatsapp.messages.customization("a product"));
}

/* ── Catalogue ── */
function productCard(p, index) {
  const hasImage = p.images.length > 0;
  const span = p.featured ? "sm:col-span-2 lg:col-span-2" : "";
  const dark = hasImage ? "" : "bg-charcoal text-ivory";
  const cat = SITE.categoryLabels[p.categories[0]] || "";
  const media = hasImage
    ? `<div class="relative overflow-hidden">
        <img src="${p.images[0]}" alt="${p.name} — ${p.tagline}" loading="lazy" data-testid="product-image-${p.id}"
          class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${p.featured ? "h-64 sm:h-80" : "h-64"}" />
        ${p.availability === "seasonal" ? `<span class="absolute left-4 top-4 bg-rust px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-ivory">Seasonal</span>` : ""}
        ${p.customization.available ? `<span class="absolute bottom-4 left-4 bg-ivory/95 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal">Can be personalized</span>` : ""}
      </div>`
    : `<div class="flex h-40 items-end p-7" aria-hidden="true">
        <span class="text-outline-light font-serif text-6xl leading-none">${pad(index + 1)}</span>
      </div>`;
  const meta = p.price || p.moq
    ? `<p class="mt-3 text-sm font-medium">${p.price ? "₹" + p.price : ""}${p.moq ? ` · MOQ ${p.moq} ${p.unit || ""}` : ""}</p>`
    : "";

  return `
    <article data-reveal data-testid="product-card-${p.id}"
      class="group flex flex-col border border-charcoal/10 bg-white transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(28,28,30,0.10)] ${span} ${dark}">
      ${media}
      <div class="flex flex-1 flex-col p-7">
        <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
          <span class="${hasImage ? "text-golddark" : "text-gold"}">${cat}</span>
          <span class="${hasImage ? "text-faint" : "text-ivory/40"}">${p.itemCode}</span>
        </div>
        <h3 class="mt-4 font-serif text-2xl tracking-tight">${p.name}</h3>
        <p class="mt-1 font-serif italic ${hasImage ? "text-golddark" : "text-gold"}">${p.tagline}</p>
        <p class="mt-3 flex-1 text-sm leading-relaxed ${hasImage ? "text-smoke" : "text-ivory/60"}">${p.description}</p>
        ${meta}
        <a href="${waProduct(p.name)}" target="_blank" rel="noopener noreferrer" data-testid="product-whatsapp-cta-${p.id}"
          class="mt-6 inline-flex w-fit items-center gap-2 border px-5 py-3 text-[13px] font-medium transition-colors duration-300 ${hasImage ? "border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-ivory" : "border-ivory/30 hover:border-wa hover:bg-wa hover:text-charcoal"}">
          <i data-lucide="message-circle" class="h-4 w-4"></i>
          Ask on WhatsApp
          <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
        </a>
      </div>
    </article>`;
}

function renderCatalogue() {
  const set = new Set();
  SITE.products.forEach((p) => p.categories.forEach((c) => set.add(c)));
  const cats = Object.keys(SITE.categoryLabels).filter((c) => set.has(c));
  const filters = ["all", "featured", ...cats];
  let current = "all";

  const draw = () => {
    $("#catalogue-filters").innerHTML = filters.map((c) => `
      <button data-filter="${c}" data-testid="catalogue-filter-${c}"
        class="border px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors duration-300 ${current === c ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 text-smoke hover:border-charcoal/50 hover:text-charcoal"}">
        ${c === "all" ? "All" : c === "featured" ? "Featured" : SITE.categoryLabels[c]}
      </button>`).join("");

    const visible = current === "all"
      ? SITE.products
      : current === "featured"
        ? SITE.products.filter((p) => p.featured)
        : SITE.products.filter((p) => p.categories.includes(current));

    $("#catalogue-grid").innerHTML = visible.map((p) => productCard(p, SITE.products.indexOf(p))).join("");
    lucide.createIcons();
    observeReveals($("#catalogue-grid"));

    $$("#catalogue-filters [data-filter]").forEach((b) =>
      b.addEventListener("click", () => { current = b.dataset.filter; draw(); })
    );
  };
  draw();
}

/* ── Segments ── */
function renderSegments() {
  $("#segments-grid").innerHTML = SITE.segments.map((seg, i) => `
    <div class="group flex min-h-[220px] flex-col justify-between bg-ivory p-7 transition-colors duration-500 hover:bg-charcoal"
      data-reveal data-delay="${i * 80}" data-testid="segment-${seg.id}">
      <i data-lucide="${seg.icon}" class="h-6 w-6 text-golddark transition-colors duration-500 group-hover:text-gold"></i>
      <div>
        <h3 class="font-serif text-xl leading-snug tracking-tight transition-colors duration-500 group-hover:text-ivory">${seg.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-smoke transition-colors duration-500 group-hover:text-ivory/60">${seg.note}</p>
      </div>
    </div>`).join("");

  $("#corporate-examples").innerHTML = SITE.corporateExamples.map((item, i) => `
    <div class="flex items-baseline justify-between border-b border-ivory/10 px-7 py-5 transition-colors duration-300 last:border-b-0 hover:bg-ivory/5"
      data-reveal data-delay="${100 + i * 80}" data-testid="corporate-example-${i}">
      <span class="font-serif text-xl tracking-tight">${item}</span>
      <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">${pad(i + 1)}</span>
    </div>`).join("");
}

/* ── Collections ── */
function renderCollections() {
  $("#collections-grid").innerHTML = SITE.collections.filter((c) => c.active).map((col, i) => {
    const inner = col.image
      ? `<a href="${waSeasonal(col.name)}" target="_blank" rel="noopener noreferrer" data-testid="collection-card-${col.id}"
          class="group relative block overflow-hidden">
          <img src="${col.image}" alt="${col.name} collection — ${col.tagline}" loading="lazy"
            class="h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[460px]" />
          <div class="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 flex items-end justify-between p-8">
            <div>
              <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Now in season</span>
              <h3 class="mt-2 font-serif text-3xl tracking-tight text-ivory sm:text-4xl">${col.name}</h3>
              <p class="mt-1 font-serif italic text-ivory/70">${col.tagline}</p>
            </div>
            <span class="flex h-12 w-12 shrink-0 items-center justify-center border border-ivory/40 text-ivory transition-colors duration-300 group-hover:border-wa group-hover:bg-wa group-hover:text-charcoal">
              <i data-lucide="arrow-up-right" class="h-5 w-5"></i>
            </span>
          </div>
        </a>`
      : `<a href="${waSeasonal(col.name)}" target="_blank" rel="noopener noreferrer" data-testid="collection-card-${col.id}"
          class="group flex h-[380px] flex-col justify-between bg-charcoal p-8 text-ivory transition-colors duration-500 hover:bg-ink sm:h-[460px]">
          <div class="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
            <span class="text-gold">Seasonal collection</span>
            <span class="text-ivory/40">${pad(i + 1)}</span>
          </div>
          <div>
            <h3 class="font-serif text-4xl tracking-tight sm:text-5xl">${col.name}</h3>
            <p class="mt-2 font-serif italic text-gold">${col.tagline}</p>
            <p class="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">${col.description}</p>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-[13px] font-medium text-ivory/70 transition-colors duration-300 group-hover:text-ivory">Ask what&rsquo;s available on WhatsApp</span>
            <span class="flex h-12 w-12 items-center justify-center border border-ivory/30 transition-colors duration-300 group-hover:border-wa group-hover:bg-wa group-hover:text-charcoal">
              <i data-lucide="arrow-up-right" class="h-5 w-5"></i>
            </span>
          </div>
        </a>`;
    return `<div data-reveal data-delay="${100 + (i % 2) * 100}">${inner}</div>`;
  }).join("");
}

/* ── Timeline ── */
function renderTimeline() {
  $("#timeline-steps").innerHTML = SITE.timeline.map((step, i) => `
    <div data-reveal>
      <div class="relative flex flex-col gap-3 pl-10 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"}"
        data-testid="timeline-step-${i}">
        <span class="absolute top-1.5 h-[15px] w-[15px] rounded-full border-2 border-gold bg-ink max-sm:left-0 ${i % 2 === 0 ? "sm:-right-[7.5px]" : "sm:-left-[7.5px]"}" aria-hidden="true"></span>
        <span class="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">${step.year}</span>
        <h3 class="font-serif text-2xl tracking-tight sm:text-3xl">${step.title}</h3>
        <p class="text-sm leading-relaxed text-ivory/55 sm:text-base">${step.note}</p>
      </div>
    </div>`).join("");
}

/* ── Gallery + lightbox ── */
function renderGallery() {
  const grid = $("#gallery-grid");
  grid.innerHTML = SITE.gallery.map((img, i) => `
    <div data-reveal data-delay="${i * 80}" class="${img.featured ? "lg:row-span-2" : ""}">
      <button data-gallery-index="${i}" data-testid="gallery-item-${i}" class="group relative block w-full overflow-hidden text-left">
        <img src="${img.src}" alt="${img.caption}" loading="lazy"
          class="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${img.featured ? "h-80 lg:h-[560px]" : "h-80 lg:h-[268px]"}" />
        <span class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-ivory/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <i data-lucide="plus" class="h-4 w-4"></i>
        </span>
        <span class="mt-3 block font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">${img.category}</span>
      </button>
    </div>`).join("") + `
    <div data-reveal data-delay="200">
      <div class="flex h-80 flex-col justify-between border border-charcoal/15 bg-charcoal p-8 lg:h-[268px]" data-testid="gallery-quote-tile">
        <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">The principle</span>
        <p class="font-serif text-2xl leading-snug tracking-tight text-ivory">Image &rarr; story &rarr; yours &rarr; <span class="text-gold">WhatsApp.</span></p>
      </div>
    </div>`;

  const lightbox = $("#lightbox");
  const open = (i) => {
    $("#lightbox-image").src = SITE.gallery[i].src;
    $("#lightbox-image").alt = SITE.gallery[i].caption;
    $("#lightbox-caption").textContent = SITE.gallery[i].caption;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  };
  const close = () => { lightbox.classList.add("hidden"); lightbox.classList.remove("flex"); };

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-gallery-index]");
    if (btn) open(Number(btn.dataset.galleryIndex));
  });
  $("#lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ── Contact / conditional details ── */
function renderContact() {
  const c = SITE.contact;
  const box = $("#footer-contact");
  if (c.phone) box.insertAdjacentHTML("beforeend", `<a href="tel:${c.phone}" class="hover:text-gold" data-testid="footer-phone">${c.phone}</a>`);
  if (c.address) box.insertAdjacentHTML("beforeend", `<span data-testid="footer-address">${c.address}</span>`);
  if (c.openingHours) box.insertAdjacentHTML("beforeend", `<span data-testid="footer-hours">${c.openingHours}</span>`);
  if (c.instagram) box.insertAdjacentHTML("beforeend", `<a href="${c.instagram}" target="_blank" rel="noopener noreferrer" class="hover:text-gold" data-testid="footer-instagram">Instagram</a>`);
  if (c.instagram) {
    const link = $("#instagram-link");
    link.href = c.instagram;
    link.classList.remove("hidden");
    link.classList.add("inline-flex");
  }
}

/* ── WhatsApp links ── */
function wireWhatsApp() {
  $$("[data-wa]").forEach((a) => {
    const kind = a.dataset.wa;
    a.href = kind === "bulk" ? waLink(SITE.whatsapp.messages.bulk) : waLink();
  });
  $("#whatsapp-catalogue-link").href = SITE.whatsapp.catalogueUrl;
}

/* ── Scroll reveals ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: "-70px" });

function observeReveals(root = document) {
  root.querySelectorAll("[data-reveal]:not(.revealed)").forEach((el) => {
    el.style.transitionDelay = `${el.dataset.delay || 0}ms`;
    revealObserver.observe(el);
  });
}

/* ── Scroll-driven moments ── */
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));

function initScrollEffects() {
  const navbar = $("#navbar");
  const hero = $("#home");
  const heroFrame = $("#hero-image-frame");
  const heroImg = $("#hero-image");
  const watermark = $("#hero-watermark");
  const oy = $("#ordinary-yours");
  const oyOrdinary = $("#oy-ordinary");
  const oyYours = $("#oy-yours");
  const oyImage = $("#oy-image");
  const oyProgress = $("#oy-progress");
  const oyFooter = $("#oy-footer");
  const timeline = $("#heritage-timeline");
  const timelineProgress = $("#timeline-progress");

  const update = () => {
    const y = window.scrollY;

    // Navbar state
    const scrolled = y > 40;
    navbar.classList.toggle("bg-ivory/90", scrolled);
    navbar.classList.toggle("backdrop-blur-md", scrolled);
    navbar.classList.toggle("border-charcoal/10", scrolled);
    navbar.classList.toggle("border-transparent", !scrolled);

    // Hero parallax
    const heroH = hero.offsetHeight || 1;
    const hp = clamp01(y / heroH);
    heroFrame.style.transform = `translateY(${hp * 90}px)`;
    heroImg.style.transform = `scale(${1 + hp * 0.08})`;
    watermark.style.transform = `translateY(calc(-50% + ${hp * -60}px))`;

    // Ordinary → Yours
    const r = oy.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    const p = clamp01(-r.top / (total || 1));
    oyOrdinary.style.opacity = 1 - range(p, 0.05, 0.45) * 0.88;
    const yoursP = range(p, 0.35, 0.7);
    oyYours.style.opacity = yoursP;
    oyYours.style.transform = `translateY(${(1 - range(p, 0.35, 0.75)) * 40}px)`;
    oyImage.style.clipPath = `inset(0 ${(1 - range(p, 0.15, 0.7)) * 100}% 0 0)`;
    oyProgress.style.width = `${range(p, 0.1, 0.8) * 100}%`;
    oyFooter.style.opacity = yoursP;

    // Timeline progress
    const tr = timeline.getBoundingClientRect();
    const tp = clamp01((window.innerHeight * 0.7 - tr.top) / (tr.height || 1));
    timelineProgress.style.transform = `scaleY(${tp})`;
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ── Boot ── */
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMarquee();
  renderCustomization();
  renderCatalogue();
  renderSegments();
  renderCollections();
  renderTimeline();
  renderGallery();
  renderContact();
  wireWhatsApp();
  $("#footer-year").textContent = new Date().getFullYear();
  lucide.createIcons();
  observeReveals();
  initScrollEffects();
});
