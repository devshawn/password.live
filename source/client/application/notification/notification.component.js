import React from "react"
import { NotificationStack } from "react-notification"
import { connect } from "react-redux"
import { removeNotification } from "./notification.actions"
import { barStyleFactory } from "./notification.styles"

@connect((store) => ({
    notifications: store.notificationReducer.notifications
}))
export class NotificationComponent extends React.Component {

    render() {
        const { notifications } = this.props

        return (
            <div>
                <NotificationStack
                    notifications={ notifications.toArray() }
                    onDismiss={ notification => this.props.dispatch(removeNotification(notification.key)) }
                    barStyleFactory={ barStyleFactory }
                    activeBarStyleFactory={ barStyleFactory }
                />
            </div>
        )
    }

}
