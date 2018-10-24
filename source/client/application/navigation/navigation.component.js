import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { appBarStyle, appBarTitleStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"
import { routes } from "../router/routes"

const tabItemContainerStyles = Object.assign({}, tabItemContainerStyle(routes))

export class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: window.location.pathname }
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(value) {
        this.props.history.push(value)
        this.setState({ value: value })
    }

    render() {
        const { value } = this.state

        return (
            <AppBar
                title="Password Generator"
                // titleStyle={appBarTitleStyle}
                style={appBarStyle}
            // iconElementLeft={
            // <Icon style={iconStyle} className="fa fa-user-secret" />
            // }
            >
                <Tabs
                    value={value}
                    onChange={this.handleNavigation}
                // tabItemContainerStyle={tabItemContainerStyles} 
                // inkBarStyle={inkBarStyle}
                >
                    {
                        routes.map((route) => <Tab key={route.path} label={route.label} value={route.path} style={tabItemStyle} />)
                    }
                </Tabs>
            </AppBar>
        )
    }
}
