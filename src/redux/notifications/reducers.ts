import { FETCH_NOTIFICATIONS, FETCH_NOTIFICATIONS_ERROR, FETCH_NOTIFICATIONS_SUCCESS } from './actions/fetchAll'
import { DELETE_NOTIFICATIONS_ERROR, DELETE_NOTIFICATIONS_SUCCESS } from './actions/delete'
import { RootAction } from '../RootAction'
import { INotification } from '../notifications/types'

export type State = {
    error: string | null,
    isProcessing: boolean,
    notifications: INotification[],
}

const defaultValue: State = {
    error: null,
    isProcessing: false,
    notifications: []
}

export const reducer = (state: State = defaultValue, action: RootAction) => {
        switch (action.type) {
            case FETCH_NOTIFICATIONS:
                return {
                    ...state,
                    error: null,
                    isProcessing: true,
                }

            case FETCH_NOTIFICATIONS_SUCCESS:
                return {
                    ...state,
                    error: null,
                    isProcessing: false,
                    notifications: action.notifications
                }

            case FETCH_NOTIFICATIONS_ERROR:
                return {
                    ...state,
                    error: action.error,
                    isProcessing: false
                }

            case DELETE_NOTIFICATIONS_SUCCESS:
                return {
                    ...state,
                    error: null,
                    notifications: []
                }

            case DELETE_NOTIFICATIONS_ERROR:
                return {
                    ...state,
                    error: action.error
                }

            default:
                return state
    }
  }
