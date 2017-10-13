import { Logger } from "../utilities/logger"
import { PasswordController } from "../controllers/password.controller"
import { ReactController } from "../controllers/react.controller"
import { HeartbeatController } from "../controllers/heartbeat.controller"
import express from "express"
import bodyParser from "body-parser"
import path from "path"

export const app = express()

export class Application {
    constructor() {
        this.app = app
        Logger.info("Initializing server...")
        this.initialize()
    }

    initialize() {
        app.use(bodyParser.json({ type: "*/*" }))

        app.use("*", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With")
            next()
        })

        // Order matters here because of wildcard, ReactController must be last
        HeartbeatController.create(app)
        PasswordController.create(app)

        if (process.env.NODE_ENV === "production") {
            app.use(express.static(path.join(__dirname, "../public/")))
            ReactController.create(app)
        }
    }
}
