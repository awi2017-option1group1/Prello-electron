import * as React from 'react'
import { Grid } from 'semantic-ui-react'

import Board from './Board'

import { IBoard } from '../../redux/boards/types'
import { INotification } from '../../redux/notifications/types'

import { StateProps } from '../StateProps'

export interface BoardsProps extends StateProps {
    boards: IBoard[]
    notifications: INotification[]

    incrementNotifNumber: (index: number) => void
    loadData: () => void
}

class Boards extends React.Component<BoardsProps> {
    constructor(props: BoardsProps) {
        super(props)
        this.props.loadData()
    }

    render() {
        return(
            <Grid columns={4}>
                {
                    this.props.boards.sort((a, b) => a.position - b.position).map(
                        board => (
                            <Grid.Column key={board.id}>
                                <Board board={board}/>
                            </Grid.Column>
                        )
                    )
                }
            </Grid>
        )
    }
}

export default Boards
