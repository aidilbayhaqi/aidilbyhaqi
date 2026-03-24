import React, { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import { X } from "lucide-react";

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [preview, setPreview] = useState(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

 
  const projects = [
    {
      title: "Computech | Tech Ecommerce",
      category: "Website Development",
      image: "/ecommerce.jpg",
      stack: [
        "Next JS",
        "Express JS",
        "Node JS",
        "Mysql",
        "Figma",
        "midtrans",
        "tailwind",
      ],
    },
    {
      title: "Computech | Dashboard Ecommerce",
      category: "Website Development",
      image: "/dashboard.png",
      stack: [
        "Next JS",
        "Express JS",
        "Node JS",
        "Mysql",
        "Figma",
        "midtrans",
        "tailwind",
      ],
    },
    {
      title: "Webverse | AI Agency",
      category: "Website Development",
      image: "/webverse.png",
      stack: ["React", "TailwindCSS"],
    },
    {
      title: "Groo Website | Barbershop Online",
      category: "Website Development",
      image: "/groo1.png",
      stack: ["Figma", "TailwindCSS", "React"],
    },
    {
      title: "Groo Admin | Barbershop Controller",
      category: "Website Development",
      image: "/groo.png",
      stack: ["Laravel", "TailwindCSS", "MySql", " React"],
    },
    {
      title: "Manside | Home service Styling",
      category: "App Development",
      image: "/manside.png",
      stack: ["Flutter","MySql","Firebase","Laravel","Figma"],
    },
    {
      title: "StyleCommmerce | Ecommerce Style",
      category: "Website Development",
      image: "/ecommerce-shoes.png",
      stack: ["React", "TailwindCSS", "Laravel"],
    },
    {
      title: "ByCommerce | Electronics Ecommerce",
      category: "Design",
      image: "/bycommerce.png",
      stack: ["figma", "UI UX"],
    },
    {
      title: "ShoeCommerce | Shoes Ecommerce",
      category: "Website Development",
      image: "/shoe-commerce.jpg",
      stack: ["React", "TailwindCSS", "FastAPI", "Typescript"],
    },
    {
      title: "One Health | Hospital Website",
      category: "Website Development",
      image: "/hospital-laravel.jpg",
      stack: ["Laravel", "Filament", "PHP"],
    },
    {
      title: "Universitas Mitra Bangsa | Employee Absense Website",
      category: "Website Development",
      image: "/absensi-karyawan.jpg",
      stack: ["React", "Next JS", "Javacript", "Mysql", "Node JS"],
    },
    {
      title: "Citra Negara Theater | Organization Profile",
      category: "Website Development",
      image: "/landing-page.jpg",
      stack: ["React", "Javacript", "Figma"],
    },
    {
      title: "NewsBlog | Filament Blog Website",
      category: "Website Development",
      image: "/filament-blog.jpg",
      stack: ["Laravel", "Filament", "PHP"],
    },
    {
      title: "ByCoffe | Coffeshop Website",
      category: "Design",
      image: "/bycoffe.png",
      stack: ["HTML","CSS", "Javacript", "Figma", "UI UX"],
    },
    {
      title: "Aidil Bayhaqi | Portofolio Profile",
      category: "Design",
      image: "/web-porto-1.jpg",
      stack: ["HTML","CSS", "Javacript", "Figma", "UI UX"],
    },
    {
      title: "Prophy | Company Profile",
      category: "Design",
      image: "/company-profile.jpg",
      stack: ["HTML","CSS", "Javacript", "Figma", "UI UX"],
    },
    {
      title: "ByAnimeList | Anime Website",
      category: "Website Development",
      image: "/anime-search.jpg",
      stack: ["NextJS","prisma", "Javacript", "Mysql"],
    },
    {
      title: "ByPorto | Portfolio Website",
      category: "Website Development",
      image: "/portofolio-4.png",
      stack: ["NextJS","prisma", "Javacript", "Mysql"],
    },
    {
      title: "Eid Mubarak Card",
      category: "Design",
      image: "/design1.png",
      stack: ["Canva"],
    },
    {
      title: "Eid Mubarak Card",
      category: "Design",
      image: "/design2.png",
      stack: ["Canva"],
    },
    {
      title: "Eid Mubarak Card",
      category: "Design",
      image: "/design3.png",
      stack: ["Canva"],
    },
    {
      title: "Promotion Poster ",
      category: "Design",
      image: "/design4.jpg",
      stack: ["Canva"],
    },
    {
      title: "Event Poster",
      category: "Design",
      image: "/design5.png",
      stack: ["Canva"],
    },
  ];

  const categories = ["All", "Website Development", "App Development", "Design"];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

       const totalPages = Math.ceil(filtered.length / itemsPerPage);

const paginatedProjects = filtered.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

useEffect(() => {
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }
}, [totalPages]);

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-purple-500 text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold mt-3">
            My Selected Works
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Showcasing projects across web, mobile applications, and design.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition cursor-pointer ${
                activeCategory === cat
                  ? "bg-purple-500 text-white border-purple-500"
                  : "border-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div
                onClick={() => {
                setPreview(project);

                const img = new Image();
                img.src = project.image;
                img.onload = () => {
                  setIsPortrait(img.height > img.width);
                };
              }}
                className="group cursor-pointer"
              >
                <div className=" relative overflow-hidden rounded-2xl 
                border border-white/10 bg-white/5 backdrop-blur-md 
                transition-all duration-500 ease-out
                group
                hover:-translate-y-3 hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

                  <div
              className="
                absolute inset-0 
                bg-gradient-to-br from-purple-500/10 via-transparent to-transparent
                opacity-0 group-hover:opacity-100
                transition duration-500
              "
            />
                  
                  {/* IMAGE (SEMUA LANDSCAPE) */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* CONTENT */}
               <div className="absolute bottom-0 w-full p-6 z-10">
              <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-6">
                
                {/* CATEGORY */}
                <span className="text-xs text-purple-400">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mt-1 leading-snug">
                  {project.title}
                </h3>

                {/* STACK (MUNCUL SAAT HOVER) */}
                <div
                  className="
                    mt-4 flex flex-wrap gap-2
                    opacity-0 max-h-0 overflow-hidden
                    transition-all duration-500 ease-out
                    group-hover:opacity-100 group-hover:max-h-40
                  "
                >
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs bg-white/10 px-3 py-1 rounded-full
                        backdrop-blur-md border border-white/10
                        hover:bg-purple-500 hover:text-white
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
  
        {/* PREV */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 
          disabled:opacity-30 hover:bg-purple-500 hover:text-white transition cursor-pointer"
        >
          Prev
        </button>

        {/* NUMBER */}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={i}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full transition cursor-pointer ${
                currentPage === page
                  ? "bg-purple-500 text-white"
                  : "border border-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 
          disabled:opacity-30 hover:bg-purple-500 hover:text-white transition cursor-pointer"
        >
          Next
        </button>

      </div>
      </div>

      {/* MODAL PREVIEW */}
      {preview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="relative w-full max-w-5xl flex justify-center">
            
            {/* CLOSE */}
            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 text-white z-10"
            >
              <X size={28} />
            </button>

            {/* CONDITIONAL IMAGE */}
           <img
  src={preview.image}
  className={`rounded-xl shadow-2xl transition-all duration-500 ${
    preview.category === "App Development" || isPortrait
      ? "h-[80vh] object-contain"
      : "w-full max-h-[80vh] object-contain"
  }`}
/>

          </div>
        </div>
      )}
    </section>
  );
};

export default Project;