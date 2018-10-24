import React from "react"
import Card from "@material-ui/core/Card"
import CardText from "@material-ui/core/Card"
import { cardContainerStyle } from "../styles"
import { notFoundCardTextStyle } from "./error.styles"

export class NotFoundPage extends React.Component {
    render() {
        return (
            <Card
            // containerStyle={cardContainerStyle}
            >
                <CardText style={notFoundCardTextStyle}>
                    Oh no! Page not found! Try using the navigation bar above.
                </CardText>
            </Card>
        )
    }
}
