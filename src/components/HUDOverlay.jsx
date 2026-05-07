export default function HUDOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] border-[10px] md:border-[20px] border-slate-300/20 dark:border-zinc-900/40">
      
      {/* TOP LEFT HUD */}
      <div className="absolute top-24 md:top-28 left-4 md:left-6 font-mono-code text-[10px] text-primary/60 dark:text-primary/40 flex flex-col">
        <span>LAT: 11.1085° N</span>
        <span>LNG: 77.3411° E</span>

        <span className="mt-2 text-secondary/60 dark:text-secondary-fixed-dim/40">
          SYS_UPTIME: 144:22:01
        </span>
      </div>

      {/* BOTTOM RIGHT HUD */}
      <div className="absolute bottom-24 md:bottom-6 right-4 md:right-6 font-mono-code text-[10px] text-tertiary/60 dark:text-tertiary-fixed-dim/40 text-right">
        <span>ENCRYPT_STRENGTH: 4096-BIT</span>

        <br />

        <span>BUFFER_LOAD: [||||||||||--] 82%</span>
      </div>
    </div>
  );
}