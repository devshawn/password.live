import { PasswordAPI } from "./password.api"
import { PASSWORD_FETCH_SUCCESS } from "./password.types"

export const fetchPassword = (data) => {
    return async (dispatch) => {
        const response = PasswordAPI.fetchPassword(data)
        console.log(response)
        return dispatch({ type: PASSWORD_FETCH_SUCCESS, payload: response })
    }
}
