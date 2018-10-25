import React from "react"
import { Card, CardText } from "material-ui/Card"
import { cardContainerStyle } from "../styles"
import { notFoundCardTextStyle } from "./error.styles"

export class ErrorPage extends React.Component {
    render() {
        return (
            <Card containerStyle={ cardContainerStyle }>
                <CardText style={ notFoundCardTextStyle }>
                    Oh no! Page not found! Try using the navigation bar above.
                </CardText>
            </Card>
        )
    }
}
