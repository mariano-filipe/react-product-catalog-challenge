import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Product from "../components/Product";

import MainLayout from "../layouts/Main";

import { useCart } from "../models/Cart";
import { useCatalog } from "../models/Catalog";

function CatalogPage() {
  const { cart, addToCart } = useCart();
  const { catalog } = useCatalog();

  const cartNItems = cart.items.length;
  const cartTotal = `R$ ${cart.total.toFixed(2)}`;

  function countItemsCart(id){
    var quant_item = 0;
    cart.items.forEach((item) => {
      if (item.id === id){
        quant_item++;
      }
    });

    return quant_item;
  }

  return (
    <MainLayout
      pageTitle="Produtos"
      footerLabel={`${cartTotal} (${cartNItems} itens)`}
    >
      <Box sx={{ p: 2, flex: 1 }}>
        <Typography
          style={{
            fontSize: '20px',
            fontWeight: 500,
            marginTop: '2.4vh'
          }}
        >
          Bebidas quentes
        </Typography>

        <Grid container spacing={2}>
          {catalog.products.map((product) => {
              if (product.categoryName === "Bebidas quentes"){
                return (
                  <Grid
                    item
                    xs={3}
                    key={product.id}
                    onClick={() => addToCart(product)}
                  >
                    <Product product={product} countSelected={countItemsCart(product.id)} />
                  </Grid>
                );
              }
              else{
                return null;
              }
            })
          }
        </Grid>

        <Typography
          style={{
            fontSize: '20px',
            fontWeight: 500,
            marginTop: '5.8vh'
          }}
        >
          Salgados
        </Typography>

        <Grid container spacing={2}>
        {catalog.products.map((product) => {
            if (product.categoryName === "Salgados"){
              return (
                <Grid
                item
                xs={3}
                key={product.id}
                onClick={() => addToCart(product)}
              >
                  <Product product={product} countSelected={countItemsCart(product.id)} />
                </Grid>
              );
            }
            else{
              return null;
            }
          })
        }
        </Grid>      

      </Box>
    </MainLayout>
  );
}

export default CatalogPage;
