import { useState, useMemo } from "react";
import type { Product, Category } from "../types";

export function useProducts(initialProducts: Product[]) {
  const [filter, setFilter] = useState<Category | "todos">("todos");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory = filter === "todos" || product.category === filter;
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, filter, search]);

  return {
    filter,
    setFilter,
    search,
    setSearch,
    filteredProducts,
  };
}