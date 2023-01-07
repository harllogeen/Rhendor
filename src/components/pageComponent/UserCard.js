import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import UserJobDescription from './UserJobDescription';



export default class UserCard extends Component {
    render() {
        return (
            <>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex md:flex-shrink-0 sm:flex-shrink-0 lg:flex-row lg:px-20 lg:pb-3 lg:pt-10 lg:mx-auto md:flex-col items-center sm:flex-col ">
                        <div className="lg:w-2/3 sm:mx-auto sm:px-auto lg:pr-10 sm:mt-10 sm:max-w-1/2 sm:pb-10 md:mt-10">
                            <SvgIcon type="Pics" />
                        </div>
                        <div className="w-5/4 leading-normal dark:text-gray-400 sm:px-auto sm:text-justify sm:w-4/5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">John Doe</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mikano, factory generator and home gene
                                factory generator and home generator Amet minim mollit non deserunt ullamco est sit aliqua dolor doel it officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>
                        </div>
                    </div>
                </div>



            </>
        );
    }
}
