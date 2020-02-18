import generatePassword from "password-generator"

export const defaultPasswordSettings = {
    length: 16,
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
    advanced: false,
    remember: false
}

export class PasswordAPI {
    static fetchPassword(data) {
        return { "password": this.generate(data) }
    }

    static generate(body) {
        const options = Object.assign({}, defaultPasswordSettings, body)
        const regex = this.generateRegexFromOptions(options)
        return (regex !== "[]") ? generatePassword(options.length, false, new RegExp(regex, "g")) : ""
    }

    static generateRegexFromOptions(options) {
        let regex = "["
        regex += options.lowercase ? "a-z" : ""
        regex += options.uppercase ? "A-Z" : ""
        regex += options.numbers ? "0-9" : ""
        regex += options.symbols ? "\\?\\!\\-\\#\\%\\&" : ""
        regex += "]"
        return regex
    }
}