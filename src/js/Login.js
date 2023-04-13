<<<<<<< HEAD
import React, { useState } from "react";
import { createSession, getUser, getUsers } from "./services/UsersService";
=======
import React, {useState} from 'react';
import bgimg from '../img/background.png';
import { createSession, getUser, getUsers } from './services/UsersService';
>>>>>>> adb83ce6537d6a4fadda0993daa956dfa1c53bc6

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const formSubmitHandler = () => {

          getUser(username, password).then((response) => {
            if (response.data == '') {
                console.log(response.data, "if");
                return;
            }
                createSession(response.data);
                window.location.reload();
                console.log("outside if");
          }).catch(response => {
            console.log(response);
          });
    };

<<<<<<< HEAD
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
          <img src={process.env.PUBLIC_URL + "/img/background.png"} />
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
=======
    return (
        <React.Fragment>
            <div className = "row">
                <div className = "col-md-6"> <br /> <br /> <br /> <br />
                    <img src = {bgimg} />
                </div>
                <div className = "col-md-2"></div>
                <div className = "col-md-3"> <br /> <br/><br /> <br/> <br/> <br/> 
                    <div className = "card w-auto h-75 float-right" style = {{borderColor: "#C5D8A4", borderTopRightRadius: "0px", borderTopLeftRadius: "30px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "30px"}}>
                        <div className = "card-body">
                            <center>
                                <strong> <h1 style = {{color: '#534340'}}> Login  </h1> </strong> <br /> <br />
                            </center>
                            <div className = "form-group">
                                <form method = "get" action = "#"> 
                                    <label> Employee ID </label> <br />
                                    <input value={username} onChange={(event) => {setUsername(event.target.value)}} className = "form-control w-80" placeholder = "Enter Employee ID" /> <br />
                                    <label> Password </label> <br />
                                    <input value={password} onChange={(event) => {setPassword(event.target.value)}} className = "form-control" type = "password" placeholder = "Enter Password" />
                                    <a href = "" style = {{color: '#BB9981', float: 'right'}}> Forgot password? </a> <br /> <br />
                                    <center> <button onClick={formSubmitHandler} type = "button" className = "btn btn-outline-success w-50" style = {{float: 'right'}}> LOGIN </button> </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> adb83ce6537d6a4fadda0993daa956dfa1c53bc6
            </div>
        </React.Fragment>
    )
}

export default Login;