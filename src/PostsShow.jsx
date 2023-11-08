export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <img id="modalImage" src={props.post.image} />
      <p>{props.post.body}</p>
    </div>
  );
}
