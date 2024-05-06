describe('Encontrando Elementos', () => {

    // Manera de superar un error de Cypress
    // https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    // Contains
    it('Usando contains', () => {
        cy.visit('/automation-practice-form')
        cy.contains('Reading')
    })

    // Obtener de la barra lateral izquierda el texto Widgets
    it('Usando contains en barra lateral izquierda', () => {
        cy.visit('/automation-practice-form')
        cy.contains('.header-wrapper', 'Widgets')
    })


    // parent & parents + find()
    it('Usando parent', () => {
        cy.visit('/automation-practice-form')

        // Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()

        // 1era Forma: Obteniendo los elementos padres + label
        cy.get('input[placeholder="First Name"]').parents().find('label')
        // 2da Forma: Primero el form y luego el label (Padre y luego el hijo)
        cy.get('form').find('label')
    })
})
