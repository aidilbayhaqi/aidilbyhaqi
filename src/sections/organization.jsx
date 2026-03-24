import React from "react";
import FadeIn from "../components/FadeIn";
import { Brain, Code, Cpu, Database, Layout, Lightbulb, Palette } from "lucide-react";

const Organization = () => {
  const organizations = [
    {
      period: "September 2024 - Mei 2025",
      role: "Staff Diplomacy Internal",
      organization: "BEM UNIVERSITAS MITRA BANGSA",
      points: [
        "Participating in INSPIRATRIP volunteer activities organized by BEM with the aim of positively impacting the environment in the Muara Gembong area, Bekasi, West Java, such as providing education to elementary school students about character development",
        "Serving as a resource person for INSPIRATRIP volunteer activities",
        "Assisting in planning events to be held on campus",
      ],
    },
    {
      period: "Agustus 2021 - Desember 2023",
      role: "Artistic Leader",
      organization: "Citra Negara Theater",
      points: [
        "Designing the layout and props to be used for the performance according to the script provided.",
        "Coordinating with the director and production leader regarding the planning or concept of the artistic elements to be developed.",
        "Creating concepts and determining the calculations for prop construction to suit the size and layout of the stage.",
      ],
    },
  ];

  const education = [
    {
      period: "2024 - Present",
      school: "Pamulang University",
      major: "Information Systems",
      desc: "Focused on system design, database architecture, and Artificial Intelligence.",
    },
    {
      period: "2021 - 2024",
      school: "Citra Negara Vocational School",
      major: "Computer & Network Engineering",
      desc: "Hands-on experience in networking, hardware, and troubleshooting systems.",
    },
  ];


  const skills = [
  { name: "Fullstack Development", value: 100, icon: <Code size={16} /> },
  { name: "System Design", value: 85, icon: <Layout size={16} /> },
  { name: "System Thinking", value: 95, icon: <Brain size={16} /> },
  { name: "Problem Solving", value: 100, icon: <Lightbulb size={16} /> },
  { name: "Frontend (React)", value: 90, icon: <Layout size={16} /> },
  { name: "Backend (API & DB)", value: 85, icon: <Database size={16} /> },
  { name: "Artificial Intelligence", value: 80, icon: <Cpu size={16} /> },
  { name: "Design", value: 85, icon: <Palette size={16} /> },
  { name: "UI UX Design", value: 90, icon: <Palette size={16} /> },
];


  return (
    <section id="education" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <FadeIn>
            <span className="text-purple-500 text-sm uppercase tracking-widest">
              Journey
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-4">
              Experience & Growth
            </h2>

            <p className="text-gray-400 leading-relaxed">
              My journey is built through real-world experiences in organizations
              and education, shaping not only my technical expertise but also
              leadership, collaboration, and problem-solving skills.
            </p>
          </FadeIn>
        </div>

        {/* ORGANIZATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {organizations.map((item, i) => (
            <FadeIn key={i} delay={0.2 * i}>
              <div
                className="relative p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md 
                hover:-translate-y-3 hover:border-purple-500/40 
                hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] 
                transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <span className="text-xs text-purple-400">
                    {item.period}
                  </span>

                  <h3 className="text-lg font-semibold mt-2">
                    {item.role}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {item.organization}
                  </p>

                  <ul className="text-gray-500 text-sm list-disc list-inside space-y-1">
                    {item.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* EDUCATION & SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* EDUCATION */}
          <FadeIn>
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-black/40 border border-white/10 
                    hover:border-purple-500/40 hover:-translate-y-2 
                    transition-all duration-300"
                  >
                    <span className="text-sm text-purple-400">
                      {edu.period}
                    </span>

                    <h4 className="font-semibold mt-1">
                      {edu.school}
                    </h4>

                    <p className="text-gray-400 text-sm">
                      {edu.major}
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      {edu.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* SKILLS */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-8">
                Skills & Expertise
              </h3>

             <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={i}>
                
                {/* HEADER */}
                <div className="flex justify-between items-center mb-2">
                  
                  {/* ICON + TITLE */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">
                      {s.icon}
                    </span>
                    <span>{s.name}</span>
                  </div>

                  {/* VALUE */}
                  <span className="text-purple-400 text-sm">
                    {s.value}%
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-700"
                    style={{ width: `${s.value}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Organization;