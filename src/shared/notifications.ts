import * as ioredis from 'ioredis'
import { Notification } from 'electron'

var pub = new ioredis()
var sub = new ioredis()
export function notification(chan: string) {
    sub.subscribe(chan, (err: Error, count: number) => {
        pub.publish(chan, 'This is a test')
    })
    sub.on('message', (channel: string, message: string) => {
        console.log('Receive message %s from channel %s', message, channel)

        let notif = new Notification({
            title: 'Notification',
            body: message
          })
        notif.show()
      })
}

export function publish(message: string, channel: string) {
    pub.publish(channel, message)
}
