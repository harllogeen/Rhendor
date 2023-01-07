import { Component } from 'react';
import WhiteLogo from '../assets/WhiteLogo';
import PagesNav from './PagesNav';
import { NavLink } from 'react-router-dom';
import ProfileNav from './ProfileNav';

export default class Header extends Component {
    render() {
        return (
            <>
                <nav className="alt-bg-base-700 border-base-700 px-4 sm:px-16 py-8 shadow-lg dark:bg-base-900 h-32 flex">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div className="flex items-center w-full">
                            <div className="mr-3 h-6 sm:h-9" >
                                <NavLink to="/"><WhiteLogo /></NavLink>
                            </div>
                            <div className="grow">
                                <PagesNav />
                            </div>
                            <div>
                                <ProfileNav />
                            </div>
                        </div>
                    </div>
                </nav>

            </>
        );
    }
}
