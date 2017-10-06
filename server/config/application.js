import express from "express"
import { Logger } from "../utilities/logger"
import { HomeController } from "../controllers/home.controller"

export class Application {
    constructor() {
        Logger.info("Initializing server...")
        this.server = express()
        this.port = process.env.PORT || 4321
        this.initialize()
    }

    async initialize() {
        HomeController.create(this.server)

        await this.server.listen(this.port)
        Logger.info(`Server started on: ${this.port}`)
    }
}