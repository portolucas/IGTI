import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import HelloWorld from "./HelloWorld";

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<HelloWorld />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<HelloWorld name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Hello, Jenny!");

  act(() => {
    render(<HelloWorld name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Hello, Margaret!");
});
