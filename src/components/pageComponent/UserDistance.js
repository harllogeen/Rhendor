import React, { Component } from 'react';




export default class UserDistance extends Component {
    render() {

        const DistanceContClass = this.props.DistanceContClass ? this.props.DistanceContClass : '';

        return (
            <>
                <div className={DistanceContClass + "text-center pt-10 pb-2 text-sm"}>
                    <div>{this.props.distance}</div>
                </div>
            </>
        );
    }
}
