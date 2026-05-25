import { motion } from "framer-motion";
import { Server, Layout, Database } from "lucide-react";
import { FaReact, FaJava } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiOracle,
  SiPostman,
  SiFirebase,
  SiTailwindcss,
  SiSpringboot,
} from "react-icons/si";

const areas = [
  {
    id: "backend",
    titulo: "Backend & APIs",
    icono: <Server className="text-indigo-400" size={28} />,
    colorGlow: "bg-indigo-600/20",
    colorBorder: "border-indigo-500/30",
    alineacion: "md:ml-0 md:mr-auto",
    descripcion:
      "Mi base más fuerte está en Java y Spring Boot para construir servicios backend, APIs REST y lógica de negocio con una estructura clara y mantenible.",
    tecnologias: [
      { nombre: "Java", Icono: FaJava, color: "text-[#F89820]" },
      { nombre: "Spring Boot", Icono: SiSpringboot, color: "text-[#6DB33F]" },
    ],
  },
  {
    id: "frontend",
    titulo: "Interfaces & Frontend",
    icono: <Layout className="text-violet-400" size={28} />,
    colorGlow: "bg-violet-600/20",
    colorBorder: "border-violet-500/30",
    alineacion: "md:mx-auto",
    descripcion:
      "Para frontend suelo trabajar con JavaScript, React y Tailwind CSS, creando interfaces web conectadas al backend y enfocadas en una experiencia clara para el usuario.",
    tecnologias: [
      { nombre: "JavaScript", Icono: SiJavascript, color: "text-[#F7DF1E]" },
      { nombre: "React.js", Icono: FaReact, color: "text-[#61DAFB]" },
      { nombre: "Tailwind CSS", Icono: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    id: "database",
    titulo: "Datos & Entorno",
    icono: <Database className="text-emerald-400" size={28} />,
    colorGlow: "bg-emerald-600/20",
    colorBorder: "border-emerald-500/30",
    alineacion: "md:mr-0 md:ml-auto",
    descripcion:
      "Trabajo con bases de datos relacionales y no relacionales, servicios como Firebase y herramientas de prueba de APIs. Modelo consultas, valido endpoints y adapto la solución según el entorno que requiera el proyecto.",
    tecnologias: [
      { nombre: "Oracle Database", Icono: SiOracle, color: "text-[#F80102]" },
      { nombre: "MySQL", Icono: SiMysql, color: "text-[#4479A1]" },
      { nombre: "MongoDB", Icono: SiMongodb, color: "text-[#47A248]" },
      { nombre: "Firebase", Icono: SiFirebase, color: "text-[#FFCA28]" },
      { nombre: "Postman", Icono: SiPostman, color: "text-[#FF6C37]" },
    ],
  },
];

export const Especialidades = () => {
  return (
    <section id="especialidades" className="py-12 bg-transparent interface-object">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            El ecosistema en mis manos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un stack más acotado, centrado en las tecnologías que uso con mayor
            frecuencia para backend, frontend y datos.
          </p>
        </div>

        <div className="relative flex flex-col gap-16 pb-32">
          {areas.map((area) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`w-full md:w-[85%] ${area.alineacion}`}
            >
              <div
                className={`specialty-card relative overflow-hidden flex flex-col lg:flex-row bg-slate-950/80 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:${area.colorBorder}`}
              >
                <div
                  className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-[100px] ${area.colorGlow} pointer-events-none opacity-50`}
                />

                <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800/50 z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-900 rounded-2xl shadow-inner border border-white/5">
                      {area.icono}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {area.titulo}
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {area.descripcion}
                  </p>
                </div>

                <div className="lg:w-1/2 p-10 md:p-14 bg-slate-900/30 flex items-center justify-center relative z-10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                    {area.tecnologias.map((tech) => (
                      <div
                        key={tech.nombre}
                        className="tech-card flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:-translate-y-2 transition-all duration-300 shadow-lg group"
                      >
                        <tech.Icono
                          className={`text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg ${tech.color}`}
                        />
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors text-center">
                          {tech.nombre}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
