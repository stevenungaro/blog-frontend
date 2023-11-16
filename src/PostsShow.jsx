export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post.id);
  };

  return (
    <div id="posts-show">
      <div className="row">
        <div className="col-3">
          <h2>Title: {props.post.title}</h2>
        </div>
        <div className="col-9">
          <img src={props.post.image} alt="" id="modalImage" />
        </div>
      </div>
      <p>{props.post.body}</p>
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
        <button className="btn btn-primary" type="submit">
          Edit recipe
        </button>
      </form>
      <button className="btn btn-danger" onClick={handleClick}>
        Delete Post
      </button>
    </div>
  );
}
