const API_URL = process.env.API_URL || "http://localhost:5501/"

export class PasswordAPI {
    static async fetchPassword(data) {
        const options = { method: "post", body: JSON.stringify(data) }
        const request = await fetch(new Request(`${API_URL}api/v1/password`, options))
        return await request.json()
    }
}
