import * as React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Board, { BoardProps } from './Board'

const DnDContextBoard = (props2: BoardProps) => {
    return (
        <DragDropContext onDragEnd={() => null}>
            <Board {...props2} />
        </DragDropContext>
    )
}

export default DnDContextBoard
