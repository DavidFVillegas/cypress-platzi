describe('Debbugear: Guardando Elementos', () => {

    // Manera de superar un error de Cypress
    // https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Repeticion en el codigo', () => {
        cy.visit('/automation-practice-form')

        // Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()

        // 1era Forma: Obteniendo los elementos padres + label
        cy.get('input[placeholder="First Name"]').parents().find('label')
        // 2da Forma: Primero el form y luego el label (Padre y luego el hijo)
        cy.get('form').find('label')
    })

    // Evitar repetir codigo
    it('Evitar repeticion de codigo', () => {
        cy.visit('/automation-practice-form')

        cy.get('input[placeholder="First Name"]').parents('form').then((form)=>{

            // Este es un elemento de JQuery no de Cypress
            const inputs = form.find('input')
            const divs = form.find('div')
            const labels = form.find('label')

            // Aserciones con JQuery
            expect(inputs.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

            // Aserciones con Cypress
            cy.wrap(inputs).should('have.length', 15)
            cy.wrap(divs).should('have.length', 70)
            cy.wrap(labels).should('have.length', 16)

            console.log('soy la longitud', inputs.length)

            // El debugger solo se ejecuta cuando la consola este abierta
            // debugger

            // Tambien podemos pausar la prueba con cy.pause()

        })
    })
})
