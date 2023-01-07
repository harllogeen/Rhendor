import React, { Component } from "react";
import Img from "../../assets/img/others/logo.svg";

class Logo extends Component {
    render() {
        const size = this.props.size ? this.props.size : '';
        return (
            <img src={Img} alt="Logo" className={size} />
        );
    }
}

export default Logo;
