import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Lightbulb, TriangleAlert } from "lucide-react";
import FadeIn from "../components/fadeIn";
import DevicePreview from "../components/DevicePreview";
import { useLanguage } from "../i18n/LanguageContext";

const stageMeta = [
  { key: "problem", icon: TriangleAlert },
  { key: "approach", icon: Lightbulb },
  { key: "result", icon: CheckCircle2 },
];

const caseStudies = [
  {
    id: "dashai",
    name: "DashAI",
    descriptor: { en: "ERP & AI Agent", id: "ERP & AI Agent" },
    role: { en: "Product Engineer & Fullstack Developer", id: "Product Engineer & Fullstack Developer" },
    image: "/dashai-preview.svg",
    previewDevice: "desktop",
    previewAlt: { en: "DashAI ERP dashboard and AI reporting interface", id: "Dashboard ERP dan interface AI reporting DashAI" },
    previewLabel: { en: "Integrated ERP result", id: "Hasil ERP terintegrasi" },
    previewText: {
      en: "A unified operational dashboard connecting business modules with automation and AI-assisted reporting.",
      id: "Dashboard operasional terpadu yang menghubungkan modul bisnis, otomasi, dan pelaporan berbantuan AI.",
    },
    stages: [
      {
        title: { en: "Business operations were fragmented across multiple workflows.", id: "Operasional bisnis terpecah ke dalam banyak workflow." },
        description: {
          en: "Product, finance, HR, CRM, sales, and reporting data needed to work as one system. The challenge was not merely building pages, but maintaining permissions, company-scoped data, readable monitoring, and reliable module relationships.",
          id: "Data produk, keuangan, HR, CRM, penjualan, dan reporting harus bekerja sebagai satu sistem. Tantangannya bukan sekadar membuat halaman, tetapi menjaga permission, data yang terisolasi per perusahaan, monitoring yang mudah dibaca, dan hubungan antar modul yang andal.",
        },
        points: {
          en: ["Manual monitoring across separate operational modules", "Owner and company access required strict role boundaries", "Business data needed to remain useful for reporting and AI"],
          id: ["Monitoring manual di berbagai modul operasional", "Akses owner dan perusahaan membutuhkan batas role yang ketat", "Data bisnis harus tetap berguna untuk reporting dan AI"],
        },
      },
      {
        title: { en: "I designed a modular ERP with automation and AI support.", id: "Saya merancang ERP modular dengan dukungan otomasi dan AI." },
        description: {
          en: "I translated the business flow into modules, designed the permission and data boundaries, connected the Next.js frontend with FastAPI services, and added automation plus an AI reporting layer grounded in operational data.",
          id: "Saya menerjemahkan alur bisnis menjadi modul, merancang batas permission dan data, menghubungkan frontend Next.js dengan layanan FastAPI, lalu menambahkan otomasi dan layer AI reporting yang berlandaskan data operasional.",
        },
        points: {
          en: ["Next.js, TypeScript, FastAPI, and PostgreSQL architecture", "Redis and Qdrant for realtime, caching, and AI knowledge workflows", "Dockerized services with Vercel and Railway deployment flow"],
          id: ["Arsitektur Next.js, TypeScript, FastAPI, dan PostgreSQL", "Redis dan Qdrant untuk realtime, caching, dan workflow pengetahuan AI", "Layanan Docker dengan alur deployment Vercel dan Railway"],
        },
      },
      {
        title: { en: "One platform now supports operations, monitoring, and insight.", id: "Satu platform kini mendukung operasional, monitoring, dan insight." },
        description: {
          en: "The result is a working ERP demo that combines core business functions in one experience and demonstrates how AI can assist summaries, recommendations, and document drafts without replacing deterministic business logic.",
          id: "Hasilnya adalah demo ERP yang menggabungkan fungsi bisnis utama dalam satu pengalaman dan menunjukkan bagaimana AI dapat membantu ringkasan, rekomendasi, serta draft dokumen tanpa menggantikan logika bisnis deterministik.",
        },
        points: {
          en: ["Integrated product, finance, HR, CRM, and sales workflows", "Role-aware access with company-scoped operations", "AI summaries, report drafts, and recommendation workflows"],
          id: ["Workflow produk, keuangan, HR, CRM, dan penjualan yang terintegrasi", "Akses berbasis role dengan operasi yang dibatasi per perusahaan", "Ringkasan AI, draft laporan, dan workflow rekomendasi"],
        },
      },
    ],
  },
  {
    id: "yoruservice",
    name: "YoruService",
    descriptor: { en: "Marketplace & AI Advisor", id: "Marketplace & AI Advisor" },
    role: { en: "Product Architect & Fullstack Developer", id: "Product Architect & Fullstack Developer" },
    image: "/yoru-preview.svg",
    previewDevice: "hybrid",
    previewAlt: { en: "YoruService customer application and partner operations dashboard", id: "Aplikasi pelanggan dan dashboard operasional partner YoruService" },
    previewLabel: { en: "Marketplace system result", id: "Hasil sistem marketplace" },
    previewText: {
      en: "A mobile-first product and home-service ecosystem with separate transaction flows, partner operations, and evidence-grounded AI assistance.",
      id: "Ekosistem produk dan home service mobile-first dengan alur transaksi terpisah, operasional partner, dan bantuan AI berbasis bukti.",
    },
    stages: [
      {
        title: { en: "Commerce, home services, finance, privacy, and AI had conflicting risks.", id: "Commerce, home service, keuangan, privasi, dan AI memiliki risiko yang saling bertabrakan." },
        description: {
          en: "The system needed to support product purchases and professional home-service bookings while protecting customer data and preventing AI from inventing prices, stock, availability, credentials, or transactional decisions.",
          id: "Sistem harus mendukung pembelian produk dan booking home service profesional sambil melindungi data pelanggan serta mencegah AI mengarang harga, stok, ketersediaan, kredensial, atau keputusan transaksi.",
        },
        points: {
          en: ["Product checkout and service booking require different state models", "Exact location, credentials, payment, and optional photos are sensitive", "AI recommendations must remain advisory and traceable to real data"],
          id: ["Checkout produk dan booking layanan membutuhkan state model berbeda", "Lokasi presisi, kredensial, pembayaran, dan foto opsional bersifat sensitif", "Rekomendasi AI harus tetap advisory dan dapat ditelusuri ke data nyata"],
        },
      },
      {
        title: { en: "I separated the workflows and designed safety into the architecture.", id: "Saya memisahkan workflow dan memasukkan aspek keamanan ke dalam arsitektur." },
        description: {
          en: "I designed a Flutter customer application, Next.js partner and admin dashboard, and FastAPI backend with tenant isolation, explicit order and booking transitions, deterministic finance, audit trails, and read-only AI tools.",
          id: "Saya merancang aplikasi pelanggan Flutter, dashboard partner dan admin Next.js, serta backend FastAPI dengan isolasi tenant, transisi order dan booking yang eksplisit, keuangan deterministik, audit trail, dan tool AI read-only.",
        },
        points: {
          en: ["Independent product-order and service-booking lifecycles", "FastAPI, SQLAlchemy Async, PostgreSQL, Redis, Flutter, and Next.js", "Privacy consent, idempotency, auditability, and AI policy boundaries"],
          id: ["Lifecycle product order dan service booking yang independen", "FastAPI, SQLAlchemy Async, PostgreSQL, Redis, Flutter, dan Next.js", "Consent privasi, idempotency, auditability, dan batas kebijakan AI"],
        },
      },
      {
        title: { en: "The result is an implementation-ready MVP foundation.", id: "Hasilnya adalah fondasi MVP yang siap diimplementasikan." },
        description: {
          en: "YoruService now has a structured baseline for customer discovery, product commerce, scheduling, professional assignment, finance, analytics, privacy, and AI assistance, allowing development to continue through small tested vertical slices.",
          id: "YoruService kini memiliki baseline terstruktur untuk discovery pelanggan, commerce produk, penjadwalan, penugasan profesional, keuangan, analitik, privasi, dan bantuan AI sehingga pengembangan dapat dilanjutkan melalui vertical slice kecil yang teruji.",
        },
        points: {
          en: ["Customer, partner, professional, finance, and admin roles are mapped", "Order, booking, payment, settlement, and payout rules are traceable", "AI customer advisor and partner copilot have clear safety constraints"],
          id: ["Role customer, partner, profesional, finance, dan admin sudah dipetakan", "Aturan order, booking, payment, settlement, dan payout dapat ditelusuri", "AI customer advisor dan partner copilot memiliki batas keamanan yang jelas"],
        },
      },
    ],
  },
  {
    id: "groo",
    name: "Groo",
    descriptor: { en: "On-Demand Service App", id: "Aplikasi Layanan On-Demand" },
    role: { en: "Programmer & IT Support · Fullstack Mobile Developer", id: "Programmer & IT Support · Fullstack Mobile Developer" },
    image: "/groo-preview.svg",
    previewDevice: "mobile",
    previewAlt: { en: "Groo customer and barber partner mobile application", id: "Aplikasi mobile pelanggan dan partner barber Groo" },
    previewLabel: { en: "End-to-end service result", id: "Hasil layanan end-to-end" },
    previewText: {
      en: "A connected customer, partner, and admin experience for booking, live operations, transactions, and service delivery.",
      id: "Pengalaman pelanggan, partner, dan admin yang terhubung untuk booking, operasional langsung, transaksi, dan delivery layanan.",
    },
    stages: [
      {
        title: { en: "Customers and barber partners needed one connected service flow.", id: "Pelanggan dan partner barber membutuhkan satu alur layanan yang saling terhubung." },
        description: {
          en: "Customers needed simple booking and tracking, while partners needed order updates, service management, earnings, and location workflows. Administrators also needed clear transaction and user monitoring.",
          id: "Pelanggan membutuhkan booking dan tracking yang sederhana, sedangkan partner memerlukan update order, pengelolaan layanan, pendapatan, dan workflow lokasi. Administrator juga membutuhkan monitoring transaksi dan pengguna yang jelas.",
        },
        points: {
          en: ["Different user roles required separate but synchronized experiences", "Booking, assignment, status, maps, and payments had to stay connected", "Operational issues needed fast debugging across mobile and backend layers"],
          id: ["Role pengguna berbeda membutuhkan pengalaman terpisah tetapi tetap sinkron", "Booking, assignment, status, maps, dan pembayaran harus tetap terhubung", "Masalah operasional membutuhkan debugging cepat di layer mobile dan backend"],
        },
      },
      {
        title: { en: "I designed the flow before connecting the mobile and backend systems.", id: "Saya merancang alurnya sebelum menghubungkan sistem mobile dan backend." },
        description: {
          en: "I mapped the architecture using ERD, system flowcharts, and UI/UX designs, then developed Flutter features and Laravel APIs for customers, barber partners, and the admin dashboard with realtime supporting services.",
          id: "Saya memetakan arsitektur menggunakan ERD, system flowchart, dan desain UI/UX, kemudian mengembangkan fitur Flutter serta API Laravel untuk pelanggan, partner barber, dan dashboard admin dengan layanan pendukung realtime.",
        },
        points: {
          en: ["Flutter customer and partner applications with Laravel backend", "REST API, authentication, MySQL, Firebase, maps, and notifications", "Booking, wallet, payment, tracking, and admin monitoring workflows"],
          id: ["Aplikasi Flutter pelanggan dan partner dengan backend Laravel", "REST API, autentikasi, MySQL, Firebase, maps, dan notifikasi", "Workflow booking, wallet, payment, tracking, dan monitoring admin"],
        },
      },
      {
        title: { en: "The application supports the complete home-service journey.", id: "Aplikasi mendukung perjalanan home service secara lengkap." },
        description: {
          en: "The resulting platform connects booking through service completion and gives each role the information required to act, including order status, partner assignment, transaction monitoring, realtime location, payments, wallet, and withdrawal management.",
          id: "Platform yang dihasilkan menghubungkan proses booking sampai penyelesaian layanan dan memberikan informasi yang dibutuhkan setiap role, termasuk status order, penugasan partner, monitoring transaksi, lokasi realtime, pembayaran, wallet, dan pengelolaan withdrawal.",
        },
        points: {
          en: ["Customer booking and partner order handling are connected", "Admin dashboard supports transaction and user monitoring", "Realtime and payment integrations improve operational visibility"],
          id: ["Booking pelanggan dan penanganan order partner saling terhubung", "Dashboard admin mendukung monitoring transaksi dan pengguna", "Integrasi realtime dan pembayaran meningkatkan visibilitas operasional"],
        },
      },
    ],
  },
];

