import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PagesNav extends Component {
    render() {
        return (
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium w-full justify-center content-center">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link" : "my-nav-link"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link" : "my-nav-link"} to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link" : "my-nav-link"} to="/connect">Connect</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link" : "my-nav-link"} to="/aboutus">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link" : "my-nav-link"} to="/contactus">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
