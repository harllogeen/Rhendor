import { RWebShare } from "react-web-share";

export function SharePost({ post, title = "Check out this post - Rhenda", children }) {
  return (
    <RWebShare
      data={{
        text: `${post.user.name}'s post`,
        url: window.location.href,
        title,
      }}
    >
      {children}
    </RWebShare>
  );
}
