import { motion } from "framer-motion";
import { Github, ExternalLink, Activity, Smartphone, Leaf } from "lucide-react";

const proyectos = [
  {
    id: 1,
    titulo: "Watchlist-os",
    estado: "Versión 1.1",
    estadoColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    icono: <Activity className="text-sky-400" size={24} />,
    descripcion:
      "Plataforma Full-Stack (MERN) para gestión y seguimiento de contenido multimedia. Integra autenticación segura (JWT/Bcrypt) y consume múltiples APIs REST de terceros (TMDB) para automatizar la extracción de datos.",
    tecnologias: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "TMDB API",
      "Tailwind CSS",
    ],
    github: "https://github.com/aagv2004/Watchlist-os",
    demo: "https://watchlist-os.vercel.app/",
    imagen: "/watchlist-os.png",
  },
  {
    id: 2,
    titulo: "TeamPay",
    estado: "Flutter App",
    estadoColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    icono: <Smartphone className="text-cyan-400" size={24} />,
    descripcion:
      "Aplicación móvil desarrollada en Flutter para gestionar gastos grupales, registrar pagos compartidos y calcular saldos pendientes entre integrantes. Incluye autenticación, grupos, participantes, gastos compartidos, saldos automáticos y soporte de tema claro/oscuro.",
    tecnologias: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Auth",
      "Cloud Firestore",
      "Provider",
      "Material Design",
    ],
    github: "https://github.com/aagv2004/teampay-app",
    demo: null,
    imagen: "/TeamPay.png",
  },
  {
    id: 3,
    titulo: "EcoTracker",
    estado: "MVP",
    estadoColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    icono: <Leaf className="text-emerald-400" size={24} />,
    descripcion:
      "Prueba de concepto (PoC) desarrollada bajo metodologías ágiles. Una herramienta diseñada para evaluar el impacto ambiental de compras cotidianas, transformando lógica de negocio en una interfaz funcional rápidamente.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/aagv2004/EcoTracker-fullstack",
    demo: "https://eco-managing-front.vercel.app/",
    imagen: "/ecotracker.png",
  },
];

export const Proyectos = () => {
  return (
    <section id="proyectos" className="py-12 bg-transparent interface-object">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Mis Proyectos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card group flex flex-col bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-indigo-500/50 transition-all duration-300 shadow-xl h-full"
            >
              {/* Parte Superior: Imagen o Bloque de Color */}
              <div className="project-media h-48 w-full relative overflow-hidden flex items-center justify-center border-b border-white/5 bg-slate-900">
                {/* Lógica: Si el texto empieza con 'bg-', pinta un gradiente. Si no, renderiza la imagen */}
                {proyecto.imagen.startsWith("bg-") ? (
                  <div className={`absolute inset-0 ${proyecto.imagen}`} />
                ) : (
                  <img
                    src={proyecto.imagen}
                    alt={`Vista previa de ${proyecto.titulo}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500" />

                <div className="p-4 bg-slate-900/80 rounded-2xl shadow-2xl backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-500 z-10">
                  {proyecto.icono}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Una etiquetita de estado */}
                <div className="mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border tracking-wide uppercase ${proyecto.estadoColor}`}
                  >
                    {proyecto.estado}
                  </span>
                </div>

                {/* Titulo pal proyecto */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {proyecto.titulo}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-pill text-xs font-medium text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de acción muejeje */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  {proyecto.github && (
                    <a
                      href={proyecto.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <Github size={16} /> Código
                    </a>
                  )}
                  {proyecto.demo && (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      Ver Proyecto <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
