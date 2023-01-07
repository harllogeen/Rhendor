import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Instagram from '../../assets/img/icon/instagram.svg';
import Facebook from '../../assets/img/icon/facebook.svg';
import FormTextArea from '../form/FormTextArea';
import * as Yup from 'yup';
import MyForm from '../form/Form';
import FormText from '../form/FormText';
import Button from '../form/Button';
import { MyConfig } from '../../MyConfig';
import { BindThis } from 'des-utilities';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    BindThis(this, ['toggleFooter']);
  }

  toggleFooter(id) {
    let classes = document.getElementById(id).classList;

    if (classes.contains('hidden')) classes.remove('hidden');
    else classes.add('hidden');
  }

  styles = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '36px',
  };
  render() {
    return (
      <footer className="bg-base-900 pt-6 pb-20 md:pt-16 px-10 lg:px-p text-white">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:px-0 gap-2 py-8  space-y-8 lg:space-y-0">
          <div className="col-sm-12 col-md-6 col-lg-2 mt-4 lg:mt-auto">
            <h4
              onClick={() => {
                this.toggleFooter('companyFooter');
              }}
              className="mt-0 text-white flex text-lg lg:text-xl items-center"
            >
              Company
              <svg
                className="lg:hidden inline ml-auto"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29159 1.5L5.49992 5L1.70825 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h4>
            <ul
              className="list-none mt-4 md:mt-10 hidden lg:inline-block"
              id="companyFooter"
            >
              <li>
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white "
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/services"
                >
                  Our Services
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/aboutus"
                >
                  Our Visions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 mt-4 lg:mt-auto">
            <h4
              onClick={() => {
                this.toggleFooter('supportFooter');
              }}
              className="mt-0 text-white text-lg lg:text-xl  flex items-center"
            >
              Support
              <svg
                className="lg:hidden inline ml-auto"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29159 1.5L5.49992 5L1.70825 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h4>
            <ul
              className="list-none mt-4 md:mt-10 hidden lg:inline-block"
              id="supportFooter"
            >
              <li>
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/contactus"
                >
                  Help & Support
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/termsandconditions"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/privacypolicy"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 mt-4 lg:mt-auto">
            <h4
              onClick={() => {
                this.toggleFooter('communityFooter');
              }}
              className="mt-0 text-white flex items-center text-lg lg:text-xl "
            >
              Community
              <svg
                className="lg:hidden inline ml-auto"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29159 1.5L5.49992 5L1.70825 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h4>
            <ul
              className="list-none mt-4 md:mt-10 hidden lg:inline-block"
              id="communityFooter"
            >
              <li>
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/connect"
                >
                  Events
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/connect"
                >
                  Blog
                </NavLink>
              </li>
              <li className="mt-4">
                <NavLink
                  style={this.styles}
                  className="my-nav-link text-white"
                  to="/becomeARhendor"
                >
                  Become a Rhendor
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 mt-8 lg:mt-auto sm:space-y-4   sm:items-center lg:items-center lg:justify-center">
            <h4 className="hidden text-lg lg:text-xl  lg:block mt-0 text-white">
              Subscribe to our newsletter
            </h4>
            <h4
              onClick={() => {
                this.toggleFooter('subscribeForm');
              }}
              className="mt-0 text-white lg:hidden flex items-center text-lg lg:text-xl "
            >
              Newsletter
              <svg
                className="lg:hidden inline ml-auto"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29159 1.5L5.49992 5L1.70825 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h4>
            <MyForm
              id="subscribeForm"
              formClass="px-0 hidden lg:block"
              formUrl={MyConfig.apiUrl + 'subscribe'}
              validationSchema={{
                email: Yup.string().required('Please enter your email').email(),
              }}
              initialValues={{
                email: '',
              }}
            >
              <label htmlFor="chat" className="sr-only">
                Your email
              </label>
              <div className="newsletter flex flex-row sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <FormText
                  hasMessage={true}
                  groupClass="grow"
                  inputClasses="px-4 py-2.5 text-slate-700 border-0 focus:outline-accent-600 rounded-md focus:border-accent-600 hover:outline-accent-600 ring-accent-600 text-lg"
                  id="subscriberEmail"
                  placeholder="Enter your email"
                  name="email"
                />
                <Button
                  children="Subscribe"
                  bg="text-white bg-accent-600 hover:bg-accent-700 dark:hover:bg-accent-700 border-l"
                  btnClass="px-10 py-2.5"
                />
              </div>
            </MyForm>
          </div>
        </div>

        {/* desktop footer */}
        <div className="hidden md:block">
          <hr className="mt-24 mb-12 mx-14 opacity-20" />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center ">
            <div
              style={{ color: '#D1E0FA80' }}
              className=" text-sm md:text-base"
            >
              Copyright 2021
            </div>
            <div className="  ">
              <div className="flex sm:items-center lg:justify-center">
                <div className="flex mr-10 ">
                  <img
                    src={Instagram}
                    className="inline-block"
                    alt="instagram page"
                  />
                  <span
                    className="  hidden md:block ml-3 "
                    style={{ color: '#D1E0FA' }}
                  >
                    Instagram
                  </span>
                </div>
                <div className="flex ">
                  <img
                    src={Facebook}
                    className="inline-block"
                    alt="facebook page"
                  />
                  <span
                    className=" hidden md:block ml-3"
                    style={{ color: '#D1E0FA' }}
                  >
                    Facebook
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-auto">
              <NavLink
                style={{ color: '#D1E0FA80' }}
                className="my-nav-link text-base-400 text-sm md:text-base"
                to="/termsandconditions"
              >
                Terms of service
              </NavLink>
            </div>
          </div>
        </div>

        {/* mobile footer */}
        <div className="md:hidden">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-start items-left mb-10">
            <div className="flex flex-col space-y-4">
              <div
                style={{ color: '#D1E0FA80' }}
                className=" text-sm md:text-base"
              >
                Follow us
              </div>
              <div className="flex sm:items-center lg:justify-center">
                <div className="flex mr-2">
                  <img
                    src={Instagram}
                    className="inline-block"
                    alt="instagram page"
                  />
                  <span
                    className="  hidden md:block ml-3 "
                    style={{ color: '#D1E0FA' }}
                  >
                    Instagram
                  </span>
                </div>
                <div className="flex ">
                  <img
                    src={Facebook}
                    className="inline-block"
                    alt="facebook page"
                  />
                  <span
                    className=" hidden md:block ml-3"
                    style={{ color: '#D1E0FA' }}
                  >
                    Facebook
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-auto">
              <NavLink
                style={{ color: '#D1E0FA80' }}
                className="p-0 text-white my-nav-link text-base-400 text-sm md:text-base"
                to="/termsandconditions"
              >
                Star Rhenda International
              </NavLink>
              {/* <small style={{ color: 'gray' }}>Copyright 20222</small> */}
              <div
                style={{ color: '#D1E0FA80' }}
                className=" text-sm md:text-base"
              >
                © Copyright 2021
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
