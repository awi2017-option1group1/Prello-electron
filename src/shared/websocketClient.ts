import * as io from 'socket.io-client'
import * as cookie from 'cookie'
class WSClient {

    private initialized: boolean
    private client: SocketIOClient.Socket | null

    constructor() {
        this.initialized = false
        this.client = null
    }
    /**
     * client.on('connected', () => {
     *  client.on('authorized', () => {
     *      client.on('update-list', (list) => { store.dispatch(...) })
     *  })
     * 
     *  client.on('unauthorized', () => {})
     * 
     *  client.emit('authorize', { token: 'accessToken' })
     * })
     */
    public initialize() {
        if (this.isInitialized()) {
            return
        }
        const cookies = cookie.serialize('photon', 'c4f53942-eb6e-4fcc-b6a8-41636940f148')
        
        this.client = io('localhost', { 
            path: '/realtime',
            transports: ['websocket'],
            extraHeaders: cookies
        })

        this.initialized = true
    }

    public on(event: string, callback: Function) {
        if (!this.isInitialized()) {
            throw new Error('WSClient is not initialized')
        }

        this.client!.on(event, callback)
    }

    /* tslint:disable */
    public emit(event: string, ...args: any[]) {
    /* tslint:enable */
        if (!this.isInitialized()) {
            throw new Error('WSClient is not initialized')
        }

        this.client!.emit(event, ...args)
    }

    private isInitialized() {
        return this.initialized
    }

}

export const websockets = new WSClient()
