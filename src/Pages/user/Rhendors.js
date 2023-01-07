import React, { Component } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import FullAccountCard from '../../components/pageComponent/FullAccountCard';
import SearchForm from '../../components/pageComponent/SearchForm';

export default class Rhendors extends Component {
  render() {
    return (
      <>
        <DashboardLayout>
          <div>
            <SearchForm />
          </div>
          <div>
            <FullAccountCard />
          </div>
        </DashboardLayout>
      </>
    );
  }
}
