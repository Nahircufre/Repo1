import { thankyouElements } from "./thankyou.elements";

export class thankyouMethods{
 static clickOnButtons(){
    thankyouElements.buttons.ok.click();
 }
 static verifyGreenCheck(){
    thankyouElements.icons.greenCheckMark.should('exist');
 }



}