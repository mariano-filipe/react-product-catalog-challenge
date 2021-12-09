import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CatalogProvider } from "./models/Catalog";
import { CartProvider } from "./models/Cart";

import CatalogPage from "./pages/Catalog";

const theme = createTheme({ palette: { primary: { main: "#0079E5" } } });

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CatalogProvider>
          <CartProvider>
            <CatalogPage />
          </CartProvider>
        </CatalogProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
