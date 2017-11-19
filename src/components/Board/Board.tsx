import * as React from 'react'

import { IBoard } from '../../redux/boards/types'
import { StateProps } from '../StateProps'
import { Card, Label, Icon } from 'semantic-ui-react'

export interface BoardProps extends StateProps {
    board: IBoard
}
class Board extends React.Component<BoardProps> {
    render() {
        return(
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.board.name}
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

export default Board
