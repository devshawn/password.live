import React from "react"
import ReactDOM from "react-dom"

import Application from "./application/application"

import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import configureStore from "./application/store"
import createHistory from "history/createBrowserHistory"

const store = configureStore()
const history = createHistory()

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                <Router history={ history }>
                    <MuiThemeProvider>
                        <Component history={ history }/>
                    </MuiThemeProvider>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    )
}

render(Application)

if (module.hot) {
    module.hot.accept("./application/application", () => render(Application))
}