const pageUrls = require('../../page_urls/urls');
const tablesPageElements = require('../../page_elements/tables');

describe('Tables - Filter data in tables', () => {

    beforeEach(() => {
        cy.visit(pageUrls.tables);
    });

    it('Table 1 - Filter row 4', () => {

        cy.get(tablesPageElements.table1Row4).should((row) => {
            const text = row.text().replace((/  |\r\n|\n|\r/gm), "").trim();
            expect(text).equal('ConwayTimtconway@earthlink.net$50.00http://www.timconway.comeditdelete');
        });
    });

    it('Table 1 - Filter column 4', () => {

        var itemArray = ['$50.00', '$51.00', '$100.00', '$50.00',]

        //Get each elemets text and assert this with itemArray values
        cy.get(tablesPageElements.table1Column4).each((ele, index, list) => {

            cy.log('Element Found: ', ele);
            cy.log('Text Found: ', itemArray[index]);

            cy.get(ele)
                .should('have.text', itemArray[index]);

        });
    });
});