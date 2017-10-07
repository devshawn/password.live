import React from "react"
import AppBar from "material-ui/AppBar"
import FontIcon from "material-ui/FontIcon"
import { Tab, Tabs } from "material-ui/Tabs"
import { appBarStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"

const items = [
    { label: "Simple", value: "/" },
    { label: "Advanced", value: "/test" },
    { label: "Help", value: "/lol" }
]

const tabItemContainerStyles = tabItemContainerStyle(items)

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
            <AppBar title="Password Generator" style={ appBarStyle } iconElementLeft={ <FontIcon style={ iconStyle } className="fa fa-user-secret"/> }>
                <Tabs value={ value } onChange={ this.handleNavigation } tabItemContainerStyle={ tabItemContainerStyles } inkBarStyle={ inkBarStyle }>
                    {
                        items.map((item) => <Tab key={ item.value } label={ item.label } value={ item.value } style={ tabItemStyle }/>)
                    }
                </Tabs>
            </AppBar>
        )
    }
}
