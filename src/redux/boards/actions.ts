import { API } from '../../shared/http'
import { Dispatch } from '../RootReducer'
import { IBoard } from './types'
// import { init, publish } from '../../shared/notification'

export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

export const FETCH_BOARDS = 'FETCH_BOARDS'
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS'
export const INCREMENT_NOTIF_NUMBER = 'INCREMENT_NOTIF_NUMBER'

export const MARK_AS_READ = 'MARK_AS_READ'

export type Actions = {
    SUCCESS: {
        type: typeof SUCCESS,
        message: string
    },

    ERROR: {
        type: typeof ERROR,
        message: string
    },

    FETCH_BOARDS: {
        type: typeof FETCH_BOARDS,
        userID: number
    },
    FETCH_BOARDS_SUCCESS: {
        type: typeof FETCH_BOARDS_SUCCESS,
        boards: IBoard[]
    },

    MARK_AS_READ: {
        type: typeof MARK_AS_READ,
        index: number
    },

    INCREMENT_NOTIF_NUMBER: {
        type: typeof INCREMENT_NOTIF_NUMBER,
        index: number
    }
}

export const actionCreators = {
    // --------------------------------------- //
    //                    SYNC                 //
    // --------------------------------------- //
    fetchBoardsRequest: (userID: number): Actions[typeof FETCH_BOARDS] => ({
        type: FETCH_BOARDS,
        userID
    }),
    fetchBoardsRequestError: (message: string): Actions[typeof ERROR] => ({
        type: ERROR,
        message
    }),
    fetchBoardsRequestSuccess: (boards: IBoard[]): Actions[typeof FETCH_BOARDS_SUCCESS] => ({
        type: FETCH_BOARDS_SUCCESS,
        boards
    }),

    markAsRead: (index: number): Actions[typeof MARK_AS_READ] => ({
        type: MARK_AS_READ,
        index
    }),

    incrementNotifNumber: (index: number): Actions[typeof INCREMENT_NOTIF_NUMBER] => ({
        type: INCREMENT_NOTIF_NUMBER,
        index
    }),
    // --------------------------------------- //
    //                   ASYNC                 //
    // --------------------------------------- //
    fetchBoard: (userID: number) => {
        return (dispatch: Dispatch) => {
            dispatch(actionCreators.fetchBoardsRequest(userID))
            return API.get(`/users/${userID}/boards`).then(
                boards => dispatch(actionCreators.fetchBoardsRequestSuccess(boards)),
                error => dispatch(actionCreators.fetchBoardsRequestError(error.error.error))
            )
        }
    }
}
