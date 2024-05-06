// Hooks: son cosas que se ejecutan antes o después de cada prueba
// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks
// Tenemos: before, beforeEach, after, afterEach


describe('Hooks', () => {
    beforeEach(() => {
        cy.visit('/automation-practice-form') // Aqui siempre se va a ejecutar antes de cada prueba
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    // Primera forma: con Cypress
    it('Aserciones, ejercicio 1', () => {

        // Asercion de un texto
        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    // Segunda forma: con JQuery
    it('Aserciones, ejercicio 2', () => {

        cy.url().should('include', 'demoqa.com')

        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')
        })
    })

    // Tercera forma
    it('Aserciones, ejercicio 3', () => {

        cy.get('#firstName').then((element) => {
            assert.equal(element.attr('placeholder'), 'First Name')
        })
    })
})
