import React from "react"
import { Avatar, Icon } from "@material-ui/core"
import { Card, CardHeader, CardText } from "@material-ui/core/Card"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { shieldIconStyle } from "./advanced.styles"
import { AdvancedFormItemsComponent } from "./advanced.form.items.component"

export class AdvancedFormComponent extends React.Component {
    render() {
        const styles = {
            avatar: {
                backgroundColor: lightBlue[500]
            }
        }

        const avatar = <Avatar
            className={styles.avatar}
        // backgroundColor={lightBlue500} 
        // icon={

        // }
        >
            <Icon
                style={shieldIconStyle}
                className="fa fa-shield"
            />
        </Avatar>

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
