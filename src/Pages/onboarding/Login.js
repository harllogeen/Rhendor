import React from 'react';
import Onboarding1 from '../../components/layouts/Onboarding1';
import FormText from '../../components/form/FormText';
import FullButton from '../../components/form/FullButton';
import PageLink from '../../components/nav/PageLink';
import * as Yup from 'yup';
import { Component } from 'react';
import DetectOffline from '../../components/features/DetectOffline';
import { MyConfig } from '../../MyConfig';
import { useParams } from 'react-router-dom';
import { login } from '../../core/api';

class Login extends Component {
  constructor(props) {
    super(props);

    // set route to redirect to
    let params = props.params;
    let to = '/connect';
    if (params.route && params.params) to = `/${params.route}/${params.params}`;
    else if (params.route) to = `/${params.route}`;

    this.state = { to };
  }
  render() {
    return (
      <Onboarding1
        redirectOnSuccess={this.state.to}
        storeUserData={true}
        formUrl={MyConfig.apiUrl + 'login'}
        headerText="Login"
        headerParagraph="Login in with the data you entered during your registration"
        // handleSubmit={e =>login(e)}
        validationSchema={{
          email: Yup.string()
            .email('Invalid email address')
            .required('Please enter your email address'),
          password: Yup.string().required('Please Enter your password'),
          // .matches(
          //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
          // ),
        }}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        <DetectOffline>
          <FormText
            id="loginEmail"
            type="email"
            placeholder="Enter email"
            label="Email"
            name="email"
          />
          <FormText
            label="Password"
            id="loginPassword"
            type="password"
            placeholder="Password"
            groupClass="mt-14"
            name="password"
          />
          <div className="mt-11">
            <PageLink text="Forgot Password" to="/forgotpassword" />
          </div>
          <FullButton text="Submit" type="submit" contClass="mt-8" />
        </DetectOffline>
        <div className="mt-8 mb-52 text-center">
          Don’t Have an Account? <PageLink text="Sign Up" to="/register" />
        </div>
      </Onboarding1>
    );
  }
}

export default (props) => <Login {...props} params={useParams()} />;
