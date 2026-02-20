import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const Contacto = () => {
  const [copiado, setCopiado] = useState(false);

  const manejarCopiado = () => {
    navigator.clipboard.writeText("andresg.vergara04@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-transparent interface-object"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-slate-950/50 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)]"
      >
        {/* Decoración de fondo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Listo para aportar <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              en tu equipo de desarrollo
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ya sea para discutir una oportunidad laboral, colaborar en una
            arquitectura desafiante o hablar sobre código, mi bandeja de entrada
            está abierta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={manejarCopiado}
              className="relative p-[2px] overflow-hidden rounded-2xl group transition-all active:scale-95"
            >
              <div
                className={`absolute inset-[-1000%] ${copiado ? "animate-border-spin-fast" : "animate-border-spin"} bg-[conic-gradient(from_90def_at_50%_50%,#433ca_0%,#818cf8_50%,#433ca_100%)] ${copiado ? "opacity-100" : "opacity-40 group-hover:opacity-100"} transition-opacity`}
              />
              <div
                className={`relative px-8 py-4 ${copiado ? "bg-indigo-600" : "bg-slate-900"} rounded-[14px] transition-colors duration-500 flex items-center justify-center min-w-[200px]`}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: copiado ? "0%" : "-100%" }}
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
              // Link de WhatsApp actualizado a un tono profesional IT
              href="https://wa.me/56961917708?text=Hola%20Alejandro%21%20He%20visto%20tu%20portafolio%20y%20me%20gustaría%20conversar%20contigo%20sobre%20una%20oportunidad.%20Mi%20nombre%20es%3A"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2 group"
            >
              <MessageCircle
                size={20}
                className="text-emerald-400 group-hover:scale-110 transition-transform"
              />
              Contactar por <span className="text-emerald-400">WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
