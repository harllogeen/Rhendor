import React, { createContext, useState } from "react";
import HttpRequest from "des-http-processor";
import { ProcessHttpMessage } from "des-http-processor";
import { MyConfig } from "../MyConfig";
import { toast } from "react-toastify";

const ServiceContext = createContext({});

export const ServiceContextProvider = (props) => {
  const [services, setServices] = useState();
  const [paginatedServices, setPaginatedServices] = useState();
  const [serviceRhendors, setServiceRhendors] = useState();
  const [loading, setLoading] = useState(false);

  // fetch services

  const getAllServices = () => {
    setLoading(true);
    HttpRequest(
      MyConfig.apiUrl + "services",
      "get",
      null,
      ProcessHttpMessage
    ).then((response) => {
      setServices(response.data.data);
      // console.log(response.data);

      setLoading(false);
    });
  };

  //Paginated Services
  const paginateServices = () => {
    setLoading(true);
    HttpRequest(
      MyConfig.apiUrl + "services?per_page=8",
      "get",
      null,
      ProcessHttpMessage
    ).then((response) => {
      setPaginatedServices(response.data.data);
      setLoading(false);
    });
  };

  // Search for Services
  const findServices = (param) => {
    if (param === "") {
      getAllServices();
      return;
    }
    setLoading(true);

    HttpRequest(
      MyConfig.apiUrl + `search?search=${param}&type=service`,
      "get",
      null,
      ProcessHttpMessage
    )
      .then((response) => {
        setServices(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const findServiceRhendors = async (id) => {
    const token = localStorage.getItem("token");

    setLoading(true);
    const res = await fetch(
      `${MyConfig.apiUrl}get-users-for-service?id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data.data);
    setServiceRhendors(data.data);
    toast.success(data.message);
    setLoading(false);
  };

  // https://backend.myrhenda.com/api/v1/search?search=first&type=service

  return (
    <ServiceContext.Provider
      value={{
        getAllServices,
        paginateServices,
        findServices,
        findServiceRhendors,
        setServiceRhendors,
        services,
        paginatedServices,
        serviceRhendors,
        loading,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceContext;
