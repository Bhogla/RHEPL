export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  chip: string;
  image: string;
  description: string;
  longDescription: string;
  benefits: string[];
  applicationAreas: string[];
  approach: string[];
}

export const services: Service[] = [
  {
    id: 'S-01',
    slug: 'microsurfacing',
    name: 'Microsurfacing',
    tagline: 'Cold-mix slurry technology for durable, skid-resistant road surfaces',
    chip: 'Preventive Treatment',
    image: '/images/svc-microsurfacing-site.jpg',
    description: 'Microsurfacing is a cold-mix paving system using polymer-modified bitumen emulsion, crushed aggregate, mineral filler, water and additives. It restores pavement surface while improving skid resistance and waterproofing the road structure.',
    longDescription: 'RHEPL deploys microsurfacing as a cost-effective preventive maintenance treatment for pavements showing early signs of oxidation, ravelling and minor cracking. Unlike conventional hot-mix overlays, microsurfacing uses no heat—making it safer, faster and environmentally friendlier. A specialized self-propelled machine precisely meters and mixes all components in a continuous process, placing a uniform thin layer (6–13 mm) that opens to traffic within 1–2 hours. RHEPL uses only polymer-modified bitumen emulsions to ensure superior adhesion, rutting resistance and extended service life.',
    benefits: [
      'Extends pavement life by 5–7 years',
      'Opens to traffic within 1–2 hours of application',
      'No heating required — lower carbon footprint',
      'Superior skid resistance improves road safety',
      'Cost-effective vs. full reconstruction',
      'Can be applied in multiple lifts to fill ruts',
    ],
    applicationAreas: [
      'National and State Highways',
      'Urban arterials and collectors',
      'Airport taxiways and runways',
      'Parking areas and toll plazas',
      'Industrial roads and port roads',
    ],
    approach: [
      'Pavement condition survey and design mix formulation',
      'Surface preparation — crack sealing, pothole patching',
      'Trial section to confirm mix performance',
      'Continuous machine application at design spread rate',
      'Quality checks: spread rate, consistency, texture depth',
      'Broom and sweep after curing — road reopened',
    ],
  },
  {
    id: 'S-02',
    slug: 'rut-filling',
    name: 'Rut Filling & Profile Correction',
    tagline: 'Precision cold-mix treatment to eliminate rutting and restore road profile',
    chip: 'Corrective Treatment',
    image: '/images/svc-rut-filling.png',
    description: 'RHEPL uses specially designed rut-filling microsurfacing equipment to fill longitudinal ruts and correct cross-sectional profiles on distressed pavements, restoring ride quality and eliminating hydroplaning risks.',
    longDescription: 'Rutting — permanent deformation of the pavement surface — is one of the most common and dangerous defects on high-traffic roads. Water ponds in ruts, causing hydroplaning and aquaplaning at highway speeds. RHEPL\'s rut-filling operation uses a specialised box screed attached to the microsurfacing machine to precisely fill ruts up to 40 mm deep in a single pass. The polymer-modified slurry is levelled flush with the adjacent pavement, then a conventional microsurfacing blanket coat is applied over the entire lane to provide a uniform, skid-resistant final surface.',
    benefits: [
      'Eliminates hydroplaning hazard from rutted roads',
      'Restores original cross-fall and drainage',
      'Rut depths up to 40 mm corrected in one pass',
      'Combined with blanket coat for seamless finish',
      'Significant cost saving vs. milling and overlaying',
      'Minimal traffic disruption',
    ],
    applicationAreas: [
      'High-traffic national and state highways',
      'Bus corridors with channelised wheel loads',
      'Intersections and bus stops',
      'Truck routes and industrial corridors',
    ],
    approach: [
      'Rut depth profiling across the carriageway',
      'Mix design for rut-fill slurry (higher aggregate content)',
      'Box screed rut filling — single or multiple passes',
      'Curing and inspection of filled ruts',
      'Blanket microsurfacing coat over entire lane',
      'Final texture depth and skid resistance testing',
    ],
  },
  {
    id: 'S-03',
    slug: 'road-marking',
    name: 'Road Marking',
    tagline: 'High-visibility thermoplastic and paint markings for safe road geometry',
    chip: 'Safety Marking',
    image: '/images/svc-road-marking.png',
    description: 'RHEPL provides comprehensive road marking services using thermoplastic paint, cold-plastic and conventional road marking paint, with glass bead application for retroreflectivity and night-time visibility.',
    longDescription: 'Clear, durable road markings are a critical component of road safety. RHEPL\'s road marking division is equipped with truck-mounted airless spray machines, thermoplastic screed applicators and hand-operated machines for all types of markings. We work to IRC:35 standards and can deliver lane lines, edge lines, centre lines, arrows, legends, zebra crossings, stop lines, chevrons and rumble strips. All thermoplastic markings receive a double application of glass beads — pre-mixed into the compound and drop-on after application — ensuring strong initial and retained retroreflectivity for safe night driving.',
    benefits: [
      'Improves night-time visibility with glass bead retroreflectivity',
      'Thermoplastic markings last 3–5 years on high-traffic roads',
      'IRC:35 compliant geometry and dimensions',
      'Fast application — minimal lane closures',
      'Wide range: lines, legends, symbols, raised markers',
      'Available in white, yellow and other standard colours',
    ],
    applicationAreas: [
      'National and State Highways',
      'Urban roads and intersections',
      'School and hospital zones',
      'Pedestrian crossings',
      'Parking areas and toll plazas',
      'Airport runways and aprons',
    ],
    approach: [
      'Road geometry and marking scheme design per IRC:35',
      'Surface cleaning and pre-marking layout',
      'Primer application on bituminous surfaces',
      'Thermoplastic or paint application at specified thickness',
      'Glass bead drop-on application for retroreflectivity',
      'Retroreflectivity and thickness QC testing',
    ],
  },
  {
    id: 'S-04',
    slug: 'pavement-preservation',
    name: 'Pavement Preservation',
    tagline: 'Integrated preventive and corrective treatments to maximise pavement life',
    chip: 'Life Extension',
    image: '/images/svc-bitumen-design.jpg',
    description: 'RHEPL\'s pavement preservation programmes combine condition assessment, preventive sealing and corrective treatments into a planned maintenance strategy that maximises the service life of road assets.',
    longDescription: 'Pavement preservation is a proactive asset management philosophy: applying the right treatment at the right time to keep good roads in good condition, rather than waiting for expensive reconstruction. RHEPL partners with road agencies and project developers to design multi-year preservation programmes that analyse pavement condition index (PCI) data, prioritise network sections, select appropriate treatments (fog seals, crack seals, slurry seals, microsurfacing, cape seals) and schedule interventions to achieve the lowest life-cycle cost. Our in-house pavement engineers use IITPAVE and other tools for structural analysis and treatment design.',
    benefits: [
      'Lowest life-cycle cost — preserving good pavements is far cheaper than rehabilitating failed ones',
      'Extends network service life by 10–15 years with planned interventions',
      'Data-driven treatment selection based on PCI surveys',
      'Reduces user costs — smooth roads save fuel and vehicle wear',
      'Supports green infrastructure goals — less reconstruction means less material and emissions',
      'Single-source responsibility for survey, design and execution',
    ],
    applicationAreas: [
      'National Highway concessions (NHAI, BOT, HAM)',
      'State PWD and road development corporation networks',
      'Smart City urban road networks',
      'Industrial park and SEZ internal roads',
      'Mining and port logistics roads',
    ],
    approach: [
      'Network-level pavement condition survey (visual + FWD)',
      'Pavement Condition Index (PCI) computation and mapping',
      'Treatment selection matrix and prioritisation',
      'Detailed design and mix design for each treatment',
      'Execution with RHEPL\'s mechanised equipment fleet',
      'Post-treatment monitoring and reporting',
    ],
  },
];
