module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globals: {
    "ts-jest": {
      "tsconfig": "<rootDir>/projects/demo-app/tsconfig.spec.json"
    }
  },
  testMatch: [
    "**/?(*.)+(spec).+(ts)?(x)"
  ],
  globalSetup: 'jest-preset-angular/global-setup',
};

/**
 * @description add this property into module.exports to define the rules of your coverage criteria
 *  coverageThreshold: {
    "global": {
      "statements": 20,
      "lines": 20,
      "branches": 10,
      "functions": 20
    }
  },

 */
