import axios from "axios";
import { useState } from "react";

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
        setStatus(error.response.status);
        console.log(error.response.data.errors);
      });
  };

  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  return (
    <div id="signup">
      <h1>Create an Account</h1>
      {status ? <img src={`https://http.cat/${status}`} /> : null}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name:
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <small className={name.length > 20 ? "text-danger" : "text-dark"}>
            {20 - name.length} characters remaining
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email:
          </label>
          <input name="email" type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Password:
          </label>
          <input name="password" type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Confirm Password:
          </label>
          <input name="password_confirmation" type="password" className="form-control" />
        </div>
        <button type="submit">Sign Me Up!</button>
      </form>
    </div>
  );
}
