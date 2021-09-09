/// <reference types="cypress" />
    import 'cypress-file-upload';

describe('Customer Service - CONTACT US form', () =>{

beforeEach(()=>{
cy.visit('http://automationpractice.com')
})

it('User is able to open the Contact us page', () =>{
    cy.visit('http://automationpractice.com/index.php?controller=contact')
})
it('User is able to select a value in the Subject Heading dropdown',() =>{
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#id_contact').select('Webmaster')
    cy.contains('If a technical problem occurs on this website')
    cy.get('#id_contact').select('Customer service')
    cy.contains('For any question about a product, an order')

})
it('User is able to type a valid email address',()=> {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#email').type('testing@hotmail.com')

})
it('User is able to add a reference order',()=> {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#id_order').type('12345')
})
it('User is able to upload a file',()=> {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    const filepath = 'Testing_File/testing_file_upload.jpg'
    cy.get('#fileUpload').attachFile(filepath)
    cy.get('#uniform-fileUpload').contains('testing_file_upload.jpg')

})
it('Use is able to write a message',()=>{
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#message').type('This is a test of a very long text inside the message section')
})
it('User clicks Send buttom without sending any information',()=>{
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#submitMessage > span').click()
    cy.contains('Invalid email address.')

})

})