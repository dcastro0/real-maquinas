import { useInView } from "motion/react";
import { animate } from "motion";
import { useRef, useEffect } from "react";

interface StatData {
  label: string;
  value: number;
  suffix: string;
}

const stats: StatData[] = [
  { label: "Anos de Mercado", value: 25, suffix: "+" },
  { label: "Projetos Entregues", value: 1200, suffix: "" },
  { label: "Cidades Atendidas", value: 45, suffix: "+" },
  { label: "Toneladas de Aço", value: 5000, suffix: "+" },
];

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView) return;
    
    const node = nodeRef.current;
    const controls = animate(from, to, {
      duration,
      onUpdate(value: number) {
        if (node) node.textContent = Math.round(value).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} />;
}

export function Stats() {
  return (
    <section className="py-12 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-baseline">
                <Counter from={0} to={stat.value} duration={2} />
                <span className="text-brand-accent text-2xl md:text-3xl ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-medium opacity-80 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}