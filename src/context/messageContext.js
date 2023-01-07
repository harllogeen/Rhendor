import React, { createContext, useState } from 'react';
import HttpRequest from 'des-http-processor';
import { ProcessHttpMessage } from 'des-http-processor';
import { MyConfig } from '../MyConfig';
import { toast } from 'react-toastify';
import axios from 'axios';

const MessageContext = createContext({});

export const axiosInstance = axios.create({
  baseURL: MyConfig.apiUrl,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer 14154151',
    'Content-Type': 'application/json',
  },
});

export const MessageContextProvider = (props) => {
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState();
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const updateState = () => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
    setToken(sessionStorage.getItem('token'));
  };

  // fetch messages
  // http://localhost:8000/api/v1/user-posts

  const getUserPosts = async () => {
    setLoading(true);
    const res = await fetch(`${MyConfig.apiUrl}user-posts`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setUserPosts(data.data);

    // axios.get(MyConfig.apiUrl + 'user-posts').then((res) => {
    //   // console.log(res);
    // });
  };

  const createPost = async (post) => {
    setLoading(true);
    console.log('body: ', post);
    const res = await fetch(`${MyConfig.apiUrl}create-post`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    console.log(data);
    // setUserPosts([...userPosts, data.data]);
    setLoading(false);
    let message = data.message;
    let status = data.status;
    if (status === 'Success') {
      toast.success(message);
    } else if (message.type === 'Warning') {
      toast.warn(message);
    } else if (message.type === 'Error') {
      toast.error(message);
    }
    console.log('reloading page');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const getAllMessages = async () => {
    setLoading(true);
    const res = await fetch(`${MyConfig.apiUrl}get-messages?per_page=1`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    // console.log(data.data);
    setMessages(data.data);
  };

  const removeLike = async (postId, elementId, setLikedPost) => {
    setLoading(true);
    await HttpRequest(
      MyConfig.apiUrl + 'remove-like',
      'post',
      { id: postId },
      null
    ).then((response) => processResponse(response, setLikedPost, false, true));
  };

  const likePost = async (postId, elementId, setLikedPost) => {
    setLoading(true);
    let result = '';
    await HttpRequest(
      MyConfig.apiUrl + 'like-post',
      'post',
      { id: postId },
      null
    ).then((response) => processResponse(response, setLikedPost));
  };

  const deletePost = async (postId, elementId) => {
    setLoading(true);
    toast.warn('Deleting...');
    await HttpRequest(
      MyConfig.apiUrl + 'delete-post',
      'post',
      { id: postId },
      null
    ).then((response) => {
      let message = response.response.data.message;
      let status = response.type;
      if (status === 'success') {
        // delete from dom
        let post = document.getElementById(elementId);
        post.parentNode.removeChild(post);

        toast.success(message);
      } else if (message.type === 'warning') {
        toast.warn(message);
      } else if (message.type === 'error') {
        toast.error(message);
      } else toast.info(message);
    });
  };

  function processResponse(response, setLikedPost, ifStatusIsTrue = true, ifStatusIsFalse = false) {

    if (response.type === 'success') {
      setLikedPost(ifStatusIsTrue);
    } else {
      setLikedPost(ifStatusIsFalse);
      // display error messages
      processMessage(response.response.data.message);
    }
  }

  // display error if any
  function processMessage(message) {
    if (message.type === 'warning') {
      toast.warn(message);
    } else if (message.type === 'error') {
      toast.error(message);
    } else
      toast.info(message);
  }
  // https://backend.myrhenda.com/api/v1/search?search=first&type=service

  return (
    <MessageContext.Provider
      value={{
        getAllMessages,
        likePost,
        removeLike,
        deletePost,
        createPost,
        updateState,
        getUserPosts,
        userPosts,
        loading,
        messages,
        user,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );

};

export default MessageContext;
