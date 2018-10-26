import React from "react"
import ReactDOM from "react-dom"
import Application from "./application/application"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import configureStore from "./application/store"
import createHistory from "history/createBrowserHistory"
import lightBlue from "@material-ui/core/colors/lightBlue";

const store = configureStore()
export const history = createHistory()

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <MuiThemeProvider theme={
                        createMuiTheme({
                            typography: {
                                fontFamily: "PT Sans",
                                useNextVariants: true
                            },
                            palette: {
                                primary: lightBlue,
                                secondary: lightBlue,
                            }
                        })}
                    >
                        <Component history={history} />
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
