import React, { Component } from 'react';


export default class Time extends Component {
    render() {

        return (
            <>
                <div className={this.props.timeClass}>{this.props.time}</div>
            </>
        );
    }
}
