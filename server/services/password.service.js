import generatePassword from "password-generator"
import { Logger } from "../utilities/logger"
import { defaultPasswordSettings } from "../constants/password.constants"

export class PasswordService {

    simple() {
        return generatePassword()
    }

    // TODO: Add API validation and error pages
    generate(body) {
        const options = Object.assign({}, defaultPasswordSettings, body)
        const regex = this.generateRegexFromOptions(options)
        const password = (regex !== "") ? generatePassword(options.length, false, regex) : ""
        Logger.debugGeneration(regex, options, password)
        return password
    }

    generateRegexFromOptions(options) {
        let regex = "["
        regex += options.lowercase ? "a-z" : ""
        regex += options.uppercase ? "A-Z" : ""
        regex += options.numbers ? "0-9" : ""
        regex += options.symbols ? "\\?\\!\\-\\#\\%\\&" : ""
        regex += "]"
        return new RegExp(regex, "g")
    }
}
