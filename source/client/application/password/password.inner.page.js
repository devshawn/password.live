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
        this.toggleCSSClass = this.toggleCSSClass.bind(this)

        this.state = {
            settingsOpen: props.settings.advanced
        }
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

    toggleCSSClass(settingsOpen) {
        this.setState(() => ({ settingsOpen }))
    }

    render() {
        const { props: { settings: { advanced } }, state: { settingsOpen } } = this

        return (
            <div className={ "page"}>
                <Col xs={ 12 } md={ settingsOpen ? 7 : 8 } push={ { md: settingsOpen ? 5 : 2 } }>
                    <div>
                        <Visible xs sm>{ this.renderButtons() }</Visible>
                        <PasswordBoxComponent/>
                        <Hidden xs sm>{ this.renderButtons() }</Hidden>
                    </div>
                </Col>
                <CSSTransition classNames={ "settings" } timeout={ 1000 } in={ advanced } unmountOnExit onExited={ () => this.toggleCSSClass(false) } onEnter={ () => this.toggleCSSClass(true) }>
                    <Col xs={ 12 } md={ 5 } pull={ { md: 7 } } className={ "settings" }>
                        <SettingsCard/>
                    </Col>
                </CSSTransition>
            </div>
        )
    }
}
