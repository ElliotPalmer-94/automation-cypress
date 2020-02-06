const pageUrls = require('../page-urls/urls');
const windowsPageElements = require('../page-elements/windows');

//Writing test when dealing with mutiple window mandles as this cannot be handled within cypress.io 
//So other creative ways of testing/checking href linlks with "_traget"

describe('Window - Opening new window tab', () => {

    beforeEach(() => {
        cy.visit(pageUrls.windows);
    });

    it('Remove target att', () => {

        cy.get(windowsPageElements.clickHereButton)
            .invoke('removeAttr', 'target')
            .click();

        cy.url()
            .should('eq', 'http://the-internet.herokuapp.com/windows/new');
    });

    it('Check href', () => {

        cy.get(windowsPageElements.clickHereButton)
            .should('have.attr', 'href')
            .and('eq', '/windows/new');
    });

    it('Check request', () => {

        cy.get(windowsPageElements.clickHereButton).then((url) => {
            const href = url.prop('href')

            cy.request(href)
                .its('body')
                .should('contain', 'New Window');
        });
    });
});