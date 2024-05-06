// https://docs.cypress.io/api/commands/invoke

` IMPORTANTE: Utilizamos function() {} para poder utilizar el 'this' y poder acceder a las variables globales `

describe('Extraer informacion y hacer validaciones', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Extraer informacion y hacer validaciones', function () {
        cy.visit('/automation-practice-form')

        cy.get('#firstName').as('name') // Aqui definimos un alias para no estar hardcodeando #firstName = name = @name
        cy.get('@name').type('David')

        // Pero como podemos extraer el texto?
        cy.get('@name').then(($name) => {

            // Validacion en JQuery
            expect($name.val()).to.equal('David')
        })
        // Validacion en Cypress
        cy.get('@name').invoke('val').should('equal', 'David')

        // 1era Variable global llamada 'primerNombre'
        cy.get('@name').invoke('val').as('primerNombre')
    })

    it('Utilizando Variables Globales prueba 1', function () {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#lastName').type('Villegas')

        // 2da Variable global llamada 'primerApellido'
        cy.get('#lastName').invoke('val').as('primerApellido')
        cy.get('#firstName').type(this.primerNombre)
    })

    it('Utilizando Variables Globales prueba 2', function () {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#lastName').type(this.primerApellido)
    })
})
