const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Configuracion de la pantalla de Cypress
    "viewportWidth": 1920,
    "viewportHeight": 1080,

    // Definiendo una URL base para las pruebas
    "baseUrl": "https://demoqa.com",

    // Esto permite que la base url se comparta en todos los it de una prueba
    // https://platzi.com/new-home/clases/3075-cypress-ui/49440-tipos-de-localizadores/
    testIsolation: false,

    // Excluir los archivos que no se quieren ejecutar
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
});
