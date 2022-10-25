/// <reference types="cypress" />
var faker = require('faker-br');
import CheckoutPage from '../support/page_objects/checkout.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let empresaFaker = faker.company.companyName()
    let enderecoFaker = faker.address.streetAddress()
    let complementoFaker = faker.address.streetSuffix()
    let cidadeFaker = faker.address.city()
    let estadoFaker = faker.address.state()
    let telefoneFaker = faker.phone.phoneNumber()
    let emailFaker = faker.internet.email()

    it('Deve adicionar os produtos ao carrinho, realizar o ckeckout e finalizar a compra', () => {

        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XL', 'Green', 1)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Arcadio Gym Short', '34', 'Red', 1)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Argus All-Weather Tank', 'L', 'Gray', 1)
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Atlas Fitness Tank', 'XL', 'Blue', 1)
        cy.get('.woocommerce-message > .button').click()

        cy.get('.checkout-button').click()

        CheckoutPage.editarDadosCheckout(nomeFaker, sobrenomeFaker, empresaFaker, 'Brasil', enderecoFaker, complementoFaker, cidadeFaker, estadoFaker, '01000-100', telefoneFaker, emailFaker)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
});