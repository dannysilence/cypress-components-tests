/// <reference types="cypress"/>

import { PartialObject } from 'cypress/types/lodash';
import { Component, ComponentOptions, Dropdown, DropdownOptions, Factory, Table, TableOptions } from '@dannysilence/cypress-components/dist/components';
import { METHODS } from 'cypress/types/cy-http';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            component(locator?: string, options?: PartialObject<ComponentOptions>): Chainable<Component<HTMLElement>>;
            dropdown(locator?: string, options?: PartialObject<DropdownOptions>): Chainable<Dropdown>;
            table(locator?: string, options?: PartialObject<TableOptions>): Chainable<Table>;
        }
    }
}  

Factory.registerCommands(Cypress);

beforeEach(function() {
    cy.intercept('GET', 'http://localhost:1234/', '<html><body><h1>Hello, World!</h1><div>It works?</div><div class="sample"><input id="text1" type="text"/></div><div class="sample disabled"><input id="text2" class="sample disabled" disabled/></div></body></html>'); 
});