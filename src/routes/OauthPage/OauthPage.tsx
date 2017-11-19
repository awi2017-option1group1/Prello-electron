import * as React from 'react'
import { withRouter } from 'react-router'
import { push } from 'react-router-redux'

import { AUTH } from '../../shared/auth'
import { ACCESS_TOKEN_KEY } from '../../shared/http'
import Storage from '../../shared/storage'

import store from '../../redux/store'

interface OAuthPageProps {
    location: Location
}

interface OAuthPageState {
    error?: string
}

class OAuthPage extends React.Component<OAuthPageProps, OAuthPageState> {
    constructor(props: OAuthPageProps) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        const authorizationCode = this.extractCode()
        AUTH.get(`/token/electron?code=${authorizationCode}`)
        .then(response => {
            Storage.set(ACCESS_TOKEN_KEY, { token: response.access_token })
            store.dispatch(push('/'))
        })
        .catch(error => this.setState({ error }))
    }

    extractCode() {
        // Parse the redirect query string and return the token parameter
        var match = this.props.location.search.match(/[#&?]code=([0-9a-f]{40})/)
        if (match) {
            return match[1] || null
        }
        return null
    }

    render() {
        if (this.state.error !== undefined) {
            return this.state.error
        } else {
            return null
        }
    }
}

export default withRouter(OAuthPage)
