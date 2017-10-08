import React from "react"
import { connect } from "react-redux"
import { Card, CardText } from "material-ui"
import { cardContainerStyle, cardTextStyle } from "../styles"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class PasswordBoxComponent extends React.Component {
    render() {
        const { password } = this.props.reducerState
        cardTextStyle.fontSize = `${48 - Math.trunc(Math.log(Math.round(password.length / 10)) * 10)}px`

        return (
            <Card containerStyle={ cardContainerStyle }>
                <CardText style={ cardTextStyle }>
                    { password }
                </CardText>
            </Card>
        )
    }
}
