import React from "react"
import { connect } from "react-redux"
import { getSimplePassword } from "../password/password.actions"
import { PasswordBoxComponent } from "../password/password.box.component"
import { PasswordButtonsComponent } from "../password/password.buttons.component"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class SimplePasswordComponent extends React.Component {
    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
    }

    componentWillMount() {
        this.generatePassword()
    }

    generatePassword() {
        console.log(this.props)

        this.props.dispatch(getSimplePassword())
    }

    render() {
        return (
            <div>
                <PasswordBoxComponent/>
                <PasswordButtonsComponent generatePassword={ this.generatePassword }/>
            </div>
        )
    }
}
