import React from "react"
import { Col } from "react-grid-system"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import { learnCardStyle } from './learn.styles';

export class LearnPage extends React.Component {
    render() {
        const titleText = "Learn More About Password Security"
        const subtitleText = "Password strength is important to maintain a secure identity online"
        const cardTitle = <Typography variant="h1" style={{ textAlign: "center", fontSize: "20px", paddingBottom: "6px" }}>{titleText}</Typography>
        const cardSubtitle = <Typography variant="h6" style={{ textAlign: "center", fontSize: "16px" }}>{subtitleText}</Typography>
        const cardContent = <Typography variant="body1" style={{ paddingRight: 0, marginBottom: 0 }}>Coming soon!</Typography>
        return (
            <div style={learnCardStyle}>
                <Card style={{ padding: 0 }} >
                    <CardHeader style={{ paddingBottom: 0 }}
                        title={cardTitle}
                        subheader={cardSubtitle}>
                    </CardHeader>
                    <CardContent style={{ textAlign: "center" }}>
                        <Divider style={{ marginBottom: "10px" }} />

                        {cardContent}
                    </CardContent>
                </Card>
            </div>
        )
    }
}
