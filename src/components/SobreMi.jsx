import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaNodeJs, FaDocker, FaGithub, FaReact, FaJava } from "react-icons/fa";
import {
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiOracle,
  SiGit,
  SiUbuntu,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiElectron,
  SiFlutter,
  SiDjango,
  SiSpringboot,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { Firebase } from "@boxicons/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Aquí definimos tus "ventanitas" con sus colores originales de marca
const tecnologias = [
  { nombre: "JavaScript", Icono: SiJavascript, color: "text-[#F7DF1E]" },
  { nombre: "React.js", Icono: FaReact, color: "text-[#61DAFB]" },
  { nombre: "Node.js", Icono: FaNodeJs, color: "text-[#339933]" },
  { nombre: "Express.js", Icono: SiExpress, color: "text-slate-100" },
  { nombre: "Next.js", Icono: SiNextdotjs, color: "text-slate-100" },
  { nombre: "TypeScript", Icono: SiTypescript, color: "text-[#3178C6]" },
  { nombre: "PHP", Icono: SiPhp, color: "text-[#777BB4]" },
  { nombre: "Python", Icono: SiPython, color: "text-[#3776AB]" },
  { nombre: "Java", Icono: FaJava, color: "text-[#F89820]" },
  { nombre: "Spring Boot", Icono: SiSpringboot, color: "text-[#6DB33F]" },
  { nombre: "Django", Icono: SiDjango, color: "text-[#0C4B33]" },
  { nombre: "MySQL", Icono: SiMysql, color: "text-[#4479A1]" },
  { nombre: "MongoDB", Icono: SiMongodb, color: "text-[#47A248]" },
  { nombre: "Docker", Icono: FaDocker, color: "text-[#2496ED]" },
  { nombre: "GitHub", Icono: FaGithub, color: "text-white" },
  { nombre: "Tailwind CSS", Icono: SiTailwindcss, color: "text-[#06B6D4]" },
  { nombre: "PostgreSQL", Icono: SiPostgresql, color: "text-[#4479A1]" },
  { nombre: "Ubuntu", Icono: SiUbuntu, color: "text-[#E95420]" },
  { nombre: "Oracle SQL", Icono: SiOracle, color: "text-[#F80102]" },
  { nombre: "Git", Icono: SiGit, color: "text-[#F1502F]" },
  { nombre: "Firebase", Icono: Firebase, color: "text-[#FFCA28]" },
  { nombre: "Bootstrap", Icono: SiBootstrap, color: "text-[#7952B3]" },
  { nombre: "Html5", Icono: SiHtml5, color: "text-[#E34C26]" },
  { nombre: "CSS3", Icono: SiCss3, color: "text-[#1572B6]" },
  { nombre: "Electron", Icono: SiElectron, color: "text-[#47848F]" },
  { nombre: "PyQt", Icono: SiPython, color: "text-[#3776AB]" },
  { nombre: "Tkinter", Icono: SiPython, color: "text-[#3776AB]" },
  { nombre: "Flutter", Icono: SiFlutter, color: "text-[#02569B]" },
];

export const SobreMi = () => {
  // Lógica del Slider
  const [paginaActual, setPaginaActual] = useState(0);
  const itemsPorPagina = 9; // Grilla de 3 columnas x 2 filas
  const totalPaginas = Math.ceil(tecnologias.length / itemsPorPagina);

  // Cortamos el arreglo para mostrar solo los de la página actual
  const tecnologiasVisibles = tecnologias.slice(
    paginaActual * itemsPorPagina,
    (paginaActual + 1) * itemsPorPagina,
  );

  const irSiguiente = () => {
    if (paginaActual < totalPaginas - 1) setPaginaActual(paginaActual + 1);
  };

  const irAnterior = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-transparent interface-object overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* La estructura principal de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* COLUMNA IZQUIERDA: Tu perfil y texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              El perfil detrás del código
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg text-justify md:text-left">
              <p>
                Soy{" "}
                <strong className="text-indigo-400 font-semibold">
                  Técnico Superior Analista Programador
                </strong>{" "}
                titulado y próximamente titulado de Ingeniero en Desarrollo de Software (Carrera en curso).
              </p>
              <p>
                Me destaco por mi adaptabilidad técnica: durante mi experiencia
                profesional, fui capaz de transferir mis conocimientos teóricos
                para estructurar y desarrollar un sistema a medida utilizando{" "}
                <strong className="text-white font-semibold">
                  PHP puro y MySQL
                </strong>
                , construyendo una arquitectura basada en los principios del Modelo Vista Controlador (MVC) y aplicando metodologías agiles
                desde cero.
              </p>
              <p>
                Actualmente, mi enfoque es 100% práctico. Sigo expandiendo mi
                ecosistema construyendo aplicaciones Full-Stack e integrando
                APIs externas, sin dejar de lado la exploración en
                infraestructura y automatización.
              </p>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: La Vitrina / Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end w-full"
          >
            <div className="w-full max-w-[500px]">
              {/* Contenedor del Slider (min-h fijo para que al cambiar de página no salte el contenido) */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Herramientas Conocidas
              </h3>
              <motion.div
                layout
                transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
                className="known-tools-panel relative p-1 rounded-2xl border border-white/5 bg-white/[0.2] backdrop-blur-sm"
              >
                <motion.div
                  layout
                  className="w-full flex items-center justify-center overflow-hidden"
                >
                  {/* AnimatePresence permite animar la salida de un elemento y la entrada de otro */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={paginaActual}
                      layout
                      initial={{ opacity: 0, scale: 0.98, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -8 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="grid min-h-[356px] grid-cols-3 content-start gap-4 p-4 w-full md:min-h-[408px] md:gap-6"
                    >
                      {tecnologiasVisibles.map((tech, index) => (
                        <div
                          key={index}
                          className="known-tool-card group relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-indigo-500/50 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none" />
                          <tech.Icono
                            className={`text-4xl md:text-5xl mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${tech.color}`}
                          />
                          <span className="known-tool-label text-[10px] md:text-xs font-medium text-slate-400 group-hover:text-white transition-colors text-center uppercase tracking-wider">
                            {tech.nombre}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Controles del slider */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={irAnterior}
                  disabled={paginaActual === 0}
                  className={`p-1.5 rounded-full transition-all ${
                    paginaActual === 0
                      ? "text-slate-700 cursor-not-allowed" // Apagado si estás en la primera página
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="flex gap-3 px-2">
                  {Array.from({ length: totalPaginas }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPaginaActual(idx)}
                      className={`transition-all duration-300 rounded-full h-2.5 ${
                        paginaActual === idx
                          ? "w-8 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                          : "w-2.5 bg-slate-600 hover:bg-slate-500"
                      }`}
                      aria-label={`Ir a la página ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={irSiguiente}
                  disabled={paginaActual === totalPaginas - 1}
                  className={`p-1.5 rounded-full transition-all ${
                    paginaActual === totalPaginas - 1
                      ? "text-slate-700 cursor-not-allowed" // Apagado si estás en la última página
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
