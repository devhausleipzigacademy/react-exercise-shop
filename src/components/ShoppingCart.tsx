import { CartItem } from "../utils/types";

type Props = {
  cartItems: CartItem[];
};

export function ShoppingCart({ cartItems }: Props) {
  /* Variable that is the total price */
  // iterate over cartItems, and calculate:
  // item.price * item.quantity
  // use .reduce()

  return (
    <div className="absolute right-0 top-10 shadow-sm bg-white border border-zinc-400 p-4 w-max">
      <h2 className="font-semibold underline mb-1">Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - {item.quantity}
          </li>
        ))}
      </ul>
      {/* Display total price */}
    </div>
  );
}
