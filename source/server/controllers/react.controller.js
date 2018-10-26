import { Router } from "../config/router"
import path from "path"

export class ReactController extends Router {

    get routes() {
        return {
            "GET *": "react"
        }
    }

    react(request, response) {
        response.sendFile(path.join(__dirname, "..", "public/index.html"))
    }

    static create(server) {
        return new ReactController(server)
    }
}
