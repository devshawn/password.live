import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import { Card, CardText } from "material-ui/Card"
import { lightBlue500 } from "material-ui/styles/colors"
import { cardContainerStyle, cardTextStyle, generatePasswordButtonStyle, generatePasswordLabelStyle } from "../styles"
import { getInitialPassword } from "../password/password.actions"
import { sendNotification } from "../notification/notification.actions"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class SimplePasswordComponent extends React.Component {
    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
        this.copyPassword = this.copyPassword.bind(this)
    }

    componentWillMount() {
        this.generatePassword()
    }

    generatePassword() {
        this.props.dispatch(getInitialPassword())
    }

    copyPassword() {
        copy(this.props.reducerState.initialPassword)
        this.props.dispatch(sendNotification("Password copied to clipboard!"))
    }

    render() {
        return (
            <div className="center-text">
                <Card containerStyle={ cardContainerStyle }>
                    <CardText style={ cardTextStyle }>
                        { this.props.reducerState.initialPassword }
                    </CardText>
                </Card>

                <RaisedButton onClick={ this.generatePassword }
                              backgroundColor={ lightBlue500 }
                              label="Generate Password"
                              labelStyle={ generatePasswordLabelStyle }
                              style={ generatePasswordButtonStyle }
                />
                <RaisedButton onClick={ this.copyPassword }
                              backgroundColor="#F18A00"
                              label="Copy Password"
                              labelStyle={ generatePasswordLabelStyle }
                              style={ generatePasswordButtonStyle }
                />
            </div>
        )
    }
}
