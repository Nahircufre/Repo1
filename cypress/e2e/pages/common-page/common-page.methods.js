
import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods{
  static navigateToDemoBlaze(){
    Cy.visit(commonPageData.url);
  }
  static clickOnHome(){
    commonPageElements.topMenu.home.click();
  }
  static clickOnContact(){
    commonPageElements.topMenu.contact.click();
  }
  static clickOnAboutUs(){
    commonPageElements.topMenu.aboutUs.click();
  }
  static clickOnCart(){
    commonPageElements.topMenu.cartMenu.click();
  }
  static clickOnLogIn(){
    commonPageElements.topMenu.logIn.click();
  }
  static clickOnSignUp(){
    commonPageElements.topMenu.signUp.click();
  }
} 