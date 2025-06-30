import { thankyouElements } from "./thankyou.elements";

export class thankyouMethods {
  static clickOnButtons() {
    thankyouElements.buttons.ok.click();
  }
  static verifyGreenCheck() {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    thankyouElements.icons.greenCheckMark.should("exist").should("be.visible");
  }
}
