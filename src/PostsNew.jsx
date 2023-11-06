export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" id="title-input" />
        </div>
        <div>
          Body: <textarea cols="10" rows="3" type="text" id="body-input" />
        </div>
        <div>
          Image: <input type="text" id="image-input" />
        </div>
        <button type="submit">Post New Blog Entry</button>
      </form>
    </div>
  );
}
