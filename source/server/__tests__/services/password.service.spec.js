import { PasswordService } from "../../services/password.service"

describe("PasswordService", () => {
    const passwordService = new PasswordService()

    describe("PasswordService.generate", () => {
        describe("default behavior", () => {
            const password = passwordService.generate()

            it("it returns a password that is 16 characters long", () => {
                expect(password).toHaveLength(16)
            })

            it("it returns a password that uses only lowercase letters", () => {
                expect(/[a-z]/.test(password)).toBe(true)
            })

            it("it returns unique passwords", () => {
                expect(password).not.toBe(passwordService.generate())
            })
            it("it returns a passowrd that is on uppercase and 16 characters long", () => {
                expect(/[A-Z]/.test(password)).toBe(true)
                expect(password).toHaveLength(16)
            })
        })

        describe("with body.uppercase = true", () => {
            const password = passwordService.generate({ length: 100, uppercase: true })

            it("it returns a password that uses some uppercase letters", () => {
                expect(/[A-Z]/.test(password)).toBe(true)
            })

            it("it returns a password that uses only uppercase and lowercase letters", () => {
                expect(password.match(/[a-zA-Z]+/)[0]).toBe(password)
            })
        })

        describe("with body.numbers = true", () => {
            const password = passwordService.generate({ length: 100, numbers: true })

            it("it returns a password that uses some numbers", () => {
                expect(/[0-9]/.test(password)).toBe(true)
            })

            it("it returns a password that uses only numbers and lowercase letters", () => {
                expect(password.match(/[a-z0-9]+/)[0]).toBe(password)
            })
        })

        describe("with body.symbols = true", () => {
            const password = passwordService.generate({ length: 100, symbols: true })

            it("it returns a password that uses some symbols", () => {
                expect(/[%-/#?]/.test(password)).toBe(true)
            })

            it("it returns a password that uses only symbols and lowercase letters", () => {
                expect(password.match(/[a-z%-/#?]+/)[0]).toBe(password)
            })
        })

        describe("with body.length = n between 1 and 100", () => {
            const length = Math.ceil(Math.random() * 100)
            const password = passwordService.generate({ length })

            it("it returns a password with n characters", () => {
                expect(password).toHaveLength(length)
            })
        })

        describe("with all options set", () => {
            const password = passwordService.generate({
                length: 100,
                lowercase: true,
                uppercase: true,
                numbers: true,
                symbols: true
            })

            it("it returns a password that satisfies all options", () => {
                expect(password).toHaveLength(100)
                expect(/[a-z]/.test(password)).toBe(true)
                expect(/[A-Z]/.test(password)).toBe(true)
                expect(/[0-9]/.test(password)).toBe(true)
                expect(/[%-/#?]/.test(password)).toBe(true)
            })
        })

        describe("no options set", () => {
            const password = passwordService.generate({
                lowercase: false,
                uppercase: false,
                numbers: false,
                symbols: false
            })

            it("it returns an empty string", () => {
                expect(password).toBe("")
            })
        })
    })
})
