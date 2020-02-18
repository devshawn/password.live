import React from "react"
import ReactDOM from "react-dom"
import Application from "./application"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from "@material-ui/core/colors/lightBlue";

import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import configureStore from "./store"
import createHistory from "history/createBrowserHistory"

const store = configureStore()
export const history = createHistory()

const appTheme = createMuiTheme({
    typography: {
        fontFamily: "PT Sans",
        useNextVariants: true
    },
    palette: {
        primary: lightBlue,
        secondary: lightBlue,
    }
})

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <MuiThemeProvider theme={appTheme}>
                    <Component history={history} />
                </MuiThemeProvider>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}

render(Application)