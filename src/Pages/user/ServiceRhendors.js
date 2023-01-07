import React, { Component, useContext, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import FullAccountCard from "../../components/pageComponent/FullAccountCard";
import SearchForm from "../../components/pageComponent/SearchForm";
import SortBy from "../../components/pageComponent/SortBy";
import { BindThis } from "des-utilities";
import UserDescription from "../../components/pageComponent/UserDescription";
import { NavLink, useParams } from "react-router-dom";
import { FetchList } from "./FetchList";
import { Link } from "react-router-dom";
import ServiceContext from "../../context/serviceContext";
import SvgIcon from "des-svg-icons";

const ServiceRhendors = (props) => {
  const params = useParams();
  const { findServiceRhendors, serviceRhendors, setServiceRhendors } =
    useContext(ServiceContext);

  //   console.log(params);
  useEffect(() => {
    findServiceRhendors(params.id);
  }, []);

  return (
    <DashboardLayout>
      <div class="px-3 lg:px-auto">
        {/* svg */}
        <Link to="/dashboardservices">
          <div className="text-gray-500">
            <svg
              viewBox="0 0 300.003 300.003"
              width="2rem"
              height="2rem"
              fill="currentColor"
            >
              <path d="M150 0C67.159 0 .001 67.159.001 150c0 82.838 67.157 150.003 149.997 150.003S300.002 232.838 300.002 150C300.002 67.159 232.839 0 150 0zm39.226 218.202a13.968 13.968 0 01-9.902 4.101 13.955 13.955 0 01-9.902-4.103l-56.295-56.292a13.898 13.898 0 01-2.368-1.886c-2.796-2.799-4.145-6.479-4.077-10.144-.065-3.667 1.281-7.35 4.077-10.146a14.146 14.146 0 012.368-1.886l56.043-56.043c5.47-5.465 14.34-5.467 19.808.003 5.47 5.467 5.47 14.335 0 19.808l-48.265 48.265 48.514 48.516c5.468 5.469 5.468 14.337-.001 19.807z" />
            </svg>
          </div>
        </Link>
        {serviceRhendors?.length > 0 ? (
          <>
            {/* search form */}

            <div className="lg:shadow w-full flex flex-col lg:flex-row space-y-4 lg:space-y-0 my-6">
              <input
                className="items-center justify-end pl-3 lg:pl-8 bg-white shadow rounded-none text-sm lg:text-xl text-gray-800 grow py-3 lg:py-4"
                placeholder="Search by occupation, profession"
                control-id="ControlID-5"
                //   value={this.state.searchText}
              />
              <button
                //   onClick={this.servicesSearch}
                className="lg:text-2xl lg:font-medium lg:leading-9 text-center text-white py-2 lg:py-4 px-8 bg-yellow-400 rounded-none"
                control-id="ControlID-6"
              >
                Search
              </button>
            </div>

            {/* <div class="hidden lg:block">
              <SearchForm />
            </div> */}
            <div>
              <div className="hidden lg:flex flex-col space-y-3 xs:space-y-0 xs:flex-row justify-between items-center pb-5">
                <NavLink to="/dashboardservices?category=1">
                  <UserDescription describe="Generator Repairer" />
                </NavLink>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
                  <span>Sort by:</span>
                  <div
                    onClick={() =>
                      setServiceRhendors(serviceRhendors.reverse())
                    }
                    className="cursor-pointer hover:text-base-400"
                  >
                    <SvgIcon type="FilterDown" />
                  </div>
                  <div
                    onClick={() =>
                      setServiceRhendors(serviceRhendors.reverse())
                    }
                    className="cursor-pointer hover:text-base-400"
                  >
                    <SvgIcon type="FilterUp" />
                  </div>
                  <div
                    onClick={() => findServiceRhendors()}
                    className="cursor-pointer hover:text-base-400"
                  >
                    <span>Recommended</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {
                  // if it's just one rhendor
                  serviceRhendors.length === 1 ? (
                    <FullAccountCard rhendor={serviceRhendors[0]} />
                  ) : (
                    // more than one rhendor
                    serviceRhendors.map((rhendor, key) => (
                      <FullAccountCard key={key} rhendor={rhendor} />
                    ))
                  )
                }
              </div>
            </div>
          </>
        ) : (
          <p className="mt-4 text-center">No rhendors yet</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ServiceRhendors;
