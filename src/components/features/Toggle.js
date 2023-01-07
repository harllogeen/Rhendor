import React from 'react';
import { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleToggle(e.target.value);
    };

    render() {
        let labelSize = this.props.labelSize ? this.props.labelSize : " text-sm";
        let labelClass = this.props.labelClass ? this.props.labelClass : "";
        return (
            <>
                <div className={this.props.groupClass + " flex flex-wrap"}>
                    <div className={labelSize + " ml-3 font-medium mr-3 " + labelClass}>{this.props.label}</div>
                    <label htmlFor={this.props.name || this.props.id} className="flex relative items-center mb-4 cursor-pointer">
                        <input type="checkbox" id={this.props.id} className="sr-only" checked={this.props.toggled} onChange={this.handleChange} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full toggle-bg bg-base-400/25 dark:bg-gray-700 dark:border-gray-600"></div>
                    </label>
                    {this.props.mutedText ? (<div className="muted-text">{this.props.mutedText}</div>) : ''}
                </div>
            </>
        );
    }
};
