// ---------------------------------------------------------------------------
// Roadtech Asphalt Technologies — site content.
// Source of truth: roadtech_content_inventory.pdf (current-site content audit).
// Copy here is taken from the PDF. Where the PDF flagged a gap, the gap-handling
// rule is applied in the components (no invented specs). Do not add fabricated
// statistics, certificate numbers, or specifications.
// ---------------------------------------------------------------------------

export const company = {
  legalName: 'Roadtech Asphalt Technologies Private Limited',
  shortName: 'Roadtech Asphalt Technologies',
  tagline: 'Pioneering Excellence in Bituminous Products & Services',
  incorporated: 'Jan 2020',
}

export const contact = {
  phoneDisplay: '+91 70170 77202',
  phoneHref: '+917017077202',
  whatsappHref: '917017077202',
  emailGeneral: 'info@roadtech-asphalt.com',
  emailSales: 'sales@roadtech-asphalt.com',
  workingHours: '9:30 AM – 6:00 PM',
  workingDays: 'Monday to Saturday',
  plantAddress: '114, 114-B, Delhi Rd, Jandhera, Pahansu, Uttar Pradesh 247451',
  registeredAddress:
    'Shop No. 3, 1st Floor, Sophia Market, Near Hindi Medium Sophia School, Saharanpur',
  // Plant coordinates from the PDF (Jandhera, Pahansu, UP).
  mapLat: 29.8963,
  mapLng: 77.3523,
  facebook:
    'https://facebook.com/people/Roadtech-Asphalt-Technologies-PVT-LTD/61566432462325/',
  linkedin: 'https://linkedin.com/company/roadtech-asphalt-technologies-pvt-ltd',
}

export type NavItem = { label: string; to: string }
export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Consultancy', to: '/consultancy' },
  { label: 'Join Us', to: '/join' },
  { label: 'Contact', to: '/contact' },
]

// --- Home ---------------------------------------------------------------

