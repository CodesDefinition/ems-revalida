import React, { useState } from "react";
import bgimg from "../img/background.png";
import { createSession, getUser, getUsers } from "./services/UsersService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = () => {
    let payload = {
      username: username,
      password: password,
    };

    getUser(username, password)
      .then((response) => {
        if (response.data == "") {
          return;
        }
        createSession(response.data);
        window.location.reload();
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          {" "}
          <br /> <br /> <br /> <br />
          <img src={bgimg} />
        </div>
        <div className="col-md-5">
          {" "}
          <br />
          <div
            className="card"
            style={{ marginLeft: "25vh", marginTop: "20vh" }}
          >
            <div className="card-body">
              <center>
                <strong>
                  {" "}
                  <h1 style={{ color: "#534340" }}> Login </h1>{" "}
                </strong>{" "}
                <br /> <br />
              </center>
              <div className="form-group">
                <form method="get" action="#">
                  <input
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                    className="form-control w-80"
                    placeholder="Enter Employee ID"
                  />{" "}
                  <br />
                  <input
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                  />
                  <a href="" style={{ color: "#BB9981", float: "right" }}>
                    {" "}
                    Forgot password?{" "}
                  </a>{" "}
                  <br /> <br />
                  <center>
                    {" "}
                    <button
                      onClick={formSubmitHandler}
                      className="btn btn-outline-success w-50"
                      style={{ float: "right" }}
                    >
                      {" "}
                      LOGIN{" "}
                    </button>{" "}
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
