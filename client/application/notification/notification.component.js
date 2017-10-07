import React from "react"
import { NotificationStack } from "react-notification"
import { connect } from "react-redux"
import { removeNotification } from "./notification.actions"
import { barStyleFactory } from "./notification.styles"

@connect((store) => {
    return {
        notificationReducerState: store.notificationReducer
    }
})
export class NotificationComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { notifications } = this.props.notificationReducerState

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
