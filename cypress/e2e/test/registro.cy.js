import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { signupMethods } from "../pages/sign.up/signup.methods";
import { logger } from "../util/logger";
const user = commonPageMethods.generateRandomString();
const password = commonPageMethods.generateRandomString(7);
const existingUser = "random01";
const existingPassword = LoginData.validCredentials.username;

describe(commonPageData.testSuites.registro, () => {
  it("Registro de usuario valido", () => {
    logger.stepNumber(1);
    logger.step("Navegar a la página de inicio.");
    commonPageMethods.navigateToDemoBlaze();

    logger.stepNumber(2);
    logger.step('Hacer clic en "Sign up" en la barra de navegación');
    commonPageMethods.clickOnSignUp();

    logger.stepNumber(3);
    logger.step(
      "Completar todos los campos obligatorios con información válida"
    );
    signupMethods.insertUsername(user);
    signupMethods.insertPassword(password);

    logger.stepNumber(4);
    logger.step('Hacer clic en "Sign up" para registrar el usuario');
    signupMethods.clickOnSingupButton();
    logger.verification(
      "Verificar que se redirige al usuario a la página de inicio de sesión"
    );
    signupMethods.verifySignUpSuccessfull();
  });

  it("Registro de usuario invalido", () => {
    logger.stepNumber(1);
    logger.step("Navegar a la página de inicio.");
    commonPageMethods.navigateToDemoBlaze();

    logger.stepNumber(2);
    logger.step('Hacer clic en "Sign up" en la barra de navegación');
    commonPageMethods.clickOnSignUp();

    logger.stepNumber(3);
    logger.step(
      "Completar todos los campos obligatorios con información inválida"
    );
    signupMethods.insertUsername(existingUser);
    signupMethods.insertPassword(existingPassword);

    logger.stepNumber(4);
    logger.step('Hacer clic en "Sign up" para registrar el usuario');
    signupMethods.clickOnSingupButton();
    logger.verification("Verificar que se el usuario no se puede registrar");
    signupMethods.verifySignUpUnsuccessful();
  });
});
