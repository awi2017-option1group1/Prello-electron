import * as React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'

const UnloggedNavbar: React.StatelessComponent = () => (
    <Menu stackable={true}>
        <MenuItem header={true}>Prello Notification Center</MenuItem>
    </Menu>    
)

export default UnloggedNavbar
