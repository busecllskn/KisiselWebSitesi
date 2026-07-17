import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";
import { toast } from "react-toastify";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const data = portfolio[language];

  const toggleLanguage = () => {
    const nextLang = language === "tr" ? "en" : "tr";
    setLanguage(nextLang);
    toast.success(
      nextLang === "tr" ? "Dil Türkçe olarak değiştirildi!" : "Language switched to English!"
    );
  };

  const handleThemeChange = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    toast.info(
      nextTheme ? "Karanlık mod aktif!" : "Aydınlık mod aktif!"
    );
  };

  return (
    <nav
      className={`w-full ${
        darkMode ? "bg-[#252128]" : "bg-[#4731D3]"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-20 py-6 flex items-center justify-between">

        <h1
          className={`text-3xl font-bold transition-colors duration-300 ${
            darkMode ? "text-[#CBF281]" : "text-white"
          }`}
        >
          {data.navbar.logo}
        </h1>

        <div className="flex items-center gap-6 sm:gap-8">
          
          {/* Gece / Gündüz Butonu */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleThemeChange}
              className={`relative w-14 h-7 rounded-full cursor-pointer border transition-all duration-300 ${
                darkMode 
                  ? "bg-[#3A3A3A] border-[#CBF281]/20" 
                  : "bg-[#705ee4] border-white/20"
              }`}
            >
              {/* Kayan Daire*/}
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
                  darkMode 
                    ? "left-8 bg-[#FFE600]" 
                    : "left-1 bg-white"
                }`}
              >
                {darkMode ? (
                  <i className="fa-solid fa-moon text-xs text-[#252128]" />
                ) : (
                  <i className="fa-solid fa-sun text-xs text-[#FFE600]" />
                )}
              </span>
            </button>

            {/* Tema Metni*/}
            <span className="text-sm font-medium text-white hidden sm:block min-w-22.5">
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