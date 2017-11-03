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

// Add default value because the env variables 
// are not set with the hot-reload activated
export const config: Config = { // Do not know why 
    env: 'development',

    server: {
        host: process.env.SERVER_HOST || 'http://localhost',
        port: Number(process.env.PORT) || 3000,
        apiSuffix: process.env.API_SUFFIX || 'api',
        authSuffix: process.env.AUTH_SUFFIX || 'auth'
    }
}
