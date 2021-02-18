/// <reference types="cypress" />

describe('Subscrition Test', () => {
    it('Positive scenario', () => {
        cy.request('GET', 'subscription')
        .then((response) => {
            console.log(response);
            expect(response.status).to.eq(200);
            // expect(response.body).to.be.empty
        })
    })
})