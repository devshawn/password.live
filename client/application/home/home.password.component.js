import React from "react"
import { getInitialPassword } from "../password/password.actions"
import { connect } from "react-redux"
import { Button, Card } from "element-react"
import "./home.css"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})

export class HomePasswordComponent extends React.Component {
    constructor(props) {
        super(props)
        this.generatePassword = this.generatePassword.bind(this)
    }

    componentWillMount() {
        this.generatePassword()
    }

    generatePassword() {
        this.props.dispatch(getInitialPassword())
    }

    render() {
        return (
            <div className="center-text">
                <Card className="password-card">
                    {this.props.reducerState.initialPassword}
                </Card>

                <Button type="success" onClick={this.generatePassword}>Generate Password</Button>
            </div>
        )
    }
}