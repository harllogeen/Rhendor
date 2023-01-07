
import { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import Avatar from '../features/Avatar';
import { CallParentMethod } from 'des-utilities';
import { BindThis } from 'des-utilities';
import { NavLink } from 'react-router-dom';

export default class ChatBoxHeader extends Component {
    constructor(props) {
        super(props);

        // bind this
        BindThis(this, ['toggleFullScreen', 'toggleChatListDisplay', 'clearChat']);
    }

    // toggle fullscreen
    toggleFullScreen = () => {
        // call parent
        CallParentMethod(this, 'toggleFullScreen');
    }

    // toggle fullscreen
    toggleChatListDisplay = () => {
        // call parent
        CallParentMethod(this, 'toggleChatListDisplay');
    }

    // load chats
    clearChat = () => {
        // call parent function
        CallParentMethod(this, 'clearChat');
    }

    render() {
        const user = this.props.user;
        return (
            <>
                <div className="px-6 mx-auto h-auto py-2.5 border white-gray-bg border-gray-200 shadow-md dark:border-gray-700">
                    <div className="flex flex-col 2xs:flex-row items-center space-x-3 space-y-4 2xs:space-y-0 justify-center xs:justify-between flex-wrap">
                        <div className="gray-text" onClick={this.clearChat}>
                            <svg className="w-8 h-8" viewBox="0 0 300.003 300.003" fill="currentColor">
                                <path d="M150 0C67.159 0 .001 67.159.001 150c0 82.838 67.157 150.003 149.997 150.003S300.002 232.838 300.002 150C300.002 67.159 232.839 0 150 0zm39.226 218.202a13.968 13.968 0 01-9.902 4.101 13.955 13.955 0 01-9.902-4.103l-56.295-56.292a13.898 13.898 0 01-2.368-1.886c-2.796-2.799-4.145-6.479-4.077-10.144-.065-3.667 1.281-7.35 4.077-10.146a14.146 14.146 0 012.368-1.886l56.043-56.043c5.47-5.465 14.34-5.467 19.808.003 5.47 5.467 5.47 14.335 0 19.808l-48.265 48.265 48.514 48.516c5.468 5.469 5.468 14.337-.001 19.807z" />
                            </svg>
                        </div>
                        <div className="flex sm:flex-row 2xs:space-x-3 xs:space-x-6 items-center grow">
                            {/* <div onClick={this.clearChat} className="w-5 h-5 light-text cursor-pointer hidden 2xs:inline-flex"><SvgIcon type="menu" /></div> */}
                            <NavLink to={`/account/${user.id}`}>
                                <Avatar pic={user.image} labelContClass="ml-2 light-gray-text" nameClass="word-break" descriptionClass="word-break" description={user.service} name={user.name} />
                            </NavLink>
                        </div>
                        {/* <div className="flex items-center space-x-4 flex-wrap 2xs:space-x-0 2xs-flex-nowrap">
                            <div onClick={this.clearChat} className="w-5 h-5 light-text cursor-pointer 2xs:hidden"><SvgIcon type="menu" /></div>
                            <div className="w-5 cursor-pointer light-text" onClick={this.toggleFullScreen}>
                                {
                                    this.props.fullScreen ? <SvgIcon type="shrink" /> : <SvgIcon type="expand" />
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </>
        );
    }
}
