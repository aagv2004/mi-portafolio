import { motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  Download,
  FileText,
  GraduationCap,
} from "lucide-react";

const cvUrl = "/CV_AlejandroGonzalezVergara.pdf";

export const Curriculum = () => {
  return (
    <section id="cv" className="py-12 bg-transparent interface-object">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cv-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(79,70,229,0.16)]"
        >
          <div className="absolute -top-24 right-12 h-72 w-72 rounded-full bg-indigo-600/20 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-sky-500/10 blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-400 border border-indigo-500/30 uppercase bg-indigo-500/10 rounded-full">
                <FileText size={14} />
                Curriculum vitae
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
                Mi experiencia, formación y stack en un solo documento
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                Si quieres revisar mi perfil con más detalle, puedes descargar
                mi CV actualizado en PDF y tener a mano mi formación,
                experiencia, tecnologías y datos de contacto.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 max-w-4xl">
                <div className="cv-detail rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <GraduationCap className="text-indigo-300 mb-3" size={22} />
                  <p className="text-sm text-slate-500 mb-1">Egresado</p>
                  <p className="font-semibold text-white">
                    Analista Programador
                  </p>
                </div>
                <div className="cv-detail rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <BookOpen className="text-sky-300 mb-3" size={22} />
                  <p className="text-sm text-slate-500 mb-1">
                    Estudios en proceso
                  </p>
                  <p className="font-semibold text-white">
                    Ingeniería en Desarrollo de Software
                  </p>
                </div>
                <div className="cv-detail rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <BriefcaseBusiness
                    className="text-emerald-300 mb-3"
                    size={22}
                  />
                  <p className="text-sm text-slate-500 mb-1">Enfoque</p>
                  <p className="font-semibold text-white">
                    Desarrollo Full-Stack
                  </p>
                </div>
              </div>
            </div>

            <a
              href={cvUrl}
              download
              className="primary-action inline-flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.35)] transition-all hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/40"
              aria-label="Descargar CV de Alejandro González Vergara en PDF"
            >
              <Download size={20} />
              Descargar CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
