import { combineReducers } from "redux"
import { passwordReducer } from "./password/password.reducer"
import { settingsReducer } from "./settings/settings.reducer"
import { notificationReducer } from "./notification/notification.reducer"

const rootReducer = combineReducers({
    passwordReducer,
    settingsReducer,
    notificationReducer
})

export default rootReducer
