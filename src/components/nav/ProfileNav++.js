import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ProfileNav extends Component {
    render() {
        return (
            <>
                <div className="flex items-center">
                    <div>
                        <NavLink to="/login" className="text-white dark:no-underline">Log In</NavLink>
                    </div>
                    <div className="md:ml-4">
                        <NavLink to="/becomearhendor">
                            <button type="button" className="py-2.5 px-3 mr-2 mb-2 text-base font-medium border-2 border-white">Become a Rhendor</button>
                        </NavLink>
                    </div>
                </div>
                <span className="hidden">
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="../../assets/img/others/profile-picture.jpg" alt="user" />
                        </button>

                        <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{ position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(908px, 1059px)" }}>
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">Design Synchrony</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@designsynchrony.com</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <NavLink to="/dashboard" className="profile-link">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/settings" className="profile-link">Settings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/earnings" className="profile-link">Earnings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signout" className="profile-link">Sign out</NavLink>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </span>
            </>
        );
    }
}
