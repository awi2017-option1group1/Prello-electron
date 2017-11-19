class Storage {
    get(key: string) {
        const data = localStorage.getItem(`${key}`)
        if (data) {
            return JSON.parse(data)
        } else {
            return {}
        }
    }

    set(key: string, value: {}) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default new Storage()
