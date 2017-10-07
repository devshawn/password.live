import React from "react"
import { Route, Switch } from "react-router-dom"
import { NavigationComponent } from "./navigation/navigation.component"
import { HomeTestComponent } from "./home/home.test.component"
import "font-awesome/css/font-awesome.min.css"
import "./application.css"
import { NotFoundPage } from "./error/not.found.page"
import { SimplePage } from "./simple/simple.page"

import "ptsans-npm-webfont"
import { FooterComponent } from "./footer/footer.component"

export default class Application extends React.Component {
    render() {
        const { history } = this.props

        return (

            <div>
                <NavigationComponent history={ history }/>

                <div className="container">
                    <div className="center-vertically">

                        <Switch>
                            <Route exact path="/" component={ SimplePage }/>
                            <Route exact path="/test" component={ HomeTestComponent }/>
                            <Route path="*" component={ NotFoundPage }/>
                        </Switch>
                    </div>
                </div>

                <FooterComponent/>
            </div>
        )
    }
}
