var array = ['entry_ad', 'windows', 'javascript_alerts', 'dropdown', 'tables', 'dynamic_controls'];

//Just messing around with expecting status 200
describe('API - Check HTTP Status', () => {
    array.forEach((url) => {
        it('Retrun 200', () => {
            cy.request(url).should((response) => {
                expect(response.status).equal(200);
            });
        });
    });
});