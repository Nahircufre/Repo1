import { homeElements } from "./home.elements";

export class homeMethods {
  static clickOnPhonesOption() {
    homeElements.categoriesMenu.phone.click();
  }
  static clickOnLaptopsOption() {
    homeElements.categoriesMenu.laptop.click();
  }
  static clickOnMonitorsOption() {
    homeElements.categoriesMenu.monitor.click({ timeout: 10000 });
  }
  static clickOnProductLink(productName) {
    homeElements.product(productName).click();
  }
  static verifyProductDisplay(productName) {
    homeElements.product(productName).should("be.visible");
  }
  static verifyHomePage() {
    cy.url().should("include", "index.html");
  }
}
