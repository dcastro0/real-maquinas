import { motion } from "motion/react";
import { Reveal } from "../components/Reveal";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { products } from "../data/products";
import type { Category } from "../types";

export function Catalog() {
  const { filter, setFilter, filteredProducts, setSearch, search } = useProducts(products);

  return (
    <main id="catalogo" className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">Nosso Catálogo</h2>
            <p className="text-text-secondary">Selecione uma categoria para filtrar</p>
          </div>
        </Reveal>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'agricola', label: 'Agrícola' },
            { id: 'estruturas', label: 'Estruturas' },
            { id: 'nautico', label: 'Náutico' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as Category | 'todos')}
              className={`relative px-5 py-2.5 rounded-lg text-sm font-bold transition-colors z-10 ${
                filter === cat.id ? "text-white" : "text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="relative z-20">{cat.label}</span>
              {filter === cat.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-brand-primary rounded-lg shadow-md shadow-brand-primary/20 z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-full md:w-64">
           <input 
            type="text" 
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-bg-paper border border-text-secondary/20 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
           />
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-bg-paper rounded-3xl border border-dashed border-text-secondary/10 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-4xl animate-bounce">
            🔍
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Nenhum resultado encontrado</h3>
          <p className="text-text-secondary max-w-md mx-auto mb-6">
            Não encontramos produtos correspondentes a "{search}". Tente termos mais genéricos como "ferro", "balsa" ou "cocheira".
          </p>
          <button 
            onClick={() => {setFilter('todos'); setSearch('')}} 
            className="px-6 py-2 bg-brand-primary text-white rounded-lg font-bold hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
          >
            Limpar filtros e ver tudo
          </button>
        </div>
      )}
    </main>
  );
}