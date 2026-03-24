import React from "react";
import FadeIn from "../components/FadeIn";
import { ArrowRight } from "lucide-react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaLightbulb,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Fullstack Web Development",
      description:
        "Building high-performance web applications from frontend to backend using modern technologies, clean architecture, and scalable solutions.",
      icon: <FaCode />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually engaging user experiences that not only look great but also convert and retain users effectively.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Mobile App Development",
      description:
        "Crafting responsive and smooth mobile applications for Android & iOS with a focus on performance and user experience.",
      icon: <FaMobileAlt />,
    },
    {
      title: "System & IT Consulting",
      description:
        "Helping businesses design efficient systems, choose the right technologies, and scale their digital products with confidence.",
      icon: <FaLightbulb />,
    },
    {
      title: "Database Design",
      description:
        "Designing optimized, secure, and scalable database structures to ensure performance, reliability, and data integrity.",
      icon: <FaDatabase />,
    },
    {
      title: "Backend & API Development",
      description:
        "Developing robust APIs and backend systems to power modern applications with speed, security, and scalability.",
      icon: <FaServer />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-purple-500 text-sm uppercase tracking-widest">
              Services
            </span>

            <h2 className="text-4xl font-bold mt-3 mb-6 leading-snug">
              Transforming Ideas Into{" "}
              <span className="text-purple-500">Scalable Digital Solutions</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I'm a multidisciplinary developer and designer specializing in building modern web & mobile applications, crafting seamless user experiences, and delivering scalable systems that drive real business impact.
            </p>
          </FadeIn>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl text-purple-400 mb-6 group-hover:scale-110 transition">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <button className="flex items-center text-purple-400 mt-6 group-hover:text-white transition">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;