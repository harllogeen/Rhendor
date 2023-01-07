export function checkIfLiked(post, loggedInUser) {
  let likesPost = false;
  
  if (Object.keys(post.likes).length > 0) {
    for (const postUser of post.likes) {
      if (loggedInUser.id === postUser.id) {
        likesPost = true;
        break;
      }
    }
  }
  return likesPost;
}
