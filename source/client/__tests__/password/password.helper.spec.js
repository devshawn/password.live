import { validatePasswordSettings } from "../../application/password/password.helper"

describe("validatePasswordSettings", () => {
    it("should be valid when one or more booleans is true", () => {
        [
            { lowercase: true },
            { lowercase: true, uppercase: false },
            { lowercase: true, uppercase: false, random: "String shouldn't matter" }
        ].forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(true)
        })
    })

    it("should be invalid when there are no true booleans", () => {
        [
            { lowercase: false },
            { lowercase: false, uppercase: false }
        ].forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(false)
        })
    })

    it("should pass when there are no boolean values", () => {
        [
            { random: "Test" },
            { random: "Test", randoms: "Testing again" }
        ].forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(true)
        })
    })
})
