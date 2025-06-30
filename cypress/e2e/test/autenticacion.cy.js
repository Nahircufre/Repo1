import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { loginMethods } from "../pages/login/login.methods";
import { logger } from "../util/logger";

xdescribe(commonPageData.testSuites.autenticacion, () => {
  it("Inicio de sesion valido", () => {
    logger.stepNumber(1);
    logger.step("Navgera a la pagina de inicio");
    commonPageMethods.navigateToDemoBlaze();

    logger.stepNumber(2);
    logger.step("hacer click en log in");
    commonPageMethods.clickOnLogIn();

    logger.stepNumber(3);
    logger.step("Ingresar nombre de usuario y contra validos");
    loginMethods.insertUsername(LoginData.validCredentials.username);
    loginMethods.insertPassword(LoginData.validCredentials.password);

    logger.stepNumber(4);
    logger.step("Hacer click en login button");
    loginMethods.clickOnLoginButton();
    logger.verification(
      "verificar q el usuario se dirige a la pagina de inicio"
    );
    commonPageMethods.verifySignedUser(LoginData.validCredentials.username);
  });
});
