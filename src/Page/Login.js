import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  // Email Handler
  function emailhandler(val) {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailerror(false);
    } else {
      setEmailerror(true);
    }
    setEmail(val);
  }

  // Password Handler
  function passwordhandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(item);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (emailerror || passworderror) {
      return;
    }
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("Login Data", JSON.stringify(result.data));
        localStorage.setItem("Login", true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    let login = localStorage.getItem("Login");
    if (login) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <form className="form-signin" onSubmit={handlesubmit}>
        <img
          className="mb-2 mt-5 "
          src="icoderbg.png"
          alt=""
          width={300}
          height={100}
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        {/* Email */}
        <input
          type="email"
          id="inputEmail"
          name="email"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => emailhandler(e.target.value)}
        />
        {emailerror ? (
          <span style={{ color: "red" }}>Email Is Not To Valid</span>
        ) : (
          ""
        )}
        {/* Password */}
        <input
          type="password"
          id="inputPassword"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => passwordhandler(e)}
        />
        {passworderror ? (
          <span style={{ color: "red" }}>password Is Not To Valid</span>
        ) : (
          ""
        )}
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5">© 2024Dishant Sangani| All rights reserved.</p>
      </form>
    </>
  );
}

export default Login;
