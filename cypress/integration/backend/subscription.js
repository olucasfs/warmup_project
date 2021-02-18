/// <reference types="cypress" />

describe('Search Subscrition successfully', () => {
    it('Positive scenario', () => {
        cy.request('GET', 'subscription')
        .then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})