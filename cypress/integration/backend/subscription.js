describe('Subscription Test', () => {
    it('Search Subscrition successfully', () => {
        cy.request('GET', 'subscription')
        .then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})