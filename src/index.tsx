import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
// import App from './App'

import registerServiceWorker from './registerServiceWorker'
import store, { history } from './redux/store'
import Layout from './components/Layout/Layout'

import './index.css'

import IndexPage from './routes/IndexPage/IndexPage'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
                <Route exact={true} path="/" component={IndexPage}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
