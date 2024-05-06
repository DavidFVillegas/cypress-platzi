describe('Tipos de localizadores', () => {

    // Manera de superar un error de Cypress
    // https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    // Obtener todos los inputs
    it('Obtenerlo por medio de un tag', () => {
        cy.visit('/automation-practice-form')
        // Obtner los inputs
        cy.get('input')
    })

    // Obtener un input
    it('Obtenerlo por medio de un atributo', () => {
        cy.visit('/automation-practice-form')
        // Obtner los inputs
        cy.get('[placeholder="First Name"]')
    })

    it('Obtenerlo por medio de un atributo y un tag', () => {
        cy.visit('/automation-practice-form')
        // Obtner los inputs
        cy.get('input[placeholder="First Name"]') // Quiero que me obtengas un input donde el ploaceholder sea First Name
    })

    // Obtener un input por medio de un id utilizando la "mira" de Cypress
    it('Obtener un input por medio de un id', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName')
    })

    // Obtener un input por medio de una clase (No es tan preciso por que la clase puede ser compartida por muchos elementos)
    it('Obtener un input por medio de una clase', () => {
        cy.visit('/automation-practice-form')
        cy.get('.mr-sm-2.form-control')
    })
})
