import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("renders learn react link", () => {
  mount(<App />);
  cy.get("p").contains("src/App.js");
  cy.get("button").click();
  cy.get("p").contains("src/App.test");
});
