import { ILoggedUser } from '../users/types'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export type Actions = {
    LOGIN_SUCCESS: {
        type: typeof LOGIN_SUCCESS,
        user: ILoggedUser
    },
    LOGIN_FAIL: {
        type: typeof LOGIN_FAIL
    }
}

export const actionCreators = {
    loginFail: (): Actions[typeof LOGIN_FAIL] => {
        return {
            type: LOGIN_FAIL
        }
    },

    loginSuccess: (user: ILoggedUser): Actions[typeof LOGIN_SUCCESS] => {
        return {
            type: LOGIN_SUCCESS,
            user
        }
    }
}
