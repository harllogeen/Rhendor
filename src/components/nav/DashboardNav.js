import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AltLogo from '../assets/AltLogo';
import Dropdown from '../features/Dropdown';
import Modal from '../features/Modal';
import SvgIcon from 'des-svg-icons';
import DashboardNavLink from './DashboardNavLink';
import { BindThis } from 'des-utilities';
import Avatar from '../features/Avatar';
import ServiceContext from '../../context/serviceContext';
import { withRouter } from '../../core/withRouter';

class DashboardNav extends Component {
  constructor(props) {
    super(props);

    // fetch user
    let user = JSON.parse(sessionStorage.getItem('user'));

    // set state
    this.state = {
      navIsHidden: true,
      searchFormToggled: false,
      user: user,
      services: [],
    };

    // bind this
    BindThis(this, [
      'toggleNav',
      'handleLogout',
      'toggleSearchBox',
      'handleSearch',
    ]);
  }

  handleLogout = () => {
    // clear session
    this.props.handleLogout();
  };

  toggleSearchBox() {
    let SearchBox = document.getElementById('navSearchBox');
    let SearchIcon = document.getElementById('navSearchIcon');

    // show search box
    if (this.state.searchFormToggled) {
      SearchBox.classList.remove('hidden');
      SearchIcon.classList.add('hidden');
      // hide search box
    } else {
      SearchBox.classList.add('hidden');
      SearchIcon.classList.remove('hidden');
    }

    // toggle state
    this.setState((state) => {
      return { searchFormToggled: !state.searchFormToggled };
    });
  }

  // toggle nav
  toggleNav() {
    let nav = document.getElementById('dashboardNav');
    let container = document.getElementById('navContainer');

    // show nav bar
    if (this.state.navIsHidden) {
      // toggle nav
      nav.classList.remove('hidden');

      // toggle size of container
      container.classList.remove('sticky');
      container.classList.add(
        'fixed',
        'w-full',
        'h-full',
        'lg:h-auto',
        'lg:sticky',
        'lg:block',
        'overflow-auto'
      );

      // set state
      this.setState((state) => {
        return {
          navIsHidden: !state.navIsHidden,
        };
      });
      // hide nav bar
    } else {
      // toggle nav
      nav.classList.add('hidden');

      // toggle size of container
      container.classList.add('sticky');
      container.classList.remove(
        'fixed',
        'w-full',
        'h-full',
        'lg:h-auto',
        'lg:sticky',
        'lg:block',
        'overflow-auto'
      );
      // set state
      this.setState((state) => {
        return {
          navIsHidden: !state.navIsHidden,
        };
      });
    }
  }

  // handleSearch
  //   handleSearch = (e) => {
  //     e.preventDefault();
  //     HttpRequest(
  //       MyConfig.apiUrl + `search?search=${e.target.search.value}&type=service`,
  //       'get',
  //       null,
  //       ProcessHttpMessage
  //     ).then((response) => {
  //       this.setState((state) => {
  //         return {
  //           services: response.data.data,
  //         };
  //       });
  //     });
  //     // this.props.handleSearch();
  //   };
  static contextType = ServiceContext;

  handleSearch(e) {
    let { findServices } = this.context;
    e.preventDefault();
    // console.log(this.props);
    // this.props.navigate(
    //   `/dashboardservices?search=${e.target.search.value}&type=service`
    // );
    findServices(e.target.search.value);
  }

