import * as io from 'socket.io-client'

class WSClient {

    private initialized: boolean
    private client: SocketIOClient.Socket | null

    constructor() {
        this.initialized = false
        this.client = null
    }

    public initialize() {
        if (this.isInitialized()) {
            return
        }

        this.client = io('localhost', { 
            path: '/realtime',
            transports: ['websocket']
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
