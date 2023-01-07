import React from "react";
import EmojiPicker from '../../components/features/EmojiPicker.js';
import Avatar from './../features/Avatar';
import MyForm from '../form/Form'
import FormText from './../form/FormText'
import * as Yup from 'yup';
import { MyConfig } from '../../MyConfig';
import FullButton from './../form/FullButton';
import { BindThis, CallParentMethod } from 'des-utilities';
import Swal from "sweetalert2";
import ImageUploading from "react-images-uploading";


export default class WhatsNewInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEmojiPicker: false,
            images: null,
            extraFormData: null
        }

        BindThis(this, ['refreshPosts', 'handleFileUpload']);
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

    refreshPosts() {
        CallParentMethod(this, 'refreshPosts');
    }

    render() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        // const [images, setImages] = React.useState([]);
        const maxNumber = 69;
        const onChange = (imageList, addUpdateIndex) => {
            // data for submit
            console.log(imageList, addUpdateIndex);
            // setImages(imageList);
            this.setState({ images: imageList })
        };

        return (
            <>
                <div class="px-2 2xs:px-4 xs:px-6 lg:px-0">
                    <div className="flex bg-white shadow border rounded-lg items-center space-x-3 px-3 py-1 border-gray-300 text-gray-900 text-sm lg:rounded-xl lg:shadow-lg w-full lg:px-6 lg:py-1 dark:border-gray-600  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
                        <MyForm
                            extraFormData={this.state.extraFormData}
                            finishSubmitting={this.refreshPosts}
                            showSpinner={true} formId="createPostForm"
                            shouldDisplayInlineResponse={false}
                            formClass="w-full"
                            formUrl={MyConfig.apiUrl + "create-post"}
                            validationSchema={{
                                body: Yup.string()
                                    .required(),
                            }}
                            initialValues={{
                                body: '',
                            }}
                        >
                            <Avatar alt="Dashboard Post Avatar"
                                description={
                                    <div className="flex">
                                        <FormText inputClasses="text-xs font-semibold leading-none text-black text-opacity-40 lg:text-base lg:font-normal bg-transparent border-none focus:ring-transparent focus:border-0 grow py-0 px-3 lg:px-6" type="text" placeholder="What's new?" groupClass="grow" name="body" hasMessage={false} />

                                        {/* post features */}
                                        <div className="space-between inset-y-0 space-x-4 items-center hidden lg:flex">
                                            <div className="relative">
                                                <div className={!this.state.showEmojiPicker ? "hidden" : "absolute bottom-0 w-[200px] h-[200px] max-h-screen"} onBlur={() => this.setState((state) => ({ showEmojiPicker: false }))}>
                                                    <EmojiPicker onEmojiSelect={console.log} />
                                                </div>
                                            </div>
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
                                                        <div className="cursor-pointer">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 16L8.58578 11.4142C9.36683 10.6332 10.6332 10.6332 11.4142 11.4142L16 16M14 14L15.5858 12.4142C16.3668 11.6332 17.6331 11.6332 18.4142 12.4142L20 14M14 8H14.01M6 20H18C19.1045 20 20 19.1046 20 18V6C20 4.89543 19.1045 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="black" stroke-opacity="0.44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </figure>
                                            </div>
                                            <div className="cursor-pointer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="black" stroke-opacity="0.44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="cursor-pointer">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="black" stroke-opacity="0.44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                }
                                labelContClass="grow" imgSize="w-4 h-4 lg:w-6 lg:h-6"
                            />
                        </MyForm>
                    </div>
                </div>
                <hr class="mt-4 border-gray-300" />

                <div class="px-2 2xs:px-4 xs:px-6 flex justify-between lg:hidden">
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
                                <div className="flex items-center space-x-2 p-3 cursor-pointer">
                                    <svg class="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 12L6.43934 8.56066C7.02512 7.97487 7.97487 7.97487 8.56066 8.56066L12 12M10.5 10.5L11.6893 9.31066C12.2751 8.72487 13.2249 8.72487 13.8107 9.31066L15 10.5M10.5 6H10.5075M4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V4.5C15 3.67157 14.3284 3 13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V13.5C3 14.3284 3.67157 15 4.5 15Z" stroke="#419E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="text-xs font-semibold leading-none text-black text-opacity-50">Photo</p>
                                </div>
                            </label>
                        </figure>
                    </div>
                    <div class="flex items-center space-x-2 p-3">
                        <svg class="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 7.5L14.6646 5.7927C15.1633 5.54337 15.75 5.90599 15.75 6.46352V11.5365C15.75 12.094 15.1633 12.4566 14.6646 12.2073L11.25 10.5M3.75 13.5H9.75C10.5784 13.5 11.25 12.8284 11.25 12V6C11.25 5.17157 10.5784 4.5 9.75 4.5H3.75C2.92157 4.5 2.25 5.17157 2.25 6V12C2.25 12.8284 2.92157 13.5 3.75 13.5Z" stroke="#D83232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-xs font-semibold leading-none text-black text-opacity-50">Video</p>
                    </div>
                    <div class="flex items-center space-x-2 p-3">
                        <svg class="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 9H11.25M6.75 12H11.25M12.75 15.75H5.25C4.42157 15.75 3.75 15.0784 3.75 14.25V3.75C3.75 2.92157 4.42157 2.25 5.25 2.25H9.43934C9.63825 2.25 9.82902 2.32902 9.96967 2.46967L14.0303 6.53033C14.171 6.67098 14.25 6.86175 14.25 7.06066V14.25C14.25 15.0784 13.5784 15.75 12.75 15.75Z" stroke="#5D5FEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <p class="text-xs font-semibold leading-none text-black text-opacity-50">Document</p>
                    </div>
                </div>
                {
                    this.state.images !== null &&
                    <div className='w-full overflow-y-hidden overflow-x-auto flex space-x-3'>
                        <ImageUploading
                            value={this.state.images}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (
                                this.state.images.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image.data_url} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <p className='text-red-600' onClick={() => { console.log(index); onImageRemove(index) }}>Remove</p>
                                        </div>
                                    </div>
                                ))
                                // {
                                // }
                            )}
                        </ImageUploading>
                    </div>
                }
            </>
        );
    }
}
