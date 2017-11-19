import { Dispatch, RootState } from '../../RootReducer'
import { API } from '../../../shared/http'

import { INotification } from '../../notifications/types'

export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS'
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS'
export const FETCH_NOTIFICATIONS_ERROR = 'FETCH_NOTIFICATIONS_ERROR'

export type Actions = {
    FETCH_NOTIFICATIONS: {
        type: typeof FETCH_NOTIFICATIONS
    },
    FETCH_NOTIFICATIONS_ERROR: {
        type: typeof FETCH_NOTIFICATIONS_ERROR,
        error: string
    },
    FETCH_NOTIFICATIONS_SUCCESS: {
        type: typeof FETCH_NOTIFICATIONS_SUCCESS,
        notifications: INotification[]
    }
}

export const actionCreators = {
    fetchNotificationsRequest: (): Actions[typeof FETCH_NOTIFICATIONS] => ({
        type: FETCH_NOTIFICATIONS
    }),
    fetchNotificationsRequestError: (error: string): Actions[typeof FETCH_NOTIFICATIONS_ERROR] => ({
        type: FETCH_NOTIFICATIONS_ERROR,
        error
    }),
    fetchNotificationsRequestSuccess:
    (notifications: INotification[]): Actions[typeof FETCH_NOTIFICATIONS_SUCCESS] => ({
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications
    }),
    fetchNotifications: () => {
        return (dispatch: Dispatch, getState: () => RootState) => {
            dispatch(actionCreators.fetchNotificationsRequest())
            const state = getState()
            const user = state.auth.user
            return API.get(`/users/${user!.uid}/notifications`).then(
                notifications => dispatch(actionCreators.fetchNotificationsRequestSuccess(notifications)),
                error => dispatch(actionCreators.fetchNotificationsRequestError(error.error.error))
            )
        }
    }
}
