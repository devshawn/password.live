"use strict"

import { settingsReducer } from "../../application/settings/settings.reducer"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"
import { SETTINGS_UPDATE } from "../../application/settings/settings.types"

let getTestState = () => {
    return {
        settings: defaultPasswordSettings
    }
}

let getTestSetting = (updates) => {
    let testPayload = {
        length: 22,
        lowercase: false,
        uppercase: true,
        numbers: true,
        symbols: true
    }
    return Object.assign({}, testPayload, updates)
}

describe("settingsReducer", () => {
    it("should return setting with updated length for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ length: 33 }) })

        // assert
        expect(result.settings.length).toEqual(33)
    })

    it("should return setting with updated lowercase for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ lowercase: false }) })

        // assert
        expect(result.settings.lowercase).toEqual(false)
    })

    it("should return setting with updated uppercase for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ uppercase: true }) })

        // assert
        expect(result.settings.uppercase).toEqual(true)
    })

    it("should return setting with updated numbers for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ numbers: true }) })

        // assert
        expect(result.settings.numbers).toEqual(true)
    })

    it("should return setting with updated symbols for SETTINGS_UPDATE", () => {
        // arrange & act
        let result = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ symbols: true }) })

        // assert
        expect(result.settings.symbols).toEqual(true)
    })

    it("should return passed state for unknown action type", () => {
        // arrange & act
        let testState = getTestState()
        let result = settingsReducer(testState, { type: "unknown-type", payload: {} })

        // assert
        expect(result).toEqual(testState)
    })

    it("should return default state when action type is unknown and no initial state passed", () => {
        // arrange & act
        let result = settingsReducer(undefined, { type: "unknown-type", payload: {} })

        // assert
        expect(result).toEqual({ settings: defaultPasswordSettings })
    })
})
