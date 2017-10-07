import React from "react"
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar"
import { footerBoxStyle, footerStyle } from "./footer.styles"

export class FooterComponent extends React.Component {
    render() {
        return (
            <Toolbar style={ footerStyle }>
                <ToolbarGroup firstChild={ true } style={ footerBoxStyle }>
                    Copyright &copy; 2017
                </ToolbarGroup>
            </Toolbar>
        )
    }
}
