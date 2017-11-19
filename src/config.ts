export interface ServerConfig {
    host: string
    port: number
    apiSuffix: string
    authSuffix: string
}

export interface Config {
    env: 'development' | 'production' | 'test'

    server: ServerConfig
}

export interface MultiConfig {
    [key: string]: Config
}

const configs: MultiConfig = {
    production: {
        env: 'production',

        server: {
            host: 'https://photon.igpolytech.fr',
            port: 3000,
            apiSuffix: 'api',
            authSuffix: 'auth'
        }
    },

    default: {
         env: 'development',

        server: {
            host: process.env.SERVER_HOST || 'http://localhost',
            port: Number(process.env.PORT) || 3000,
            apiSuffix: process.env.API_SUFFIX || 'api',
            authSuffix: process.env.AUTH_SUFFIX || 'auth'
        }
    }
}

export const config: Config = process.env.NODE_ENV === 'production' ? configs.production : configs.default
