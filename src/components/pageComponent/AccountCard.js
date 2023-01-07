import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import ClientContactBtn from './ClientContactBtn';
import ClientDescription from './UserDescription';
import UserDistance from './ClientDistance';
import UserName from './ClientName';
import Rating from './ClientRating';
import UserTotalJobs from './ClientTotalJobs';
import Modal from '../features/Modal';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import ChatBoxFooter from './ChatBoxFooter';
import * as Yup from 'yup';
import FormTextArea from './../form/FormTextArea';
import MyForm from '../form/Form';
import Button from './../form/Button';
import Card from './Card';
import Rating from './Rating';



export default class SmallAccountCard extends Component {
    render() {
        return (
            <>
                <Card contClass="w-full" header={
                    <div>
                        <NavLink to="/profile#AccountCard">
                            <SvgIcon className="mx-5" type="Client" />
                        </NavLink>
                    </div>
                }>
                    <div className="flex justify-between">
                        <div className="flex-row">
                            <UserName name="John Doe" to="/profile/#AccountCard" />
                        </div>
                        <div className="flex-row-reverse">
                            <UserDistance distance="49.40km away" />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex-row">
                            <NavLink to="/dashboardservices">
                                <ClientDescription describe="Generator Repairer" />
                            </NavLink>
                        </div>
                        <div className="flex-row-reverse">
                            <NavHashLink smooth to="/profile/#rating">
                                <Rating rating="Customer Ratings- 4.0/5" />
                            </NavHashLink>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex-row">
                            <NavHashLink smooth to="/profile/#jobs">
                                <UserTotalJobs totalJobs="Total jobs: 20" />
                            </NavHashLink>
                        </div>



                        <Modal id="createPostModal" trigger={
                            <div className="flex-row-reverse">

                                <Button children="Contact Rhendor" rounded="rounded-lg" textSize="sm" />

                            </div>
                        }>
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Send Message</h3>
                            <MyForm formUrl={MyConfig.apiUrl + "send-message"} validationSchema={{
                                message: Yup.string().required('Please enter your message')
                            }}
                                initialValues={{
                                    message: '',
                                    receiver_id: this.props.user.id,
                                }}
                            >
                                <div class="flex items-center py-2 px-3">
                                    <div className="flex flex-col">

                                        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                        </button>
                                        <Emojis />
                                    </div>
                                    <FormTextArea groupClass="grow" inputClasses="rounded-lg py-2 px-2" id="message" placeholder="Type your message" name="message" />
                                </div>
                                <div className="flex justify-center">
                                    <Button children="Send" rounded="rounded-lg" textSize="sm" />
                                </div>
                            </MyForm>
                        </Modal>
                    </div>
                </Card>
                <div className="w-80 bg-white p-2 rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div>
                        <NavLink to="/profile#AccountCard">
                            <SvgIcon className="mx-5" type="Client" />
                        </NavLink>
                    </div>

                </div>
            </>
        );
    }
}
