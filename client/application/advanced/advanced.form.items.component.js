import React from "react"
import { Divider, Slider, Toggle } from "material-ui"
import { dividerStyle, sliderStyle, toggleStyle } from "./advanced.styles"

export class AdvancedFormItemsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { length: 10, lowercase: true, uppercase: false, numbers: false, symbols: false }
        this.toggleList = this.generateToggleList()
        this.changeLength = this.changeLength.bind(this)
        this.changeToggle = this.changeToggle.bind(this)
    }

    generateToggleList() {
        return [
            { property: "lowercase", label: "Include Lowercase Letters", defaultToggled: this.state.lowercase },
            { property: "uppercase", label: "Include Uppercase Letters", defaultToggled: this.state.uppercase },
            { property: "numbers", label: "Include Numbers", defaultToggled: this.state.numbers },
            { property: "symbols", label: "Include Symbols", defaultToggled: this.state.symbols }
        ]
    }

    changeLength(event, value) {
        this.setState({ length: value })
    }

    changeToggle(event, value) {
        const property = event.target.dataset.property
        this.setState({ [property]: value })
    }

    render() {
        return (
            <div>
                Length: { this.state.length }
                <Slider value={ this.state.length } onChange={ this.changeLength } min={ 5 } max={ 100 } step={ 1 } sliderStyle={ sliderStyle }/>
                {
                    this.toggleList.map((toggle) => {
                        return (
                            <div key={ toggle.property }>
                                <Divider style={ dividerStyle }/>
                                <Toggle

                                    data-property={ toggle.property }
                                    label={ toggle.label }
                                    defaultToggled={ toggle.defaultToggled }
                                    style={ toggleStyle }
                                    onToggle={ this.changeToggle }
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
