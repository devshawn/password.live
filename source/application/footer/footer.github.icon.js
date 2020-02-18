import React from "react"
import { iconHoverOffStyle, iconHoverOnStyle, iconPressedStyle } from "./footer.styles"

export class FooterGithubIcon extends React.Component {

    constructor(props) {
        super(props)
        this.state = { hover: false, pressed: false }
        this.hoverOn = this.hoverOn.bind(this)
        this.hoverOff = this.hoverOff.bind(this)
        this.pressedOn = this.pressedOn.bind(this)
        this.pressedOff = this.pressedOff.bind(this)
    }

    hoverOn() {
        this.setState({ hover: true })
    }

    hoverOff() {
        this.setState({ hover: false, pressed: false })
    }

    pressedOn() {
        this.setState({ pressed: true })
    }

    pressedOff() {
        this.setState({ pressed: false })
    }

    render() {
        const { hover, pressed } = this.state
        const iconStyle = pressed ? iconPressedStyle : (hover ? iconHoverOnStyle : iconHoverOffStyle)

        return (
            <a href="https://github.com/devshawn/password.live"
               target="_blank"
               style={ iconStyle }
               onMouseEnter={ this.hoverOn }
               onMouseLeave={ this.hoverOff }
               onMouseDown={ this.pressedOn }
               onMouseUp={ this.pressedOff }
            >
                <i className="fa fa-github fa-2x"/>
            </a>
        )
    }
}
