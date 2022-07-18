describe('Table component', { env: { testReq: [''] }}, function() {
    beforeEach(function() {
        cy.visit('https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/iframe.html?selectedKind=Pagination&selectedStory=Basic%20Pagination%20Table');
    });

    context(' when working with cells', { env: { allowedAt: [''] }}, function() {
        context(' by columns number', { env: { allowedAt: [''] }}, function() {
            it(' should extract cell element', { env: { testKey: '' }}, function() {
                cy.table().getCell(0, 0).should($el => {
                    expect($el).to.exist;
                    expect($el).to.be.visible;
                    expect($el).to.be.instanceOf(HTMLElement);
                })
            });

            it(' should extract cell data', { env: { testKey: '' }}, function() {
                cy.table().getCell(0, 0).should($el => {
                    expect($el).to.be.instanceOf(String);
                    expect($el).to.eq('Product ID');
                })
            });
        });

        context(' by columns name', { env: { allowedAt: [''] }}, function() {
            it(' should extract cell element', { env: { testKey: '' }}, function() {
                cy.table().getCell(0, 'Product Name').should($el => {
                    expect($el).to.exist;
                    expect($el).to.be.visible;
                    expect($el).to.be.instanceOf(HTMLElement);
                })
            });

            it(' should extract cell data', { env: { testKey: '' }}, function() {
                cy.table().getCell(0, 'Product Name').should($el => {
                    expect($el).to.be.instanceOf(String);
                    expect($el).to.eq('Product Name');
                })
            });
        });
    });

    context(' when working with columns', { env: { allowedAt: [''] }}, function() {
        context(' by columns number', { env: { allowedAt: [''] }}, function() {
            
        });

        context(' by columns name', { env: { allowedAt: [''] }}, function() {
            
        });
    });

    context(' when working with filters', { env: { allowedAt: [''] }}, function() {
        
    });

    context(' when working with rows', { env: { allowedAt: [''] }}, function() {
        
    });

    context(' when working with pagings', { env: { allowedAt: [''] }}, function() {
        
    });

    context(' when working with sorting', { env: { allowedAt: [''] }}, function() {
        context(' by columns number', { env: { allowedAt: [''] }}, function() {
            
        });

        context(' by columns name', { env: { allowedAt: [''] }}, function() {
            
        });
    });

    context(' working with expandable rows', { env: { allowedAt: [''] }}, function() {
        
    });
});