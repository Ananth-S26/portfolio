import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="min-h-screen relative flex items-center justify-center px-grid_gutter pt-xl overflow-hidden"
        id="hero"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-lg relative z-10">
          
          {/* Data Stream */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-end pb-xl font-mono-code text-[10px] text-primary/60 dark:text-primary/30 space-y-2">
            <p>USER: ANANTH_SIVAKUMAR</p>
            <p>ROLE: EEE_ENGINEER + FULLSTACK_DEV</p>
            <p>STACK: REACT_NODE_MONGO</p>
            <p>STATUS: BUILDING_THE_FUTURE</p>

            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>SYSTEM_STABLE</span>
            </div>

            <div className="h-[100px] w-[1px] bg-primary/40 dark:bg-primary/20 ml-2"></div>
          </div>

          {/* Main Console */}
          <div className="lg:col-span-8 flex flex-col items-center text-center space-y-md w-full">
            
            {/* Boot Tag */}
            <div className="relative inline-block px-sm py-xs border border-secondary/40 dark:border-secondary-fixed-dim/40 text-secondary dark:text-secondary-fixed-dim font-mono-code text-xs mb-md tracking-widest uppercase bg-secondary/5 transition-theme">
              <div className="hud-bracket-tl"></div>
              <div className="hud-bracket-br"></div>
              SYSTEM BOOT: ANANTH_PORTFOLIO_1.1.26
            </div>

            {/* Name */}
            <h1 className="font-display-lg text-display-lg md:text-[80px] xl:text-[96px] leading-none tracking-tightest transition-theme">
              ANANTH{" "}
              <span className="text-primary glow-primary block md:inline">
                SIVAKUMAR
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-h1-tech text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto opacity-90">
              EEE Engineer <span className="text-secondary">+</span> Full Stack
              Developer

              <span className="block text-body-standard mt-sm text-outline font-mono-code">
                [ BRIDGING_CIRCUITS_&amp;_CODE ]
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-md justify-center pt-lg w-full max-w-md">
              
              {/* Main Button */}
              <button
                onClick={() => setOpen(true)}
                className="flex-1 px-lg py-md border border-primary text-primary font-label-caps hover:bg-primary hover:text-white transition-all duration-300 glow-primary group flex items-center justify-center gap-sm"
              >
                <span className="material-symbols-outlined text-sm">
                  terminal
                </span>

                INITIALIZE_PORTFOLIO
              </button>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/13Ut72Avtvnt0V6bW1MeLg7Sm8sihh03g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full px-lg py-md border border-outline-variant text-on-surface-variant font-label-caps hover:border-secondary hover:text-secondary transition-all duration-300">
                  DOWNLOAD_SPEC.PDF
                </button>
              </a>
            </div>
          </div>

          {/* Status Panel */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-start pt-xl">
            <div className="glass-panel p-md border-l-4 border-l-tertiary">
              <span className="text-[10px] font-mono-code text-tertiary">
                DATA_FEED
              </span>

              <div className="mt-2 space-y-2">
                <div className="h-1 bg-slate-200 dark:bg-zinc-800 w-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[60%] animate-pulse"></div>
                </div>

                <div className="h-1 bg-slate-200 dark:bg-zinc-800 w-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {open && (
      <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-md">

        {/* Modal Box */}
        <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-xl overflow-hidden shadow-[0_0_60px_rgba(0,255,200,0.12)]">

          {/* Glass Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none"></div>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-all text-lg"
          >
            ✕
          </button>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center relative z-10">

            {/* Profile Image */}
            <div className="relative mb-5">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110"></div>

              {/* Circle Frame */}
              <div className="relative w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-tertiary shadow-[0_0_30px_rgba(0,255,200,0.35)]">

                <img
                  src="src/photo.jpg"
                  alt="Ananth Sivakumar"
                  className="w-full h-full object-cover rounded-full border border-black/40"
                />
              </div>
            </div>

            {/* Header */}
            <p className="font-mono-code text-primary text-xs tracking-[0.35em] animate-pulse">
              ACCESS_GRANTED
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-4 mb-6"></div>

            {/* Terminal Content */}
            <div className="space-y-3 font-mono-code text-sm text-slate-300 text-left w-full">
              <p className="typing">{">"} NAME: ANANTH_SIVAKUMAR</p>
              <p>{">"} ROLE: EEE_ENGINEER + FULLSTACK_DEV</p>
              <p>{">"} STACK: REACT / NODE / MONGODB</p>
              <p>{">"} SPECIALIZATION: SOFTWARE + CIRCUITS</p>
              <p>{">"} EDUCATION: KONGU_ENGINEERING_COLLEGE</p>
              <p>{">"} STATUS: AVAILABLE_FOR_WORK</p>
              <p>{">"} LOCATION: TAMIL_NADU_INDIA</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-md mt-lg w-full">

              {/* GitHub */}
              <a
                href="https://github.com/Ananth-S26"
                target="_blank"
                rel="noopener noreferrer"
                className="px-md py-sm rounded-xl border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 flex items-center gap-2 font-mono-code tracking-wider group backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-12 scale-110 transition-transform">
                  code
                </span>

                GITHUB
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ananths2006"
                target="_blank"
                rel="noopener noreferrer"
                className="px-md py-sm rounded-xl border border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary hover:text-black transition-all duration-300 flex items-center gap-2 font-mono-code tracking-wider group backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-[18px] group-hover:rotate-12 scale-110 transition-transform">
                  business_center
                </span>

                LINKEDIN
              </a>

              {/* Contact */}
              <a
                href="mailto:ananthsivakumar26@gmail.com"
                className="px-md py-sm rounded-xl border border-tertiary/30 bg-tertiary/5 text-tertiary hover:bg-tertiary hover:text-black transition-all duration-300 flex items-center gap-2 font-mono-code tracking-wider group backdrop-blur-md"
              >
                <span className="material-symbols-outlined text-[18px]  group-hover:rotate-12 scale-110 transition-transform">
                  mail
                </span>

                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}