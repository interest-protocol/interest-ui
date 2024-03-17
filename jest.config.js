module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]s?(x)$': 'ts-jest',
  },
  rootDir: 'src/lib',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '<rootDir>/**/lib/*.d.ts',
  ],
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '__mocks__',
    '__fixtures__',
    'dist',
    'jest-test-results.json',
  ],
  testMatch: [
    '**/__tests__/**/?(*.)+(test).[jt]s?(x)',
    '**/__tests__/**/?(*.)+(spec).[jt]s?(x)',
    '**/?(*.)+(test).[tj]s?(x)',
    '**/?(*.)+(spec).[tj]s?(x)',
  ],
};
