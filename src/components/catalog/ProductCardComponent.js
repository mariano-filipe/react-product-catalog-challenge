import { Container, Box, Typography } from "@mui/material";

import { useCart } from "../../models/Cart";

function ProductCardComponent({ product }) {
  const { addToCart, formatCurrency } = useCart();

  const imagePath = product.imageUrl.replace('./', '');

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        mb: "2rem",
      }}
      disableGutters
      onClick={() => addToCart(product)}
      data-testid={product.id}
    >
      <Container sx={{position: "relative", pt: "94.22%"}}>
        <Box
          component="img"
          sx={{
            position: "absolute",
            borderRadius: "8px 8px 0 0",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          src={require(`../../assets/${imagePath}`).default}
          alt={product.name}
        />
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: "7px",
            right: "7px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            width: "40px",
            height: "40px",
            display: `${product.quantity ? "flex" : "none"}`,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
          fontSize="0.857em"
          lineHeight="1.17"
          data-testid={`${product.name} count`}
        >
          {product.quantity}
        </Box>
        <Box
          component="span"
          sx={{
            position: "absolute",
            bottom: "7px",
            right: "9px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            padding: "4px 10px",
            borderRadius: "16px",
          }}
          fontSize="0.857em"
          lineHeight="1.17"
        >
          {formatCurrency(product.price).replace(/,00$/, "")}
        </Box>
      </Container>
      
      <Box
        component="div"
        sx={{
          height: "22.25%",
          padding: "0.5em",
          borderRadius: "0 0 8px 8px",
          boxShadow: "2px 3px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography fontWeight="400" fontSize="0.75em" lineHeight="1.17">
          {product.name}
        </Typography>
      </Box>
    </Container>
  );
}

export default ProductCardComponent;
