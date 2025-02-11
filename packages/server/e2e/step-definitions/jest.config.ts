export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  globals: {
    'ts-jest': {
      tsConfig: 'e2e/step-definitions/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '^(.*)\\.js$': ['$1', '$1.js'],
  },
  setupFiles: ['./setup.ts'],
  preset: 'ts-jest',
};
