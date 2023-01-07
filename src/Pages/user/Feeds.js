import { FetchList } from './FetchList'
import React, { Component } from 'react';
import SmallAccountCard from '../../components/pageComponent/SmallAccountCard';
import DashboardLayout from '../../components/layouts/DashboardLayout';

export default class Feeds extends Component {
    constructor(props) {
        super(props);

        FetchList(this, 'rhendors', 'services');
    }


    componentDidMount() {
        // HttpRequest(MyConfig.apiUrl + 'posts', 'get', null)
        //     .then(response => {
        //         this.setState({ posts: response.response.data.data.data });
        //     });

        // this.refreshListInterval = setInterval(
        //     () => {
        //         FetchList(this, 'rhendors', 'services');

        //         // HttpRequest(MyConfig.apiUrl + 'posts', 'get', null)
        //         // .then(response => {
        //         //     this.setState({ posts: response.response.data.data.data });
        //         // });
        //     },
        //     5000
        // );
    }

    // clear interval
    componentWillUnmount() {
        clearInterval(this.refreshListInterval);
    }


    render() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        return (
            <>
                <DashboardLayout>
                    <div className="px-2 lg:px-auto">
                        <SmallAccountCard user={user} />
                    </div>
                </DashboardLayout>
            </>
        );
    }
}
