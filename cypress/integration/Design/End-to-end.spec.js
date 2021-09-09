/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Customer Service - CONTACT US form end to end testing', () =>{

beforeEach(()=>{
cy.visit('http://automationpractice.com')
})

it('Testing the whole workflow', () =>{
    cy.visit('http://automationpractice.com/index.php?controller=contact')

    
    cy.get('#id_contact').select('Webmaster')
    cy.contains('If a technical problem occurs on this website')
    cy.get('#id_contact').select('Customer service')
    cy.contains('For any question about a product, an order')
    cy.get('#email').type('testing@gmail.com')
    cy.get('#id_order').type('12345')
    const filepath = 'Testing_File/testing_file_upload.jpg'
    cy.get('#fileUpload').attachFile(filepath)
    cy.get('#uniform-fileUpload').contains('testing_file_upload.jpg')
    cy.get('#message').type('This is a test of a very long text inside the message section')
    cy.get('#submitMessage > span').click()
    cy.contains('Your message has been successfully sent to our team.')

})
})