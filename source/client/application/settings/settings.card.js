import React from "react"
import { Avatar, Card, CardHeader, CardContent, Icon } from "@material-ui/core"
import { lightBlue } from "@material-ui/core/colors"
import { shieldIconStyle } from "./settings.styles"
import { SettingsCardItems } from "./settings.card.items"

export class SettingsCard extends React.Component {

    render() {
        const avatar = <Avatar style={{ backgroundColor: lightBlue[500] }}><Icon style={shieldIconStyle} className="fa fa-shield" aria-hidden="true" /></Avatar>

        return (
            <Card>
                <CardHeader title="Password Settings" subheader="Customize your generated password" avatar={avatar} />
                <CardContent>
                    <SettingsCardItems />
                </CardContent>
            </Card>
        )
    }
}
