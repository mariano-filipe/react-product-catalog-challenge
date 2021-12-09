import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a product grid", () => {
  render(<App />);
  const productGridElement = screen.getByText(/grid de produtos/i);
  expect(productGridElement).toBeInTheDocument();
});
