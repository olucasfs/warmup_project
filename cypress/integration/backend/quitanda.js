/// <reference types="cypress" />

describe('Subscrition Test', () => {
    it('Positive scenario', () => {
        cy.request({
                url: '/quitanda', 
                qs: {
                    mobile: 'false', 
                    tablet: 'false', 
                    desktop: 'true', 
                    client: 'false', 
                    system: 'false', 
                    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36', 
                    snowplowDomainUserId: '8140b511-8f92-47f3-a4ac-06cda1d5349e'}})
        .then((response) => {
            expect(response.status).to.eq(200);
            // expect(response.body).to.be.empty
        })
    })
})