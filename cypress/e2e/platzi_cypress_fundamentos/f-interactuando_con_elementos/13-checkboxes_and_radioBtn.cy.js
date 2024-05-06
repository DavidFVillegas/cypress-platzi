describe('Checkboxes y radio botones', ()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    // 1era forma de hacerlo: No es la manera ideal por que no se esta replicando el comportamiento de un usuario
    it('Checkboxes y radio botones', ()=> {
        cy.visit('/automation-practice-form')
        // cy.get('#gender-radio-1').click()
        cy.get('#gender-radio-1').click({force: true}) // Se forza el click en este caso
    })

    // 2da forma de hacerlo: No es la manera ideal por que no se esta replicando el comportamiento de un usuario
    it('Checkboxes y radio botones', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('#gender-radio-1').check({force: true})
    })

    // 3ra forma: Recreando el comportamieto de un usuario, vamos al elemento y damos click
    it('Checkboxes y radio botones', ()=> {
        cy.visit('/automation-practice-form')
        cy.get('label[for="gender-radio-1"]').click() // Seleccionando el btn de radio con un click
    })

    // Practica con Checkboxes
    it('Checkboxes y radio botones', ()=> {
        cy.visit('/automation-practice-form')
        // Aqui encontramos que el Id esta envuelto por un label y por eso falla la prueba y tenemos que forzar
        // cy.get('#hobbies-checkbox-1').click({force: true})
        cy.get('#hobbies-checkbox-1').check({force: true}) // Seleccionando el checkbox
        cy.get('#hobbies-checkbox-1').uncheck({force: true}) // Desseleccionando el checkbox
    })
})
