import React from "react"
import { connect } from "react-redux"
import { getSimplePassword } from "../password/password.actions"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"
import { PASSWORD_SIMPLE } from "../password/password.categories"
import { Col } from "react-grid-system"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class SimplePage extends React.Component {

    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
    }

    componentWillMount() {
        const { passwordSimple } = this.props.reducerState
        if (passwordSimple === "") this.generatePassword()
    }

    generatePassword() {
        this.props.dispatch(getSimplePassword())
    }

    render() {
        return (
            <Col xs={ 12 }>
                <PasswordBoxComponent passwordCategory={ PASSWORD_SIMPLE }/>
                <PasswordButtonsComponent passwordCategory={ PASSWORD_SIMPLE } generatePassword={ this.generatePassword }/>
            </Col>
        )
    }
}
