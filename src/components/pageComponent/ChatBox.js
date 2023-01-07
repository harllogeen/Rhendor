
import { Component } from 'react';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxFooter from './ChatBoxFooter';
import ChatBoxContent from './ChatBoxContent';
import { CallParentMethod } from 'des-utilities';
import { BindThis } from 'des-utilities';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);

    // set state
    this.state = {
      refreshList: false
    }

    // bind this
    BindThis(this, ['toggleFullScreen', 'toggleChatListDisplay', 'clearChat', 'refreshListTrigger', 'chatBoxRefreshed']);
  }

  // toggle fullscreen
  toggleFullScreen = () => {
    // call parent
    CallParentMethod(this, 'toggleFullScreen');
  }

  // toggle chat list display
  toggleChatListDisplay = () => {
    // call parent
    CallParentMethod(this, 'toggleChatListDisplay');
  }

  // clear chat list
  clearChat = () => {
    // call parent function
    CallParentMethod(this, 'clearChat');
  }

  // clear chat list
  refreshListTrigger = () => {
    // set state that triggers refresh list
    this.setState({
      refreshList: true
    })
  }

  chatBoxRefreshed() {
    // set state that triggers refresh list
    this.setState({
      refreshList: false
    })
  }

  render() {
    return (
      <div className="flex flex-col h-screen w-full">
              {/* <div className={"py-3 px-2 text-center darker-white-gray-bg gray-border"}><p>You do not have any message at the moment.</p></div> */}
      {
          Object.keys(this.props.user).length < 1
            ? (
              <div className={"grow flex justify-center items-center darker-gray-bg"}><p>There are no messages...</p></div>
            )
            : (
              <>
                <div>
                  <ChatBoxHeader clearChat={this.clearChat} toggleChatListDisplay={this.toggleChatListDisplay} fullScreen={this.props.fullScreen} toggleFullScreen={this.toggleFullScreen} user={this.props.user} />
                </div>
                <div className="overflow-y-auto grow darker-gray-bg">
                  <ChatBoxContent chatBoxRefreshed={this.chatBoxRefreshed} refreshList={this.state.refreshList} user={this.props.user} />
                </div>
                <div>
                  <ChatBoxFooter refreshList={this.refreshListTrigger} user={this.props.user} />
                </div>
              </>
            )
        }
      </div>
    );
  }
}
