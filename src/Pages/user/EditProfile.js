import { Component } from 'react';
import * as Yup from 'yup';
import DetectOffline from '../../components/features/DetectOffline';
import MyForm from '../../components/form/Form';
import FormText from '../../components/form/FormText';
import FormTextArea from '../../components/form/FormTextArea';
import FullButton from '../../components/form/FullButton';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { MyConfig } from '../../MyConfig';
import Avatar from '../../components/features/Avatar';
import ImageUploading from 'react-images-uploading';
import { BindThis } from 'des-utilities';
import HttpRequest, { ProcessHttpMessage } from 'des-http-processor';
import { toast } from 'react-toastify';
import FormFile from '../../components/form/FormFile';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(sessionStorage.getItem('user'));
    this.state = { user, extraFormData: null };

    BindThis(this, ['onChange']);
  }

  onChange(imageList, addUpdateIndex) {
    const data = new FormData();
    data.append('image', imageList[0].file);

    toast.info('Uploading image');

    console.log('data: ', data);
    // send to database
    HttpRequest(
      MyConfig.apiUrl + 'update-user-image',
      'post',
      data,
      ProcessHttpMessage
    ).then((response) => {
      if (response.type === 'success') {
        toast.success('Image updated successfully');

        // update user in session
        let user = response.data;
        sessionStorage.setItem('user', JSON.stringify(user));

        // update state
        this.setState({ user });
      } else
        toast.error(
          'There was a problem updating your image, please try again later.'
        );
    });
  }

  render() {
    const maxNumber = 1;
    return (
      <>
        <DashboardLayout manageDarkMode={this.manageDarkMode}>
          <div className="inline-flex items-center justify-center bg-gray-100 w-full">
            <div className="inline-flex flex-col space-y-4 items-center justify-end flex-1 px-6 pt-5 pb-10 bg-white">
              {/* profile update form */}
              <MyForm
                formUrl={MyConfig.apiUrl + 'update-user-profile'}
                redirectOnSuccess="/account"
                storeUserData={true}
                showSpinner={true}
                formClass="inline-flex flex-col space-y-4 items-center justify-end flex-1 px-6 pt-5 pb-10 bg-white w-full"
                validationSchema={{
                  name: Yup.string('name must contain valid characters'),
                  bio: Yup.string('bio must contain valid characters'),
                  location: Yup.string(
                    'location must contain valid characters'
                  ),
                  whatsapp: Yup.string(
                    'whatsapp must contain valid characters'
                    // ).matches(
                    //   /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/,
                    //   'Should be a valid phone number'
                  ),
                  twitter: Yup.string(
                    'twitter must contain valid characters'
                  ).url(),
                  instagram: Yup.string(
                    'instagram must contain valid characters'
                  ).url(),
                  facebook: Yup.string(
                    'facebook must contain valid characters'
                  ).url(),
                }}
                initialValues={{
                  name: '',
                  bio: '',
                  location: '',
                  whatsapp: '',
                  twitter: '',
                  instagram: '',
                  facebook: '',
                }}
              >
                <p className="text-xs font-bold leading-none">Edit Profile</p>

                {/* profile picture */}
                <ImageUploading
                  value={this.state.images}
                  onChange={this.onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({ imageList, onImageUpload, errors, dragProps }) => (
                    <>
                      {errors && (
                        <div className="hidden">
                          {errors.maxNumber &&
                            toast.error(
                              'Number of selected images exceed max number'
                            )}
                          {errors.acceptType &&
                            toast.error(
                              'Your selected file type is not allowed'
                            )}
                          {errors.maxFileSize &&
                            toast.error(
                              'Selected file size exceed max file size'
                            )}
                          {errors.resolution &&
                            toast.error(
                              'Selected file is not match your desired resolution'
                            )}
                        </div>
                      )}
                      <div
                        className="relative w-20 lg:w-52 h-20 lg:h-52 cursor-pointer"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <Avatar
                          pic={this.state.user.image}
                          imgSize="w-20 lg:w-52 h-20 lg:h-52"
                          imgRounded="rounded-none"
                        />
                        <div className="flex items-center justify-center flex-1 h-full w-full px-8 py-7 bg-black bg-opacity-60 absolute top-0">
                          <svg
                            className="w-[15%] h-[15%]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.354 4.822c0-.508.412-.92.92-.92h.43a.921.921 0 0 0 .766-.411l.374-.562a.921.921 0 0 1 .767-.41h1.778c.308 0 .595.154.766.41l.375.562c.17.256.458.41.766.41h.429c.508 0 .92.413.92.921V8.97a.921.921 0 0 1-.92.921h-6.45a.921.921 0 0 1-.921-.921V4.822Z"
                              stroke="#FFEBEB"
                              strokewidth="0.921"
                              strokelinecap="round"
                              strokelinejoin="round"
                            />
                            <path
                              d="M7.882 6.665a1.382 1.382 0 1 1-2.764 0 1.382 1.382 0 0 1 2.764 0Z"
                              stroke="#FFEBEB"
                              strokewidth="0.921"
                              strokelinecap="round"
                              strokelinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </ImageUploading>

                <div className="space-y-8 w-full">
                  {/* name */}
                  <FormText
                    label="Name"
                    id="name"
                    name="name"
                    type="text"
                    placeholder={this.state.user.name}
                    groupClass="space-y-3"
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />

                  {/* bio */}
                  <FormTextArea
                    label="Bio"
                    id="bio"
                    name="bio"
                    placeholder={this.state.user.bio || 'bio'}
                    groupClass="space-y-3"
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />

                  {/* Location */}
                  <FormText
                    label="Location"
                    id="location"
                    name="location"
                    type="text"
                    placeholder={this.state.user.location || 'location'}
                    groupClass="space-y-3"
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-4 w-full">
                  {/* Whatsapp */}
                  <FormText
                    label="Whatsapp"
                    id="whatsapp"
                    name="whatsapp"
                    type="text"
                    placeholder={this.state.user.whatsapp || 'whatsapp'}
                    groupClass="flex flex-col space-y-1 items-start justify-start w-full my-2  "
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />

                  {/* twitter */}
                  <FormText
                    label="Twitter"
                    id="twitter"
                    name="twitter"
                    type="text"
                    placeholder={this.state.user.twitter || 'twitter'}
                    groupClass="flex flex-col space-y-1 items-start justify-start w-full my-2 "
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />

                  {/* Instagram */}
                  <FormText
                    label="Instagram"
                    id="Instagram"
                    name="Instagram"
                    type="text"
                    placeholder={this.state.user.instagram || 'Instagram'}
                    groupClass="flex flex-col space-y-1 items-start justify-start w-full my-2 "
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />

                  {/* Facebook */}
                  <FormText
                    label="Facebook"
                    id="Facebook"
                    name="Facebook"
                    type="text"
                    placeholder={this.state.user.facebook || 'Facebook'}
                    groupClass="flex flex-col space-y-1 items-start justify-start w-full my-2 "
                    inputClasses="text-gray-900 w-full border rounded-lg border-gray-900"
                    labelClasses="leading-3 text-gray-800"
                  />
                </div>

                <div className="inline-flex items-center justify-end w-full mt-8">
                  <DetectOffline>
                    <FullButton
                      text="Save"
                      type="submit"
                      textSize="lg"
                      btnClass="px-10 xs:px-20 py-3 text-xs font-semibold leading-3 bg-[#320059] rounded lg:text-xl"
                    />
                  </DetectOffline>
                </div>
              </MyForm>
            </div>
          </div>
        </DashboardLayout>
      </>
    );
  }
}
