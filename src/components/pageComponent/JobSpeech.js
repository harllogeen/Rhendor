import React, { Component } from 'react';




export default class JobSpeech extends Component {
    render() {

        const JobSpeechContClass = this.props.JobSpeechContClass ? this.props.JobSpeechContClass : '';
       
        return (
            <>
                    <div className={JobSpeechContClass + "pb-3 dark:text-gray-400"}>
                    <div>{this.props.jobSpeech}</div>
                    </div>
            </>
        );
    }
}
