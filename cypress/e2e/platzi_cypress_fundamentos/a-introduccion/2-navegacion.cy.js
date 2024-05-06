describe('Navegación', () => {

    it('Navegar a nuestra primera página', () => {
        cy.visit('https://platzi.com/')
    })

    it('Recargar la página', () => {
        cy.reload()
    })

    it('Recargar la página de forma forzada', () => {
        cy.visit('https://www.google.com/')
        // Recargar la pagina sin cache
        cy.reload(true)
    })

    it('Navegar hacia atras', () => {
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=f977441fd745688c&source=hp&ei=cIczZqKqK__CkPIP8K-EkAQ&iflsig=ANes7DEAAAAAZjOVgCS4_-iO69KSxTkSCQwCjNwsNfhz&ved=0ahUKEwiiop6r_O6FAxV_IUQIHfAXAUIQ4dUDCBU&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyDhAuGIAEGLEDGNEDGMcBMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAESOYPUNUGWL4OcAF4AJABAJgBkAGgAaoGqgEDMC42uAEDyAEA-AEBmAIHoALdBqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgISEAAYAxjlAhjqAhgKGIwDGI8BwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQLhiABBixA5gDD5IHAzEuNqAHkTw&sclient=gws-wiz')
        cy.go('back')
    })

    it('Variación: Navegar hacia atras', () => {
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=f977441fd745688c&source=hp&ei=cIczZqKqK__CkPIP8K-EkAQ&iflsig=ANes7DEAAAAAZjOVgCS4_-iO69KSxTkSCQwCjNwsNfhz&ved=0ahUKEwiiop6r_O6FAxV_IUQIHfAXAUIQ4dUDCBU&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyDhAuGIAEGLEDGNEDGMcBMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAESOYPUNUGWL4OcAF4AJABAJgBkAGgAaoGqgEDMC42uAEDyAEA-AEBmAIHoALdBqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgISEAAYAxjlAhjqAhgKGIwDGI8BwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQLhiABBixA5gDD5IHAzEuNqAHkTw&sclient=gws-wiz')
        cy.go(-1)
    })

    it('Navegar hacia adelante', () => {
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=f977441fd745688c&source=hp&ei=cIczZqKqK__CkPIP8K-EkAQ&iflsig=ANes7DEAAAAAZjOVgCS4_-iO69KSxTkSCQwCjNwsNfhz&ved=0ahUKEwiiop6r_O6FAxV_IUQIHfAXAUIQ4dUDCBU&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyDhAuGIAEGLEDGNEDGMcBMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAESOYPUNUGWL4OcAF4AJABAJgBkAGgAaoGqgEDMC42uAEDyAEA-AEBmAIHoALdBqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgISEAAYAxjlAhjqAhgKGIwDGI8BwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQLhiABBixA5gDD5IHAzEuNqAHkTw&sclient=gws-wiz')
        cy.go('back')
        cy.go('forward')
    })

    it('Variación: Navegar hacia adelante', () => {
        cy.visit('https://www.google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=f977441fd745688c&source=hp&ei=cIczZqKqK__CkPIP8K-EkAQ&iflsig=ANes7DEAAAAAZjOVgCS4_-iO69KSxTkSCQwCjNwsNfhz&ved=0ahUKEwiiop6r_O6FAxV_IUQIHfAXAUIQ4dUDCBU&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyDhAuGIAEGLEDGNEDGMcBMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAESOYPUNUGWL4OcAF4AJABAJgBkAGgAaoGqgEDMC42uAEDyAEA-AEBmAIHoALdBqgCCsICEBAAGAMY5QIY6gIYjAMYjwHCAhAQLhgDGOUCGOoCGIwDGI8BwgISEAAYAxjlAhjqAhgKGIwDGI8BwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQLhiABBixA5gDD5IHAzEuNqAHkTw&sclient=gws-wiz')
        cy.go('back')
        cy.go(1)
    })
})
