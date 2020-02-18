import { settingsReducer } from "../../application/settings/settings.reducer"
import { SETTINGS_UPDATE } from "../../application/settings/settings.types"
import { defaultPasswordSettings } from "../../application/password/password.api"

const getTestState = () => ({
    settings: defaultPasswordSettings
})

const getTestSetting = updates => ({
    length: 22,
    lowercase: false,
    uppercase: true,
    numbers: true,
    symbols: true,
    ...updates
})

describe("settingsReducer", () => {
    it("should return setting with updated length for SETTINGS_UPDATE", () => {
        const { settings: { length } } = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ length: 33 }) })

        expect(length).toEqual(33)
    })

    it("should return setting with updated lowercase for SETTINGS_UPDATE", () => {
        const { settings: { lowercase } } = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ lowercase: false }) })

        expect(lowercase).toEqual(false)
    })

    it("should return setting with updated uppercase for SETTINGS_UPDATE", () => {
        const { settings: { uppercase } } = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ uppercase: true }) })

        expect(uppercase).toEqual(true)
    })

    it("should return setting with updated numbers for SETTINGS_UPDATE", () => {
        const { settings: { numbers } } = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ numbers: true }) })

        expect(numbers).toEqual(true)
    })

    it("should return setting with updated symbols for SETTINGS_UPDATE", () => {
        const { settings: { symbols } } = settingsReducer(getTestState(), { type: SETTINGS_UPDATE, payload: getTestSetting({ symbols: true }) })

        expect(symbols).toEqual(true)
    })

    it("should return passed state for unknown action type", () => {
        const testState = getTestState()
        const result = settingsReducer(testState, { type: "unknown-type", payload: {} })

        expect(result).toEqual(testState)
    })

    it("should return default state when action type is unknown and no initial state passed", () => {
        const result = settingsReducer(undefined, { type: "unknown-type", payload: {} })

        expect(result).toEqual({ settings: defaultPasswordSettings })
    })
})
