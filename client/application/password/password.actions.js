import { PasswordAPI } from "./password.api"
import { PASSWORD_SIMPLE_SUCCESS, PASSWORD_ADVANCED_SUCCESS } from "./password.types"

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
