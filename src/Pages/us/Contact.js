import React from 'react';
import Form from '../../components/form/Form';
import * as Yup from 'yup';
import FormText from '../../components/form/FormText';
import FormTextArea from '../../components/form/FormTextArea';
import FullButton from '../../components/form/FullButton';
import LandingTemplate from '../../components/layouts/LandingTemplate';
import DetectOffline from '../../components/features/DetectOffline';
import { MyConfig } from '../../MyConfig';

// And now we can use these
export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    let user = JSON.parse(sessionStorage.getItem('user'));

    this.state = {
      user: user
    }
  }

  render() {
    return (
      <LandingTemplate>
        <div className="hidden lg:block mx-auto text-center alt-bg-base-700 pb-60 pt-8">
          <h1 className="white-text mt-0">Contact Us</h1>
        </div>
        <div className="row">
          <div className="hidden lg:block col-lg-2"></div>
          <div className="col-lg-8 col-sm-12 col-md-12 mx-auto mt-4 lg:-mt-40 mb-40">
            <Form formUrl={MyConfig.apiUrl + "send-contact-message"} showSpinner={true} formClass="lg:pt-14 pb-20 px-10 lg:px-40 md:mx-10 light-white-gray-bg"
              validationSchema={{
                name: Yup.string()
                  .required('Please enter your full name'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Please enter your email address'),
                phone: Yup.number().required(),
                message: Yup.string()
                  .required('Please enter your message'),
              }}
              initialValues={
                this.state.user
                  ? {
                    email: this.state.user.email,
                    name: this.state.user.name,
                    phone: this.state.user.phone,
                    message: '',
                  }
                  : {
                    email: '',
                    name: '',
                    phone: '',
                    message: '',
                  }
              }
            >
              <h2 className="dark-text font-bold text-center lg:text-2xl">Let's talk</h2>
              <DetectOffline>
                <FormText label="Full Name" id="name" name="name" type="text" placeholder="Your Name" groupClass="mt-10" inputClasses="mt-4 lg:mt-5" labelClasses="text-sm dark-text" />
                <FormText label="Phone Number" id="phone" name="phone" type="tel" placeholder="Your Number" groupClass="mt-5" inputClasses="mt-6 lg:mt-6" labelClasses="text-sm dark-text" />
                <FormText label="Email Address" id="email" name="email" type="email" placeholder="Your Email" groupClass="mt-5" inputClasses="mt-6 lg:mt-6" labelClasses="text-sm dark-text" />
                <FormTextArea label="Message" id="message" name="message" placeholder="Your Message" groupClass="mt-5" inputClasses="mt-6 lg:mt-6" labelClasses="text-sm dark-text" />
                <FullButton text="Submit" type="submit" contClass="inline-flex items-center justify-center w-full mt-8" textSize="lg" btnClass="px-10 xs:px-20 py-2.5 bg-yellow-500 shadow rounded lg:text-xl" />
              </DetectOffline>
            </Form>
          </div>
        </div>


      </LandingTemplate>
    );
  }
};
