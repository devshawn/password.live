import { combineReducers } from "redux"
import { passwordReducer } from "./password/password.reducer"
import { notificationReducer } from "./notification/notification.reducer"

const rootReducer = combineReducers({
    passwordReducer,
    notificationReducer
})

export default rootReducer
