import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  let key = 0
  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {posts.map(v => <Post key={key++} post={v} likePost={likePost}/>)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
