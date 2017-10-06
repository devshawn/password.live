import React from "react"
import { HomeComponent } from "./home/home.component"

import "element-theme-default"
import "./application.css"

import configureStore from "./store"

const store = configureStore()

export default class Application extends React.Component {
    render() {
        return (
            <div>
                <HomeComponent/>
            </div>
        )
    }
}