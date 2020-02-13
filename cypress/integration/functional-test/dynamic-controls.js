const pageUrls = require('../../page_urls/urls');
const dynamicControlsPageElements = require('../../page_elements/dynamic-controls');

describe('Dynamic Controls', () => {

    beforeEach(() => {
        cy.visit(pageUrls.dynamicControls);
    });

    it('Remove Checkbox', () => {

        cy.get(dynamicControlsPageElements.checkboxButton)
            .click()

        cy.get(dynamicControlsPageElements.checkboxButton)
            .should('contain', 'Add');

        cy.get(dynamicControlsPageElements.checkbox)
            .should('not.be.visible');

    });

    it('Add Checkbox', () => {

        cy.get(dynamicControlsPageElements.checkboxButton)
            .click()

        cy.get(dynamicControlsPageElements.checkboxButton)
            .should('contain', 'Add');

        cy.get(dynamicControlsPageElements.checkboxButton)
            .click()

        cy.get(dynamicControlsPageElements.checkbox)
            .should('be.visible');

    });

    it('Enable input field', () => {

        cy.get(dynamicControlsPageElements.inputFieldButton)
            .click();

        cy.get(dynamicControlsPageElements.inputFieldButton)
            .should('contain', 'Disable');

        cy.get(dynamicControlsPageElements.inputField)
            .should('be.enabled');

    });

    //By Default the field is disabled
    it('Disable input field', () => {

        cy.get(dynamicControlsPageElements.inputFieldButton)
            .should('contain', 'Enable');

        cy.get(dynamicControlsPageElements.inputField)
            .should('be.disabled');

    });
});