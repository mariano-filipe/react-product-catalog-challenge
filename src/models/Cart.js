import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItemTotal = () => 
    items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  
  const addToCart = (product) => {
    const foundItem = items.find(item => item.name === product.name);

    if (foundItem) {
      foundItem.quantity++;
      setItems([...items]);
    } else {
      product.quantity = 1;
      setItems([...items, product]);
    }
  }

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
