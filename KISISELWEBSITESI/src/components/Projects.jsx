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
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-12 transition-colors duration-300 ${
            darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {data.projects?.title || "Projects"}
        </h2>

        {/* Proje Kartları Listesi */}
        <div className="space-y-12">
          {data.projects?.items.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id}
                className={`flex flex-col lg:flex-row ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl`}
              >
                {/*Proje Görseli */}
                <div className="lg:w-1/2 w-full aspect-4/3 bg-gray-100 flex items-center justify-center overflow-hidden">
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
                <div className="lg:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center space-y-6">
                  {/* Başlık */}
                  <h3 className="text-3xl font-extrabold text-[#4731D3] tracking-tight">
                    {project.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-[#333333] leading-relaxed font-normal text-base">
                    {project.description}
                  </p>

                  {/* Teknolojiler*/}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-1.5 bg-[#4731D3] text-white text-xs font-semibold rounded-full tracking-wider"
                      >
                        {tech.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  {/* Bağlantılar*/}
                  <div className="flex items-center gap-8 pt-2">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#4731D3] hover:text-[#3724a6] underline decoration-2 underline-offset-4 transition-colors"
                    >
                      {data.projects?.demoButton || "View Site"}
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#4731D3] hover:text-[#3724a6] underline decoration-2 underline-offset-4 transition-colors"
                    >
                      {data.projects?.githubButton || "Github"}
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;