import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {
  static navigateToDemoBlaze() {
    cy.clearCookies();
    cy.visit(commonPageData.url);
  }
  static clickOnHome() {
    commonPageElements.topMenu.home.click();
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
    cy.get("#nameofuser", { timeout: 10000 })
      .should("be.visible")
      .and("have.text", `Welcome ${username}`);
  }
}
