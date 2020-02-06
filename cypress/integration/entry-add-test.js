const pageUrls = require('../page-urls/urls');
const entryAddPageElements = require('../page-elements/entry-add');

describe('Entry Add - Model', () => {

    beforeEach(() => {
        cy.visit(pageUrls.entryAdd);
    });

    it('Able to close model', () => {

        cy.get(entryAddPageElements.modelCloseButton)
            .click();

        cy.get(entryAddPageElements.model)
            .should('not.be.visible');
    });

    it('Able to open model', () => {

        cy.get(entryAddPageElements.modelCloseButton)
            .click();

        cy.get(entryAddPageElements.clickHereLink)
            .click();

        cy.reload(true);

        cy.get(entryAddPageElements.model)
            .should('be.visible');

    });
});