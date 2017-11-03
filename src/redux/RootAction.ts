import { RouterAction, LocationChangeAction } from 'react-router-redux'

import { Actions as BoardActions } from './boards/actions'
import { Actions as TestActions } from './testActions'

type ReactRouterAction = RouterAction | LocationChangeAction

export type RootAction =
  | ReactRouterAction
  | BoardActions[keyof BoardActions]
  | TestActions[keyof TestActions]
