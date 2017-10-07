import React from "react"

import { NavigationComponent } from "./navigation/navigation.component"
import "./application.css"

import "ptsans-npm-webfont"
import { FooterComponent } from "./footer/footer.component"
import { NotificationComponent } from "./notification/notification.component"
import { RouterComponent } from "./router/router.component"

export default class Application extends React.Component {
    render() {
        const { history } = this.props
        return (
            <div>
                <NavigationComponent history={ history }/>
                <RouterComponent/>
                <NotificationComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
