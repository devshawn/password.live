import React from "react"
import { Avatar, Card, CardHeader, CardText, FontIcon } from "material-ui"
import { lightBlue500 } from "material-ui/styles/colors"
import { shieldIconStyle } from "./advanced.styles"
import { AdvancedFormItemsComponent } from "./advanced.form.items.component"

export class AdvancedFormComponent extends React.Component {
    render() {
        const avatar = <Avatar backgroundColor={ lightBlue500 } icon={ <FontIcon style={ shieldIconStyle } className="fa fa-shield" aria-hidden="true"/> }/>

        return (
            <Card>
                <CardHeader
                    title="Password Settings"
                    subtitle="Customize your generated password"
                    avatar={ avatar }
                />
                <CardText>
                    <AdvancedFormItemsComponent/>
                </CardText>
            </Card>
        )
    }
}
