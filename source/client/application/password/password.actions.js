import { PasswordAPI } from "./password.api"
import { PASSWORD_FETCH_SUCCESS } from "./password.types"

export const fetchPassword = (data) => {
    return async (dispatch) => {
        const response = await PasswordAPI.fetchPassword(data)
        return dispatch({ type: PASSWORD_FETCH_SUCCESS, payload: response })
    }
}
