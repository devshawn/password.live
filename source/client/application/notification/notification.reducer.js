import { DISMISS_NOTIFICATION, SEND_NOTIFICATION } from "./notification.types"

const initialState = {
    notifications: []
}

export const notificationReducer = (state = initialState, { type, payload: { key, notification } = {} }) => {

    switch (type) {
        case SEND_NOTIFICATION:
            return { ...state, notifications: [...state.notifications, notification] }

        case DISMISS_NOTIFICATION:
            return { ...state, notifications: [...state.notifications.filter(n => n.key !== key)] }

        default:
            return state
    }
}
