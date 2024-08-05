import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust this if you use aliases
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports if needed
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Adjust paths if necessary
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Path to your setup file
};

export default config;




