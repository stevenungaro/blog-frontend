import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import axios from "axios";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setIsPostsShowVisible(response.data);
      setPosts(response.data);
    });
  };

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div id="contentDiv">
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <PostsNew />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>test</p>
      </Modal>
    </div>
  );
}
