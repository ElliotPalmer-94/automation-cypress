const pageUrls = require('../../page_urls/urls');
const entryAddPageElements = require('../../page_elements/entry-add');

describe('Entry Add - Model', () => {

    beforeEach(() => {
        cy.visit(pageUrls.entryAdd);
    });

    it('Close model - Click', () => {

        cy.get(entryAddPageElements.modelCloseButton)
            .click();

        cy.get(entryAddPageElements.model)
            .should('not.be.visible');
    });

    it('Close model - Mouse click outside model', () => {


        //NEED TO ADD


    });
});