export const home = {
  hero: {
    figure: 'SPEC-001 :: BITUMINOUS PRODUCTS & SERVICES',
    title: 'Engineered Bitumen For The Roads India Is Building',
    subhead:
      'Manufacturer of bitumen emulsions, modified bitumen and cold-mix solutions — supplied with the technical services that make every laid metre last longer.',
  },
  legacy: {
    figure: 'FIG. 01 :: LEGACY OPERATIONS',
    eyebrow: 'About Roadtech Asphalt Technologies',
    heading: 'Legacy of Quality and Innovation',
    body: [
      'ROADTECH ASPHALT TECHNOLOGIES PVT LTD was incorporated in Jan 2020, having a highly qualified and trained technical as well as sales team who works closely with our customers, including manufacturer, distributor and applicator associates.',
      'Our aim is to penetrate the market in terms of manufacturing and supply of quality road products with specialized technical services, to set high standard goals in the industry. We provide technical services to our valuable customers to get the maximum output of the laid / used product, and hence can provide support for enhancement in the life span of the road.',
    ],
  },
  capabilities: [
    {
      code: 'CAP-01',
      title: 'Manufacturing Units',
      body: 'Our manufacturing units are strategically spread across the country to ensure that our high-quality products are delivered on time and efficiently to customers.',
    },
    {
      code: 'CAP-02',
      title: 'In-House Laboratory',
      body: 'Roadtech utilizes advanced technology and equipment to ensure the highest quality products and services, verified before they leave the unit.',
    },
    {
      code: 'CAP-03',
      title: 'R&D Center',
      body: 'Our research and development centre uses cutting-edge technology and is staffed with experienced professionals dedicated to creating innovative solutions.',
    },
  ],
  // Manufacturing locations shown in the "Manufacturing Units" card modal.
  // Edit this list to add / change a plant; the card hint + modal follow automatically.
  manufacturingUnits: {
    eyebrow: 'CAP-01 :: MANUFACTURING UNITS',
    title: 'Manufacturing Units',
    hint: '3 locations',
    locations: [
      { city: 'Haridwar', line: 'Uttarakhand · Bitumen emulsions & modified bitumen' },
      { city: 'Mathura', line: 'Uttar Pradesh · Cold-mix & emulsion production' },
      { city: 'Saharanpur', line: 'Uttar Pradesh · Primary plant & registered operations' },
    ],
  },
  stat: {
    value: '1 Million+',
    unit: 'sq. metres',
    label: 'Microsurfacing applied',
    body: 'Roadtech microsurfacing provides a durable and cost-effective solution to maintain roads and pavements, ensuring a safe and comfortable transportation experience.',
  },
  productsPreview: {
    figure: 'FIG. 02 :: PRODUCT FAMILIES',
    eyebrow: 'Our Products',
    heading: 'Value-added Bituminous Products',
    body: 'We are committed to delivering innovative and sustainable solutions. Our expertise, experience, and commitment to quality make us a trusted partner for clients, stakeholders, and communities.',
    items: [
      {
        code: 'P-01',
        title: 'Bitumen Emulsion',
        body: 'Superior performance and sustainability for roads and pavements — high-quality emulsions for tack, prime and surface-maintenance coats.',
        image: '/images/prod-emulsion.jpg',
        alt: 'Close detail of a bitumen-sealed road surface around a cast manhole cover.',
        to: '/products',
      },
      {
        code: 'P-02',
        title: 'Modified Bitumen',
        body: 'Enhanced performance and durability for highways, runways and expressways, engineered for high-load and high-temperature conditions.',
        image: '/images/prod-modified.jpg',
        alt: 'Top-down aerial of a multi-lane expressway bridge spanning water in India.',
        to: '/products',
      },
      {
        code: 'P-03',
        title: 'Coldmix Application',
        body: 'Roadtech Roadbond is a premix solution that provides a quick, durable and cost-effective answer for road maintenance, suitable for flexible and rigid pavements.',
        image: '/images/prod-coldmix.jpg',
        alt: 'Aerial view of a national highway running through Indian countryside.',
        to: '/products',
      },
      {
        code: 'P-04',
        title: 'Special Products',
        body: 'Paving the way with specialized bituminous solutions for road surfaces, concrete protection and waterproofing.',
        image: '/images/prod-special.jpg',
        alt: 'Elevated expressway flyover curving through an Indian city.',
        to: '/products',
      },
    ],
  },
  servicesPreview: {
    figure: 'FIG. 03 :: SERVICES',
    eyebrow: 'Our Services',
    heading: 'Road Repair & Maintenance',
    body: 'A comprehensive range of services, backed by cutting-edge technology and experienced professionals, ensuring reliable and high-quality solutions for every project.',
    items: [
      {
        code: 'S-01',
        title: 'Microsurfacing',
        body: 'Restores the surface of existing roads by filling and sealing cracks, providing skid resistance and improving ride quality.',
        image: '/images/svc-microsurfacing.jpg',
        alt: 'An orange road roller compacting a freshly laid asphalt surface.',
        to: '/consultancy',
      },
      {
        code: 'S-02',
        title: 'Bitumen Design',
        body: 'Customized cold-mix and binder solutions — aggregate, binder and additives produced and applied at ambient temperatures.',
        image: '/images/svc-bitumen-design.jpg',
        alt: 'An asphalt paver and roller laying a new road surface.',
        to: '/consultancy',
      },
      {
        code: 'S-03',
        title: 'Material Testing',
        body: 'Ensuring quality and compliance with our in-house lab — critical for the safety, durability and sustainability of every road.',
        image: '/images/svc-testing.jpg',
        alt: 'A site engineer in protective gear inspecting equipment on a worksite.',
        to: '/consultancy',
      },
      {
        code: 'S-04',
        title: 'Technical Consultancy',
        body: 'Technical support, product R&D and advanced solutions aimed at improving operations across the road construction industry.',
        image: '/images/svc-consultancy.jpg',
        alt: 'Aerial view of the Delhi–Gurgaon expressway corridor.',
        to: '/consultancy',
      },
    ],
  },
  industries: {
    figure: 'FIG. 04 :: INDUSTRIES SERVED',
    heading: 'Built for the surfaces that carry the most',
    items: [
      {
        code: 'IND-01',
        title: 'Highways & Expressways',
        body: 'National highways, state highways and expressways — the high-volume corridors our binders and emulsions are engineered for.',
        image: '/images/ind-highways.jpg',
        alt: 'Aerial view of a four-lane expressway interchange over water at Jami village, India.',
      },
      {
        code: 'IND-02',
        title: 'Runways',
        body: 'Aviation-grade surfaces where load tolerance and consistency are non-negotiable.',
        image: '/images/ind-runways.jpg',
        alt: 'An airport runway with painted threshold markings receding to the horizon.',
      },
      {
        code: 'IND-03',
        title: 'Race & Test Tracks',
        body: 'High-performance surfaces engineered for grip, evenness and repeatable conditions.',
        image: '/images/ind-racetrack.jpg',
        alt: 'A performance car on dark tarmac under a moody sky.',
      },
    ],
  },
}

