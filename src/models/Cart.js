import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItemTotal = () => {
    var totalPrice = 0;
    items.forEach((item) => {
      totalPrice += Number(item.price);
    })
    return totalPrice;
  };

  const addToCart = (product) => {
    const newItems = items.concat(product);
    setItems([...newItems]);
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
