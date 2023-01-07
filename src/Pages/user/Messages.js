import React, { Component } from 'react';
import { UnreadMessagesCount } from '../../components/features/UnreadMessagesCount';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import ChatBoxContainer from '../../components/pageComponent/ChatBoxContainer';

export default class Messages extends Component {
  render() {
    return (
      <>
        <DashboardLayout>
          <div>
            <h3 className="py-2 lg:py-8 px-6 lg:px-0 flex lg:space-x-2 m-0 mt-3 lg:m-auto">
              <div>Messages</div>
              <div>
                <UnreadMessagesCount />
              </div>
            </h3>
          </div>
          <hr className="pb-5 mx-6 border-gray-800 dark:border-gray-600" />
          <ChatBoxContainer />
        </DashboardLayout>
      </>
    );
  }
}
