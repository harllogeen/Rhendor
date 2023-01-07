import React, { Component } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import NotificationMsg from '../../components/pageComponent/NotificationMsg';

export default class Notifications extends Component {

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
                <NotificationMsg user={this.state.user}/>
                </DashboardLayout>

            </>
        );
    }
}
