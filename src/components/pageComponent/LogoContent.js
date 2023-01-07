import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DefaultLogo from './Logo';
// import WhiteLogo from './white-Logo';

import DefaultLogo from "../../assets/img/others/logo.svg";
import WhiteLogo from "../../assets/img/others/white-logo.svg";

export default class LogoContent extends Component {
    render() {
        return (
            <div>
                <div className="mt-12">
                    <div>
                        <Link to="/" className="inline-block dark:hidden"><img src={DefaultLogo} alt="Logo" /></Link>
                        <Link to="/" className="dark:inline-block hidden"><img src={WhiteLogo} alt="Logo" /></Link>
                    </div>
                </div>
                <div className="mt-6 md:mt-16">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
