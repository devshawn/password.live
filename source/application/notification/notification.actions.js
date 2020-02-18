import uuid from "uuid/v4"
import { DISMISS_NOTIFICATION, SEND_NOTIFICATION } from "./notification.types"
import { activeBarStyle, barStyle } from "./notification.styles"

export const sendNotification = function (message) {
    return (dispatch) => {
        const key = uuid()
        const notification = {
            message,
            key,
            action: "Dismiss",
            dismissAfter: 3400,
            barStyle: barStyle,
            activeBarStyle: activeBarStyle,
            onClick: () => dismissNotification(key, dispatch)
        }

        dispatch({ type: SEND_NOTIFICATION, payload: { notification: notification } })
    }
}

export const dismissNotification = (key, dispatch) => {
    return dispatch({ type: DISMISS_NOTIFICATION, payload: { key: key } })
}

export const removeNotification = (key) => {
    return (dispatch) => {
        dispatch({ type: DISMISS_NOTIFICATION, payload: { key: key } })
    }
}
