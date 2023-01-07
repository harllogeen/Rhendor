import React from 'react';
import Header from '../nav/Header';
import Footer from '../nav/Footer';
import { Component } from 'react';
import OverallLayout from './OverallLayout';

// And now we can use these
export default class LandingTemplate extends Component {
  render() {
    return (
      <OverallLayout>
        <div className="flex m-0 p-0 flex-col">
          <Header />
          <div clas="grow dark:bg-base-900">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </OverallLayout>
    )
  }
};
