import React, { Component } from 'react';
import Service from './Service';
import DuplicateItems from './../features/DuplicateItems';
import HttpRequest from 'des-http-processor';
import { MyConfig } from '../../MyConfig';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ServicesGrid extends Component {

  constructor(props) {
    super(props)
    this.state = {
      services: [],
      settings: {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true
            }
          }
        ]
      }
    }
  }

  componentDidMount() {
    HttpRequest(MyConfig.apiUrl + 'services', 'get', null)
      .then(data => {
        const { data: services } = data.response.data.data
        this.setState({ services })
        console.log(this.state.services);
      })
  }

  render() {
    const perRow = this.props.perRow ? this.props.perRow : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    return (
      <>
        {/* small screen */}
        <h2 className="block lg:hidden darker-gray-text">Our Services</h2>
        {/* large screen */}
        <h1 className="hidden lg:block text-center gray-text">Our Services</h1>
        {Object.keys(this.state.services).length > 0 ? (
          <div className={"slim-container py-10 space-y-8 lg:py-20 mt-6 md:mt-11 "}>
            <Slider {...this.state.settings}>
              {
                this.state.services?.map((service, key) => <Service key={key} {...service} contClass="" />)
              }
            </Slider>
          </div>
        ) : (
          <div className="text-center p-4 sm:p-8">
            <p>There are no services at the moment, please check back later.</p>
          </div>
        )}
      </>
    )
  }
}
