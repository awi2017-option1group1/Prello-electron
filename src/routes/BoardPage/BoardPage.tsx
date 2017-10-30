import { Container } from 'semantic-ui-react'
import * as React from 'react'

import Board from '../../components/Board/BoardContainer'

class BoardPage extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Board />
            </Container>
        )
    }
}

export default BoardPage
