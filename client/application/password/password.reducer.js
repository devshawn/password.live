import { PASSWORD_ADVANCED_SUCCESS, PASSWORD_SIMPLE_SUCCESS, SETTINGS_UPDATE } from "./password.types"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"

const initialState = {
    passwordSimple: "",
    passwordAdvanced: "",
    settings: defaultPasswordSettings
}

export function passwordReducer(state = initialState, action) {
    const updatedState = Object.assign({}, state)

    switch (action.type) {

        case PASSWORD_SIMPLE_SUCCESS:
            updatedState.passwordSimple = action.payload.password
            return updatedState

        case PASSWORD_ADVANCED_SUCCESS:
            updatedState.passwordAdvanced = action.payload.password
            return updatedState

        case SETTINGS_UPDATE:
            updatedState.settings = Object.assign({}, updatedState.settings, action.payload)
            return updatedState

        default:
            return updatedState

    }
}
