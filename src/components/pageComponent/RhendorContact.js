import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import UserContactListing from './UserContactListing';




export default class RhendorContact extends Component {
    render() {
        return (
            <>
            <div className="bg-white mt-5 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-400">
                <div className="px-20 py-10">
                    <h3>Rhendor Contact</h3>
                </div>
                <hr className="pt-5" />
            <UserContactListing label="No. 45 Peter Odili road by Market junction, Port Harcourt" icon={<SvgIcon type="Location" />} />
            <UserContactListing label="+234903980909" icon={<SvgIcon type="WhatsApp" />} />
            <UserContactListing label="@Johndeomachineries" icon={<SvgIcon type="Twitter" />} />
            <UserContactListing label="@Johndeomachineries_1" icon={<SvgIcon type="Instagram" />} />
            <UserContactListing label="John Doe Engines" icon={<SvgIcon type="Facebook" />} />
            </div>
            </>
        );
    }
}
