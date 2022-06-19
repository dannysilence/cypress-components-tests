/// <reference types="cypress"/>
/// <reference path="cypress/support/e2e.ts"/>

import { defineConfig } from 'cypress'
import { PartialObject, stubObject } from 'cypress/types/lodash'
import { Dropdown, DropdownOptions } from "cypress-components/dist/components";

export default defineConfig({
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    trashAssetsBeforeRuns: true,
    e2e: {
        baseUrl: "https://google.com/",
        specPattern: "cypress/e2e/*.cy.ts",
        supportFile: "cypress/support/e2e.ts",
        setupNodeEvents: (on, config) => {
            // 
        }
    }
})