const resolve = (value, language) => {
  if (Array.isArray(value)) return value.map((item) => resolve(item, language));
  if (value && typeof value === "object") {
    if (Object.hasOwn(value, "en") && Object.hasOwn(value, "id")) return value[language];
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolve(item, language)]));
  }
  return value;
};

const CaseStudy = () => {
  const { language, t } = useLanguage();
  const localizedCases = useMemo(() => resolve(caseStudies, language), [language]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const project = localizedCases[activeProjectIndex];
  const stage = project.stages[activeStageIndex];
  const StageIcon = stageMeta[activeStageIndex].icon;

  const selectProject = (index) => {
    setActiveProjectIndex(index);
    setActiveStageIndex(0);
  };

  const goToProject = (index) => {
    const normalizedIndex = (index + localizedCases.length) % localizedCases.length;
    selectProject(normalizedIndex);
  };

  return (
    <section id="case-study" className="section-space case-section">
      <div className="container-shell">
        <FadeIn>
          <div className="case-heading">
            <div>
              <span className="section-index">{t("casesIndex")}</span>
              <h2>{t("casesTitle")}</h2>
            </div>
            <p>{t("casesDescription")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="case-project-switcher" role="tablist" aria-label={t("featuredCases")}>
            {localizedCases.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeProjectIndex === index}
                key={item.id}
                onClick={() => selectProject(index)}
                className={activeProjectIndex === index ? "active" : ""}
              >
                <span>0{index + 1}</span>
                <div><strong>{item.name}</strong><small>{item.descriptor}</small></div>
                {activeProjectIndex === index && <Check size={16} />}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={140}>
          <article className="case-board">
            <div className="case-visual-column">
              <div className="case-window" key={project.id}>
                <DevicePreview image={project.image} alt={project.previewAlt} device={project.previewDevice} projectId={project.id} variant="case" />
              </div>
              <div className="case-preview-caption"><span>{project.previewLabel}</span><p>{project.previewText}</p></div>
              <div className="case-project-nav">
                <button type="button" onClick={() => goToProject(activeProjectIndex - 1)} aria-label={t("previousCase")}>
                  <ArrowLeft size={18} /> {t("previous")}
                </button>
                <span>0{activeProjectIndex + 1} / 0{localizedCases.length}</span>
                <button type="button" onClick={() => goToProject(activeProjectIndex + 1)} aria-label={t("nextCase")}>
                  {t("next")} <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="case-copy-column">
              <div className="case-project-title"><span>{project.descriptor}</span><h3>{project.name}</h3><p>{project.role}</p></div>

              <div className="case-stage-tabs">
                {stageMeta.map((item, index) => (
                  <button type="button" key={item.key} onClick={() => setActiveStageIndex(index)} className={activeStageIndex === index ? "active" : ""}>
                    <span>0{index + 1}</span>{t(item.key)}
                  </button>
                ))}
              </div>

              <div className="case-stage-content">
                <div className="case-stage-icon"><StageIcon size={22} /></div>
                <span>{t(stageMeta[activeStageIndex].key)} / {project.name}</span>
                <h4>{stage.title}</h4>
                <p>{stage.description}</p>
                <ul>{stage.points.map((point) => <li key={point}><CheckCircle2 size={17} /> {point}</li>)}</ul>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
};

export default CaseStudy;
