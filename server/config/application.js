import express from "express"
import { Logger } from "../utilities/logger"
import { HomeController } from "../controllers/home.controller"
import { PasswordController } from "../controllers/password.controller"

export class Application {
    constructor() {
        Logger.info("Initializing server...")
        this.server = express()
        this.port = process.env.PORT || 4321
        this.initialize()
    }

    async initialize() {

        // TODO: remove for production
        this.server.use("/", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With")
            next()
        })

        HomeController.create(this.server)
        PasswordController.create(this.server)

        await this.server.listen(this.port)
        Logger.info(`Server started on: ${this.port}`)
    }
}