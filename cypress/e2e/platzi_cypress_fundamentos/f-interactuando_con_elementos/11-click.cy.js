// https://docs.cypress.io/api/commands/click#Actionability

describe('Click: Interactuando con los elementos', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    // Un solo click
    it('Click', () => {
        cy.visit('/buttons')
        // Aqui como el boton tiene un Id dinamico, debemos accededer a el de esta manera
        // Comienzan en 1 y no es en 0 (Tener esto en cuenta)
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('have.text', 'You have done a dynamic click')
    })

    // Doble click
    it('Doule click', () => {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('have.text', 'You have done a double click')
    })

    // Click derecho
    it('Click derecho', () => {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('have.text', 'You have done a right click')
    })

    // Click forzado: Se utiliza para botones que estan deshabilitados, no es muy recomendable por que no es una buena practica
    it('Force Click', () => {
        cy.visit('/dynamic-properties')
        // cy.get('enableAfter').click({timeout: 0})
        cy.get('#enableAfter').click({timeout: 0, force: true})
    })

    // Click en un lugar especifico
    it('Moviendo el mouse a un lugar especifico', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click('bottomLeft')
        cy.get('button').eq(3).parent().parent().click(5, 60)

    })
})
