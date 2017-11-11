import * as React from 'react'

import { IBoard } from '../../redux/boards/types'
import { StateProps } from '../StateProps'

import { Card, Label, Icon } from 'semantic-ui-react'

export interface BoardsProps extends StateProps {
    boards: IBoard[]

    // disableNotification: () => void TODO
    markAsRead: (index: number) => void
    incrementNotifNumber: (index: number) => void
}

export interface BoardProps extends StateProps {
    board: IBoard
}

class Board extends React.Component<BoardProps> {
    render() {
        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.board.title}
                    </Card.Header>
                    Some description
                </Card.Content>
                <Card.Content extra>
                    <span className="right floated">
                        <Label color="blue" tag> 
                        <Icon className="alarm"/>
                            {this.props.board.notifNumber} 
                        </Label>
                    </span>
                </Card.Content>
            </Card>
        )
    }
}

class Boards extends React.Component<BoardsProps> {
    componentWillMount() {
        this.props.loadData!()
    }

    render() {// TODO : A FOR EACH
        return(
               <div>
                    {this.props.boards.sort((a, b) => a.position - b.position).map(board => 
                        <Board key={board.title} board={board}/>
                    )}
                </div>
        )
    }
}

const boardConst = (props: BoardsProps) => {
    return (
    <Boards {...props} />
    )
}

export default boardConst
