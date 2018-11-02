import React from "react"
import { Hidden, Visible, Col } from "react-grid-system"
import { connect } from "react-redux"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"
import { fetchPassword } from "../password/password.actions"
import { validatePasswordSettings } from "../password/password.helper"
import { sendNotification } from "../notification/notification.actions"
import { withRouter } from "react-router-dom"
import { SettingsCard } from "../settings/settings.card"
import { CSSTransition } from "react-transition-group"

@withRouter
@connect((store) => ({
    password: store.passwordReducer.password,
    settings: store.settingsReducer.settings
}))
export class PasswordInnerPage extends React.Component {

    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
        this.renderButtons = this.renderButtons.bind(this)
    }

    componentDidMount() {
        const { password } = this.props
        if (password === "") this.generatePassword()
    }

    generatePassword() {
        const { settings } = this.props
        if (validatePasswordSettings(settings)) {
            this.props.dispatch(fetchPassword(settings, false))
        } else {
            this.props.dispatch(sendNotification("Oops! You must have at least one setting turned on."))
        }
    }

    renderButtons() {
        return <PasswordButtonsComponent generatePassword={this.generatePassword} />
    }

    render() {
        const { settings } = this.props

        const mdSize = settings.advanced ? 7 : 9
        const pushSize = settings.advanced ? 5 : 2
        const settingAdvanced = settings.advanced
        const isSettingAdvanced = settings.advanced === true

        return (
            <div className={"page"}>
                <div>
                    <Visible xs sm>{this.renderButtons()}</Visible>
                    <PasswordBoxComponent />
                    <Hidden xs sm>{this.renderButtons()}</Hidden>
                </div>
                <CSSTransition classNames={"settings"} timeout={1000} in={settingAdvanced} unmountOnExit>
                    <div className={"settings"}>
                        <SettingsCard />
                    </div>
                </CSSTransition>
            </div>

        )
    }
}
