export class Notification {
    title: string
    message: string
}

export const displayNotification = (notification: Notification) => {
    const notif = new window.Notification(notification.title, {
        body: notification.message,
        icon: 'https://avatars1.githubusercontent.com/u/32166471?s=200&v=4'
    })
    notif.onclick = () => console.log('clicked')
}
