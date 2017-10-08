import React from "react"
import { connect } from "react-redux"
import { Card, CardText } from "material-ui/Card"
import { cardContainerStyle, cardTextStyle } from "../styles"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class PasswordBoxComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { password } = this.props.reducerState

        return (
            <Card containerStyle={ cardContainerStyle }>
                <CardText style={ cardTextStyle }>
                    { password }
                </CardText>
            </Card>
        )
    }
}
