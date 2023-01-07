import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingTemplate from '../components/layouts/LandingTemplate';
import Hero from '../components/pageComponent/Hero';
import testimonialImg from '../assets/img/others/testimonial-img.svg';
import Browse from '../assets/img/others/browse-file.svg';
import Msg from '../assets/img/others/msg-file.svg';
import Community from '../assets/img/others/community-file.svg';
import Rhendor from '../assets/img/others/Rhendor.svg';
import HttpRequest, { ProcessHttpMessage } from 'des-http-processor';
import { Link } from 'react-router-dom';
import { MyConfig } from '../MyConfig';
import Taieri from '../assets/img/others/Taieri.png';
import Connect1 from '../assets/img/others/connect1.png';
import Connect2 from '../assets/img/others/connect2.png';
import './App.css';
import '../assets/css/custom-grid.css';
import { PaginatedServices } from './us/Services';
import ServicesGridWithSlider from '../components/pageComponent/ServicesGridWithSlider.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // fetch user
    let user = sessionStorage.getItem('user');

    this.state = {
      services: {},
      user: JSON.parse(user),
    };

    // fetch services
    HttpRequest(
      MyConfig.apiUrl + 'services',
      'get',
      null,
      ProcessHttpMessage
    ).then(
      (response) => {
        this.setState({ services: response.data.data });
      },
      (response) => {
        toast.warn(response.description);
      }
    );

    // BindThis(this, []);
  }

  componentDidMount() {
    this.refreshList = setInterval(() => {
      HttpRequest(
        MyConfig.apiUrl + 'services',
        'get',
        null,
        ProcessHttpMessage
      ).then(
        (response) => {
          this.setState({ services: response.data.data });
        },
        (response) => {
          toast.warn(response.description);
        }
      );
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshList);
  }

  render() {
    return (
      <LandingTemplate>
        <Hero />
        <ServicesGridWithSlider />
        <div className="gray-bg py-6 lg:py-12">
          <div className="slim-container space-y-12">
            <div>
              <h2>How does it work?</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="lg:w-1/2 grow">
                <div className="home-work pb-10 flex flex-col justify-evenly sm:pr-10">
                  <div className="flex how-it-works items-start">
                    <img src={Browse} alt="Browse" />
                    <div className="ml-8 xl:ml-16">
                      <h3 className="ml-68">Browse</h3>
                      <p className="mt-2">
                        Search for services by simply typing in job descriptions
                        in the search panel.
                      </p>
                    </div>
                  </div>
                  <div className="flex how-it-works items-start">
                    <img src={Msg} alt="Msg" />
                    <div className="ml-8 xl:ml-16">
                      <h3 className="ml-68">Understand</h3>
                      <p className="mt-2">
                        Get comfortable with our service and contact as many
                        service providers as you need by going through their
                        page.
                      </p>
                    </div>
                  </div>
                  <div className="how-it-works flex items-start">
                    <img src={Community} alt="Community" />
                    <div className="ml-8 xl:ml-16">
                      <h3 className="ml-68">Join Community</h3>
                      <p style={{ marginBottom: '20px' }} className="mt-2">
                        Become an active customer by signing up, rating
                        Rhendors, and leaving feedback. You also get to share
                        your experiences, receive and give feedback, learn from
                        experiences and examples shared, and support others.
                      </p>
                    </div>
                  </div>
                  <div className="flex how-it-works items-start">
                    <img src={Rhendor} alt="Rhendor" />
                    <div className="ml-8 xl:ml-16">
                      <h3 className="ml-68">Become A Rhendor</h3>
                      <p className="mt-2">
                        Go the extra mile and become a Rhendor. Let the world
                        know you for the service you offer. Sign up today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:inline-block">
                <img src={testimonialImg} alt="teaching" className=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col bg-community relative h-[500px] items-center">
          <div
            className={`bg-text-container bg-community-overlay flex flex-col items-center justify-center space-y-8`}
          >
            <h2 className="text-2xl text-white text-center">
              Rhendor Community
            </h2>
            <p className="text-white text-center">
              Chat, connect, collaborate with other Rhendors{' '}
            </p>
            <Link to="/connect">
              <button className="px-10 text-white bg-accent-400 text-xl lg:text-base rounded-none w-[165px]">
                Connect
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:hidden bg-yellow-500 w-full flex items-center justify-center p-5">
          <div className="space-y-4 py-8">
            <h4 className="text-white">Rhendor Community</h4>
            <p className="w-2/3 xs:w-3/5 text-white">
              Chat, connect, collaborate with other Rhendors{' '}
            </p>
            <button
              className="text-xs shadow-xl font-semibold leading-3 text-yellow-500 rounded-sm bg-white py-3 px-14"
              control-id="ControlID-26"
            >
              Connect
            </button>
            <div className="relative flex justify-center my-5 pl-8 mt-10">
              <img
                className="relative w-28 h-20 shadow-2xl border-2 border-white -mr-5 z-4"
                src={Connect1}
                alt=""
              />
              <img
                className="w-28 h-20 shadow-xl border-2 border-white mt-7"
                src={Connect2}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="h-full w-full mt-1">
          <MyMapComponent
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `400px` }} />}
           mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown={false} />
        </div> */}
        <div className="flex bg-base-600 p-0 m-0 sm:min-h-[300px] lg:min-h-[500px]">
          <div className="flex justify-between items-center w-full">
            <div className="w-5/6 xs:w-4/5 md:w-2/3 lg:w-1/2 px-[5%] lg:px-20 py-10">
              <h1 className="text-white text-xl lg:text-4xl font-bold mt-0 lg:leading-normal">
                Monitize your skills. <br /> Be a service provider on Rhenda
              </h1>
              <Link to={this.state.user ? '/becomearhendor' : '/register'}>
                <button
                  type="button"
                  className="hover:bg-base-900 hover:text-white mt-10 p-3 px-5 lg:px-8 rounded-sm gray-text text-sm lg:text-xl lg:rounded white-bg font-bold"
                >
                  Become a Rhendor
                </button>
              </Link>
            </div>
            <div
              className="grow opacity-50 h-full"
              style={{ background: `url(${Taieri})`, backgroundSize: 'cover' }}
            ></div>
          </div>
        </div>
      </LandingTemplate>
    );
  }
}
