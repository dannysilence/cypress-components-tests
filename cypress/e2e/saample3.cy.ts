describe('Dropdown Functionality', function() {
    
    context(' in positive flows', { env: { allowedAt: ['test'] }}, function() {

        it(' should work for tag', { env: { testKey: 'PLAT-12345' }}, function() {
            cy.visit('https://google.com/');
            
            cy.component('input').should((res)=>{
                'it works!'
            });
        });

        it(' should work for another tag', { env: { testKey: 'PLAT-12345' }}, function() {
            cy.visit('https://google.com/');

            cy.component('div').should((res)=>{
                'it works!'
            });
        });

    });

});