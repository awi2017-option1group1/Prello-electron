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
                        name: 'default',
                        notifNumber: 0,
                        position: 0
                    }]}
                    incrementNotifNumber={(index: number) => null}
                    loadData={() => null}
                    notifications={[]}
                />
            </Container>
        )
        expect(board.length).toBe(1)
    })
})
