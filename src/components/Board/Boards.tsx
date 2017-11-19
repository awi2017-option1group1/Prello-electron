import * as React from 'react'

import Board from './Board'

import { IBoard } from '../../redux/boards/types'
import { INotification } from '../../redux/notifications/types'

import { StateProps } from '../StateProps'
import App from '../../App'

export interface BoardsProps extends StateProps {
    boards: IBoard[]
    notifications: INotification[]

    incrementNotifNumber: (index: number) => void
    loadData: () => void
}

// ---------------------------------------------------------------------------
/*
import { websockets as client } from '../../shared/websocketClient'
import { Notification, displayNotification } from '../../shared/notification'

client.initialize()
client.on('connected', () => {
    client.on('authorized', () => {
        console.log('authorized')
    })

    client.on('unauthorized', () => {
        console.log('unauthorized')
    })

    client.emit('authorize', { token: '1' })
})
*/
// ---------------------------------------------------------------------------

class Boards extends React.Component<BoardsProps> {
    constructor(props: BoardsProps) {
        super(props)
        this.props.loadData()
        /*
        client.on('notification', (notification: Notification) => {
            console.log(notification)
            displayNotification(notification)
            this.props.incrementNotifNumber(0)
        })
        */
    }
    render() {
        return(
               <div>
                    {
                        this.props.boards.sort((a, b) => a.position - b.position).map(board => 
                        <Board key={board.name} board={board}/>
                    )}
                    {

                    }
                    {console.log(this.props.boards)}
                    <App />
                </div>
        )
    }
}
export default Boards
