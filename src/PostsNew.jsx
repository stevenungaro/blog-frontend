export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit done");
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title:
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="enter blog post title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Body:
          </label>
          <input
            name="body"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="enter blog post here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Image:
          </label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="enter image url here"
          />
        </div>
        <button type="submit">Post New Blog Entry</button>
      </form>
    </div>
  );
}
