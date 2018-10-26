import { SETTINGS_UPDATE } from "./settings.types"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"
import Cookies from "js-cookie"

const initialState = {
    settings: defaultPasswordSettings
}

export function settingsReducer(state = initialState, action) {

    switch (action.type) {

        case SETTINGS_UPDATE:
            const updatedState = Object.assign({}, state, { settings: { ...state.settings, ...action.payload } })
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