
import { Component } from 'react';
import Avatar from '../features/Avatar';
import SvgIcon from 'des-svg-icons';

export default class ChatFormImg extends Component {
  render() {
    const UnreadContClass = this.props.UnreadContClass ? this.props.UnreadContClass : '';
    return (
      <div>
        <img src={<SvgIcon type="ChatFormImg" />} />
      </div>
    );
  }
}
