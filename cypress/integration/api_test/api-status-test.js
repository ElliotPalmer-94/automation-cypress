var array = ['entry_ad', 'windows', 'javascript_alerts', 'dropdown', 'tables', 'dynamic_controls'];

//Just messing around with expecting status 200
describe('API - Check HTTP Status', () => {
    it('Retrun 200', () => {

        var i = 0

        for (i; i < array.length; i++) {
            cy.request(array[i]).should((response) => {
                expect(response.status).equal(200);
            });
        }
    });
});