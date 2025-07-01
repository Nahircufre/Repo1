import { logger } from "../../util/logger";
import { commonPageMethods } from "../common-page/common-page.methods";
import { loginElements } from "./login.elements";

export class loginMethods {
  static insertUsername(username) {
    loginElements.textBoxes.username
      .should("be.visible") // Espera que sea visible
      .and("not.be.disabled") // Asegura que no esté deshabilitado
      .clear() // Limpia el campo
      .type(username, { delay: 100 }) // Escribe con delay
      .should("have.value", username); // Verifica que se haya escrito bien
  }

  static insertPassword(password) {
    loginElements.textBoxes.password.type(password, { delay: 100 });
  }
  static clickOnLoginButton() {
    loginElements.buttons.login.click({ timeout: 9000 });
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  static login(username, password) {
    logger.subStep("insertar username");
    this.insertUsername(username);
    logger.subStep("insert password");
    this.insertPassword(password);
    logger.subStep("clickonloguin");
    this.clickOnLoginButton({ timeout: 10000 });
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  static verifyWrongPassword() {
    commonPageMethods.verifyAlert("Wrong Password");
  }
}
