export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};
export type CartItem = {
  quantity: number;
} & Product;
