import React from "react"
import { Avatar, Icon } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { shieldIconStyle } from "./advanced.styles"
import { AdvancedFormItemsComponent } from "./advanced.form.items.component"

export class AdvancedFormComponent extends React.Component {
    render() {
        const avatarStyle = {
            backgroundColor: lightBlue[500]
        }

        const avatar = <Avatar
            style={avatarStyle}
        // backgroundColor={lightBlue500} 
        // icon={

        // }
        >
            <Icon
                style={shieldIconStyle}
                className="fa fa-shield"
            ></Icon>
        </Avatar>

        return (
            <Card>
                <CardHeader
                    title="Password Settings"
                    subtitle="Customize your generated password"
                    avatar={avatar}
                />
                <CardContent>
                    <AdvancedFormItemsComponent />
                </CardContent>
            </Card>
        )
    }
}
