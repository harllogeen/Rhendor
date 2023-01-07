import React, { Component } from 'react';
import Avatar from '../features/Avatar';
import NotificationText from './NotificationText';
import Time from './Time';
import { NavLink } from 'react-router-dom';

export default class NotificationMsg extends Component {
    render() {

        return (
            <>
                <div className="flex lg:flex-row lg:space-x-12 flex-shrink-0 h-full px-4 lg:px-0">
                    {/* notification box */}
                    <div className="flex flex-col grow white-gray-bg rounded-lg border border-gray-200 shadow-md min-h-full dark:border-gray-700 lg:space-y-5 lg:py-10">
                        <div className="cursor-pointer white-gray-bg-hover light-border">
                            <div className="flex flex-row items-center justify-between px-3 lg:px-5">
                                <div className="grow">
                                    <Avatar pic={this.props.user.image} description="" descriptionClass="light-gray-text" contClass="space-x-3 items-center" imgSize="w-14 h-14" imgRounded="rounded-lg" description="This is a Dummy Chat Messsage." />
                                </div>

                                <div className="flex space-x-3 lg:space-x-5 lg:w-1/6">
                                    <Time time="1h" timeClass="light-gray-text" />
                                    <div id="dropdownButton" data-dropdown-toggle="dropdown" class="cursor-pointer mt-0 text-gray-500 dark:text-gray-400 focus:outline-none rounded-lg text-sm" type="button">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Box*/}
                    <div className="white-gray-bg border border-gray-200 shadow-md lg:w-2/6 max-w-[340px] dark:bg-gray-800 dark:border-gray-700 hidden lg:inline-block">
                        <div className="flex pt-3 px-3 justify-between flex-row pb-8">
                            <div>
                                <h4 className="mt-0">Chats</h4>
                            </div>
                            <div>
                                <div id="dropdownButton" data-dropdown-toggle="dropdown" class="text-gray-500 dark:text-gray-400  focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm" type="button">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clipRule="evenodd" d="M9.492 0.0544664C9.906 0.0544664 10.242 0.390466 10.242 0.804467C10.242 1.21847 9.906 1.55447 9.492 1.55447H5.753C3.169 1.55447 1.5 3.32447 1.5 6.06347V14.3775C1.5 17.1165 3.169 18.8865 5.753 18.8865H14.577C17.161 18.8865 18.831 17.1165 18.831 14.3775V10.3495C18.831 9.93547 19.167 9.59947 19.581 9.59947C19.995 9.59947 20.331 9.93547 20.331 10.3495V14.3775C20.331 17.9715 18.018 20.3865 14.577 20.3865H5.753C2.312 20.3865 0 17.9715 0 14.3775V6.06347C0 2.46947 2.312 0.0544664 5.753 0.0544664H9.492ZM18.2016 0.933067L19.4186 2.15007C20.0116 2.74207 20.3376 3.52907 20.3366 4.36707C20.3366 5.20507 20.0106 5.99107 19.4186 6.58207L11.9096 14.0911C11.3586 14.6421 10.6246 14.9461 9.8446 14.9461H6.0986C5.8966 14.9461 5.7026 14.8641 5.5616 14.7191C5.4206 14.5751 5.3436 14.3801 5.3486 14.1771L5.4426 10.3981C5.4616 9.64607 5.7646 8.93907 6.2966 8.40607H6.2976L13.7706 0.933067C14.9926 -0.286934 16.9796 -0.286934 18.2016 0.933067ZM13.155 3.66907L7.3576 9.46707C7.0986 9.72607 6.9516 10.0701 6.9426 10.4351L6.8676 13.4461H9.8446C10.2246 13.4461 10.5806 13.2991 10.8496 13.0301L16.682 7.19607L13.155 3.66907ZM14.8306 1.99407L14.215 2.60807L17.742 6.13607L18.3586 5.52107C18.6666 5.21307 18.8366 4.80307 18.8366 4.36707C18.8366 3.93007 18.6666 3.51907 18.3586 3.21107L17.1416 1.99407C16.5046 1.35907 15.4686 1.35907 14.8306 1.99407Z" fill="black" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className="flex space-y-4 flex-col w-full white-gray-bg border light-gray-border shadow-md ">
                            <NavLink className="white-gray-bg-hover cursor-pointer" to="/messages">
                                <Avatar pic={this.props.user.image} name="Test user" descriptionClass="text-sm light-gray-text" nameClass="text-lg font-bold" description="This is a Dummy Chat Messsage." contClass="p-3 space-x-2" imgSize="w-14 h-14" imgRounded="rounded-lg" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
