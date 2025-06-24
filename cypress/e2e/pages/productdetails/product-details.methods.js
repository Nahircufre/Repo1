import { commonPageMethods } from "../common-page/common-page.methods";
import { productDetailsElements } from "./product-details.element";

export class productDetailsMethods {
  static clickOnAddToCartButton() {
    productDetailsElements.buttons.addToCart.click();
  }

  static verifyProductDetailsPage() {
    productDetailsElements.buttons.addToCart.should("be.visible");
  }

  static verifyProductAdded() {
    commonPageMethods.verifyAlert("Product added");
  }
}
