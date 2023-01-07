import React, { Component } from 'react';
import JobDate from './JobDate';
import JobSpeech from './JobSpeech';
import RankingStars from '../features/RankingStars.js.js';




export default class JobQuality extends Component {
    render() {
        return (
            <>
                <div className="space-y-5 justify-between">
                    <div>
                    <RankingStars />
                    </div>
                    <h3>Quality Service</h3>
                <div>
                    <JobSpeech jobSpeech="Mr John is the best out there, I have been struggling to get a reliable Mechanic"/>
                    </div>
                    <div>
                    <JobDate jobDate="12-1-2022"/>
                    </div>
                    <hr className="dark:text-gray-400"/>
                </div>

            </>
        );
    }
}
