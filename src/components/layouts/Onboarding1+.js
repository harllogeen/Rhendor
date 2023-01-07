import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TwoSections from '../pageComponent/TwoSections';
import SideImg from "../../assets/img/others/login-bg.svg";
import LogoContent from '../pageComponent/LogoContent';
import OverallLayout from './OverallLayout';

export default class Onboarding1 extends Component {
    render() {
        return (
            <OverallLayout>
                <TwoSections sideImg={SideImg} leftPanelWidth="8">
                    <div className="md:py-12 md:px-24 max-w-3xl">
                        <LogoContent>
                            <div>
                                {this.props.headerText && (<h3 className="text-base-600">{this.props.headerText}</h3>)}
                                {this.props.headerParagraph && (<p>{this.props.headerParagraph}</p>)}
                            </div>
                            <div className="md:mt-10">
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                    }}
                                    validationSchema={Yup.object({
                                        email: Yup.string()
                                            .email('Invalid email address')
                                            .required('Please enter your email address'),
                                        password: Yup.string()
                                            .required('Please Enter your password')
                                            .matches(
                                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                            ),
                                    })}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    <Form>{this.props.children}</Form>
                                </Formik>
                            </div>
                        </LogoContent>
                    </div>
                </TwoSections>
            </OverallLayout>
        );
    }
};
