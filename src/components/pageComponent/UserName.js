import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';




export default class UserName extends Component {
    render() {

        const NameContClass = this.props.NameContClass ? this.props.NameContClass : '';

        return (
            <>
                <NavHashLink smooth to={this.props.to}>
                    <div className={NameContClass + "text-center pt-10 pb-2 text-2xl font-bolddark:text-gray-400"}>
                        <div>{this.props.name}</div>
                    </div>
                </NavHashLink>
            </>
        );
    }
}
