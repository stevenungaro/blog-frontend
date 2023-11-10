export function PostsIndex(props) {
  console.log(props);

  return (
    // <div id="posts-index">
    //   <h1>All posts</h1>
    //   <div className="cards">
    //     {props.posts.map((post) => (
    //       <div key={post.id} className="card">
    //         <h2>{post.title}</h2>
    //         <p>{post.body}</p>
    //         <img src={post.image} alt="blog post" />
    //         <button onClick={() => props.onShowPost(post)}>more info</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="row row-cols-3">
      {props.posts.map((post) => (
        <div key={post.id} className="col">
          <div className="card">
            <img className="img-thumbnail" src={post.image} alt="blog post" />
            <div>
              <h5 className="card-title">{post.title}</h5>
              {/* <p className="card-text">{post.body}</p> */}
              <button type="button" className="btn btn-lg btn-light" onClick={() => props.onShowPost(post)}>
                more info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
