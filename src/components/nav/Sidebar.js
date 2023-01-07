import React, { Component } from 'react';
import Modal from '../features/Modal';
import Button from '../form/Button';
import SvgIcon from 'des-svg-icons';
import Avatar from '../features/Avatar';
import DashboardNavLink from './DashboardNavLink';
import { CreatePost } from './CreatePost';
import { Link } from 'react-router-dom';
import AltLogo from '../assets/AltLogo';
// import FormText from '../form/FormText';
// import FullButton from '../form/FullButton';
// import MyForm from './../form/Form';
// import * as Yup from 'yup';
// import FormTextArea from './../form/FormTextArea';
// import { MyConfig } from '../../MyConfig';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    // bind this
    this.handleLogout = this.handleLogout.bind(this);
  }

  // handle logout
  handleLogout = () => {
    // clear session
    this.props.handleLogout();
  };

  render() {
    let minimizeSidebar = this.props.minimizeSidebar
      ? this.props.minimizeSidebar
      : false;
    return (
      <>
        <aside
          aria-label="Sidebar"
          className={
            (minimizeSidebar ? '' : ' max-w-[280px] w-1/4') +
            ' hidden lg:block overflow-auto'
          }
        >
          {/* <aside aria-label="Sidebar"> */}
          <div className=" overflow-y-auto white-gray-bg">
            <Link to="/account">
              <div
                className={
                  'flex justify-center items-center py-2.5 mt-16 bg-gray-200 dark:bg-gray-500 ' +
                  (minimizeSidebar ? 'px-2' : 'px-3')
                }
              >
                <Avatar
                  imgClass="text-gray-500 hover:text-base-400 dark:text-gray-300 dark:hover:text-base-200"
                  pic={this.props.profilePic}
                  description={this.props.userNick}
                  name={this.props.userName}
                  contClass="items-center space-x-4"
                  labelContClass={minimizeSidebar ? 'hidden' : 'max-w-full'}
                  nameClass="word-break"
                />
              </div>
            </Link>
            <div className="space-y-8 lg:space-y-20">
              <div className="flex justify-center w-full mt-5 lg:mt-5 lg:mt-10 ">
                <ul className="space-y-10 lg:space-y-12">
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/connect"
                      label="Home"
                      svg="home"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/feeds"
                      label="Feeds"
                      svg="people"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/dashboardservices"
                      label="Services"
                      svg="briefcase"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/notification"
                      label="Notification"
                      svg="bell"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/messages"
                      label="Message"
                      svg="message"
                    />
                  </li>
                  <li>
                    <DashboardNavLink
                      minimizeSidebar={minimizeSidebar}
                      url="/account"
                      label="Account"
                      svg="user"
                    />
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Modal
                  id="sidebarCreatePostModal"
                  modalClass="py-2 px-0"
                  trigger={
                    minimizeSidebar ? (
                      <Button children="+" textSize="sm" />
                    ) : (
                      <Button
                        children="+ Create new post"
                        textSize="sm"
                        rounded="rounded-lg"
                      />
                    )
                  }
                >
                  <CreatePost />
                </Modal>
              </div>
              <div>
                <div
                  className="dropdown-link cursor-pointer flex pl-20"
                  onClick={this.handleLogout}
                >
                  <div className="w-6 h-6">
                    <SvgIcon type="exit" />
                  </div>
                  <div
                    className={minimizeSidebar ? 'hidden' : 'inline-block ml-3'}
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </>
    );
  }
}
