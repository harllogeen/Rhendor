import axios from 'axios';
import { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);

    // bind this
    this.handleLogout = this.handleLogout.bind(this);
  }

  // handle logout
  handleLogout = () => {
    // clear session
    sessionStorage.clear();
    this.setState({
      isAuthenticated: false,
    });
    delete axios.defaults.headers.common['Authorization'];

    if (this.props.handleLogout) {
      this.props.handleLogout();
    }
  };

  render() {
    return <span onClick={this.handleLogout}>{this.props.children}</span>;
  }
}
