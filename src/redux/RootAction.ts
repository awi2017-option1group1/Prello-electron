import { RouterAction, LocationChangeAction } from 'react-router-redux'

import { Actions as BoardActions } from './boards/actions'
import { Actions as TestActions } from './testActions'
import { Actions as AuthActions } from './auth/actions'
import { Actions as NotifActions } from './notifications/actions'

type ReactRouterAction = RouterAction | LocationChangeAction

export type RootAction =
  | ReactRouterAction
  | BoardActions[keyof BoardActions]
  | TestActions[keyof TestActions]
  | AuthActions[keyof AuthActions]
  | NotifActions[keyof NotifActions]
