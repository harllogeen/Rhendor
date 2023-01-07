import { UnreadMessagesCount } from '../../components/features/UnreadMessagesCount';
import { Component } from 'react';
import { UpDownToggle } from './UpDownToggle';
import SvgIcon from 'des-svg-icons';
import { BindThis } from 'des-utilities';
import { CallParentMethod } from 'des-utilities';

export default class ChatListHeader extends Component {
    constructor(props) {
        super(props);

        // bind this
        BindThis(this, ['toggleFullScreen', 'toggleListDisplay']);
    }

    // toggle fullscreen
    toggleFullScreen = () => {
        // call parent
        CallParentMethod(this, 'toggleFullScreen');
    }

    // toggle list display
    toggleListDisplay = () => {
        CallParentMethod(this, 'toggleListDisplay');
    }

    render() {
        return (
            <>
                {/* <div className="py-3 lg:py-6 px-8 bg-gray-100 border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col 2xs:flex-row items-center space-x-3 space-y-4 2xs:space-y-0 justify-center xs:justify-between flex-wrap">
                    <div className="flex items-center space-x-2 space-y-3 2xs:space-y-0 flex-wrap justify-center">
                        <h3 className="text-xl gray-text m-0">Conversation</h3>

                        <UnreadMessagesCount transparent={true} />
                        {
                            this.props.chatBoxIsHidden &&
                            <div className="cursor-pointer" onClick={this.toggleListDisplay}>
                                <UpDownToggle showUp={this.props.hideList} />
                            </div>
                        }
                    </div>

                    <div className="flex space-y-0 flex-row items-center space-x-6 xs:space-x-3 flex-wrap justify-center">
                        <div className="cursor-pointer">
                            <svg className="h-5 text-gray-400 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>
                </div> */}


                <div className="py-3 lg:py-6 px-8 flex flex-col 2xs:flex-row items-center space-x-3 space-y-4 2xs:space-y-0 justify-center xs:justify-between flex-wrap">
            <div className="flex items-center space-x-2 space-y-3 2xs:space-y-0 flex-wrap justify-center">
                        <h3 className="text-lg gray-text m-0 font-semibold">Conversation</h3>
                        <UnreadMessagesCount transparent={true} />
              <div className="cursor-pointer">
                <div className="w-4 h-4 text-gray-400">
                  <svg
                    className="w-full h-auto"
                    fill="currentColor"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                  >
                    <path d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex space-y-0 flex-row items-center space-x-6 xs:space-x-3 flex-wrap justify-center">
              <div className="cursor-pointer">
                <svg
                  className="h-5 text-gray-400 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
            </>
        );
    }
}
