import React from "react"
import { getInitialPassword } from "../password/password.actions"
import { connect } from "react-redux"
import { Card, CardText } from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"
import { cardContainerStyle } from "../styles"

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
        this.props.dispatch(getInitialPassword())
    }

    render() {
        return (
            <div className="center-text">
                <Card containerStyle={ cardContainerStyle }>
                    <CardText>
                        { this.props.reducerState.initialPassword }
                    </CardText>
                </Card>

                <RaisedButton onClick={ this.generatePassword }>Generate Password</RaisedButton>
            </div>
        )
    }
}
