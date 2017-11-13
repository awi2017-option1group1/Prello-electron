import { Api } from './http'

import { config } from '../config'

export const getAuthUrl = () => {
    return `${config.server.host}/${config.server.authSuffix}`
}

export const AUTH = new Api(getAuthUrl())
