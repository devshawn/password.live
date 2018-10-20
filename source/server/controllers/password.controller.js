import { Router } from "../config/router"
import { PasswordService } from "../services/password.service"

export class PasswordController extends Router {

    constructor(server) {
        super(server)
        this.passwordService = new PasswordService()
    }

    get routes() {
        return {
            "GET /password/simple": "simple",
            "POST /password/generate": "generate"
        }
    }

    simple(request, response) {
        const password = this.passwordService.simple()
        response.json({ password })
    }

    generate(request, response) {
        const password = this.passwordService.generate(request.body)
        response.json({ password })
    }

    static create(server) {
        return new PasswordController(server)
    }
}
