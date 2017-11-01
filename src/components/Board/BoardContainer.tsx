import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { actionCreators as boardActionCreators } from '../../redux/boards/actions'
import Board  from './DnDContextBoard'
import { IBoard } from '../../redux/boards/types'
import { Dispatch, RootState } from '../../redux/RootReducer'

interface BoardContainerProps {
    match: {
        params: {
            userID: string
        }
    },
    boards: IBoard[]
}

interface PropsFromState {
    boards: IBoard[]
    loading?: boolean
    error?: string | null
    userID: number
}

interface PropsFromDispatch {
    boards: IBoard[]
    loadData?: () => void
    // disableNotification: () => void TODO
    markAsRead: (index: number) => void
    incrementNotifNumber: (index: number) => void
}

const mapStateToProps = (state: RootState) => {
    return {
        boards: state.board.boards,
        loading: state.board.isProcessing,
        error: state.board.error,
        userID: state.board.userID
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: BoardContainerProps) => {
    return {
        boards: [{id: 1, title: 'prout', notifNumber: 0, position: 0}],
        loadData: () => { 
            console.log('prout')
            console.log(ownProps)
            console.log(ownProps.match.params.userID)
            dispatch(boardActionCreators.fetchBoard(Number(ownProps.match.params.userID))) },
        markAsRead: (index: number) => dispatch(boardActionCreators.markAsRead(index)),
        incrementNotifNumber: (index: number) => dispatch(boardActionCreators.incrementNotifNumber(index))
    }
}

const BoardContainer = withRouter(
    connect<PropsFromState, PropsFromDispatch, {}>(
        mapStateToProps,
        mapDispatchToProps
    )(Board)
)

export default BoardContainer