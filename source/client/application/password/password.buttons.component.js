import React from "react"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import { buttonStyle, buttonLabelStyle, passwordButtonsComponentStyle } from "../styles"
import { sendNotification } from "../notification/notification.actions"
import { updatePasswordSettings } from "../settings/settings.actions"

@connect((store) => ({
    password: store.passwordReducer.password,
    settings: store.settingsReducer.settings
}))
export class PasswordButtonsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.copyPassword = this.copyPassword.bind(this)
        this.toggleSettings = this.toggleSettings.bind(this)
    }

    copyPassword() {
        const { password } = this.props
        copy(password)
        this.props.dispatch(sendNotification("Password copied to clipboard!"))
    }

    toggleSettings() {
        const { settings } = this.props
        this.props.dispatch(updatePasswordSettings({ advanced: !settings.advanced }))
    }

    render() {
        const { generatePassword } = this.props

        return (
            <div style={passwordButtonsComponentStyle}>
                <label style={buttonLabelStyle}>
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
                </label>
                <Button onClick={this.copyPassword}
                    color="secondary"
                    variant="contained"
                    // backgroundColor="#F18A00"
                    // label="Copy Password"
                    // labelStyle={buttonLabelStyle}
                    style={buttonStyle}
                >
                    Copy Password
                </Button>
            </div>
        ]
    }
}
