import React from "react";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const socials = [
    {
      name: "WhatsApp",
      link: "https://wa.me/6289504322572",
      icon: <FaWhatsapp />,
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/aidilbyhaqi._",
      icon: <FaInstagram />,
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@ellmauturu",
      icon: <FaTiktok />,
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/aidil-bayhaqi",
      icon: <FaLinkedin />,
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}
          <span className="text-purple-500 text-sm uppercase tracking-wider">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Let’s Build Something Great Together 🚀
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to connect?  
            Feel free to reach out through any platform below — I’m always open
            to discussing new ideas, collaborations, or opportunities.
          </p>

        {/* SOCIAL BUTTONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {socials.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center justify-center p-8 rounded-2xl 
                bg-black/40 border border-white/10 backdrop-blur-md
                hover:-translate-y-3 hover:border-purple-500/40
                hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition-all duration-300`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* Icon */}
                <div
                  className={`text-4xl text-gray-300 mb-3 transition-all duration-300 group-hover:scale-125 ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  {item.name}
                </span>
              </a>
          ))}
        </div>

        {/* EXTRA INFO */}
       
          <div className="mt-16 flex flex-col items-center gap-3 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-500" />
              <span>m.aidilbayhaqi@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>


      </div>
    </section>
  );
};

export default Contact;