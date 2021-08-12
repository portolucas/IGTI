import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

act(() => {
  // renderizar componentes ou eventos de usuário
});
// fazer declarações de testes
