import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useForm } from "../hooks/useForm";
import { FaTwitter, FaGithub, FaAt, FaInstagram } from "react-icons/fa";
import portfolio from "../data/data.json";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const data = portfolio[language];

  // Form alanları: İsim, E-posta, Şifre
  const { values, handleChange, resetForm } = useForm(
    { name: "", email: "", password: "" },
    "register_form_data",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. İsim Doğrulama (5-30 karakter)
    if (values.name.length < 5 || values.name.length > 30) {
      alert("İsim 5 ile 30 karakter arasında olmalıdır.");
      return;
    }

    // 2. Şifre Doğrulama (En az 6 karakter)
    if (values.password.length < 6) {
      alert("Şifre en az 6 karakter olmalıdır.");
      return;
    }

    // 3. E-posta Boşluk Kontrolü
    if (values.email.trim() === "") {
      alert("E-posta alanı boş bırakılamaz.");
      return;
    }

    console.log("Kayıt Başarılı:", values);
    alert("Kayıt işleminiz başarıyla tamamlandı!");
    resetForm();
    setIsFormOpen(false);
  };

  return (
    <footer
      className={`py-20 transition-colors duration-300 ${darkMode ? "bg-[#252128]" : "bg-[#F9F9F9]"}`}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}`}
        >
          Bir Sonraki Projenizde Birlikte Çalışalım.
        </h2>

        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className={`text-lg transition-all hover:underline ${darkMode ? "text-gray-300" : "text-[#120B3F]"}`}
        >
          {isFormOpen ? "Formu Kapat" : "Benimle iletişime geçebilirsiniz"}
        </button>

        {isFormOpen && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-4 animate-in fade-in duration-300"
          >
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="İsim (5-30 karakter)"
              className="p-3 rounded-lg border w-full text-black"
              required
            />
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="E-posta"
              className="p-3 rounded-lg border w-full text-black"
              required
            />
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Şifre (en az 6 karakter)"
              className="p-3 rounded-lg border w-full text-black"
              required
            />

            <button
              type="submit"
              className={`p-3 rounded-lg font-bold transition ${darkMode ? "bg-[#CBF281] text-[#252128]" : "bg-[#4731D3] text-white"}`}
            >
              Kayıt Ol
            </button>
          </form>
        )}

        {!isFormOpen && (
          <>
            <a
              href="mailto:buseclskn738@gmail.com"
              className={`text-xl font-medium underline underline-offset-4 ${darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}`}
            >
              buseclskn738@gmail.com
            </a>
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://x.com/Busecllskn"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href={data.contact?.github}
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="mailto:buseclskn738@gmail.com"
                className={darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}
              >
                <FaAt className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/busecllskn/"
                target="_blank"
                rel="noopener noreferrer"
                className={darkMode ? "text-[#CBF281]" : "text-[#4731D3]"}
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
