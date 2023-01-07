
import { Component } from 'react';
import Avatar from '../features/Avatar';
import { DateTime } from "luxon";

export default class ChatPreview extends Component {
  constructor(props) {
    super(props);

    // bind this
    this.loadChat = this.loadChat.bind(this);
  }

  loadChat = () => {
    // pass user id to parent
    this.props.loadChat(this.props.user);
  }

  render() {
    return (
      <>
        {/* <div onClick={this.loadChat} className={(
                    // if chat has not been read
                    this.props.user.message.is_read === '0'
                        &&
                        // and current user is the receiver
                        (this.props.user.message.receiver.id === JSON.parse(sessionStorage.getItem('user')).id)
                        ? 'bg-gray-300 dark:bg-gray-900 hover:gray-text white-gray-bg-hover light-gray-border'
                        : 'white-gray-bg hover:gray-text white-gray-bg-hover light-gray-border'
                ) + " cursor-pointer  p-2 2xs:p-4  shadow-md "
                }>
                    <Avatar pic={this.props.user.image}
                        contClass="flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center"
                        name={this.props.user.name} />
                    <div className="w-[80px] 3xs:w-[150px] 2xs:w-[250px] xs:w-[350px] sm:w-[520px]">
                        <p className="my-4 md:mt-8 truncate font-normal text-gray-700 dark:text-gray-400">
                            {this.props.user.message.message}
                        </p>
                    </div>
                </div> */}



        {/* <div className={(
                    // if chat has not been read
                    this.props.user.message.is_read === '0'
                        &&
                        // and current user is the receiver
                        (this.props.user.message.receiver.id === JSON.parse(sessionStorage.getItem('user')).id)
                        ? 'bg-gray-300 dark:bg-gray-900 hover:gray-text white-gray-bg-hover light-gray-border'
                        : 'white-gray-bg hover:gray-text white-gray-bg-hover light-gray-border'
                ) + " cursor-pointer  p-2 2xs:p-4  shadow-md "
                }> */}
        <div onClick={this.loadChat} className="inline-flex items-start justify-start px-2 py-4 w-full">
          <div className="inline-flex flex-col space-y-5 items-start justify-start w-full">
            <div className="inline-flex items-start justify-between w-full">
              <div className="flex space-x-4 items-center justify-center">
                <Avatar pic={this.props.user.image} />
                <div className="inline-flex flex-col space-y-1 items-start justify-start">
                  <p className="text-sm font-semibold leading-tight text-gray-900">
                    {this.props.user.name}
                  </p>
                  <p className="text-xs leading-none text-gray-800 text-opacity-80">
                    {/* Ux designer */}
                  </p>
                </div>
              </div>
              <div className="inline-flex flex-col space-y-1 items-center justify-center">
                <p className="text-xs leading-none text-black text-opacity-60">
                  {DateTime.fromISO(this.props.user.message.updated_at).toLocaleString(DateTime.TIME_SIMPLE)}
                </p>
                {/* <div className="inline-flex items-center justify-center w-3.5 h-3.5 px-1 py-0.5 bg-yellow-500 rounded">
                      <p className="flex-1 h-full text-xs leading-3 text-white">2</p>
                    </div> */}
              </div>
            </div>
            <p className="w-full text-xs leading-none text-gray-800 text-opacity-80">{this.props.user.message.message}</p>
          </div>
        </div>
      </>
    );
  }
}
