type Token = string

class Auth {

    static LOCAL_STORAGE_KEY = 'me'

    private userToken: Token | null

    public constructor() {
        this.userToken = localStorage.getItem(Auth.LOCAL_STORAGE_KEY)
    }

    isUserAuthenticated() {
        return this.userToken != null
    }

    getUserToken() {
        return this.userToken
    }

    setUserToken(token: Token) {
        this.userToken = token
        localStorage.setItem(Auth.LOCAL_STORAGE_KEY, token)
    }

    removeUserToken() {
        this.userToken = null
        localStorage.removeItem(Auth.LOCAL_STORAGE_KEY)
    }

}

export const AUTH = new Auth()
