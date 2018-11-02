import React from "react"
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { appBarStyle, appBarTitleStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle, appToolBarStyle } from "./navigation.styles"

const tabItemContainerStyles = tabItemContainerStyle(2)

export class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(event, value) {
        event.preventDefault();
        let historyValue = location.pathname;
        this.props.history.push(historyValue)
        this.setState({ value: value })
    }

    render() {
        const { value } = this.state
        console.log(this.state);

        return (
            <AppBar position="static" style={appToolBarStyle}>
                <div style={{ display: "flex", flexGrow: 2 }}>
                    <Icon style={iconStyle} className="fa fa-user-secret" aria-hidden="true"></Icon>
                    <Typography variant="h6" style={appBarTitleStyle} color="inherit">
                        Password Generator
                </Typography>
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <Tabs
                        fullWidth
                        value={value}
                        onChange={this.handleNavigation}
                        style={tabItemContainerStyles}
                        indicatorColor="primary"
                    >
                        <Tab key={"/"} label={"Home"} style={tabItemStyle} value={0} component={Link} to={"/"} />
                        <Tab key={"/learn"} label={"Learn"} style={tabItemStyle} value={1} component={Link} to={"/learn"} />
                    </Tabs>
                </div>
            </AppBar>
        )
    }
}