// --- About --------------------------------------------------------------

export const about = {
  hero: {
    figure: 'FIG. 00 :: COMPANY PROFILE',
    heading: 'Road to Excellence in the Bitumen Derivatives Industry',
    image: '/images/ind-highways.jpg',
    alt: 'Aerial view of a completed expressway interchange in India.',
  },
  story: [
    'ROADTECH ASPHALT TECHNOLOGIES PVT LTD was incorporated in Jan 2020, having a highly qualified and trained technical as well as sales team who works closely with our customers, which includes manufacturer, distributor and applicator associates. Our aim is to penetrate the market in terms of manufacturing and supply of quality road products with specialized technical services to make sure we set high standard goals in the industry. We provide technical services to our valuable customers to get the maximum output of the laid / used product, and hence can provide support for enhancement in the life span of the road.',
    'Our cutting-edge product portfolio includes a wide range of Bitumen Emulsions, Modified Bitumen, Cold Mix, Road Bonds, and more, catering to the diverse needs of National Highways, State Highways, Expressways, and prestigious infrastructure projects. Our niche road maintenance works, such as micro-surfacing and slurry sealing, provide comprehensive solutions for durable and sustainable roads.',
    'At ROADTECH ASPHALT TECHNOLOGIES PVT LTD, we set industry standards. We are an active member of the IIA (Indian Industries Association), and hold ISO and MSME recognition. Our state-of-the-art manufacturing facilities, stringent quality control measures, and skilled team ensure that our products meet the highest global benchmarks.',
    'Collaboration is the cornerstone of our approach. We work closely with our promoters, customers, and stakeholders to deliver unmatched quality, reliability, and innovation in every project. Our unwavering focus on integrity, safety, and customer-centricity has earned us a reputation as a trusted partner in the Roads & Infrastructure sector.',
    'Experience the ROADTECH ASPHALT TECHNOLOGIES PVT LTD advantage and partner with us for your road construction needs. Contact us today to explore how we can contribute to the success of your projects and pave the way to excellence together.',
  ],
  // Certifications referenced in the PDF — names only. No certificate numbers,
  // ISO standard version, or issuing body are stated on the source site, so none
  // are shown here (per the gap-handling rule: do not invent).
  certifications: [
    { label: 'ISO Certified', kind: 'cert' as const },
    { label: 'MSME Registered', kind: 'cert' as const },
    { label: 'IIA Member', kind: 'cert' as const },
    { label: 'BIS Certified', kind: 'cert' as const },
    { label: 'Est. 2020', kind: 'default' as const },
  ],
  faq: {
    // Framed as general guidance — 5 of 6 answers are generic industry facts,
    // not Roadtech-specific (per the PDF note + brief).
    heading: 'Common Questions About Asphalt',
    intro:
      'General guidance on asphalt and road maintenance. For specifics on Roadtech grades, lead times or service area, contact our technical team.',
    items: [
      {
        q: 'What are the benefits of using asphalt for paving?',
        a: [
          'Durability — asphalt is known for its long lifespan and ability to withstand heavy traffic.',
          'Flexibility — it adapts to changes in temperature and soil conditions, reducing the risk of cracking or crumbling.',
          'Quick installation — it can be installed quickly, minimizing disruptions to traffic and reducing project costs.',
          'Cost-effective — asphalt is often more cost-effective than other paving materials, such as concrete.',
        ],
      },
      {
        q: 'How often should asphalt be maintained?',
        a: [
          'Regular maintenance, such as sealing cracks and patching potholes, can help extend the lifespan of asphalt pavement. The frequency depends on factors such as traffic volume, weather conditions, and the quality of the initial installation.',
        ],
      },
      {
        q: 'What are the common signs of asphalt damage?',
        a: [
          'Cracks.',
          'Potholes.',
          'Alligatoring — a pattern of interconnected cracks.',
          'Shotholes — small, round depressions.',
        ],
      },
      {
        q: 'What types of asphalt products do you offer?',
        a: [
          'Hot mix asphalt (HMA).',
          'Cold mix asphalt.',
          'Asphalt emulsions.',
          'Asphalt sealants.',
          'Asphalt patching materials.',
        ],
      },
      {
        q: 'Is asphalt an environmentally friendly material?',
        a: [
          'Asphalt can be considered environmentally friendly when it is recycled and properly maintained. Recycling reduces the need for new materials and helps conserve energy, while proper maintenance helps prevent deterioration and pollution.',
        ],
      },
      {
        q: 'What safety precautions are taken during asphalt installation?',
        a: [
          'We follow strict safety protocols to protect our workers and the public during installation. This includes the use of personal protective equipment (PPE) and traffic control measures.',
        ],
      },
    ],
  },
}

