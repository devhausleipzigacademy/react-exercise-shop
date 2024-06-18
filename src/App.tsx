import { useState } from "react";
import { ProductList } from "./components/ProductList";
import { CartItem, Product } from "./utils/types";
import { ShoppingCart } from "./components/ShoppingCart";
import { CartToggle } from "./components/CartToggle";

function App() {
  // Manage cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  // Manage cart visibility
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product: Product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (!existingItem) {
      setCart((prevState) => {
        // Create cart item with quantity
        const cartItem: CartItem = { ...product, quantity: 1 };
        // Add created cart item to the cart array
        return [...prevState, cartItem];
      });
    } else {
      setCart((prevState) => {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    }
  }

  function toggleCart() {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible);
  }

  return (
    <>
      <header className="shadow-md py-4 px-6 flex justify-between">
        <h1 className="text-xl font-bold">Wacky Wonders Emporium</h1>
        <div className="relative">
          <CartToggle toggleCart={toggleCart} />
          {isCartVisible ? <ShoppingCart cartItems={cart} /> : null}
        </div>
      </header>
      <div className="p-8">
        <ProductList addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
