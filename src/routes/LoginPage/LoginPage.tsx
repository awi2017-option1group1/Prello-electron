import * as React from 'react'
import { Button, Header, Icon, Container } from 'semantic-ui-react'
import { push } from 'react-router-redux'

import { AUTH } from '../../shared/auth'
import { actionCreators } from '../../redux/auth/actions'
import store from '../../redux/store'

const clientId = 'e70919f4-b7f3-466b-b326-9faa7f7290f0'
const redirectUri = 'http://localhost:3000/oauth'
const url = 
`https://photon.igpolytech.fr/auth/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

class LoginPage extends React.Component {
    componentWillMount() {
        AUTH.get('/myUser')
        .then(
            response => {
                store.dispatch(
                    actionCreators.loginSuccess(response.me)
                )
                store.dispatch(
                    push('/boards')
                )
            }
        )
        .catch(
            error => {
                actionCreators.loginFail()
            }
        )
    }

    render() {
        return (
            <Container>
                <Header as="h2" icon={true} textAlign="center">
                    <Icon name="alarm" circular={true} />
                    <Header.Content>
                        <div style={{marginBottom: '15px'}}>Prello Notification Center</div>
                        <Button primary={true} circular={true} as="a" href={url}>Login into Prello</Button>
                    </Header.Content>
                </Header>
            </Container>
        )
    }
}

export default LoginPage
