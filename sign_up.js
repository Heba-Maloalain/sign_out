///<reference types ="Cypress" />
describe('first test', () => {
    it('this is test for sign up *-*', () => {
        let firstName=["heba","eslam","jafer"]
        let firstRandomNum= Math.floor(Math.random()*firstName.length)
        let lastName=["alomari","maloalain","shreem","bahlool"]
        let lastRandomNum=Math.floor(Math.random()*lastName.length)
        let RandomNumForEmail=Math.floor(Math.random()*(50000)).toString()
              
      
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
cy.get("#firstname").type(firstName[firstRandomNum])
cy.get("#lastname").type(lastName[lastRandomNum])
cy.get("#email_address").type(firstName[firstRandomNum]+"."+lastName[lastRandomNum]+RandomNumForEmail+"@gmail.com")
cy.get('#password').type("ASDasd!@#")
cy.get('#password-confirmation').type("ASDasd!@#")
cy.get("button[title='Create an Account']").click()


});
});