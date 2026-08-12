// --- Product info pages -------------------------------------------------
// Copy and specs are taken verbatim from the approved product content sheet
// (RS-1, SS-1, SS-2, CQS Emulsion, Patch Pro, plus the Bitumen grade pages). Do not paraphrase the
// specs. Edit a product here and its /products/[slug] page updates automatically.

export type Spec = { label: string; value: string }

export type ProductPage = {
  slug: string
  code: string // short identity shown in breadcrumb / hero (e.g. "RS-1")
  name: string // descriptive name (e.g. "Rapid Setting Emulsion, Grade 1")
  category: string // standards / category line — rendered as the orange eyebrow
  tagline: string
  overview: string
  advantages?: string[] // rendered only when present
  applications: string[]
  specRef: string // exact spec-table heading from the source (e.g. "Technical Specifications (IS 8887)")
  specs: Spec[]
  note?: string // small italic note under the spec table
  image: string // expected image path; file may not exist yet (placeholder renders until it does)
  alt?: string // meaningful alt text for the product image; shared with the matching card
}

export const products: ProductPage[] = [
  {
    slug: 'rs-1',
    code: 'RS-1',
    name: 'Rapid Setting Emulsion, Grade 1',
    category: 'Cationic Bitumen Emulsion · Conforms to IS 8887',
    tagline: 'Fast-breaking emulsion engineered for tack coat applications.',
    overview:
      'RS-1 is a rapid-setting cationic bitumen emulsion designed to break quickly on contact with a road surface, leaving behind a uniform bituminous film. Its lower viscosity range makes it easy to spray and gives excellent coverage — including where application is done manually, as is common on state highways and low-volume rural roads. RS-1 is the workhorse of tack coat applications, the thin bond layer sprayed between an existing surface and a new bituminous layer.',
    applications: [
      'Tack coat between pavement layers',
      'Bonding coat on existing bituminous or concrete surfaces',
      'Highway and rural road maintenance where manual spraying is used',
    ],
    specRef: 'Technical Specifications (IS 8887)',
    specs: [
      { label: 'Residue on 600-micron sieve (% by mass, max)', value: '0.05' },
      { label: 'Viscosity, Saybolt Furol at 50 °C (seconds)', value: '20–100' },
      { label: 'Storage stability after 24 h (%, max)', value: '2' },
      { label: 'Particle charge', value: 'Positive' },
      { label: 'Coagulation at low temperature', value: 'Nil' },
      { label: 'Residue by evaporation (%, min)', value: '60' },
      { label: 'Penetration, 25 °C/100 g/5 s', value: '80–150' },
      { label: 'Ductility, 27 °C (cm, min)', value: '50' },
      { label: 'Solubility in trichloroethylene (%, min)', value: '98' },
    ],
    image: '/product/05522981-41DC-43BB-B510-5594E81FDD2B.jpg',
    alt: 'RS-1 rapid setting cationic bitumen emulsion drum on a road',
  },
  {
    slug: 'ss-1',
    code: 'SS-1',
    name: 'Slow Setting Emulsion, Grade 1',
    category: 'Cationic Bitumen Emulsion · Conforms to IS 8887',
    tagline: 'Slow-breaking emulsion for prime coats, fog seals and crack sealing.',
    overview:
      'SS-1 is a slow-setting cationic emulsion formulated to stay workable longer, allowing it to penetrate and wet surfaces thoroughly before it breaks. This makes it ideal for applications where you need the emulsion to soak in or spread evenly rather than set on contact. It carries a weak-positive particle charge and is widely used for prime coats, fog seals, and crack sealing.',
    applications: [
      'Prime coat over granular bases',
      'Fog seal for surface rejuvenation',
      'Crack sealing and minor surface maintenance',
    ],
    specRef: 'Technical Specifications (IS 8887)',
    specs: [
      { label: 'Residue on 600-micron sieve (% by mass, max)', value: '0.05' },
      { label: 'Viscosity, Saybolt Furol at 25 °C (seconds)', value: '20–100' },
      { label: 'Storage stability after 24 h (%, max)', value: '2' },
      { label: 'Particle charge', value: 'Weak Positive' },
      { label: 'Coagulation at low temperature', value: 'Nil' },
      { label: 'Residue by evaporation (%, min)', value: '50' },
      { label: 'Penetration, 25 °C/100 g/5 s', value: '60–350' },
      { label: 'Ductility, 27 °C (cm, min)', value: '50' },
      { label: 'Solubility in trichloroethylene (%, min)', value: '98' },
    ],
    image: '/product/486D2DA2-BF0A-40B4-90AE-F33D7091D067.jpg',
    alt: 'SS-1 slow setting cationic bitumen emulsion drums on a road',
  },
  {
    slug: 'ss-2',
    code: 'SS-2',
    name: 'Slow Setting Emulsion, Grade 2',
    category: 'Cationic Bitumen Emulsion · Conforms to IS 8887',
    tagline:
      'Higher-viscosity slow-set emulsion for premix and slurry work with fine aggregates.',
    overview:
      'SS-2 is a slow-setting cationic emulsion with a higher viscosity and binder content than SS-1, built for mixing with graded and fine aggregates. Because it breaks slowly, it coats fine material evenly without setting prematurely during mixing — making it the emulsion of choice for plant and road mixes, mixed seal surfacing (MSS), semi-dense bituminous concrete (SDBC), and slurry seals.',
    applications: [
      'Cold premix with graded/fine aggregates',
      'Mixed Seal Surfacing (MSS)',
      'Semi-Dense Bituminous Concrete (SDBC)',
      'Slurry seal',
    ],
    specRef: 'Technical Specifications (IS 8887)',
    specs: [
      { label: 'Residue on 600-micron sieve (% by mass, max)', value: '0.05' },
      { label: 'Viscosity, Saybolt Furol at 25 °C (seconds)', value: '30–150' },
      { label: 'Storage stability after 24 h (%, max)', value: '2' },
      { label: 'Particle charge', value: 'Positive' },
      { label: 'Coagulation at low temperature', value: 'Nil' },
      { label: 'Residue by evaporation (%, min)', value: '60' },
      { label: 'Penetration, 25 °C/100 g/5 s', value: '60–120' },
      { label: 'Ductility, 27 °C (cm, min)', value: '50' },
      { label: 'Solubility in trichloroethylene (%, min)', value: '98' },
    ],
    image: '/product/E0F03CFF-AF0D-441F-B643-2CF85402F510.jpg',
    alt: 'SS-2 slow setting cationic bitumen emulsion drum on a road',
  },
  {
    slug: 'cqs-emulsion',
    code: 'CQS Emulsion',
    name: 'Cationic Quick Set – 1h',
    category:
      'Cationic Bitumen Emulsion · Conforms to ASTM D2397 / AASHTO M208 (ISSA A143)',
    tagline: 'Quick-setting, high-viscosity emulsion built for slurry seals and micro-surfacing.',
    overview:
      'CQS-1h is a quick-setting cationic emulsion with a hard residual binder ("h" grade), formulated specifically for slurry seal and micro-surfacing systems. In a purpose-built paver, it is mixed with aggregate, water and additives and laid in a single pass — breaking and curing fast enough that traffic can usually be restored shortly after application. It is a chocolate-brown, free-flowing liquid at ambient temperature with a high residual binder content for durable, hard-wearing surface films. Often supplied polymer- or latex-modified for demanding micro-surfacing work.',
    applications: [
      'Micro-surfacing (pavement preservation)',
      'Slurry seal',
      'Tack coat (as-is or diluted 50% with water)',
      'Fog seal (diluted 50% with water)',
    ],
    specRef: 'Technical Specifications (ASTM D2397 / ISSA A143, CQS-1h)',
    specs: [
      { label: 'Residual binder / residue by distillation (%, min)', value: '62' },
      { label: 'Settlement & storage stability, 24 h (%, max)', value: '1' },
      { label: 'Particle charge', value: 'Positive' },
      { label: 'Workability / mix time (micro-surfacing)', value: '~180 seconds min' },
      { label: 'Penetration of residue, 25 °C', value: '40–90' },
      { label: 'Softening point of residue (°C, min)', value: '57' },
    ],
    note: 'Micro-surfacing grades are typically polymer/latex modified per project specification.',
    image: '/product/5830D47A-EEF8-43D2-9EE8-37E88C3E2742.jpg',
    alt: 'CQS cationic quick-setting bitumen emulsion drum on a road',
  },
  {
    slug: 'patch-pro',
    code: 'Patch Pro',
    name: 'Ready-Mix Pothole Repair',
    category: 'Cold Mix Pothole Patching Material · As per IRC:116-2014',
    tagline: 'Permanent-feel pothole repair in minutes — pour, tamp, and open to traffic.',
    overview:
      'Patch Pro is a dedicated ready-to-use pothole patching mix made with clean graded aggregate and a specially designed cationic bitumen emulsion, packed in airtight laminated bags. Formulated for excellent adhesion to all aggregate types, it fills potholes of any shape without squaring off the edges and requires minimal compaction. Because it is cold-applied and weather-independent, road crews can repair potholes year-round — including during the rainy season when potholes form fastest and hot mix cannot be used.',
    advantages: [
      'Repair potholes in any weather, all year round',
      'No heating, no tack coat, minimal compaction',
      'Excellent adhesion to any aggregate/pavement type',
      'Airtight packaging for long shelf life',
    ],
    applications: [
      'Pothole repair',
      'Edge deformation and trench reinstatement',
      'Emergency and rapid road maintenance',
    ],
    specRef: 'Technical Characteristics (IRC:116-2014)',
    specs: [
      { label: 'Binder type', value: 'Cationic bitumen emulsion (specially formulated)' },
      { label: 'Application temperature', value: 'Ambient (cold-applied)' },
      { label: 'Aggregate', value: 'Clean graded; low dust content for good bonding' },
      { label: 'Compaction', value: 'Minimal (tamp in place)' },
      { label: 'Storage life', value: 'Minimum ~6 months' },
      { label: 'Packaging', value: 'Airtight double-laminated bags' },
      { label: 'Coverage', value: '~one 50 kg bag per 2/3 cu ft of pothole volume' },
    ],
    image: '/product/515C8431-CDA9-4597-AB05-F2F89734A9A9.jpg',
    alt: 'Patch Pro cold-mix pothole repair being poured into a pothole',
  },
  {
    slug: 'bitumen',
    code: 'Bitumen',
    name: 'Viscosity Grade Bitumen (VG-10 / VG-30 / VG-40)',
    category: 'Viscosity Grade Bitumen · VG-10 / VG-30 / VG-40',
    tagline: 'Different viscosity grades of bitumen to match your terrain, temperature and traffic.',
    overview:
      'Roadtech supplies different viscosity grades of bitumen, selected to suit the terrain, temperature and traffic each road has to carry. We supply imported Bitumen with high quality standards on demand.',
    applications: [
      'Hot-mix asphalt and premix carpet production',
      'Bituminous road surfacing and paving',
      'Grade-specific selection for varying climate conditions',
    ],
    // Grades table (adapted from the lab-spec table used by the emulsion pages).
    specRef: 'Available Grades',
    specs: [
      { label: 'VG-10', value: 'For High Altitude Terrains' },
      { label: 'VG-30', value: 'For Moderate Temperature' },
      { label: 'VG-40', value: 'As per Demand' },
    ],
    image: '/product/CAD7F274-C99D-444D-B351-493C5AD69267.jpg',
    alt: 'Bitumen pouring from a plant spout',
  },
  {
    slug: 'polymer-modified-bitumen',
    code: 'Polymer Modified Bitumen',
    name: 'PMB 64-10 / 70-10 / 76-10 / 82-10 / 76-22',
    category: 'Polymer Modified Bitumen · As per IRC & IS Standards',
    tagline: 'Polymer modified bitumen supplied as per customer needs, matching IRC and IS standards.',
    overview:
      'Roadtech supplies Polymer Modified Bitumen (PMB) as per customer needs, matching IRC and IS standards. PMB improves a binder’s resistance to rutting, fatigue and temperature extremes, making it well suited to heavily trafficked highways, expressways and demanding surface conditions.',
    applications: [
      'High-traffic highways and expressways',
      'Heavy-duty and high-temperature pavements',
      'Rut-resistant and stress-absorbing surface layers',
    ],
    // Grades table (adapted from the lab-spec table used by the emulsion pages).
    specRef: 'Available Grades',
    specs: [
      { label: 'PMB 64-10', value: 'As per customer needs' },
      { label: 'PMB 70-10', value: 'As per customer needs' },
      { label: 'PMB 76-10', value: 'As per customer needs' },
      { label: 'PMB 82-10', value: 'As per customer needs' },
      { label: 'PMB 76-22', value: 'As per customer needs' },
    ],
    note: 'PMB / CRMB in association with DRG Bitumen.',
    image: '/product/EE17E8CD-A7D5-4250-AD96-215CBB923A38.jpg',
    alt: 'Polymer modified bitumen drum on a pallet at a plant',
  },
  {
    slug: 'crumb-rubber-modified-bitumen',
    code: 'Crumb Rubber Modified Bitumen',
    name: 'CRMB 50 / 55 / 60',
    category: 'Crumb Rubber Modified Bitumen · As per IRC & IS Standards',
    tagline: 'Crumb rubber modified bitumen supplied as per customer needs, matching IRC and IS standards.',
    overview:
      'Roadtech supplies Crumb Rubber Modified Bitumen (CRMB) as per customer needs, matching IRC and IS standards. CRMB blends reclaimed rubber crumb into the binder to improve elasticity, durability and resistance to deformation, while putting recycled material to productive use.',
    applications: [
      'Durable, elastic wearing courses',
      'High-stress and heavily loaded pavements',
      'Sustainable surfacing using recycled rubber',
    ],
    // Grades table (adapted from the lab-spec table used by the emulsion pages).
    specRef: 'Available Grades',
    specs: [
      { label: 'CRMB 50', value: 'As per customer needs' },
      { label: 'CRMB 55', value: 'As per customer needs' },
      { label: 'CRMB 60', value: 'As per customer needs' },
    ],
    note: 'PMB / CRMB in association with DRG Bitumen.',
    image: '/product/59A612DB-A677-4813-A089-393FED30EF06.jpg',
    alt: 'Crumb rubber modified bitumen being blended in a vessel',
  },
]

export const getProduct = (slug?: string) => products.find((p) => p.slug === slug)
