import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";

function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const data = portfolio[language];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({ 
        left: direction === "left" ? -400 : 400, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <section className={`w-full py-20 transition-colors duration-300 ${darkMode ? "bg-[#1a161f]" : "bg-[#CBF281]"}`}>
      <div className="w-full max-w-7xl mx-auto px-6 relative">
        
        {/* Başlık ve Oklar */}
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}`}>
            {data.projects?.title || "Projects"}
          </h2>
          <div className="flex gap-4">
            <button onClick={() => scroll("left")} className="p-3 bg-[#4731D3] text-white rounded-full hover:bg-opacity-80 transition shadow-lg">←</button>
            <button onClick={() => scroll("right")} className="p-3 bg-[#4731D3] text-white rounded-full hover:bg-opacity-80 transition shadow-lg">→</button>
          </div>
        </div>

        {/* Kaydırma Alanı */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.projects?.items.map((project) => (
            <div 
              key={project.id}
              className="w-80 md:w-96 shrink-0 snap-start bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col h-auto"
            >
              {/* Resim Alanı */}
              <div className="w-full h-60 bg-gray-200 overflow-hidden">
                <img 
                  // Resim yolu public klasöründen başlar
                  src={project.image.startsWith('/') ? project.image : `/${project.image}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Resim bulunamazsa yedek görsel
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>

              {/* İçerik Alanı */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-[#4731D3] mb-3">{project.title}</h3>
                <p className="text-[#333333] text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#4731D3] text-white text-[10px] font-bold rounded-full">
                      {tech.toUpperCase()}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-[#4731D3] underline mt-auto"
                >
                  {data.projects?.githubButton || "Github"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;