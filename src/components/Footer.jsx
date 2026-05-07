export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-theme">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-grid_gutter py-lg flex flex-col gap-lg">

        {/* MAIN FOOTER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-lg">

          {/* LEFT */}
          <div className="space-y-2">
            <h3 className="font-h1-tech text-xl text-primary uppercase tracking-wide">
              Ananth Sivakumar
            </h3>

            <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
              Electrical and Electronics Engineering student focused on
              full-stack development, embedded systems, IoT, and intelligent
              automation solutions.
            </p>

            <div className="flex items-center gap-sm pt-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

              <span className="text-[10px] font-mono-code uppercase text-secondary tracking-widest">
                System Status : Online
              </span>
            </div>
          </div>

          {/* CENTER */}
          <div className="flex flex-col gap-3">

            <span className="font-mono-code text-[11px] text-on-surface-variant uppercase tracking-wider">
              Quick Links
            </span>

            <div className="flex flex-wrap gap-md text-xs font-mono-code">
              
              <a
                href="#about"
                className="hover:text-primary transition-colors"
              >
                ABOUT
              </a>

              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                SKILLS
              </a>

              <a
                href="#modules"
                className="hover:text-primary transition-colors"
              >
                PROJECTS
              </a>

              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-3">

            <span className="font-mono-code text-[11px] text-on-surface-variant uppercase tracking-wider">
              Connect
            </span>

            <div className="flex items-center gap-md">

              <a
                href="https://github.com/Ananth-S26"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 rounded-lg border border-slate-300 dark:border-zinc-700 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all">
                  <span className="material-symbols-outlined text-sm group-hover:text-primary">
                    code
                  </span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ananths2006"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 rounded-lg border border-slate-300 dark:border-zinc-700 flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-all">
                  <span className="material-symbols-outlined text-sm group-hover:text-secondary">
                    work
                  </span>
                </div>
              </a>

              <a
                href="mailto:ananthsivakumar.dev@gmail.com"
                className="group"
              >
                <div className="w-10 h-10 rounded-lg border border-slate-300 dark:border-zinc-700 flex items-center justify-center hover:border-tertiary hover:bg-tertiary/10 transition-all">
                  <span className="material-symbols-outlined text-sm group-hover:text-tertiary">
                    mail
                  </span>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-md border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-sm">

          <span className="font-mono-code text-[10px] text-on-surface-variant uppercase tracking-widest">
            © 2026 ANANTH SIVAKUMAR // ALL RIGHTS RESERVED
          </span>

          
        </div>
      </div>
    </footer>
  );
}