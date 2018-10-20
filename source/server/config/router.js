import { Logger } from "../utilities/logger"

export class Router {

    constructor(server) {
        this.server = server
        this.registerRoute = this.registerRoute.bind(this)
        this.registerRoutes()
    }

    get routes() {
        return {}
    }

    registerRoutes() {
        Object.keys(this.routes).forEach(this.registerRoute)
    }

    registerRoute(route) {
        const method = this.routes[route]
        const verbAndPath = route.split(" ")
        const verb = verbAndPath[0].toLowerCase()
        const path = verbAndPath[1].trim()
        this.server[verb](path, this[method].bind(this))
        Logger.info(`Registered route: [${verb.toUpperCase()}] - "${path}" -> ${this.constructor.name}.${method}`)
    }

}