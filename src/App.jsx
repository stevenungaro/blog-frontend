// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" className="title-input" />
        </div>
        <div>
          Body: <input type="text" className="body-input" />
        </div>
        <div>
          Image: <input type="text" className="image-input" />
        </div>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="blog post" />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

function Content() {
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
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
