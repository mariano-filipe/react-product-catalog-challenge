import { fireEvent, render, screen, within } from "@testing-library/react";

import App from "./App";

test("renders a product grid", () => {
  render(<App />);
  const productGridElement = screen.getByText(/produtos/i);
  expect(productGridElement).toBeInTheDocument();
});

describe("renders categories", () => {
  test("Bebidas quentes", () => {
    render(<App />);

    const bebidasQuentesElement = screen.getByText(/bebidas quentes/i);
    expect(bebidasQuentesElement).toBeInTheDocument();
  });

  test("Salgados", () => {
    render(<App />);

    const salgadosElement = screen.getByText(/salgados/i);
    expect(salgadosElement).toBeInTheDocument();
  });
});

describe("renders products with price and description", () => {
  test("Mochaccino", () => {
    render(<App />);

    const mochaccinoElement = screen.getByTestId("6a84952b-1111-43be-bc3c-0823466c0363");
    const mochaccinoPrice = within(mochaccinoElement).getByText("R$ 8");
    const mochaccinoDescription = within(mochaccinoElement).getByText("Mochaccino");

    expect(mochaccinoElement).toBeInTheDocument();
    expect(mochaccinoPrice).toBeInTheDocument();
    expect(mochaccinoDescription).toBeInTheDocument();
  });

  test("Crepioca com presunto e queijo", () => {
    render(<App />);

    const crepiocaElement = screen.getByTestId("66bf9656-a781-4c59-910b-41be857b281a");
    const crepiocaPrice = within(crepiocaElement).getByText("R$ 16,50");
    const crepiocaDescription = within(crepiocaElement).getByText("Crepioca com presunto e queijo");

    expect(crepiocaElement).toBeInTheDocument();
    expect(crepiocaPrice).toBeInTheDocument();
    expect(crepiocaDescription).toBeInTheDocument();
  });
});

describe("adds product to cart correctly", () => {
  test("cart starts empty", () => {
    render(<App />);

    const catalogFooter = screen.getByTestId("catalogFooter");

    expect(catalogFooter.textContent).toBe("R$ 0,00 (0 itens)");
  });

  test("show item sum and item count", () => {
    render(<App />);

    const espressoPequenoElement = screen.getByTestId("6400c151-2bd6-4446-b0a5-4f1e33954051");
    const paoNaChapaElement = screen.getByTestId("4cc21cb1-55f6-419d-874f-1bafda4e42c5");
    const catalogFooter = screen.getByTestId("catalogFooter");

    fireEvent.click(espressoPequenoElement);
    fireEvent.click(paoNaChapaElement);

    expect(catalogFooter.textContent).toBe("R$ 13,50 (2 itens)");
  });

  test("item count only increments for unique items", () => {
    render(<App />);

    const cestaPaoDeQueijoElement = screen.getByTestId("36b5e2c2-448a-4a55-8684-e583fc0cfb4e");
    const catalogFooter = screen.getByTestId("catalogFooter");

    fireEvent.click(cestaPaoDeQueijoElement);
    fireEvent.click(cestaPaoDeQueijoElement);
    fireEvent.click(cestaPaoDeQueijoElement);

    expect(catalogFooter.textContent).toBe("R$ 42,00 (1 item)");
  });
});

describe("show item count in product card", () => {
  test("item starts not showing count", () => {
    render(<App />);

    const cappuccinoElement = screen.getByTestId("b31d44dd-348e-414c-92a3-bc2c12a12203");
    const cappuccinoCount = within(cappuccinoElement).queryByTestId("Cappuccino count");
  
    expect(cappuccinoCount).toHaveStyle("display: none");
  });

  test("item count is shown after click", () => {
    render(<App />);

    const cappuccinoElement = screen.getByTestId("b31d44dd-348e-414c-92a3-bc2c12a12203");
    fireEvent.click(cappuccinoElement);
    fireEvent.click(cappuccinoElement);
    fireEvent.click(cappuccinoElement);
    const cappuccinoCount = within(cappuccinoElement).queryByTestId("Cappuccino count");

    expect(cappuccinoCount.textContent).toBe("3");
  });
});