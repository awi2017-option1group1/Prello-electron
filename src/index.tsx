import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'

import registerServiceWorker from './registerServiceWorker'
import store, { history } from './redux/store'
import Layout from './components/Layout/Layout'

import { requireAuth } from './components/Auth'

import { actionCreators } from './redux/auth/actions'
import { AUTH } from './shared/auth'

import './index.css'

import IndexPage from './routes/IndexPage/IndexPage'
import LoginPage from './routes/LoginPage/LoginPage'
import OAuthPage from './routes/OauthPage/OauthPage'

import { websockets as client } from './shared/websocketClient'
import storage from './shared/storage'
// import {  actionCreators as boardsActionCreators } from './redux/boards/actions'
import { displayNotification } from './shared/notification'
import { ACCESS_TOKEN_KEY } from './shared/http'

AUTH.get('/myUser')
.then(
    response => {
        store.dispatch(
            actionCreators.loginSuccess(response.me)
        )

        client.initialize()
        client.on('connected', () => {
            client.on('authorized', () => {
                console.log('authorized')

                /* tslint:disable */
                client.on('add-notification', (response: any) => {
                /* tslint:enable */
                    displayNotification({
                        title: 'New notification',
                        message: `${response.notification.type}(${response.notification.about}) by 
                            ${response.notification.from} at ${response.notification.date}
                        `
                    })                   
                })  
            })
        
            client.on('unauthorized', () => {
                console.log('unauthorized')
            })
        
            client.emit('authorize', { token: storage.get(ACCESS_TOKEN_KEY).token })
        })
    }
)
.catch(
    error => {
        actionCreators.loginFail()
    }
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
                <Route exact={true} path="/" component={LoginPage}/>
                <Route exact={true} path="/oauth" component={OAuthPage}/>
                <Route exact={true} path="/boards" component={requireAuth(IndexPage)}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
