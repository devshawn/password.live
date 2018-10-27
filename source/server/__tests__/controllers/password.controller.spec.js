import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("password controller", () => {
    it("generate responds with a 200", async () => {
        const { statusCode } = await request(application).post("/api/v1/password")

        expect(statusCode).toBe(200)
    })
})