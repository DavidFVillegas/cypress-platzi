describe('Modals and dialogs', () => {
    cy.once('uncaught:exception', () => false)

    // Modales: Interactuar con modales es mas sencillo que con las alertas(popups)
    it('Interactuando con modales', function () {
        cy.once('uncaught:exception', () => false)
        cy.visit('/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
    })

    // Popups: alertas
    it('Interactuando con popups', function () {
        cy.once('uncaught:exception', () => false)
        cy.visit('/alerts') // Cypress acepta las alertas por defecto

        const stub = cy.stub()
        cy.on('window:confirm', stub)


        cy.get('#confirmButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })
        cy.get('#confirmResult').should('have.text', 'You selected Ok')
    })

    // Tool tips
    it('Interactuando con Tool tips', function () {
        cy.once('uncaught:exception', () => false)
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
    })
})

// Documentacion sobre Triggers: https://docs.cypress.io/api/commands/trigger