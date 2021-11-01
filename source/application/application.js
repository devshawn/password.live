import React from "react"

import "./application.css"

import "ptsans-npm-webfont"

import { NavigationComponent } from "./navigation/navigation.component"

import { NotificationComponent } from "./notification/notification.component"
import { RouterComponent } from "./router/router.component"
import { FooterComponent } from "./footer/footer.component"

class Application extends React.Component {
    render() {
        const { history } = this.props
        return (
            <div id="main">
                <NavigationComponent history={history}/>
                <RouterComponent/>
                <NotificationComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

export default Application
