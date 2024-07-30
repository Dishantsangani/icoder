import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Form Data
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    age: "",
    gender: "",
    interests: [],
    birthdate: "",
  });

  const [error, setError] = useState({});
  // Validation Form's
  const Validationform = () => {
    let newErrors = {};

    if (!formdata.firstname) {
      newErrors.firstname = "First Name is Required";
    }
    if (!formdata.lastname) {
      newErrors.lastname = "Last Name is Required";
    }
    if (!formdata.email) {
      newErrors.email = "Email is Required";
    } else if (!isValidEmail(formdata.email)) {
      newErrors.email = "Invalid Email Format";
    }
    if (!formdata.phonenumber) {
      newErrors.phonenumber = "Phone Number is Required";
    } else if (!isValidphonenumber(formdata.phonenumber)) {
      newErrors.phonenumber = "Phone Number Must Be 10 Digits";
    }
    if (!formdata.password) {
      newErrors.password = "Password is Required";
    } else if (!isValidPassword(formdata.password)) {
      newErrors.password =
        "Password Must Be At Least 8 Characters Long And Contain At Least One Symbol, One Number, One Uppercase, and One Lowercase Letter";
    }
    if (!formdata.confirmpassword) {
      newErrors.confirmpassword = "Confirm Password is Required";
    } else if (formdata.confirmpassword !== formdata.password) {
      newErrors.confirmpassword = "Passwords Must Match";
    }
    if (!formdata.age) {
      newErrors.age = "Age is Required";
    } else if (!isValidAge(formdata.age)) {
      newErrors.age =
        "You Must Be At Least 18 Years Old And Not Older Than 100 Years";
    }
    if (!formdata.gender) {
      newErrors.gender = "Gender is Required";
    }
    if (formdata.interests.length === 0) {
      newErrors.interests = "Select At Least One Interest";
    }
    if (!formdata.birthdate) {
      newErrors.birthdate = "Date Of Birth is Required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Submit Button Form
  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = Validationform();
    if (isValid) {
      console.log("Form Submitted");
      navigate("/");
    }
    localStorage.setItem("firstname", formdata.firstname);
    localStorage.setItem("lastname", formdata.lastname);
    localStorage.setItem("email", formdata.email);
    localStorage.setItem("phonenumber", formdata.phonenumber);
    localStorage.setItem("password", formdata.password);
    localStorage.setItem("confirmpassword", formdata.confirmpassword);
    localStorage.setItem("age", formdata.age);
    localStorage.setItem("gender", formdata.gender);
    localStorage.setItem("interests", formdata.interests);
    localStorage.setItem("Date Of Birth", formdata.birthdate);
  };
  // Onchange Events
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  // Checkbox Validation
  const handlecheckboxchange = (e) => {
    const { name, checked } = e.target;
    let updateinterest = [...formdata.interests];
    if (checked) {
      updateinterest.push(name);
    } else {
      updateinterest = updateinterest.filter((interest) => interest !== name);
    }
    setFormdata({
      ...formdata,
      interests: updateinterest,
    });
  };
  // Email Validation
  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  // Phone Number Validation
  const isValidphonenumber = (phonenumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phonenumber);
  };
  // Password Validation
  const isValidPassword = (password) => {
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };
  // Age Validation
  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          iCoder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                href="/"
              >
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/service" ? "active" : ""
                }`}
                href="/service"
              >
                Service
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="mx-1 d-grid gap-2 d-md-block">
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#signupModal"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>

      {/* Sign Up Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">
                Get an iCoder Account
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* Form Body */}
            <div className="modal-body">
              <form onSubmit={handlesubmit}>
                {/* FirstName */}
                <div className="form-group">
                  <label>FirstName :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="Enter Your FirstName"
                    value={formdata.firstname}
                    onChange={handleChange}
                  />
                  {error.firstname && (
                    <div className="error">{error.firstname}</div>
                  )}
                </div>
                {/* LastName */}
                <div className="form-group">
                  <label>LastName :</label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter Your LastName"
                    value={formdata.lastname}
                    onChange={handleChange}
                  />
                  {error.lastname && (
                    <div className="error">{error.lastname}</div>
                  )}
                </div>
                {/* Email */}
                <div className="form-group">
                  <label>Email :</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  {error.email && <div className="error">{error.email}</div>}
                </div>
                {/* Phone Number */}
                <div className="form-group">
                  <label>PhoneNumber :</label>
                  <input
                    type="text"
                    name="phonenumber"
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                    value={formdata.phonenumber}
                    onChange={handleChange}
                  />
                  {error.phonenumber && (
                    <div className="error">{error.phonenumber}</div>
                  )}
                </div>
                {/* Password */}
                <div className="form-group">
                  <label>Password :</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                  />
                  {error.password && (
                    <div className="error">{error.password}</div>
                  )}
                </div>
                {/* Confirm Password */}
                <div className="form-group">
                  <label>Confirm Password :</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    placeholder="Confirm Your Password"
                    value={formdata.confirmpassword}
                    onChange={handleChange}
                  />
                  {error.confirmpassword && (
                    <div className="error">{error.confirmpassword}</div>
                  )}
                </div>
                {/* Age */}
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={formdata.age}
                    onChange={handleChange}
                    placeholder="Enter Your Age"
                  />
                  {error.age && <div className="error">{error.age}</div>}
                </div>
                {/* Gender */}
                <div className="form-group">
                  <label>Gender:</label>
                  <select
                    name="gender"
                    className="form-control"
                    value={formdata.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male" className="form-control">
                      Male
                    </option>
                    <option value="female" className="form-control">
                      Female
                    </option>
                    <option value="other" className="form-control">
                      Other
                    </option>
                  </select>
                  {error.gender && <div className="error">{error.gender}</div>}
                </div>
                {/* Interests */}
                <div className="form-group">
                  <label>Interests:</label>
                  <div className="form-control">
                    <label className="mr-2">
                      <input
                        type="checkbox"
                        name="coding"
                        className="mr-1"
                        checked={formdata.interests.includes("coding")}
                        onChange={handlecheckboxchange}
                      />
                      Coding
                    </label>
                    <label className="mr-2">
                      <input
                        type="checkbox"
                        name="sports"
                        className="mr-1"
                        checked={formdata.interests.includes("sports")}
                        onChange={handlecheckboxchange}
                      />
                      Sports
                    </label>
                    <label className="mr-2">
                      <input
                        type="checkbox"
                        name="reading"
                        className="mr-1"
                        checked={formdata.interests.includes("reading")}
                        onChange={handlecheckboxchange}
                      />
                      Reading
                    </label>
                    {error.interests && (
                      <div className="error">{error.interests}</div>
                    )}
                  </div>
                </div>
                {/* Date Of Birth */}
                <div className="form-group mt-4">
                  <label>Date Of Birth:</label>
                  <div>
                    <input
                      type="date"
                      name="birthdate"
                      value={formdata.birthdate}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {error.birthdate && (
                      <div className="error">{error.birthdate}</div>
                    )}
                  </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
