import React, { Component } from 'react';
import TwoSections from '../pageComponent/TwoSections';
import SideImg from '../../assets/img/others/login-bg.svg';
import LogoContent from '../pageComponent/LogoContent';
import MyForm from '../form/Form';
import OverallLayout from './OverallLayout';
import { Navigate } from 'react-router-dom';
import SvgIcon from 'des-svg-icons';

export default class Onboarding1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      response: '',
      responseType: '',
      redirect: false,
      isAuthenticated: sessionStorage.getItem('isAuthenticated') ? true : false,
    };

    // bind this
    this.setIsLoading = this.setIsLoading.bind(this);
  }

  // set is loading
  setIsLoading = () => {
    this.setState(function (state, props) {
      return {
        isLoading: !state.isLoading,
      };
    });
  };

  render() {
    // let isLoading = this.props.isLoading ? this.props.isLoading : false;
    return (
      <>
        {this.state.isAuthenticated && (
          <Navigate to="/connect" replace={true} />
        )}
        {!this.state.isAuthenticated && (
          <>
            <div
              className={
                (this.state.isLoading ? '' : 'hidden ') +
                'bg-gray-400/60 dark:bg-gray-900/80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-screen md:inset-0 h-screen flex justify-center items-center'
              }
            >
              <div className="inline w-8 h-8 md:w-12 md:h-12 lg:w-18 lg:h-18 xl:w-20 xl:h-20 mr-2">
                <SvgIcon type="spinner" />
              </div>
            </div>
            <OverallLayout>
              <TwoSections sideImg={SideImg} leftPanelWidth="8">
                <div className="md:py-12 lg:px-24 max-w-3xl">
                  <LogoContent>
                    <div>
                      {this.props.headerText && (
                        <h3 className="text-base-600 dark:text-gray-400">
                          {this.props.headerText}
                        </h3>
                      )}
                      {this.props.headerParagraph && (
                        <p className="mt-4 dark:text-gray-400">
                          {this.props.headerParagraph}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 md:mt-16">
                      <MyForm
                        redirectOnSuccess={this.props.redirectOnSuccess}
                        storeUserData={this.props.storeUserData}
                        processResponse={this.processResponse}
                        formUrl={this.props.formUrl}
                        isSubmitting={this.setIsLoading}
                        initialValues={this.props.initialValues}
                        validationSchema={this.props.validationSchema}
                        handleSubmit={this.props.handleSubmit}
                      >
                        {this.props.children}
                      </MyForm>
                    </div>
                  </LogoContent>
                </div>
              </TwoSections>
            </OverallLayout>
          </>
        )}
      </>
    );
  }
}
