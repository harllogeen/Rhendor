import React, { Component } from 'react';




export default class RatingFraction extends Component {
    render() {

        const RatingFractContClass = this.props.RatingFractContClass ? this.props.RatingFractContClass : '';
       
        return (
            <>
                    <div className={RatingFractContClass + "text-center pb-3"}>
                    <div>{this.props.ratingFract}</div>
                    </div>
            </>
        );
    }
}
