import { homeElements } from "./home.elements";

export class homeMethods{
    static clickOnPhonesOption(){
        homeElements.categoriesMenu.phone.click();
    }
    static clickOnLaptopsOption(){
        homeElements.categoriesMenu.laptop.click();
    }
    static clickOnMonitorsOption(){
        homeElements.categoriesMenu.monitor.click();
    }
    static clickOnProductLink(productName){
        homeElements.product(productName).click();
    }
}