import { placeOrderElements } from "./place-order.elements";

export class placeOrderMethods {
  static insertName(name) {
    placeOrderElements.textBoxes.name.invoke("val", name);
  }
  static insertCountry(country) {
    placeOrderElements.textBoxes.country.invoke("val", country);
  }
  static insertCity(city) {
    placeOrderElements.textBoxes.city.invoke("val", city);
  }
  static insertcreditCard(creditCardNumber) {
    placeOrderElements.textBoxes.creditCard.invoke("val", creditCardNumber);
  }
  static insertMonth(month) {
    placeOrderElements.textBoxes.month.invoke("val", month);
  }
  static insertYear(year) {
    placeOrderElements.textBoxes.year.invoke("val", year);
  }
  static clickOnCloseButton() {
    placeOrderElements.buttons.close.click();
  }
  static clickOnPurchaseButton() {
    placeOrderElements.buttons.purchase.click({
      timeout: 8000,
    });
  }
  static insertAllInformation(data) {
    this.insertName(data.name);
    this.insertCountry(data.country);
    this.insertCity(data.city);
    this.insertMonth(data.month);
    this.insertcreditCard(data.creditCardNumber);
    this.insertYear(data.year);
  }
}
