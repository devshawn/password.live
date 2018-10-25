import { PASSWORD_FETCH_SUCCESS } from "./password.types"

const initialState = {
    password: ""
}

export function passwordReducer(state = initialState, action) {

    switch (action.type) {

        case PASSWORD_FETCH_SUCCESS:
            return Object.assign({}, state, action.payload)

        default:
            return state

    }
}
