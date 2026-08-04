export const projects = [
  {
    id: "dashai",
    title: "DashAI ERP & AI Agent",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/dashai.png",
    previewDevice: "desktop",
    featured: true,
    liveUrl: "https://dash-ai-beta.vercel.app/login",
    sourceUrl: "https://github.com/aidilbayhaqi/dashAI",
    previewSource: "Actual dashboard screenshot from DashAI ERP",
    role: "Product Engineer & Fullstack Developer",
    summary:
      "A multi-tenant ERP platform connecting operational workflows, business dashboards, automation, and an AI reporting assistant in one product system.",
    challenge:
      "Business data was spread across products, finance, HR, CRM, and sales workflows, making monitoring and decision-making slow and fragmented.",
    solution:
      "Designed a modular ERP architecture with role-based access, tenant-aware data, operational automation, analytics, and an AI assistant for summaries and recommendations.",
    result:
      "Delivered an integrated platform covering product, inventory, finance, HR, CRM, sales automation, reporting, deployment, and production-oriented service separation.",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Qdrant", "Docker"],
    softSkills: ["Product thinking", "System analysis", "Problem solving", "Technical ownership"],
  },
  {
    id: "yoruservice",
    title: "YoruService Marketplace & AI Advisor",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev"],
    image: "/yoru-preview.svg",
    previewDevice: "hybrid",
    featured: true,
    sourceUrl: "https://github.com/aidilbayhaqi/yoru",
    previewSource: "Product architecture + repository",
    role: "Product Architect & Fullstack Developer",
    summary:
      "A mobile-first marketplace combining beauty products, at-home service booking, an evidence-grounded AI customer advisor, and partner operations.",
    challenge:
      "Product commerce, professional home-service booking, privacy-sensitive customer data, payments, and AI recommendations needed to work together without mixing transaction rules or allowing AI to become the source of truth.",
    solution:
      "Designed separate product-order and service-booking flows, a Flutter customer application, a Next.js partner dashboard, and a FastAPI backend with tenant isolation, auditability, deterministic finance, and read-only AI assistance.",
    result:
      "Produced an implementation-ready MVP baseline and backend foundation covering catalog, orders, bookings, professional assignment, finance, analytics, privacy controls, and AI advisory workflows.",
    stack: ["Flutter", "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Docker"],
    softSkills: ["Product strategy", "System architecture", "Risk analysis", "Technical documentation"],
  },
  {
    id: "groo",
    title: "Groo On-Demand Service App",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev"],
    image: "/captures/groo-mobile-single.png",
    previewDevice: "mobile",
    featured: true,
    previewSource: "Single mobile preview cropped from the original four-screen Groo customer mockup",
    role: "Programmer & IT Support · Fullstack Mobile Developer",
    summary:
      "A home-service grooming platform with a mobile customer flow for discovering services, choosing a barber, viewing service details, and booking appointments from home.",
    challenge:
      "Customers needed a clear mobile booking flow, while partners and administrators required reliable order updates, location tracking, earnings, and service management.",
    solution:
      "Designed the system using ERD, flowcharts, and UI/UX planning, then developed Flutter customer and partner applications with a Laravel backend, REST APIs, authentication, maps, notifications, payments, and admin workflows.",
    result:
      "Delivered an end-to-end service flow covering mobile booking, partner assignment, transaction monitoring, user management, order status, real-time location, payment options, wallet, and withdrawal management.",
    stack: ["Flutter", "Dart", "Laravel", "MySQL", "Google Maps", "Pusher", "FCM", "Midtrans"],
    softSkills: ["User empathy", "Workflow design", "Debugging", "Cross-platform thinking"],
  },
  {
    id: "qlabs",
    title: "QLabs Smart Lead & Automation Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/qlabs.png",
    previewDevice: "desktop",
    liveUrl: "https://qlabsagency.com/",
    sourceUrl: "https://github.com/aidilbayhaqi/qlabs",
    previewSource: "Actual homepage screenshot from QLabs Agency",
    role: "Frontend Developer & Product Designer",
    summary:
      "A business automation agency website positioning smart lead management, AI-assisted customer service, ERP automation, and custom software through a conversion-focused experience.",
    challenge:
      "The agency needed to explain technical automation services in a way that was credible, easy to scan, and oriented toward consultation instead of feature overload.",
    solution:
      "Built a structured Next.js experience with product sections, market highlights, proof points, featured work, and clear consultation calls to action.",
    result:
      "Created a reusable digital sales surface that connects service positioning, product visuals, and lead-generation journeys across desktop and mobile.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    softSkills: ["Copy hierarchy", "Product positioning", "Visual communication", "Iteration"],
  },
  {
    id: "educonsult",
    title: "EduConsult Professional Consultation Platform",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/consultindo.png",
    previewDevice: "desktop",
    liveUrl: "https://edu-consult-two.vercel.app/",
    sourceUrl: "https://github.com/aidilbayhaqi/educonsult",
    previewSource: "Actual homepage screenshot from the consultation platform",
    role: "Frontend Developer",
    summary:
      "A professional consultation website for education, tax, and business services, designed around a clean landing page, trust signals, and direct conversion.",
    challenge:
      "A broad mix of consulting services needed one coherent information structure without making the homepage feel dense or unclear.",
    solution:
      "Organized the landing page around a focused hero, service groups, trust signals, calls to action, FAQ, and structured SEO data.",
    result:
      "Delivered a responsive consultation experience that turns complex professional services into a clear user journey.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Schema"],
    softSkills: ["Content structure", "Audience awareness", "Information architecture", "Client communication"],
  },
  {
    id: "mohammad-sinal",
    title: "Mohamad Sinal Academic & Legal Portfolio",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/project-previews/mohamad-sinal-current-preview.png",
    previewDevice: "desktop",
    liveUrl: "https://mohammad-sinal.vercel.app/index.html",
    sourceUrl: "https://github.com/aidilbayhaqi/mohammad-sinal",
    previewSource: "Current hero recreated from the live Vercel site and repository assets",
    role: "Web Developer & Information Designer",
    summary:
      "A content-rich personal website for a legal-language academic, author, and public thinker, connecting profile, publications, articles, activities, and contact information.",
    challenge:
      "A long academic record and multiple types of work needed to feel authoritative without becoming a document-heavy website.",
    solution:
      "Created an editorial web system with clear publication categories, profile storytelling, academic proof, image lightboxes, and readable navigation.",
    result:
      "Turned a complex professional biography into a structured personal brand and searchable public archive.",
    stack: ["HTML", "CSS", "JavaScript", "Content Architecture", "Responsive Design"],
    softSkills: ["Research", "Editorial thinking", "Content hierarchy", "Stakeholder alignment"],
  },
  {
    id: "nexus-erp",
    title: "Nexus ERP Command Center",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/nexus-erp-refined.png",
    previewDevice: "desktop",
    liveUrl: "https://nexus-erp-layout.lovable.app/",
    previewSource: "Refined dashboard preview based on the Nexus ERP prototype",
    role: "ERP Product & Interface Designer",
    summary:
      "An enterprise operations dashboard prototype connecting product management, sales orders, finance, CRM, employee KPI, payroll, and AI analysis.",
    challenge:
      "Operational leaders needed a single command center that could summarize multiple departments without losing navigational clarity.",
    solution:
      "Designed a dark enterprise layout with module-based navigation, KPI cards, revenue views, customer segments, department performance, alerts, and AI entry points.",
    result:
      "Produced a coherent ERP concept that communicates both the breadth of the system and the daily information hierarchy required by operations teams.",
    stack: ["React", "TypeScript", "Dashboard UX", "Data Visualization", "Lovable"],
    softSkills: ["Systems thinking", "Visual hierarchy", "Workflow mapping", "Rapid prototyping"],
  },
  {
    id: "cloudtop",
    title: "CloudTop Recharge Platform",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/cloudtop-refined.png",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/pixel-recharge-station",
    previewSource: "Refined recharge storefront preview based on the project source",
    role: "Frontend Developer & Product Designer",
    summary:
      "A cloud-phone top-up storefront for services such as Redfinger, VSPhone, and LDCloud with product selection, checkout guidance, and automated-service positioning.",
    challenge:
      "Digital top-up products needed to feel fast and trustworthy while keeping package selection and purchase steps understandable.",
    solution:
      "Built a motion-led product page with service cards, benefit signals, guided purchase steps, and a component-driven UI system.",
    result:
      "Created a responsive commerce concept that demonstrates TanStack architecture, reusable components, and product-focused interface design.",
    stack: ["TanStack Start", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Framer Motion"],
    softSkills: ["Rapid prototyping", "Commerce UX", "Component thinking", "Visual consistency"],
  },
  {
    id: "propnexus",
    title: "PropNexus AI Property Platform",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/captures/propnexus.png",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/propnex",
    previewSource: "Actual dashboard screenshot from the PropNexus prototype",
    role: "AI Product Prototype Developer",
    summary:
      "An AI-assisted property operations concept for centralizing property data, monitoring activities, surfacing analytics, and supporting operational decisions.",
    challenge:
      "Property teams often work across disconnected listings, operational updates, analytics, and follow-up tasks.",
    solution:
      "Explored an integrated dashboard concept with property summaries, operational signals, analytics, and Gemini-assisted workflows.",
    result:
      "Produced an AI product prototype that demonstrates how operational data and assisted analysis can live in one interface.",
    stack: ["React", "TypeScript", "Gemini", "AI Studio", "Dashboard UX"],
    softSkills: ["AI product thinking", "Experimentation", "Operational analysis", "Prototype storytelling"],
  },
  {
    id: "arunika-property",
    title: "Arunika Property",
    category: "UI/UX Design",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/arunika-property-preview.png",
    previewDevice: "desktop",
    previewSource: "Property website visual created from the Arunika concept developed in CODINGGG",
    role: "Frontend Developer & Real Estate Web Designer",
    summary:
      "A premium property marketing website built to showcase listings, strengthen agent credibility, and convert visitors into qualified buyer leads.",
    challenge:
      "Property buyers need fast access to location, price range, property type, and trust signals without digging through dense marketing copy.",
    solution:
      "Designed a focused hero, property search controls, credibility metrics, listing highlights, and consultation-oriented calls to action.",
    result:
      "Produced a polished real-estate landing experience that balances premium branding with practical lead generation.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "AOS"],
    softSkills: ["Lead-generation thinking", "Visual hierarchy", "Property copywriting", "Client positioning"],
  },
  {
    id: "rumah-impian",
    title: "Rumah Impian Architecture",
    category: "UI/UX Design",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/rumah-impian-preview.png",
    previewDevice: "desktop",
    previewSource: "Architecture company profile visual created in the CODINGGG website series",
    role: "Frontend Developer & Brand Experience Designer",
    summary:
      "An architecture and construction company profile that presents premium residential work, service expertise, and consultation paths through a confident visual system.",
    challenge:
      "The firm needed to communicate design quality and construction credibility while keeping project exploration simple.",
    solution:
      "Built a cinematic project hero, proof metrics, service framing, portfolio highlights, and direct consultation actions.",
    result:
      "Created a strong digital sales surface for architecture leads and project discovery.",
    stack: ["HTML", "CSS", "JavaScript", "AOS", "Responsive Design"],
    softSkills: ["Brand storytelling", "Content hierarchy", "Visual direction", "Conversion design"],
  },
  {
    id: "properti-id",
    title: "Properti ID Lead Platform",
    category: "UI/UX Design",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/properti-id-preview.png",
    previewDevice: "desktop",
    previewSource: "Property listing and lead-generation visual created in the CODINGGG website series",
    role: "Frontend Developer & Product Designer",
    summary:
      "A modern real-estate discovery platform designed around property search, listing presentation, developer credibility, and contact lead generation.",
    challenge:
      "Users needed a clear way to narrow property options while marketers needed stronger conversion points.",
    solution:
      "Combined search filters, featured listings, market proof, developer positioning, and direct inquiry actions in one responsive experience.",
    result:
      "Delivered a scalable property interface concept that supports both discovery and marketing goals.",
    stack: ["HTML", "CSS", "JavaScript", "Swiper.js", "Responsive Design"],
    softSkills: ["Search UX", "Lead funnel design", "Information architecture", "Product communication"],
  },

  {
    id: "dark-cart-hub",
    title: "Dark Cart — Beyond Shopping",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/project-previews/dark-cart-refined.png",
    previewDevice: "desktop",
    liveUrl: "https://dark-cart-hub.lovable.app",
    previewSource: "Refined high-contrast storefront preview based on the live prototype",
    role: "Commerce Experience Designer & Frontend Developer",
    summary:
      "An immersive dark-commerce storefront that turns product discovery into a cinematic shopping journey with sharp merchandising, high-contrast visuals, and conversion-focused interaction.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Commerce UX", "Lovable"],
    softSkills: ["Art direction", "Interface consistency", "Interaction design", "Rapid iteration"],
  },
  {
    id: "business-dashboard",
    title: "Business Analytics Dashboard",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/business-dashboard-home-preview.png",
    previewDevice: "desktop",
    liveUrl: "https://dashboard-preview.lovable.app/",
    previewSource: "Homepage-faithful preview based on the live Lovable prototype",
    role: "Dashboard Designer & Frontend Developer",
    summary:
      "A dashboard prototype that turns operational metrics, charts, activity, and action states into a compact management interface.",
    stack: ["React", "TypeScript", "Dashboard UX", "Data Visualization", "Lovable"],
    softSkills: ["Data storytelling", "Visual prioritization", "Product thinking", "Rapid prototyping"],
  },
  {
    id: "webverse",
    title: "Webverse Smart Lead System",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/webverse.png",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/webverse",
    previewSource: "Actual homepage screenshot from the Webverse project",
    role: "Frontend Developer",
    summary:
      "A smart-lead business website exploring automated lead management, 24/7 customer engagement, animated product storytelling, and consultation journeys.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    softSkills: ["Product messaging", "Motion design", "Frontend iteration", "Conversion thinking"],
  },
  {
    id: "computech",
    title: "Techcommerce Ecommerce Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/ecommerce.jpg",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/computech_ecommerce",
    previewSource: "Actual ecommerce homepage screenshot",
    role: "Fullstack Developer",
    summary:
      "A fullstack ecommerce experience with product browsing, authentication, transaction flow, database integration, checkout, and payment support.",
    stack: ["Next.js", "Express.js", "Node.js", "MySQL", "Figma", "Midtrans", "Tailwind CSS"],
    softSkills: ["Business analysis", "Attention to detail", "End-to-end delivery"],
  },
  {
    id: "finance-dashboard",
    title: "Dashboard Finance Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "UI/UX Design", "Website"],
    image: "/captures/web-dashboard.jpg",
    previewDevice: "desktop",
    role: "Frontend Developer",
    summary:
      "A finance dashboard concept focused on readable business metrics, structured reporting, and responsive data presentation.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    softSkills: ["Data storytelling", "Visual hierarchy", "Analytical thinking"],
  },
  {
    id: "shoe-commerce",
    title: "Shoes Ecommerce Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/ecommerce-shoes.png",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/shoe_commerce_redkendi",
    previewSource: "Actual shoes ecommerce homepage screenshot",
    role: "Fullstack Developer",
    summary:
      "A shoes ecommerce interface focused on featured products, category browsing, and a clean storefront experience.",
    stack: ["React", "Tailwind CSS", "FastAPI", "TypeScript"],
    softSkills: ["Consistency", "Problem solving", "Product thinking"],
  },
  {
    id: "hospital",
    title: "Hospital Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/captures/hospital-laravel.jpg",
    previewDevice: "desktop",
    previewSource: "Actual hospital website screenshot",
    role: "Backend & Admin Developer",
    summary:
      "A Laravel-based hospital web application with healthcare information pages and structured administration through Filament.",
    stack: ["Laravel", "Filament", "PHP"],
    softSkills: ["Process mapping", "Maintainability", "Detail orientation"],
  },
  {
    id: "organization-profile",
    title: "Citra Negara Teater Profile",
    category: "UI/UX Design",
    categories: ["UI/UX Design", "Website"],
    image: "/captures/landing-page.jpg",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/CitraNegaraTeater",
    previewSource: "Actual organization website screenshot",
    role: "UI Designer & Frontend Developer",
    summary:
      "A clean organization website designed to communicate theatre identity, programs, activities, and key information clearly.",
    stack: ["React", "JavaScript", "Figma"],
    softSkills: ["Visual communication", "Content hierarchy", "Collaboration"],
  },
  {
    id: "portfolio-profile",
    title: "Portfolio Profile",
    category: "UI/UX Design",
    categories: ["UI/UX Design", "Website"],
    image: "/captures/portfolio-4.png",
    previewDevice: "desktop",
    previewSource: "Actual portfolio homepage screenshot",
    role: "UI Designer & Frontend Developer",
    summary:
      "A personal portfolio concept focused on clear positioning, project presentation, and a more visual hero-driven layout.",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
    softSkills: ["Personal branding", "Visual hierarchy", "Iteration"],
  },
  {
    id: "company-profile",
    title: "Company Profile",
    category: "UI/UX Design",
    categories: ["UI/UX Design", "Website"],
    image: "/company-profile.jpg",
    previewDevice: "desktop",
    previewSource: "Actual company profile website screenshot",
    role: "UI Designer & Frontend Developer",
    summary:
      "A company profile website that communicates services, credibility, and calls to action through a structured business-focused layout.",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
    softSkills: ["Business communication", "Audience awareness", "Design thinking"],
  },
  {
    id: "anime-information",
    title: "Anime Information Website",
    category: "Fullstack Dev",
    categories: ["Fullstack Dev", "Website"],
    image: "/anime-search.jpg",
    previewDevice: "desktop",
    sourceUrl: "https://github.com/aidilbayhaqi/byAnimeList",
    previewSource: "Existing project screenshot used in the portfolio",
    role: "Fullstack Developer",
    summary:
      "A searchable information website with structured content, database access, and a responsive user interface.",
    stack: ["Next.js", "Prisma", "JavaScript", "MySQL"],
    softSkills: ["Information architecture", "API integration", "Curiosity"],
  },
];

