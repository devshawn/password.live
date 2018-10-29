import { Logger } from "../../utilities/logger"

describe("logger", () => {
    it("has an info method", () => {
        expect(Logger.info).toBeTruthy()
    })

    it("has a warn method", () => {
        expect(Logger.warn).toBeTruthy()
    })

    it("has an error method", () => {
        expect(Logger.error).toBeTruthy()
    })
})