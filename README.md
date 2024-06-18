# React Exercise

## 1. Display a list of products

Create and display a list of products.

- Create a new file named `ProductList.tsx`.
- You can use the products in data.ts if you like (or define your own).
- Use the `map` function to render each product in the `ProductList` component.

## 2. Create ProductItem Component

Create a reusable component for individual product items.

- Create a new file named `ProductItem.tsx`.
- Define a `ProductItem` component that accepts id, name, and price as props.
- Use this component in `ProductList` to render each product.

## 3. Add Products to Shopping Cart

Allow users to add products to a shopping cart.

- Create a new file named `ShoppingCart.tsx`.
- Use the `useState` hook in `App.tsx` to manage the shopping cart state
- Create a `addToCart` function that adds a product to the cart
  - This function should add the item with the quantity 1, if not already in the cart.
  - It should count up the quantity, if item is already in the cart.
- Pass an `addToCart` function to `ProductItem` to add items to the cart.

## 4. Show Total Price

Display the total price of items in the shopping cart.

- Update the `ShoppingCart` component to calculate and display the total price of all items in the cart.
  - Hint: You can use the `reduce` function to do that.

## 5. Toggle Shopping Cart Visibility

Add functionality to show or hide the shopping cart.

- Create a new file named `CartToggle.tsx`.
- Use a `useState` hook in `App.tsx` to manage the visibility of the shopping cart.
- Create a function `toggleCart` which toggles the cartVisibility state.
- Add a button to toggle the visibility of the shopping cart.
- Show how many products are currently in the cart (different product types)
