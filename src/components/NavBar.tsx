import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center pt-6 ${
        isScrolled ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <div
        className={`flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl border border-white/20 pointer-events-auto scale-90 md:scale-100 mt-2"
            : "bg-transparent"
        }`}
      >
        <AnimatePresence>
          {isScrolled && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-bold text-lg text-brand-primary whitespace-nowrap overflow-hidden"
            >
              Real Máquinas
            </motion.span>
          )}
        </AnimatePresence>

        <div className="flex gap-6 text-sm font-bold">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`hover:text-brand-primary transition-colors ${isScrolled ? 'text-text-primary' : 'text-white shadow-black drop-shadow-md'}`}
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('catalogo')}
            className={`hover:text-brand-primary transition-colors ${isScrolled ? 'text-text-primary' : 'text-white shadow-black drop-shadow-md'}`}
          >
            Catálogo
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className={`hover:text-brand-primary transition-colors ${isScrolled ? 'text-text-primary' : 'text-white shadow-black drop-shadow-md'}`}
          >
            Contato
          </button>
        </div>

        <div className="w-px h-4 bg-current opacity-20"></div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isScrolled ? 'text-text-primary' : 'text-white'}`}
          title="Alternar Tema"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
    </motion.nav>
  );
}