export class PasswordAPI {

    static async fetchInitialPassword() {
        const request = await fetch(new Request("http://localhost:4321/password/simple", { method: "get" }))
        return await request.json()
    }
}
