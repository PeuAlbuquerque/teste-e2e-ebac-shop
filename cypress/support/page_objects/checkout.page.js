class CheckoutPage {
    
    editarDadosCheckout(nome, sobrenome, empresa, pais, endereco, complemento, cidade, estado, cep, telefone, email){
        //ações do método
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais +'{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(complemento)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').type(estado + '{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)

        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new CheckoutPage()