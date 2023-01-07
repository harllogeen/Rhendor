import React from 'react';
import LandingTemplate from '../../components/layouts/LandingTemplate';
import SideImg from '../../assets/img/others/about-img.svg';

// And now we can use these
const AboutUs = () => {
  return (
    <LandingTemplate>
      <div>
        <div className="text-center my-container">
          <h1 className="font-bold">Our Mission</h1>
          <div>
            <p className="mt-5">To build an online community of service providers and provide them with a platform that enables them to work, live and connect.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gray-bg relative p-5 2xs:p-12 sm:p-18 lg:p-24 ml-0 my-32">
          <div className="lg:w-2/5 flex justify-center relative -mt-24 lg:mt-0">
            <img src={SideImg} alt="easy search" className="w-full xs:w-[60%] lg:w-full"></img>
          </div>
          <div className="lg:w-3/5 lg:ml-28 flex justify-center items-center">
          <div>
            <h3 className="text-center font-bold">Making it easier to find services around</h3>
            <p className="mt-5">Technology is known for making things easy for people. Well, here is a site that makes it easier for you to find all the services you might ever need. From professional services to home services. And the best thing is you get to find them for free.</p>
            <p className="mt-5">Research shows that 85% of people use referrals to locate service providers. Given this information, we decided to bring together all the service providers you will ever need and constantly refer them to you. This is because we are certain that they are the best at what they do. You won't need to contact so many people or sites to get them because you can get them in one place. So instead of asking around just ask Rhenda!</p>
            </div>
            </div>
        </div>
      </div>
    </LandingTemplate>
  );
};

export default AboutUs;
