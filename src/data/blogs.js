/**
 * Blog articles. Content blocks: { type: 'p' | 'h2' | 'h3' | 'ul' | 'quote', text | items }.
 * Author / dates are editable.
 */
export const blogCategories = ['All', 'EV Basics', 'Battery Tech', 'Charging', 'Careers', 'Industry']

export const blogs = [
  {
    slug: 'what-is-electric-vehicle-technology',
    title: 'What Is Electric Vehicle Technology?',
    category: 'EV Basics',
    excerpt:
      'A clear, beginner-friendly guide to how electric vehicles work — from the battery and motor to the controller, charger and the software that ties it all together.',
    image: '/images/course-ev-fundamentals.webp',
    imageAlt: 'Electric car on an open road',
    date: '2026-11-02',
    readTime: '6 min read',
    author: 'BCB Editorial Team',
    featured: true,
    content: [
      { type: 'p', text: 'An electric vehicle (EV) uses electrical energy stored in a battery to drive one or more electric motors. Instead of burning fuel in an engine, an EV converts stored electrical energy into motion — quietly, efficiently and with zero tailpipe emissions.' },
      { type: 'h2', text: 'The core building blocks of an EV' },
      { type: 'ul', items: [
        'Battery pack — stores energy, usually in lithium-ion cells.',
        'Battery Management System (BMS) — monitors and protects the battery.',
        'Motor — converts electrical energy into mechanical rotation.',
        'Motor controller / inverter — regulates power flow from battery to motor.',
        'On-board charger and DC-DC converter — manage charging and low-voltage power.',
        'Vehicle Control Unit (VCU) — the “brain” coordinating every subsystem.',
      ] },
      { type: 'h2', text: 'Types of electric vehicles' },
      { type: 'p', text: 'Battery Electric Vehicles (BEVs) run purely on battery power. Hybrid Electric Vehicles (HEVs) combine an engine with a motor, Plug-in Hybrids (PHEVs) add a larger, chargeable battery, and Fuel Cell Electric Vehicles (FCEVs) generate electricity on board from hydrogen.' },
      { type: 'quote', text: 'An EV is not just a car with a battery — it is a tightly integrated system of power electronics, software and energy storage.' },
      { type: 'h2', text: 'Why EV technology matters' },
      { type: 'p', text: 'Electric motors are far more efficient at converting energy into motion than combustion engines. Fewer moving parts generally mean simpler maintenance, and regenerative braking recovers energy that would otherwise be lost as heat.' },
      { type: 'p', text: 'For learners, EV technology brings together electrical engineering, electronics, mechanical design and software — making it one of the most exciting multidisciplinary fields to build a career in.' },
    ],
  },
  {
    slug: 'how-ev-batteries-work',
    title: 'How EV Batteries Work',
    category: 'Battery Tech',
    excerpt:
      'Cells, modules and packs explained — plus the difference between LFP and NMC chemistries, and why thermal management matters so much.',
    image: '/images/course-battery.webp',
    imageAlt: 'Close-up of battery cells',
    date: '2026-10-24',
    readTime: '7 min read',
    author: 'BCB Editorial Team',
    content: [
      { type: 'p', text: 'Most modern EVs use lithium-ion batteries. During discharge, lithium ions travel from the anode to the cathode through an electrolyte while electrons flow through the external circuit — powering the motor. Charging reverses this process.' },
      { type: 'h2', text: 'From cells to packs' },
      { type: 'p', text: 'A single cell has a nominal voltage of only a few volts. To reach the voltage and energy an EV needs, cells are connected in series (to raise voltage) and in parallel (to raise capacity). Groups of cells form modules, and modules form the complete battery pack.' },
      { type: 'h2', text: 'Common chemistries' },
      { type: 'ul', items: [
        'LFP (Lithium Iron Phosphate) — excellent safety and cycle life, popular in two- and three-wheelers and buses.',
        'NMC (Nickel Manganese Cobalt) — higher energy density, widely used in passenger cars.',
        'LTO (Lithium Titanate) — very fast charging and long life, but lower energy density.',
      ] },
      { type: 'h2', text: 'Cell formats' },
      { type: 'p', text: 'Cells come in cylindrical, prismatic and pouch formats. Each affects how a pack is designed, cooled and assembled.' },
      { type: 'quote', text: 'Temperature is the battery’s biggest enemy — and its best-kept secret to a long life.' },
      { type: 'h2', text: 'Thermal management' },
      { type: 'p', text: 'Batteries perform best within a moderate temperature range. Air or liquid cooling systems keep cells within that range, protecting performance, extending life and preventing dangerous conditions such as thermal runaway.' },
    ],
  },
  {
    slug: 'introduction-to-battery-management-systems',
    title: 'Introduction to Battery Management Systems',
    category: 'Battery Tech',
    excerpt:
      'What a BMS does, why every EV battery pack needs one, and how cell balancing and State of Charge estimation keep batteries safe and efficient.',
    image: '/images/course-bms.webp',
    imageAlt: 'Electronic circuit board',
    date: '2026-10-15',
    readTime: '6 min read',
    author: 'BCB Editorial Team',
    content: [
      { type: 'p', text: 'A Battery Management System (BMS) is the electronic guardian of a battery pack. It continuously measures cell voltages, current and temperatures, and acts to keep the pack within safe operating limits.' },
      { type: 'h2', text: 'Key functions of a BMS' },
      { type: 'ul', items: [
        'Monitoring — voltage of every cell group, pack current and temperatures.',
        'Protection — against over-charge, over-discharge, over-current and over-temperature.',
        'Cell balancing — keeping all cells at a similar state of charge.',
        'State estimation — calculating State of Charge (SoC) and State of Health (SoH).',
        'Communication — sharing data with the vehicle and charger, often over CAN.',
      ] },
      { type: 'h2', text: 'Passive vs active balancing' },
      { type: 'p', text: 'Passive balancing bleeds excess energy from higher-charged cells as heat through resistors. Active balancing transfers energy between cells, which is more efficient but more complex and costly.' },
      { type: 'quote', text: 'A battery pack is only as strong as its weakest cell — the BMS makes sure that cell is never pushed too far.' },
      { type: 'h2', text: 'Estimating State of Charge' },
      { type: 'p', text: 'Common methods include coulomb counting (integrating current over time), open-circuit-voltage lookup, and model-based techniques such as Kalman filtering that combine both for higher accuracy.' },
      { type: 'p', text: 'BMS engineering combines analog electronics, embedded firmware and battery science — a high-demand skill set in the EV industry.' },
    ],
  },
  {
    slug: 'ev-charging-infrastructure-explained',
    title: 'EV Charging Infrastructure Explained',
    category: 'Charging',
    excerpt:
      'AC vs DC charging, the connector standards used in India, and what it takes to install and operate a reliable charging station.',
    image: '/images/course-charging.webp',
    imageAlt: 'Electric vehicles at a charging station',
    date: '2026-10-06',
    readTime: '6 min read',
    author: 'BCB Editorial Team',
    content: [
      { type: 'p', text: 'Charging infrastructure is what makes electric mobility practical. It ranges from a simple socket at home to high-power DC fast chargers on highways.' },
      { type: 'h2', text: 'AC vs DC charging' },
      { type: 'p', text: 'With AC charging, the vehicle’s on-board charger converts AC from the grid into DC for the battery — convenient for homes and workplaces. DC fast chargers perform that conversion inside the charging station itself and can deliver much higher power directly to the battery.' },
      { type: 'h2', text: 'Connector standards you will see in India' },
      { type: 'ul', items: [
        'Type 2 — common AC connector for cars.',
        'CCS2 — combined AC/DC connector used for DC fast charging in many cars.',
        'Bharat AC-001 / DC-001 — early Indian standards for low-power public charging.',
        'LEV connectors and battery swapping — widely used for two- and three-wheelers.',
      ] },
      { type: 'h2', text: 'Setting up a charging station' },
      { type: 'p', text: 'A professional installation involves site survey, load assessment, correct cable sizing, earthing, residual-current protection, commissioning tests and ongoing maintenance. Networked chargers typically communicate with back-end software using protocols such as OCPP.' },
      { type: 'quote', text: 'Every new charger needs skilled people to plan, install, commission and maintain it.' },
      { type: 'p', text: 'As charging networks expand, installation technicians, field service engineers and network operators are becoming essential roles.' },
    ],
  },
  {
    slug: 'career-opportunities-in-the-ev-industry',
    title: 'Career Opportunities in the EV Industry',
    category: 'Careers',
    excerpt:
      'From battery technicians to BMS engineers and charging specialists — explore the roles electric mobility is creating and the skills you need.',
    image: '/images/ev-lab-training.webp',
    imageAlt: 'Engineer working in an EV laboratory',
    date: '2026-09-28',
    readTime: '5 min read',
    author: 'BCB Editorial Team',
    content: [
      { type: 'p', text: 'The shift to electric mobility is creating new roles across manufacturing, service, infrastructure and research. Many of these roles value practical, hands-on skills as much as academic qualifications.' },
      { type: 'h2', text: 'Popular EV career paths' },
      { type: 'ul', items: [
        'EV Service Technician — maintenance and diagnostics of electric vehicles.',
        'Battery Pack Technician / Engineer — assembly, testing and quality.',
        'BMS / Embedded Engineer — monitoring, protection and firmware.',
        'Motor & Power Electronics Technician — drives, controllers and testing.',
        'Charging Installation Technician — installation and commissioning of chargers.',
        'EV Sales & Product Specialist — explaining EV technology to customers.',
      ] },
      { type: 'h2', text: 'Skills employers look for' },
      { type: 'p', text: 'High-voltage safety awareness, confident use of measuring instruments, the ability to read wiring diagrams, structured troubleshooting and clear communication are valued across nearly every EV role.' },
      { type: 'quote', text: 'Practical skills, a strong project and the right preparation make all the difference.' },
      { type: 'h2', text: 'How to get started' },
      { type: 'p', text: 'Begin with EV fundamentals, choose a specialisation aligned with your background, build hands-on experience in a lab, and prepare a portfolio of the projects you have completed.' },
    ],
  },
  {
    slug: 'future-of-electric-mobility-in-india',
    title: 'Future of Electric Mobility in India',
    category: 'Industry',
    excerpt:
      'Two- and three-wheelers, public transport, charging networks and renewable energy — the forces shaping India’s electric mobility journey.',
    image: '/images/wind-sunset.webp',
    imageAlt: 'Wind turbines at sunset representing clean energy',
    date: '2026-09-18',
    readTime: '6 min read',
    author: 'BCB Editorial Team',
    content: [
      { type: 'p', text: 'India’s electric mobility story is unique. Rather than being led only by private cars, it is being driven strongly by electric two-wheelers, three-wheelers and public buses — the vehicles that move most people every day.' },
      { type: 'h2', text: 'Key drivers of growth' },
      { type: 'ul', items: [
        'Government support through national and state EV policies and incentive schemes.',
        'Lower running costs compared with petrol and diesel vehicles.',
        'Growing domestic manufacturing of vehicles, batteries and components.',
        'Expansion of public charging and battery-swapping networks.',
        'Integration with renewable energy such as solar and wind.',
      ] },
      { type: 'h2', text: 'The skills challenge' },
      { type: 'p', text: 'Rapid growth needs a skilled workforce — technicians who can service EVs, engineers who understand batteries and power electronics, and specialists who can build and maintain charging networks.' },
      { type: 'quote', text: 'The vehicles are changing. So are the careers built around them.' },
      { type: 'h2', text: 'What this means for learners' },
      { type: 'p', text: 'For students and professionals in West Bengal and across India, electric mobility offers a chance to build future-ready careers. Industry-focused, practical training is the bridge between learning and opportunity.' },
    ],
  },
]

export const getBlog = (slug) => blogs.find((b) => b.slug === slug)

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
