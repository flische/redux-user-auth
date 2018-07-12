import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
    render(){
        const { to, text } = this.props;
        return (
            <li className="nav-item">
                <NavLink exact className="nav-link" to={to}>{text}</NavLink>
            </li>
        )
    }
}

export default NavItem;
