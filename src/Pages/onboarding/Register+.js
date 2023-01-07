import React from "react";
import TwoSections from '../../components/pageComponent/TwoSections';
import SideImg from "../../assets/img/others/register-bg.svg";
import { Form } from "react-bootstrap";
import FullButton from '../../components/form/FullButton';
import FormText from "../../components/form/FormText";
import LogoContent from "../../components/pageComponent/LogoContent";
import PageLink from "../../components/nav/PageLink";
import FormCheck from "../../components/form/FormCheck";

const Register = () => {
    return (
        <TwoSections sideImg={SideImg} leftPanelWidth="8">
            <div className="md:py-12 md:px-24 max-w-3xl">
                <LogoContent>
                    <Form>
                        <FormText label="Full Name" type="text" placeholder="Full name" groupClass="mt-10" />
                        <FormText label="Email address" type="email" placeholder="Enter email" groupClass="mt-10" />
                        <FormText label="Create Password" type="password" placeholder="Your Password" groupClass="mt-10" />
                        <FormText label="Confirm Password" type="password" placeholder="Confirm Password" groupClass="mt-10" />
                        <FullButton text="Register" type="submit" contClass="mt-9" />
                        <FormCheck label="I agree to terms & conditions" id="registerCheck" groupClass="mt-4 flex justify-center" />
                        <div className="text-center mt-32 mb-24">
                            Already a User?  <PageLink text="Login" to="/login" />
                        </div>
                    </Form>
                </LogoContent>
            </div>
        </TwoSections>
    );
}

export default Register;
