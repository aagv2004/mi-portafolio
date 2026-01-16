/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Zap, Search, BookOpen, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const terminos = [
  {
    titulo: "SEO (Search Engine Optimization)",
    definicion: "Es el arte de hacer que Google ame tu página. Si tienes un buen SEO, cuando alguien busque tu servicio, aparecerás en los primeros resultados sin pagar anuncios."
  },
  {
    titulo: "UX / UI (Experiencia y Diseño)",
    definicion: "La UX es que tu web sea fácil de usar (que nadie se pierda). La UI es que se vea hermosa y profesional. Yo combino ambas para que tu cliente no solo entre, sino que se quede."
  },
  {
    titulo: "Responsive Design",
    definicion: "Tu web se verá perfecta en un iPhone, en una tablet o en un monitor gigante. Hoy el 80% de tus clientes te buscarán desde el celular."
  },
  {
    titulo: "Performance (Rendimiento)",
    definicion: "Es la velocidad de carga. Una web lenta es una web que pierde dinero. Mis sitios están optimizados para abrirse en menos de un parpadeo."
  }
];

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div> 
  )
}

function Glosario() {
  const [abierto, setAbierto] = useState(null);
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <BookOpen className="text-indigo-600" size={32} />
          <h2 className="text-3xl font-bold text-white">Diccionario para dueños de negocios</h2>
        </div>

        <div className="space-y-4">
          {terminos.map((item, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
            >
              <button 
                onClick={() => setAbierto(abierto === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-violet-600/20 transition-colors"
              >
                <span className="font-bold text-white">{item.titulo}</span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform ${abierto === index ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {abierto === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
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
}

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
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8 }}
          className="text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Desarrollo Web de Alto Rendimiento
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
              Tu oficio merece verse tan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                profesional como tu trabajo
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg mg:text-xl text-slate-400 mb-10 leading-relaxed">
              Creo sitios web rápidos, claros y optimizados para que te encuentren en Google y te contacten sin vueltas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#proyectos">
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  Ver proyectos
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a
                href="https://wa.me/56961917708?text=Hola%20Alejandro%21%20Me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20contigo.%20Mi%20nombre%20es%3A"
                target="_blank"
                rel="noreferrer"
              >

                <button className="px-8 py-4 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/10 hover:border-white/40 transition-all">

                  Cotizar mi sitio

                </button>
              </a>
            </div>
          </motion.div>
        </section>
      </Reveal>


      {/* Benefits Sections */}
      <Reveal>
        <section className="py-20 bg-transparent interface-object">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Tarjeta 1: SEO */}

              <motion.div
              whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)" }}
              className="p-8 bg-slate-900/40 backdrop-blur-xl border rounded-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all"
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
                  <Search className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">SEO de Élite</h3>
                <p className="text-slate-400 leading-relaxed">
                  No solo diseño, optimizo. Tu negocio aparecerá en los primeros resultados de búsqueda para que tus clientes te encuentren antes que a la competencia.
                </p>
              </motion.div>

              {/* Tarjeta 2: Velocidad */}
              <motion.div
              whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)" }}
              className="p-8 bg-slate-900/40 backdrop-blur-xl border rounded-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
                  <Zap className="text-emerald-600"/>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Velocidad Extrema</h3>
                <p className="text-slate-400 leading-relaxed">
                  Webs construidas con código limpio que cargan en menos de 1 segundo. Porque un cliente que espera, es un cliente que se pierde.
                </p>
              </motion.div>

              {/*  Tarjeta 3: Diseño */}
              <motion.div
              whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)" }}
              className="p-8 bg-slate-900/40 backdrop-blur-xl border rounded-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all"
              >
                <div className="w-12 h-12 bg-violet-700 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
                  <Globe classname="text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Alcance Global</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tu oficina abierta las 24 horas del día. Una presencia digital profesional que proyecta la confianza que tu trabajo merece.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Sección de proyectos */}
      <Reveal>
        <section id="proyectos" className="py-24 bg-transparent interface-object">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Proyectos Destacados</h2>
              <p className="text-slate-400 max-w-xl">
                Una muestra de cómo la tecnología puede resolver problemas reales y organizar información de manera inteligente.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Proyecto 1: EcoTracker */}
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden h-[400px]"
              >
              {/* Imagen de fondo pa después */}
              <img 
                src="/ecotracker.png"
                alt="Vista previa de EcoTracker"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-60"
              />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-2 block">Fullstack App</span>
                  <h3 className="text-2xl font-bold text-white mb-3">EcoTracker</h3>
                  <p className="text-slate-300 mb-6 max-w-sm">
                    Sistema de gestión financiera con análisis de impacto ambiental.
                    Construido con React, Node.js y MongoDB.
                  </p>
                  <a
                  href="https://eco-managing-front.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold group-hover:text-indigo-400 transition-colors"
                  >
                    Ver proyecto en vivo <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>

              {/* Placeholder para un segundo proyecto */}
              <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once:true }}
              className="bg-slate-100 rounded-3xl p-8 flex flex-col justify-center items-center border-2 border-dashed border-slate-300 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                  <Globe className="text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Tu negocio</h3>
                <p className="text-slate-500 max-w-xs">
                  ¿Listo para digitalizar tu negocio con la máxima eficiencia?
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Metodología de trabajo */}
      <Reveal>
        <section className="py-24 bg-transparent interface-object">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">¿Cómo trabajaremos juntos?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                No soy una fábrica de software. Seré tu socio tecnológico. Mi proceso se basa en la comunicación constante para que el resultado final sea exactamente lo que soñaste (o mejor).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Paso 1 */}
              <div className="relative p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-10">
                <div className="text-white font-bold text-5xl mb-6 opacity-20">01</div>
                <h3 className="text-xl font-bold mb-3">La Idea Base</h3>
                <p className="text-slate-400">
                  Tú me entregas tu visión, tus deseos y los objetivos de tu negocio. Escucho cada detalle para entender qué es lo que realmente necesitas destacar.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="relative p-8 bg-indigo-600/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-10 scale-105">
                <div className="text-white font-bold text-5xl mb-6 opacity-20">02</div>
                <h3 className="text-xl font-bold mb-3">Propuesta de valor y Feedback</h3>
                <p className="text-indigo-100">
                  Construyo lo que me pediste + mi propuesta de valor (mejores animaciones, SEO, UX). Te muestro avances constantes para que validemos el camino juntos.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="relative p-8 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-10">
                <div className="text-white font-bold text-5xl mb-6 opacity-20">03</div>
                <h3 className="text-xl font-bold mb-3">Ajuste Infinito</h3>
                <p className="text-slate-400">
                  Gracias a mi flujo de trabajo con Git, podemos volver atrás, cambiar detalles o pivotar la idea hasta que el producto sea perfecto para ti.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Reveal>

      {/* Glosario */}
      {Glosario()}

      {/*Contacto / CTA Final */}
      <section id="contacto" className="py-24 px-6 bg-transparent interface-object">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-950/50 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-[0_0_50_rgba(79,70,229,0.2)]"
        >
          {/* Decoración de fondo */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              ¿Listo para darle a tu oficio <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                el sitio que merece?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Hablemos de tu idea. Te ayudaré a aterrizarla y a convertirla en una herramienta real de crecimiento para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={manejarCopiado}
                className="relative p-[2px] overflow-hidden rounded-2xl group transition-all active:scale-95"
              >
                {/* Borde giratorio */}
                <div className={`absolute inset-[-1000%] ${copiado ? 'animate-border-spin-fast' : 'animate-border-spin'} bg-[conic-gradient(from_90deg_at_50%_50%,#4338ca_0%,#818cf8_50%,#4338ca_100%)] ${copiado ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'} transition-opacity`} />

                {/* Cuerpo del botón */}
                <div className={`relative px-8 py-4 ${copiado ? 'bg-indigo-600' : 'bg-slate-900'} rounded-[14px] transition-colors duration-500 flex items-center justify-center min-w-[200px]`}
                >
                  {/* Efecto de rellenado */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: copiado ? '0%' : '-100%' }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 bg-white/10"
                  />

                  <span className="relative z-10 font-bold text-white flex items-center gap-2">
                    {copiado ? (
                      <>
                        <motion.svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="4" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="w-5 h-5 text-emerald-300"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </motion.svg>
                        <motion.span
                          initial={{ opacity: 0, x: 5 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          ¡Email Copiado!
                        </motion.span>
                      </>
                    ) : (
                      "Copiar mi correo"
                    )}
                  </span>
                </div>
              </button>
              <a 
                href="https://wa.me/56961917708?text=Hola%20Alejandro%21%20Vi%20tu%20portafolio%20digital%20y%20me%20gustar%C3%ADa%20consultar%20por%20un%20proyecto%20web%20para%20mi%20negocio.%20Mi%20nombre%20es%3A" 
                target="_blank" 
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md flex"
              >
                <MessageCircle size={20} className="text-emerald-400 group-hover:scale-110 transition-transform"/>
                <p className="pl-2">Agendar por <span className="text-emerald-400">Whatsapp</span></p>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-transparent relative overflow-hidden interface-object">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-white tracking-tight">Alejandro Andrés González Vergara</span>
            <p className="text-slate-500 text-sm mt-1 font-medium">Desarrollador Fullstack <span className="text-indigo-500/50 mx-1">•</span> Consultor Digital</p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/aagv2004" target="_blank" className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
              <div className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/alejandro-gonzáxlez-vergara-69216b277/" target="_blank" className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group">
              <div className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              LinkedIn
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} — Hecho con el corazón (y mucho código).
            </p>
            <p className="text-[10px] text-slate-600 mt-1 italic">
              Codificado bajo las estrellas 🌌
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App