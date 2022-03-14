import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getItemTotal = () => {
    return items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity, 
      0
    );
  };

  const formatCurrency = (value) => {
    return Number(value).toLocaleString("pt-Br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).replace(/\s/, " ");
  };

  const addToCart = (product) => {
    const filteredItems = items.filter((item) => item.id !== product.id);

    product.quantity = product.quantity + 1 || 1;
    setItems([...filteredItems, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: { items, total: getItemTotal() },
        addToCart,
        formatCurrency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
