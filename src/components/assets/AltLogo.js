import React, { Component } from "react";
import PurpleLogo from "../../assets/img/others/logo.svg";
import WhiteLogo from "../../assets/img/others/white-logo.svg";
import { Link } from 'react-router-dom';

export default class AltLogo extends Component {
    render() {
        let white = '';
        let purple = '';

        // check the first background type: dark or light
        white = this.props.firstBg === 'dark' ? 'inline-block dark:hidden' : 'dark:inline-block hidden';
        purple = this.props.firstBg === 'dark' ? 'dark:inline-block hidden' : 'inline-block dark:hidden';

        return (
            <>
                {/* add classes based on the first mode */}
                <Link to="/" className={purple}><img src={PurpleLogo} alt="Logo" /></Link>
                <Link to="/" className={white}><img src={WhiteLogo} alt="Logo" /></Link>
            </>
        );
    }
}
