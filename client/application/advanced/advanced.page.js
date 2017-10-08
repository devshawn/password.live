import React from "react"
import { Col } from "react-grid-system"
import { connect } from "react-redux"
import { AdvancedFormComponent } from "./advanced.form.component"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"
import { getAdvancedPassword } from "../password/password.actions"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class AdvancedPage extends React.Component {

    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
    }

    generatePassword() {

        this.props.dispatch(getAdvancedPassword(this.advancedFormComponent.advancedFormItemsComponent.state))
    }

    render() {
        return (
            <div style={ { width: "80vw" } }>
                <Col xs={ 12 } md={ 7 } push={ { md: 5 } }>
                    <PasswordBoxComponent/>
                    <PasswordButtonsComponent page={ this } generatePassword={ this.generatePassword }/>
                </Col>
                <Col xs={ 12 } md={ 5 } pull={ { md: 7 } }>
                    <AdvancedFormComponent ref={ (advancedFormComponent) => this.advancedFormComponent = advancedFormComponent }/>
                </Col>
            </div>
        )
    }
}
