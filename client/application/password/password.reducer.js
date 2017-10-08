import { PASSWORD_ADVANCED_SUCCESS, PASSWORD_SIMPLE_SUCCESS } from "./password.types"

const initialState = {
    password: ""
}

export function passwordReducer(state = initialState, action) {
    const updatedState = Object.assign({}, state)

    switch (action.type) {

        case PASSWORD_SIMPLE_SUCCESS:
        case PASSWORD_ADVANCED_SUCCESS:
            updatedState.password = action.payload.password
            return updatedState

        default:
            return updatedState

    }
}
