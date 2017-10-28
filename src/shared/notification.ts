import * as io from 'socket.io-client'

// import { Notification as NativeNotification } from 'electron'

const socket = io('localhost', { 
    path: '/realtime',
    transports: ['websocket']
})

class Notification {
    title: string
    message: string
}

socket.on('connected', () => {

    socket.on('authorized', () => {
        console.log('authorized')

        socket.on('notification', (notification: Notification) => {
            console.log(notification)
            // const nativeNotification = new NativeNotification({
            //     title: notification.title,
            //     body: notification.message
            // })
            // nativeNotification.show()
        })
    })

    socket.on('unauthorized', () => {
        console.log('unauthorized')
    })
    
    socket.emit('authorize', { token: '1' })
})
