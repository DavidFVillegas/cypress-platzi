describe('Esparando por elementos', () => {

    beforeEach(() => {
        cy.visit('https://platzi.com/')
    })

    it('Esperar por un tiempo definido', () => {
        // Esperar 5 segundos: Este comando no es convencional, tienen que ser casos especiales
        cy.wait(5000)
    })

    it('Esperar por un elemento', () => {
        cy.get('#courses-search-label', {timeout:6000})
    })

    it('Esperar por un elemento y hacer una asercion', () => {
        cy.get('#courses-search-label', {timeout:6000}).should('be.visible')
    })
})

// Como podemos deshabilitar el retryde cypress
describe('Esparando por elementos', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // Sin esperar
    it('Deshabilitar el retry', () => {
        // Con el timeout en cero, evitamos que cypress espere por el elemento
        cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5', {timeout:0})
    })
})
