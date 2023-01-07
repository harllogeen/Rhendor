import { RatingWithProgress } from './RatingWithProgress'
import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';




export default class RankingAnalytic extends Component {
    render() {
        return (
            <>
                <div className="space-y-5">
                    <RatingWithProgress stars={5} rating={13} totalRating={45} />
                    <RatingWithProgress stars={4} rating={3} totalRating={45} />
                    <RatingWithProgress stars={3} rating={2} totalRating={45} />
                    <RatingWithProgress stars={2} rating={7} totalRating={45} />
                    <RatingWithProgress stars={1} rating={20} totalRating={45} />
                </div>
            </>
        );
    }
}
