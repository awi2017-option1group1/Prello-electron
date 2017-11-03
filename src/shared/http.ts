import * as rp from 'request-promise'

import { config } from '../config'

export class Api {

    private static DEFAULT_OPTIONS = {
        json: true
    } 

    constructor(private baseUrl: string) {
        this.get = this.get.bind(this)
        this.post = this.post.bind(this)
        this.put = this.put.bind(this)
        this.delete = this.delete.bind(this)
    }

    get(url: string, options: {} = {}) {
        return rp.get(
            this.toUrl(url), 
            this.buildOptions(options)
        )
    }

    post(url: string, data: {} = {}, options: {} = {}) {
        return rp.post(
            this.toUrl(url), 
            this.buildOptions(options, data)
        )
    }

    put(url: string, data: {} = {}, options: {} = {}) {
        return rp.put(
            this.toUrl(url), 
            this.buildOptions(options, data)
        )
    }

    delete(url: string, options: {} = {}) {
        return rp.delete(
            this.toUrl(url), 
            this.buildOptions(options)
        )
    }

    private toUrl(relativeUrl: string) {
        return `${this.baseUrl}${relativeUrl}`
    }

    private buildOptions(options: {} = {}, data: {} = {}): {} {
        return {
            ...Api.DEFAULT_OPTIONS,
            body: {
                ...data
            },
            ...options
        }
    }

}

export const getBaseUrl = () => {
    return `${config.server.host}/${config.server.apiSuffix}`
}

export const API = new Api(getBaseUrl())