  render() {
    return (
      <>
        <div id="navContainer" className="white-gray-bg py-3 sticky top-0 z-30">
          {/* desktop nav bar */}
          <nav
            className="white-gray-bg border-gray-200 py-3 rounded hidden lg:block"
            onBlur={this.toggleSearchBox}
          >
            <div className="slim-container flex flex-wrap justify-between items-center mx-auto">
              {/* logo */}
              <NavLink to="/" className="flex items-center">
                <span className="mr-3 h-6 sm:h-9">
                  <AltLogo />
                </span>
              </NavLink>

              {/* center nav */}
              <div className="hidden justify-between items-center lg:flex lg:w-auto">
                <ul
                  style={{ display: 'flex', alignItems: 'center' }}
                  className=" h-5 space-x-4"
                >
                  <li>
                    <DashboardNavLink
                      url="/connect"
                      svg="home"
                      imgclassName="h-5 "
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      url="/feeds"
                      svg="people"
                      imgclassName="h-5"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      url="/dashboardservices"
                      svg="briefcase"
                      imgclassName=""
                    />
                  </li>
                  <li id="navSearchIcon" onClick={this.toggleSearchBox}>
                    <div className="dashboard-nav cursor-pointer">
                      <div className="h-5 w-5">
                        <SvgIcon style={{ width: 5 }} type="zoom" />
                      </div>
                    </div>
                  </li>
                  <li
                    id="navSearchBox"
                    className="hidden"
                    onBlur={this.toggleSearchBox}
                  >
                    <form onSubmit={this.handleSearch} className="py-0">
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-base-500 focus:border-base-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-base-500 dark:focus:border-base-500"
                          placeholder="Search..."
                          required=""
                          name="search"
                        />
                      </div>
                    </form>
                  </li>
                </ul>
              </div>

              {/* right nav */}
              <div className="flex items-center md:order-2 lg:space-x-2">
                <div
                  onClick={this.props.toggleSidebar}
                  className="relative cursor-pointer dashboard-nav hidden md:inline-block"
                >
                  <div className="w-5 h-5">
                    <SvgIcon type="menu" />
                  </div>
                </div>
                <div className="hidden sm:inline-block">
                  <DashboardNavLink
                    url="/notification"
                    svg="bell"
                    imgclassName="w-5 h-5"
                  />
                </div>
                <div className="hidden sm:inline-block">
                  <DashboardNavLink
                    url="/messages"
                    svg="mail"
                    imgclassName="w-5 h-5"
                  />
                </div>
                {/* User menu */}
                <div className="hidden sm:inline-block">
                  <Dropdown
                    contClass="right-0"
                    trigger={
                      <Avatar
                        pic={this.props.profilePic}
                        imgSize="w-8 h-8"
                        contClass="cursor-pointer"
                      />
                    }
                  >
                    {/* dropdown content */}
                    {/* user details */}
                    <div className="py-3 px-4">
                      <span className="block text-sm text-gray-900 dark:text-gray-200">
                        {this.props.userName}
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                        {this.props.userEmail}
                      </span>
                    </div>
                    {/* dropdown links */}
                    <ul className="py-1" aria-labelledby="dropdown">
                      <li>
                        <Link to="/connect" className="dropdown-link">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/appsettings" className="dropdown-link">
                          App Settings
                        </Link>
                      </li>
                      <li>
                        <Link to="/connect" className="dropdown-link">
                          Profile Settings
                        </Link>
                      </li>
                      <li>
                        <Link to="/editprofile" className="dropdown-link">
                          Edit Profile
                        </Link>
                      </li>
                      {/* <Modal modalclassName="py-2 px-0" id="userDropdownEditProfile" size="lg lg:max-w-2xl" trigger={
                                            (
                                                <li><div className="cursor-pointer dropdown-link" >Edit Profile</div></li>
                                            )
                                        }>
                                            <EditProfile undefined />
                                        </Modal> */}
                      <li
                        className="dropdown-link cursor-pointer"
                        onClick={this.handleLogout}
                      >
                        Log out
                      </li>
                    </ul>
                  </Dropdown>
                </div>

                {/* center nav */}
                <button
                  type="button"
                  className="inline-flex items-center p-2 ml-1 sm:ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
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
            </div>
          </nav>

          {/* mobile nav bar */}
          <nav className="white-gray-bg lg:hidden flex slim-container justify-between gray-text">
            <svg
              className='cursor-pointer '
              onClick={this.toggleNav}
              width="20"
              height="20"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.75H15M3 9.5H15M3 14.25H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="flex space-x-4">
              {/* home */}
              <NavLink to="/connect" className={({ isActive }) => isActive ? "text-base-400 hover:text-base-200 dark:text-base-200 dark:hover:text-base-200 dark:no-underline" : "text-gray-500 hover:text-base-400 dark:text-gray-500 dark:hover:text-base-200 dark:no-underline"}>
                <div className="w-5 h-5">
                  <SvgIcon type="home" />
                </div>
              </NavLink>



              {/* feeds */}
              <NavLink to="/feeds" className={({ isActive }) => isActive ? "text-base-400 hover:text-base-200 dark:text-base-200 dark:hover:text-base-200 dark:no-underline" : "text-gray-500 hover:text-base-400 dark:text-gray-500 dark:hover:text-base-200 dark:no-underline"}>
                <div className="w-5 h-5">
                  <SvgIcon type="people" />
                </div>
              </NavLink>

              {/* services */}
              <NavLink to="/dashboardservices" className={({ isActive }) => isActive ? "text-base-400 hover:text-base-200 dark:text-base-200 dark:hover:text-base-200 dark:no-underline" : "text-gray-500 hover:text-base-400 dark:text-gray-500 dark:hover:text-base-200 dark:no-underline"}>
                <div className="w-5 h-5">
                  <SvgIcon type="briefcase" />
                </div>
              </NavLink>

              {/* search */}
              <svg
                className="w-5 h-5 rounded-lg"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 16.3916L11.25 11.8916M12.75 8.1416C12.75 11.0411 10.3995 13.3916 7.5 13.3916C4.60051 13.3916 2.25 11.0411 2.25 8.1416C2.25 5.24211 4.60051 2.8916 7.5 2.8916C10.3995 2.8916 12.75 5.24211 12.75 8.1416Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </nav>

          {/* mobile nav dropdown */}
          <div
            id="dashboardNav"
            className="hidden lg:hidden w-full absolute white-gray-bg flex flex-col p-8 py-20"
          >
            <Link to="/account">
              <div className="inline-flex space-x-3 2xs:space-x-7 items-start justify-start">
                {/* <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/60.73469543457031x60.73469543457031" /> */}
                <Avatar pic={this.state.user.image} imgSize="w-14 h-14" />
                <div className="inline-flex flex-col space-y-1 items-start justify-start">
                  <p className="text-lg 2xs:text-xl leading-loose text-gray-900">
                    {this.state.user.name}
                  </p>
                  <p className="text-sm 2xs:text-lg leading-7 text-black text-opacity-40">
                    {this.state.user.username}
                  </p>
                </div>
              </div>
            </Link>
            <div className="inline-flex flex-col space-y-6 items-start justify-start mt-6">
              <Link
                to="/connect"
                className={({ isActive }) =>
                  isActive ? 'active-dashboard-nav' : 'dashboard-nav'
                }
              >
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.41821 14L5.69698 11.7213M5.69698 11.7213L13.6726 3.74561L21.6483 11.7213M5.69698 11.7213V23.1151C5.69698 23.7444 6.20709 24.2545 6.83636 24.2545H10.2545M21.6483 11.7213L23.9271 14M21.6483 11.7213V23.1151C21.6483 23.7444 21.1382 24.2545 20.5089 24.2545H17.0908M10.2545 24.2545C10.8838 24.2545 11.3939 23.7444 11.3939 23.1151V18.5576C11.3939 17.9283 11.904 17.4182 12.5333 17.4182H14.812C15.4413 17.4182 15.9514 17.9283 15.9514 18.5576V23.1151C15.9514 23.7444 16.4615 24.2545 17.0908 24.2545M10.2545 24.2545H17.0908"
                      stroke="currentColor"
                      stroke-opacity="0.44"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose text-black text-opacity-40">
                    Home
                  </p>
                </div>
              </Link>
              <Link
                to="/feeds"
                className={({ isActive }) =>
                  isActive ? 'active-dashboard-nav' : 'dashboard-nav'
                }
              >
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7743 9.10666C17.7743 11.372 15.9379 13.2084 13.6725 13.2084C11.4072 13.2084 9.57073 11.372 9.57073 9.10666C9.57073 6.84131 11.4072 5.00488 13.6725 5.00488C15.9379 5.00488 17.7743 6.84131 17.7743 9.10666Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                    <path
                      d="M24.6106 11.8412C24.6106 13.3514 23.3863 14.5757 21.8761 14.5757C20.3658 14.5757 19.1415 13.3514 19.1415 11.8412C19.1415 10.3309 20.3658 9.10666 21.8761 9.10666C23.3863 9.10666 24.6106 10.3309 24.6106 11.8412Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                    <path
                      d="M19.1415 21.412C19.1415 18.3915 16.693 15.9429 13.6725 15.9429C10.652 15.9429 8.20348 18.3915 8.20348 21.412V25.5137H19.1415V21.412Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                    <path
                      d="M8.20348 11.8412C8.20348 13.3514 6.97919 14.5757 5.46896 14.5757C3.95873 14.5757 2.73445 13.3514 2.73445 11.8412C2.73445 10.3309 3.95873 9.10666 5.46896 9.10666C6.97919 9.10666 8.20348 10.3309 8.20348 11.8412Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                    <path
                      d="M21.8761 25.5137V21.412C21.8761 19.9707 21.5044 18.6162 20.8516 17.4392C21.1791 17.355 21.5223 17.3102 21.8761 17.3102C24.1414 17.3102 25.9778 19.1466 25.9778 21.412V25.5137H21.8761Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                    <path
                      d="M6.4934 17.4392C5.84065 18.6162 5.46896 19.9707 5.46896 21.412V25.5137H1.36719V21.412C1.36719 19.1466 3.20361 17.3102 5.46896 17.3102C5.82268 17.3102 6.16595 17.355 6.4934 17.4392Z"
                      fill="currentColor"
                      fill-opacity="0.44"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose text-black text-opacity-40">
                    Feeds
                  </p>
                </div>
              </Link>
              <Link
                to="/dashboardservices"
                className={({ isActive }) =>
                  isActive ? 'active-dashboard-nav' : 'dashboard-nav'
                }
              >
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9271 15.5811C20.7604 16.8629 17.299 17.5688 13.6726 17.5688C10.0463 17.5688 6.58489 16.8629 3.41821 15.5811M18.2302 7.31436V5.0356C18.2302 3.77707 17.2099 2.75684 15.9514 2.75684H11.3939C10.1354 2.75684 9.11512 3.77707 9.11512 5.0356V7.31436M13.6726 14.1507H13.684M5.69698 23.2657H21.6483C22.9068 23.2657 23.9271 22.2455 23.9271 20.9869V9.59312C23.9271 8.3346 22.9068 7.31436 21.6483 7.31436H5.69698C4.43845 7.31436 3.41821 8.3346 3.41821 9.59312V20.9869C3.41821 22.2455 4.43845 23.2657 5.69698 23.2657Z"
                      stroke="currentColor"
                      stroke-opacity="0.44"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose text-black text-opacity-40">
                    Services
                  </p>
                </div>
              </Link>
              <Link
                to="/notification"
                className={({ isActive }) =>
                  isActive ? 'active-dashboard-nav' : 'dashboard-nav'
                }
              >
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0908 19.4225H22.7877L21.187 17.8218C20.7528 17.3877 20.509 16.7989 20.509 16.1849V12.5862C20.509 9.60968 18.6066 7.07743 15.9514 6.13896V5.74995C15.9514 4.49143 14.9312 3.47119 13.6727 3.47119C12.4141 3.47119 11.3939 4.49143 11.3939 5.74995V6.13896C8.73871 7.07743 6.83638 9.60968 6.83638 12.5862V16.1849C6.83638 16.7989 6.59249 17.3877 6.15837 17.8218L4.55762 19.4225H10.2545M17.0908 19.4225V20.5619C17.0908 22.4497 15.5605 23.9801 13.6727 23.9801C11.7849 23.9801 10.2545 22.4497 10.2545 20.5619V19.4225M17.0908 19.4225H10.2545"
                      stroke="currentColor"
                      stroke-opacity="0.5"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose text-black text-opacity-40">
                    Notification
                  </p>
                </div>
              </Link>
              <Link
                to="/messages"
                className={({ isActive }) =>
                  isActive ? 'active-dashboard-nav' : 'dashboard-nav'
                }
              >
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.11512 14.3011H9.12651M13.6726 14.3011H13.684M18.2302 14.3011H18.2416M23.9271 14.3011C23.9271 19.3352 19.336 23.4161 13.6726 23.4161C11.9188 23.4161 10.2678 23.0248 8.8242 22.3349L3.41821 23.4161L5.00764 19.1777C4.00108 17.7675 3.41821 16.0948 3.41821 14.3011C3.41821 9.26698 8.00928 5.18604 13.6726 5.18604C19.336 5.18604 23.9271 9.26698 23.9271 14.3011Z"
                      stroke="currentColor"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose">
                    Messages{' '}
                    <span className="inline-flex items-center justify-center w-7 h-6 px-2.5 py-0.5 bg-yellow-500 rounded text-sm font-semibold leading-none text-white">
                      0
                    </span>
                  </p>
                </div>
              </Link>
              <Link to="/account">
                <div className="inline-flex space-x-5 items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2302 8.1796C18.2302 10.6966 16.1898 12.7371 13.6727 12.7371C11.1556 12.7371 9.11517 10.6966 9.11517 8.1796C9.11517 5.66254 11.1556 3.62207 13.6727 3.62207C16.1898 3.62207 18.2302 5.66254 18.2302 8.1796Z"
                      stroke="currentColor"
                      stroke-opacity="0.5"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.6727 16.1553C9.26786 16.1553 5.69702 19.7261 5.69702 24.1309H21.6484C21.6484 19.7261 18.0775 16.1553 13.6727 16.1553Z"
                      stroke="currentColor"
                      stroke-opacity="0.5"
                      stroke-width="2.27876"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-sm font-medium leading-loose text-black text-opacity-40">
                    Account
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-12">
              <Modal
                id="sidebarCreatePostModal"
                existingId={true}
                trigger={
                  <button className="text-sm 2xl:text-lg font-medium leading-relaxed text-center text-white inline-flex items-center justify-center 2xl:h-12 py-2 px-5 2xl:px-11 bg-purple-900 rounded">
                    + Create new post
                  </button>
                }
              />
            </div>
            <div className="inline-flex space-x-3.5 items-center justify-start mt-12 ml-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9987 13.2935L17.2925 9.99968M17.2925 9.99968L13.9987 6.7059M17.2925 9.99968L5.76425 9.99968M10.7049 13.2935V14.1169C10.7049 15.4812 9.59892 16.5873 8.23459 16.5873H4.9408C3.57647 16.5873 2.47046 15.4812 2.47046 14.1169V5.88245C2.47046 4.51812 3.57647 3.41211 4.9408 3.41211H8.23459C9.59892 3.41211 10.7049 4.51812 10.7049 5.88245V6.7059"
                  stroke="#111827"
                  stroke-width="1.64689"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p
                className="text-sm font-medium leading-7"
                onClick={this.handleLogout}
              >
                Log out
              </p>
              {/* <div className="dropdown-link cursor-pointer flex">
                                    <div className="w-6 h-6"><SvgIcon type="exit" /></div>
                                    <div className={minimizeSidebar ? "hidden" : "inline-block ml-3"}>Logout</div>
                                </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(DashboardNav);
