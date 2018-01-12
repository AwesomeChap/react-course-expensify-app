import {NavLink} from 'react-router-dom';
import React from 'react';

const Header = ()=>(
    <div>
        <h1>Expensify</h1>
        <p>
            <NavLink activeClassName='is-active' to="/" exact={true}>Home</NavLink>
            <NavLink activeClassName='is-active' to="/create">Create</NavLink>
            {/*<NavLink activeClassName='is-active' to="/edit">Edit</NavLink>*/}
            <NavLink activeClassName='is-active' to="/help">Help</NavLink>
        </p>
    </div>
);

export default Header;