const pageUrls = require('../../page_urls/urls');
const alertsPageElements = require('../../page_elements/alerts');

//Writing test when dealing with mutiple JS alerts

describe('JavaScript Alerts', () => {

    beforeEach(() => {
        cy.visit(pageUrls.alerts);
    });

    it('JavaScript - Alert', () => {

        cy.get('button')
            .contains('Click for JS Alert')
            .click();

        cy.get(alertsPageElements.results)
            .contains('You successfuly clicked an alert');
    });

    it('JavaScript - Confirm', () => {

        cy.get('button')
            .contains('Click for JS Confirm')
            .click();

        cy.get(alertsPageElements.results)
            .contains('You clicked: Ok');
    });

    it('JavaScript - Prompt', () => {

        cy.window().then(win => {
            cy.get('button')
                .contains('Click for JS Prompt')
                .click();

            cy.stub(win, 'prompt')
                .returns('This is a test');
        });

        cy.get(alertsPageElements.results)
            .contains('You entered: This is a test');
    });
});