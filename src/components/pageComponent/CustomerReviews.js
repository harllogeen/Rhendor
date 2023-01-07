import React, { Component } from 'react';
import JobQuality from './JobQuality';
import RankingAnalytic from '../features/RankingAnalytic';
import RatingValues from '../features/Ratingvalues';
import SeeAllBtn from '../features/SeeAllBtn';



export default class CustomerReviews extends Component {
    render() {
        return (
            <>
                <div id="rating">
                    <div className="bg-white mt-5 rounded-lg shadow-md border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-row text-sm space-x-2 justify-between">
                            <div className="">
                                <h3>Customer Reviews</h3>
                            </div>
                            <div className="">
                                <SeeAllBtn />
                            </div>
                        </div>
                        <hr className="pt-5" />
                        <div className="flex flex-col lg:flex-row space-x-4">
                            <div className="w-auto p-4">
                                <RatingValues />
                            </div>
                            <div className="mt-10 lg:mt-auto">
                                <JobQuality />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="">
                                <RankingAnalytic />
                            </div>
                        </div>

                    </div>
                </div>

            </>
        );
    }
}
