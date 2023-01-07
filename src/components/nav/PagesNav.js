import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PagesNav extends Component {
    render() {
        return (
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5">
                <div className="lg:hidden">
                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center mx-auto">
                    <ul className="flex  flex-col mt-4 flex-shrink-0 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link block py-2 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" : "my-nav-link"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link block py-2 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" : "my-nav-link"} to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link block py-2 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" : "my-nav-link"} to="/connect">Connect</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link block py-2 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:-mr-10" : "my-nav-link"} to="/aboutus">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "my-nav-link my-active-nav-link block py-2 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" : "my-nav-link"} to="/contactus">Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className="flex space-x-6 items-center">
                        <NavLink to="/login" className="my-nav-link my-active-nav-link block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white">Log In</NavLink>
                        <NavLink to="/becomearhendor">
                            <button type="button" className="py-2.5 px-3 mr-2 mb-2 text-base font-medium border-2 border-white">Become a Rhendor</button>
                        </NavLink>
                        {/* <Button */}
                        {/* <div className="w-1/5">
                            </div>
                            <div className="w-5/2 space-x-4">
                            </div> */}
                    </div>
                </div>
            </nav>
        );
    }
}
