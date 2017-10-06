import React from "react"
import ReactDOM from "react-dom"

import Application from "./application/application"
import configureStore from "./application/store"

import { AppContainer } from "react-hot-loader"
import { Provider } from "react-redux"

const store = configureStore()

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById("root")
    )
}

render(Application)

if (module.hot) {
    module.hot.accept("./application/application", () => render(Application))
}