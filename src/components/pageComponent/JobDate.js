import React, { Component } from 'react';


export default class JobDate extends Component {
    render() {

        const JobDateContClass = this.props.JobDateContClass ? this.props.JobDateContClass : '';
       
        return (
            <>
                    <div className={JobDateContClass + "pb-5 dark:text-gray-400"}>
                    <div>{this.props.jobDate}</div>
                    </div>
            </>
        );
    }
}