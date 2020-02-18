"use strict"

import { PASSWORD_FETCH_SUCCESS, SETTINGS_UPDATE } from "../../application/password/password.types"
import { passwordReducer } from "../../application/password/password.reducer"

const getTestState = () => ({
    password: "password"
})

describe("passwordReducer", () => {
    it("should return state for PASSWORD_FETCH_SUCCESS", () => {
        const { password } = passwordReducer(getTestState(), { type: PASSWORD_FETCH_SUCCESS, payload: { password: "updated-password" } })

        expect(password).toEqual("updated-password")
    })

    it("should return default state when action type is unknown and no initial state passed", () => {
        const { password } = passwordReducer(undefined, { type: "unknown-type", payload: {} })

        expect(password).toEqual("")
    })
})
