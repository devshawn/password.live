module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js}", "!**/node_modules/**", "!**/coverage/**", "!**/dist/**", "!**/jest.config.js"],
  coverageReporters: ["lcov", "json"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/(?!server).+\\.js$"
  ]
}
