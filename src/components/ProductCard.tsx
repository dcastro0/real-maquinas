import React, { useState } from 'react';
import { motion } from "motion/react";
import { generateWhatsAppLink } from "../utils/whatsapp";
import { toast } from "sonner";
import { ImageModal } from "./ImageModal";
import { Accordion } from "./Accordion";
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.success(`Iniciando conversa: ${product.title}`, {
      description: "Abrindo WhatsApp..."
    });
    setTimeout(() => {
      window.open(generateWhatsAppLink(product.title), '_blank');
    }, 1500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Confira: ${product.description}`,
          url: window.location.href,
        });
        toast.success("Link compartilhado!");
      } catch (error) {
        console.log("Cancelado", error);
      }
    } else {
      navigator.clipboard.writeText(`${product.title} - ${window.location.href}`);
      toast.success("Link copiado!");
    }
  };

  return (
    <>
      <motion.article
        className="group bg-bg-paper rounded-2xl overflow-hidden shadow-sm border border-text-secondary/10 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col h-full relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div 
          className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse z-10" />
          )}

          <img 
            src={product.imageUrl} 
            alt={product.title} 
            className={`w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
             <span className="bg-bg-paper/90 backdrop-blur-sm text-brand-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-brand-primary/20 shadow-sm w-fit">
               {product.category}
             </span>
             
             {product.badge && (
               <span className="bg-brand-accent text-brand-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm w-fit">
                 {product.badge}
               </span>
             )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); handleShare(); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-700 hover:text-brand-primary hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2.5 group-hover:translate-y-0 z-20"
            title="Compartilhar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
          </button>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
            {product.title}
          </h3>
          
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mb-6 mt-auto">
            {product.specs && (
              <Accordion title="Ver Especificações Técnicas">
                <div className="flex flex-col gap-2 pt-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-xs border-b border-text-secondary/10 pb-1 last:border-0">
                      <strong className="capitalize text-text-primary">{key}:</strong>
                      <span className="text-text-secondary">{value}</span>
                    </div>
                  ))}
                </div>
              </Accordion>
            )}
          </div>

          <motion.a 
            href={generateWhatsAppLink(product.title)}
            onClick={handleContact}
            className="w-full py-4 bg-brand-primary text-white text-center font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Solicitar Orçamento</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.a>
        </div>
      </motion.article>

      <ImageModal 
        isOpen={isZoomOpen} 
        onClose={() => setIsZoomOpen(false)} 
        imageUrl={product.imageUrl} 
        title={product.title}
      />
    </>
  );
};