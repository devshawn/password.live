import React from "react"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import { RaisedButton } from "material-ui"
import { buttonLabelStyle, buttonStyle, passwordButtonsComponentStyle } from "../styles"
import { lightBlue500 } from "material-ui/styles/colors"
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

        return [
            <div style={passwordButtonsComponentStyle} key={1}>
                <RaisedButton onClick={generatePassword}
                    backgroundColor={lightBlue500}
                    label="Generate Password"
                    labelStyle={buttonLabelStyle}
                    style={buttonStyle}
                />
                <RaisedButton onClick={this.copyPassword}
                    backgroundColor="#F18A00"
                    label="Copy Password"
                    labelStyle={buttonLabelStyle}
                    style={buttonStyle}
                />
            </div>,
            <div style={{ textAlign: "center" }} key={2}>
                <RaisedButton onClick={this.toggleSettings}
                    backgroundColor="#757575"
                    label="Toggle Settings"
                    labelStyle={buttonLabelStyle}
                    style={buttonStyle}
                />
            </div>
        ]
    }
}
