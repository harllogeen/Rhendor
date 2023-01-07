import React from 'react';
import { Component } from 'react';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "hidden",
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState(function (state, props) {
            return {
                display: state.display === 'hidden' ? 'block' : 'hidden',
            }
        });
    }

    render() {
        const width = this.props.width ? this.props.width : 'w-44';
        const id = this.props.id ? this.props.id : "dropdownNavbar";
        const contClass = this.props.contClass ? this.props.contClass : "";
        return (
            <>
                <div className="relative">
                    {/* trigger */}
                    <span onClick={this.toggle} >{this.props.trigger}</span>

                    {/* Dropdown menu */}
                    <div id={id} onBlur={this.toggle} className={this.state.display + " " + width + " z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute m-0 mt-2 " + contClass}>
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
};
