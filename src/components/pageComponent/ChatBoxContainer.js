import { Component } from 'react';
import ChatBox from './ChatBox';
import ChatList from './ChatList';
import { BindThis } from 'des-utilities';
import DetectOffline from '../features/DetectOffline';
import { FetchList } from '../../Pages/user/FetchList';
import { useParams } from 'react-router-dom';
import HttpRequest, { ProcessHttpMessage } from 'des-http-processor';
import { MyConfig } from '../../MyConfig';
import { toast } from 'react-toastify';

class ChatBoxContainer extends Component {
  constructor(props) {
    super(props);

    // set states
    this.state = {
      fullScreen: false,
      user: {},
      chatListIsHidden: false,
    };

    if (props.params.id !== null && props.params.id !== undefined) {
      HttpRequest(
        MyConfig.apiUrl + `get-user/${props.params.id}`,
        'get',
        null,
        ProcessHttpMessage
      ).then((response) => {
        if (response.type === 'success') {
          // update user in session
          let user = response.data;

          // update state
          this.setState({ user, chatListIsHidden: true });
        } else
          toast.error(
            'There was a problem updating your image, please try again later.'
          );
      });
    }

    // if (props.params.id !== null && props.params.id !== undefined)
    //   FetchList(this, 'user', `get-user/${props.params.id}`);
    //   .then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );

    // bind this
    BindThis(this, [
      'toggleFullScreen',
      'toggleChatListDisplay',
      'loadChat',
      'clearChat',
    ]);
  }

  componentDidMount() {
    if (Object.keys(this.state.user).length > 0) {
      this.loadChat(this.state.user);
    }
  }

  // toggle fullScreen
  toggleFullScreen = () => {
    // set state
    this.setState(function (state, props) {
      return {
        fullScreen: !state.fullScreen,
      };
    });
  };

  // clear chats
  clearChat = () => {
    this.setState({
      user: {},
    });
  };

  // load chats
  loadChat = (user) => {
    // clear current chat info
    this.clearChat();

    this.setState({
      // set user details in state
      user: user,
      // hide chat list
      chatListIsHidden: true,
    });
  };

  // toggle fullscreen
  toggleChatListDisplay = () => {
    // set state
    this.setState(function (state) {
      return {
        chatListIsHidden: !state.chatListIsHidden,
      };
    });
  };

  render() {
    // const user = JSON.parse(sessionStorage.getItem('user'));
    const chatListCount = Object.keys(this.state.user).length;
    const hideChatBox = chatListCount < 1 ? true : false;
    return (
      <div className="row">
        <div
          className={
            this.state.fullScreen
              ? 'bg-gray-300/75 dark:bg-gray-700/90 fixed left-0 right-0 bottom-0 top-0 z-40 xs:z-20 flex justify-center items-center'
              : ''
          }
        >
          <div
            className={
              this.state.fullScreen ? 'w-full xs:w-5/6 sm:w-4/5 md:4/6' : ''
            }
          >
            <DetectOffline>
              <div className="flex justify-center overflow-clip max-h-screen w-full">
                {/* show if chat box is hidden */}
                {/* hideChatBox && */}
                {
                  <div
                    className={
                      `grow lg:w-2/6` +
                      (!hideChatBox && ' hidden lg:inline-flex')
                    }
                  >
                    <ChatList
                      toggleFullScreen={this.toggleFullScreen}
                      chatBoxIsHidden={hideChatBox}
                      loadChat={this.loadChat}
                    />
                  </div>
                }

                {/* show if chat box is to be displayed */}
                {/* !hideChatBox && */}
                {
                  <div
                    className={
                      `lg:w-4/6 lg:inline-flex` +
                      (!hideChatBox ? ' inline-flex grow' : ' hidden')
                    }
                  >
                    <ChatBox
                      clearChat={this.clearChat}
                      toggleChatListDisplay={this.toggleChatListDisplay}
                      fullScreen={this.state.fullScreen}
                      toggleFullScreen={this.toggleFullScreen}
                      user={this.state.user}
                    />
                  </div>
                }
              </div>
            </DetectOffline>
          </div>
        </div>
        {/* <div className="col-xs-12 col-md-12 col-lg-7">
        </div> */}
      </div>
    );
  }
}

export default (props) => <ChatBoxContainer {...props} params={useParams()} />;