export const githubArchive = [
  { name: "dashAI", group: "Product systems" },
  { name: "yoru", group: "Product systems" },
  { name: "qlabs", group: "Product systems" },
  { name: "educonsult", group: "Product systems" },
  { name: "propnex", group: "Product systems" },
  { name: "pixel-recharge-station", group: "Product systems" },
  { name: "webverse", group: "Product systems" },
  { name: "computech_ecommerce", group: "Commerce & APIs" },
  { name: "backend_ecommerce", group: "Commerce & APIs" },
  { name: "shoe_commerce_redkendi", group: "Commerce & APIs" },
  { name: "ECOMMERCE", group: "Commerce & APIs" },
  { name: "bookshelf-API", group: "Commerce & APIs" },
  { name: "mohammad-sinal", group: "Web & client work" },
  { name: "CitraNegaraTeater", group: "Web & client work" },
  { name: "Laravel-CRUD", group: "Web & client work" },
  { name: "ByCoffe", group: "Web & client work" },
  { name: "byAnimeList", group: "Web & client work" },
  { name: "search-movie-api", group: "Web & client work" },
  { name: "privacy_policy_groo_barbershop", group: "Web & client work" },
  { name: "porto-project", group: "Portfolio evolution" },
  { name: "portofolioAidilByhaqi", group: "Portfolio evolution" },
  { name: "MyPortofolio", group: "Portfolio evolution" },
  { name: "aidilbayhaqi", group: "Portfolio evolution" },
  { name: "aidilbyhaqi", group: "Portfolio evolution" },
  { name: "UTS_MUHAMMAD_AIDIL_BAYHAQI", group: "Learning & experiments" },
  { name: "uas_web1_muhammad_aidil_bayhaqi", group: "Learning & experiments" },
  { name: "daftar_pegawai_muhammad-Aidil_bayhaqi", group: "Learning & experiments" },
  { name: "Dicoding-Flutter", group: "Learning & experiments" },
  { name: "Pokemon", group: "Learning & experiments" },
  { name: "html-css-js-learn", group: "Learning & experiments" },
  { name: "CITTER", group: "Learning & experiments" },
].map((repository) => ({
  ...repository,
  url: `https://github.com/aidilbayhaqi/${repository.name}`,
}));

