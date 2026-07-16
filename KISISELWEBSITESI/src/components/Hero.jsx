import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";
import myPicture from "../assets/picturesofme.jpg"; 

function Hero() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const data = portfolio[language];

  return (
    <div className="w-full relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      
      {/* Arka Plandaki İki Renkli Yapı */}
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none">
        {/* Sol büyük alan (%70) */}
        <div 
          className={`w-full md:w-[70%] transition-colors duration-300 ${
            darkMode ? "bg-[#252128]" : "bg-[#4731D3]"
          }`}
        ></div>
        {/* Sağ dar alan*/}
        <div 
          className={`w-full md:w-[30%] transition-colors duration-300 ${
            darkMode ? "bg-[#1a2e05] md:bg-[#1e3506]" : "bg-[#CBF281]"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Sol Taraf */}
        <div className="md:col-span-7 space-y-6">
          <h2 
            className="text-3xl font-bold transition-colors duration-300 text-[#CBF281] uppercase tracking-wide"
          >
            {data.hero.name || "buse"}
          </h2>
          
          <h1 
            className="text-5xl md:text-6xl font-bold leading-tight transition-colors duration-300 text-[#CBF281]"
          >
            {data.hero.title}
          </h1>
          
          <p className="text-lg text-white opacity-95 max-w-lg font-light leading-relaxed">
            {data.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Github*/}
            <a 
              href="https://github.com/busecllskn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4731D3] font-bold rounded-md shadow-md hover:bg-[#CBF281] hover:text-[#4731D3] transition-all transform hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-github text-xl"></i>
              Github
            </a>

            {/* Linkedin*/}
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4731D3] font-bold rounded-md shadow-md hover:bg-[#CBF281] hover:text-[#4731D3] transition-all transform hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
              Linkedin
            </a>
          </div>
        </div>

        {/* Sağ Taraf*/}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          {/* Büyük Profil Fotoğrafı Kartı*/}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20">
            <img 
              src={myPicture} 
              alt="Frontend Developer" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;