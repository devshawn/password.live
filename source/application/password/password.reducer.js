import { PASSWORD_FETCH_SUCCESS } from "./password.types"

const initialState = {
    password: ""
}

export const passwordReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case PASSWORD_FETCH_SUCCESS:
            return { ...state, ...payload }

        default:
            return state

    }
}
