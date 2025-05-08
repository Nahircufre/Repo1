import { loginMethods } from "./pages/login/login.methods";
import { homeMethods } from "./pages/homepage/home.methods";
import { cartMethods } from "./pages/cart/cart.methods";
import { logger } from "./util/logger";

describe("template spec", () => {
  it("passes", () => {
    const usuario = "random01";
    const contrasena = "random01";
    logger.stepNumber(1);
    logger.step("navegar a demoblaze page");
    cy.visit("https://www.demoblaze.com/index.html");

    logger.stepNumber(2);
    logger.step("click on link loggin");
    cy.get('a[data-target="#logInModal"]').click();

    logger.stepNumber(3);
    logger.step(`loguearse con "${usuario}/${contrasena}"`);
    loginMethods.login(usuario, contrasena);
    logger.verification(`el hoempage should show"welcome ${usuario}" text`);
    cy.get("a#nameofuser").should("contain.text", usuario);
  });
});
