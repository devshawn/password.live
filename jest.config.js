module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js}", "!**/node_modules/**", "!**/client/**", "!**/coverage/**", "!**/dist/**", "!**/jest.config.js"],
    coverageReporters: ["lcov", "json"],
    testPathIgnorePatterns: ["<rootDir>/client/", "<rootDir>/dist/", "<rootDir>/node_modules/"]
}