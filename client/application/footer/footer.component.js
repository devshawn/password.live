import React from "react"
import { footerLeftStyle, footerRightStyle, footerStyle } from "./footer.styles"
import { FooterGitlabIcon } from "./footer.gitlab.icon"

export class FooterComponent extends React.Component {
    render() {
        return (
            <div style={ footerStyle }>
                <div style={ footerLeftStyle }>
                    Copyright &copy; 2017
                </div>
                <div style={ footerRightStyle }>
                    <FooterGitlabIcon/>
                </div>

            </div>
        )
    }
}
