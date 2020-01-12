module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["js", "ts", "json"],
  testMatch: ["<rootDir>/test/**/*.test.ts"],
  globalSetup: "<rootDir>./test/global.setup.ts",
  setupFilesAfterEnv: ["jest-date-mock", "<rootDir>./test/setup.ts"],
  clearMocks: true
};
