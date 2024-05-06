describe('Inputs de Texto', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Input type text',() => {
        cy.visit('/automation-practice-form')

        // Utilizamos type para poder escribir en el input
        cy.get('#firstName').type('David')
        cy.get('#lastName').type('Villegas')

        cy.get('#firstName').type('Daviddddddd')

        // Como podemos borrar el contenido del input
        // Primera forma
        cy.get('#firstName').type('{selectall}{backspace}').type('Andres')
        // Segunda forma
        cy.get('#firstName').clear().type('Felipe')

    })
})

/*
{backspace} Borra el personaje a la izquierda del cursor.
{del} Borra el personaje a la derecha del cursor.
{downarrow} Mueve el cursor hacia abajo.
{end}	Mueve el cursor al final de la línea.
{enter} Teclea la tecla Intro.
{esc}	Teclea la tecla Escape.
{home} Mueve el cursor al principio de la línea.
{insert} Inserta un personaje a la derecha del cursor.
{leftarrow} Mueve el cursor a la izquierda.
{movetoend} Desplaza el cursor al final del elemento mecanizable.
{movetostart} Desplaza el cursor al inicio del elemento mecanizable.
{pagedown} Se desplaza hacia abajo.
{pageup}  Se desplaza hacia arriba.
{rightarrow} Mueve el cursor a la derecha.
{selectall} Selecciona todo el texto creando un selection range.
{uparrow}	Mueve el cursor hacia arriba.
*/