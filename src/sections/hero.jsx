import React, { useEffect, useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaDatabase, FaFigma, FaLaravel, FaReact } from "react-icons/fa6";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Hero = () => {
  useScrollReveal()
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logos = [
    { id: 1, icon: <FaReact /> },
    { id: 2, icon: <FaLaravel /> },
    { id: 3, icon: <FaDatabase /> },
    { id: 4, icon: <FaFigma /> },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-10 pt-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/0 z-0"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            className="text-center lg:text-left " 
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 reveal" data-reveal='left'>
              I Build <span className="text-purple-500">Modern</span> &
              <br className="hidden sm:block" />
              High-Performance Web Apps
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 reveal" data-reveal='fade'>
              I'm <span className="text-white font-semibold">Aidil Bayhaqi</span>, 
              a Fullstack Developer focused on crafting fast, scalable, 
              and user-friendly digital products using modern technologies.
            </p>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 reveal" data-reveal='up'>
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition flex items-center justify-center hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} className="ml-2" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="border border-gray-700 hover:border-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition flex items-center justify-center hover:scale-105"
              >
                About Me
                <ArrowUpRight size={18} className="ml-2" />
              </button>
            </div>

            {/* TECH STACK */}
            <div className="mt-12 flex justify-center lg:justify-start reveal" data-reveal='fade'>
              <div className="flex gap-5 sm:gap-6 text-2xl sm:text-3xl md:text-4xl text-gray-400">
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="hover:text-purple-500 transition duration-300 hover:scale-125"
                  >
                    {logo.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="relative flex justify-center"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
          >
            <div className="relative w-[280px] sm:w-[350px] md:w-[420px] lg:w-full max-w-md rounded-2xl overflow-hidden reveal" data-reveal='right'>
              
              <img
                src="/profile-removebg-preview.png"
                alt="Aidil"
                className="w-full h-full object-cover"
              />

              {/* STATUS CARD */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/80 backdrop-blur-md p-4 rounded-xl">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-xs text-green-500">
                    Available for projects
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold mt-2">
                  Aidil Bayhaqi
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Fullstack Developer & Designer
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-gray-500 rounded-full flex justify-center py-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
          Scroll Down
        </p>
      </div>
    </section>
  );
};

export default Hero;