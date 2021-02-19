describe('Cart Test', () => {
    it('Insert product into a cart successfully', () => {
        cy.request('POST',
                   '/cart', 
                   {addend : 1,
                    cartId : null,
                    kind: 'Product',
                    newCart : true,
                    productId: '59161c71cb7257001150eb3e',
                    refPage : 'Detail'
                    })
        .then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})