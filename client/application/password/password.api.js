const API_URL = process.env.API_URL || "http://localhost:5501/"
const API_URL_PASSWORD = `${API_URL}password`

export class PasswordAPI {
    static async fetchSimplePassword() {
        const request = await fetch(new Request(`${API_URL_PASSWORD}/simple`, { method: "get" }))
        return await request.json()
    }

    static async fetchAdvancedPassword(data) {
        const options = { method: "post", body: JSON.stringify(data) }
        const request = await fetch(new Request(`${API_URL_PASSWORD}/generate`, options))
        return await request.json()
    }

}
