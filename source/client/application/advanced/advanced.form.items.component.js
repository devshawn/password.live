import React from "react"
import { connect } from "react-redux"
import Divider from "@material-ui/core/Divider"
import Slider from '@material-ui/lab/Slider'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { dividerStyle, sliderStyle, toggleStyle } from "./advanced.styles"
import { updatePasswordSettings } from "../password/password.actions"

@connect((store) => {
    return {
        reducerState: store.passwordReducer
    }
})
export class AdvancedFormItemsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.toggleList = this.generateToggleList()
        this.changeLength = this.changeLength.bind(this)
        this.changeToggle = this.changeToggle.bind(this)
    }

    generateToggleList() {
        const { settings } = this.props.reducerState
        return [
            { property: "lowercase", label: "Include Lowercase Letters", defaultToggled: settings.lowercase },
            { property: "uppercase", label: "Include Uppercase Letters", defaultToggled: settings.uppercase },
            { property: "numbers", label: "Include Numbers", defaultToggled: settings.numbers },
            { property: "symbols", label: "Include Symbols", defaultToggled: settings.symbols }
        ]
    }

    changeLength(event, value) {
        this.props.dispatch(updatePasswordSettings({ length: value }))
    }

    changeToggle(event, value) {
        const property = event.target.dataset.property
        this.props.dispatch(updatePasswordSettings({ [property]: value }))

    }

    render() {
        const { settings } = this.props.reducerState

        return (
            <div>
                Length: {settings.length}
                <Slider value={settings.length} onChange={this.changeLength} min={5} max={100} step={1} sliderStyle={sliderStyle} />
                {
                    this.toggleList.map((toggle) => {
                        return (
                            <div key={toggle.property}>
                                <Divider style={dividerStyle} />
                                <ToggleButton

                                    data-property={toggle.property}
                                    label={toggle.label}
                                    defaultToggled={toggle.defaultToggled}
                                    style={toggleStyle}
                                    onToggle={this.changeToggle}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
