// toggle like functionality
export function ToggleLike(setLikedPost, likedPost, removeLike, postId, elementId, likePost) {
  return () => {
    // set liked post to opposite
    setLikedPost(!likedPost);

    // remove like
    if (likedPost)
      removeLike(postId, `${elementId}Like`, setLikedPost);

    else
      likePost(postId, `${elementId}Like`, setLikedPost);
  };
}