// --- Products -----------------------------------------------------------

export type Product = {
  code: string
  name: string
  subtitle?: string
  description?: string // omit where the source site provides no real description
  image?: string // omit to render the datasheet placeholder
  alt?: string
  slug?: string // when set, the card links to the dedicated /products/[slug] page
}

export type ProductTab = {
  id: string
  label: string
  intro?: string
  products: Product[]
}

export const productTabs: ProductTab[] = [
  {
    id: 'emulsions',
    label: 'Bitumen Emulsions',
    intro:
      'Engineered emulsions for every stage of the pavement — tack, prime, cold mix, microsurfacing and maintenance seals.',
    products: [
      {
        code: 'RS-1',
        name: 'Rapid Setting Emulsion',
        subtitle: 'For Tack Coat',
        slug: 'rs-1',
        description:
          "Rapid setting emulsion is a specialized bitumen emulsion designed for tack coat applications. Its quick-setting properties allow rapid bonding between layers of asphalt through a chemical reaction that occurs when the emulsion contacts the aggregate. Tack coat applications — ensuring adhesion between new and existing asphalt layers — require a product that sets quickly to minimize the risk of slippage or unevenness in the finished surface. The rapid setting emulsion's efficiency makes it a popular choice in road construction and maintenance projects.",
        image: '/product/05522981-41DC-43BB-B510-5594E81FDD2B.jpg',
        alt: 'RS-1 rapid setting cationic bitumen emulsion drum on a road',
      },
      {
        code: 'CSS-1',
        name: 'Water-Based Slow Setting Emulsion',
        subtitle: 'For Prime Coat',
        description:
          'A water-based slow-setting emulsion designed for prime coat applications. Unlike rapid-setting emulsions, it is formulated to set more slowly, allowing better penetration into the base material. This slower setting time ensures the emulsion effectively bonds with the underlying surface, providing a strong foundation for subsequent layers of asphalt. The water-based nature offers advantages such as reduced environmental impact and improved handling properties.',
        image: '/product/css1.jpg',
        alt: 'CSS-1 water-based slow setting bitumen emulsion drum on a road',
      },
      {
        code: 'SS-1',
        name: 'Slow Setting Emulsion, Grade 1',
        subtitle: 'For Prime Coat, Fog Seal & Crack Sealing',
        slug: 'ss-1',
        description:
          'A slow-setting cationic emulsion formulated to stay workable longer, allowing it to penetrate and wet surfaces thoroughly before it breaks — ideal for prime coats, fog seals and crack sealing.',
        image: '/product/486D2DA2-BF0A-40B4-90AE-F33D7091D067.jpg',
        alt: 'SS-1 slow setting cationic bitumen emulsion drums on a road',
      },
      {
        code: 'SS-2',
        name: 'Slow Setting Emulsion, Grade 2',
        subtitle: 'For Premix & Slurry Work',
        slug: 'ss-2',
        description:
          'A higher-viscosity slow-set cationic emulsion with more binder than SS-1, built for mixing with graded and fine aggregates — the choice for cold premix, MSS, SDBC and slurry seals.',
        image: '/product/E0F03CFF-AF0D-441F-B643-2CF85402F510.jpg',
        alt: 'SS-2 slow setting cationic bitumen emulsion drum on a road',
      },
      {
        code: 'CME',
        name: 'Cold Mix Emulsion',
        subtitle: 'For Construction of Rural Roads',
        description:
          'A cold mix emulsion designed for the construction of rural roads. It offers several advantages over traditional hot mix asphalt, including lower energy consumption, reduced emissions, and easier handling. Cold mix emulsions can be mixed with aggregate at ambient temperatures, eliminating the need for costly heating equipment — particularly suitable for rural areas where infrastructure and resources may be limited, allowing faster construction times and reduced disruption to local communities.',
        image: '/product/cme.jpg',
        alt: 'CME cold mix bitumen emulsion drum on a road',
      },
      {
        code: 'CQS',
        name: 'Cationic Quick Setting Emulsion',
        subtitle: 'For Microsurfacing Layer',
        slug: 'cqs-emulsion',
        description:
          'A cationic quick-setting emulsion designed for microsurfacing applications. Its positively charged particles (cations) allow better adhesion to the existing road surface, and its quick-setting properties ensure rapid bonding and minimal disruption to traffic flow during construction. Microsurfacing layers — a thin layer of asphalt, aggregate and polymer — improve road surfaces, enhance skid resistance and extend pavement life.',
        image: '/product/5830D47A-EEF8-43D2-9EE8-37E88C3E2742.jpg',
        alt: 'CQS cationic quick-setting bitumen emulsion drum on a road',
      },
      {
        code: 'PME',
        name: 'Polymer Modified Emulsion',
        subtitle: 'For Fog Seal & Slurry Seal',
        description:
          "Polymer modified emulsion (PME) incorporates polymeric additives to enhance its performance properties, commonly used in fog seal and slurry seal applications for small maintenance projects. Fog seals apply a thin layer of PME followed by a light sprinkling of aggregate, rejuvenating the existing asphalt and improving skid resistance. Slurry seals apply a thicker PME-aggregate mix for more substantial protection. PME's improved adhesion, durability and resistance to cracking make it ideal for these maintenance applications.",
        image: '/product/pme.jpg',
        alt: 'PME polymer modified bitumen emulsion drum on a road',
      },
    ],
  },
  {
    id: 'coldmix',
    label: 'Cold Mix & Repair',
    intro:
      'Ready-to-use, all-weather materials laid at ambient temperature — no hot-mix plant, no heating.',
    products: [
      {
        code: 'Coldmix',
        name: 'Ready-to-Use Cold Mix Asphalt',
        subtitle: 'IRC:100 / 116-2014',
        slug: 'coldmix',
        description:
          'All-weather, ready-to-lay asphalt that needs no heating — open the bag and go. Stockpile-ready with a long shelf life, ideal for rural roads, remote sites and maintenance crews.',
        image: '/product/3211FD90-3C66-4164-9C86-A21562219CA7.jpg',
        alt: 'Coldmix ready-to-use cold mix asphalt in a bag on a rural road',
      },
      {
        code: 'Patch Pro',
        name: 'Ready-Mix Pothole Repair',
        subtitle: 'IRC:116-2014',
        slug: 'patch-pro',
        description:
          'Permanent-feel pothole repair in minutes — pour, tamp, and open to traffic. Cold-applied and weather-independent for year-round patching.',
        image: '/product/515C8431-CDA9-4597-AB05-F2F89734A9A9.jpg',
        alt: 'Patch Pro cold-mix pothole repair being poured into a pothole',
      },
    ],
  },
  {
    id: 'bitumen',
    label: 'Bitumen',
    intro: 'All grades of Polymer Modified Bitumen as per IS and IRC standards.',
    products: [
      {
        code: 'PMB',
        name: 'Polymer Modified Bitumen',
        subtitle: 'High Temperature Grade',
        // No further description on the source site — gap-handling rule applies.
        image: '/product/CAD7F274-C99D-444D-B351-493C5AD69267.jpg',
        alt: 'PMB polymer modified bitumen pouring from a plant spout',
      },
      {
        code: 'PMB 70',
        name: 'Polymer Modified Bitumen 70',
        subtitle: 'Low Temperature Grade',
        image: '/product/EE17E8CD-A7D5-4250-AD96-215CBB923A38.jpg',
        alt: 'PMB 70 polymer modified bitumen drum on a pallet at a plant',
      },
      {
        code: 'CRMB 50 / 55 / 60',
        name: 'Crumb Rubber Modified Bitumen',
        subtitle: 'As per customer needs — matching IRC & IS standards',
        image: '/product/59A612DB-A677-4813-A089-393FED30EF06.jpg',
        alt: 'CRMB crumb rubber modified bitumen being blended in a vessel',
      },
    ],
  },
  {
    id: 'additives',
    label: 'Emulsifiers & Additives',
    intro: 'Additives that extend material life and support sustainable reuse.',
    products: [
      {
        code: 'RAP',
        name: 'Recycled Asphalt Pavement (RAP) Rejuvenator',
        // Title only on the source site — gap-handling rule applies.
        image: '/product/023B8262-C8DF-43DE-AD97-9591F360E832.jpg',
        alt: 'RAP rejuvenator oil poured over recycled asphalt granules',
      },
    ],
  },
]

