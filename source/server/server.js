import "@babel/polyfill"
import { app, Application } from "./config/application"
import { Logger } from "./utilities/logger"

const initialize = async () => {
    const port = process.env.PORT || 5501
    new Application()
    await app.listen(port)
    Logger.info(`Server started on: ${port}`)
}

initialize()