export const services = [
  {
    title: "Fullstack Product Development",
    description:
      "From interface and API design to database modeling, testing, and deployment for maintainable web products.",
    icon: "Code2",
    skills: ["React / Next.js", "FastAPI / Laravel", "SQL & API"],
  },
  {
    title: "Mobile Service Applications",
    description:
      "Customer and partner applications with booking, maps, notifications, payments, and real-time workflows.",
    icon: "Smartphone",
    skills: ["Flutter", "Maps & realtime", "Payment flow"],
  },
  {
    title: "ERP & Workflow Automation",
    description:
      "Operational systems that connect finance, products, HR, CRM, sales, reporting, and role-based workflows.",
    icon: "Workflow",
    skills: ["Business analysis", "Automation", "Dashboard"],
  },
  {
    title: "AI Agent & Smart Reporting",
    description:
      "AI-assisted summaries, recommendations, document generation, and knowledge retrieval grounded in business data.",
    icon: "Bot",
    skills: ["LLM integration", "RAG", "Vector database"],
  },
  {
    title: "System Architecture",
    description:
      "Clear module boundaries, scalable data models, secure access patterns, and deployment-ready service design.",
    icon: "Blocks",
    skills: ["Architecture", "Docker", "Cloud deployment"],
  },
  {
    title: "UI/UX & Design Systems",
    description:
      "Readable interfaces with consistent components, responsive behavior, and practical user journeys.",
    icon: "PanelsTopLeft",
    skills: ["Figma", "Responsive UI", "Design system"],
  },
];

