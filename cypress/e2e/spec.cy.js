import { loginMethods } from "./pages/login/login.methods"
import { homeMethods } from "./pages/homepage/home.methods"
import { cartMethods } from "./pages/cart/cart.methods"


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/cart.html')
    //cy.get('a[data-target="#logInModal"]').click()
   // loginMethods.login('username','password')
   //homeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(20000)
    cartMethods.clickOnDeleteLink('Iphone 6 32gb')
    cy.wait(5000)
  })
})