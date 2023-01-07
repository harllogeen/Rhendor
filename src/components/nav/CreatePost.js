import React from "react";
import MyForm from "../form/Form";
import FormFile from "../form/FormFile.js";
import Avatar from "../features/Avatar";
import FormTextArea from "./../form/FormTextArea";
import * as Yup from "yup";
import { MyConfig } from "../../MyConfig";
import FullButton from "./../form/FullButton";
import Swal from "sweetalert2";
import { Formik } from 'formik';
import { BindThis, CallParentMethod } from 'des-utilities';


export class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    // set route to redirect to
    let to = "/connect";
    this.state = { to, extraFormData: null };
    BindThis(this, ['handleFileUpload']);
  }

  // On file select (from the pop up)
  handleFileUpload = (e) => {
    e.preventDefault();
    const files = e.target.files;
    // console.log(files);
    console.log(e.target.files);

    let allFiles = [];

    // Check if any file is selected.
    if (files) {
      let formData = null
      if (this.state.extraFormData) {
        formData = this.state.extraFormData;
      } else {
        formData = new FormData();
      }

      console.log(formData)

      // for (const i = 0; i <= files.length - 1; i++) {
      Object.entries(files).map((file) => {
        const fsize = Math.round(file.size / 1024);

        // The size of the file.
        if (fsize >= 2096) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "File too Big, file size should be between 500kb to 2mb!",
            footer: "<p>Try a smaller file</p>",
          });
        }
        // else if (fsize < 500) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "File too small, file size should be between 500kb to 2mb!",
        //     footer: "<p>This would help maintain image quality</p>",
        //   });
        // }
        else {
          // console.log('in here again 2222')
          // console.log(allFiles)

          formData.append('image[]', file[1]);
          // allFiles.push(file[1]);
        }
      })

      this.setState({ extraFormData: formData })
    }
  };

  finishSubmitting() {
    let modal = document.getElementById('sidebarCreatePostModal');
    modal.classList.add('hidden');

    // CallP
    CallParentMethod(this, 'refreshPosts');
  }

  render() {
    return (
      <div className="flex flex-col">
        <div className="px-3">
          <h3 className="text-l font-medium mt-0 py-2">Create post</h3>
        </div>
        <hr />
        <MyForm
          showSpinner={true}
          formId="createPostForm"
          formUrl={MyConfig.apiUrl + "create-post"}
          validationSchema={{
            body: Yup.string().required(),
          }}
          initialValues={{
            body: "",
            // images: "",
          }}
          //   redirectOnSuccess={this.state.to}
          redirectOnSuccess='/connect'
          finishSubmitting={this.finishSubmitting}
          extraFormData={this.state.extraFormData}
        >
          <Avatar
            description={
              <FormTextArea
                inputClasses="white-bg border-none w-full"
                type="password"
                placeholder="What's new?"
                cols="10"
                groupClass=""
                name="body"
                hasMessage={false}
              />
            }
            labelContClass="grow"
          />
          <div className="flex flex-row py-5 space-x-3 items-center flex-wrap">
            <div>
              <svg width={16} height={16} fill="none">
                <path
                  fillRule="evenodd"
                  d="M8 16A8 8 0 108 0a8 8 0 000 16zM2.332 6.027a6.012 6.012 0 011.912-2.706C4.512 3.73 4.974 4 5.5 4A1.5 1.5 0 017 5.5V6a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0114 8c0 .34-.028.675-.083 1H13a2 2 0 00-2 2v2.197A5.973 5.973 0 018 14v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  fill="#1C0C5B"
                />
              </svg>
            </div>
            <div>
              <p className="mt-0">Everyone can view</p>
            </div>
          </div>
          <hr className="py-5" />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-5">
              {/* <FormFile name="images" /> */}
              <div className="cursor-pointer">
                <input
                  name="images"
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  className="inputfile inputfile-5"                //   data-multiple-caption={`${count} files selected`}
                  multiple
                  onChange={this.handleFileUpload}
                  onClick={(e) => {
                    e.target.value = null;
                  }}
                  style={{ display: "none", cursor: "pointer" }}
                />
                <figure>
                  <label htmlFor="icon-button-file">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <path
                        d="M1 13L5.58578 8.41421C6.36683 7.63317 7.63316 7.63316 8.4142 8.41421L13 13M11 11L12.5858 9.41421C13.3668 8.63317 14.6331 8.63316 15.4142 9.41421L17 11M11 5H11.01M3 17H15C16.1045 17 17 16.1046 17 15V3C17 1.89543 16.1045 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z"
                        stroke="#1C0C5B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </figure>
              </div>
              {/* image upload */}
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.17155 14.1716C8.73364 12.6095 11.2663 12.6095 12.8284 14.1716M6.99992 8H7.00992M12.9999 8H13.0099M18.9999 10C18.9999 14.9706 14.9704 19 9.99991 19C5.02937 19 0.999954 14.9706 0.999954 10C0.999954 5.02944 5.02937 1 9.99991 1C14.9704 1 18.9999 5.02944 18.9999 10Z"
                    stroke="#1C0C5B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9999 7V10M15.9999 10V13M15.9999 10H18.9999M15.9999 10H12.9999M10.9999 5C10.9999 7.20914 9.20902 9 6.99987 9C4.79073 9 2.99986 7.20914 2.99986 5C2.99986 2.79086 4.79073 1 6.99987 1C9.20902 1 10.9999 2.79086 10.9999 5ZM0.999855 18C0.999855 14.6863 3.68615 12 6.99987 12C10.3136 12 12.9999 14.6863 12.9999 18V19H0.999855V18Z"
                    stroke="#1C0C5B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <FullButton
                text="Post"
                type="submit"
                contClass="w-24 lg:w-28"
                btnClass="rounded-sm bg-base-200 hover:bg-base-400 focus:ring-base-400 focus:border-base-400 dark:hover:bg-base-300 text-white w-full"
              />
            </div>
          </div>
        </MyForm>
      </div>
    );
  }
}
