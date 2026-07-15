import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";

function Skills() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const data = portfolio[language];

  const skillsList = [
    { name: "JAVASCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "NODE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "VS CODE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "REDUX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  return (
    <section 
      className={`w-full py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#252128]" : "bg-white"
      }`}
    >
      {/* Sayfa genel hizasına ortalandı */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
        
        {/* Sol Taraf */}
        <div className="md:w-1/3">
          <h2 
            className={`text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
            }`}
          >
            {data.skills?.title || "Skills"}
          </h2>
        </div>

        {/* Sağ Taraf */}
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-x-12 gap-y-8">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 group"
            >
              <div className="w-20 h-20 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 shrink-0 transform group-hover:-translate-y-1">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Yazı Alanı */}
              <span 
                className={`text-lg font-bold tracking-wider transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-[#777777]"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Skills;