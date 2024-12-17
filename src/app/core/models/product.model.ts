export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  unit: 'KG' | 'PIECE';
  category: 'FRUIT' | 'VEGETABLE';
  imageUrl?: string;
}