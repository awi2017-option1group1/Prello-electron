import * as React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Boards, { BoardsProps } from './Boards'

const DnDContextBoard = (props2: BoardsProps) => {
    return (
        <DragDropContext onDragEnd={() => null}>
            <Boards {...props2} />
        </DragDropContext>
    )
}

export default DnDContextBoard
