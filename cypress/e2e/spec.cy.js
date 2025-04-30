import { loginMethods } from "./pages/login/login.methods"
import { homeMethods } from "./pages/homepage/home.methods"
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    //cy.get('a[data-target="#logInModal"]').click()
   // loginMethods.login('username','password')
   homeMethods.clickOnProductLink('Iphone 6 32gb')
    cy.wait(5000)
  })
})