import React from "react"

import { NavigationComponent } from "./navigation/navigation.component"
import "./application.css"

import "ptsans-npm-webfont"
import { NotificationComponent } from "./notification/notification.component"
import { RouterComponent } from "./router/router.component"
import { FooterComponent } from "./footer/footer.component"
import { hot } from "react-hot-loader"

class Application extends React.Component {
    render() {
        const { history } = this.props
        console.log(this.props);
        return (
            <div id="main">
                <NavigationComponent history={history} />
                <RouterComponent />
                <NotificationComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default hot(module)(Application)
