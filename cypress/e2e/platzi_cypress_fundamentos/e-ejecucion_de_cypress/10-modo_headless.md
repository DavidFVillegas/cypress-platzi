Podemos correr cypress con los siguientes scripts:

1. Correr con la GUI
"e2e": "cypress open --browser chrome --e2e",
 
2. Correr en modo headless todas las pruebas
"e2e:headless": "cypress run --browser chrome --headless --e2e",

3. Correr en modo headless una prueba en específico
"e2e:headless:spec": "cypress run --browser chrome --headless --spec cypress/e2e/platzi/b-elementos_and_localizadores/3-tiposDeLocalizadores.cy.js"

Estos scripts se especifican en el package.json y se ejecutan con "npm run"