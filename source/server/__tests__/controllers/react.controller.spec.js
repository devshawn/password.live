import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("react controller", () => {
    it("index responds with a 404 as we are not in production", async () => {
        const response = await request(application).get("/")
        expect(response.statusCode).toBe(404)
    })
})