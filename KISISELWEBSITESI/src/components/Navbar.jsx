import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const data = portfolio[language];

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-[#252128]" : "bg-[#4731D3]"
      } transition-colors duration-300`}
    >
    
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <h1
          className={`text-3xl font-bold transition-colors duration-300 ${
            darkMode ? "text-[#CBF281]" : "text-white"
          }`}
        >
          {data.navbar.logo}
        </h1>

        <div className="flex items-center gap-6 sm:gap-8">
          
          {/* Dark Mode Butonu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-7 rounded-full flex items-center justify-between px-2 cursor-pointer border border-[#CBF281]/20 transition-all duration-300 ${
                darkMode ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
              }`}
            >
              <i className="fa-regular fa-moon text-xs" style={{ color: "rgb(255, 212, 59)" }} />
              <i className="fa-regular fa-sun text-xs" style={{ color: "rgb(255, 212, 59)" }} />

              <span
                className={`absolute top-1 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
                  darkMode ? "left-1 bg-[#FFE600]" : "left-8 bg-[#EAEAEA]"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    darkMode ? "bg-[#252128]" : "bg-white"
                  }`}
                />
              </span>
            </button>

            {/* Tema Metni - Mobilde çok sıkışmaması için sm:block eklendi */}
            <span className="text-sm font-medium text-white hidden sm:block">
              {darkMode ? data.navbar.themeTextDark : data.navbar.themeTextLight}
            </span>
          </div>

          {/* Dil Seçimi */}
          <button
            onClick={toggleLanguage}
            className="text-white font-semibold hover:text-[#CBF281] transition-colors duration-200"
          >
            {data.navbar.languageText}
          </button>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;