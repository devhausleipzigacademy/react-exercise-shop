import { products } from "../utils/data";
import { Product } from "../utils/types";
import { ProductItem } from "./ProductItem";

type Props = {
  addToCart: (product: Product) => void;
};

export function ProductList({ addToCart }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductItem key={product.id} addToCart={addToCart} product={product} />
      ))}
    </ul>
  );
}
