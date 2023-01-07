import React, { Component } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import RhendorContact from '../../components/pageComponent/RhendorContact';
import UserCard from '../../components/pageComponent/UserCard';
import PreviousJobs from '../../components/pageComponent/PreviousJobs';
import CustomerReviews from '../../components/pageComponent/CustomerReviews';
import UserJobDescription from '../../components/pageComponent/UserJobDescription';
import { withRouter } from 'react-router-dom';
import { DynamicComponent } from 'des-utilities';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: JSON.parse(sessionStorage.getItem('user'))
        }
    }


    render() {
        return (
            <>
                <DashboardLayout>
                    <div id="AccountCard">
                        <UserJobDescription user={this.state.user} />
                    </div>
                    <div>
                        <RhendorContact />
                    </div>
                    <div id="jobs">
                        <PreviousJobs />
                    </div>
                    <div>
                        <CustomerReviews />
                    </div>
                </DashboardLayout> 
            </>
        );
    }
}

export default DynamicComponent(UserProfile);
