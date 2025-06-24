import { cartMethods } from "../pages/cart/cart.methods";
import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { homeMethods } from "../pages/homepage/home.methods";
import { LoginData } from "../pages/login/login.data";
import { loginMethods } from "../pages/login/login.methods";
import { productDetailsMethods } from "../pages/productdetails/product-details.methods";
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
});
