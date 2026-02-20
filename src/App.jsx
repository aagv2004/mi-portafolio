/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import Reveal from "./components/Reveal.jsx";
import { SobreMi } from "./components/SobreMi.jsx";
import { Proyectos } from "./components/Proyectos.jsx";
import { Especialidades } from "./components/Especialidades.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [copiado, setCopiado] = useState(false);

  const manejarCopiado = () => {
    navigator.clipboard.writeText("agvergarasoftware@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/3 text-slate-200">
      <Reveal>
        {/* Hero section */}
        <section className="relative px-6 pt-20 pb-24 md:pt-32 lg:px-8 max-w-7xl mx-auto interface-object">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 border border-indigo-500/30 uppercase bg-indigo-500/10 rounded-full">
              Hola, soy Alejandro González
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
              Desarrollador <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
                Full-Stack
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Analista Programador transformando lógica en código limpio. Me
              especializo en el ecosistema JavaScript, creación de APIs y
              arquitecturas escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#proyectos">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  Ver proyectos
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#contacto">
                <button className="px-8 py-4 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/10 hover:border-white/40 transition-all">
                  Contactar
                </button>
              </a>
            </div>
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <SobreMi />
      </Reveal>

      <Reveal>
        <Especialidades />
      </Reveal>

      <Reveal>
        <Proyectos />
      </Reveal>

      <Reveal>
        <Contacto />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;
