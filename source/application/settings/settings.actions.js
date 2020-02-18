import { SETTINGS_UPDATE } from "./settings.types"

export const updatePasswordSettings = (settings) => {
    return (dispatch) => dispatch({ type: SETTINGS_UPDATE, payload: settings })
}
