import { DISMISS_NOTIFICATION, SEND_NOTIFICATION } from "./notification.types"
import { OrderedSet } from "immutable"

const initialState = {
    notifications: OrderedSet()
}

export function notificationReducer(state = initialState, action) {
    const updatedState = Object.assign({}, state)

    switch (action.type) {
        case SEND_NOTIFICATION:
            updatedState.notifications = addNotification(updatedState, action)
            return updatedState

        case DISMISS_NOTIFICATION:
            updatedState.notifications = removeNotification(updatedState, action)
            return updatedState

        default:
            return state
    }
}

function addNotification(updatedState, action) {
    return updatedState.notifications.add(action.payload.notification)
}

function removeNotification(updatedState, action) {
    return updatedState.notifications.filter(n => n.key !== action.payload.key)
}
