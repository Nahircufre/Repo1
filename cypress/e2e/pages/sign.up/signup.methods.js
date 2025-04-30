import { signupElements } from "./signup.elements";

export class signupMethods{
    static insertUsername(username){
        signupElements.textBoxes.username.invoke("val",username);
        }

    static insertPassword(password){
        signupElements.textBoxes.password.invoke("val", password);
    }

    static clickOnSingupButton(){
        signupElements.buttons.signUp.click();
    }
    static signUp( username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSingupButton();
    }

}