import React, { Component } from "react";
import SideImg from "./SideImg";


class TwoSections extends Component {
    render() {
        return (
            <div className="h-screen">
                <div className="flex justify-center dark:bg-base-900">
                    <div className="w-4/5">{this.props.children}</div>
                    <div className="px-0 hidden lg:block"><SideImg img={this.props.sideImg} /></div>
                </div>
            </div>
        );
    }
}

export default TwoSections;
