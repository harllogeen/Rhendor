import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';

export default class SeeAllBtn extends Component {
    render() {
        return (
            <>
                <div className="flex space-between dark:text-gray-400">
                    <div>
                        <span>SEE ALL</span>
                    </div>
                    <div>
                        <SvgIcon type="ProceedIcon" />
                    </div>
                </div>

            </>
        );
    }
}
