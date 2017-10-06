import { INITIAL_PASSWORD_SUCCESS } from "./password.types"

const initialState = {
    initialPassword: ""
}

export function passwordReducer(state = initialState, action) {
    const updatedState = Object.assign({}, state)
    switch (action.type) {
        case INITIAL_PASSWORD_SUCCESS:
            updatedState.initialPassword = action.payload.password
            return updatedState
        default:
            return updatedState
    }
}