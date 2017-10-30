import * as React from 'react'

import { IBoard } from '../../redux/boards/types'
import { StateProps } from '../StateProps'

export interface BoardProps extends StateProps {
    boards: IBoard[]

    // disableNotification: () => void TODO
    markAsRead: (index: number) => void
    incrementNotifNumber: (index: number) => void
}

class Board extends React.Component<BoardProps> {
    componentWillMount() {
        this.props.loadData!()
    }

    render() {// TODO : A FOR EACH
        return(
            <section id="board"> 
                <div>
                    <h1>{this.props.boards[0].title}</h1>
                    <h2 id="notifNumber">{this.props.boards[0].notifNumber}</h2>
                </div>
            </section>
        )
    }
}

export default Board
