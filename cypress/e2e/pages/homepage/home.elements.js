export class homeElements{
    static get categoriesMenu(){
        return{
           get phone(){
            return cy.contains('a', 'Phones')
           },
           get laptop(){
            return cy.contains('a', 'Laptops')
           },
           get monitor(){
            return cy.contains('a', 'Monitors')
           }

    }
}
    static  product(productName){
        return cy.contains('a', productName)
    }


}