import React from "react"
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

    handleNavigation(value) {
        console.log(value);
        this.props.history.push(value)
        this.setState({ value: value })
    }

    render() {
        const { value } = this.state

        return (
            <AppBar position="static" style={appBarStyle}
            // title="Password Generator"
            // titleStyle={appBarTitleStyle}
            // style={appBarStyle}
            // iconElementLeft={
            // <Icon style={iconStyle} className="fa fa-user-secret" />
            // }
            >
                <Toolbar>
                    <Icon style={iconStyle} className="fa fa-user-secret"></Icon>
                    <Typography variant="h6" style={appBarTitleStyle} color="inherit">
                        Password Generator
                    </Typography>
                    <Tabs
                        fullWidth
                        value={value}
                        onChange={this.handleNavigation}
                        style={tabItemContainerStyles}
                        indicatorColor="primary"
                    // inkBarStyle={inkBarStyle}
                    >
                        {
                            routes.map((route) => <Tab key={route.path} label={route.label} value={route.path} style={tabItemStyle} />)
                        }
                    </Tabs>
                </Toolbar>
            </AppBar>
        )
    }
}
