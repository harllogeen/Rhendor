import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import ClientContactBtn from './ClientContactBtn';
import UserCredit from './UserCredit';
import UserDescription from './UserDescription';
import ClientRating from './ClientRating';
import RankingStars from '../features/RankingStars.js.js';
import FilterDown from './FilterDown';
import FilterUp from './FilterUp';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import UserName from './UserName';
import UserDistance from './UserDistance';
import TopFilter from './TopFilter';



export default class FullAccountCard extends Component {
    render() {
        return (
            <>
                <TopFilter />


                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex px-3 pb-3 pt-10 mx-auto items-center  md:flex-row ">
                        <div className="w-2/3">
                            <NavLink to="/profile/#AccountCard">
                                <SvgIcon type="Pics" />
                            </NavLink>
                        </div>
                        <div className="w-5/4 px-14">
                            <div className="flex justify-between">
                                <div className="flex-row">
                                    <NavHashLink to="/profile/#AccountCard">

                                        <UserName name="John Doe" />
                                    </NavHashLink>
                                </div>
                                <div className="flex-row-reverse">
                                    <UserDistance distance="49.40km away" />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex-row">
                                    <NavLink to="/dashboardservices">
                                        <UserDescription describe="Generator Repairer" />
                                    </NavLink>
                                </div>
                                <div className="flex-row-reverse">
                                    <NavHashLink to="/profile/#rating">
                                        <ClientRating rating="Customer Ratings- 4.0/5" />
                                    </NavHashLink>
                                </div>
                            </div>
                            <div>
                                <NavHashLink to="/profile/#rating">
                                    <RankingStars />
                                </NavHashLink>
                            </div>

                            <p className="mb-3 pt-14 pb-5 font-normal text-gray-700 dark:text-gray-400">Mikano, factory generator and home gene
                                factory generator and home generator Amet minim mollit non deserunt ullamco est sit aliqua dolor doel it officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                            <NavHashLink to="/profile/#jobs">
                                <div className="flex">
                                    <span className="pr-2">Total Jobs:</span>
                                    <UserCredit rating="20" />
                                </div>
                            </NavHashLink>
                            <div className="flex-row-reverse">
                                <ClientContactBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
