import React, { Component, useContext, useEffect } from 'react';
import axios from "axios";
import { BindThis } from 'des-utilities';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import PostCard from '../../components/pageComponent/PostCard';
import EmojiPicker from '../../components/features/EmojiPicker.js';
import HttpRequest from 'des-http-processor';
import { MyConfig } from '../../MyConfig';
import WhatsNewInput from '../../components/pageComponent/WhatsNewInput';
import { Link } from 'react-router-dom';
import Avatar from '../../components/features/Avatar';
import DuplicateItems from '../../components/features/DuplicateItems';
import FormFile from '../../components/form/FormFile';
import InfiniteScroll from 'react-infinite-scroller';
import MessageContext from '../../context/messageContext';
import { useParams } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmojiPicker: false,
      posts: [],
    };

    BindThis(this, ['loadMore', 'postLoader', 'refreshPosts']);
  }

  componentDidMount() {
    this.postLoader();
  }

  postLoader(page = null) {
    let response = '';

    // if there is a next page
    if (this.state.next_page_url && this.state.next_page_url !== null) {
      HttpRequest(this.state.next_page_url, 'get', null).then((response) => {
        this.setState((state) => ({
          posts: [...state.posts, ...response.response.data.data.data],
          current_page: response.response.data.data.current_page,
          last_page: response.response.data.data.last_page,
          next_page_url: response.response.data.data.next_page_url,
          hasMore:
            response.response.data.data.last_page !==
            response.response.data.data.current_page,
        }));
      });
      // else load first page
    } else {
      HttpRequest(MyConfig.apiUrl + 'posts', 'get', null).then((response) => {
        this.setState({
          posts: response.response.data.data.data,
          current_page: response.response.data.data.current_page,
          last_page: response.response.data.data.last_page,
          next_page_url: response.response.data.data.next_page_url,
          hasMore:
            response.response.data.data.last_page !==
            response.response.data.data.current_page,
        });
      });
    }
  }

  // clear interval
  componentWillUnmount() {
    clearInterval(this.refreshListInterval);
  }

  // refresh the posts list
  refreshPosts() {
    this.state.next_page_url = null;
    this.loadMore();
  }

  // load more posts
  loadMore(nextPage) {
    this.postLoader();
  }

  loadPopUp() {
    let modal = '';
    modal = document.getElementById('sidebarCreatePostModal')

    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden')
      modal.classList.add('flex')
    }
  }

  render() {
    return (
      <DashboardLayout>
        {/* search bar */}
        <div className="lg:flex lg:space-x-4 lg:mt-4">
          <div className="lg:w-4/6">
            <div className=""></div>
            <div class="white-bg pt-4 lg:pt-0 lg:bg-transparent" onClick={this.loadPopUp}>
              <WhatsNewInput refreshPosts={this.refreshPosts} />
            </div>

            {/* posts */}
            {this.state.posts ? (
              <div className="flex flex-col mt-2">
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadMore}
                  hasMore={this.state.hasMore}
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                  {this.state.posts?.map((post) => (
                    <PostCard post={post} />
                  ))}
                  {/* {items} */}
                </InfiniteScroll>
              </div>
            ) : (
              <p>There are no posts at the moment</p>
            )}

            {/* <PostCard /> */}
          </div>

          {/* Chat Box*/}
          <ChatBox />
        </div>
      </DashboardLayout>
    );
  }
}

const ChatBox = () => {
  const { messages, updateState, getAllMessages } = useContext(MessageContext);

  const message = messages?.messages?.data;

  useEffect(() => {
    updateState();
    getAllMessages();
    // console.log(token);
    // getUserPosts();
  }, []);

  // console.log(message);

  return (
    <div className="lg:w-2/6 max-w-[340px] hidden lg:inline-block">
      <div className="white-bg shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl overflow-hidden">
        <div className="flex pt-3 px-5 justify-between flex-row pb-8">
          <div>
            <h4 className="mt-0">Chats</h4>
          </div>
          <div>
            <div
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="text-gray-500 dark:text-gray-400  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
              type="button"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clipRule="evenodd"
                  d="M9.492 0.0544664C9.906 0.0544664 10.242 0.390466 10.242 0.804467C10.242 1.21847 9.906 1.55447 9.492 1.55447H5.753C3.169 1.55447 1.5 3.32447 1.5 6.06347V14.3775C1.5 17.1165 3.169 18.8865 5.753 18.8865H14.577C17.161 18.8865 18.831 17.1165 18.831 14.3775V10.3495C18.831 9.93547 19.167 9.59947 19.581 9.59947C19.995 9.59947 20.331 9.93547 20.331 10.3495V14.3775C20.331 17.9715 18.018 20.3865 14.577 20.3865H5.753C2.312 20.3865 0 17.9715 0 14.3775V6.06347C0 2.46947 2.312 0.0544664 5.753 0.0544664H9.492ZM18.2016 0.933067L19.4186 2.15007C20.0116 2.74207 20.3376 3.52907 20.3366 4.36707C20.3366 5.20507 20.0106 5.99107 19.4186 6.58207L11.9096 14.0911C11.3586 14.6421 10.6246 14.9461 9.8446 14.9461H6.0986C5.8966 14.9461 5.7026 14.8641 5.5616 14.7191C5.4206 14.5751 5.3436 14.3801 5.3486 14.1771L5.4426 10.3981C5.4616 9.64607 5.7646 8.93907 6.2966 8.40607H6.2976L13.7706 0.933067C14.9926 -0.286934 16.9796 -0.286934 18.2016 0.933067ZM13.155 3.66907L7.3576 9.46707C7.0986 9.72607 6.9516 10.0701 6.9426 10.4351L6.8676 13.4461H9.8446C10.2246 13.4461 10.5806 13.2991 10.8496 13.0301L16.682 7.19607L13.155 3.66907ZM14.8306 1.99407L14.215 2.60807L17.742 6.13607L18.3586 5.52107C18.6666 5.21307 18.8366 4.80307 18.8366 4.36707C18.8366 3.93007 18.6666 3.51907 18.3586 3.21107L17.1416 1.99407C16.5046 1.35907 15.4686 1.35907 14.8306 1.99407Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex space-y-4 flex-col w-full white-gray-bg">
          {message?.length > 0 ? (
            <Link className="cursor-pointer" to="/messages">
              <Avatar
                pic=""
                name="Test user"
                descriptionClass="text-sm light-gray-text"
                nameClass="text-lg"
                description="This is a Dummy Chat Messsage."
                contClass="p-3 px-5 space-x-2"
                imgSize="w-14 h-14"
                imgRounded="rounded-lg"
              />
            </Link>
          ) : (
            <div className="w-full h-10 text-sm text-center">
              No Messages...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default (props) => <Dashboard {...props} params={useParams()} />;
