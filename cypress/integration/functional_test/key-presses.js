const pageUrls = require('../../page_urls/urls');
const keyPressesPageElements = require('../../page_elements/key-presses');

var keys = ['A', 'B', 'C', 'D', 'E', 'F'];
var randomKey = keys[Math.floor(Math.random() * keys.length)];

describe('Key Presses', () => {

    beforeEach(() => {
        cy.visit(pageUrls.keysPresses);
    });

    it('Key Presses - Random Key Press', () => {

        cy.get(keyPressesPageElements.inputField)
            .type(randomKey)

        cy.get(keyPressesPageElements.inputResult)
            .should('contain', `You entered: ${randomKey}`)
    });
});