import React, { Component } from 'react';


export default class Img extends Component {
    render() {
        return (
            <div className={(this.props.contClass ? this.props.contClass : "") + " relative"}>
                <div className={(this.props.overlayClass ? this.props.overlayClass : "") + " w-full absolute bg-gray-700 opacity-60 bottom-0 top-0 hidden dark:block"}></div>
                <img style={{ objectFit: "cover" }} className={(this.props.imgClass ? this.props.imgClass : "")} src={this.props.img} alt="Login" />
            </div>
        )
    }
}
