import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";

const terminos = [
  {
    titulo: "SEO (Search Engine Optimization)",
    definicion:
      "Es el arte de hacer que Google ame tu página. Si tienes un buen SEO, cuando alguien busque tu servicio, aparecerás en los primeros resultados sin pagar anuncios.",
  },
  {
    titulo: "UX / UI (Experiencia y Diseño)",
    definicion:
      "La UX es que tu web sea fácil de usar (que nadie se pierda). La UI es que se vea hermosa y profesional. Yo combino ambas para que tu cliente no solo entre, sino que se quede.",
  },
  {
    titulo: "Responsive Design",
    definicion:
      "Tu web se verá perfecta en un iPhone, en una tablet o en un monitor gigante. Hoy el 80% de tus clientes te buscarán desde el celular.",
  },
  {
    titulo: "Performance (Rendimiento)",
    definicion:
      "Es la velocidad de carga. Una web lenta es una web que pierde dinero. Mis sitios están optimizados para abrirse en menos de un parpadeo.",
  },
];

export const Glosario = () => {
  const [abierto, setAbierto] = useState(null);

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-10 justify-center">
          <BookOpen className="text-indigo-600" size={32} />
          <h2 className="text-3xl font-bold text-white">
            Diccionario para dueños de negocios
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {terminos.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 bg-slate-900/40 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setAbierto(abierto === index ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 mb-2 text-left hover:bg-violet-600/20 transition-colors"
              >
                <span className="font-bold text-white text-lg">
                  {item.titulo}
                </span>
                <ChevronDown
                  className={`text-slate-400 transition-transform ${abierto === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {abierto === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-6 mb-2">
                      {item.definicion}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
