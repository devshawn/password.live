import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("react controller", () => {
    it("index responds with a 404 as we are not in production", async () => {
        const { statusCode } = await request(application).get("/")

        expect(statusCode).toBe(404)
    })
})
