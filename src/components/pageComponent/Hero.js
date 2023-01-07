import React, { Component } from 'react';
import HeadImage1 from '../../assets/img/others/index-top-img.svg';
import HeadImage2 from '../../assets/img/others/index-top-img2.svg';
import DoodleDotsLeft from '../../assets/img/icon/doodle-dots-left.svg';
import DoodleDotsRight from '../../assets/img/icon/doodle-dots-right.svg';

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="lg:h-screen alt-bg-base-700 relative w-full overflow-hidden py-16 lg:py-auto">
          <div className="flex lg:justify-between sm:justify-center max-h-full overflow-hidden slim-container">
            {/* left panel */}
            <div className="lg:w-[50%] xl:w-[45%] sm:w-[100%]">
              <div className="flex justify-center items-center h-full">
                <div className="w-full space-y-16 md:space-y-28">
                  <h1 className="white-text font-bold whitespace-normal">Link up with service providers to solve your problems.</h1>
                  <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row border-0 shadow">
                    <input type="text" className="px-2 py-4 lg:px-4 lg:py-2 text-slate-700 w-auto border-0 focus:outline-accent-400 hover:outline-accent-400 focus:border-accent-400 md:text-sm lg:text-xl ring-accent-400" placeholder="Search by occupation, profession" />
                    <div className="flex justify-center lg:inline-block">
                      <button className="px-10 text-white bg-accent-400 border-l text-xl lg:text-base rounded-none w-[165px] lg:w-auto">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right panel */}
            <div className="hidden lg:inline-block lg:w-[50%] lg:ml-[110px]">
              <div className="flex max-h-full">
                <div className="overflow-hidden">
                  <img className="mt-16 sm:mt-20" src={HeadImage1} alt="engineering" />
                </div>
                <div>
                  <img className="ml-6" src={HeadImage2} alt="hair styling" />
                </div>
              </div>
            </div>
          </div>

          {/* doodle dots */}
          <div className="">
            <div className="max-h-[10%] absolute z-10 left-0 bottom-0">
              <img className="" src={DoodleDotsLeft} alt="doodle dots" />
            </div>
            <div className="max-h-[10%] absolute z-10 right-0 bottom-0">
              <img className="" src={DoodleDotsRight} alt="doodle dots" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
