module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this based on your path alias
    '\\.(css|less|scss|sass)$': '<rootDir>/jest.mock.js', // Add this line
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!aos/.*)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Add this line
};
