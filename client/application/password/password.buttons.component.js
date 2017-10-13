import React from "react"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import { RaisedButton } from "material-ui"
import { generatePasswordButtonStyle, generatePasswordLabelStyle, passwordButtonsComponentStyle } from "../styles"
import { lightBlue500 } from "material-ui/styles/colors"
import { sendNotification } from "../notification/notification.actions"
import { getPasswordFromCategory } from "./password.helper"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class PasswordButtonsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.copyPassword = this.copyPassword.bind(this)
    }

    copyPassword() {
        const password = getPasswordFromCategory(this.props.passwordCategory, this.props.reducerState)
        copy(password)
        this.props.dispatch(sendNotification("Password copied to clipboard!"))
    }

    render() {
        const { generatePassword } = this.props

        return (
            <div style={ passwordButtonsComponentStyle }>
                <RaisedButton onClick={ generatePassword }
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
