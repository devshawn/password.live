"use strict"

import { PASSWORD_FETCH_SUCCESS, SETTINGS_UPDATE } from "../../application/password/password.types"
import { passwordReducer } from "../../application/password/password.reducer"

let getTestState = () => {
    return {
        password: "password"
    }
}

describe("passwordReducer", () => {
    it("should return state for PASSWORD_FETCH_SUCCESS", () => {
        // arrange & act
        let result = passwordReducer(getTestState(), { type: PASSWORD_FETCH_SUCCESS, payload: { password: "updated-password" } })

        // assert
        expect(result.password).toEqual("updated-password")
    })

    it("should return default state when action type is unknown and no initial state passed", () => {
        // arrange & act
        let result = passwordReducer(undefined, { type: "unknown-type", payload: {} })

        // assert
        expect(result).toEqual({ password: "" })
    })
})
