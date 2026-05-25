import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MessageCircle, Send } from "lucide-react";

const correo = "andresg.vergara04@gmail.com";

export const Contacto = () => {
  const [copiado, setCopiado] = useState(false);

  const manejarCopiado = async () => {
    await navigator.clipboard.writeText(correo);
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
        className="contact-card max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(79,70,229,0.18)]"
      >
        <div className="absolute -top-24 right-0 w-96 h-96 bg-indigo-600/20 blur-[110px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-violet-600/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] p-8 md:p-12 lg:p-16">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 border border-indigo-500/30 uppercase bg-indigo-500/10 rounded-full">
              <Send size={14} />
              Contacto directo
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              ¿Construimos algo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                útil y bien pensado?
              </span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
              Estoy abierto a oportunidades laborales, colaboraciones y
              conversaciones técnicas sobre desarrollo web, APIs, bases de datos
              o productos que necesiten una ejecución clara.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={manejarCopiado}
                className="primary-action relative px-7 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(79,70,229,0.35)] active:scale-95"
              >
                {copiado ? (
                  <>
                    <Check size={20} className="text-emerald-200" />
                    Email copiado
                  </>
                ) : (
                  <>
                    <Copy size={20} className="group-hover:scale-110 transition" />
                    Copiar correo
                  </>
                )}
              </button>

              <a
                href="https://wa.me/56961917708?text=Hola%20Alejandro%21%20He%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20una%20oportunidad.%20Mi%20nombre%20es%3A"
                target="_blank"
                rel="noreferrer"
                className="secondary-action px-7 py-4 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle
                  size={20}
                  className="text-emerald-400 group-hover:scale-110 transition-transform"
                />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-info-panel rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 flex flex-col justify-between gap-8">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <Mail className="text-indigo-300" size={22} />
              </div>
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-3 font-bold">
                Correo principal
              </p>
              <p className="text-lg font-semibold text-white break-all">
                {correo}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-slate-500 mb-1">Disponibilidad</p>
                <p className="font-semibold text-white">Abierto a conversar</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-slate-500 mb-1">Respuesta</p>
                <p className="font-semibold text-white">Lo antes posible</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
