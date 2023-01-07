
import { Component } from 'react';
import SvgIcon from 'des-svg-icons';


export default class Share extends Component {
    render() {
        const contClass = this.props.contClass ? this.props.contClass : 'flex space-x-3 items-center w-auto h-4';
        const imgClass = this.props.imgClass ? this.props.imgClass : 'w-4 h-4';
        return (
            <div className={contClass + " cursor-pointer"}>
                <div className={imgClass}>
                    <SvgIcon type="photo" />
                </div>
                {
                    this.props.label && <p>{this.props.label}</p>
                }

            </div>
        )
    }
}
