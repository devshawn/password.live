import React from "react"
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { appBarStyle, appBarTitleStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"

const tabItemContainerStyles = tabItemContainerStyle(2)

export class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: window.location.pathname }
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(event, value) {
        this.props.history.push(value)
        this.setState({ value: value })
    }

    render() {
        const { value } = this.state

        return (
            <AppBar title="Password Generator" titleStyle={appBarTitleStyle} style={appBarStyle} iconElementLeft={<FontIcon style={iconStyle} className="fa fa-user-secret" aria-hidden="true" />}>
                <Tabs value={value} onChange={this.handleNavigation} tabItemContainerStyle={tabItemContainerStyles} inkBarStyle={inkBarStyle}>
                    <Tab key={"/"} label={"Home"} value={"/"} style={tabItemStyle} />
                    <Tab key={"/learn"} label={"Learn"} value={"/learn"} style={tabItemStyle} />
                </Tabs>
            </AppBar>
        )
    }
}
