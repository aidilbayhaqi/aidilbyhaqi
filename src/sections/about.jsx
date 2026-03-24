import React, { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// ================= COUNTER =================
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useScrollReveal()

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-purple-500">{count}+</h3>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
};

// ================= MAIN COMPONENT =================
const About = () => {
  const stacks = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
  ];

  const highlights = [
    { title: "Problem Solver", desc: "Solve real-world problems efficiently." },
    { title: "Fullstack Developer", desc: "Build frontend & backend systems." },
    { title: "System Thinker", desc: "Design scalable architecture." },
    { title: "Fast Learner", desc: "Adapt quickly to new tech." }
  ];

  const experiences = [
    {
      period: "Setember 2025 - Mrach 2026",
      title: "Fullstack Web App Developer",
      company: "PT GROO Soluva Indonesia",
      points: [
        "Designing, building, and maintaining a home service barbershop application",
        "Designing the application architecture, starting with database design using the ERD to LRS method, and UI/UX design for the web app",
        "Building a full-stack application using Laravel for the full-stack web and database, Flutter for the mobile side, and MySQL for the database",
        "Developing the application using the MVC method, caching, indexing, and authentication for security and application optimization",
        "Maintaining the application system"
      ]
    },
    {
      period: "September 2024 - Sepetmber 2025",
      title: "IT Support Technician",
      company: "PT Leader IT Service Solution subcont PT PAMA PERSADA NUSANTARA",
      points: [
        "Target-oriented in troubleshooting and installing UMPC ewacspro device",
        "Installing UMPC ewacspro devices on mining vehicles such as dump trucks, excavators, dozers, and others.",
        "Analyzing damage or problems with devices such as VHMS, PLM, GPS, and various other device failures.",
        "Assisting with network configuration on robust systems in mining units.",
        "Monitoring device performance and production using remote ewacspro methods."
      ]
    },
    {
      period: "Desember 2022 - Mei 2023",
      title: "IT Support Technician",
      company: "STIMA IMMI",
      points: [
        "Installation device computer for employee member on campus, starting from hardware installation to software such as oprating system windows 10, microsoft office, etc.",
        "Provide best service to employee in use IT device such as computer, networking, printers, projector, etc. by communicating with employees regarding problems that occur with the devices.",
        "Troubleshooting when have a problems occur with each device and doing a daily maintenance so that performance remains stable",
        "Carry out inventory records on IT devices and collect data on each use of devices that will be used and those that will be returned and carry out budget details for each device purchase requirement",
        "Become an operator at events such as seminars, campus events, and others whose job is to install devices and carry out monitoring"
      ]
    },
  ];

 

  return (
    <section id="about" className="py-24 bg-[#121212] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-7xl mx-auto reveal" data-reveal='up'>
          <span className="text-purple-500 text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Crafting Clean & Scalable Digital Products</h2>
         <p className="text-gray-400 leading-relaxed">
          I'm <span className="text-white font-semibold">Aidil Bayhaqi</span>, a passionate Fullstack Developer who focuses on building modern, scalable, and user-friendly digital products. I have experience developing end-to-end web applications, from crafting intuitive user interfaces on the frontend to designing efficient and reliable backend systems.
          <br /><br />
          My approach is not only about writing code, but also understanding real business needs and turning them into impactful solutions. I enjoy working with technologies like React, Node.js, and modern frameworks to create high-performance applications that deliver real value.
          <br /><br />
          I am continuously learning and improving my skills, exploring new technologies, and striving to build products that are not only functional but also clean, maintainable, and scalable in the long term.
        </p>
        </div>

        {/* COUNTER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 reveal" data-reveal='down'>
        {[
          { value: 10, label: "Projects" },
          { value: 5, label: "Clients" },
          { value: 3, label: "Years" },
          { value: stacks.length, label: "Stacks" },
        ].map((item, i) => (
    <div
      key={i}
      className="relative p-6 rounded-2xl bg-black/40 border border-white/10 
      backdrop-blur-md text-center transition-all duration-300
      hover:-translate-y-2 hover:border-purple-500/40 
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition"></div>

      <div className="relative z-10">
        <Counter target={item.value} label={item.label} />
      </div>
    </div>
  ))}
</div>
      </div>

      {/* TECH STACK CAROUSEL */}
      <div className="relative w-full overflow-hidden mb-24 reveal" data-reveal='left'>
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-purple-900/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-purple-900/20 to-transparent z-10" />

        <div className="flex gap-8 animate-scroll px-6 py-4">
          {[...stacks, ...stacks].map((stack, i) => (
            <div key={i} className="flex flex-col items-center px-6 py-5 bg-black/40 border border-white/10 rounded-2xl hover:scale-110 hover:border-purple-500  transition">
              <img src={stack.img} alt={stack.name} className="w-12 h-12 mb-2" />
              <span className="text-xs text-gray-300">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal" data-reveal='right'>
        {highlights.map((h, i) => (
          <div key={i} className="relative p-6 rounded-2xl bg-black/40 border border-white/10 
      backdrop-blur-md text-center transition-all duration-300
      hover:-translate-y-2 hover:border-purple-500/40 
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <h3 className="font-semibold mb-2">{h.title}</h3>
            <p className="text-gray-400 text-sm">{h.desc}</p>
          </div>
        ))}
      </div>

     {/* EXPERIENCE ONLY */}
<div className="reveal" data-reveal="fade">
  {/* EXPERIENCE TIMELINE */}
  <div className="max-w-6xl mx-auto px-6 mb-24">
    <h3 className="text-2xl font-bold mb-12 text-center">
      Work Experience
    </h3>

    <div className="relative">
      {/* LINE */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-700 md:-translate-x-1/2"></div>

      <div className="space-y-16">
        {experiences.map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-start md:items-center ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* DOT */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full md:-translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>

            {/* CARD */}
            <div className="ml-12 md:ml-0 md:w-[45%] bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl
              hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-2"
            >
              <span className="text-sm text-purple-400">
                {item.period}
              </span>

              <h4 className="text-lg font-semibold mt-1">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm mb-3">
                {item.company}
              </p>

              <ul className="text-gray-500 text-sm list-disc list-inside space-y-1">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default About;