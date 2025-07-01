import { commonPageMethods } from "../common-page/common-page.methods";
import { loginMethods } from "../login/login.methods";
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

  static deleteProduct() {
    cy.get('a[onclick*="deleteItem"]').each((link) => {
      link.click();
      cy.wait(1000);
    });
  }

  static limpiarCarrito(username, password) {
    commonPageMethods.navigateToDemoBlaze();
    commonPageMethods.logOut();
    commonPageMethods.clickOnHome();
    commonPageMethods.clickOnLogIn();
    loginMethods.login(username, password);
    commonPageMethods.clickOnCart();
    this.deleteProduct();
  }
}
