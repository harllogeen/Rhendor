import React, { Component } from "react";
import UserCard from "./UserCard";
import SvgIcon from "des-svg-icons";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Modal from "../features/Modal";
import Button from "../form/Button";
import MyForm from "../form/Form";
import * as Yup from "yup";
import { MyConfig } from "../../MyConfig";
import { Emojis } from "./../features/Emojis";
import FormTextArea from "./../form/FormTextArea";
import Avatar from "./../features/Avatar";

export default function FullAccountCard({ rhendor }) {
  // console.log(rhendor);
  function finishSubmitting() {
    // close modal
    document.getElementById("createPostModal").classList.add("hidden");
  }
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  
  let profileUrl = loggedInUser.id === rhendor.user.id ? '/account' : `/account/${rhendor.user.id}`;

  return (
    <>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex space-x-2 flex-row xs:space-x-4 sm:space-x-8 p-2 xs:p-4 sm:p-8">
          <div className="">
            <Avatar
              pic={rhendor.user.image}
              imgClass="xs:w-[80px] xs:h-[98px] lg:w-[250px] lg:h-[306px] py-auto px-auto"
            />
          </div>
          <div className="grow flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <div className="lg:space-y-3">
                <NavHashLink to={profileUrl}>
                  <h5 className="text-[10px] lg:text-2xl font-bold text-gray-900 dark:text-gray-400 m-0 leading-tight">
                    {rhendor.user.name}
                  </h5>
                </NavHashLink>
                <Link
                  to={`/servicerhendors/${rhendor.service_id}`}
                  className="light-gray-text text-[8px] leading-none"
                >
                  {rhendor.service_type}
                </Link>
                <div>
                  <SvgIcon type="star" />
                </div>
              </div>
              <div className="sm:text-right space-y-3">
                <p className="text-[10px] lg:text-base">49.40km away</p>
                <NavHashLink
                  to={`/account/${rhendor.user.id}`}
                  className="light-gray-text text-[8px] lg:text-sm"
                >
                  Customer Ratings- 4.0/5
                </NavHashLink>
              </div>
            </div>
            <p className="mt-3 sm:mt-6 md:mt-8 mb-3 font-normal light-gray-text leading-normal">
              {rhendor.user.bio}
            </p>

            <div className="flex space-y-2 items-center justify-between mt-auto">
              <div className="text-[8px] lg:text-base">
                <NavHashLink smooth to={`/account/${rhendor.user_id}`}>
                  Total jobs: 20
                </NavHashLink>
              </div>
              <div>
                <Modal
                  id="createPostModal"
                  trigger={
                    <div className="flex-row-reverse">
                      {/* <Button children="Contact Rhendor" rounded="rounded-lg" textSize="[8px] lg:text-base" /> */}
                      <button
                        className="text-xs leading-3 text-white py-1.5 px-1 bg-purple-900 rounded-sm"
                        control-id="ControlID-9"
                      >
                        Contact Rhendor
                      </button>
                    </div>
                  }
                >
                  <h3 className="m-2 lg:mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">
                    Send Message
                  </h3>
                  <MyForm
                    showSpinner={true}
                    formUrl={MyConfig.apiUrl + "send-message"}
                    redirectOnSuccess="/messages"
                    finishSubmitting={finishSubmitting}
                    validationSchema={{
                      message: Yup.string().required(
                        "Please enter your message"
                      ),
                    }}
                    initialValues={{
                      message: "",
                      receiver_id: rhendor.user_id,
                    }}
                  >
                    <div class="flex items-center py-2 lg:px-3">
                      <div className="flex flex-col">
                        <button
                          type="button"
                          class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <Emojis />
                      </div>
                      <FormTextArea
                        groupClass="grow"
                        inputClasses="rounded-lg py-2 px-2"
                        id="message"
                        placeholder="Type your message"
                        name="message"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button
                        children="Send"
                        rounded="rounded-lg"
                        textSize="sm"
                      />
                    </div>
                  </MyForm>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
