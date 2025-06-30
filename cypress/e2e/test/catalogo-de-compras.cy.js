import { cartMethods } from "../pages/cart/cart.methods";
import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { homeMethods } from "../pages/homepage/home.methods";
import { LoginData } from "../pages/login/login.data";
import { loginMethods } from "../pages/login/login.methods";
import { placeOrderData } from "../pages/place-order/place-order.data";
import { placeOrderMethods } from "../pages/place-order/place-order.methods";
import { productDetailsMethods } from "../pages/productdetails/product-details.methods";
import { thankyouMethods } from "../pages/thankyou/thankyou.methods";
import { logger } from "../util/logger";

const user = LoginData.validCredentials;
const product = "ASUS Full HD";

describe(commonPageData.testSuites.catalogoDeCompras, () => {
  it("Navegacion por categorias", () => {
    logger.stepNumber(1);
    logger.step("Iniicar sesion como usuario registrado");
    logger.subStep("Navegar a la app");
    commonPageMethods.navigateToDemoBlaze();
    logger.subStep("click on login page");
    commonPageMethods.clickOnLogIn();
    cy.wait(3000);
    loginMethods.login(user.username, user.password);

    logger.stepNumber(2);
    logger.step("Navegar a la pagina de Home");
    commonPageMethods.clickOnHome();

    logger.stepNumber(3);
    logger.step("seleccionar productos");
    homeMethods.clickOnMonitorsOption();
    logger.verification("verificar q el prod se encuentra");
    homeMethods.verifyProductDisplay("Apple monitor 24");
    homeMethods.verifyProductDisplay("ASUS Full HD");
  });

  it("Agregar producto al carrito", () => {
    logger.stepNumber(1);
    logger.step("Iniicar sesion como usuario registrado");
    logger.subStep("Navegar a la app");
    commonPageMethods.navigateToDemoBlaze();
    logger.subStep("click on login page");
    commonPageMethods.clickOnLogIn();
    cy.wait(2000);
    loginMethods.login(user.username, user.password);

    logger.stepNumber(2);
    logger.step("Navegar a la pagina de Home");
    commonPageMethods.clickOnHome();

    logger.stepNumber(3);
    logger.step("seleccionar productos");
    homeMethods.clickOnMonitorsOption();

    logger.stepNumber(4);
    logger.step("Hacer click en un producto especifico");
    homeMethods.clickOnProductLink(product);

    logger.stepNumber(5);
    logger.verification("Verificar que se muestra la pagina de detalle");
    productDetailsMethods.verifyProductDetailsPage();

    logger.stepNumber(6);
    logger.step("add to cart");
    productDetailsMethods.clickOnAddToCartButton();

    logger.stepNumber(7);
    logger.verification("verificar");
    productDetailsMethods.verifyProductAdded();
    commonPageMethods.clickOnCart();
    cartMethods.verifyProductAdded(product);
  });

  it("Realizar una compra", () => {
    logger.stepNumber(1);
    logger.step("Iniicar sesion como usuario registrado");
    logger.subStep("Navegar a la app");
    commonPageMethods.navigateToDemoBlaze();
    logger.subStep("click on login page");
    commonPageMethods.clickOnLogIn();
    cy.wait(2000);
    loginMethods.login(user.username, user.password);

    logger.stepNumber(2);
    logger.step("Navegar a la pagina de Home");
    commonPageMethods.clickOnHome();

    logger.stepNumber(3);
    logger.step("seleccionar productos");
    homeMethods.clickOnMonitorsOption();

    logger.stepNumber(4);
    logger.step("Hacer click en un producto especifico");
    homeMethods.clickOnProductLink(product);

    logger.stepNumber(5);
    logger.verification("Verificar que se muestra la pagina de detalle");
    productDetailsMethods.verifyProductDetailsPage();

    logger.stepNumber(6);
    logger.step("add to cart");
    productDetailsMethods.clickOnAddToCartButton();

    logger.stepNumber(7);
    logger.verification("verificar");
    productDetailsMethods.verifyProductAdded();
    commonPageMethods.clickOnCart();
    cartMethods.verifyProductAdded(product);

    logger.stepNumber(8);
    logger.step("Hacer click en la opcion cart");
    commonPageMethods.clickOnCart();

    logger.stepNumber(9);
    logger.step("verificar q se muestre la pagina de carrito de compras");
    cartMethods.verifyCartUrl();

    logger.stepNumber(10);
    logger.step("hacer click en place order");
    cartMethods.clickOnPlaceOrder();

    logger.stepNumber(11);
    logger.step("cpmpletar formulario");
    placeOrderMethods.insertAllInformation(placeOrderData.testDate);

    logger.stepNumber(12);
    logger.step("click on purchase");
    placeOrderMethods.clickOnPurchaseButton();
    cy.wait(2000);

    logger.stepNumber(13);
    logger.step("Debe mostrar mensjae de confirmacion y volver al home");
    thankyouMethods.verifyGreenCheck();
    cy.wait(2000);
    thankyouMethods.clickOnButtons();
    homeMethods.verifyHomePage();
  });
});
