import { PASSWORD_ADVANCED_SUCCESS, PASSWORD_SIMPLE_SUCCESS, SETTINGS_UPDATE } from "./password.types"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"

const initialState = {
    password: "",
    settings: defaultPasswordSettings
}

export function passwordReducer(state = initialState, action) {
    const updatedState = Object.assign({}, state)

    switch (action.type) {

        case PASSWORD_SIMPLE_SUCCESS:
        case PASSWORD_ADVANCED_SUCCESS:
            updatedState.password = action.payload.password
            return updatedState

        case SETTINGS_UPDATE:
            updatedState.settings = Object.assign({}, updatedState.settings, action.payload)
            return updatedState

        default:
            return updatedState

    }
}
