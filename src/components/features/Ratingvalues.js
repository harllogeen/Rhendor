import React, { Component } from 'react';
import RankingStars from './RankingStars.js';
import RatingFraction from './RatingFraction';






export default class RatingValues extends Component {
    render() {
        return (
            <>
                <div className="bg-gray-100 p-10 justify-between flex flex-col items-center">
                    <div>
                    <RatingFraction ratingFract="4/5"/>
                    </div>
                    <div className="">
                    <RankingStars/>
                    </div>
                </div>
            </>
        );
    }
}
