describe("Tables", () => {
    it("tables", function () {
        cy.visit("https://www.w3schools.com/html/html_tables.asp");

        // Obteniendo nombre de las columnas, utilizamos el each para recorrer los elementos
        cy.get("#customers")
            .find("th")
            .each((element) => {
                cy.log(element.text());
            });

        // Validando la primera columna
        cy.get("#customers")
            .find("th")
            .first()
            .invoke("text")
            .should("eq", "Company");

        // Validando la segunda columna
        cy.get("#customers")
            .find("th")
            .eq(1)
            .invoke("text")
            .should("eq", "Contact");

        // Validando la tercera columna
        cy.get("#customers")
            .find("th")
            .eq(2)
            .invoke("text")
            .should("eq", "Country");

        // Validando  informacion especifica de una fila(1era forma)
        cy.get("#customers").find("tr").should("have.length", 7);
        cy.get("#customers")
            .find("tr")
            .eq(1)
            .find("td")
            .eq(1)
            .invoke("text")
            .should("eq", "Maria Anders");

        // Validando informacion especifica de una fila(2da forma)
        cy.get("#customers").find("tr").should("have.length", 7);
        cy.get("#customers")
            .find("tr")
            .eq(1)
            .find("td")
            .eq(1)
            .then((element) => {
                const text = element.text();
                expect(text).to.eq("Maria Anders");
            });
    });
});

