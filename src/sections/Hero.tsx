import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "../components/Reveal";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532509854226-a2d9d8e66f8e?q=80&w=2000&auto=format&fit=crop" 
          alt="Fundo Industrial" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Reveal>
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/50 text-sm font-bold mb-6 uppercase tracking-wider">
            Desde 2000 em Unaí-MG
          </span>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Real <span className="text-brand-primary">Máquinas</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-8">
            Soluções robustas em aço para o agronegócio e transporte fluvial. 
            Qualidade que resiste ao tempo e ao trabalho pesado.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <button 
            onClick={scrollToCatalog}
            className="group relative bg-brand-primary hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-brand-primary/30 overflow-hidden"
          >
            <span className="relative z-10">Ver Catálogo Completo</span>
            <div className="absolute inset-0 h-full w-full scale-x-[2] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] linear-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none"></div>
          </button>
        </Reveal>
      </div>
    </header>
  );
}