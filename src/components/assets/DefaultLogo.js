import React, { Component } from "react";
import Img from "../../assets/img/others/logo.svg";

class Logo extends Component {
    render() {
        return (
            <img src={Img} alt="Logo" />
        );
    }
}

export default Logo;
