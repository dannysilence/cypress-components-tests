const R = () => Cypress.mocha.getRunner();

describe('Repoter Functionality', function() {
    context(' in positive flows', { env: { allowedAt: ['test'] }}, function() {

        it(' should pass 1', { env: { testKey: 'PLAT-12345' }}, function() {
            
            let x = R();

        });

        it(' should pass 2', { env: { testKey: 'PLAT-12345' }}, function() {
            
        });

    });

    context(' bailing fast', function() {
        beforeEach(function() {
            cy.wrap(3).should('be.above', 10);
        });

        it(' should fail', { env: { testKey: '' }}, function() {
            
        });

        it(' should skipped 1', { env: { testKey: '' }}, function() {
            
        });

        it(' should skipped 2', { env: { testKey: '' }}, function() {
            
        });
        afterEach(()=>{
            debugger
        })
    })
    afterEach(()=>{
        debugger
    })
});