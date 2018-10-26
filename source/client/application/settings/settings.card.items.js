import React from "react"
import copy from "copy-to-clipboard"
import { connect } from "react-redux"
import { Divider, RaisedButton, Slider, Toggle } from "material-ui"
import { red600 } from "material-ui/styles/colors"
import { dividerStyle, sliderStyle, toggleStyle } from "./settings.styles"
import { updatePasswordSettings } from "../settings/settings.actions"
import { Col } from "react-grid-system"
import { innerButtonLabelStyle, innerButtonStyle } from "../styles"
import { defaultPasswordSettings } from "../../../server/constants/password.constants"
import { sendNotification } from "../notification/notification.actions"
import { generateSettingsQueryString } from "../settings/settings.helper"

@connect((store) => ({
    settings: store.settingsReducer.settings
}))
export class SettingsCardItems extends React.Component {
    constructor(props) {
        super(props)
        this.changeLength = this.changeLength.bind(this)
        this.changeToggle = this.changeToggle.bind(this)
        this.changeRememberToggle = this.changeRememberToggle.bind(this)
        this.resetSettings = this.resetSettings.bind(this)
        this.copyShareURL = this.copyShareURL.bind(this)
    }

    generateToggleList() {
        const { settings } = this.props
        return [
            { property: "lowercase", label: "Include Lowercase Letters", toggled: settings.lowercase, onToggle: this.changeToggle },
            { property: "uppercase", label: "Include Uppercase Letters", toggled: settings.uppercase, onToggle: this.changeToggle },
            { property: "numbers", label: "Include Numbers", toggled: settings.numbers, onToggle: this.changeToggle },
            { property: "symbols", label: "Include Symbols", toggled: settings.symbols, onToggle: this.changeToggle },
            { property: "remember", label: "Remember My Settings", toggled: settings.remember, onToggle: this.changeRememberToggle }
        ]
    }

    changeLength(event, value) {
        this.props.dispatch(updatePasswordSettings({ length: value }))
    }

    changeToggle(event, value) {
        const property = event.target.dataset.property
        this.props.dispatch(updatePasswordSettings({ [property]: value }))
    }

    changeRememberToggle(event, value) {
        this.changeToggle(event, value)
        if (value === true) {
            this.props.dispatch(sendNotification("This setting enables the use of cookies to store settings."))
        }
    }

    resetSettings() {
        const { settings } = this.props
        this.props.dispatch(updatePasswordSettings(Object.assign({}, defaultPasswordSettings, { advanced: settings.advanced })))
        this.props.dispatch(sendNotification("Settings reset to default!"))
    }

    copyShareURL() {
        const { settings } = this.props
        const queryString = generateSettingsQueryString(settings)
        copy(`${window.location.href}s/?${queryString}`)
        this.props.dispatch(sendNotification("Sharable settings URL copied to clipboard!"))
    }

    render() {
        const { settings } = this.props
        return (
            <div>
                Length: {settings.length}
                <Slider value={settings.length} onChange={this.changeLength} min={5} max={100} step={1} sliderStyle={sliderStyle} aria-label={"Password Length Slider: " + settings.length + ". Increase or decrease length using arrow keys."} />
                {
                    this.generateToggleList().map((toggle) => {
                        return (
                            <div key={toggle.property}>
                                <Divider style={dividerStyle} />
                                <Toggle data-property={toggle.property} label={toggle.label} toggled={toggle.toggled} style={toggleStyle} onToggle={toggle.onToggle} aria-label={toggle.label} />
                            </div>
                        )
                    })
                }
                <Divider style={dividerStyle} />
                <div>
                    <Col xs={12} xl={5}>
                        <RaisedButton onClick={this.resetSettings} backgroundColor={red600} labelStyle={innerButtonLabelStyle} style={innerButtonStyle} label="Reset" />
                    </Col>
                    <Col xs={12} xl={7}>
                        <RaisedButton onClick={this.copyShareURL} backgroundColor={"#F18A00"} labelStyle={innerButtonLabelStyle} style={innerButtonStyle} label="Copy Settings URL" />
                    </Col>
                </div>
                <div style={{ clear: "both" }} />
            </div>
        )
    }
}