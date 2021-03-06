// import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { actionCreators as boardActionCreators } from '../../redux/boards/actions'
import { actionCreators as notifActionCreators } from '../../redux/notifications/actions'

import Boards  from './Boards'

import { IBoard } from '../../redux/boards/types'
import { INotification } from '../../redux/notifications/types'

import { Dispatch, RootState } from '../../redux/RootReducer'

interface BoardContainerProps {
    userID: string,
    // boards: IBoard[]
}

interface PropsFromState {
    boards: IBoard[]
    loading?: boolean
    error?: string | null
    notifications: INotification[]
}

interface PropsFromDispatch {
    incrementNotifNumber: (index: number) => void
    loadData?: () => void
}

const mapStateToProps = (state: RootState, ownProps: BoardContainerProps) => {
    return {
        boards: state.board.boards,
        loading: state.board.isProcessing,
        error: state.board.error,
        userID: state.auth.user!.uid,
        notifications: state.board.notifications
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: BoardContainerProps) => {
    return {
        incrementNotifNumber: (index: number) => dispatch(boardActionCreators.incrementNotifNumber(index)),
        loadData: () => { 
            dispatch(boardActionCreators.fetchBoard()) 
            dispatch(notifActionCreators.fetchNotifications())
        }
    }
}

const BoardContainer = connect<PropsFromState, PropsFromDispatch, BoardContainerProps>(
        mapStateToProps,
        mapDispatchToProps
    )(Boards)

export default BoardContainer
