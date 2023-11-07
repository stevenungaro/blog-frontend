import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  let posts = [
    {
      id: 1,
      title: "Blog Entry #1",
      body: "Blah blah blah yappity yap blog blog blog",
      image: "https://previews.123rf.com/images/ewe/ewe0809/ewe080900216/3554960-blog.jpg",
    },
    {
      id: 2,
      title: "Blog Entry #2",
      body: "Blah blah blah yadda yadda yadda blog blog blog",
      image: "https://previews.123rf.com/images/60dudek/60dudek1901/60dudek190100006/115910734-word-blog.jpg",
    },
    {
      id: 3,
      title: "Blog Entry #3",
      body: "Bloggity blog blog",
      image:
        "https://previews.123rf.com/images/dogfella/dogfella1601/dogfella160100013/50478147-stack-of-small-wood-lettes-as-blog-word.jpg",
    },
    {
      id: 4,
      title: "Blog Entry #4",
      body: "Blah blah blah yappity yap blog blog blog",
      image: "https://previews.123rf.com/images/ewe/ewe0809/ewe080900216/3554960-blog.jpg",
    },
    {
      id: 5,
      title: "Blog Entry #5",
      body: "Blah blah blah yadda yadda yadda blog blog blog",
      image: "https://previews.123rf.com/images/60dudek/60dudek1901/60dudek190100006/115910734-word-blog.jpg",
    },
    {
      id: 6,
      title: "Blog Entry #6",
      body: "Bloggity blog blog",
      image:
        "https://previews.123rf.com/images/dogfella/dogfella1601/dogfella160100013/50478147-stack-of-small-wood-lettes-as-blog-word.jpg",
    },
  ];

  return (
    <div id="contentDiv">
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <PostsNew />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>test</p>
      </Modal>
    </div>
  );
}
