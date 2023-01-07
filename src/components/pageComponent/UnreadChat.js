
import { Component } from 'react';
import Avatar from '../features/Avatar';
import SvgIcon from 'des-svg-icons';

export default class UnreadChat extends Component {
    render() {
        const UnreadContClass = this.props.UnreadContClass ? this.props.UnreadContClass : '';
        const count = this.props.count ? this.props.count : 0;
        return (
            <div className="flex flex-row items-center flex-shrink-0 dark-text">
                <div className="w-3/5">
                    <hr className="border-black dark:border-gray-700 ml-10" />
                </div>
                <div className="w-3/5 mx-auto">
                    <div className={UnreadContClass + " className= text-sm ml-14"}>
                        {/* user's name */}
                        <div>Unread Message{count > 1 && 's'}</div>
                    </div>
                </div>
                <div className="w-2/5">
                    <hr className="border-black dark:border-gray-700" />
                </div>
            </div>
        );
    }
}
