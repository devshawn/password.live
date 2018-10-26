import { Logger } from "../../utilities/logger"

describe("logger", () => {
    it("has an info method", () => {
        Logger.info("Message would go here...")
    })

    it("has a warn method", () => {
        Logger.warn("Message would go here...")
    })

    it("has an error method", () => {
        Logger.error("Message would go here...")
    })
})