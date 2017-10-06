import { combineReducers } from "redux"
import { passwordReducer } from "./password/password.reducer"

const rootReducer = combineReducers({
    passwordReducer
})

export default rootReducer
