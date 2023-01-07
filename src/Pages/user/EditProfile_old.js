import React, { Component } from 'react';
import MyForm from '../../components/form/Form';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import * as Yup from 'yup';
import FormText from "../../components/form/FormText";
import FullButton from "../../components/form/FullButton";

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(sessionStorage.getItem('user'))
        this.state = { user: user }
    }
    render() {
        return (
            <>
                <DashboardLayout manageDarkMode={this.manageDarkMode}>
                    <div className="grow p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-center gray-text">Edit Profile</h2>
                        <div className="space-y-32">

                            {/* profile picture */}
                            <div className="py-8 lg:py-14 border rounded-lg shadow-lg shadow-slate-300 hover:shadow-xl focus:shadow-xl hover:shadow-slate-400 focus:shadow-slate-400 dark:shadow-gray-800 dark:hover:shadow-gray-700 dark:focus:shadow-gray-700 border-gray-200 dark:border-gray-700 relative lg:max-w-md mx-auto">
                                <div className="w-[60%] mx-auto">
                                    <h3 className="gray-text">Password Reset</h3>
                                    <MyForm storeUserData={true} showSpinner={true} formId="resetPasswordForm" formUrl={MyConfig.apiUrl + "update-password"
                                        validationSchema={{
                                            old_password: Yup.string()
                                                .required('Please Enter your password')
                                                .matches(
                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                                ),
                                            new_password: Yup.string()
                                                .required('Please Enter your password')
                                                .matches(
                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                                ),
                                            confirm_password: Yup.string()
                                                .required('Please confirm your password')
                                                .oneOf([Yup.ref('new_password')], 'Passwords do not match'),
                                        }}
                                        initialValues={{
                                            old_password: '',
                                            new_password: '',
                                            confirm_password: '',
                                        }}
                                    >
                                        <FormText inputClasses="rounded-lg" label="Old Password" type="password" placeholder="Old password" groupClass="mt-10" name="old_password" />
                                        <FormText inputClasses="rounded-lg" label="New Password" type="password" placeholder="New Password" groupClass="mt-10" name="new_password" />
                                        <FormText inputClasses="rounded-lg" label="Confirm Password" type="password" placeholder="Confirm new Password" name="confirm_password" groupClass="mt-10" />
                                        <FullButton text="Update" type="submit" contClass="mt-12 lg:mt-16" />
                                    </MyForm>
                                </div>
                            </div>

                            {/* divider */}
                            <hr className="border-gray-200 dark:border-gray-700" />

                            {/* reset password */}
                            <div className="py-8 lg:py-14 border rounded-lg shadow-lg shadow-slate-300 hover:shadow-xl focus:shadow-xl hover:shadow-slate-400 focus:shadow-slate-400 dark:shadow-gray-800 dark:hover:shadow-gray-700 dark:focus:shadow-gray-700 border-gray-200 dark:border-gray-700 relative lg:max-w-md mx-auto">
                                <div className="w-[60%] mx-auto">
                                    <h3 className="gray-text">Password Reset</h3>
                                    <MyForm storeUserData={true} showSpinner={true} formId="resetPasswordForm" formUrl={MyConfig.apiUrl + "update-password"
                                        validationSchema={{
                                            old_password: Yup.string()
                                                .required('Please Enter your password')
                                                .matches(
                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                                ),
                                            new_password: Yup.string()
                                                .required('Please Enter your password')
                                                .matches(
                                                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                                ),
                                            confirm_password: Yup.string()
                                                .required('Please confirm your password')
                                                .oneOf([Yup.ref('new_password')], 'Passwords do not match'),
                                        }}
                                        initialValues={{
                                            old_password: '',
                                            new_password: '',
                                            confirm_password: '',
                                        }}
                                    >
                                        <FormText inputClasses="rounded-lg" label="Old Password" type="password" placeholder="Old password" groupClass="mt-10" name="old_password" />
                                        <FormText inputClasses="rounded-lg" label="New Password" type="password" placeholder="New Password" groupClass="mt-10" name="new_password" />
                                        <FormText inputClasses="rounded-lg" label="Confirm Password" type="password" placeholder="Confirm new Password" name="confirm_password" groupClass="mt-10" />
                                        <FullButton text="Update" type="submit" contClass="mt-12 lg:mt-16" />
                                    </MyForm>
                                </div>
                            </div>

                        </div>
                    </div>
                </DashboardLayout>
            </>
        );
    }
}
