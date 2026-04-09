export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    colorClass: string;
  };
};
