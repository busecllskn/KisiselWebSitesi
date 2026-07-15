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
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-[#CBF281]" : "text-white"
          }`}
        >
          {data.navbar.logo}
          <span className="text-[#CBF281]">.</span>
        </h1>

        {/* Sağ Menü */}
        <div className="flex items-center gap-8">
          {/* Dark Mode */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-14 h-7 rounded-full transition ${
                darkMode ? "bg-[#CBF281]" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-300 ${
                  darkMode ? "left-8" : "left-1"
                }`}
              ></span>
            </button>

            <span
              className={`text-sm font-medium ${
                darkMode ? "text-white" : "text-white"
              }`}
            >
              {/* ☀️ burası güncellendi: darkMode true ise Dark, false ise Light metni gelir */}
              {darkMode ? data.navbar.themeTextDark : data.navbar.themeTextLight}
            </span>
          </div>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="text-white font-semibold hover:text-[#CBF281] transition"
          >
            {data.navbar.languageText}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;