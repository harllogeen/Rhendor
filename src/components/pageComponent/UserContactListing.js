import React, { Component } from 'react';




export default class UserContactListing extends Component {
    render() {

        const labelContClass = this.props.labelContClass ? this.props.labelContClass : '';
        const iconContClass = this.props.iconContClass ? this.props.iconContClass : '';
        return (
            <>
                    <div className={iconContClass + "flex pb-3 pl-20 dark:bg-gray-800 dark:text-gray-400"}>
                    {this.props.icon}

                <div className={labelContClass + "px-3 pb-3 dark:bg-gray-800 dark:text-gray-400"}>
                {this.props.label}
                    </div>
                </div>
            </>
        );
    }
}



