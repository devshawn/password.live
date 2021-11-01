import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { cardContainerStyle } from "../styles"
import { notFoundCardTextStyle } from "./error.styles"

export class ErrorPage extends React.Component {
    render() {
        return (
            <Card style={cardContainerStyle}>
                <CardContent style={notFoundCardTextStyle}>
                    Oh no! Page not found! Try using the navigation bar above.
                </CardContent>
            </Card>
        )
    }
}
