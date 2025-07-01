export class commonPageElements {
  static get topMenu() {
    return {
      get home() {
        return cy.contains("a", "Home");
      },
      get contact() {
        return cy.contains("a", "Contact");
      },
      get aboutUs() {
        return cy.contains("a", "About us");
      },
      get cartMenu() {
        return cy.contains("a", "Cart");
      },
      get logIn() {
        return cy.get('a[data-target="#logInModal"]').should("be.visible");
      },
      get signUp() {
        return cy.get('a[data-target="#signInModal"]');
      },
      get logout() {
        return cy.contains("a", "Log out");
      },
    };
  }
  static get signedUser() {
    return cy.get("a#nameofuser", { timeout: 8000 });
  }
}
