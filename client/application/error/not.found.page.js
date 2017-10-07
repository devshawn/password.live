import React from "react"
import { Card, CardText } from "material-ui/Card"
import { cardContainerStyle } from "../styles"

export class NotFoundPage extends React.Component {
    render() {
        return (
            <Card containerStyle={ cardContainerStyle }>
                <CardText>
                    Oh no! Page not found! Try using the navigation bar above.
                </CardText>
            </Card>
        )
    }
}
