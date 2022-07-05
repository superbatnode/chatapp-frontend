import { useState } from "react";

export default function Register(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    if(username.length!==0 &&  password.length!=0)
    props.data({username:username.trim(), password})
    setPassword("");
    setUserName("");
  };
  return (
    <div>
      <div class="bg-light p-5">
        <form id="login-form" class="text-left" onSubmit={formHandler}>
          <div class="mb-3">
            <label htmlFor="lg_username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="lg_username"
              placeholder="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="lg_password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="lg_password"
              name="lg_password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            save
          </button>
        </form>
      </div>
    </div>
  );
}
