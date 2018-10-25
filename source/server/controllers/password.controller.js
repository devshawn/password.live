import { Router } from "../config/router"
import { PasswordService } from "../services/password.service"

export class PasswordController extends Router {

    constructor(server) {
        super(server)
        this.passwordService = new PasswordService()
    }

    get routes() {
        return {
            "POST /password/generate": "generate"
        }
    }

    generate(request, response) {
        const password = this.passwordService.generate(request.body)
        response.json({ password })
    }

    static create(server) {
        return new PasswordController(server)
    }
}
