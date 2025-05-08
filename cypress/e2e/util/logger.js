export class logger{
    static stepNumber(number){
        const text = `step # ${number}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static step(description){
        const text = `step - ${description}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static verification(description){
        const text = `verification - ${description}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static subStep(description){
        const text = `subStep - ${description}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static subVerification(description){
        const text = `subVerification - ${description}`;
        cy.log(text);
        cy.allure().step(text);
    }

}