import React from "react"
import { connect } from "react-redux"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { cardContainerStyle, cardTextStyle, containerDivStyle } from "../styles"

@connect((store) => ({
    password: store.passwordReducer.password
}))
export class PasswordBoxComponent extends React.Component {

    render() {
        const { password } = this.props

        let _cardTextStyle = Object.assign({}, cardTextStyle)

        _cardTextStyle.fontSize = `${48 - Math.trunc(Math.log(Math.round(password.length / 10)) * 10)}px`

        return (
            <div style={containerDivStyle}>
                <Card style={cardContainerStyle}>
                    <CardContent style={_cardTextStyle}>
                        {password}
                    </CardContent>
                </Card>
            </div>
        )
    }
}
