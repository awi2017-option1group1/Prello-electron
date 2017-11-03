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
                    {this.props.boards.sort((a, b) => a.position - b.position).map(board => 
                        <h3 key={board.title}> {board.title} {board.notifNumber}</h3>
                    )}
                </div>
            </section>
        )
    }
}

const boardConst = (props: BoardProps) => {
    return (
    <Board {...props} />
    )
}

export default boardConst
