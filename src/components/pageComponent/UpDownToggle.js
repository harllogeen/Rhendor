import React from 'react';
import SvgIcon from 'des-svg-icons';

export class UpDownToggle extends React.Component {
    render() {
        return this.props.showUp
            ? <div className="w-6 h-6 text-gray-400"><SvgIcon type="up" /></div>
            : <div className="w-4 h-4 text-gray-400"><SvgIcon type="down" /></div>;
    }
}
