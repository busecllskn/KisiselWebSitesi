import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { FaTwitter, FaCodepen, FaAt, FaInstagram } from "react-icons/fa";
import portfolio from "../data/data.json";

function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const data = portfolio[language];

  return (
    <section 
      className={`w-full py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#252128]" : "bg-[#F9F9F9]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        
        {/* Başlık*/}
        <h2 
          className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-300 ${
            darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          {data.contact?.title}
        </h2>

        {/* Açıklama Metni */}
        <p 
          className={`max-w-md text-base sm:text-lg leading-relaxed transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-[#120B3F]"
          }`}
        >
          {data.contact?.description}
        </p>

        {/* E-posta Adresi*/}
        <a 
          href={`mailto:${data.contact?.email}`}
          className={`text-lg sm:text-xl font-medium underline underline-offset-4 decoration-2 transition-colors duration-300 ${
            darkMode ? "text-[#CBF281] hover:text-[#b1d46d]" : "text-[#4731D3] hover:text-[#3724a6]"
          }`}
        >
          {data.contact?.email}
        </a>

        {/* Sosyal Medya */}
        <div className="flex items-center gap-6 pt-4">
          {/* Twitter */}
          <a 
            href="https://x.com/Busecllskn" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-2xl sm:text-3xl transition-colors duration-300 ${
              darkMode ? "text-[#CBF281] hover:text-white" : "text-[#4731D3] hover:text-[#3724a6]"
            }`}
          >
            <FaTwitter />
          </a>

          {/* GitHub */}
          <a 
            href={data.contact?.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-2xl sm:text-3xl transition-colors duration-300 ${
              darkMode ? "text-[#CBF281] hover:text-white" : "text-[#4731D3] hover:text-[#3724a6]"
            }`}
          >
            <FaCodepen />
          </a>

          {/* E-posta */}
          <a 
            href={`mailto:${data.contact?.email}`}
            className={`text-2xl sm:text-3xl transition-colors duration-300 ${
              darkMode ? "text-[#CBF281] hover:text-white" : "text-[#4731D3] hover:text-[#3724a6]"
            }`}
          >
            <FaAt />
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/busecllskn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-2xl sm:text-3xl transition-colors duration-300 ${
              darkMode ? "text-[#CBF281] hover:text-white" : "text-[#4731D3] hover:text-[#3724a6]"
            }`}
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;