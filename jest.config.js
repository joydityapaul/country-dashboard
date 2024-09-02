module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  