import React from "react"
import { Col, Hidden, Visible } from "react-grid-system"
import { connect } from "react-redux"
import { AdvancedFormComponent } from "./advanced.form.component"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"
import { getAdvancedPassword } from "../password/password.actions"
import { validatePasswordSettings } from "../password/password.helper"
import { sendNotification } from "../notification/notification.actions"
import { PASSWORD_ADVANCED } from "../password/password.categories"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class AdvancedPage extends React.Component {

    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
        this.renderButtons = this.renderButtons.bind(this)
    }

    componentDidMount() {
        const { passwordAdvanced } = this.props.reducerState
        if (passwordAdvanced === "") this.generatePassword()
    }

    generatePassword() {
        const { settings } = this.props.reducerState
        if (validatePasswordSettings(settings)) {
            this.props.dispatch(getAdvancedPassword(settings))
        } else {
            this.props.dispatch(sendNotification("Oops! You must have at least one setting turned on."))
        }
    }

    renderButtons() {
        return <PasswordButtonsComponent passwordCategory={ PASSWORD_ADVANCED } generatePassword={ this.generatePassword }/>
    }

    render() {
        return (
            <div className="page">
                <Col xs={ 12 } md={ 7 } push={ { md: 5 } }>
                    <Visible xs sm>{ this.renderButtons() }</Visible>
                    <PasswordBoxComponent passwordCategory={ PASSWORD_ADVANCED }/>
                    <Hidden xs sm>{ this.renderButtons() }</Hidden>
                </Col>
                <Col xs={ 12 } md={ 5 } pull={ { md: 7 } }>
                    <AdvancedFormComponent/>
                </Col>
            </div>
        )
    }
}
