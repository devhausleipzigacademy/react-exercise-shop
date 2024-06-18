import { Product } from "../utils/types";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

export function ProductItem({ product, addToCart }: Props) {
  return (
    <li className="border rounded p-4">
      <div className="flex font-bold items-end mb-4 justify-between">
        <h3>{product.name}</h3>
        <span className="text-xl">{product.price}</span>
      </div>
      <p>{product.description}</p>
      <button
        className="bg-zinc-800 rounded px-4 py-2 text-white"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </li>
  );
}