export const technicalSkills = [
  {
    group: "Product & System Engineering",
    icon: "Boxes",
    description: "Turning business needs into clear modules, workflows, data models, and delivery plans.",
    proof: "DashAI · YoruService · Groo",
    skills: ["System Analysis", "Product Thinking", "ERD", "SDLC", "Workflow Design"],
  },
  {
    group: "Frontend & Mobile",
    icon: "MonitorSmartphone",
    description: "Building responsive interfaces and cross-platform experiences for real operational use.",
    proof: "Web dashboards · Customer & partner apps",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Dart"],
  },
  {
    group: "Backend & Data",
    icon: "DatabaseZap",
    description: "Connecting secure APIs, authentication, business rules, and reliable data storage.",
    proof: "ERP · Marketplace · Commerce",
    skills: ["FastAPI", "Laravel", "Node.js", "REST API", "PostgreSQL", "MySQL"],
  },
  {
    group: "AI, Automation & Delivery",
    icon: "BrainCircuit",
    description: "Adding practical AI assistance, automation, deployment, testing, and production troubleshooting.",
    proof: "AI reporting · RAG · Docker deployment",
    skills: ["LLM Integration", "RAG", "Qdrant", "Redis", "Docker", "Git/GitHub"],
  },
  {
    group: "Infrastructure & Support",
    icon: "Network",
    description: "A hands-on infrastructure background that strengthens debugging and operational reliability.",
    proof: "100+ mining operational vehicles",
    skills: ["MikroTik Winbox", "IP Routing", "Robustel", "Hardware", "Software Troubleshooting"],
  },
  {
    group: "Interface & Visual Design",
    icon: "Palette",
    description: "Creating readable journeys, clear hierarchy, and visual systems that support product goals.",
    proof: "UI concepts · Dashboards · Product flows",
    skills: ["Figma", "UI/UX", "Responsive Design", "Design System", "Visual Hierarchy"],
  },
];

