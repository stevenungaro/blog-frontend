export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Steves Blog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                All Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div>
    //   <header>
    //     <a href="#"> home </a>
    //     <a href="#posts-index">all posts</a>
    //     <a href="#posts-new">new post</a>
    //   </header>
    // </div>
  );
}
