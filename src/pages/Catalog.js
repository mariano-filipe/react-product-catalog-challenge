import { Box } from "@mui/material";

import MainLayout from "../layouts/Main";
import ProductGridComponent from "../components/catalog/ProductGridComponent";

import { useCart } from "../models/Cart";
import { useCatalog } from "../models/Catalog";

function CatalogPage() {
  const { cart, formatCurrency } = useCart();
  const { catalog } = useCatalog();
  
  const productCategories = [...new Set(catalog.products.map((item) => item.categoryName))];
  const cartNItems = cart.items.length;
  const cartTotal = formatCurrency(cart.total);

  return (
    <MainLayout
      pageTitle="Produtos"
      footerLabel={`${cartTotal} (${cartNItems} ${cartNItems === 1 ? "item" : "itens"})`}
    >
      <Box sx={{ p: "0.25em 2em 0 2em", flex: 1, overflowY: "auto" }}>
        {productCategories.map((category) => {
          return (
            <ProductGridComponent
              key={category}
              categoryName={category}
              productList={catalog.products.filter(
                (item) => item.categoryName === category
              )}
            />
          );
        })}
      </Box>
    </MainLayout>
  );
}

export default CatalogPage;
