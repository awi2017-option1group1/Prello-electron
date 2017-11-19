import { Actions as FetchAllActions, actionCreators as fetchAllActionCreators } from './actions/fetchAll'
import { Actions as DeleteActions, actionCreators as deleteActionCreators } from './actions/delete'

export type Actions =
    FetchAllActions
    & DeleteActions

export const actionCreators = {
    ...fetchAllActionCreators,
    ...deleteActionCreators
}
