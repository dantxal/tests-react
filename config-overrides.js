module.exports = {
  jest: (config) => {
    config.testMatch = ["**/__tests__/**/*.test.js"]
    config.setupFilesAfterEnv = [
      "@testing-library/jest-dom/extend-expect",
      "jest-localstorage-mock"
    ];
    config.moduleNameMapper={
      "^~/(.*)": "<rootDir>/src/$1"
    };
    config.coverageDirectory = "src/__tests__/coverage";
    config.collectCoverageFrom = [
      "src/**/*.js", "!src/index.js", "!src/__tests__/**/*",
    ];

    return config;
  }
};