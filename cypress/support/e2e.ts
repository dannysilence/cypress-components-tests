/// <reference types="cypress"/>

import { PartialObject } from 'cypress/types/lodash';
import { Component, ComponentOptions, Dropdown, DropdownOptions, Factory, Table, TableOptions } from '@dannysilence/cypress-components/dist/components';

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