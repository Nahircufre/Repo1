import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {
  static navigateToDemoBlaze() {
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.visit(commonPageData.url);
  }

  static waitForModalToClose() {
    cy.contains("a", "Log out", { timeout: 8000 }).should("be.visible");
  }

  static clickOnHome() {
    this.waitForModalToClose();
    commonPageElements.topMenu.home.click({ timeout: 3000 });
  }
  static clickOnContact() {
    commonPageElements.topMenu.contact.click();
  }
  static clickOnAboutUs() {
    commonPageElements.topMenu.aboutUs.click();
  }
  static clickOnCart() {
    commonPageElements.topMenu.cartMenu.click();
  }
  static clickOnLogIn() {
    commonPageElements.topMenu.logIn.click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
  static clickOnSignUp() {
    commonPageElements.topMenu.signUp.click();
  }

  static verifyAlert(expectedMessage) {
    cy.on("Window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  static generateRandomString(length = 10) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  static verifySignedUser(username) {
    cy.get("#nameofuser", { timeout: 30000 })
      .should("be.visible")
      .and("have.text", `Welcome ${username}`, { timeout: 10000 });
  }
}
