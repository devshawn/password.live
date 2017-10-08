const API_URL = "http://localhost:4321/password"

export class PasswordAPI {
    static async fetchSimplePassword() {
        const request = await fetch(new Request(`${API_URL}/simple`, { method: "get" }))
        return await request.json()
    }

    static async fetchAdvancedPassword(data) {
        const options = { method: "post", body: JSON.stringify(data) }
        const request = await fetch(new Request(`${API_URL}/generate`, options))
        return await request.json()
    }

}
