import React from "react"
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { appBarStyle, appBarTitleStyle, iconStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"
import { routes } from "../router/routes"

const tabItemContainerStyles = Object.assign({}, tabItemContainerStyle(routes))

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
            < div>
                <AppBar position="static" style={appBarStyle}>
                    <Toolbar>
                        <div style={{ display: "flex" }}>
                            <Icon style={iconStyle} className="fa fa-user-secret" aria-hidden="true">
                            </Icon>
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
                                {
                                    routes.map((route) => <Tab key={route.label} label={route.label} value={route.path} component={Link} to={route.path} style={tabItemStyle} onClick={event => event.preventDefault()} />)
                                }
                            </Tabs>
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        )
    }
}
