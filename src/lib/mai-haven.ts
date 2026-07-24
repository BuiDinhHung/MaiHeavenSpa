export const maiHaven = {
  name: "Mai Heaven Spa",
  tagline: "Schönheit & Wellness",
  url: "https://www.mai-haven-spa.de",
  logo: "/images/logo.png",
  address: "Manfred-von-Richthofen-Str. 8, 12101 Berlin",
  streetAddress: "Manfred-von-Richthofen-Str. 8",
  postalCode: "12101",
  city: "Berlin",
  station: "U6-Bhf Platz der Luftbrücke",
  phones: ["0176 57992233", "030 47480959"],
  phoneTel: ["+4917657992233", "+493047480959"],
  whatsapp: "4917657992233",
  email: "maihavenspa2025@gmail.com",
  hours: [
    { days: "Mo.–Sa.", value: "10:00–20:00 Uhr" },
    { days: "So.", value: "geschlossen" },
  ],
  social: {
    instagram: "https://www.instagram.com/mai_haven_spa_/",
    facebook: "https://www.facebook.com/share/1BD5mRjXy6/?mibextid=wwXIfr",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.442816044329!2d13.383719799999998!3d52.4841382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85196b8fa08db%3A0x726b84bb1b33cadf!2sMai-Haven%20Spa!5e1!3m2!1svi!2s!4v1779005089068!5m2!1svi!2s",
};

// encodeURIComponent turns spaces into %20 (never "+"), which is what wa.me
// expects. Do not swap this for URLSearchParams/qs helpers that use
// application/x-www-form-urlencoded encoding - those turn spaces into "+"
// and WhatsApp then shows literal "+" characters in the prefilled message.
export function getWhatsappBookingUrl(serviceName?: string) {
  const message = serviceName
    ? `Hallo Mai Heaven Spa, ich interessiere mich für "${serviceName}" und möchte gerne einen Termin anfragen.`
    : "Hallo Mai Heaven Spa, ich möchte gerne einen Termin anfragen.";
  return `https://wa.me/${maiHaven.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { label: "HOME", href: "#home" },
  { label: "Behandlungen", href: "#behandlungen" },
  { label: "Wellness Together", href: "#wellness-together" },
  { label: "Galerie", href: "#galerie" },
  { label: "Kontakt", href: "#kontakt" },
];

export const highlights = [
  {
    title: "Head Spa & Wellness",
    body: "Kopfhautpflege, Kräuterdampf und wohltuende Massage für tiefe Entspannung.",
  },
  {
    title: "Beauty & Pflege",
    body: "Ein sorgfältig ausgewähltes Menü für Kopfhaut, Körper, Haut und Füße.",
  },
  {
    title: "Massage & Fußpflege",
    body: "Individuell abgestimmte Behandlungen zur Lösung von Verspannungen.",
  },
];

export const wellnessTogether = {
  headline: "Wellness Together",
  subheadline: "Gemeinsam entspannen. Gemeinsam genießen.",
  intro: [
    "Wellness ist am schönsten, wenn man sie teilt.",
    "Ob als Paar, mit der besten Freundin, Mutter und Tochter, Geschwistern oder einem lieben Menschen – genießen Sie Ihre gemeinsame Auszeit bei Mai Heaven Spa.",
    "Alle Behandlungen finden gleichzeitig statt und werden individuell auf Ihre Wünsche abgestimmt.",
  ],
  packages: [
    {
      name: "Head Spa for Two",
      description:
        "Entspannende Kopfhautpflege, wohltuende Massage und intensive Pflege für Haar und Kopfhaut.",
      prices: [
        { duration: "45 Min.", price: "120 €" },
        { duration: "60 Min.", price: "150 €" },
      ],
    },
    {
      name: "Massage for Two",
      description:
        "Individuell abgestimmte Ganzkörpermassage zur Lösung von Verspannungen und zur Förderung des Wohlbefindens.",
      prices: [
        { duration: "60 Min.", price: "140 €" },
        { duration: "90 Min.", price: "210 €" },
      ],
    },
    {
      name: "Fußpflege for Two",
      description:
        "Professionelle Fußpflege für zwei Personen – hygienisch, entspannend und mit viel Liebe zum Detail.",
      prices: [{ duration: "45–60 Min.", price: "ab 90 €" }],
    },
    {
      name: "Head Spa & Massage for Two",
      description:
        "Die perfekte Kombination aus tiefenwirksamer Massage und entspannendem Head Spa.",
      prices: [{ duration: "120 Min.", price: "260 €" }],
    },
    {
      name: "Wellness Deluxe for Two",
      description: "Ein exklusives Spa-Erlebnis für zwei.",
      includes: ["Ganzkörpermassage", "Head Spa", "Fußpflege", "Tee oder Erfrischungsgetränk"],
      prices: [{ duration: "ca. 3 Stunden", price: "ab 350 €" }],
    },
  ],
};

export const services = [
  {
    id: "service-head-spa",
    name: "Head Spa – Tiefenentspannung & Pflege",
    image: "/images/mai-haven/services/head-spa.png",
    description:
      "Kopf-, Nacken- und Schultermassage, Gesichtsmassage, Peeling, Maske, Haarkur und Kräuterdampf.",
    prices: [
      { duration: "45 Minuten", price: "60 €" },
      { duration: "70 Minuten", price: "80 €" },
      { duration: "90 Minuten", price: "105 €" },
    ],
  },
  {
    id: "service-body-massage",
    name: "Body Massage",
    image: "/images/mai-haven/services/bodymass.png",
    description:
      "Nicht jede Verspannung braucht Medikamente – manchmal braucht der Körper einfach die richtigen Hände.",
    prices: [
      { duration: "60 Minuten", price: "70 €" },
      { duration: "90 Minuten", price: "100 €" },
      { duration: "120 Minuten", price: "130 €" },
    ],
  },
  {
    name: "Hot Stone & Kräuterstempel",
    image: "/images/mai-haven/services/hot-stone-herbal-compress.png",
    prices: [
      { duration: "60 Minuten", price: "80 €" },
      { duration: "90 Minuten", price: "110 €" },
    ],
  },
  {
    name: "Fußpflege und Fußmassage",
    image: "/images/mai-haven/services/làm chân.png",
    description: "Kräuterfußbad, Hornhautentfernung, Nagelpflege, Massage und Pflege.",
    prices: [
      { duration: "30 Minuten", price: "40 €" },
      { duration: "45 Minuten", price: "50 €" },
      { duration: "60 Minuten", price: "70 €" },
    ],
  },
  {
    name: "Kopf-Schulter-Rückenmassage",
    image: "/images/mai-haven/services/head-shoulder-back-massage.png",
    description:
      "Löst gezielt Verspannungen im Nacken- und Rückenbereich und schenkt Leichtigkeit.",
    prices: [
      { duration: "30 Minuten", price: "40 €" },
      { duration: "45 Minuten", price: "50 €" },
      { duration: "60 Minuten", price: "70 €" },
    ],
  },
  {
    name: "Gesichtsmassage – Entspannung & Pflege",
    image: "/images/mai-haven/services/facial-massage.png",
    description:
      "Wohltuende Gesichtsmassage für Entspannung, Regeneration und ein strahlendes Hautbild.",
    prices: [
      { duration: "30 Minuten", price: "40 €" },
      { duration: "45 Minuten", price: "55 €" },
    ],
  },
  {
    name: "Deep Clean Skin – Intensive Gesichtsreinigung",
    image: "/images/mai-haven/services/deep-clean-skin.png",
    description:
      "Tiefenreinigung für ein frisches, klares Hautbild. Verfeinert die Poren und sorgt für strahlende Frische.",
    prices: [
      { duration: "60 Minuten", price: "120 €" },
      { duration: "5er-Paket", price: "500 € statt 600 €" },
    ],
  },
  {
    name: "Rundum Wohlfühl Paket",
    image: "/images/mai-haven/services/wellness-package.png",
    description:
      "Head Spa, Ganzkörpermassage und Fußpflege als komplettes Erlebnis von Kopf bis Fuß.",
    prices: [
      { duration: "3 Stunden", price: "190 €" },
      { duration: "4 Stunden", price: "260 €" },
    ],
  },
  {
    name: "Beauty & Pflege",
    prices: [
      { duration: "Maniküre", price: "30 €" },
      { duration: "Pediküre mit Shellac", price: "ab 45 €" },
      { duration: "Wimpernlifting", price: "55 €" },
      { duration: "Färben Wimpern & Brauen", price: "ab 20 €" },
    ],
  },
];

export const galleryImages = [
  { src: "/images/mai-haven/gallery-portrait.png", alt: "Behandlungsraum im Mai Heaven Spa" },
  { src: "/images/mai-haven/spa-room-01.png", alt: "Wellness-Sessel für zwei Personen" },
  { src: "/images/mai-haven/head-spa.png", alt: "Head Spa Behandlung" },
  { src: "/images/mai-haven/spa-room-03.png", alt: "Beauty Behandlung" },
  { src: "/images/mai-haven/treatment-01.png", alt: "Spa Detail" },
];

export const testimonials = [
  {
    quote:
      "Ich hatte eine wunderbare Erfahrung im Mai Heaven Spa! Alles war sehr sauber, angenehm und professionell. Ich komme auf jeden Fall wieder. 🌸",
    name: "Trang Nguyen",
    role: "6 Bewertungen · 3 Fotos",
    rating: 5,
  },
  {
    quote: "Super Massage\nFreundlichen Personal\nRelax Atmosphäre\nSauber Salon",
    name: "Maiia Katts",
    role: "Local Guide · 50 Bewertungen",
    rating: 5,
  },
  {
    quote:
      "Ich war heute spontan in der Gegend und hab den Laden gesehen. Da ich extreme Kopfschmerzen und Verspannungen hatte, dachte ich, lass ich mir eine schöne Rücken Kopf Nacken Massage geben. Ich war begeistert 100% zufrieden. Meine Kopfschmerzen waren danach weg, im Anschluss hab ich mir noch eine Pediküre und Fußmassage gegönnt, die auch äußerst sauber und wohltuend war.\nKann den Laden sehr empfehlen!\n\nGerne wieder !:)",
    name: "chiara-maria Knespel",
    role: "12 Bewertungen",
    rating: 5,
  },
  {
    quote:
      "Ich hatte schon viele Massagen in meinem Leben, aber das war eine der Besten überhaupt. Der ganze Laden ist sehr sauber, gemütlich und die Mitarbeiter total freundlich. Man fühlt sich direkt wie zu Hause.",
    name: "Silvia Gemberle",
    role: "4 Bewertungen",
    rating: 5,
  },
  {
    quote:
      "Ich hatte heute eine Massage im Mai-Haven und es war richtig toll 💕 Ruhige und angenehme Atmosphäre, sehr nette Mitarbeiter*innen und die Behandlung an sich war auch super.\nIch komme auf jeden Fall wieder vorbei :)",
    name: "Lisa Braun",
    role: "Local Guide · 16 Bewertungen",
    rating: 5,
  },
  {
    quote:
      "Ich habe mir heute das „Head-Spa“ gegönnt. Es war unglaublich schön und entspannend. Bin sogar zwischendurch eingeschlafen 😴\nIch bin sooo tiefenentspannt nach Hause gegangen und meine Haare und die Gesichtshaut sind samtweich!\nDer Laden ist wirklich toll und eine wahre Bereicherung für unsere Nachbarschaft. Ganz herzlichen Dank!!😊💗💯",
    name: "Sarah Wäntig",
    role: "Local Guide · 28 Bewertungen",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Wie buche ich einen Termin?",
    answer:
      "Sie können direkt per WhatsApp anfragen. Wir bestätigen den Termin persönlich und stimmen die Behandlung auf Ihre Wünsche ab.",
  },
  {
    question: "Sind Gutscheine erhältlich?",
    answer:
      "Ja. Gutscheine sind ideal für Geburtstag, Hochzeitstag, Valentinstag, Muttertag oder Weihnachten.",
  },
  {
    question: "Können zwei Behandlungen gleichzeitig stattfinden?",
    answer:
      "Ja. Die Wellness-Together-Angebote sind für zwei Personen gedacht und finden gleichzeitig statt.",
  },
];
