import { Component } from 'react';
import WhiteLogo from '../assets/WhiteLogo';
import Logo from '../assets/Logo';
import PagesNav from './PagesNav';
import { NavLink, Navigate } from 'react-router-dom';
import ProfileNav from './ProfileNav';
import { BindThis } from 'des-utilities';

export default class Header extends Component {
  constructor(props) {
    super(props);

    // fetch user
    let user = sessionStorage.getItem('user');
    let isRhendor = false;
    let isAuthenticated = false;

    if (user) {
      user = JSON.parse(user);
      if (user.user_type === 'rhenda') isRhendor = true;
      isAuthenticated = true;
    }

    // set state
    this.state = {
      user: user,
      isAuthenticated: isAuthenticated,
      isRhendor: isRhendor,
      navIsHidden: true,
      logoutRedirect: false,
    };

    // bind this
    BindThis(this, ['toggleNav', 'handleLogout']);
  }

  // toggle nav
  toggleNav() {
    let nav = document.getElementById('mobileNav');

    // if nav is hidden
    if (this.state.navIsHidden) {
      nav.classList.remove('hidden');
      // set state
      this.setState((state) => {
        return {
          navIsHidden: !state.navIsHidden,
        };
      });
      // if nav is not hidden
    } else {
      nav.classList.add('hidden');
      // set state
      this.setState((state) => {
        return {
          navIsHidden: !state.navIsHidden,
        };
      });
    }
  }

  // handle logout
  handleLogout = () => {
    // clear session
    sessionStorage.clear();
    this.setState({
      isAuthenticated: false,
      logoutRedirect: true,
    });
  };

