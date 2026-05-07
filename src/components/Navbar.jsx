export default function Navbar({ toggleTheme, theme }) {
  return (
    <header className="fixed top-0 left-0 w-full z-[70] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 transition-theme">
      
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-grid_gutter py-3">
        
        {/* Logo */}
        <div className="font-h1-tech text-base sm:text-xl md:text-2xl font-bold text-primary tracking-tighter uppercase flex items-center gap-2 min-w-0">
          <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
            radar
          </span>

          <span className="truncate">PORTFOLIO</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 font-mono-code text-[11px] sm:text-[12px]">
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 mr-2 uppercase tracking-widest text-on-surface-variant">
            <a
              className="hover:text-primary font-extrabold transition-colors"
              href="#hero"
            >
              HOME
            </a>

            <a
              className="hover:text-primary font-extrabold transition-colors"
              href="#about"
            >
              ABOUT
            </a>

            <a
              className="hover:text-primary font-extrabold transition-colors"
              href="#skills"
            >
              SKILLS
            </a>

            <a
              className="hover:text-primary font-extrabold transition-colors"
              href="#modules"
            >
              PROJECTS
            </a>

            <a
              className="hover:text-primary font-extrabold transition-colors"
              href="#contact"
            >
              CONTACT
            </a>
          </nav>

          {/* Theme Toggle */}
          <button
            className="p-2 rounded-full border border-outline-variant hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all flex items-center justify-center"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <span className="material-symbols-outlined text-[18px]">
                light_mode
              </span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">
                dark_mode
              </span>
            )}
          </button>

          {/* Divider */}
          <div className="hidden sm:block h-4 w-[1px] bg-outline-variant"></div>

          {/* Status */}
          <span className="text-secondary dark:text-secondary-fixed-dim flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-secondary dark:bg-secondary-fixed-dim rounded-full animate-pulse"></span>

            <span className="hidden sm:inline">ACTIVE</span>
          </span>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden flex justify-around items-center py-2 border-t border-slate-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl text-[10px] uppercase tracking-widest font-bold">
        
        <a
          href="#hero"
          className="flex flex-col items-center gap-1 hover:text-primary transition"
        >
          <span className="material-symbols-outlined text-[18px]">
            home
          </span>
          Home
        </a>

        <a
          href="#about"
          className="flex flex-col items-center gap-1 hover:text-primary transition"
        >
          <span className="material-symbols-outlined text-[18px]">
            badge
          </span>
          About
        </a>

        <a
          href="#skills"
          className="flex flex-col items-center gap-1 hover:text-primary transition"
        >
          <span className="material-symbols-outlined text-[18px]">
            terminal
          </span>
          Skills
        </a>

        <a
          href="#modules"
          className="flex flex-col items-center gap-1 hover:text-primary transition"
        >
          <span className="material-symbols-outlined text-[18px]">
            memory
          </span>
          Projects
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center gap-1 hover:text-primary transition"
        >
          <span className="material-symbols-outlined text-[18px]">
            mail
          </span>
          Contact
        </a>
      </nav>
    </header>
  );
}