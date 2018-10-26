import { SETTINGS_UPDATE } from "./settings.types"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"
import Cookies from "js-cookie"

const initialState = {
    settings: defaultPasswordSettings
}

export const settingsReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SETTINGS_UPDATE:
            const updatedState = { ...state, settings: { ...state.settings, ...payload } }
            if (updatedState.settings.remember) {
                Cookies.set("settings", updatedState.settings, { expires: 7 })
            } else {
                Cookies.remove("settings")
            }
            return updatedState

        default:
            return state

    }
}