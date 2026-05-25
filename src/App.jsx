import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AmbientNetwork } from "./components/AmbientNetwork.jsx";
import Reveal from "./components/Reveal.jsx";
import { SobreMi } from "./components/SobreMi.jsx";
import { Curriculum } from "./components/Curriculum.jsx";
import { Proyectos } from "./components/Proyectos.jsx";
import { Especialidades } from "./components/Especialidades.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Footer } from "./components/Footer.jsx";

const navItems = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#cv", label: "CV" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

function App() {
  const [tema, setTema] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("tema") || "dark";
  });
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", tema === "light");
    root.classList.toggle("dark", tema === "dark");
    localStorage.setItem("tema", tema);
  }, [tema]);

  const alternarTema = () => {
    setTema((temaActual) => (temaActual === "dark" ? "light" : "dark"));
  };

  const cerrarMenuMovil = () => {
    setMenuMovilAbierto(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30 text-slate-200">
      <AmbientNetwork />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="nav-brand flex items-center gap-3">
            <img src="/vite.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-white tracking-wide">
              Alejandro G. Vergara
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={alternarTema}
              className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 backdrop-blur-sm transition hover:border-indigo-400/50 hover:text-white"
              aria-label={
                tema === "dark" ? "Activar modo claro" : "Activar modo oscuro"
              }
              title={tema === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {tema === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuMovilAbierto((abierto) => !abierto)}
              className="mobile-menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 backdrop-blur-sm transition hover:border-indigo-400/50 hover:text-white md:hidden"
              aria-label={
                menuMovilAbierto ? "Cerrar menú móvil" : "Abrir menú móvil"
              }
              aria-controls="mobile-navigation"
              aria-expanded={menuMovilAbierto}
            >
              {menuMovilAbierto ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuMovilAbierto && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="mobile-nav-panel md:hidden border-t border-white/10 bg-slate-950/90 px-6 py-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={cerrarMenuMovil}
                    className="mobile-nav-link"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </header>

        <Reveal>
        {/* Hero section */}
        <section className="relative min-h-screen px-6 pt-32 pb-24 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center interface-object">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 border border-indigo-500/30 uppercase bg-indigo-500/10 rounded-full">
              Hola, soy Alejandro González
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Desarrollo software con enfoque en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
                soluciones reales
              </span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
              Analista Programador enfocado en desarrollo full-stack, creación
              de APIs, interfaces modernas y sistemas web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#proyectos">
                <button className="primary-action px-7 py-3.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(79,70,229,0.35)]">
                  Ver proyectos
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <a href="#contacto">
                <button className="secondary-action px-7 py-3.5 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/10 hover:border-white/40 transition-all">
                  Contactar
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="absolute w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />

            <div className="hero-code-card relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <pre className="text-sm text-slate-300 leading-relaxed">
                {`const developer = {
  name: "Alejandro González",
  role: "Full-Stack Developer",
  stack: ["React", "Node", "Java", "SQL"],
  focus: "Crear soluciones útiles"
};`}
              </pre>
            </div>
          </motion.div>
        </section>
        </Reveal>

        <Reveal>
          <SobreMi />
        </Reveal>

        <Reveal>
          <Curriculum />
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
    </div>
  );
}

export default App;
