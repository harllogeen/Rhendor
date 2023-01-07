
import { Component } from 'react';
import DashboardCardSvg from '../../assets/img/others/card.svg';
import DashboardPostAvatar from '../../assets/img/others/dashboard-post-avatar.svg';
import DashboardPostImage from '../../assets/img/others/dashboard-post-image-2.svg';

export default class DashboardCard extends Component {
    render() {
        return (
            <>
                <div className="relative">
                    <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                        <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg>
                        <svg className="mx-auto px-3" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                        <svg className="mx-auto px-3" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                    </div>
                    <input type="text" id="email-address-icon" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's New?" />
                </div>





                <div className="flex flex-col">
                    <div className="flex items-center">
                        <div className="max-w-full mt-5 bg-white p-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="space-y-1 font-medium dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={DashboardPostAvatar} alt="Dashboard Post Avatar"></img>
                                <div>John Doe is at Lagos, Nigeria</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Thursday Jan 31, 5:50 PM</div>
                            </div>
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.nsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud am.</p>
                            </div>
                            <div className="p-5">
                                <img src={DashboardCardSvg} alt="dashboard card image" className="w-full"></img>
                            </div>
                            <hr />
                            <div className="py-3 inset-y-0 flex w-1/2 pr-3 pointer-events-none">
                                <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg><p>Like</p>
                                <svg className="mx-auto" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg><p>Comment</p>
                                <svg className="mx-auto" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg><p>Share</p>
                            </div>
                            <hr />
                            <div className="relative">
                                <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                                    <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg className="mx-auto px-3" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                                    <svg className="mx-auto px-3" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                                </div>
                                <input type="text" id="email-address-icon" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Comment" />
                            </div>
                        </div>
                    </div>






                    <div className="flex items-center">
                        <div className="max-w-full bg-white p-10 mt-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="space-y-1 font-medium dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={DashboardPostAvatar} alt="Dashboard Post Avatar"></img>
                                <div>John Doe is at Lagos, Nigeria</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Thursday Jan 31, 5:50 PM</div>
                            </div>
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.nsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud am.</p>
                            </div>
                            <hr />
                            <div className="py-3 inset-y-0 flex w-1/2 pr-3 pointer-events-none">
                                <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg><p>Like</p>
                                <svg className="mx-auto" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg><p>Comment</p>
                                <svg className="mx-auto" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg><p>Share</p>
                            </div>
                            <hr />
                            <div className="relative">
                                <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                                    <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg className="mx-auto px-3" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                                    <svg className="mx-auto px-3" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                                </div>
                                <input type="text" id="email-address-icon" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Comment" />
                            </div>
                        </div>
                    </div>





                    <div className="flex items-center">
                        <div className="max-w-full bg-white p-10 mt-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="space-y-1 font-medium dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={DashboardPostAvatar} alt="Dashboard Post Avatar"></img>
                                <div>John Doe is at Lagos, Nigeria</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Thursday Jan 31, 5:50 PM</div>
                            </div>
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.nsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud am.</p>
                            </div>
                            <div className="p-5">
                                <img src={DashboardPostImage} alt="dashboard  image" className="w-full"></img>
                            </div>
                            <hr />
                            <div className="py-3 inset-y-0 flex w-1/2 pr-3 pointer-events-none">
                                <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg><p>Like</p>
                                <svg className="mx-auto" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg><p>Comment</p>
                                <svg className="mx-auto" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg><p>Share</p>
                            </div>
                            <hr />
                            <div className="relative">
                                <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                                    <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg className="mx-auto px-3" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                                    <svg className="mx-auto px-3" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                                </div>
                                <input type="text" id="email-address-icon" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Comment" />
                            </div>
                        </div>
                    </div>




                    <div className="flex items-center">
                        <div className="max-w-full mt-5 bg-white p-10 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="space-y-1 font-medium dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={DashboardPostAvatar} alt="Dashboard Post Avatar"></img>
                                <div>John Doe is at Lagos, Nigeria</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Thursday Jan 31, 5:50 PM</div>
                            </div>
                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.nsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud am.</p>
                            </div>
                            <div className="p-5">
                                <img src={DashboardCardSvg} alt="dashboard card image" className="w-full"></img>
                            </div>
                            <hr />
                            <div className="py-3 inset-y-0 flex w-1/2 pr-3 pointer-events-none">
                                <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                    <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                </svg><p>Like</p>
                                <svg className="mx-auto" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg><p>Comment</p>
                                <svg className="mx-auto" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg><p>Share</p>
                            </div>
                            <hr />
                            <div className="relative">
                                <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
                                    <svg className="mx-auto" width="auto" height="1em" viewBox="0 0 16 16" className="bi bi-emoji-smile" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z" />
                                        <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <svg className="mx-auto px-3" fill="none" height="1em" viewBox="0 0 24 24" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                                    <svg className="mx-auto px-3" height="1em" width="auto" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" /><path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                                </div>
                                <input type="text" id="email-address-icon" className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Comment" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
