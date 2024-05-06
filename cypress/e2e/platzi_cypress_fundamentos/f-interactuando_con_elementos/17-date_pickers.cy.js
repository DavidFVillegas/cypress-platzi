describe("Date pickers", () => {
    cy.once('uncaught:exception', () => false)

    it('Interactuando con date pickers', () => {
		cy.visit('https://material.angular.io/components/datepicker/overview')
		cy.get('datepicker-overview-example')
			.find('label')
			.type('02/23/2024')
	})
});

