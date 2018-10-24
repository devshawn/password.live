import React from "react"
import { Col } from "react-grid-system"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardText from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"

export class LearnPage extends React.Component {

    render() {
        return (
            <Col xs={12}>
                <Card
                // containerStyle={{ padding: 0 }}
                >
                    <CardHeader
                        title="Learn More About Password Security"
                        subtitle="Password strength is important to maintain a secure identity online"
                        // titleStyle={{ textAlign: "center", fontSize: "20px", paddingBottom: "6px" }}
                        // subtitleStyle={{ textAlign: "center", fontSize: "16px" }}
                        // textStyle={{ paddingRight: 0 }}
                        style={{ paddingBottom: 0 }}

                    />
                    <CardText>
                        <Divider style={{ marginBottom: "10px" }} />

                        Coming soon!
                    </CardText>
                </Card>
            </Col>
        )
    }
}
