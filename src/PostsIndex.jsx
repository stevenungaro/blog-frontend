import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <input type="text" list="titles" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {searchFilter === "" ? null : props.posts.map((post) => <option key={post.id} value={post.title} />)}
      </datalist>
      <div className="row row-cols-3">
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
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
    </div>
  );
}
