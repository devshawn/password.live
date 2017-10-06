import React from "react"
import { HomePasswordComponent } from "./home.password.component"

export class HomeComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="center-vertically">
                    <h1 className="center-text color-white">Password Generator</h1>
                    <HomePasswordComponent/>
                </div>
            </div>
        )
    }
}