import { motion, AnimatePresence } from "motion/react";
import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <motion.div 
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      <AnimatePresence mode="popLayout">
        {products.map((product) => (
          <motion.div
            layout
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-bg-paper rounded-xl overflow-hidden shadow-lg hover:shadow-brand-primary/20 border border-transparent hover:border-brand-primary/30 transition-all group"
          >
            <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
              <img
                src={(product as any).image || '/placeholder.png'}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 linear-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">Ver Detalhes</span>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-text-primary">{product.title}</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-full uppercase">
                  {product.category}
                </span>
              </div>
              <p className="text-brand-primary font-bold text-xl">{(product as any).price}</p>
              
              <a
                href={`https://wa.me/5538999999999?text=${encodeURIComponent(`Olá, tenho interesse em: ${product.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full block text-center py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors font-medium"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}