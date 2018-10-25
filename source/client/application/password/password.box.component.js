import React from "react"
import { connect } from "react-redux"
import { Card, CardText } from "material-ui"
import { cardContainerStyle, cardTextStyle, containerDivStyle } from "../styles"

@connect((store) => ({
    password: store.passwordReducer.password
}))
export class PasswordBoxComponent extends React.Component {

    render() {
        const { password } = this.props
        cardTextStyle.fontSize = `${48 - Math.trunc(Math.log(Math.round(password.length / 10)) * 10)}px`

        return (
            <div style={ containerDivStyle }>
                <Card containerStyle={ cardContainerStyle }>
                    <CardText style={ cardTextStyle }>
                        { password }
                    </CardText>
                </Card>
            </div>
        )
    }
}
