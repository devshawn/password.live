import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("home controller", () => {
    it("index responds with a 200", async () => {
        const response = await request(application).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Hello world!")
    })
})