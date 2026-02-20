export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-transparent relative overflow-hidden interface-object">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-bold text-white tracking-tight">
            Alejandro Andrés González Vergara
          </span>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Desarrollador Full-Stack{" "}
            <span className="text-indigo-500/50 mx-1">•</span> Analista
            Programador
          </p>
        </div>

        <div className="flex gap-8">
          <a
            href="https://github.com/aagv2004"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group"
          >
            <div className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-gonz%C3%A1lez-vergara-69216b277/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm font-semibold flex items-center gap-2 group"
          >
            <div className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            LinkedIn
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} — Diseñado y codificado con convicción.
          </p>
          <p className="text-[10px] text-slate-600 mt-1 italic">
            Construyendo soluciones escalables ⚙️
          </p>
        </div>
      </div>
    </footer>
  );
};
