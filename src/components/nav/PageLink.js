import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageLink extends Component {
    render() {
        return (
            <Link to={this.props.to}>{this.props.text}</Link>
        )
    }
}
