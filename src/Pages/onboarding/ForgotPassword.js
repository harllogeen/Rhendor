import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import ResetLayout from '../../components/layouts/ResetLayout';
import Form from '../../components/form/Form';
import * as Yup from 'yup';
import FormText from '../../components/form/FormText';
import FullButton from '../../components/form/FullButton';
import PageLink from '../../components/nav/PageLink';
import { MyConfig } from '../../MyConfig';


// And now we can use these
export default class ForgotPassword extends Component {
    render() {
        return (
            <ResetLayout SideTitle={"We Got You Covered"} SideParagraph={"We'll walk you through to regain access to your account"}
                headLink={
                    <p>
                        Don't have an account? <Link to="/register" className="my-nav-link text-base-400 hover:text-base-500 inline-block">Sign up</Link>
                    </p>
                }
            >
                <div className="w-2/3 xl:w-1/2 mx-auto">
                    <Form formUrl={MyConfig.apiUrl + "forgot-password"} redirectOnSuccess="/resetpassword" showSpinner={true} formClasses="light-border border-2 p-8"
                        validationSchema={{
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Please enter your email address'),
                        }}
                        initialValues={{
                            email: '',
                        }}
                    >
                        <h3 className="text-gray-800 font-bold">Forgot Password</h3>
                        <FormText label="Enter your email address" id="email" name="email" type="email" placeholder="Enter email" groupClass="mt-10" inputClasses="mt-12 lg:mt-16" labelClasses="text-sm dark-text" />
                        <FullButton text="Password Reset" type="submit" contClass="mt-12 lg:mt-16" textSize="sm" />
                    </Form>

                    <div className="mt-8">Go back to <PageLink text="Login" to="/login" /></div>
                </div>
            </ResetLayout>
        );
    }
};
