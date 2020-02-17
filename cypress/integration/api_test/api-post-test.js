describe('API - POST', () => {
    it('Login via POST request', () => {
        cy.request({
            method: 'POST',
            url: 'authenticate', // baseUrl is prepended to url
            followRedirect: false, // turn off following redirects
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!'
            }
        }).then((resp) => {
            expect(resp.redirectedToUrl).to.eq('http://the-internet.herokuapp.com/secure')
        });
    });
});

