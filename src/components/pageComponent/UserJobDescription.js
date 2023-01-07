import React, { Component } from 'react';
import SvgIcon from 'des-svg-icons';
import UserDistance from './UserDistance';
import Rating from './Rating';
import UserDescription from './UserDescription';
import Avatar from '../features/Avatar';
import { DateTime } from 'luxon';

export default class UserJobDescription extends Component {
  render() {
    const RatingValueContClass = this.props.RatingValueContClass
      ? this.props.RatingValueContClass
      : '';
    const RatingLabelContClass = this.props.RatingLabelContClass
      ? this.props.RatingLabelContClass
      : '';
    const JobValueContClass = this.props.JobValueContClass
      ? this.props.JobValueContClass
      : '';
    const LastActiveValueContClass = this.props.LastActiveValueContClass
      ? this.props.LastActiveValueContClass
      : '';
    // const contClass = this.props.contClass ? this.props.contClass : ' flex lg:flex-row space-y-10 lg:space-x-4 lg:space-y-0 p-4 lg:px-10 ';
    const contClass = this.props.contClass ? this.props.contClass : ' p-6';
    return (
      <>
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className={' ' + contClass}>
            <div className="">
              <Avatar
                pic={this.props.user.image}
                descriptionClass="light-gray-text"
                contClass="flex items-center lg:space-x-4 space-y-3 2xs:space-y-6 lg:space-y-0"
                labelContClass="text-sm lg:text-base flex h-full items-left space-y-4 lg:space-y-8 lg:w-4/6"
                nameClass="text-base lg:text-2xl font-bold tracking-tight gray-text"
                imgSize="w-16 h-16 md:w-40 md:h-40 lg:w-60 lg:h-60"
                imgRounded="rounded-none"
                name={this.props.user.name}
                description={this.props.user.bio}
              />
            </div>
            {/* <div className="flex flex-row justify between w-auto mx-auto">
                            <div>
                                <Rating rating={4.5} /> */}
            {/* <Rating rating={this.props.rateValue} /> */}
            {/* </div>
                            <div>
                                <UserDistance distance='153km' /> */}
            {/* <UserDistance distance={this.props.spaceDistance} /> */}
            {/* </div>
                        </div> */}
            <div className="flex py-5 lg:space-x-5 lg:flex-row flex-shrink-0   bg-white  dark:bg-gray-800">
              <div className="flex flex-row ">
                <div>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 41 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.837 23.6402C31.319 24.1422 31.081 24.8682 31.199 25.5802L32.977 35.4202C33.127 36.2542 32.775 37.0983 32.077 37.5802C31.393 38.0802 30.483 38.1403 29.737 37.7402L20.879 33.1202C20.571 32.9562 20.229 32.8682 19.879 32.8582H19.337C19.149 32.8862 18.965 32.9462 18.797 33.0382L9.93702 37.6802C9.49902 37.9002 9.00302 37.9782 8.51702 37.9002C7.33302 37.6763 6.54302 36.5483 6.73702 35.3582L8.51702 25.5182C8.63502 24.8002 8.39702 24.0702 7.87902 23.5602L0.657019 16.5602C0.0530192 15.9742 -0.156981 15.0942 0.119019 14.3002C0.387019 13.5082 1.07102 12.9302 1.89702 12.8002L11.837 11.3582C12.593 11.2802 13.257 10.8202 13.597 10.1402L17.977 1.16024C18.081 0.960244 18.215 0.776244 18.377 0.620244L18.557 0.480244C18.651 0.376244 18.759 0.290244 18.879 0.220244L19.097 0.140244L19.437 0.000244141H20.279C21.031 0.0782441 21.693 0.528244 22.039 1.20024L26.477 10.1402C26.797 10.7942 27.419 11.2482 28.137 11.3582L38.077 12.8002C38.917 12.9202 39.619 13.5002 39.897 14.3002C40.159 15.1022 39.933 15.9822 39.317 16.5602L31.837 23.6402Z"
                      fill="#5D5FEF"
                    />
                  </svg>
                </div>
                <div className="flex px-2 dark:text-gray-400">
                  <div>
                    <span
                      className={
                        RatingValueContClass + 'text-black dark:text-gray-400'
                      }
                    >
                      <div>{this.props.ratingValue}</div>
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm lg:text-base">Rating</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row ">
                <div>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.2876 6.26539C46.2149 6.09809 46.0695 5.98175 45.8877 5.95267C45.7131 5.91627 45.5313 5.97447 45.4076 6.10537L41.2986 10.2145L37.7931 6.70902L41.9022 2.59267C42.0331 2.46177 42.0913 2.27995 42.0549 2.10541C42.0258 1.93083 41.9094 1.77813 41.7422 1.70538C40.5713 1.17448 39.3204 0.905396 38.0186 0.905396C35.5967 0.905396 33.3204 1.85084 31.604 3.56719C29.2331 5.93811 28.3749 9.3563 29.3204 12.5563L12.5567 29.3199C11.7276 29.0727 10.8622 28.949 9.98948 28.949C7.56037 28.949 5.284 29.8945 3.56765 31.6035C0.0331143 35.1454 0.0331143 40.8981 3.56765 44.4327C5.284 46.149 7.56037 47.0945 9.9822 47.0945C12.404 47.0945 14.6876 46.149 16.3968 44.4327C18.7677 42.0617 19.6258 38.6508 18.6876 35.4436L35.444 18.6872C36.2804 18.9272 37.1458 19.0508 38.0186 19.0508C40.4404 19.0508 42.724 18.1126 44.4331 16.3963C47.0877 13.749 47.8295 9.6763 46.2876 6.26539ZM13.5386 41.5745C11.5749 43.5381 8.38219 43.5381 6.42583 41.5745C4.46218 39.6181 4.46218 36.4254 6.42583 34.4617C8.38219 32.5054 11.5749 32.5054 13.5386 34.4617C15.4949 36.4254 15.4949 39.6181 13.5386 41.5745Z"
                      fill="#5D5FEF"
                    />
                  </svg>
                </div>
                <div className="flex px-2 dark:text-gray-400">
                  <div>
                    <span
                      className={
                        JobValueContClass + 'text-black dark:text-gray-400'
                      }
                    >
                      <div>{this.props.jobValue}</div>
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm lg:text-base">Total Jobs</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 36 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 0H12V4H24V0ZM16 26H20V14H16V26ZM32.05 12.77L34.9 9.92C34.04 8.89 33.1 7.95 32.07 7.09L29.22 9.94C26.15 7.48 22.24 6 17.99 6C8.04 6 0 14.06 0 24C0 33.94 8.04 42 17.99 42C27.94 42 36 33.94 36 24C36 19.75 34.52 15.85 32.05 12.77ZM18 38C10.27 38 4 31.73 4 24C4 16.27 10.27 10 18 10C25.73 10 32 16.27 32 24C32 31.73 25.73 38 18 38V38Z"
                      fill="#5D5FEF"
                    />
                  </svg>
                </div>
                <div className="flex px-2 dark:text-gray-400">
                  <div>
                    <span
                      className={
                        LastActiveValueContClass +
                        'text-black dark:text-gray-400'
                      }
                    >
                      <div>
                        {DateTime.fromISO(
                          this.props.user.last_login
                        ).toRelativeCalendar()}
                      </div>
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm lg:text-base">Last Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
