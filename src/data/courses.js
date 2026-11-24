/**
 * EV course catalogue. Every course is rendered by the dynamic template at /courses/:slug.
 * Durations / fees / batch details are editable — confirm them before launch.
 */
export const courseCategories = [
  'All',
  'Fundamentals',
  'Battery Technology',
  'Power Electronics & Drives',
  'Charging Infrastructure',
  'Service & Diagnostics',
]

export const courseLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']

export const courses = [
  {
    slug: 'electric-vehicle-fundamentals',
    title: 'Electric Vehicle Fundamentals',
    shortTitle: 'EV Fundamentals',
    category: 'Fundamentals',
    level: 'Beginner',
    duration: '8 Weeks',
    mode: 'Classroom + Lab',
    icon: 'Car',
    image: '/images/course-ev-fundamentals.webp',
    imageAlt: 'Electric car parked on a scenic mountain road',
    short:
      'Understand how electric vehicles work — architecture, powertrain, batteries, charging and safety — from first principles.',
    overview:
      'This foundation programme introduces the complete electric vehicle ecosystem. You will learn how an EV is built and how energy flows from the charger to the wheels, compare EV and ICE architectures, and develop the safety habits needed to work around high-voltage systems. It is the ideal starting point for students, fresh graduates and automotive professionals moving into electric mobility.',
    learn: [
      'EV, HEV, PHEV and FCEV architectures and how they differ',
      'Core EV subsystems: battery, motor, controller, charger, VCU',
      'Energy flow, regenerative braking and vehicle efficiency',
      'High-voltage safety practices and PPE',
      'Indian EV ecosystem, policies and market segments',
      'Reading EV specifications and datasheets',
    ],
    modules: [
      { title: 'Introduction to Electric Mobility', topics: ['History and evolution of EVs', 'Two-, three- and four-wheeler EV segments', 'EV vs ICE: efficiency and lifecycle'] },
      { title: 'EV Architecture & Powertrain', topics: ['BEV, HEV, PHEV layouts', 'Drivetrain and transmission basics', 'Vehicle Control Unit (VCU) role'] },
      { title: 'Batteries & Energy Storage Basics', topics: ['Cells, modules and packs', 'Voltage, capacity and energy', 'Introduction to BMS'] },
      { title: 'Motors & Controllers Basics', topics: ['BLDC, PMSM and induction motors', 'What a motor controller does', 'Regenerative braking'] },
      { title: 'Charging & Safety', topics: ['AC vs DC charging', 'Connector standards used in India', 'High-voltage safety and lockout/tagout'] },
    ],
    labs: [
      'Identifying EV subsystems on a training vehicle / rig',
      'Measuring voltage and current safely with a multimeter',
      'Tracing energy flow on a two-wheeler EV demo kit',
      'Hands-on safety drill with PPE and insulated tools',
    ],
    skills: ['EV system literacy', 'HV safety awareness', 'Electrical measurement', 'Technical documentation'],
    eligibility: ['10+2 / ITI / Diploma / Graduate (any engineering stream)', 'Automotive or electrical professionals upskilling to EV', 'Basic understanding of electricity preferred'],
    certification:
      'Learners who complete the assessments and lab work receive a Bengal Career Bridge course completion certificate.',
    careers: ['EV Technician (Trainee)', 'EV Sales & Service Advisor', 'Junior EV Assembly Technician', 'EV Showroom Product Specialist'],
    faqs: [
      { q: 'Do I need prior EV knowledge?', a: 'No. This course starts from the basics and is designed for beginners.' },
      { q: 'Is there practical training?', a: 'Yes. A significant part of the course is spent on supervised lab activities using training kits and instruments.' },
      { q: 'What comes after this course?', a: 'Most learners continue to a specialisation such as Battery Technology, BMS or Charging Infrastructure.' },
    ],
  },
  {
    slug: 'ev-battery-technology',
    title: 'EV Battery Technology',
    shortTitle: 'Battery Technology',
    category: 'Battery Technology',
    level: 'Intermediate',
    duration: '10 Weeks',
    mode: 'Classroom + Lab',
    icon: 'BatteryCharging',
    image: '/images/course-battery.webp',
    imageAlt: 'Rows of cylindrical battery cells',
    short:
      'Master lithium-ion cell chemistry, pack design, assembly, testing and thermal management for electric vehicles.',
    overview:
      'The battery is the heart of every EV. This programme takes you from cell chemistry to complete pack design. You will study Li-ion chemistries such as LFP and NMC, learn how cells are configured into modules and packs, and practise assembly, welding, testing and thermal management techniques used on modern production lines.',
    learn: [
      'Li-ion chemistries (LFP, NMC, LTO) and their trade-offs',
      'Cell formats: cylindrical, prismatic and pouch',
      'Series–parallel configuration and pack sizing',
      'Pack assembly, spot welding and busbar design',
      'Battery testing: capacity, IR and cycle testing',
      'Thermal management and battery safety',
    ],
    modules: [
      { title: 'Electrochemistry Essentials', topics: ['How a Li-ion cell works', 'Anode, cathode, electrolyte and separator', 'Comparing LFP, NMC and LTO'] },
      { title: 'Cells, Modules & Packs', topics: ['Cell formats and specifications', 'Series/parallel calculations', 'Pack energy and range estimation'] },
      { title: 'Pack Design & Assembly', topics: ['Mechanical design and enclosures', 'Spot welding and busbars', 'Insulation and IP protection'] },
      { title: 'Testing & Characterisation', topics: ['Capacity and internal resistance tests', 'Charge/discharge cycling', 'Interpreting test data'] },
      { title: 'Thermal Management & Safety', topics: ['Heat generation in cells', 'Air vs liquid cooling', 'Thermal runaway and prevention'] },
    ],
    labs: [
      'Cell grading and internal resistance measurement',
      'Designing and assembling a small battery module',
      'Spot-welding practice on nickel strips',
      'Capacity testing with a battery analyser',
    ],
    skills: ['Pack configuration', 'Battery assembly', 'Battery testing', 'Thermal design basics', 'Safety compliance'],
    eligibility: ['Diploma / B.Tech / B.Sc in Electrical, Electronics or Mechanical', 'Completion of EV Fundamentals or equivalent knowledge'],
    certification:
      'Course completion certificate from Bengal Career Bridge on successful completion of practical and theory assessments.',
    careers: ['Battery Pack Technician', 'Battery Assembly Engineer', 'Battery Testing Engineer', 'Quality Inspector – Battery'],
    faqs: [
      { q: 'Will I physically assemble a battery pack?', a: 'Yes. You will assemble and test a low-voltage training module under supervision.' },
      { q: 'Is this course safe for beginners?', a: 'All lab work follows strict safety procedures and is performed on training-grade equipment with instructor supervision.' },
      { q: 'Do I need EV Fundamentals first?', a: 'It is recommended but not mandatory if you already have a basic electrical background.' },
    ],
  },
  {
    slug: 'battery-management-systems',
    title: 'Battery Management Systems (BMS)',
    shortTitle: 'BMS',
    category: 'Battery Technology',
    level: 'Advanced',
    duration: '8 Weeks',
    mode: 'Classroom + Lab',
    icon: 'Cpu',
    image: '/images/course-bms.webp',
    imageAlt: 'Close-up of an electronic circuit board used in battery management systems',
    short:
      'Learn how a BMS monitors, protects and balances battery packs — including SoC/SoH estimation and CAN communication.',
    overview:
      'A Battery Management System keeps a battery pack safe, efficient and long-lasting. In this advanced course you will study BMS hardware and firmware architecture, cell monitoring, active and passive balancing, State of Charge and State of Health estimation, protection logic and communication with the vehicle over CAN.',
    learn: [
      'BMS architecture: centralised, modular and distributed',
      'Cell voltage, current and temperature monitoring',
      'Passive vs active cell balancing',
      'SoC and SoH estimation methods',
      'Protection: over-voltage, under-voltage, over-current, thermal',
      'CAN communication and BMS diagnostics',
    ],
    modules: [
      { title: 'BMS Fundamentals', topics: ['Why packs need a BMS', 'Topologies and architecture', 'Key BMS ICs and components'] },
      { title: 'Sensing & Measurement', topics: ['Voltage and current sensing', 'Temperature sensing and NTCs', 'Isolation monitoring'] },
      { title: 'Cell Balancing', topics: ['Passive balancing circuits', 'Active balancing approaches', 'Balancing strategy design'] },
      { title: 'State Estimation', topics: ['Coulomb counting', 'OCV-based methods', 'Introduction to Kalman filtering'] },
      { title: 'Protection & Communication', topics: ['Contactor and fuse control', 'Fault handling', 'CAN bus basics and diagnostics'] },
    ],
    labs: [
      'Configuring a BMS board for a training battery module',
      'Observing passive balancing on a cell simulator',
      'Logging SoC data and comparing estimation methods',
      'Reading BMS CAN messages with an analyser',
    ],
    skills: ['BMS configuration', 'Embedded diagnostics', 'CAN communication', 'Data logging & analysis', 'Fault troubleshooting'],
    eligibility: ['B.Tech / Diploma in Electrical, Electronics, Instrumentation or allied branches', 'Basic electronics knowledge required; EV Battery Technology recommended'],
    certification:
      'Course completion certificate from Bengal Career Bridge after successful project and assessment.',
    careers: ['BMS Test Engineer', 'Battery Systems Engineer (Trainee)', 'Embedded Validation Engineer', 'EV Diagnostics Specialist'],
    faqs: [
      { q: 'Is programming required?', a: 'Basic familiarity helps. Core concepts are taught from scratch, with optional embedded exercises.' },
      { q: 'What tools will I use?', a: 'BMS development boards, cell simulators, multimeters, data loggers and CAN analysers.' },
      { q: 'Is this suitable for mechanical engineers?', a: 'It is best suited to electrical/electronics backgrounds, but motivated learners from other streams can join after EV Battery Technology.' },
    ],
  },
  {
    slug: 'ev-motor-controller-technology',
    title: 'EV Motor & Controller Technology',
    shortTitle: 'Motor & Controller',
    category: 'Power Electronics & Drives',
    level: 'Intermediate',
    duration: '10 Weeks',
    mode: 'Classroom + Lab',
    icon: 'Cog',
    image: '/images/course-motor.webp',
    imageAlt: 'Engineer working on electric drive machinery in a workshop',
    short:
      'Study BLDC, PMSM and induction motors, inverters and motor-control strategies that drive electric vehicles.',
    overview:
      'Learn how electric motors and power electronics turn stored energy into motion. This course covers motor types used in EVs, inverter and controller design, switching devices such as MOSFETs and IGBTs, and control techniques including field-oriented control — with practical testing on motor test benches.',
    learn: [
      'BLDC, PMSM and induction motor principles',
      'Motor characteristics: torque, speed and efficiency',
      'Inverter topology and power semiconductor devices',
      'Six-step and field-oriented control (FOC)',
      'Sensors: Hall, encoder and resolver',
      'Motor and controller fault diagnosis',
    ],
    modules: [
      { title: 'Electric Machines for EVs', topics: ['Magnetic principles', 'BLDC vs PMSM vs induction', 'Motor selection for vehicles'] },
      { title: 'Power Electronics', topics: ['MOSFET, IGBT and SiC devices', 'Three-phase inverters', 'Gate drivers and protection'] },
      { title: 'Motor Control', topics: ['Six-step commutation', 'PWM techniques', 'Field-oriented control basics'] },
      { title: 'Sensing & Feedback', topics: ['Hall sensors and encoders', 'Current sensing', 'Speed and position estimation'] },
      { title: 'Testing & Diagnostics', topics: ['Motor test benches', 'Thermal limits and derating', 'Common faults and fixes'] },
    ],
    labs: [
      'Disassembling and identifying parts of a hub motor',
      'Running a BLDC motor with a programmable controller',
      'Observing PWM waveforms on an oscilloscope',
      'Torque–speed testing on a motor bench',
    ],
    skills: ['Motor testing', 'Controller configuration', 'Oscilloscope usage', 'Power electronics basics', 'Drive diagnostics'],
    eligibility: ['Diploma / B.Tech in Electrical, Electronics or Mechatronics', 'ITI Electrician / Electronics with EV Fundamentals'],
    certification:
      'Course completion certificate from Bengal Career Bridge after lab evaluation and final assessment.',
    careers: ['Motor Test Technician', 'Power Electronics Technician', 'Drive Validation Engineer (Trainee)', 'EV Service Engineer'],
    faqs: [
      { q: 'Will I work with real motors?', a: 'Yes. Lab sessions use low-voltage EV motors and controllers on training benches.' },
      { q: 'Is advanced maths needed?', a: 'Only basic engineering maths. Control theory is explained with practical, visual examples.' },
      { q: 'Does it cover two-wheeler motors?', a: 'Yes — hub motors and mid-drive systems common in Indian two- and three-wheelers are covered.' },
    ],
  },
  {
    slug: 'ev-charging-infrastructure',
    title: 'EV Charging Infrastructure',
    shortTitle: 'Charging Infrastructure',
    category: 'Charging Infrastructure',
    level: 'Intermediate',
    duration: '6 Weeks',
    mode: 'Classroom + Field Visits',
    icon: 'PlugZap',
    image: '/images/course-charging.webp',
    imageAlt: 'Electric cars connected to public charging stations',
    short:
      'Learn AC and DC charging, connector standards, charger installation, commissioning and charging-network operations.',
    overview:
      'Charging infrastructure is the backbone of electric mobility. This course covers AC and DC charging technologies, connector standards used in India, site planning, electrical installation, earthing and protection, charger commissioning and the software side of charging networks such as OCPP.',
    learn: [
      'AC slow charging and DC fast charging',
      'Connector standards: Type 2, CCS2, Bharat AC/DC, LEV',
      'Site survey, load calculation and installation',
      'Earthing, protection devices and electrical safety',
      'Charger commissioning and troubleshooting',
      'Charge-point software, OCPP and network operations',
    ],
    modules: [
      { title: 'Charging Fundamentals', topics: ['Charging levels and modes', 'On-board vs off-board chargers', 'Charging time calculations'] },
      { title: 'Standards & Connectors', topics: ['Type 2 and CCS2', 'Bharat charger standards', 'Light EV charging and battery swapping'] },
      { title: 'Installation & Electrical Design', topics: ['Site survey and load assessment', 'Cabling, earthing and RCDs', 'Safety signage and compliance'] },
      { title: 'Commissioning & Maintenance', topics: ['Commissioning checklists', 'Preventive maintenance', 'Fault diagnosis'] },
      { title: 'Charging Networks', topics: ['OCPP basics', 'Payments and user apps', 'Business models for charge points'] },
    ],
    labs: [
      'Wiring and testing a wall-mounted AC charger setup',
      'Performing earthing and insulation tests',
      'Commissioning walkthrough using a checklist',
      'Exploring charge-point management software',
    ],
    skills: ['Charger installation', 'Electrical testing', 'Commissioning', 'Site assessment', 'Network operations'],
    eligibility: ['ITI Electrician / Diploma / B.Tech Electrical', 'Electrical contractors and technicians upskilling to EV'],
    certification:
      'Course completion certificate from Bengal Career Bridge after practical assessment.',
    careers: ['EV Charger Installation Technician', 'Charging Station Operator', 'Field Service Engineer – Charging', 'Site Survey Executive'],
    faqs: [
      { q: 'Are field visits included?', a: 'Where possible, the course includes supervised visits to charging installations. Schedules depend on availability.' },
      { q: 'Do I need an electrician licence?', a: 'Not to enrol. However, some installation roles may require a valid electrical licence as per local regulations.' },
      { q: 'Is battery swapping covered?', a: 'Yes, as an overview within the standards module.' },
    ],
  },
  {
    slug: 'ev-maintenance-diagnostics',
    title: 'EV Maintenance & Diagnostics',
    shortTitle: 'Maintenance & Diagnostics',
    category: 'Service & Diagnostics',
    level: 'Beginner',
    duration: '8 Weeks',
    mode: 'Workshop-based',
    icon: 'Wrench',
    image: '/images/course-maintenance.webp',
    imageAlt: 'Technician hands diagnosing an electronic module',
    short:
      'Become a job-ready EV service technician — inspection, preventive maintenance, fault finding and diagnostic tools.',
    overview:
      'Designed for aspiring service technicians, this workshop-based course covers periodic maintenance, inspection of high-voltage components, systematic fault-finding, diagnostic scan tools and customer-facing service practices for electric two-, three- and four-wheelers.',
    learn: [
      'Periodic maintenance schedules for EVs',
      'Inspection of battery, motor, wiring and brakes',
      'Systematic fault-finding methodology',
      'Using multimeters, clamp meters and diagnostic scanners',
      'Wiring harness and connector repair',
      'Service documentation and customer communication',
    ],
    modules: [
      { title: 'Workshop Safety', topics: ['HV isolation procedures', 'PPE and insulated tools', 'Workshop layout and safety'] },
      { title: 'Preventive Maintenance', topics: ['Service schedules', 'Brake, tyre and suspension checks', 'Battery health checks'] },
      { title: 'Electrical Diagnostics', topics: ['Reading wiring diagrams', 'Continuity and insulation testing', 'Connector and harness repair'] },
      { title: 'Diagnostic Tools', topics: ['Scan tools and error codes', 'Data interpretation', 'Software updates basics'] },
      { title: 'Service Operations', topics: ['Job cards and documentation', 'Warranty basics', 'Customer handling'] },
    ],
    labs: [
      'Full periodic service on an electric two-wheeler',
      'Diagnosing simulated faults on a training rig',
      'Harness repair and crimping practice',
      'Reading and clearing fault codes with a scanner',
    ],
    skills: ['EV servicing', 'Fault diagnosis', 'Tool handling', 'Harness repair', 'Service documentation'],
    eligibility: ['10th / 12th pass, ITI or Diploma', 'Two-wheeler / automotive mechanics moving to EV'],
    certification:
      'Course completion certificate from Bengal Career Bridge after workshop assessment.',
    careers: ['EV Service Technician', 'Workshop Technician – EV', 'Diagnostic Technician', 'Fleet Maintenance Technician'],
    faqs: [
      { q: 'Is this course suitable for mechanics?', a: 'Absolutely. It is designed to help conventional mechanics transition into EV servicing.' },
      { q: 'Which vehicles are covered?', a: 'Primarily electric two- and three-wheelers, with an overview of four-wheeler systems.' },
      { q: 'Will I get hands-on time?', a: 'Yes. Most sessions are workshop-based with real tools and training vehicles.' },
    ],
  },
]

export const getCourse = (slug) => courses.find((c) => c.slug === slug)
