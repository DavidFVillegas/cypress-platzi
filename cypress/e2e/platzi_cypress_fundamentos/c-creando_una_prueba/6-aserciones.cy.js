// https://docs.cypress.io/guides/references/assertions

describe('Aserciones', () => {

    // Manera de superar un error de Cypress
    // https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    // Primera forma: con Cypress
    it('Aserciones, ejercicio 1', () => {
        cy.visit('/automation-practice-form')

        // Asercion de un texto
        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    // Segunda forma: con JQuery
    it('Aserciones, ejercicio 2', () => {
        cy.visit('/automation-practice-form')

        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')
        })
    })

    // Tercera forma
    it('Aserciones, ejercicio 3', () => {
        cy.visit('/automation-practice-form')

        cy.get('#firstName').then((element) => {
            assert.equal(element.attr('placeholder'), 'First Name')
        })
    })
})
