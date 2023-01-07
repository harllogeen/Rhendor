import React from 'react';
import { Component } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import DarkMode from 'des-dark-mode';

// And now we can use these
export default class OverallLayout extends Component {
  render() {
    return (
      <div>
        {/* dark mode */}
        <DarkMode manageDarkMode={this.manageDarkMode}>

          {/* content */}
          {this.props.children}

          {/* toast container */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Flip}
            limit={5}
            draggablePercent={50}
          />
        </DarkMode>

        {/* modals */}
        <div id="modalRoot"></div>
      </div>
    )
  }
};
