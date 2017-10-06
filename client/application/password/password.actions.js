import { PasswordAPI } from "./password.api"
import { INITIAL_PASSWORD_SUCCESS } from "./password.types"

export const getInitialPassword = () => {
    return async (dispatch) => {
        const request = await PasswordAPI.fetchInitialPassword()
        return dispatch({ type: INITIAL_PASSWORD_SUCCESS, payload: request })
    }
}