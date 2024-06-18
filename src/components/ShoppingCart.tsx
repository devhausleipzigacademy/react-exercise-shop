import { CartItem } from "../utils/types";

type Props = {
  cartItems: CartItem[];
};

export function ShoppingCart({ cartItems }: Props) {
  return (
    <div>
      <p>Shopping Cart</p>
      <ul>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
