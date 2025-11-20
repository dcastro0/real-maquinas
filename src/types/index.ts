export type Category = 'agricola' | 'estruturas' | 'nautico';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  badge?: string; 
  specs?: {
    [key: string]: string;
  };
}