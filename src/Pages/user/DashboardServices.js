import React, { Component } from 'react';
import { toast } from 'react-toastify';
import HttpRequest from 'des-http-processor';
import { ProcessHttpMessage } from 'des-http-processor';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import ServicesGrid from './../../components/pageComponent/ServicesGrid';
import { MyConfig } from '../../MyConfig';
import { BindThis } from "des-utilities";

export default class DashboardServices extends Component {

  constructor(props) {
    super(props)
    this.state = {
      services: [],
      searchText: '',
      pageMsg: 'Loading...',
    }

    BindThis(this, ['handleChange', 'handleSubmit', 'fetchServices', 'servicesSearch', 'clearSearch']);
  }

  componentDidMount() {
    this.fetchServices();
  }

  fetchServices(url = `${MyConfig.apiUrl}services`, showMessage = false) {
    if (showMessage)
      toast.info('Loading...')
    HttpRequest(
      url,
      'get',
      null,
      ProcessHttpMessage
    )
      .then(
        (response => {
          console.log(response)
          const { data: services } = response.response.data.data;
          this.setState({ services });
          if (showMessage)
            toast.success('Services fetched successfully')
        }),
        (response => {
          console.log(response)
          this.setState({ services: [], pageMsg: "Sorry, we couldn't find any service in our database" })
        })
      );
  }

  servicesSearch() {
    this.setState({ services: [], pageMsg: 'Searching...' })
    this.fetchServices(`${MyConfig.apiUrl}search?search=${this.state.services}&type` + '=service');
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    this.servicesSearch();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.servicesSearch();
  }

  clearSearch(event) {
    this.setState({ searchText: '', pageMsg: 'Loading...' })
    this.fetchServices();
  }

  render() {
    return (
      <>
        <DashboardLayout>
          <div className="px-3 md:px-8 mx-auto">

            {/* large screen */}
            <h1 className="hidden lg:block text-center gray-text">Our Services</h1>

            {/* services search */}
            <form onSubmit={this.handleSubmit}>
              <div className="lg:shadow w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 mt-8">
                <input className="items-center justify-end pl-3 lg:pl-8 bg-white shadow rounded-none text-sm lg:text-xl text-gray-800 grow py-3 lg:py-4 focus:border-gray-300" placeholder="Search by occupation, profession" control-id="ControlID-5" onChange={this.handleChange} value={this.state.searchText} />
                <button onClick={this.servicesSearch} type="submit" className="lg:text-2xl lg:font-medium lg:leading-9 text-center text-white py-2 lg:py-4 px-8 bg-yellow-400 rounded-none" control-id="ControlID-6">Search</button>
              </div>
              {
                this.state.searchText && (
                  <div className="my-3">
                    <p className="inline font-light text-xs sm:text-base rounded-xl light-gray-bg p-1 w-auto">
                      {this.state.searchText}
                      <span className="ml-3 cursor-pointer" onClick={this.clearSearch}>x</span>
                    </p>
                  </div>
                )
              }
            </form>

            {
              Object.keys(this.state.services).length > 0
                ? <ServicesGrid services={this.state.services} />
                : <div className="text-center p-4 sm:p-8">
                  <p>{this.state.pageMsg}</p>
                </div>
            }

          </div>
        </DashboardLayout>
      </>
    );
  }
}
