describe('Sample Feature', function() {
    context(' in positive cases', { env: { allowedAt: [''] }}, function() {
        it(' should simply work', { env: { testKey: 'PLAT-12345' }}, function() {
            cy.log('Hello, World');
        });
        
        it(' should always simply work!', { env: { testKey: 'PLAT-12346' }}, function() {
            cy.log('Bye, World');
        });
    }); 

    context(' talking about Cypress object itself', { env: { allowedAt: ['any'] }}, function() {
        it(' should allow to use instanceOf chains', { env: { testKey: 'PLAT-1234' }}, function() {
            expect(Cypress.version).to.be.a('string');
        });
    });
});