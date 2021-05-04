module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts',
    '!src/pages/**/*.tsx',
    '!cypress/**/*.tsx',
    '!src/styles/**/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
