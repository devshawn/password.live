import { Router } from "../config/router"
import generatePassword from "password-generator"

export class PasswordController extends Router {
    get routes() {
        return {
            "GET /password/init": "init"
        }
    }

    init(request, response) {
        response.json({ password: generatePassword() })
    }

    static create(server) {
        return new PasswordController(server)
    }
}