export const softSkills = [
  { name: "Problem Solving", icon: "Lightbulb", note: "Breaks complex issues into testable steps." },
  { name: "Analytical Thinking", icon: "ChartNoAxesCombined", note: "Connects data, workflow, and business context." },
  { name: "Technical Ownership", icon: "ShieldCheck", note: "Carries work from planning to deployment and fixes." },
  { name: "Communication", icon: "MessagesSquare", note: "Explains technical decisions in readable language." },
  { name: "Adaptability", icon: "RefreshCw", note: "Moves across web, mobile, AI, and infrastructure." },
  { name: "Team Collaboration", icon: "UsersRound", note: "Coordinates implementation around shared outcomes." },
];

export const experiences = [
  {
    period: "September 2025 — March 2026",
    title: "Programmer & IT Support",
    company: "PT. GROO Soluva Indonesia · Matraman, East Jakarta",
    summary:
      "Designed the architecture for a home-service barbershop application using ERD, system flowcharts, and UI/UX design, then developed Flutter mobile features and a Laravel backend for customers, barber partners, and administrators.",
    highlights: ["Flutter & Laravel", "REST API integration", "System architecture", "Operational support"],
  },
  {
    period: "September 2024 — September 2025",
    title: "IT Support",
    company:
      "PT. Leader IT Service Solutions · Subcontractor for PT PAMA Persada Nusantara · Sangatta, East Kalimantan",
    summary:
      "Installed and configured networks and computer devices on more than 100 mining operational vehicles, managed IP routing and Robustel devices, and resolved hardware, software, and network incidents according to SLA standards.",
    highlights: ["100+ operational vehicles", "Network routing", "Robustel devices", "SLA troubleshooting"],
  },
  {
    period: "December 2022 — May 2023",
    title: "IT Support",
    company: "STIMMA IMMI · Pasar Minggu, South Jakarta",
    summary:
      "Installed and configured computer equipment and campus laboratory networks, managed Winbox and IP address settings, and supported infrastructure maintenance for stable learning activities.",
    highlights: ["MikroTik Winbox", "Laboratory networks", "Device installation", "Maintenance"],
  },
];

