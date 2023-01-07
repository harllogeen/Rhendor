import React from "react";
import Onboarding1 from "../../components/layouts/Onboarding1";
import FormText from "../../components/form/FormText";
import FullButton from "../../components/form/FullButton";
import PageLink from "../../components/nav/PageLink";
import * as Yup from "yup";
import FormCheck from "./../../components/form/FormCheck";
import Toggle from "../../components/features/Toggle";
import FormSelect from "../../components/form/FormSelect";
import HttpRequest, { ProcessHttpMessage } from "des-http-processor";
import DetectOffline from "./../../components/features/DetectOffline";
import { toast } from "react-toastify";
import { BindThis } from "des-utilities";
import { MyConfig } from "../../MyConfig";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRhendor: false,
      isRhendorString: "no",
      services: {},
      servicesFetched: false,
      servicesFetchCount: 0,
      shownDeveloperError: false,
    };

    // bind this
    this.handleToggle = this.handleToggle.bind(this);
    BindThis(this, ["handleToggle", "processFormResponse", "fetchServices"]);
  }

  // clear interval
  componentWillUnmount() {
    clearInterval(this.fetchServicesInterval);
  }

  // process response
  processFormResponse(response) {
    alert("We got a response in register");
    return;
  }

  // toggle become a rhendor input fields
  handleToggle(e) {
    this.setState((state, props) => {
      let isRhendor = !state.isRhendor;
      return {
        isRhendor: isRhendor,
        isRhendorString: isRhendor ? "yes" : "no",
      };
    });
  }

  // fetch rhendor services
  fetchServices() {
    HttpRequest(
      MyConfig.apiUrl + "all-services",
      "get",
      null,
      ProcessHttpMessage
    ).then(
      (response) => {
        this.setState({
          services: response.data,
          servicesFetched: true,
        });

        // if retry interval was set
        if (this.fetchServicesInterval) {
          toast.success(
            "We have successfully fetched all services. Please continue with your registration. We apologize for the inconvenience."
          );
          clearInterval(this.fetchServicesInterval);
        }
      },
      () => {
        // if retry interval was not set
        if (!this.fetchServicesInterval) {
          // set retry interval
          this.fetchServicesInterval = setInterval(() => {
            if (!this.state.servicesFetched) {
              if (this.state.servicesFetchCount < 10) this.fetchServices();
              // show developer error
              else if (!this.state.shownDeveloperError) {
                toast.error(
                  "There was a problem fetching a list of services and we cannot figure out the problem at the moment. Our developers will look into it now. We apologize for the inconvenience, and we will still keep trying."
                );
                this.setState({ shownDeveloperError: true });
              }
            } else {
              toast.success(
                "We have successfully fetched all services. Please continue with your registration. We apologize for the inconvenience."
              );
              clearInterval(this.fetchServicesInterval);
            }
          }, 5000);
          // if retry interval was set
        } else {
          toast.warn(
            "Please be patient and make sure you are connected to the internet, we are trying again. Should be available shortly."
          );
          this.setState((state) => ({
            servicesFetchCount: state.servicesFetchCount + 1,
          }));
        }
      }
    );
  }

  // loop through services object
  mapServices() {
    if (!this.state.servicesFetched) this.fetchServices();

    let servicesObj = this.state.services;

    // if we have services
    if (servicesObj !== null && servicesObj !== undefined) {
      if (Object.keys(servicesObj).length > 0) {
        let services = [];

        // if it's one service available return single service
        if (!Array.isArray(servicesObj)) {
          services = (
            <>
              <option id={"service_" + servicesObj.id} value={servicesObj.id}>
                {servicesObj.name}
              </option>
            </>
          );
        } else {
          // if multiple services available, loop through them
          services = servicesObj.map((service) => {
            return (
              <>
                <option id={"service_" + service.id} value={service.id}>
                  {service.name}
                </option>
              </>
            );
          });
        }

        return services;
      }
    } else {
      toast.error(
        "There was a problem fetching the services from the database. Please be patient. We will try again"
      );

      this.refreshTimeout = setTimeout(() => {
        this.fetchServices();
      }, 30000);
    }
  }

  render() {
    const rhendorValidation = {
      name: Yup.string().required("Please enter your full name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .min(8),
      confirm_password: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
      business_address: Yup.string().required("Workshop address is required"),
      become_rhenda: Yup.number().required(),
      phone: Yup.number().required(),
      service_type: Yup.number().required(),
      qualification: Yup.string().required(),
      terms_and_condition: Yup.boolean()
        .required()
        .oneOf([true], "You must accept the terms and conditions to continue"),
    };

    // validation for regular user
    const regularValidation = {
      name: Yup.string().required("Please enter your full name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email address"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .min(8),
      confirm_password: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
      terms_and_condition: Yup.boolean()
        .required()
        .oneOf([true], "You must accept the terms and conditions to continue"),
    };
    // <Onboarding1 redirectOnSuccess="/connect" storeUserData={true}
    return (
      <>
        <Onboarding1
          redirectOnSuccess="/connect"
          storeUserData={true}
          formUrl={MyConfig.apiUrl + "register"}
          validationSchema={
            this.state.isRhendor ? rhendorValidation : regularValidation
          }
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirm_password: "",
            business_address: "",
            become_rhenda: 0,
            phone: "",
            service_type: "",
            qualification: "",
            terms_and_condition: false,
          }}
        >
          <DetectOffline>
            <FormText
              label="Full Name"
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              groupClass="mt-10"
            />
            <FormText
              label="Email address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              groupClass="mt-10"
            />
            <FormText
              label="Create Password"
              type="password"
              placeholder="Your Password"
              groupClass="mt-10"
              name="password"
            />
            <FormText
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              groupClass="mt-10"
            />
            <Toggle
              toggled={this.state.isRhendor}
              handleToggle={this.handleToggle}
              label="Become a Rhendor"
              name="becomearhendor"
              id="becomearhendor"
              groupClass="mt-20 mb-12 justify-end"
              labelSize="text-xl"
            />
            {this.state.isRhendorString === "yes" ? (
              <>
                {/* set become_rhenda to true in formik */}
                <FormText
                  id="become_rhenda"
                  name="become_rhenda"
                  type="hidden"
                  value="1"
                />
                <FormText
                  label="Business Address"
                  id="business_address"
                  name="business_address"
                  type="text"
                  placeholder="No. 6 Den Bec Close Port Harcourt"
                  groupClass="mt-10"
                />
                <FormText
                  label="Phone Number"
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  groupClass="mt-10"
                />
                <FormSelect
                  disabled={!this.state.servicesFetched}
                  label="What you offer"
                  type="text"
                  placeholder="Tailoring"
                  name="service_type"
                  id="service_type"
                  groupClass="mt-10"
                  options={
                    <>
                      {this.mapServices()}
                      {!this.state.servicesFetched && (
                        <option>Fetching services, please wait</option>
                      )}
                    </>
                  }
                />
                <FormText
                  label="Qualification"
                  type="text"
                  placeholder="Tailoring"
                  name="qualification"
                  id="qualification"
                  groupClass="mt-10"
                />
              </>
            ) : (
              // set become_rhenda to false in formik
              <>
                <FormText
                  id="become_rhenda"
                  name="become_rhenda"
                  type="hidden"
                  value="0"
                />
              </>
            )}
            <FullButton
              text="Register"
              type="submit"
              contClass="mt-12 lg:mt-16"
            />
            <FormCheck
              label="I agree to the terms & conditions"
              name="terms_and_condition"
              id="terms_and_condition"
              groupClass="mt-8 lg:mt-4 flex flex-col items-center"
              inputGroupClass="flex justify-center"
            />
          </DetectOffline>
          <div className="text-center mt-32 mb-24">
            Already a User? <PageLink text="Login" to="/login" />
          </div>
        </Onboarding1>
      </>
    );
  }
}
