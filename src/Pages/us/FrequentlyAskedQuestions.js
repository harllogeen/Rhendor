import React from 'react';
import LandingTemplate from '../../components/layouts/LandingTemplate';

// And now we can use these
const FrequentlyAskedQuestion = () => {
  return (
    <LandingTemplate>
      <div className="my-container">

        <div>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <p className="muted-text">Last Updated: 3rd April, 2021.</p>
        </div>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 1.	Who are Rhendors?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhendors are professional service providers that are skilled and committed in what they do. They are tailors, bakers, hairdressers, barbers, cobblers, plumbers, welders, mechanics, copy writers, editors, poets, accountants, tutors, and several other professionals, ready to meet your need.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>2.	What is Rhenda?</span>
              <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda is your one-stop shop where you can get all your professional and skilled service providers. We ensure a straightforward, uncomplicated and hassle-free solution to your service needs WITHOUT YOU LEAVING YOUR COMFORT ZONE</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 3.	How can I report an abuse?</span>
              <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">If you have been abused in any way by a Rhendor please report immediately and we will do our best to look into the matter. <br /> Please contact us by calling us on the following number: +234 813 968 7140 <br /> You can also write to us via rhenda@gmail.com <br />Or chat with us live via... *(Input page for live chat)*</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-4">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 4.	How can I become a Rhendor?</span>
              <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Becoming a Rhendor is very easy, just following the 4 steps below and you will be done in no time.</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 1: Sign Up</b> <br />Sign up to become a Rhendor using your email and preferred password. To do this click on Sign Up</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 2: Upload Your Details</b> <br />Upload the following details to help customers contact you:</li>
              </ul>
              <ol className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Business name</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Email address</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Phone number</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Address of physical shop (if any) using the location based technology.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">What service you offer</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Service hours <br /> Please upload the correct details and ensure to completely fill in all details.</li>
              </ol>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 3: Advertise</b> <br />Let people know what you do by telling them and showing them pictures. Take clear pictures of what you do and post them with captivating captions.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 4: Keep Customers informed</b> <br />The more customers hear from you the more traffic you are likely to receive. Keep customers informed by posting regularly and updating them on the latest as regards your business.</li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-5">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-5" aria-expanded="true" aria-controls="accordion-collapse-body-5">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 5.	What are Extra-value Offers?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Extra-value offers are promotional tools that we've made available for Rhendors which help to promote their adverts and help clients find them easily and faster.<br />To subscribe for this offers visit https://rhenda.com/sub/exra-value-offers</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-6">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-6" aria-expanded="true" aria-controls="accordion-collapse-body-6">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 6.	What are the types of Extra-value offers?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda offers two kinds of Extra-value offers that can help you to promote your adverts (ads). The price of these offers varies and depends on the goals you wish to achieve and your budget. They are: Top of the page offer and Boost offer.</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Top of the page offer:</b><br />Our Top of the page offer allows your ads to be placed at the top of the search results page for either 7 or 30 days, depends on the duration you have chosen. This simple means that your potential clients can easily and quickly find your ads and in turn you can get up to 20 times more customers.
                  The number of ads you want to appear at the top of the page determines the amount to be paid. This offer expires in 12 months after the purchase date if you do not activate it for your ads.
                </li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Boost offer:</b> <br />Our Boost offer allows all your ads to appear in search results more often during 1, 3 or 6 months, depending on the package you choose, and your ads will be constantly shown alongside similar ads. This way you can get up to 50 times more clients. It is advisable to use the Boost offer if you have various ads that you want costumers to see at the same time. There are three kinds of Boost offers, they are:</li>
              </ul>
              <ol className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Silver Package:</b><br />With this package, Rhendors get 10 times more clients through their ads and these ads get to be promoted in search results. The ads gets to be on auto-renew every day, making it possible for clients to find them amongst other ads, and there's unlimited pop ups for these ads in search results of similar category.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Gold Package:</b> <br />With this package, Rhendors get 20 times more clients through their ads and these ads get to be promoted in search results. The ads gets to be on auto-renew every 12 hours, making it possible for clients to find them amongst other ads, and there's unlimited pop ups for these ads in search results of similar category.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Diamond Package:</b> <br />With this package, Rhendors get 50 times more clients through their ads and these ads get to be promoted in search results. The ads get to be on auto-renew every 6 hours, making it possible for clients to find them amongst other ads.  There's unlimited pop ups for these ads in search results of similar category and 40 free Top of the page offer.<br />      To subscribe for these offers visit https://myrhenda.com/exra-value-offers</li>
              </ol>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-7">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-7" aria-expanded="true" aria-controls="accordion-collapse-body-7">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 7.	How do I register to become a Rhendor?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">To register, sign up to become a Rhendor using your email and preferred password. To do this click on  Sign Up.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-8">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-8" aria-expanded="true" aria-controls="accordion-collapse-body-8">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 8.	Can I get service provider anywhere in Nigeria?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Yes, of course. Rhendors are not limited to a particular state and so you can find them anywhere you are in Nigeria. Just turn on your location and search for "Rhendors near me" or for instance: "hairdressers in Lagos".</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-9">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-9" aria-expanded="true" aria-controls="accordion-collapse-body-9">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> 9.	How can I become a 5star Rhendor?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-9" className="hidden" aria-labelledby="accordion-collapse-heading-9">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">To become a 5star Rhendor follow the five steps below:</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 1: Advertise Like A Pro</b><br />Regularly update your customers by letting them know what you do through your adverts. Take clear pictures of what you do and post them with captivating captions. Pay attention to details and ensure that you are posting the right pictures with error-free captions.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 2: Get Verified</b> <br />Get verified by providing a means of identification and uploading it on the website. This can be your Voter's Card or Your National Identification Card (NIN). Doing this is a way of letting customer know that you can be trusted.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 3: Take Advantage Of Our Extra-Value Offers</b> <br />To get 20 times more customers, take advantage of our Extra-Value Offer and your adverts will appear at the top of the page and you can be found easily and faster. To do this click on Extra-Value Offers</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>Step 4: Treat Customers like Royalty</b> <br />Ensure that you respond quickly and nicely to customers; don't keep them waiting. Don't disrespect a customer. Remember that 'customers are always right'.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline"><b>      Step 5: Render Excellent Services and Get Feedbacks</b> <br />Give your best when offering a service to the satisfaction of your customers. When you are done offering a service, politely ask customers to rate you and leave a feedback using the Rate Me and Leave Feedback icon on your page.</li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-10">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-10" aria-expanded="true" aria-controls="accordion-collapse-body-10">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>10.	How can I advertise my products on your website?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-10" className="hidden" aria-labelledby="accordion-collapse-heading-10">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">      Firstly you have to be a registered user; to register, sign up to become a Rhendor using your email and preferred password. To do this click on Sign Up
                After registration, click on Advertise and then select the image(s) you want to post (if any) by clicking on the Photos icon and then add all necessary details in relation to the selected image. Attach captivating captions to the images to help attract customers.
                When all required fields have been filled, click on the Post button. Once your advert has been published, it will be visible on your profile and a notification email will be sent to you.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-11">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-11" aria-expanded="true" aria-controls="accordion-collapse-body-11">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>11.	Why should I become a Rhendor?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-11" className="hidden" aria-labelledby="accordion-collapse-heading-11">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda offers you the opportunity to connect with millions of customers online. It is a platform that allows you advertise freely without leaving your workspace. We also offer first class support to our Rhendors and we have extra-value offers that help boost your adverts.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-12">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-12" aria-expanded="true" aria-controls="accordion-collapse-body-12">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>12.	Where is your shop?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-12" className="hidden" aria-labelledby="accordion-collapse-heading-12">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda is an online shop and so we do not have physical shops but most of our service providers, Rhendors, have physical shops where you can locate them.</p>
            </div>
          </div>
          <div id="accordion-collapse-body-12" className="hidden" aria-labelledby="accordion-collapse-heading-12">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda offers you the opportunity to connect with millions of customers online. It is a platform that allows you advertise freely without leaving your workspace. We also offer first class support to our Rhendors and we have extra-value offers that help boost your adverts.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-13">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-13" aria-expanded="true" aria-controls="accordion-collapse-body-13">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>13.	How do I contact a Rhendor?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-13" className="hidden" aria-labelledby="accordion-collapse-heading-13">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">To contact a Rhendor you have to have an account with us. To do this, sign up to become a customer using your email and preferred password. To do this click on Sign Up
                After you've signed up, you can contact a Rhendor by either calling, chatting with him/her, sending a text message or an email using the details provided by the Rhendor on his/her page.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-14">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-14" aria-expanded="true" aria-controls="accordion-collapse-body-14">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>14.	 How can I rate a Rhendor or leave a feedback?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-14" className="hidden" aria-labelledby="accordion-collapse-heading-14">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">When a Rhendor has completed a service, you can tell us how the service was offered and if it was satisfactory or not by rating the Rhendor and by leaving a feedback using the Rate Me and Leave Feedback icon on the Rhendors page.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-15">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-15" aria-expanded="true" aria-controls="accordion-collapse-body-15">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>15.	How can I contact Rhenda?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-15" className="hidden" aria-labelledby="accordion-collapse-heading-15">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">If you have any questions, suggestions or need our assistance, be rest assured that our ever ready team are available to give you all the necessary assistance. So tell us how we can help you by calling us on the following number: +234 813 968 7140 <br />You can also write to us via rhenda@gmail.com <br /> Or chat with us live via... *(Input page for live chat)*</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-16">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-16" aria-expanded="true" aria-controls="accordion-collapse-body-16">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>16.	What happens after I post an ad?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-16" className="hidden" aria-labelledby="accordion-collapse-heading-16">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Once you've posted an ad, you will get a notification when your ad is active. You can manage your ads by going to your profile and clicking on the My Adverts. <br />If you discover that there is an error in the advert you can edit it or delete it, based on your preference. You can do this by clicking on the edit or delete bottom on the ads</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-17">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-17" aria-expanded="true" aria-controls="accordion-collapse-body-17">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>17.	Are there any rules as regards posting of adverts on Rhenda?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-17" className="hidden" aria-labelledby="accordion-collapse-heading-17">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Yes, the following few rules applies when posting on Rhenda:</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Images must be legal properties of the Rhendor (that is, they are to be taken or owned by the Rhendor not one downloaded from the internet), to avoid piracy.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">A brief but detailed description must be given to help aid quicker attraction.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">All adverts are to be legally permitted in line with the law of Nigeria.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">All services and products must be located within Nigeria.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Do not use aggressive or rude words.</li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-18">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-18" aria-expanded="true" aria-controls="accordion-collapse-body-18">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>18.	How can I share my adverts on Facebook, WhatsApp or Twitter?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-18" className="hidden" aria-labelledby="accordion-collapse-heading-18">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Click on the advert you want to share, scroll down to find the Facebook, WhatsApp or Twitter icons then click on a particular icon to be able to share the link.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-19">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-19" aria-expanded="true" aria-controls="accordion-collapse-body-19">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>19.	 How long will my advert stay on the site?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-19" className="hidden" aria-labelledby="accordion-collapse-heading-19">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Your adverts stay on the site until you decide to delete them. So you don't have to worry about losing them.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-20">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-20" aria-expanded="true" aria-controls="accordion-collapse-body-20">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>20.	Can I share my adverts on any social network?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-20" className="hidden" aria-labelledby="accordion-collapse-heading-20">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Definitely, you can!<br />To do this, click on the advert you want to share, scroll down to find the Facebook, WhatsApp or Twitter icons then click on a particular icon to be able to share the link.
                This could help you direct more traffic to your page as customers get to know what you do beyond Rhenda.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-21">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-21" aria-expanded="true" aria-controls="accordion-collapse-body-21">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>21.	How do I report an illegal activity on Rhenda?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-21" className="hidden" aria-labelledby="accordion-collapse-heading-21">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">If you suspect any illegal activity on Rhenda, please report immediately and we will do our best to look into the matter.<br />Please contact us by calling us on the following number: +234 813 968 7140 <br /> You can also write to us via rhenda@gmail.com <br />Or chat with us live via... *(Input page for live chat)*</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-22">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-22" aria-expanded="true" aria-controls="accordion-collapse-body-22">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>22.	What are the benefits of advertising on Rhenda?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-22" className="hidden" aria-labelledby="accordion-collapse-heading-22">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">The benefits of advertising on Rhenda are:</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Rhenda offers you the opportunity to connect with millions of customers online.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">It is a platform that allows you advertise freely without leaving your workspace.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">We offer first class support to our Rhendors and ensure that all their needs are met.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">We have extra-value offers that help boost your adverts.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">We promote your adverts and ensure that interested and potential customers get to see them.</li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-23">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-23" aria-expanded="true" aria-controls="accordion-collapse-body-23">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>23.	Should I pay before or after a service has been rendered?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-23" className="hidden" aria-labelledby="accordion-collapse-heading-23">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">This is based on your preference. A thorough discussion with a Rhendor would help you make this decision. There are some services that require upfront part payment, or most times, full payment to help get materials for the job. However, meet with the Rhendor, agree on a payment before service is rendered and ensure that the Rhendor shows a form of identification (voter’s card or NIN).
                We recommend that payments are made only after a job has been completed perfectly but your discretion would help you make a decision. </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-24">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-24" aria-expanded="true" aria-controls="accordion-collapse-body-24">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>24.	How can I avoid being scammed?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-24" className="hidden" aria-labelledby="accordion-collapse-heading-24">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Rhenda is security conscious and that's why we get out Rhendors verified. However, below are tips to help you avoid getting scammed:</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Meet Rhendor at a safe and public location chosen by you.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Do not disclose any personal information to a Rhendor. For example, your bank details or an ID of you.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Ensure that the contacted Rhendor shows a form of identification (for example, National Identification Card or Permanent Voter's Card).</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Agree on a payment before service is rendered and make payment only after a job has been completed perfectly; do not pay in advance for any service.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">In cases where an advance payment (part or full) is required, ensure there is a written agreement.</li>
                <li className="text-blue-600 dark:text-blue-500 hover:underline">Report your suspicion as soon as you notice a foul play.</li>
              </ul>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-25">
            <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-25" aria-expanded="true" aria-controls="accordion-collapse-body-25">
              <span className="flex items-center"><svg className="mr-2 w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>25.	How can I unsubscribe from email notifications?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-25" className="hidden" aria-labelledby="accordion-collapse-heading-25">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">To unsubscribe from our email notifications, Sign in to your account and click on Settings and then click on the box in front of Email Notifications to disable.
                To start receiving email notifications again, follow the same process. However, email notifications are important as they help you keep track of vita information that concern you and as regard upgrades to Rhenda. Unsubscribing could deprive you from receiving emails when your adverts have been uploaded, reset of password, account confirmation, customer’s request, and so much more.</p>
            </div>
          </div>
        </div>
      </div>
    </LandingTemplate >
  );
};

export default FrequentlyAskedQuestion;
