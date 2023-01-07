import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import WhiteLogo from "../../assets/img/others/white-logo.svg";
import OverallLayout from './OverallLayout';

export default class ResetLayout extends Component {
    render() {
        return (
            <OverallLayout>
                <div className="flex flex-col lg:flex-row flex-wrap min-h-screen">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:w-1/2 g-base1 dark:border-r white-border min-h-screen">
                        <div className="py-6 px-4 sm:px-6 flex flex-col lg:hidden sm:flex-row items-center w-full justify-start sm:justify-between">
                            <Link to="/"><img src={WhiteLogo} alt="Logo" /></Link>
                            <div className="mt-4 sm:mt-auto">
                                {this.props.headLink && (<p className="text-right white-text">{this.props.headLink}</p>)}
                            </div>
                        </div>
                        <div className="grow w-full flex items-center justify-center">
                            <div>
                                <h3 className="text-center text-white">{this.props.SideTitle}</h3>
                                <p className="text-white text-center mt-6">{this.props.SideParagraph}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 white-bg">
                        <div className="flex flex-col h-full mt-24 mb-12 lg:my-auto">
                            {/* link in header */}
                            <div className="hidden lg:inline-block">
                                {this.props.headLink && (<p className="py-6 md:w-5/6 md:mx-auto text-right">{this.props.headLink}</p>)}
                                {this.props.headLink && (<hr className="light-border" />)}
                            </div>

                            {/* page content */}
                            <div className="grow flex items-center w-full">
                                <div className="w-full">
                                    {this.props.children}
                                </div>
                            </div>

                            {/* footer */}
                            <div className="flex flex-col sm:flex-row mt-8 lg:mb-8 items-center sm:justify-between sm:w-5/6 sm:mx-auto">
                                <NavLink to="/contactus">
                                    <div className="flex light-text light-text-hover">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                        <span className="ml-1 light-text light-text-hover">Still having problem?</span>
                                    </div>
                                </NavLink>
                                <div className="text-sm">
                                    <Link to="/termsandconditions" className="text-blue-900">Terms of Service</Link>
                                    |
                                    <Link to="/privacypolicy" className="text-blue-900">Privacy Policy</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </OverallLayout>
        )
    }
}
