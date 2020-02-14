// The a11y test have been excluded as these will always fail
// To run the test remove `ignoreTestFiles` from `cypress/plugins/index.js`

const pages = ['entry_ad', 'windows', 'javascript_alerts', 'dropdown', 'tables', 'dynamic_controls'];

describe('Accessibility Testing', () => {
    pages.forEach((page) => {
        it(`Return A11y for '${page}'`, () => {
            cy.visit(page);
            cy.injectAxe();
            cy.checkA11y();
        });
    });
});

