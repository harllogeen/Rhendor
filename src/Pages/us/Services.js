import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import LandingTemplate from '../../components/layouts/LandingTemplate';
import SearchForm from '../../components/pageComponent/SearchForm';
import ServicesGrid from '../../components/pageComponent/ServicesGrid';
import ServiceContext from '../../context/serviceContext';

// And now we can use these
export default function Services() {
  const { getAllServices, findServices, loading, services } =
    useContext(ServiceContext);

  let [searchParams, setSearchParams] = useSearchParams();

  let search = searchParams.get('search');

  //useEffect with usecallback
  useEffect(() => {
    const handleServices = () => {
      if (search) {
        findServices(search);

        searchParams.delete('search');

        console.log('updating params');
        setSearchParams(searchParams);
      } else {
        getAllServices();
      }
    };

    handleServices();
  }, []);

  // fetch services
  let serviceContent;
  if (loading) {
    serviceContent = <div className="text-center p-4 sm:p-8">Loading...</div>;
  }

  if (services?.length > 0 && !loading) {
    serviceContent = <ServicesGrid services={services} limit={16} />;
  }

  if (!services?.length > 0 && !loading) {
    serviceContent = (
      <div className="text-center p-4 sm:p-8">
        <p>There are no services at the moment, please check back later.</p>
      </div>
    );
  }

  return (
    <LandingTemplate>
      <div>
        <SearchForm />
      </div>
      <div>
        <div className="container py-10 mx-auto">{serviceContent}</div>
      </div>
    </LandingTemplate>
  );
}

export function PaginatedServices() {
  const { paginatedServices, loading, paginateServices } =
    useContext(ServiceContext);

  //useEffect with usecallback
  useEffect(() => {
    paginateServices();
  }, []);

  // fetch services
  let serviceContent;
  if (loading) {
    serviceContent = <div className="text-center p-4 sm:p-8">Loading...</div>;
  }

  if (paginatedServices?.length > 0 && !loading) {
    serviceContent = <ServicesGrid services={paginatedServices} limit={16} />;
  }

  if (!paginatedServices?.length > 0 && !loading) {
    serviceContent = (
      <div className="text-center p-4 sm:p-8">
        <p>There are no services at the moment, please check back later.</p>
      </div>
    );
  }

  return (
    <div className="home-services">
      <div className="">
        <h1 className="text-2xl lg:hidden">Our Services</h1>
      </div>
      <div>
        <div className="container pb-10 mx-auto">{serviceContent}</div>
      </div>
    </div>
  );
}
