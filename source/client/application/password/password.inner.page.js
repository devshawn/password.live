import React from "react"
import { Col, Hidden, Visible } from "react-grid-system"
import { connect } from "react-redux"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"
import { fetchPassword } from "../password/password.actions"
import { validatePasswordSettings } from "../password/password.helper"
import { sendNotification } from "../notification/notification.actions"
import { withRouter } from "react-router-dom"
import { SettingsCard } from "../settings/settings.card"

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
        return <PasswordButtonsComponent generatePassword={ this.generatePassword }/>
    }

    render() {
        const { settings } = this.props
        return (
            <div className="page">
                <Col xs={ 12 } md={ settings.advanced ? 7 : 8 } push={ { md: settings.advanced ? 5 : 2 } }>
                    <Visible xs sm>{ this.renderButtons() }</Visible>
                    <PasswordBoxComponent/>
                    <Hidden xs sm>{ this.renderButtons() }</Hidden>
                </Col>
                {
                    settings.advanced && (
                        <Col xs={ 12 } md={ 5 } pull={ { md: 7 } }>
                            <SettingsCard/>
                        </Col>
                    )
                }
            </div>
        )
    }
}
