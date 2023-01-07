import React, { Component } from 'react';
import * as Yup from 'yup';
import Form from '../../components/form/Form';
import FormText from '../../components/form/FormText';
import FullButton from '../../components/form/FullButton';
import ResetLayout from '../../components/layouts/ResetLayout';
import PageLink from '../../components/nav/PageLink';
import { MyConfig } from '../../MyConfig';


// And now we can use these
export default class ResetPassword extends Component {
    render() {
        return (
            <ResetLayout SideTitle="Recover  your account" SideParagraph="We’ll guide you to recovering your account in a few steps">
                <div className="w-2/3 xl:w-1/2 mx-auto my-16">
                    <Form formClass="light-border border-2 p-8 space-y-10"
                        redirectOnSuccess="/login"
                        showSpinner={true}
                        formUrl={`${MyConfig.apiUrl}reset-password`}
                        validationSchema={{
                            otp_code: Yup.number(),
                            password: Yup.string()
                                .required('Please Enter your password')
                                .matches(
                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                ),
                            confirm_password: Yup.string()
                                .required('Please confirm your password')
                                .oneOf([Yup.ref('password')], 'Passwords do not match'),
                        }}
                        initialValues={{
                            otp_code: '',
                            password: '',
                            confirm_password: '',
                        }}
                    >
                        <h3 class Name="text-gray-800 font-bold">Set New Password</h3>
                        <FormText label="Otp Code" id="otp_code" name="otp_code" type="number" placeholder="1234" groupClass="mt-10" inputClasses="mt-4 lg:mt-5" labelClasses="text-sm dark-text" mutedText="Please enter the code sent to your email" />
                        <FormText label="Password" id="password" name="password" type="password" placeholder="New Password" groupClass="mt-10" inputClasses="mt-4 lg:mt-5" labelClasses="text-sm dark-text" />
                        <FormText id="confirm_password" name="confirm_password" type="password" placeholder="Confirm Password" groupClass="mt-5" inputClasses="mt-6 lg:mt-6" />
                        <FullButton text="Proceed" type="submit" contClass="mt-12 lg:mt-10" textSize="sm" />
                    </Form>

                    <div className="mt-8">Go back to <PageLink text="Login" to="/login" /></div>
                </div>
            </ResetLayout>
        );
    }
};
