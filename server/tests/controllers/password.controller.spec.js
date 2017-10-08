import { Application } from "../../config/application"
import request from "supertest"

const application = new Application().app

describe("password controller", () => {
    it("simple responds with a 200", async () => {
        const response = await request(application).get("/password/simple")
        expect(response.statusCode).toBe(200)
    })
})
