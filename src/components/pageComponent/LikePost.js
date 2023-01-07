// Like button display
export function LikePost({ handleLike, likedPost, postId }) {
  return (
    <div
      onClick={handleLike}
      id={`${postId}Like`}
      className="flex items-center cursor-pointer white-gray-bg-hover hover:text-base-700 p-3 space-x-2"
    >
      <svg
        width="20"
        height="20"
        // className={likedPost ? "text-red-600" : ""}
        viewBox="0 0 12 12"
        fill={likedPost ? "red" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.15588 3.15466C1.27844 4.0321 1.27844 5.45471 2.15588 6.33215L5.99148 10.1678L9.82702 6.33215C10.7045 5.45471 10.7045 4.0321 9.82702 3.15466C8.94958 2.27722 7.52697 2.27722 6.64953 3.15466L5.99148 3.81277L5.33337 3.15466C4.45593 2.27722 3.03332 2.27722 2.15588 3.15466Z"
          stroke={likedPost ? "red" : "#111827"}
          stroke-width="0.99859"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>

      <p className="text-xs lg:text-sm ">Like</p>
    </div>
  );
}
