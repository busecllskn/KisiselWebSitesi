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
      <div className="w-full flex flex-col items-center">
        
        {/* Bölüm Başlığı */}
        <div className="max-w-7xl w-full px-6 sm:px-12 lg:px-20 mb-12 text-center md:text-left">
          <h2 
            className={`text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
            }`}
          >
            {data.projects?.title || "Projects"}
          </h2>
        </div>

        {/* Yatay Kaydırma Alanı */}
        <div className="w-full flex justify-center overflow-x-auto pb-10 scrollbar-none">
          <div className="grid grid-rows-2 grid-flow-col gap-8 px-6 sm:px-12 lg:px-20 snap-x snap-mandatory justify-center justify-items-center">
            {data.projects?.items.map((project) => (
              <div 
                key={project.id}
                className="w-80 sm:w-160 md:w-200 lg:w-225 shrink-0 snap-center bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col sm:flex-row h-auto sm:h-80"
              >
                {/* Proje Görseli */}
                <div className="w-full sm:w-1/2 h-50 sm:h-full bg-gray-100 overflow-hidden shrink-0">
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
                <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-[#4731D3] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed font-normal text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Teknolojiler */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-1 bg-[#4731D3] text-white text-[11px] font-semibold rounded-full tracking-wider"
                        >
                          {tech.toLowerCase()}
                        </span>
                      ))}
                    </div>

                    {/* Sadece Github Linki */}
                    <div className="pt-2 border-t border-gray-100">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-bold text-[#4731D3] hover:text-[#3724a6] underline decoration-2 underline-offset-4 transition-colors"
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
      </div>
    </section>
  );
}

export default Projects;