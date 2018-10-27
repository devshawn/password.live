import React from "react"
import ReactDOM from "react-dom"
import Application from "./application"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"

import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import configureStore from "./store"
import createHistory from "history/createBrowserHistory"

const store = configureStore()
export const history = createHistory()

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <MuiThemeProvider muiTheme={getMuiTheme({ fontFamily: "PT Sans" })}>
                    <Component history={history}/>
                </MuiThemeProvider>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}

render(Application)