import React, { Component } from 'react';
import DashboardNav from '../nav/DashboardNav';
import Sidebar from '../nav/Sidebar';
import { Navigate } from 'react-router-dom';
import OverallLayout from './OverallLayout';

export default class DashboardLayout extends Component {
  constructor(props) {
    super(props);

    // bind this to methods
    this.manageDarkMode = this.manageDarkMode.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkAuth = this.checkAuth.bind(this);

    // get value of minimizeSidebar in local storage
    // if set via local storage previously
    if (localStorage.getItem('minimize-sidebar')) {
      // set state with local storage
      this.state = {
        minimizeSidebar: localStorage.getItem('minimize-sidebar'),
        darkMode: false,
      };
      // if NOT set via local storage previously
    } else {
      // set state value
      this.state = {
        minimizeSidebar: false,
      };

      // set local storage value
      localStorage.setItem('minimize-sidebar', false);
    }

    this.state = {
      isAuthenticated: sessionStorage.getItem('isAuthenticated') ? true : false,
    };
  }

  // toggle sidebar
  toggleSidebar = () => {
    this.setState(function (state, props) {
      // set local storage value
      localStorage.setItem('minimize-sidebar', !state.minimizeSidebar);
      // console.log("in storage", localStorage.getItem('minimize-sidebar'), !this.state.minimizeSidebar);

      // set state value
      return { minimizeSidebar: !state.minimizeSidebar };
    });
  };

  // manage darkmode
  manageDarkMode = (darkMode) => {
    this.setState(function (state, props) {
      // toggle state
      return {
        darkMode: darkMode,
      };
    });

    // share dark mode value to other components
    if (this.props.manageDarkMode) {
      this.props.manageDarkMode(darkMode);
    }
  };

  // check if user is authenticated
  checkAuth = () => {
    // redirect if user is not logged in
    if (!sessionStorage.getItem('isAuthenticated')) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      <Navigate to="/login" from="/dashboard" replace={true} />;
    }
  };

  // handle logout
  handleLogout = () => {
    // clear session
    sessionStorage.clear();
    this.setState({
      isAuthenticated: false,
    });
  };

  render() {
    // user information
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
      <>
        {!this.state.isAuthenticated && (
          <Navigate to="/login" from="/dashboard" replace={true} />
        )}
        {this.state.isAuthenticated && (
          <OverallLayout manageDarkMode={this.manageDarkMode}>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
              {/* nav bar */}
              <DashboardNav
                handleLogout={this.handleLogout}
                profilePic={user.image}
                userName={user.name}
                userEmail={user.email}
                toggleSidebar={this.toggleSidebar}
              />

              {/* sidebar and content */}
              <div className="flex grow">
                {/* sidebar */}
                <Sidebar
                  handleLogout={this.handleLogout}
                  profilePic={user.image}
                  userName={user.name}
                  userNick={user.nick}
                  minimizeSidebar={this.state.minimizeSidebar}
                />
                {/* content */}
                <div className="overflow-y-auto lg:w-3/4 grow md:px-8 py-2 xs:py-4">
                  {this.props.children}
                </div>
              </div>
            </div>
          </OverallLayout>
        )}
      </>
    );
  }
}
