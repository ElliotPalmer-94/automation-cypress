const pageUrls = require('../../page_urls/urls');
const dropdownPageElements = require('../../page_elements/dropdown');

describe('Dropdown - Select dropdown options', () => {

    beforeEach(() => {
        cy.visit(pageUrls.dropdown);
    });

    it('Dropdown - Select option 1', () => {

        cy.get(dropdownPageElements.dropdown)
            .select('1')

        cy.get(dropdownPageElements.dropdown)
            .should('contain', 'Option 1');
    });

    it('Dropdown - Select option 2', () => {

        cy.get(dropdownPageElements.dropdown)
            .select('2')

        cy.get(dropdownPageElements.dropdown)
            .should('contain', 'Option 2');
    });
});