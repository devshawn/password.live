import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk))

    if (module.hot) {
        module.hot.accept(() => store.replaceReducer(rootReducer))
    }

    return store
}