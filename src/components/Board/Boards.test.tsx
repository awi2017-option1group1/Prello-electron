import * as React from 'react'
import { shallow } from 'enzyme'
import { Container } from 'semantic-ui-react'

import Boards from './Boards'

describe('<Board />', () => {
    it('should display a Board', () => {
        const board = shallow(
            <Container>
                <Boards
                    boards={[{
                        id: -1,
                        title: 'default',
                        notifNumber: 0,
                        position: 0
                    }]}
                    markAsRead={(index: number) => null}
                    incrementNotifNumber={(index: number) => null}
                />
            </Container>
        )
        expect(board.length).toBe(1)
    })
})
