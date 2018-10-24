import React from "react"
import { Avatar, Icon } from "@material-ui/core"
import { Card, CardHeader, CardText } from "@material-ui/core/Card"
import { lightBlue500 } from "@material-ui/core/colors/lightBlue"
import { shieldIconStyle } from "./advanced.styles"
import { AdvancedFormItemsComponent } from "./advanced.form.items.component"

export class AdvancedFormComponent extends React.Component {
    render() {
        const avatar = <Avatar
            // backgroundColor={lightBlue500} 
            icon={
                <Icon
                    style={shieldIconStyle}
                    className="fa fa-shield" />
            } />

        return (
            <Card>
                <CardHeader
                    title="Password Settings"
                    subtitle="Customize your generated password"
                    avatar={avatar}
                />
                <CardText>
                    <AdvancedFormItemsComponent />
                </CardText>
            </Card>
        )
    }
}
