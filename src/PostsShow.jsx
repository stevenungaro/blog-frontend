export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <img src={props.post.image} alt="" id="modalImage" />
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" defaultValue={props.post.title} name="title" />
        </div>
        <div>
          Body: <input type="text" defaultValue={props.post.body} name="body" />
        </div>
        <div>
          Image URL: <input type="text" defaultValue={props.post.image} name="image" />
        </div>
        <button type="submit">Edit recipe</button>
      </form>
      <button onClick={handleClick}>Delete Post</button>
    </div>
  );
}
