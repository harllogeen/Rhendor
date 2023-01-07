import { useContext, useEffect, useState } from 'react';
import DashboardCardSvg from '../../assets/img/others/card.svg';
import { RiDeleteBinLine } from 'react-icons/ri';
import { DateTime } from 'luxon';
import Avatar from '../features/Avatar';
import MessageContext from '../../context/messageContext';
import { NavLink } from 'react-router-dom';
import { RWebShare } from "react-web-share";
const dayjs = require('dayjs')


export default function PostCard(props) {
  const { post } = props;
  const [showDelete, setShowDelete] = useState(false);
  const { user: loggedInUser, deletePost, likePost } = useContext(MessageContext);
  const postOwner = loggedInUser?.id === post?.user?.id;
  const elementId = `dashboardPost${post.id}`;
  const postId = post.id;

  let likedPost = false;

  const handleDelete = () => {
    deletePost(postId, elementId);
  };

  const handleLike = () => {
    if (likedPost) {
      // set liked post to negative
      post = !likedPost;
    } else {
      // set liked post to negative
      post = !likedPost;

    }
    let response = likePost(postId, `${elementId}Like`);
    console.log(response, "i am here")
  };

  return (
    <>
      <div id={elementId} className="flex items-center">
        <div className="w-full mb-2 bg-white px-5 py-6 lg:rounded-xl border border-gray-200 shadow lg:shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between">
            <NavLink to={`/account/${post.user.id}`}>
              <Avatar
                pic={post.user.image}
                name={post.user.name}
                nameClass="font-bold"
                description={
                  dayjs(post.updated_at).format('ddd, DD MMM, h:mm a')
                }
                descriptionClass="text-sm text-gray-500 dark:text-gray-400"
                contClass="space-x-3 cursor-pointer"
              />
            </NavLink>
            {postOwner && (
              <div
                className="cursor-pointer flex space-x-3"
                onClick={() => setShowDelete((prev) => !prev)}
              >
                {postOwner && showDelete && (
                  <div
                    onClick={handleDelete}
                    className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2"
                  >
                    <RiDeleteBinLine size={20} />

                    <p className="text-xs lg:text-sm ">Delete</p>
                  </div>
                )}
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.74473 7.03233H2.75002M6.44713 7.03233H6.45242M10.1495 7.03233H10.1548M3.27365 7.03233C3.27365 7.32444 3.03685 7.56125 2.74473 7.56125C2.45262 7.56125 2.21582 7.32444 2.21582 7.03233C2.21582 6.74022 2.45262 6.50342 2.74473 6.50342C3.03685 6.50342 3.27365 6.74022 3.27365 7.03233ZM6.97605 7.03233C6.97605 7.32444 6.73924 7.56125 6.44713 7.56125C6.15502 7.56125 5.91822 7.32444 5.91822 7.03233C5.91822 6.74022 6.15502 6.50342 6.44713 6.50342C6.73924 6.50342 6.97605 6.74022 6.97605 7.03233ZM10.6784 7.03233C10.6784 7.32444 10.4416 7.56125 10.1495 7.56125C9.85742 7.56125 9.62062 7.32444 9.62062 7.03233C9.62062 6.74022 9.85742 6.50342 10.1495 6.50342C10.4416 6.50342 10.6784 6.74022 10.6784 7.03233Z"
                    stroke="#111827"
                    stroke-width="1.05783"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="py-3">
            <p className="font-normal break-words text-sm lg:text-base  text-gray-700 dark:text-gray-400">
              {post.body}
            </p>
          </div>

          {/* images */}
          {
            post.has_images === '1' && (
              <div className="lg:pb-5 flex max-h-[271px] justify-center rounded-lg bg-gray-100 backdrop-opacity-10" style={{backgroundImage: post.images[0] ? post.images[0].image : 'none'}}>
                  {post.images?.map((img) => (
                    <div>
                      <img
                        src={img.image}
                        alt="post image"
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                  ))}
                </div>
            )
          // <div className="lg:pb-5 flex">
          // </div>
          }
          <hr className="border-gray-300 dark:border-gray-700/50" />
          <div className="inset-y-0 flex justify-between w-full lg:w-12 pr-3">
            {/* like */}
            <div onClick={handleLike} id={`${postId}Like`} className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2">
              <svg
                width="20"
                height="20"
                className={likedPost ? "text-red-600" : ""}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.15588 3.15466C1.27844 4.0321 1.27844 5.45471 2.15588 6.33215L5.99148 10.1678L9.82702 6.33215C10.7045 5.45471 10.7045 4.0321 9.82702 3.15466C8.94958 2.27722 7.52697 2.27722 6.64953 3.15466L5.99148 3.81277L5.33337 3.15466C4.45593 2.27722 3.03332 2.27722 2.15588 3.15466Z"
                  stroke="#111827"
                  stroke-width="0.99859"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-xs lg:text-sm ">Like</p>
            </div>
            <div className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2">
              <svg
                className="mx-auto"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99428 5.00114H3.99927M5.99146 5.00114H5.99645M7.98864 5.00114H7.99363M4.49357 7.99691H2.49639C1.94489 7.99691 1.4978 7.54982 1.4978 6.99832V3.00396C1.4978 2.45246 1.94489 2.00537 2.49639 2.00537H9.48652C10.038 2.00537 10.4851 2.45245 10.4851 3.00396V6.99832C10.4851 7.54982 10.038 7.99691 9.48652 7.99691H6.99005L4.49357 10.4934V7.99691Z"
                  stroke="#111827"
                  stroke-width="0.99859"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className=" text-xs lg:text-sm ">Comment</p>
            </div>
            <div className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2">
              <svg
                className="mx-auto"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.98579 10.4854L9.7625 10.9319C9.91727 11.0093 10.1011 11.0011 10.2483 10.9101C10.3955 10.8191 10.4851 10.6584 10.4851 10.4854H9.98579ZM1.99707 10.4854H1.49778C1.49778 10.6584 1.58738 10.8191 1.73458 10.9101C1.88178 11.0011 2.06559 11.0093 2.22036 10.9319L1.99707 10.4854ZM5.99143 10.4854L5.76814 10.9319C5.9087 11.0022 6.07415 11.0022 6.21472 10.9319L5.99143 10.4854ZM3.99425 9.48676L4.21754 9.04018C4.07698 8.9699 3.91152 8.9699 3.77096 9.04018L3.99425 9.48676ZM7.98861 9.48676L8.2119 9.04018C8.07133 8.9699 7.90588 8.9699 7.76532 9.04018L7.98861 9.48676ZM7.48931 7.48958C7.48931 7.76534 7.71285 7.98888 7.98861 7.98888C8.26436 7.98888 8.4879 7.76534 8.4879 7.48958H7.48931ZM3.99425 4.99311L3.64119 4.64006C3.44621 4.83504 3.44621 5.15118 3.64119 5.34617L3.99425 4.99311ZM5.13908 6.84405C5.33407 7.03904 5.6502 7.03904 5.84519 6.84405C6.04018 6.64906 6.04018 6.33293 5.84519 6.13794L5.13908 6.84405ZM5.84519 3.84828C6.04018 3.65329 6.04018 3.33716 5.84519 3.14217C5.6502 2.94718 5.33407 2.94718 5.13908 3.14217L5.84519 3.84828ZM2.99566 1.99734H8.9872V0.998752H2.99566V1.99734ZM9.48649 2.49664V10.4854H10.4851V2.49664H9.48649ZM2.49637 10.4854V2.49664H1.49778V10.4854H2.49637ZM6.21472 10.0388L4.21754 9.04018L3.77096 9.93335L5.76814 10.9319L6.21472 10.0388ZM3.77096 9.04018L1.77378 10.0388L2.22036 10.9319L4.21754 9.93335L3.77096 9.04018ZM10.2091 10.0388L8.2119 9.04018L7.76532 9.93335L9.7625 10.9319L10.2091 10.0388ZM7.76532 9.04018L5.76814 10.0388L6.21472 10.9319L8.2119 9.93335L7.76532 9.04018ZM8.9872 1.99734C9.26295 1.99734 9.48649 2.22088 9.48649 2.49664H10.4851C10.4851 1.66938 9.81446 0.998752 8.9872 0.998752V1.99734ZM2.99566 0.998752C2.1684 0.998752 1.49778 1.66938 1.49778 2.49664H2.49637C2.49637 2.22088 2.71991 1.99734 2.99566 1.99734V0.998752ZM8.4879 7.48958V6.99029H7.48931V7.48958H8.4879ZM5.99143 4.49382H3.99425V5.49241H5.99143V4.49382ZM8.4879 6.99029C8.4879 5.61153 7.37019 4.49382 5.99143 4.49382V5.49241C6.81869 5.49241 7.48931 6.16303 7.48931 6.99029H8.4879ZM5.84519 6.13794L4.3473 4.64006L3.64119 5.34617L5.13908 6.84405L5.84519 6.13794ZM4.3473 5.34617L5.84519 3.84828L5.13908 3.14217L3.64119 4.64006L4.3473 5.34617Z"
                  fill="#111827"
                />
              </svg>

              <RWebShare
                data={{
                  text: `${post.user.name}'s post`,
                  url: window.location.href,
                  title: "Check out this post - Rhenda",
                }}
              // onClick={() => console.log("shared successfully!")}
              >
                <p className="text-xs lg:text-sm ">Share</p>
              </RWebShare>
            </div>
          </div>
          <hr className="border-gray-300 dark:border-gray-700/50" />
          <div className="relative hidden">
            <div className="absolute space-between inset-y-0 right-5 flex items-center pr-3 pointer-events-none">
              <svg
                className="mx-auto"
                width="auto"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
                />
                <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              <svg
                className="mx-auto px-3"
                fill="none"
                height="1em"
                viewBox="0 0 24 24"
                width="auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5 19c-1.10457 0-2-.8954-2-2v-10c0-1.10457.89543-2 2-2h4l2 2h4c1.1046 0 2 .89543 2 2v1m-12 9h14c1.1046 0 2-.8954 2-2v-5c0-1.1046-.8954-2-2-2h-10c-1.10457 0-2 .8954-2 2v5c0 1.1046-.89543 2-2 2z"
                  stroke="#374151"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className="mx-auto px-3"
                height="1em"
                width="auto"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m19 14a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" />
                <path d="m26 4h-20a2 2 0 0 0 -2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-20a2 2 0 0 0 -2-2zm0 22h-20v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0l1.59-1.59 5 5zm0-4.83-3.59-3.59a2 2 0 0 0 -2.82 0l-1.59 1.59-5.59-5.59a2 2 0 0 0 -2.82 0l-3.59 3.59v-11.17h20z" />
                <path d="m0 0h32v32h-32z" fill="none" />
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Comment"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function UserPostCard(props) {
  const { post, postOwner } = props;
  const [showDelete, setShowDelete] = useState(false);
  const { user, deletePost, likePost } = useContext(MessageContext);
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const isPostOwner = loggedInUser?.id === postOwner?.id;
  const elementId = `userProfilePost${post.id}`;
  const postId = post.id;

  const handleDelete = () => {
    deletePost(postId, elementId);
  };

  const handleLike = () => {
    likePost(postId, `${elementId}Like`);
  };

  return (
    <>
      <div id={elementId} className="flex sm:space-x-6 p-2 md:p-8 shadow rounded">
        <img className="rounded-full hidden sm:block" src={postOwner.image} style={{ width: 48, height: 48 }} />
        {/* <div className="w-1/6"></div> */}
        <div className="inline-flex flex-col space-y-1 sm:space-y-4 justify-end bg-white rounded-lg grow border-b rounded-none">
          <div className="flex justify-between items-start">
            <div className="flex space-x-2 sm:space-x-0">
              <img className="rounded-full sm:hidden" src={postOwner.image} style={{ width: 48, height: 48 }} />
              <div className="inline-flex flex-col space-y-2 items-start justify-start">
                <p className="text-xs sm:text-lg font-bold leading-normal text-gray-900">{postOwner.name}</p>
                <p className="text-2xs sm:text-base leading-snug text-black text-opacity-50">{
                  dayjs(post.updated_at).format('dddd, DD MMM, h:mm a')
                }
                </p>
              </div>
            </div>
            <div className="cursor-pointer">
              {isPostOwner && (
                <div
                  className="cursor-pointer flex space-x-3"
                  onClick={() => setShowDelete((prev) => !prev)}
                >
                  {isPostOwner && showDelete && (
                    <div
                      onClick={handleDelete}
                      className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2"
                    >
                      <RiDeleteBinLine size={20} />

                      <p className="text-xs lg:text-sm ">Delete</p>
                    </div>
                  )}
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.74473 7.03233H2.75002M6.44713 7.03233H6.45242M10.1495 7.03233H10.1548M3.27365 7.03233C3.27365 7.32444 3.03685 7.56125 2.74473 7.56125C2.45262 7.56125 2.21582 7.32444 2.21582 7.03233C2.21582 6.74022 2.45262 6.50342 2.74473 6.50342C3.03685 6.50342 3.27365 6.74022 3.27365 7.03233ZM6.97605 7.03233C6.97605 7.32444 6.73924 7.56125 6.44713 7.56125C6.15502 7.56125 5.91822 7.32444 5.91822 7.03233C5.91822 6.74022 6.15502 6.50342 6.44713 6.50342C6.73924 6.50342 6.97605 6.74022 6.97605 7.03233ZM10.6784 7.03233C10.6784 7.32444 10.4416 7.56125 10.1495 7.56125C9.85742 7.56125 9.62062 7.32444 9.62062 7.03233C9.62062 6.74022 9.85742 6.50342 10.1495 6.50342C10.4416 6.50342 10.6784 6.74022 10.6784 7.03233Z"
                      stroke="#111827"
                      stroke-width="1.05783"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs sm:text-base leading-snug text-black text-opacity-50">{post.body}</p>

          {/* images */}
          {
            post.has_images === '1' && (
              <div className="lg:pb-5 flex">
                <div className="lg:pb-5 flex">
                  {post.images?.map((img) => (
                    <div>
                      <img
                        src={img.image}
                        alt="post image"
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          }
          <div className="inline-flex items-center justify-between py-2 border-black border-opacity-40 w-full">
            <div className="flex space-x-1 sm:space-x-5 items-center justify-center">
              <div className="flex items-start justify-start">
                <img className="w-3 sm:w-5 lg:w-8 h-full rounded-full" src="https://via.placeholder.com/30x30" />
                <img className="w-3 sm:w-5 lg:w-8 h-full rounded-full" src="https://via.placeholder.com/30x30" />
                <img className="w-3 sm:w-5 lg:w-8 h-full rounded-full" src="https://via.placeholder.com/30x30" />
                <img className="w-3 sm:w-5 lg:w-8 h-full rounded-full" src="https://via.placeholder.com/30x30" />
              </div>
              <p className="text-2xs sm:text-xs lg:text-base text-gray-900">+200 Likes</p>
            </div>
            <div className="flex space-x-2 sm:space-x-4 items-center justify-center">
              <div className="flex space-x-1 sm:space-x-2 items-center justify-center cursor-pointer">
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.67157 1.17157C3.23366 -0.390524 5.76631 -0.390524 7.32841 1.17157L8.49998 2.34315L9.67155 1.17157C11.2336 -0.390524 13.7663 -0.390524 15.3284 1.17157C16.8905 2.73367 16.8905 5.26633 15.3284 6.82843L8.49998 13.6569L1.67157 6.82843C0.109477 5.26633 0.109477 2.73367 1.67157 1.17157Z" fill="#C5A2F0" />
                </svg>
                <p className="text-2xs sm:text-xs lg:text-base leading-snug text-gray-900">Like</p>
              </div>
              <div className="flex space-x-1 sm:space-x-2 items-center justify-center cursor-pointer">
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 7H6.51M10.5 7H10.51M14.5 7H14.51M7.5 13H3.5C2.39543 13 1.5 12.1046 1.5 11V3C1.5 1.89543 2.39543 1 3.5 1H17.5C18.6046 1 19.5 1.89543 19.5 3V11C19.5 12.1046 18.6046 13 17.5 13H12.5L7.5 18V13Z" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-2xs sm:text-xs lg:text-base leading-snug text-gray-900">Comment</p>
              </div>
              <div className="flex space-x-1 sm:space-x-2 items-center justify-center cursor-pointer">
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 6C15.1569 6 16.5 4.65685 16.5 3C16.5 1.34315 15.1569 0 13.5 0C11.8431 0 10.5 1.34315 10.5 3C10.5 3.12548 10.5077 3.24917 10.5227 3.37061L5.58259 5.84064C5.04303 5.32015 4.3089 5 3.5 5C1.84315 5 0.5 6.34315 0.5 8C0.5 9.65685 1.84315 11 3.5 11C4.30892 11 5.04306 10.6798 5.58263 10.1593L10.5227 12.6293C10.5077 12.7508 10.5 12.8745 10.5 13C10.5 14.6569 11.8431 16 13.5 16C15.1569 16 16.5 14.6569 16.5 13C16.5 11.3431 15.1569 10 13.5 10C12.6911 10 11.957 10.3201 11.4174 10.8406L6.47733 8.37061C6.49229 8.24917 6.5 8.12548 6.5 8C6.5 7.8745 6.49229 7.7508 6.47733 7.62934L11.4174 5.15932C11.9569 5.67984 12.6911 6 13.5 6Z" fill="#666666" />
                </svg>
                <RWebShare
                  data={{
                    text: `${post.user.name}'s post`,
                    url: window.location.href,
                    title: "Check out this post - Rhenda",
                  }}
                // onClick={() => console.log("shared successfully!")}
                >
                  <p className="text-2xs sm:text-xs lg:text-base leading-snug text-gray-900">Share</p>
                </RWebShare>
              </div>
            </div>
          </div></div></div>
    </>
  );
}
