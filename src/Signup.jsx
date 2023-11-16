import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handle submit done");
    axios
    .post("http://localhost:3000/users.json", params)
    .then((response) => {
      console.log(response.data);
      event.target.reset();
    })
    .catch((error) => {
      console.log(error.response.data.errors);
    });
};

  return (
    <div id="signup">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name:
          </label>
          <input name="name" type="text" className="form-control" id="formGroupExampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email:
          </label>
          <input name="email" type="email" className="form-control" id="formGroupExampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Password:
          </label>
          <input name="password" type="password" className="form-control" id="formGroupExampleInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Confirm Password:
          </label>
          <input name="password_confirmation" type="password" className="form-control" id="formGroupExampleInput" />
        </div>
        <button type="submit">Sign Me Up!</button>
      </form>
    </div>
  );
}
