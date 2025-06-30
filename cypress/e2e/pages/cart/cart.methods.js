import { cartElements } from "./cart.elements";

export class cartMethods {
  static clickOnDeleteLink(productName) {
    cartElements.links.delete(productName).click();
  }
  static verifyProductAdded(productName) {
    cartElements.links.delete(productName).should("be.visible");
  }

  static verifyCartUrl() {
    cy.url().should("include", "cart.html");
  }

  static clickOnPlaceOrder() {
    cartElements.buttons.placeOrder.click();
  }
}
