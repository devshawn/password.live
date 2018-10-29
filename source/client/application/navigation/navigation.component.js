import React from "react"
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { appBarStyle, appBarTitleStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"

const tabItemContainerStyles = tabItemContainerStyle(2)

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
            <AppBar position="static" style={appBarStyle}>
                <Toolbar>
                    <div style={{ display: "flex" }}>
                        <Icon style={iconStyle} className="fa fa-user-secret" aria-hidden="true"></Icon>
                        <Typography variant="h6" style={appBarTitleStyle} color="inherit">
                            Password Generator
                            </Typography>
                    </div>
                    <div style={{ marginLeft: "auto", marginBottom: "inherit" }}>
                        <Tabs
                            fullWidth
                            value={value}
                            onChange={this.handleNavigation}
                            style={tabItemContainerStyles}
                            indicatorColor="primary"
                        >
                            <Tab key={"/"} label={"Home"} value={"/"} style={tabItemStyle} component={Link} to={"/"} onClick={event => event.preventDefault()} />
                            <Tab key={"/learn"} label={"Learn"} value={"/learn"} style={tabItemStyle} component={Link} to={"/learn"} onClick={event => event.preventDefault()} />
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
