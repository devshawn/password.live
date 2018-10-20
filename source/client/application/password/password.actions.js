import { PasswordAPI } from "./password.api"
import { PASSWORD_ADVANCED_SUCCESS, PASSWORD_SIMPLE_SUCCESS, SETTINGS_UPDATE } from "./password.types"

export const getSimplePassword = () => {
    return async (dispatch) => {
        const response = await PasswordAPI.fetchSimplePassword()
        return dispatch({ type: PASSWORD_SIMPLE_SUCCESS, payload: response })
    }
}

export const getAdvancedPassword = (data) => {
    return async (dispatch) => {
        const response = await PasswordAPI.fetchAdvancedPassword(data)
        return dispatch({ type: PASSWORD_ADVANCED_SUCCESS, payload: response })
    }
}

export const updatePasswordSettings = (settings) => {
    return (dispatch) => {
        return dispatch({ type: SETTINGS_UPDATE, payload: settings })
    }
}
