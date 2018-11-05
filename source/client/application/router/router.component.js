import React from "react"
import { Route, Switch } from "react-router-dom"
import { SettingsSharePage } from "../settings/settings.share.page"
import { PasswordPage } from "../password/password.page"
import { LearnPage } from "../learn/learn.page"
import { ErrorPage } from "../error/error.page"

export class RouterComponent extends React.Component {
    render() {
        return (
            <div className={ "wrapper"} >
                <div className={"center-vertically"}>
                    <Switch>
                        <Route key={ "/" } exact path={ "/" } component={ PasswordPage }/>
                        <Route key={ "/s/*" } exact path={ "/s/*" } component={ SettingsSharePage }/>
                        <Route key={ "/learn" } exact path={ "/learn" } component={ LearnPage }/>
                        <Route path={ "*" } component={ ErrorPage }/>
                    </Switch>
                </div>
            </div>
        )
    }
}
