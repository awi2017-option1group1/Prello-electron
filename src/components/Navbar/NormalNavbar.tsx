import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, MenuItem, Icon } from 'semantic-ui-react'

const UnloggedNavbar: React.StatelessComponent = () => (
    <Menu stackable={true}>
        <MenuItem header={true}>Prello</MenuItem>
        <NavLink to="/" exact={true} className="item" activeClassName="active">
            <Icon name="home" />
            Home
        </NavLink>
        <NavLink to="/about-us" className="item" activeClassName="active">
            <Icon name="hand peace" />
            About
        </NavLink>
    </Menu>    
)

export default UnloggedNavbar
