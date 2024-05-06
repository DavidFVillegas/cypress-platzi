describe('Listas y DropDowns', () => {
    cy.once('uncaught:exception', () => false)

    // Cuando el dropdown es estático
    it('Interactuando con los dropdowns', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')

        // Cuenta desde indice 0
        // en selects puedes seleccionar por indice, value o texto
        cy.get('select').select(2)

        cy.get('select').select('opel').should('have.value', 'opel')

        cy.get('select').select('Opel').should('have.value', 'opel')
    })

    // Cuando el dropdown es dinámico
    it('Interactuando con los dropdowns', function() {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox')
            .children()
            .contains("Red")
            .click()
    })

    it('Select Dynamic', function () {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-4-input').click().clear().clear()
        cy.get('#react-select-4-input').type('Orange{enter}')
    })
})
