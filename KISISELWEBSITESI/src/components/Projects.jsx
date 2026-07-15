import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";

function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const data = portfolio[language];

  return (
    <section 
      className={`w-full py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#1a161f]" : "bg-[#CBF281]"
      }`}
    >
      <div className="w-full px-6 sm:px-12 lg:px-20">
      
        <h2 
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-12 transition-colors duration-300 ${
            darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {data.projects?.title || "Projects"}
        </h2>

        {/* Yatayda Kaydırılabilir Alan */}
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {data.projects?.items.map((project) => (
            <div 
              key={project.id}
              className="w-[300px] sm:w-[450px] md:w-[500px] shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              {/* Proje Görseli */}
              <div className="w-full aspect-video bg-gray-100 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>

              {/* Proje Detayları */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-4">
                  {/* Başlık */}
                  <h3 className="text-2xl font-extrabold text-[#4731D3] tracking-tight">
                    {project.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-[#333333] leading-relaxed font-normal text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Teknolojiler */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-[#4731D3] text-white text-[10px] sm:text-xs font-semibold rounded-full tracking-wider"
                      >
                        {tech.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  {/* Bağlantılar */}
                  <div className="flex items-center gap-6 pt-2 border-t border-gray-100">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#4731D3] hover:text-[#3724a6] underline decoration-2 underline-offset-4 transition-colors"
                    >
                      {data.projects?.demoButton || "View Site"}
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#4731D3] hover:text-[#3724a6] underline decoration-2 underline-offset-4 transition-colors"
                    >
                      {data.projects?.githubButton || "Github"}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;