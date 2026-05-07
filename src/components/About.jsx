export default function About() {
  return (
    <section
      className="py-xl px-grid_gutter min-h-screen flex items-center relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-xl relative">
        {/* Left Column */}
        <div className="space-y-lg">
          <div className="space-y-md">
            <h2 className="font-display-lg text-4xl flex items-center gap-md">
              <span className="text-primary font-mono-code">01_</span>
              ABOUT_ME
            </h2>

            <div className="glass-panel p-lg relative group overflow-hidden">
              <div className="hud-bracket-tl"></div>
              <p className="text-body-standard text-on-surface-variant leading-relaxed mb-md">
                Building scalable digital systems with an engineer’s mindset. As an{" "}
                <span className="text-secondary font-semibold">
                  EEE student and full stack developer
                </span>{" "}
                I combine circuit-level problem solving with modern software architecture,
                creating fast, intelligent and visually immersive applications that feel
                both technical and futuristic.
              </p>
              <div className="flex flex-wrap gap-md mt-lg">
                <div className="p-sm bg-slate-100 dark:bg-zinc-900 rounded border border-slate-200 dark:border-zinc-800">
                  <span className="block text-[10px] font-mono-code text-slate-500 uppercase">
                    Power_Input
                  </span>
                  <span className="text-sm font-bold">EEE Degree</span>
                </div>
                <div className="p-sm bg-slate-100 dark:bg-zinc-900 rounded border border-slate-200 dark:border-zinc-800">
                  <span className="block text-[10px] font-mono-code text-slate-500 uppercase">
                    Logic_Array
                  </span>
                  <span className="text-sm font-bold">Full Stack</span>
                </div>
                <div className="p-sm bg-slate-100 dark:bg-zinc-900 rounded border border-slate-200 dark:border-zinc-800">
                  <span className="block text-[10px] font-mono-code text-slate-500 uppercase">
                    Output_Freq
                  </span>
                  <span className="text-sm font-bold">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Block */}
          <div className="glass-panel overflow-hidden border-slate-200 dark:border-zinc-800 shadow-xl">
            <div className="bg-slate-100 dark:bg-zinc-900 px-md py-xs flex items-center justify-between border-b border-slate-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono-code text-slate-500 uppercase">
                root@ananth:~/bio
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
              </div>
            </div>
            <div className="p-md font-mono-code text-[12px] space-y-1 text-slate-600 dark:text-slate-400">
              <p>
                <span className="text-secondary">guest@sys:~$</span> cat
                summary.log
              </p>
              <p className="text-primary">&gt; Bridging Physical &amp; Digital Layers</p>
              <p className="text-primary">&gt; Focus: Performance &amp; Precision</p>
              <p className="text-primary">&gt; Status: Ready for connection...</p>
              <p>
                <span className="text-secondary">guest@sys:~$</span>{" "}
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Orbit Visual */}
        <div className="flex items-center justify-center relative min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-20">
            <div className="w-64 md:w-96 h-64 md:h-96 border-2 border-dashed border-primary rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-48 md:w-64 h-48 md:h-64 border border-secondary rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 glass-panel rounded-full flex flex-col items-center justify-center z-20 border-primary border-2 glow-primary animate-pulse">
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">
                bolt
              </span>
              <span className="text-[10px] font-mono-code mt-1">CORE_ENGINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
