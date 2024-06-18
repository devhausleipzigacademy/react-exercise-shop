export type Product = {
  id: number;
  name: string;
  price: number;
};
export type CartItem = {
  quantity: number;
} & Product;
