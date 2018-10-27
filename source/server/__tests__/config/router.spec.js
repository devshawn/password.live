import { Application } from "../../config/application"
import { Router } from "../../config/router"

const app = new Application().app
const router = new Router(app)

describe("router", () => {
    it("returns empty routes object", async () => {
        const { routes } = router

        expect(routes).toEqual({})
    })
})