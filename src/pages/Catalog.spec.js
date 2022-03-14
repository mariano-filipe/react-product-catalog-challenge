import CatalogPage from "./Catalog";
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CatalogProvider } from "../models/Catalog";
import { CartProvider } from "../models/Cart";

let catalog;
describe('Catalog Page', () => {
  beforeEach(() => {
    catalog = { products: [ 
      {
        "id": "6400c151-2bd6-4446-b0a5-4f1e33954051",
        "name": "Espresso pequeno",
        "imageUrl": "./images/6400c151-2bd6-4446-b0a5-4f1e33954051.jpg",
        "price": "5",
        "categoryName": "Bebidas quentes"
      }
    ]};
  });

  it('should show the correct cart value and quantities after the click to add to cart', async () => {
    const { getByText, getByTestId } = render(
      <CatalogProvider value={{ catalog }}>
          <CartProvider>
            <CatalogPage  />
          </CartProvider>
      </CatalogProvider>
    );
    
    const productGridElement = getByText(catalog?.products[0].name);

    userEvent.click(productGridElement);

    const footerElement = getByTestId('footer');
    
    const formattedPrice = Number(catalog?.products[0].price).toFixed(2).replace('.', ',');

    expect(footerElement).toHaveTextContent(`R$ ${formattedPrice} (1 itens)`)
    
  })
});