import React from "react";
import TwoSections from '../../components/pageComponent/TwoSections';
import SideImg from "../../assets/img/others/becomeARendor-bg.svg";
import { Form } from "react-bootstrap";
import FullButton from '../../components/form/FullButton';
import FormText from "../../components/form/FormText";
import LogoContent from "../../components/pageComponent/LogoContent";
import FormCheck from "../../components/form/FormCheck";

const BecomeARendor1 = () => {
    return (
        <TwoSections sideImg={SideImg} leftPanelWidth="8">
            <div className="md:py-12 md:px-24 max-w-3xl">
                <LogoContent>
                    <div>
                        <h3 className="text-base-600">Become a Rhendor</h3>
                        <p>Monitize your skills. Be a service provider on Rhenda.</p>
                    </div>
                    <div className="md:mt-14">
                        <Form>
                            <FormText label="Workshop Address" type="text" placeholder="No. 6 Den Bec Close Port Harcourt" groupClass="mt-10" />
                            <FormText label="Phone Number" type="text" placeholder="Phone Number" groupClass="mt-10" />
                            <FormText label="What you offer" type="text" placeholder="Tailoring" groupClass="mt-10" />
                            <FormText label="Qualification" type="text" placeholder="Tailoring" groupClass="mt-10" />
                            <FullButton text="Register" type="submit" contClass="mt-14" />
                            <div className="mt-9 flex justify-center"><FormCheck label="I agree to terms & conditions" id="registerCheck" groupClass="mt-4" /></div>
                        </Form>
                    </div>
                </LogoContent>
            </div>
        </TwoSections>
    );
}

export default BecomeARendor1;
