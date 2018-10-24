import React from "react"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import { buttonStyle, buttonLabelStyle, passwordButtonsComponentStyle, copyPasswordButtonStyle } from "../styles"
import { lightBlue500 } from "@material-ui/core/colors"
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
            <div style={passwordButtonsComponentStyle}>
                <Button onClick={generatePassword}
                    color="primary"
                    variant="contained"
                    // backgroundColor={lightBlue500}
                    // label="Generate Password"
                    // labelStyle={buttonLabelStyle}
                    style={buttonStyle}
                >
                    Generate Password
                    </Button>
                <Button onClick={this.copyPassword}
                    color="secondary"
                    variant="contained"
                    // backgroundColor="#F18A00"
                    // label="Copy Password"
                    // labelStyle={buttonLabelStyle}
                    style={copyPasswordButtonStyle}
                >
                    Copy Password
                </Button>
            </div>
        )
    }
}
