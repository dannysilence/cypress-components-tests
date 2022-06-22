describe('Components class', { env: { testReq: [''] }}, function() {

    beforeEach(function() {
        cy.visit('http://localhost:1234/');
    });

    context(' for simple <H1> element', { env: { allowedAt: [''] }}, function() {

        it(' should be located by tag', { env: { testKey: '' }}, function() {
            cy.component('h1').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('Hello, World!');
            })        
        });

        it(' should take elements text properly', { env: { testKey: '' }}, function() {
            cy.component('h1').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('Hello, World!');
            })        
        });

        it(' should also take elements color properly', { env: { testKey: '' }}, function() {
            cy.component('h1').should(($el) => {
                cy.log($el.Color);

                expect($el.Color).to.eq('rgba(0, 0, 0, 0)');
            })        
        });
    });

    context(' for simple <INPUT> element', { env: { allowedAt: [''] }}, function() {

        it(' should be located by tag', { env: { testKey: '' }}, function() {
            cy.component('input#text1').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('');
            })        
        });

        it(' should take elements text properly', { env: { testKey: '' }}, function() {
            cy.get('#text1').type('Yes, it works.');

            cy.wait(1000);

            cy.component('input#text1').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('Yes, it works.');
            })        
        });

        it(' should set elements text via its Text property', { env: { testKey: '' }}, function() {
            cy.component('#text1').should('have.property', 'Text', '');
            cy.component('#text1').then($el => { $el.Text = 'Hello'; })
            cy.component('#text1').its('Text').should('eq', 'Hello');        
        });


        it(' should also set elements text via its setText method', { env: { testKey: '' }}, function() {
            cy.component('#text1').should('have.property', 'Text', '');
            cy.component('#text1').invoke('setText', 'World');
            cy.component('#text1').its('Text').should('eq', 'World');        
        });


        iskipt(' should also set elements text via type method', { env: { testKey: '' }}, function() {
            cy.component('#text1').should('have.property', 'Text', '');
            cy.component('#text1').invoke('type', 'World');
            cy.component('#text1').its('Text').should('eq', 'World');        
        });

        it(' should also take elements color properly', { env: { testKey: '' }}, function() {
            cy.component('input#text1').should(($el) => {
                cy.log($el.Color);

                expect($el.Color).to.eq('rgb(255, 255, 255)');
            })        
        });

        it(' should provides elements enabled properly', { env: { testKey: '' }}, function() {
            cy.component('input#text1').should(($el) => {
                cy.log('Element Enabled: ' + $el.Enabled);

                expect($el.Enabled).to.eq(true);
            })        
        });
    });

    context(' for disabled <INPUT> element', { env: { allowedAt: [''] }}, function() {

        it(' should be located by tag', { env: { testKey: '' }}, function() {
            cy.component('input#text2').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('');
            })        
        });

        it(' should take elements text properly', { env: { testKey: '' }}, function() {
            //cy.get('#text2').type('Yes, it works.');

            cy.component('input#text2').should(($el) => {
                cy.log($el.Text);

                expect($el.Text).to.eq('');
            })        
        });

        it(' should also take elements color properly', { env: { testKey: '' }}, function() {
            cy.component('input#text2').should(($el) => {
                cy.log($el.Color);

                expect($el.Color).to.eq('rgba(239, 239, 239, 0.3)');
            })        
        });

        it(' should provides elements enabled properly', { env: { testKey: '' }}, function() {
            cy.component('input#text2').should(($el) => {
                cy.log('Element Enabled: ' + $el.Enabled);

                expect($el.Enabled).to.eq(false);
            })        
        });

    });

});