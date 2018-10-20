module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js}", "!**/node_modules/**", "!**/coverage/**", "!**/dist/**", "!**/jest.config.js"],
    coverageReporters: ["lcov", "json"],
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"]
}
