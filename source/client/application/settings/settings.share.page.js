import React from "react"
import { Redirect, withRouter } from "react-router-dom"
import queryString from "query-string"
import { connect } from "react-redux"
import { retrievePasswordSettingsFromQueryString } from "./settings.helper"
import { updatePasswordSettings } from "../settings/settings.actions"

@withRouter
@connect(() => ({}))
export class SettingsSharePage extends React.Component {

    constructor(props) {
        super(props)
        const settings = retrievePasswordSettingsFromQueryString(queryString.parse(props.location.search))
        props.dispatch(updatePasswordSettings(Object.assign({}, settings, { advanced: true })))
    }

    render() {
        return <Redirect to={"/"} />
    }
}