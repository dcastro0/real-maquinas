import type { Product } from "../types";
import forrageira from "../assets/forrageira.jpg"
import balsa from "../assets/balsa.jpg"
import siladeiraReal from "../assets/siladeira-real.png"
import flutuante from "../assets/flutuante.jpg"
import cocheira from "../assets/cocheira.png"
import caixa from "../assets/caixa.jpg"
import porteira from "../assets/porteira.jpg"

export const products: Product[] = [
  {
    id: 1,
    title: "Siladeira Real 5000",
    description: "Equipamento de alta performance para corte de cana, capim e sorgo. Ideal para trato diário.",
    category: "agricola",
    imageUrl: siladeiraReal,
    badge: "Mais Vendido",
    specs: {
      potencia: "10cv a 15cv",
      producao: "3 a 5 ton/h",
      acoplamento: "Trator ou Motor Elétrico"
    }
  },
  {
    id: 2,
    title: "Forrageira Robusta",
    description: "Triturador forrageiro para moagem de grãos secos e produtos verdes.",
    category: "agricola",
    imageUrl: forrageira,
    badge: "Pronta Entrega",
    specs: {
      motor: "Elétrico 5cv",
      laminas: "Aço temperado",
      voltagem: "220v/380v"
    }
  },
  {
    id: 3,
    title: "Cocheira Modular de Ferro",
    description: "Estrutura em aço galvanizado para confinamento de gado e equinos. Alta durabilidade contra corrosão.",
    category: "estruturas",
    imageUrl: cocheira,
    specs: {
      material: "Aço Galvanizado",
      modulo: "3m x 3m",
      telhado: "Zinco Térmico"
    }
  },
  {
    id: 4,
    title: "Porteira de Fazenda Reforçada",
    description: "Porteira tubular metálica, leve para manuseio e resistente para contenção.",
    category: "estruturas",
    imageUrl: "https://images.unsplash.com/photo-1464693657404-7c2055a98eb5?auto=format&fit=crop&w=800&q=80",
    specs: {
      largura: "3m, 4m ou 5m",
      pintura: "Eletrostática",
      trinco: "Segurança Dupla"
    }
  },
  {
    id: 5,
    title: "Caixa d'Água Metálica Tipo Taça",
    description: "Reservatório metálico ideal para propriedades rurais com necessidade de pressão de água.",
    category: "estruturas",
    imageUrl: caixa,
    specs: {
      capacidade: "5.000L a 50.000L",
      coluna: "Seca ou Cheia",
      garantia: "5 anos"
    }
  },
  {
    id: 6,
    title: "Balsa Flutuante de Carga",
    description: "Plataforma naval certificada para transporte de maquinário agrícola e gado em rios.",
    category: "nautico",
    imageUrl: balsa,
    specs: {
      comprimento: "10m a 30m",
      convés: "Chapa Antiderrapante",
      capacidade: "20 a 100 ton"
    }
  },
  {
    id: 7,
    title: "Flutuante para Lazer/Pesca",
    description: "Estrutura flutuante estável para ranchos, pescaria ou suporte de bombas de captação.",
    category: "nautico",
    imageUrl: flutuante,
    specs: {
      tambores: "Plástico ou Metal",
      piso: "Madeira Tratada ou Aço",
      personalizavel: "Sim"
    }
  }
];
