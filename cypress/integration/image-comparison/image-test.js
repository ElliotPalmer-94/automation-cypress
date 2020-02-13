const pages = ['entry_ad', 'windows', 'javascript_alerts', 'dropdown', 'tables', 'dynamic_controls'];

describe('Visual regression tests', () => {
    pages.forEach((page) => {
        it(`Baseline screenshot '${page}'`, () => {
            cy.visit(page);
            cy.matchImageSnapshot()
        });
    });
});

