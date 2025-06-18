import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { homeMethods } from "../pages/homepage/home.methods";
import { LoginData } from "../pages/login/login.data";
import { loginMethods } from "../pages/login/login.methods";
import { logger } from "../util/logger";

const user = LoginData.validCredentials;

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
});
