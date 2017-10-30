import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import { websockets as client } from './shared/websocketClient'
import { Notification, displayNotification } from './shared/notification'

client.initialize()
client.on('connected', () => {
    client.on('authorized', () => {
        console.log('authorized')

        client.on('notification', (notification: Notification) => {
            console.log(notification)
            displayNotification(notification)
        })
    })

    client.on('unauthorized', () => {
        console.log('unauthorized')
    })

    client.emit('authorize', { token: '1' })
})

ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
