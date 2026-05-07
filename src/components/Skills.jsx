const skillNodes = [
    {
      id: "01",
      icon: "code",
      color: "primary",
      borderColor: "border-primary",
      barColor: "bg-primary",
      barWidth: "w-[92%]",
      title: "Frontend Engineering",
      desc: "JavaScript, React.js, HTML5, CSS3",
    },
    {
      id: "02",
      icon: "terminal",
      color: "secondary",
      borderColor: "border-secondary",
      barColor: "bg-secondary",
      barWidth: "w-[85%]",
      title: "Programming Languages",
      desc: "C, C++, Python, Java (Basics)",
    },
    {
      id: "03",
      icon: "database",
      color: "tertiary",
      borderColor: "border-tertiary",
      barColor: "bg-tertiary",
      barWidth: "w-[78%]",
      title: "Database Systems",
      desc: "MongoDB",
    },
    {
      id: "04",
      icon: "memory",
      color: "error",
      borderColor: "border-error",
      barColor: "bg-error",
      barWidth: "w-[88%]",
      title: "Electrical & Embedded Systems",
      desc: "Embedded C, IoT, Machines, Power Electronics",
    },
];

export default function Skills() {
  return (
    <section
      className="py-xl px-grid_gutter min-h-screen flex flex-col justify-center relative bg-slate-100/50 dark:bg-zinc-950/20"
      id="skills"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col mb-xl text-center">
          <h2 className="font-h1-tech text-4xl">SKILL_ARCHITECTURE</h2>
          <p className="font-mono-code text-xs text-secondary mt-2 uppercase tracking-widest">
            Distributed Node Analysis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {skillNodes.map((node) => (
            <div
              key={node.id}
              className={`glass-panel p-lg border-t-2 ${node.borderColor} hover:-translate-y-2 transition-transform`}
            >
              <div className="flex justify-between items-start mb-md">
                <span
                  className={`material-symbols-outlined text-${node.color} text-3xl`}
                >
                  {node.icon}
                </span>
                <span className="text-[10px] font-mono-code text-outline">
                  {node.id}
                </span>
              </div>
              <h4 className="font-h1-tech text-lg mb-sm uppercase">
                {node.title}
              </h4>
              <p className="text-xs text-on-surface-variant mb-md">
                {node.desc}
              </p>
              <div className="w-full bg-slate-200 dark:bg-zinc-800 h-1 overflow-hidden">
                <div className={`${node.barColor} h-full ${node.barWidth}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
