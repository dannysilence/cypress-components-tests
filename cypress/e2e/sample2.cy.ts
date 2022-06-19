describe('Sample Another Functionality', { env: { testReq: ['PLAT-123'] }}, function() {

    context(' in positive flows', { env: { allowedAt: ['test'] }}, function() {

        it(' should work', { env: { testKey: 'PLAT-12345' }}, function() {
            cy.log('it works!');
        });

    });
    
});