import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Certificates = () => {
  const certificates = [
    {
      title: "Certificate Developer by Alibaba Cloud",
      issuer: "Alibaba Cloud",
      date: "2024",
      image: "/SERTIFIKAT-ALIBABA-CLOUD.png", // taruh di public/certificates/
    },
    {
      title: "JavaScript by Dicoding",
      issuer: "Dicoding",
      date: "2023",
      image: "/js.jpg",
    },
    {
      title: "React by Skillvul",
      issuer: "Skillvul",
      date: "2023",
      image: "SKILVUL-REACT.jpg",
    },
    {
      title: "Backend Developer",
      issuer: "Dicoding",
      date: "2024",
      image: "/backend-js.jpg",
    },
    {
      title: "Frontend Developer",
      issuer: "Dicoding",
      date: "2024",
      image: "/frontend.jpg",
    },
    {
      title: "GIT",
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
      title: "Flutter Developer",
      issuer: "Dicoding",
      date: "2024",
      image: "/flutter-dev.jpg",
    },
  ];

  return (
    <section id="certificate" className="py-24 bg-[#121212]">

        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-gray-400">
              A collection of certifications that validate my skills and
              continuous learning journey.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-purple-500/50 transition-all">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
};

export default Certificates;
