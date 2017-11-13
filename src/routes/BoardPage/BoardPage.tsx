import { Container } from 'semantic-ui-react'
import * as React from 'react'

import Boards from '../../components/Board/BoardContainer'

class BoardPage extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Boards userID={'1'}/>
            </Container>
        )
    }
}

export default BoardPage
