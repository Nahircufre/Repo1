import { commonPageData } from "../pages/common-page/common-page.data";
import { commonPageMethods } from "../pages/common-page/common-page.methods";
import { signupMethods } from "../pages/sign.up/signup.methods";
import { logger } from "../util/logger";
const user = commonPageMethods.generateRandomString();
const password = commonPageMethods.generateRandomString(7);

describe(commonPageData.testSuites.registroYAutenticacion, () => {
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
});

// Paso 1: Navegar a la página de inicio.
// Paso 2: Hacer clic en "Sign up" en la barra de navegación.
// Paso 3: Completar todos los campos obligatorios con información válida.
// Paso 4: Hacer clic en "Sign up" para registrar el usuario.
// Paso 5: Verificar que se redirige al usuario a la página de inicio de sesión.
