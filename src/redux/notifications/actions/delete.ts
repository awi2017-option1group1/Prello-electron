import { Dispatch, RootState } from '../../RootReducer'
import { API } from '../../../shared/http'

export const DELETE_NOTIFICATIONS = 'DELETE_NOTIFICATIONS'
export const DELETE_NOTIFICATIONS_SUCCESS = 'DELETE_NOTIFICATIONS_SUCCESS'
export const DELETE_ALL_NOTIFICATIONS_SUCCESS = 'DELETE_ALL_NOTIFICATIONS_SUCCESS'
export const DELETE_NOTIFICATIONS_ERROR = 'DELETE_NOTIFICATIONS_ERROR'

export type Actions = {
    DELETE_NOTIFICATIONS: {
        type: typeof DELETE_NOTIFICATIONS
    },
    DELETE_NOTIFICATIONS_ERROR: {
        type: typeof DELETE_NOTIFICATIONS_ERROR,
        error: string
    },
    DELETE_NOTIFICATIONS_SUCCESS: {
        type: typeof DELETE_NOTIFICATIONS_SUCCESS
    }
}

export const actionCreators = {
    deleteNotificationsRequest: (): Actions[typeof DELETE_NOTIFICATIONS] => ({
        type: DELETE_NOTIFICATIONS
    }),
    deleteNotificationsRequestError: (error: string): Actions[typeof DELETE_NOTIFICATIONS_ERROR] => ({
        type: DELETE_NOTIFICATIONS_ERROR,
        error
    }),
    deleteNotificationsRequestSuccess:
    (): Actions[typeof DELETE_NOTIFICATIONS_SUCCESS] => ({
        type: DELETE_NOTIFICATIONS_SUCCESS
    }),
    deleteAllFromUser: () => {
        return (dispatch: Dispatch, getState: () => RootState) => {
            dispatch(actionCreators.deleteNotificationsRequest())
            const state = getState()
            const user = state.auth.user
            return API.delete(`/users/${user!.uid}/notifications`).then(
                notifications => dispatch(actionCreators.deleteNotificationsRequestSuccess()),
                error => dispatch(actionCreators.deleteNotificationsRequestError(error.error.error))
            )
        }
    }
}
