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
        {/* Sol büyük alan (%70) - Tam olarak #4731D3 */}
        <div 
          className={`w-full md:w-[70%] transition-colors duration-300 ${
            darkMode ? "bg-[#252128]" : "bg-[#4731D3]"
          }`}
        ></div>
        {/* Sağ dar alan (%30) - Tam olarak #CBF281 */}
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
            {data.hero.name || "BUSE ÇALIŞKAN"}
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
            {/* Github Butonu (Doğrudan SVG İkonlu) */}
            <a 
              href="https://github.com/busecllskn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#4731D3] font-bold rounded-md shadow-md hover:bg-[#CBF281] hover:text-[#4731D3] transition-all transform hover:-translate-y-0.5"
            >
              <svg 
                className="w-6 h-6 fill-current" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Github</span>
            </a>

            {/* Linkedin Butonu (Doğrudan SVG İkonlu) */}
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#4731D3] font-bold rounded-md shadow-md hover:bg-[#CBF281] hover:text-[#4731D3] transition-all transform hover:-translate-y-0.5"
            >
              <svg 
                className="w-6 h-6 fill-current text-[#0077B5] hover:text-[#4731D3]" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
              </svg>
              <span>Linkedin</span>
            </a>
          </div>
        </div>

        {/* Sağ Taraf (Büyük Profil Fotoğrafı) */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          {/* rounded-[2rem] uyarısı -> rounded-4xl olarak güncellendi */}
          <div className="relative w-full max-w-sm aspect-4/5 rounded-4xl overflow-hidden shadow-2xl z-20">
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