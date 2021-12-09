import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items] = useState([]);

  const getItemTotal = () => {
    console.log("TODO: should compute card total");
    return 0;
  };

  const addToCart = (product) =>
    console.log("TODO: add to cart product", product);

  return (
    <CartContext.Provider
      value={{ cart: { items, total: getItemTotal() }, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
