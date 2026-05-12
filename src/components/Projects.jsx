export default function Projects() {
  return (
    <section
      className="py-xl px-grid_gutter max-w-7xl mx-auto min-h-screen relative"
      id="modules"
    >
      <div className="flex flex-col mb-xl">
        <h2 className="font-h1-tech text-4xl border-l-4 border-primary pl-md uppercase">
          PROJECTS
        </h2>

        <p className="font-mono-code text-xs text-on-surface-variant mt-2">
          PROJECTS_OVERVIEW
        </p>
      </div>

      {/* SAME HEIGHT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-stretch">
        
        {/* ================= PROJECT 1 ================= */}
        <div className="group glass-panel border border-slate-200 dark:border-zinc-800 hover:border-primary transition-all duration-500 rounded-lg overflow-hidden flex flex-col h-full">
          
          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden">
            <img
              alt="Government Service Portal"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoR-cI3zfsZtWLWL7EJ2iReKl8k3XCkp2L3Y9fKllDGHhgr0Ry3mGkAsRR55hA_YbPynt880DBOOQntiGsz9pSuS_hL2rnmxjwA4a4ukTP1xejIgcQRBpEh5nZ7dq5-zL-MQEZ4dRYLFgrYFxtLSTB-7HQpktO0_ROnvRrPfd2gZ17MfirytQ61Tt_5LK4Bi5gnEhzNlPj3uxzTl1ilNCDPsLgso7aqNOaCbg4SH342k__f3SaIts5AkOYd9itoZc508NhvlIlqMk"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute top-4 right-4 bg-primary text-white font-mono-code text-[10px] px-3 py-1">
              SERVICE_LINKER
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-lg bg-white/90 dark:bg-zinc-900/90 flex flex-col flex-grow">
            
            {/* TITLE */}
            <h3 className="font-h1-tech text-2xl text-primary uppercase mb-4 leading-tight">
              Gov Service Link Portal
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
              Centralized government service access platform designed to
              simplify navigation between public portals, application systems,
              and citizen services. Provides quick access links, categorized
              resources, and an easy-to-use interface for improving digital
              accessibility and user experience.
            </p>

            {/* STACK */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["REACT", "HTML", "CSS", "JAVASCRIPT"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-4 py-2 border border-slate-200 dark:border-zinc-800 font-mono-code"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="https://github.com/Ananth-S26/govServicesPortal.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto"
            >
              <button className="w-full py-3 border border-primary/30 text-primary font-label-caps text-xs hover:bg-primary hover:text-white transition-all duration-300">
                OPEN_GITHUB_REPO
              </button>
            </a>
          </div>
        </div>

        {/* ================= PROJECT 2 ================= */}
        <div className="group glass-panel border border-slate-200 dark:border-zinc-800 hover:border-secondary transition-all duration-500 rounded-lg overflow-hidden flex flex-col h-full">
          
          {/* IMAGE */}
          <div className="relative aspect-video overflow-hidden">
            <img
              alt="Wireless ECG Monitoring System"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* CONTENT */}
          <div className="p-lg bg-white/90 dark:bg-zinc-900/90 flex flex-col flex-grow">
            
            {/* TITLE */}
            <h3 className="font-h1-tech text-2xl text-secondary uppercase mb-3 leading-tight">
              Wireless ECG Monitoring System
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
              Real-time ECG monitoring solution using AD8232, Arduino UNO, and
              NRF24L01 wireless communication. Designed for continuous cardiac
              signal acquisition, BPM tracking, abnormality detection, and
              remote web-based visualization for smart healthcare applications.
            </p>

            {/* STACK */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["ARDUINO", "EMBEDDED C", "IOT", "NODE.JS"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-4 py-2 border border-slate-200 dark:border-zinc-800 font-mono-code"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="https://github.com/Ananth-S26/wireless-ecg-monitoring.git"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto"
            >
            <button className="w-full py-3 border border-secondary/30 text-secondary font-label-caps text-xs hover:bg-secondary hover:text-white transition-all duration-300 mt-auto">
              OPEN_GITHUB_REPO
            </button>
            </a>
          </div>
        </div>

        {/* ================= PROJECT 3 ================= */}
        <div className="lg:col-span-2">
          <div className="glass-panel p-md sm:p-lg border-l-4 border-l-tertiary group hover:-translate-y-1 transition-transform rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-md overflow-hidden">

            {/* LEFT CONTENT */}
            <div className="space-y-2 flex-1 min-w-0">
              
              <span className="text-tertiary font-mono-code text-[10px] tracking-widest break-words">
                SAFETY_AUTOMATION_MODULE:
              </span>

              <h4 className="font-h1-tech text-lg sm:text-xl uppercase break-words leading-tight">
                CNG_GAS_LEAKAGE_DETECTION_SYSTEM
              </h4>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-2xl break-words">
                Arduino-based gas leakage monitoring and safety control system
                using MQ-4 and DHT11 sensors for methane detection,
                environmental monitoring, automatic gas shutoff,
                compressor control, and real-time hazard alerts.
              </p>
            </div>

            {/* RIGHT STATUS */}
            <div className="flex items-center justify-between md:justify-center gap-md w-full md:w-auto shrink-0">

              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary/50"></span>
                <span className="w-2 h-2 rounded-full bg-tertiary/50"></span>
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              </div>

              <span className="material-symbols-outlined text-2xl sm:text-3xl text-tertiary group-hover:translate-x-1 transition-transform cursor-pointer">
                arrow_right_alt
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}