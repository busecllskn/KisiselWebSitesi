import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useForm } from "../hooks/useForm";
import { useLocalStorage } from "../hooks/useLocalStorage.jsx";
import { FaTwitter, FaGithub, FaAt, FaInstagram } from "react-icons/fa";
import portfolio from "../data/data.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [isFormOpen, setIsFormOpen] = useLocalStorage("isFormOpen", false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const data = portfolio[language];

  const { values, handleChange, resetForm } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    "register_form_data",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name:
        values.name.trim().length < 4
          ? "İsim ve soyisim en az 4 karakter olmalıdır."
          : "",
      email:
        values.email.trim() === "" || !values.email.includes("@")
          ? "Lütfen geçerli bir e-posta adresi giriniz."
          : "",
      password:
        values.password.length < 6 ? "Şifre en az 6 karakter olmalıdır." : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");

    if (isValid) {
      toast.success("Kayıt işleminiz başarıyla halloldu!");
      resetForm();
      setIsFormOpen(false);
      setErrors({ name: "", email: "", password: "" });
    }
  };

  return (
    <footer
      className={`w-full h-[75vh] flex flex-col justify-center items-center transition-colors duration-300 ${
        darkMode ? "bg-[#252128]" : "bg-[#F9F9F9]"
      }`}
    >
      <div className="max-w-4xl w-full px-6 flex flex-col items-center text-center space-y-6">
        <h2
          className={`text-4xl md:text-5xl font-bold tracking-tight ${
            darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
          }`}
        >
          Bir Sonraki Projenizde Birlikte Çalışalım.
        </h2>

        <span
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setErrors({ name: "", email: "", password: "" });
          }}
          className={`text-lg cursor-pointer transition-all duration-300 hover:underline ${
            isFormOpen ? "opacity-70" : "font-bold"
          } ${darkMode ? "text-gray-300" : "text-[#120B3F]"}`}
        >
          {isFormOpen ? "İptal Et" : "Benimle iletişime geçebilirsiniz."}
        </span>

        {isFormOpen && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-4 animate-in fade-in duration-300"
          >
            <div className="w-full">
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="İsim ve Soyisim"
                className={`p-3 rounded-lg border w-full text-black ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs font-bold text-left mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-posta"
                className={`p-3 rounded-lg border w-full text-black ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-bold text-left mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Şifre"
                className={`p-3 rounded-lg border w-full text-black ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs font-bold text-left mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`p-3 rounded-lg font-bold transition ${
                darkMode
                  ? "bg-[#CBF281] text-[#252128]"
                  : "bg-[#4731D3] text-white"
              }`}
            >
              Kayıt Ol
            </button>
          </form>
        )}

        {!isFormOpen && (
          <div className="flex flex-col items-center gap-4 animate-in fade-in duration-500">
            <a
              href="mailto:buseclskn738@gmail.com"
              className={`text-xl font-medium underline underline-offset-4 ${
                darkMode ? "text-[#CBF281]" : "text-[#4731D3]"
              }`}
            >
              buseclskn738@gmail.com
            </a>
            <div className="flex items-center gap-6 pt-2">
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
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
