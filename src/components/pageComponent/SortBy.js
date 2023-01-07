import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import { BindThis, CallParentMethod } from 'des-utilities';

export default class SortBy extends Component {
    constructor(props) {
        super(props);

        BindThis(this, ['sort']);
    }

    sort = (format) => {
        CallParentMethod(this, this.props.sort, format)
    }

    render() {
        return (
            <>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
                    <span>Sort by:</span>
                    <div onClick={this.sort('descending')} className="cursor-pointer hover:text-base-400">
                        <SvgIcon type="FilterDown" />
                    </div>
                    <div onClick={this.sort('ascending')} className="cursor-pointer hover:text-base-400">
                        <SvgIcon type="FilterUp" />
                    </div>
                    <div onClick={this.sort('recommended')} className="cursor-pointer hover:text-base-400">
                        <span>Recommended</span>
                    </div>
                </div>
            </>
        );
    }
}