export const education = [
  {
    period: "2025 — Present",
    school: "Pamulang University",
    program: "Information Systems · Employee Class · GPA 3.63",
  },
  {
    period: "2021 — 2024",
    school: "Citra Negara Vocational High School",
    program: "Computer and Network Engineering · Final Score 83.5",
  },
];

export const organizationHighlights = [
  {
    period: "University Organization",
    title: "Internal Diplomacy Staff",
    organization: "BEM Universitas Mitra Bangsa",
    description:
      "Supported internal campus coordination, communication, and collaboration between organizational divisions and student stakeholders.",
    skills: ["Communication", "Coordination", "Team collaboration"],
  },
  {
    period: "Vocational School Organization",
    title: "IT Division",
    organization: "Citra Negara Teater (CITTER)",
    description:
      "Handled digital needs such as website and proposal preparation while collaborating with the publication, documentation, and design team.",
    skills: ["Digital support", "Documentation", "Cross-team work"],
  },
  {
    period: "Vocational School Organization",
    title: "Artistic Division",
    organization: "Citra Negara Teater (CITTER)",
    description:
      "Led the preparation of artistic properties and accessories to support stage concepts and production requirements.",
    skills: ["Creative direction", "Leadership", "Execution"],
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/aidil-bayhaqi/", icon: "Linkedin", available: true },
  { name: "Instagram", url: "https://www.instagram.com/learnwithells/", icon: "Instagram", available: false },
  { name: "TikTok", url: "https://www.tiktok.com/@ellmauturu", icon: "Music2", available: false },
  { name: "GitHub", url: "https://github.com/aidilbayhaqi", icon: "Github", available: true },
];

export const certificates = [
  {
    title: "Developer Certificate",
    issuer: "Alibaba Cloud",
    date: "2024",
    image: "/SERTIFIKAT-ALIBABA-CLOUD.png",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Dicoding",
    date: "2023",
    image: "/js.jpg",
  },
  {
    title: "React Development",
    issuer: "Skilvul",
    date: "2023",
    image: "/SKILVUL-REACT.jpg",
  },
  {
    title: "Backend Development",
    issuer: "Dicoding",
    date: "2024",
    image: "/backend-js.jpg",
  },
  {
    title: "Frontend Development",
    issuer: "Dicoding",
    date: "2024",
    image: "/frontend.jpg",
  },
  {
    title: "Git Fundamentals",
    issuer: "Alibaba Cloud",
    date: "2024",
    image: "/git-alibaba.png",
  },
  {
    title: "Serverless Computing",
    issuer: "Alibaba Cloud",
    date: "2024",
    image: "/serverless-computing.png",
  },
  {
    title: "Flutter Development",
    issuer: "Dicoding",
    date: "2024",
    image: "/flutter-dev.jpg",
  },
];

export const impactStats = [
  {
    value: "100+",
    label: "Mining vehicles supported",
    note: "Network and device installation in live operations",
  },
  {
    value: "30+",
    label: "Public repositories reviewed",
    note: "Curated into product, development, UI/UX, and design work",
  },
  {
    value: "3",
    label: "End-to-end case studies",
    note: "DashAI, YoruService, and Groo",
  },
  {
    value: "8",
    label: "Technical certificates",
    note: "Web, JavaScript, React, Flutter, Git, and cloud",
  },
];

export const journeyHighlights = [
  {
    year: "2022",
    title: "Started from hands-on IT support",
    text: "Installed devices, maintained campus lab networks, and learned to solve problems directly with users.",
  },
  {
    year: "2024",
    title: "Worked inside mining operations",
    text: "Supported more than 100 operational vehicles and handled networking, routing, devices, and SLA-driven troubleshooting.",
  },
  {
    year: "2025",
    title: "Moved deeper into product development",
    text: "Designed and developed Groo's mobile service workflow using Flutter, Laravel, APIs, databases, and real-time features.",
  },
  {
    year: "2026",
    title: "Building systems with AI in the loop",
    text: "Developing DashAI and structuring YoruService while learning practical AI agents, RAG, and business automation.",
  },
];

export const currentFocus = [
  {
    number: "01",
    title: "Business software that stays understandable",
    text: "ERP, marketplace, and service workflows with clear permissions, data boundaries, and monitoring.",
  },
  {
    number: "02",
    title: "AI that supports decisions—not replaces the data",
    text: "Read-only assistants, grounded reporting, recommendations, and retrieval from trusted business sources.",
  },
  {
    number: "03",
    title: "Products that survive outside the demo",
    text: "Responsive interfaces, reliable APIs, deployment, debugging, and operational thinking from day one.",
  },
];
