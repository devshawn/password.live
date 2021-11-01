import React from "react"
import ReactDOM from "react-dom"
import Application from "./application"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import lightBlue from "@mui/material/colors/lightBlue";

import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import configureStore from "./store"
import { createBrowserHistory } from 'history';

const store = configureStore()
export const history = createBrowserHistory()

const appTheme = createTheme({
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
                <ThemeProvider theme={appTheme}>
                    <Component history={history} />
                </ThemeProvider>
            </Router>
        </Provider>,
        document.getElementById("root")
    )
}

render(Application)