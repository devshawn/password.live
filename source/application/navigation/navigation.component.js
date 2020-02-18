import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Typography from "@material-ui/core/Typography"
import { appBarTitleStyle, appToolBarStyle, iconStyle } from "./navigation.styles"

export class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(event, value) {
        this.props.history.push(value)
        this.setState({ value: value })
    }

    render() {
        return (
            <AppBar position="static" style={ appToolBarStyle }>
                <div style={ { display: "flex", flexGrow: 2 } }>
                    <Icon style={ iconStyle } className="fa fa-user-secret" aria-hidden="true"/>
                    <Typography variant="h6" style={ appBarTitleStyle } color="inherit">
                        Password Generator
                    </Typography>
                </div>
            </AppBar>
        )
    }
}
