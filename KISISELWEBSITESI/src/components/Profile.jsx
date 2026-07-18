import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import portfolio from "../data/data.json";
import pictureOfCoding from "../assets/pictureofcoding.jpg"; // Görseli en üstte import ettik

function Profile() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const data = portfolio[language];

  const labels = {
    tr: {
      birthDate: "Doğum tarihi",
      city: "İkamet Şehri",
      education: "Eğitim Durumu",
      role: "Tercih Ettiği Rol",
    },
    en: {
      birthDate: "Birth Date",
      city: "City",
      education: "Education",
      role: "Preferred Role",
    },
  }[language];

  return (
    <section
      className={`w-full py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#1f1b24]" : "bg-[#4731D3]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#CBF281] mb-12">
          {data.profile?.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/*Temel Bilgilerim */}
          <div className="md:col-span-4 space-y-6 text-white">
            <h3 className="text-2xl font-bold tracking-wide text-[#CBF281] md:text-white">
              {data.profile?.basicInfoTitle}
            </h3>

            <div className="space-y-4">
              {/* Doğum Tarihim */}
              <div className="grid grid-cols-5 gap-2">
                <span className="col-span-2 font-bold text-[#CBF281]">
                  {labels.birthDate}
                </span>
                <span className="col-span-3 text-white/90">
                  {data.profile?.basicInfo?.birthDate}
                </span>
              </div>

              {/* İkamet Şehrim */}
              <div className="grid grid-cols-5 gap-2">
                <span className="col-span-2 font-bold text-[#CBF281]">
                  {labels.city}
                </span>
                <span className="col-span-3 text-white/90">
                  {data.profile?.basicInfo?.city}
                </span>
              </div>

              {/* Eğitim Durumum */}
              <div className="grid grid-cols-5 gap-2">
                <span className="col-span-2 font-bold text-[#CBF281]">
                  {labels.education}
                </span>
                <span className="col-span-3 text-white/90 leading-snug">
                  {data.profile?.basicInfo?.education}
                </span>
              </div>

              {/* Tercih Ettiğim Rol */}
              <div className="grid grid-cols-5 gap-2">
                <span className="col-span-2 font-bold text-[#CBF281]">
                  {labels.role}
                </span>
                <span className="col-span-3 text-white/90">
                  {data.profile?.basicInfo?.role}
                </span>
              </div>
            </div>
          </div>

          {/* Kodlama Görseli */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-xs aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={pictureOfCoding}
                alt="Buse Çalışkan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/*Hakkımda */}
          <div className="md:col-span-4 space-y-6 text-white">
            <h3 className="text-2xl font-bold tracking-wide text-[#CBF281] md:text-white">
              {data.profile?.aboutTitle}
            </h3>

            <p className="text-white/90 leading-relaxed font-light text-base">
              {data.profile?.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
