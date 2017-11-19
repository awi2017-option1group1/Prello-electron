import { combineReducers, Dispatch as ReduxDispatch } from 'redux'
import { routerReducer as router, RouterState } from 'react-router-redux'
import { reducer as board, State as BoardState } from './boards/reducers'
import { reducer as auth, State as AuthState } from './auth/reducers'

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
    router: RouterState,
    board: BoardState,
    auth: AuthState
}

export type Dispatch = ReduxDispatch<RootState>

export const rootReducer = combineReducers<RootState>({
    router,
    board,
    auth
})
