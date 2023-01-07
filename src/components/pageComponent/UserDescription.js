import React, { Component } from 'react';

export default class UserDescription extends Component {
    render() {

        const DiscribeContClass = this.props.DiscribeContClass ? this.props.DiscribeContClass : '';

        return (
            <>
                <div className={DiscribeContClass + "text-center py-2 text-sm"}>
                    <div>{this.props.describe}</div>
                </div>
            </>
        );
    }
}
