// --- Product info pages -------------------------------------------------
// Copy and specs are taken verbatim from the approved product content sheet
// (RS-1, SS-1, SS-2, CQS Emulsion, Patch Pro, plus the Bitumen grade pages). Do not paraphrase the
// specs. Edit a product here and its /products/[slug] page updates automatically.

// A spec row is either a normal label line (with a plain `value`, and/or a
// `procedure` / `requirement` for a test-report-style table) or a section
// divider (e.g. "Tests on Residue") rendered as a heading row across the table.
export type Spec =
  | { label: string; value: string; procedure?: string; requirement?: string }
  | { heading: string; center?: boolean }

// Declares an extra column beyond the label, in left-to-right table order —
// `key` picks which field of each Spec row that column reads. Products that
// don't set `specColumns` keep the plain legacy label/value table.
export type SpecColumn = { header: string; key: 'procedure' | 'requirement' | 'value' }

// An independent, separately-headed table rendered below the main spec list —
// for content that doesn't fit the single label/value(s) shape (e.g. a
// long-form property/result table, or a differently-columned grading table).
// `layout: 'grid'` right-aligns short values like the main spec table;
// `layout: 'stacked'` (the default) stacks each row's cells as label + full-
// width lines below it, for long free-text results.
export type SpecSection = {
  heading: string
  columns: string[]
  rows: string[][]
  layout?: 'grid' | 'stacked'
}

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
  specColumns?: SpecColumn[]
  specLabelHeader?: string // header label for the leading (parameter/label) column, e.g. "Test Description"
  extraSpecSections?: SpecSection[] // additional independent tables rendered below the main spec list
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
    specColumns: [
      { header: 'Test Value for Sample', key: 'value' },
      { header: 'Requirement as per IS 8887, 2018', key: 'requirement' },
    ],
    specs: [
      {
        label: 'Residue on IS Sieve of 600-micron size',
        value: '0.02 %',
        requirement: 'Less than 0.05 %',
      },
      {
        label: 'Viscosity by Saybolt Furol Viscometer at 50°C (seconds)',
        value: '32',
        requirement: '20 – 100',
      },
      {
        label: 'Storage stability after 24 hours, percent',
        value: '1.5',
        requirement: 'Less than 2',
      },
      {
        label: 'Coagulation of emulsion at low temperature',
        value: 'NIL',
        requirement: 'NIL',
      },
      { label: 'Particle Charge', value: 'Positive', requirement: 'Positive' },
      {
        label: 'Miscibility with water',
        value: 'No Coagulation',
        requirement: 'No Coagulation',
      },
      { heading: 'Tests on Residue' },
      {
        label: 'Residue after evaporation',
        value: '64.45 %',
        requirement: '60 % (minimum)',
      },
      { label: 'Ductility at 27°C, cm', value: '90.5', requirement: '50 cm (Minimum)' },
      { label: 'Penetration at 25°C', value: '87', requirement: '80 – 150' },
      {
        label: 'Solubility in Tri-chloro Ethylene',
        value: '99.2 %',
        requirement: '98 (Minimum)',
      },
    ],
    image: '/product/Bitumen emulsion/rs-1.webp',
    alt: 'Bitumen emulsion sprayer truck applying liquid emulsion to a road surface through multiple spray nozzles.',
  },
  {
    slug: 'css-1',
    code: 'CSS-1',
    name: 'Water-Based Slow Setting Emulsion',
    category: 'Cationic Bitumen Emulsion · Conforms to ASTM D2397',
    tagline: 'Water-based slow-setting emulsion engineered for prime coat and deep base penetration.',
    overview:
      'CSS-1 is a water-based slow-setting emulsion designed for prime coat applications. Unlike rapid-setting emulsions, it is formulated to set more slowly, allowing better penetration into the base material. This slower setting time ensures the emulsion effectively bonds with the underlying surface, providing a strong foundation for subsequent layers of asphalt. The water-based nature offers advantages such as reduced environmental impact and improved handling properties.',
    applications: [
      'Prime coat over granular base courses',
      'Fog seal and rejuvenating seal on aged pavements',
      'Tack coat where a longer working/open time is needed',
    ],
    specRef: 'Technical Specifications (ASTM D2397)',
    specColumns: [
      { header: 'Test Value for Sample', key: 'value' },
      { header: 'Requirement as per ASTM D2397', key: 'requirement' },
    ],
    specLabelHeader: 'Description',
    specs: [
      {
        label: 'Viscosity by Saybolt Furol Viscometer at 25°C (seconds)',
        value: '36',
        requirement: '20–100',
      },
      {
        label: 'Storage stability after 24 hours, percent',
        value: '0.86',
        requirement: '1 (maximum)',
      },
      { label: 'Particle Charge', value: 'Positive', requirement: 'Positive' },
      {
        label: 'Residue on IS Sieve of 600 micron size',
        value: '0.04',
        requirement: '0.1 % (Maximum)',
      },
      { label: 'Cement Mixing Test, %', value: '1.3', requirement: '2.0 (Maximum)' },
      {
        label: 'Oil distillate, by volume of emulsion Residue, %',
        value: '62.9',
        requirement: '57 (Minimum)',
      },
      { heading: 'Tests on Residue from distillation' },
      { label: 'Ductility, cm at 25°C', value: '64 cm', requirement: '40 (Minimum)' },
      { label: 'Penetration at 25°C', value: '119', requirement: '100–250' },
      {
        label: 'Solubility in Tri-chloro Ethylene',
        value: '98.9 %',
        requirement: '97.5 (Minimum)',
      },
    ],
    image: '/product/Bitumen emulsion/css-1.webp',
    alt: 'Bitumen emulsion sprayer truck spraying liquid emulsion on a highway, with fresh aggregate visible alongside.',
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
    image: '/product/Bitumen emulsion/ss-1.webp',
    alt: 'Workers and a tractor-drawn emulsion sprayer applying bitumen emulsion to a rural road.',
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
    specColumns: [
      { header: 'Procedure', key: 'procedure' },
      { header: 'Specification', key: 'requirement' },
      { header: 'Results', key: 'value' },
    ],
    specLabelHeader: 'Test Description',
    specs: [
      {
        label: 'Residue on 600 Micron IS sieve, Percent by mass, Max',
        procedure: 'Annex B - IS 8887-2018',
        requirement: 'Max 0.05 %',
        value: '0.01 %',
      },
      {
        label: 'Viscosity by Sayboltfurol viscometer, seconds, at 25°C',
        procedure: 'IS 3117',
        requirement: '30–150 Sec',
        value: '33 Sec',
      },
      {
        label: 'Coagulation of emulsion at low temperature',
        procedure: 'Annex C - IS 8887-2018',
        requirement: 'NIL',
        value: 'Nil',
      },
      {
        label: 'Storage Stability after 24 h, percent, Max',
        procedure: 'Annex D - IS 8887-2018',
        requirement: '2 %',
        value: '1.24 %',
      },
      {
        label: 'Particle Charge',
        procedure: 'Annex E - IS 8887-2018',
        requirement: 'Positive',
        value: 'Positive',
      },
      {
        label: 'Stability to mixing with cement (% Coagulation), Max',
        procedure: 'Annex G - IS 8887-2018',
        requirement: 'Max 2%',
        value: '0.74 %',
      },
      {
        label: 'Miscibility with water',
        procedure: 'Annex H - IS 8887-2018',
        requirement: 'No Coagulation',
        value: 'No Coagulation',
      },
      {
        label: 'Residue by evaporation, Percent Min',
        procedure: 'Annex J - IS 8887-2018',
        requirement: '> 60 %',
        value: '61.20 %',
      },
      {
        label: 'Penetration at 25°C/100g/5 Sec',
        procedure: 'IS 1203',
        requirement: '60–120 dmm',
        value: '84 dmm',
      },
      {
        label: 'Ductility 27°C C/cm, Min',
        procedure: 'IS 1208',
        requirement: '> 50 cm',
        value: '72 cm',
      },
      {
        label: 'Solubility in Trichloroethylene, percent by mass, Min',
        procedure: 'IS 1216',
        requirement: '> 98 %',
        value: '99.10 %',
      },
    ],
    image: '/images/prod-ss2-site.jpg',
    alt: 'SS-2 slow setting emulsion road construction in progress, Behat, Uttar Pradesh',
  },
  {
    slug: 'cme',
    code: 'CME',
    name: 'Cold Mix Emulsion',
    category: 'Cationic Bitumen Emulsion · Conforms to IRC SP 100',
    tagline: 'Cold-mix emulsion engineered for rural road construction at ambient temperature.',
    overview:
      'Cold Mix Emulsion (CME) is a slow-setting cationic bitumen emulsion formulated for cold-mix applications in rural road construction and maintenance. Conforming to IRC SP 100, it can be mixed with aggregate at ambient temperatures without heating equipment, making it ideal for remote sites with limited infrastructure.',
    applications: [
      'Rural road construction using cold-mix technology',
      'Pothole repair and patch work without hot-mix plant',
      'Surface dressing and fog seal on low-traffic roads',
      'Road maintenance in areas with limited equipment access',
    ],
    specRef: 'Technical Specifications (IRC SP 100, 2014)',
    specColumns: [
      { header: 'Test Value for Sample', key: 'value' },
      { header: 'Requirement as per IRC SP 100, 2014 for SS2', key: 'requirement' },
    ],
    specLabelHeader: 'Description',
    specs: [
      {
        label: 'Residue on IS Sieve of 600 micron size',
        value: '0.015',
        requirement: '0.05 % (Maximum)',
      },
      {
        label: 'Viscosity by Saybolt furol Viscometer at 25°C (seconds)',
        value: '42',
        requirement: '30–150',
      },
      {
        label: 'Coagulation of emulsion at low Temperature',
        value: 'NIL',
        requirement: 'NIL',
      },
      {
        label: 'Storage stability after 24 hours, percent',
        value: '1.05',
        requirement: '2 (maximum)',
      },
      { label: 'Particle Charge', value: 'Positive', requirement: 'Positive' },
      {
        label: 'Miscibility with water (coagulation)',
        value: 'No coagulation',
        requirement: 'No coagulation',
      },
      {
        label: 'Stability to mixing with Cement, % coagulation',
        value: '1.34',
        requirement: '2.0 (Maximum)',
      },
      { heading: 'Tests on Residue from evaporation', center: true },
      {
        label: 'Residue by evaporation, %',
        value: '66.12',
        requirement: '60 (Minimum)',
      },
      { label: 'Penetration at 25°C', value: '77', requirement: '60–120' },
      { label: 'Ductility, cm at 27°C', value: '98', requirement: '50 (Minimum)' },
      {
        label: 'Solubility in Tri-chloro Ethylene, %',
        value: '99.1',
        requirement: '98 (Minimum)',
      },
    ],
    image: '/product/Bitumen emulsion/cme.webp',
    alt: 'Freshly laid black cold-mix asphalt on a mountain road, with hillside and trees in the background.',
  },
  {
    slug: 'cqs-emulsion',
    code: 'CQS Emulsion®',
    name: 'Cationic Quick Set – 1h',
    category:
      'Cationic Bitumen Emulsion · Conforms to ASTM D2397 / AASHTO M208 (ISSA A143)',
    tagline: 'Quick-setting, high-viscosity emulsion built for slurry seals and micro-surfacing.',
    overview:
      'CQS Emulsion® (CQS-1h) is a quick-setting cationic emulsion with a hard residual binder ("h" grade), formulated specifically for slurry seal and micro-surfacing systems. In a purpose-built paver, it is mixed with aggregate, water and additives and laid in a single pass — breaking and curing fast enough that traffic can usually be restored shortly after application. It is a chocolate-brown, free-flowing liquid at ambient temperature with a high residual binder content for durable, hard-wearing surface films. Often supplied polymer- or latex-modified for demanding micro-surfacing work.',
    applications: [
      'Micro-surfacing (pavement preservation)',
      'Slurry seal',
      'Tack coat (as-is or diluted 50% with water)',
      'Fog seal (diluted 50% with water)',
    ],
    specRef: 'Technical Specifications (ASTM D2397 / ISSA A143, CQS-1h)',
    specColumns: [
      { header: 'Test Value for Sample', key: 'value' },
      { header: 'Requirement as per IRC SP 81, 2008', key: 'requirement' },
    ],
    specLabelHeader: 'Description',
    specs: [
      {
        label: 'Residue on IS Sieve of 600 micron size',
        value: '0.023',
        requirement: '0.05 % (Maximum)',
      },
      {
        label: 'Viscosity by Saybolt furol Viscometer at 25°C (seconds)',
        value: '28',
        requirement: '20 – 100',
      },
      {
        label: 'Coagulation of emulsion at low Temperature',
        value: 'NIL',
        requirement: 'NIL',
      },
      {
        label: 'Storage stability after 24 hours, percent',
        value: '0.38',
        requirement: '2 (maximum)',
      },
      { label: 'Particle Charge', value: 'Positive', requirement: 'Positive' },
      { heading: 'Tests on Residue from evaporation', center: true },
      {
        label: 'Residue by evaporation, %',
        value: '65.93',
        requirement: '60 (Minimum)',
      },
      { label: 'Penetration at 25°C', value: '64', requirement: '40 – 100' },
      { label: 'Ductility, cm at 27°C', value: '88', requirement: '50 (Minimum)' },
      { label: 'Softening Point, °C', value: '64.8', requirement: '57 (Minimum)' },
      {
        label: 'Elastic Recovery in Ductilometer, %',
        value: '70',
        requirement: '50 (Minimum)',
      },
      {
        label: 'Solubility in Tri-chloro Ethylene, %',
        value: '98.7',
        requirement: '97 (Minimum)',
      },
    ],
    note: 'Micro-surfacing grades are typically polymer/latex modified per project specification.',
    image: '/product/cqs-emulsion.webp',
    alt: 'Freshly applied microsurfacing emulsion on a highway lane, with a paving machine and road crew at work ahead.',
  },
  {
    slug: 'patch-pro',
    code: 'Roadtech Patch Pro',
    name: 'Roadtech Patch Pro',
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
    extraSpecSections: [
      {
        heading: 'Performance Tests — IRC:116-2014',
        columns: ['Property', 'Test Result'],
        layout: 'stacked',
        rows: [
          ['Residual bitumen content', '4.5 percent by weight of the mix'],
          [
            'Static immersion test, as per Appendix-I Part B of IRC 116, 2014',
            'No stripping of aggregates was observed; coating was almost 100 percent',
          ],
          [
            'Water resistant test, as per Appendix-I Part C of IRC 116, 2014',
            'No stripping of aggregates was observed; coating was almost 100 percent',
          ],
          [
            'Workability test, as per Appendix-I Part D of IRC 116, 2014',
            'No lump formation was observed',
          ],
        ],
      },
      {
        heading: 'Grading of the Mix',
        columns: ['Sieve Size (mm)', 'Percent Passing', 'Recommended Range (IRC 116, 2014)'],
        layout: 'grid',
        rows: [
          ['9.5', '100', '100'],
          ['4.75', '85.93', '40 – 100'],
          ['2.36', '16.94', '10 – 40'],
          ['1.18', '3.11', '0 – 10'],
          ['0.075', '1.35', '0 – 2'],
        ],
      },
    ],
    image: '/images/prod-patch-pro.jpg',
    alt: 'Roadtech Patch Pro 25kg ready-mix pothole repair bag',
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
    image: '/images/prod-modified-bitumen-pour.jpg',
    alt: 'Hot liquid bitumen pouring from a large industrial pipe, with a road roller visible in the blurred background.',
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
    image: '/images/prod-pmb70-drum.png',
    alt: 'Roadtech Asphalt Technologies branded blue drum at the plant yard.',
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
    image: '/product/59A612DB-A677-4813-A089-393FED30EF06.webp',
    alt: 'Crumb rubber modified bitumen being blended in a vessel',
  },
]

export const getProduct = (slug?: string) => products.find((p) => p.slug === slug)
