import React, { Component } from 'react';
import { BindThis } from 'des-utilities';
import SvgIcon from 'des-svg-icons';

export default class Rating extends Component {
    constructor(props) {
        super(props);

        BindThis(this, ['ratingIconLength']);
    }

    ratingIconLength(length) {
        let result = [];

        for (let i = 1; i > length; i++) {
            result.push(<SvgIcon type="star" />)
        }
        return result;
    }

    render() {
        const RatingContClass = this.props.RatingContClass ? this.props.RatingContClass : '';
        const ratingCount = this.props.ratingCount ? this.props.ratingCount : 1;

        return (
            <>
                <div>
                    <div>
                        {this.ratingIconLength(ratingCount)}
                    </div>
                    <div className={RatingContClass + "text-center pt-2 text-sm"}>
                        <div>{this.props.rating}</div>
                    </div>
                </div>
            </>
        );
    }
}
