import React from "react"
import { Col } from "react-grid-system"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

export class LearnPage extends React.Component {

    render() {

        const titleText = "Learn More About Password Security"
        const subtitleText = "Password strength is important to maintain a secure identity online"
        const cardTitle = <Typography variant="title" style={{ textAlign: "center", fontSize: "20px", paddingBottom: "6px" }}>{titleText}</Typography>
        const cardSubtitle = <Typography variant="subheading" style={{ textAlign: "center", fontSize: "16px" }}>{subtitleText}</Typography>
        const cardContent = <Typography variant="body1" style={{ paddingRight: 0 }}>Coming soon!</Typography>
        return (
            <Col xs={12}>
                <Card style={{ padding: 0 }}>
                    <CardHeader
                        title={cardTitle}
                        subheader={cardSubtitle}
                        // textStyle={{ paddingRight: 0 }}
                        style={{ paddingBottom: 0 }}
                    />
                    <CardContent>
                        <Divider style={{ marginBottom: "10px" }} />

                        {cardContent}
                    </CardContent>
                </Card>
            </Col>
        )
    }
}
