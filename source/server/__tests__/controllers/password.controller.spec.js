import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("password controller", () => {
    it("generate responds with a 200", async () => {
        const response = await request(application).post("/api/v1/password")
        expect(response.statusCode).toBe(200)
    })
})