import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SvgIcon from 'des-svg-icons';

export default class DashboardNavLink extends Component {
    render() {
        let minimizeSidebar = this.props.minimizeSidebar ? this.props.minimizeSidebar : false;
        return (
            <>
                <NavLink to={this.props.url} className={({ isActive }) => isActive ? "active-dashboard-nav" : "dashboard-nav"} >
                    {
                        (this.props.img || this.props.svg) &&
                        <span className={this.props.imgClass ? this.props.imgClass : "w-6 h-6 "}>
                            {this.props.img && (<img src={this.props.img} alt={this.props.label} />)}
                            {this.props.svg && (<SvgIcon type={this.props.svg} />)}
                        </span>
                    }
                    <span className={minimizeSidebar ? "hidden" : "inline-block ml-3"}>{this.props.label}</span>
                    {this.props.count && (<span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{this.props.count}</span>)}
                    {this.props.badge && (<span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">{this.props.badge}</span>)}
                </NavLink>
            </>
        );
    }
}
