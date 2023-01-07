import React, { Component } from 'react';

export default class ResetSide extends Component {
    render() {
        return (
            <div className="h-screen flex flex-col text-white">
                <div className="md:grow flex justify-center items-center" style={{ height: "90%;" }}>
                    <div>
                        <h2>We got you covered</h2>
                        <p className="mt-6">We’ll walk you through to regain access to your account</p>
                    </div>
                </div>
                <div>&copy; 2022 Rhenda. All rights reserved.</div>
            </div>
        )
    }
}
