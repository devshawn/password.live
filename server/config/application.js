import { Logger } from "../utilities/logger"
import { HomeController } from "../controllers/home.controller"
import { PasswordController } from "../controllers/password.controller"
import express from "express"

export const app = express()

export class Application {
    constructor() {
        this.app = app
        Logger.info("Initializing server...")
        this.initialize()
    }

    initialize() {

        // TODO: remove for production
        app.use("/", function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Headers", "X-Requested-With")
            next()
        })

        HomeController.create(app)
        PasswordController.create(app)
    }
}