// Note shown on product entries that have no real description (gap handling).
export const specOnRequest =
  'Detailed specifications available on request — contact our technical team.'

// --- Consultancy --------------------------------------------------------

export const consultancy = {
  hero: {
    figure: 'FIG. 00 :: CONSULTANCY & SERVICES',
    heading: 'Technical Consultancy for Road Construction & Maintenance',
  },
  tabs: {
    services: {
      label: 'Services',
      heading: 'On-demand expertise, at your plant or ours',
      body: [
        'The Roadtech team provides consultancy to our valued customers for the construction and maintenance of roads — using new construction or any maintenance technology, from Cold Mix and Hot Mix application to microsurfacing — on demand, and supports customers as per their requirement.',
        'Our highly trained team can support customers in the production of any grade of emulsion, modified bitumen and more, at the customer’s premises or plant.',
      ],
      points: [
        { code: 'C-01', title: 'New Construction', body: 'Cold mix and hot mix application support for new road builds.' },
        { code: 'C-02', title: 'Maintenance Technology', body: 'Microsurfacing and seal technologies to extend pavement life.' },
        { code: 'C-03', title: 'On-Site Production', body: 'Production of emulsions and modified bitumen at your premises or plant.' },
        { code: 'C-04', title: 'Grade Customisation', body: 'Any grade of emulsion or modified bitumen, matched to your specification.' },
      ],
    },
    vision: {
      label: 'Vision',
      heading: 'Our Vision',
      // Rewritten from the garbled source line ("deliver Quality constraint Material"),
      // per the brief.
      statement:
        'To be the preferred partner for effective, sustainable road infrastructure solutions — delivering consistent, quality material our customers can rely on, project after project.',
    },
    values: {
      label: 'Core Values',
      heading: 'What we hold ourselves to',
      intro:
        'Roadtech believes in delivering quality material to our customers and generating value with trust, by maintaining high standards.',
      items: [
        { code: 'V-01', title: 'Business Ethics', body: 'Integrity in every dealing, specification and supply commitment.' },
        { code: 'V-02', title: 'Healthy Work Culture', body: 'A safe, motivated team is the foundation of consistent quality.' },
        { code: 'V-03', title: 'Building Relationships', body: 'Long-term partnerships with customers, promoters and stakeholders.' },
        { code: 'V-04', title: "Understanding Demand", body: "Listening first, so the material and service fit the customer's real need." },
      ],
    },
    gallery: {
      label: 'Project Gallery',
      heading: 'Our Work',
      // Reframed from the uncaptioned "Our Partners" image set as a generic
      // project gallery (per the brief — not implying named partnerships).
      intro:
        'A selection of road infrastructure and maintenance work. Project photography is representative; contact us for case-specific references.',
      images: [
        { src: '/images/prod-modified.jpg', alt: 'Top-down aerial of a multi-lane expressway bridge over water.', tag: 'EXPRESSWAY BRIDGE' },
        { src: '/images/about-construction.jpg', alt: 'A national highway under construction through hilly Indian terrain.', tag: 'HIGHWAY BUILD' },
        { src: '/images/svc-consultancy.jpg', alt: 'Aerial view of the Delhi–Gurgaon expressway corridor.', tag: 'EXPRESSWAY CORRIDOR' },
        { src: '/images/prod-special.jpg', alt: 'Elevated expressway flyover curving through an Indian city.', tag: 'URBAN FLYOVER' },
        { src: '/images/svc-microsurfacing.jpg', alt: 'An orange road roller compacting a fresh asphalt surface.', tag: 'MICROSURFACING' },
        { src: '/images/svc-bitumen-design.jpg', alt: 'An asphalt paver and roller laying a new road surface.', tag: 'PAVING' },
      ],
    },
  },
}

// --- Join Us ------------------------------------------------------------

export const join = {
  figure: 'FIG. 00 :: CAREERS & TENDERS',
  heading: 'Build Roads That Last, With Us',
  intro:
    'We grow our technical and sales teams as our manufacturing footprint expands. There are no live postings right now — but we always want to hear from strong people in bitumen technology, applications and procurement.',
  sections: [
    {
      code: 'JOB',
      title: 'Current Openings',
      empty: 'No current openings posted.',
      note: 'New roles are listed here as they open. Check back soon.',
    },
    {
      code: 'TND',
      title: 'Tenders',
      empty: 'No open tenders at this time.',
      note: 'Active tender notices and documents will be published here.',
    },
  ],
}
