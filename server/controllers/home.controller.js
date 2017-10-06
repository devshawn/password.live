import { Router } from "../config/router"

export class HomeController extends Router {

    get routes() {
        return {
            "GET /": "index"
        }
    }

    index(request, response) {
        response.send("Hello world!")
    }

    static create(server) {
        return new HomeController(server)
    }
}