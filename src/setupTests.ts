import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

class LocalStorageMock {

    private store: {}

    constructor() {
        this.store = {}
    }

    clear() {
        this.store = {}
    }

    getItem(key: string) {
        return this.store[key] || null
    }

    setItem(key: string, value: {}) {
        this.store[key] = value.toString()
    }

    removeItem(key: string) {
        delete this.store[key]
    }
}

/* tslint:disable */
global['localStorage'] = new LocalStorageMock()
/* tslint:enable */
