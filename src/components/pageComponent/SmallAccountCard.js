import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import UserDescription from './UserDescription';
import UserDistance from './UserDistance';
import Rating from './Rating';
import UserTotalJobs from './UserTotalJobs';
import RankingStars from '../features/RankingStars.js.js';
import Modal from '../features/Modal';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import * as Yup from 'yup';
import FormTextArea from './../form/FormTextArea';
import MyForm from '../form/Form';
import Button from './../form/Button';
import Card from './Card';
import { Emojis } from './../features/Emojis';
import UserName from './UserName';
import { MyConfig } from '../../MyConfig';



export default class SmallAccountCard extends Component {
    render() {
        const user = this.props.user;
        return (
            <>
                <div className="relative bg-white border-2 rounded-lg border-gray-100 w-40 lg:w-80 p-1 lg:p-2">
                    <Link to={`/account/${user.id}`}>
                        <img className="w-40 lg:w-80 h-24 lg:h-52 rounded-lg" src={user.image} />
                    </Link>
                    <div className="space-y-3 lg:space-y-6 my-1.5 lg:my-3">
                        <div className="flex justify-between">
                            <div className="inline-flex flex-col space-y-1 items-start">
                                <Link to={`/account/${user.id}`}>
                                    <p className="text-xs lg:text-base font-bold leading-normal">{user.name}</p>
                                </Link>
                                <Link to="/servicerhendors/1">
                                    <p className="text-2xs lg:text-xs leading-none text-black text-opacity-50">Generator Repairer</p>
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-1 items-end text-right">
                                <p className="text-2xs lg:text-xs leading-normal">49.40km away</p>
                                <p className="text-2xs lg:text-xs leading-none text-black text-opacity-50">Customer Ratings- 4.0/5</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-2xs lg:text-xs leading-snug">Total jobs: 20</p>

                            <Modal id="createPostModal" trigger={
                                <button className="text-2xs lg:text-xs font-medium leading-none text-center text-white px-1.5 lg:px-2.5 py-1.5 lg:py-3 bg-yellow-400 rounded">Contact Rhendor</button>
                            }>
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">Send Message</h3>
                                <MyForm showSpinner={true} formUrl={MyConfig.apiUrl + "send-message"} validationSchema={{
                                    message: Yup.string().required('Please enter your message')
                                }}
                                    initialValues={{
                                        message: '',
                                        receiver_id: user.id,
                                    }}
                                >
                                    <div class="flex items-center py-2 px-3">
                                        <div className="flex flex-col">
                                            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                    />
                                                </svg>
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
                    </div>
                </div>
            </>
        );
    }
}
