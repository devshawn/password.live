import generatePassword from "password-generator"
import { defaultPasswordSettings } from "../constants/password.constants"

export class PasswordService {

    // TODO: Add API validation and error pages
    generate(body) {
        const options = Object.assign({}, defaultPasswordSettings, body)
        const regex = this.generateRegexFromOptions(options)
        return (regex !== "[]") ? generatePassword(options.length, false, new RegExp(regex, "g")) : ""
    }

    generateRegexFromOptions(options) {
        let regex = "["
        regex += options.lowercase ? "a-z" : ""
        regex += options.uppercase ? "A-Z" : ""
        regex += options.numbers ? "0-9" : ""
        regex += options.symbols ? "\\?\\!\\-\\#\\%\\&" : ""
        regex += "]"
        return regex
    }
}
