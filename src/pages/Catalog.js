import { Box, Typography } from "@mui/material";

import MainLayout from "../layouts/Main";

import { useCart } from "../models/Cart";

function CatalogPage() {
  const { cart } = useCart();

  const cartNItems = cart.items.length;
  const cartTotal = `R$ ${cart.total.toFixed(2)}`;

  return (
    <MainLayout
      pageTitle="Produtos"
      footerLabel={`${cartTotal} (${cartNItems} itens)`}
    >
      <Box sx={{ p: 2, flex: 1 }}>
        <Typography variant="body1">TODO: grid de produtos</Typography>
      </Box>
    </MainLayout>
  );
}

export default CatalogPage;
