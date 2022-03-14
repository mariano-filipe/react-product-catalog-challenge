import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders a product grid", () => {
  render(<App />);
  const element = screen.getByText(/produtos/i);
  expect(element).toBeInTheDocument();
});
