import { createStore, compose, Middleware, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { rootReducer, RootState } from './RootReducer'

export const history = createHistory()

function configureStore(initialState?: RootState) {
    const middlewares: Middleware[] = [thunk, routerMiddleware(history)]
    const enhancer = compose(
        applyMiddleware(...middlewares),
    )
    return createStore(rootReducer, initialState!, enhancer)
}

const store = configureStore()

export default store
