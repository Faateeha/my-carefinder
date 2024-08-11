module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$':  ['babel-jest', { configFile: './babel.config.test.js' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
    '\\.(css|less|scss|sass)$': '<rootDir>/jest.mock.js', 
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!aos/.*)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/babel.config.test.js', // Add this line to ignore babel.config.test.js
  ],
};
