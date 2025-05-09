import { commonPageMethods } from "../common-page/common-page.methods";
import { signupElements } from "./signup.elements";

export class signupMethods {
  static insertUsername(username) {
    signupElements.textBoxes.username.invoke("val", username);
  }

  static insertPassword(password) {
    signupElements.textBoxes.password.invoke("val", password);
  }

  static clickOnSingupButton() {
    signupElements.buttons.signUp.click();
  }
  static signUp(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickOnSingupButton();
  }
  static verifySignUpSuccessfull() {
    commonPageMethods.verifyAlert("Sign up successful");
  }
  static verifySignUpUnsuccessful() {
    commonPageMethods.verifyAlert("This user already exist");
  }
}
