import { getPasswordFromCategory, validatePasswordSettings } from "../../application/password/password.helper"
import { PASSWORD_ADVANCED, PASSWORD_SIMPLE } from "../../application/password/password.categories"

describe("validatePasswordSettings", () => {
    it("should be valid when one or more booleans is true", () => {
        const case1 = { lowercase: true }
        const case2 = { lowercase: true, uppercase: false }
        const case3 = { lowercase: true, uppercase: false, random: "String shouldn't matter" }
        const cases = [case1, case2, case3]

        cases.forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(true)
        })
    })

    it("should be invalid when there are no true booleans", () => {
        const case1 = { lowercase: false }
        const case2 = { lowercase: false, uppercase: false }
        const cases = [case1, case2]

        cases.forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(false)
        })
    })

    it("should pass when there are no boolean values", () => {
        const case1 = { random: "Test" }
        const case2 = { random: "Test", randoms: "Testing again" }
        const cases = [case1, case2]

        cases.forEach((settings) => {
            expect(validatePasswordSettings(settings)).toBe(true)
        })
    })
})

describe("getPasswordFromCategory", () => {
    const state = {
        passwordSimple: "simple",
        passwordAdvanced: "advanced"
    }

    it("should return the simple password", () => {
        expect(getPasswordFromCategory(PASSWORD_SIMPLE, state)).toBe("simple")
    })

    it("should return the advanced password", () => {
        expect(getPasswordFromCategory(PASSWORD_ADVANCED, state)).toBe("advanced")
    })
})
