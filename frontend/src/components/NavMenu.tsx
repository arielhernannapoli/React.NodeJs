import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <NavLink to={ '/' } exact activeClassName='active' className='nav-link'>
                                <span className='glyphicon glyphicon-home'></span> Sign In
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={ '/signUp' } activeClassName='active' className='nav-link'>
                                <span className='glyphicon glyphicon-education'></span> Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={ '/user' } activeClassName='active' className='nav-link'>
                                <span className='glyphicon glyphicon-th-list'></span> User Info
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>;
    }
}
