import React, { createContext, useContext } from "react";

import ExampleCatalog from "../assets/ExampleCatalog.json";

export const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const catalog = {
    products: ExampleCatalog.products,
  };

  return (
    <CatalogContext.Provider value={{ catalog }}>
      {children}
    </CatalogContext.Provider>
  );
};

export function useCatalog() {
  return useContext(CatalogContext);
}
