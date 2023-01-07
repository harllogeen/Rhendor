import React from 'react';
import { Offline } from 'react-detect-offline';
import { Online } from 'react-detect-offline';

export default class DetectOffline extends React.Component {
  render() {
    return (
      <>
        <Online>{this.props.children}</Online>
        <Offline>
          {
            this.props.offline
              ? this.props.offline
              : (
                <div className="max-w-sm px-3 py-5 shadow mx-auto gray-bg text-center gray-text rounded-lg">
                  You are currently offline, please turn on your internet connection to continue..
                </div>
              )
          }

        </Offline>
      </>
    );
  }
}
