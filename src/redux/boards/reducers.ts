import {    ERROR, 
            FETCH_BOARDS, 
            FETCH_BOARDS_SUCCESS, 
            INCREMENT_NOTIF_NUMBER, 
            MARK_AS_READ, 
            SUCCESS } from './actions'

import { RootAction } from '../RootAction'
import { IBoard } from './types'

export type State = {
    boards: IBoard[],
    error: string | null,
    isProcessing: boolean,
    userID: number,
}

const defaultValue: State = {
    boards: [{
        id: 1,
        name: 'default',
        notifNumber: 0,
        position: 0
    }],
    error: null,
    isProcessing: false,
    userID: 1,
}

export const reducer = (state: State = defaultValue, action: RootAction) => { 
        switch (action.type) {
            case ERROR: 
            return {
                ...state,
                error: action.message, 
                isProcessing: false,
            }

            case FETCH_BOARDS:
                return {
                    ...state,
                    boards: [
                        ...defaultValue.boards,
                    ],
                    error: null,
                    isProcessing: true,
                    userID: action.userID
                }

            case FETCH_BOARDS_SUCCESS:
                action.boards.forEach(b => b.notifNumber = 0) // TODO Modify this
                return {
                    ...state,
                    boards: action.boards,
                    isProcessing: false,
                }

            case INCREMENT_NOTIF_NUMBER:
                state.boards[action.index].notifNumber++
                return { // not sure
                    ...state,
                    boards: [
                        ...state.boards,
                    ] 
                }

            case MARK_AS_READ: 
                state.boards[action.index].notifNumber = 0
                return { // not sure
                    ...state,
                    boards: [
                        ...state.boards
                    ] 
                }

            case SUCCESS:
                return {
                    ...state,
                    error: null,
                    isProcessing: false,
                }

            default:
                return state
    }
}
