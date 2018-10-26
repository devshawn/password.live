import {
  Router
} from "../config/router"
import {
  PasswordService
} from "../services/password.service"
import "@babel/polyfill";
export class PasswordController extends Router {

  constructor(server) {
    super(server)
    this.passwordService = new PasswordService()
  }

  get routes() {
    return {
      "POST /api/v1/password": "generate"
    }
  }

  generate(request, response) {
    const password = this.passwordService.generate(request.body)
    response.json({
      password
    })
  }

  static create(server) {
    return new PasswordController(server)
  }
}
