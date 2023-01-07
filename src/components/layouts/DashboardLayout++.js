import React, { Component } from 'react';
import DashboardNav from '../nav/DashboardNav';
import Sidebar from '../nav/Sidebar';
import ProfilePic from '../../assets/img/user/profile-picture.jpg';
import OverallLayout from './OverallLayout';
import DarkMode from '../features/DarkMode';
import RequireAuth from './../features/RequireAuth';
import { Navigate } from 'react-router-dom';

export default class DashboardLayout extends Component {
    constructor(props) {
        super(props);

        // bind this to methods
        this.manageDarkMode = this.manageDarkMode.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);

        // get value of minimizeSidebar in local storage
        // if set via local storage previously
        if (localStorage.getItem('minimize-sidebar')) {
            // set state with local storage
            this.state = {
                minimizeSidebar: localStorage.getItem('minimize-sidebar'),
                darkMode: false,
            }
            // if NOT set via local storage previously
        } else {
            // set state value
            this.state = {
                minimizeSidebar: false,
            }

            // set local storage value
            localStorage.setItem('minimize-sidebar', false);
        }
    }

    // toggle sidebar
    toggleSidebar = () => {
        this.setState(function (state, props) {
            // set local storage value
            localStorage.setItem('minimize-sidebar', !state.minimizeSidebar);
            // console.log("in storage", localStorage.getItem('minimize-sidebar'), !this.state.minimizeSidebar);

            // set state value
            return { minimizeSidebar: !state.minimizeSidebar }
        })
    }

    // manage darkmode
    manageDarkMode = (darkMode) => {
        this.setState(function (state, props) {
            // toggle state
            return {
                darkMode: darkMode
            }
        })

        // share dark mode value to other components
        if (this.props.manageDarkMode) {
            this.props.manageDarkMode(darkMode);
        }
    }

    render() {
        // user information
        const user = JSON.parse(sessionStorage.getItem('user'));
        const demoUser = {
            name: "Jane Doe",
            nick: "janny",
            email: "janedoe@designsynchrony.com",
            profilePic: ProfilePic
        };
        return (
            <>
                {/* <RequireAuth /> */}
                <Navigate to="/login" replace={true} />
                <DarkMode manageDarkMode={this.manageDarkMode}>
                    <div className="min-h-screen bg-gray-200 dark:bg-gray-900">
                        {/* nav bar */}
                        <div className="">
                            <DashboardNav profilePic={demoUser.profilePic} userName={user.name} userEmail={user.email} toggleSidebar={this.toggleSidebar} />
                        </div>

                        {/* sidebar and content */}
                        <div className="flex">
                            {/* sidebar */}
                            <Sidebar profilePic={demoUser.profilePic} userName={user.name} userNick={user.nick} minimizeSidebar={this.state.minimizeSidebar} />

                            {/* content */}
                            <div className="grow mx-8 my-4">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </DarkMode>
            </>
        );
    }
}
