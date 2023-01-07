import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import UserDistance from './UserDistance';
import Rating from './Rating';
import UserDescription from './UserDescription';

export default class UserJobDescription extends Component {
    render() {
        const RatingImgContClass = this.props.RatingImgContClass ? this.props.RatingImgContClass : '';
        const RatingValueContClass = this.props.RatingValueContClass ? this.props.RatingValueContClass : '';
        const RatingLabelContClass = this.props.RatingLabelContClass ? this.props.RatingLabelContClass : '';
        const JobToolImgContClass = this.props.JobToolImgContClass ? this.props.JobToolImgContClass : '';
        const JobValueContClass = this.props.JobValueContClass ? this.props.JobValueContClass : '';
        const JobLabelContClass = this.props.JobLabelContClass ? this.props.JobLabelContClass : '';
        const LastActiveImgContClass = this.props.LastActiveImgContClass ? this.props.LastActiveImgContClass : '';
        const LastActiveValueContClass = this.props.LastActiveValueContClass ? this.props.LastActiveValueContClass : '';
        const LastActiveLabelContClass = this.props.LastActiveLabelContClass ? this.props.LastActiveLabelContClass : '';
        const contClass = this.props.contClass ? this.props.contClass : 'lg:flex-row lg:px-20 lg:pb-3 lg:pt-10 lg:mx-auto md:flex-col items-center sm:flex-col ';
        return (
            <>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className={"flex " + contClass}>
                        <div className="lg:w-2/3 lg:px-10 sm:mx-auto sm:px-20 lg:pr-10 sm:mt-10 sm:max-w-1/2 sm:pb-10 md:mt-10">
                            <SvgIcon type="Pics" />
                        </div>

                        <div className="lg:w-5/4 leading-normal dark:text-gray-400 sm:px-auto sm:text-justify sm:max-w-4/5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">John Doe</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mikano, factory generator and home gene
                                factory generator and home generator Amet minim mollit non deserunt ullamco est sit aliqua dolor doel it officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify between w-auto mx-auto">
                        <div>
                        </div>
                        <div>
                            <UserDistance distance='153km' />
                            {/* <UserDistance distance={this.props.spaceDistance} /> */}
                        </div>
                    </div>

                    <div className="flex flex-row justify between w-auto mx-auto">
                        <div>
                            <Rating rating={4.5} />
                            {/* <Rating rating={this.props.rateValue} /> */}
                        </div>
                        <div>
                            <UserDescription describe={this.props.describing} />
                        </div>
                    </div>
                    <div className="flex flex-row justify between w-auto mx-auto">
                        <div>
                            <Rating rating={this.props.rate} />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:max-w-1/2 sm:mx-10 sm:px-auto py-5 px-10 justify-between flex-shrink-0 flex-row items-center bg-white mx-auto md:flex-row md:max-w-xl dark:bg-gray-800">

                        <div className="flex">
                            <div className={RatingImgContClass + ""}>
                                {this.props.RatingImg}

                                <div className="px-3 dark:text-gray-400">
                                    <span className={RatingValueContClass + "text-black dark:text-gray-400"}>
                                        <div>{this.props.ratingValue}</div>
                                    </span>
                                    <span className={RatingLabelContClass + ""}>
                                        {this.props.ratingLabel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className={JobToolImgContClass + ""}>
                            {this.props.JobToolImg}

                            <div className="px-3 dark:text-gray-400">
                                <span className={JobValueContClass + "text-black dark:text-gray-400"}>
                                    <div>{this.props.jobValue}</div>
                                </span>
                                <span className={JobLabelContClass + "px-3 dark:text-gray-400"}>
                                    {this.props.jobLabel}
                                </span>
                            </div>

                            <div className="flex">
                                <div className={LastActiveImgContClass + ""}>
                                    {this.props.LastActiveImg}
                                    <div className="px-3 dark:text-gray-400">
                                        <span className={LastActiveValueContClass + "text-black dark:text-gray-400"}>
                                            <div>{this.props.LastActiveValue}</div>
                                        </span>
                                        <span className={LastActiveLabelContClass + "text-black dark:text-gray-400"}>
                                            <div>{this.props.LastActiveLabel}</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











            </>
        );
    }
}
