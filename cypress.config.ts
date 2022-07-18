/// <reference types="cypress"/>
/// <reference path="cypress/support/e2e.ts"/>

import { defineConfig } from 'cypress';
import cypress = require('cypress');

export default defineConfig({
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        "reporterEnabled": "spec,mocha-junit-reporter,@dannysilence/mocha-json-reporter",
        "mochaJunitReporterReporterOptions": {
            "mochaFile": "cypress/results/[hash].xml"
        },
        "dannysilenceMochaJsonReporterReporterOptions": {
            "enabled": true,
            "output": "cypress/results/[hash].json"
        }
    },
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    trashAssetsBeforeRuns: true,
    e2e: {
        baseUrl: "https://google.com/",
        specPattern: "cypress/e2e/*.cy.ts",
        supportFile: "cypress/support/e2e.ts",
        video: false,
        screenshotOnRunFailure: false,
        trashAssetsBeforeRuns: true,
        setupNodeEvents: (on, config) => {
            
        },
    }
})
