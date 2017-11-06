import * as React from 'react'
import { Container, Icon } from 'semantic-ui-react'

const Footer: React.StatelessComponent = () => (
    <footer>
        <Container fluid={true}>
            <strong>Prello</strong> is an <strong>open source project</strong>. You can find the 
            code <a href="https://github.com/awi2017-option1group1" target="_blank" rel="noopener noreferrer">
                <Icon name="github" />here
            </a>. 
        </Container>
    </footer>
)

export default Footer
