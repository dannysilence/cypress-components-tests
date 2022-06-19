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
