import React, { Component } from 'react';




export default class UserTotalJobs extends Component {
    render() {

        const TotalJobsContClass = this.props.TotalJobsContClass ? this.props.TotalJobsContClass : '';

        return (
            <>
                <div className={TotalJobsContClass + "text-center pt-2 text-sm"}>
                    <div>{this.props.totalJobs}</div>
                </div>
            </>
        );
    }
}
