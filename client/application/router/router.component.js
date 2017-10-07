import React from "react"
import { Route, Switch } from "react-router-dom"
import { NotFoundPage } from "../error/not.found.page"
import { HomeTestComponent } from "../home/home.test.component"
import { SimplePage } from "../simple/simple.page"

export class RouterComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="center-vertically">

                    <Switch>
                        <Route exact path="/" component={ SimplePage }/>
                        <Route exact path="/test" component={ HomeTestComponent }/>
                        <Route path="*" component={ NotFoundPage }/>
                    </Switch>
                </div>
            </div>
        )
    }
}
