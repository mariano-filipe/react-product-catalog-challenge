import { Container, Typography, Box, Grid } from "@mui/material";

import ProductCardComponent from "./ProductCardComponent";

function ProductGridComponent({ categoryName, productList }) {
  return (
    <Container disableGutters sx={{ mb: 4, pt: 2 }}>
      <Box mb={4}>
        <Typography fontWeight="500" variant="h5" fontSize="1.25rem" lineHeight="1.3">
          {categoryName}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {productList.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductCardComponent product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductGridComponent;