  render() {
    return (
      <>
        {!this.state.isAuthenticated && this.state.logoutRedirect && (
          <Navigate to="/login"  replace={true} />
        )}
        <nav className="light-gray-bg lg:alt-bg-base-700 lg:border-base-700 lg:dark:bg-base-900 py-4 lg:py-8 sticky top-0 z-30">
          {/* main nav */}
          <div className="slim-container lg:w-4/5 flex flex-col-reverse space-y-3 3xs:space-y-0 3xs:flex-row justify-between items-center">
            {/* mobile nav toggle */}
            <div className="lg:hidden" onClick={this.toggleNav}>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* right nav (logo) */}
            <div className="h-6 sm:h-9 ml-auto 2xs:grow 2xs:flex 2xs:justify-center lg:inline 2xs:ml-0 lg:grow-0">
              <NavLink to={this.state.user ? '/connect' : '/'}>
                <div className="hidden lg:inline-block">
                  <WhiteLogo />
                </div>

                {/* small screen */}
                <div className="inline-block lg:hidden">
                  {/* light mode */}
                  <div className="dark:hidden">
                    <Logo size="max-h-[17px]" />
                  </div>

                  {/* dark mode */}
                  <div className="hidden dark:block">
                    <WhiteLogo size="max-h-[17px]" />
                  </div>
                </div>
              </NavLink>
            </div>

            {/* mobile nav Sign up link */}
            <div className="hidden 2xs:inline lg:hidden">
              {/* if not logged in */}
              {!this.state.user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'my-nav-link block py-2' : 'my-nav-link'
                  }
                  to="/register"
                >
                  Sign Up
                </NavLink>
              )}
              {/* if logged in but not a rhendor */}
              {this.state.user && this.state.isRhendor && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'my-nav-link block py-2' : 'my-nav-link'
                  }
                  to="/register"
                >
                  Become a Rhendor
                </NavLink>
              )}

              {/* if logged in  */}
              {this.state.user && (
                <div onClick={this.handleLogout} className="my-nav-link block">
                  Logout
                </div>
              )}
            </div>

            {/* center nav */}
            <div>
              <ul className="hidden lg:flex flex-row justify-between items-center space-x-8">
                {/* <ul className="flex flex-col mt-4 flex-shrink-0 md:flex-row md:space-x-8 md:mt-0"> */}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'my-nav-link my-active-nav-link block py-2'
                        : 'my-nav-link'
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'my-nav-link my-active-nav-link block py-2'
                        : 'my-nav-link'
                    }
                    to={this.state.user ? '/dashboardservices' : '/services'}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'my-nav-link my-active-nav-link block py-2'
                        : 'my-nav-link'
                    }
                    to="/connect"
                  >
                    {this.state.user ? 'Dashboard' : 'Connect'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'my-nav-link my-active-nav-link block py-2'
                        : 'my-nav-link'
                    }
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'my-nav-link my-active-nav-link block py-2'
                        : 'my-nav-link'
                    }
                    to="/contactus"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* left nav */}
            <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center">
              <div className="flex space-x-6 items-center">
                {/* if not logged in */}
                {!this.state.user && (
                  <>
                    <NavLink to="/login" className="my-nav-link">
                      Log In
                    </NavLink>
                    <NavLink to="/register">
                      <button
                        type="button"
                        className="py-2.5 px-3 mr-2 mb-2 text-base-700 border-base-700 font-medium border-2 lg:text-white lg:border-white"
                      >
                        Register
                      </button>
                    </NavLink>
                  </>
                )}

                {/* if logged in but not a rhendor */}
                {this.state.user && this.state.isRhendor && (
                  <NavLink to="/becpmearhendor">
                    <button
                      type="button"
                      className="py-2.5 px-3 mr-2 mb-2 text-base font-medium border-2 border-white"
                    >
                      Become a Rhendor
                    </button>
                  </NavLink>
                )}

                {/* if logged in  */}
                {this.state.user && (
                  <div
                    onClick={this.handleLogout}
                    className="my-nav-link cursor-pointer"
                  >
                    Log Out
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* mobile nav */}
          <div id="mobileNav" className="hidden lg:hidden">
            <ul className="flex flex-col py-3 slim-container space-y-4 mx-auto mt-10">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'my-nav-link my-active-nav-link block py-2'
                      : 'my-nav-link'
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'my-nav-link my-active-nav-link block py-2'
                      : 'my-nav-link'
                  }
                  to={this.state.user ? '/dashboardservices' : '/services'}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'my-nav-link my-active-nav-link block py-2'
                      : 'my-nav-link'
                  }
                  to="/connect"
                >
                  {this.state.user ? 'Dashboard' : 'Connect'}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'my-nav-link my-active-nav-link block py-2 md:-mr-10'
                      : 'my-nav-link'
                  }
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'my-nav-link my-active-nav-link block py-2'
                      : 'my-nav-link'
                  }
                  to="/contactus"
                >
                  Contact Us
                </NavLink>
              </li>
              {/* if not logged in */}
              {!this.state.user && (
                <>
                  <li className="lg:hidden">
                    <NavLink to="/login" className="my-nav-link block">
                      Log In
                    </NavLink>
                  </li>
                  <li className="lg:hidden">
                    <NavLink to="/register">
                      <button
                        type="button"
                        className="py-2.5 px-3 mr-2 mb-2 text-base-700 border-base-700 font-medium border-2 lg:text-white lg:border-white"
                      >
                        Register
                      </button>
                    </NavLink>
                  </li>
                </>
              )}
              {/* if logged in but not a rhendor */}
              {this.state.user && this.state.isRhendor && (
                <li className="lg:hidden">
                  <NavLink to="/becomearhendor">
                    <button
                      type="button"
                      className="py-2.5 px-3 mr-2 mb-2 text-base font-medium border-2 border-white"
                    >
                      Become a Rhendor
                    </button>
                  </NavLink>
                </li>
              )}

              {/* if logged in  */}
              {this.state.user && (
                <li
                  className="lg:hidden cursor-pointer"
                  onClick={this.handleLogout}
                >
                  <div className="my-nav-link block mt-8">Logout</div>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
