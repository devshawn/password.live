import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Cookies from "js-cookie"
import { updatePasswordSettings } from "../settings/settings.actions"
import { PasswordInnerPage } from "./password.inner.page"

@withRouter
@connect(store => ({
    settings: store.settingsReducer.settings
}))
export class PasswordPage extends React.Component {

    constructor(props) {
        super(props)
        const cookieValue = Cookies.getJSON("settings")
        console.log(cookieValue)
        if (cookieValue) {
            props.dispatch(updatePasswordSettings(cookieValue))
        }
    }

    render() {
        return <PasswordInnerPage/>
    }
}
