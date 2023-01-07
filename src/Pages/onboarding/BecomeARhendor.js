import React from "react";
import TwoSections from "../../components/pageComponent/TwoSections";
import SideImg from "../../assets/img/others/becomeARendor-bg.svg";
// import { Form } from "react-bootstrap";
import FullButton from "../../components/form/FullButton";
import FormText from "../../components/form/FormText";
import LogoContent from "../../components/pageComponent/LogoContent";
import FormCheck from "../../components/form/FormCheck";
import * as Yup from "yup";
import Form from "../../components/form/Form";
import FormSelect from "../../components/form/FormSelect";
import { BindThis } from "des-utilities";
import DetectOffline from "../../components/features/DetectOffline";
import { ProcessHttpMessage } from "des-http-processor";
import HttpRequest from "des-http-processor";
import { toast } from "react-toastify";
import { MyConfig } from "../../MyConfig";
import { Navigate } from "react-router-dom";

class BecomeARhendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: {},
      servicesFetched: false,
      servicesFetchCount: 0,
      shownDeveloperError: false,
    };

    // bind this
    BindThis(this, ["mapServices", "fetchServices"]);
  }

  // clear interval
  componentWillUnmount() {
    clearInterval(this.fetchServicesInterval);
  }

  // fetch rhendor services
  fetchServices() {
    toast.info("fetching services, please wait...");
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
        toast.success("Successfully fetched services");

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
        // console.log(servicesObj, "in services");

        let services = [];

        // if it's one service available return single service
        if (!Array.isArray(servicesObj)) {
          // console.log(servicesObj, "in here");
          services = (
            <>
              <option id={"service_" + servicesObj.id} value={servicesObj.id}>
                {servicesObj.name}
              </option>
            </>
          );
        } else {
          // console.log(servicesObj, "in here 2");
          // if multiple services available, loop through them
          services = servicesObj.map((service) => {
            // console.log(service);
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
    return (
      <>
        {this.state.isAuthenticated && (
          <Navigate to="/register" from="/dashboard" replace={true} />
        )}
        <TwoSections sideImg={SideImg} leftPanelWidth="8">
          <div className="md:py-12 md:px-24 max-w-3xl">
            <LogoContent>
              <div>
                <h3 className="text-base-600">Become a Rhendor</h3>
                <p className="mt-2">
                  Monitize your skills. Be a service provider on Rhenda.
                </p>
              </div>
              <div className="md:mt-14">
                <DetectOffline>
                  <Form
                    initialValues={{
                      business_address: "",
                      phone: "",
                      service_type: "",
                      qualification: "",
                      terms_and_condition: false,
                    }}
                    validationSchema={{
                      business_address: Yup.string().required(
                        "workshop address is required"
                      ),
                      phone: Yup.number().required(),
                      service_type: Yup.string().required(),
                      qualification: Yup.string().required(),
                      terms_and_condition: Yup.boolean()
                        .required()
                        .oneOf(
                          [true],
                          "You must accept the terms and conditions to continue"
                        ),
                    }}
                    redirectOnSuccess="/connect"
                    storeUserData={true}
                    formUrl={MyConfig.apiUrl + "become-rhendor"}
                    showSpinner={true}
                  >
                    <>
                      <FormText
                        label="Business Address"
                        type="text"
                        placeholder="No. 6 Den Bec Close Port Harcourt"
                        groupClass="mt-10"
                        name="business_address"
                        id="business_address"
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
                      {/* <FullButton
                        text="Register"
                        type="submit"
                        contClass="mt-14"
                      /> */}
                      <div className="mt-14">
                        <button
                          className="text-sm md:text-md bg-base-400 hover:bg-base-600 focus:ring-base-600 focus:border-base-600 dark:hover:bg-base-300 rounded-xl py-3 px-2 text-white w-full"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <div className="mt-9 flex justify-center">
                        <FormCheck
                          label="I agree to terms & conditions"
                          id="terms_and_condition"
                          name="terms_and_condition"
                          groupClass="mt-4"

                        />
                      </div>
                    </>
                  </Form>
                </DetectOffline>
              </div>
            </LogoContent>
          </div>
        </TwoSections>
      </>
    );
  }
}

export default BecomeARhendor;
