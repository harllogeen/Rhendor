import React, { Component } from 'react';
import Img from './Img';


class SideImg extends Component {
    render() {
        return (
            <Img img={this.props.img} contClass="h-full" imgClass="h-full" />
        )
    }
}

export default SideImg;
