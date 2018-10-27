import "@babel/polyfill";
import {
    Logger
} from "../utilities/logger"
import {
    Router
} from "../config/router"

let counter = 0

export class HeartbeatController extends Router {

    get routes() {
        return {
            "GET /heartbeat": "heartbeat"
        }
    }

    heartbeat(request, response) {
        Logger.info(`Heartbeat pumped at ${new Date().toUTCString()} - #${counter++}`)
        const data = {
            awake: true,
            environment: process.env.NODE_ENV,
            version: {
                server: "0.1.0",
                client: "0.1.0"
            }
        }
        response.json(data)
    }

    static create(server) {
        return new HeartbeatController(server)
    }
}