/// <reference types="cypress"/>

import { Dropdown, DropdownOptions } from 'cypress-components/dist/components';
import { PartialObject } from 'cypress/types/lodash';

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            dropdown(locator?: string, options?: PartialObject<DropdownOptions>): Chainable<Dropdown>;
        }
    }
}  

 
// cypress/support/index.ts
Cypress.Commands.add<'dropdown', 'optional'>(
    'dropdown',
    { prevSubject: 'optional' },
    (subject?:JQuery<HTMLElement>, locator = '', options?) => {
        if(subject) {
            const x = new Dropdown(subject.get()[0]);
            return cy.wrap(x);
        } 

        return cy.get(locator).dropdown();
    }
  )
  