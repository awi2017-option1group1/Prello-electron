import { LOGIN_SUCCESS, LOGIN_FAIL } from './actions'
import { RootAction } from '../RootAction'

import { ILoggedUser } from '../users/types'

export type State = {
    user: ILoggedUser | null
    isAuthenticated: boolean | null
}

const defaultValue: State = {
    user: null,
    isAuthenticated: null
}

export const reducer = (state: State = defaultValue, action: RootAction) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.user
            }

        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        default:
            return state
    }
}
