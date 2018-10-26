import React from "react"
import Card from "@material-ui/core/Card"
import CardText from "@material-ui/core/Card"
import { cardContainerStyle } from "../styles"
import { notFoundCardTextStyle } from "./error.styles"

export class ErrorPage extends React.Component {
    render() {
        return (
            <Card
                style={cardContainerStyle}
            >
                <CardText style={notFoundCardTextStyle}>
                    Oh no! Page not found! Try using the navigation bar above.
                </CardText>
            </Card>
        )
    }
}
