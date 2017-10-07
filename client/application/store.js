import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk))

    if (module.hot) {
        module.hot.accept(() => store.replaceReducer(rootReducer))
    }

    return store
}
