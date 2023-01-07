import { Component } from 'react';
import PostCard from './PostCard';
import DashboardPostAvatar from '../../assets/img/others/dashboard-post-avatar.svg';
import DuplicateItems from '../features/DuplicateItems';
import HttpRequest from 'des-http-processor';
import { ProcessHttpMessage } from 'des-http-processor';
import { toast } from 'react-toastify';



export default class PostsContainer extends Component {
    constructor(props) {
        super(props);

        this.mapServices = this.mapPosts.bind(this);
        // this.state = {
        //     posts: {}
        // }

        // // fetch posts
        // HttpRequest(MyConfig.apiUrl + 'all-services', 'get', null, ProcessHttpMessage).then((response) => {
        //     this.setState({
        //         services: response.data,
        //         servicesFetched: true,
        //     });

        //     // if retry interval was set
        //     if (this.fetchServicesInterval) {
        //         toast.success('We have successfully fetched all services. Please continue with your registration. We apologize for the inconvenience.');
        //         clearInterval(this.fetchServicesInterval);
        //     }
        // }, () => { });
    }

    mapPosts(items) {
        let result = [];
        // for (var i = 0; i < Object.keys(items).length; i++) {
        // }

        // loop through items
        Object.entries(items).map((item) => {
            return result.push(<PostCard profilePic={DashboardPostAvatar} />)
        })
        return result;
    }

    render() {
        const posts = [
            {
                userName: 'Sanni Abiodun',
                userPic: DashboardPostAvatar,
            }
        ]
        return (
            <>
                {/* <DuplicateItems items={posts} structure={PostCard} structureProps={{profilePic: 'userPic'}} /> */}
            </>
        );
    }
}
