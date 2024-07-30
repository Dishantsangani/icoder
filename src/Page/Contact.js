import React, { useState } from "react";
import Navbar from "../Componet/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    firstname: "",
    email: "",
    phonenumber: "",
    Query: "",
    coder: [],
  });

  // Error Handling
  const [error, setError] = useState({});

  // Validation Form's
  const Validationform = () => {
    let newErrors = {};
    if (!formdata.firstname) {
      newErrors.firstname = "Enter Your Name";
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
    if (!formdata.Query) {
      newErrors.Query = "Query is Required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Button
  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = Validationform();
    if (isValid) {
      console.log("Submitted Successfully");
      navigate("/");
    }
    localStorage.setItem("Contact us page","");
    localStorage.setItem("fullname", formdata.firstname);
    localStorage.setItem("email", formdata.email);
    localStorage.setItem("Phonenumber", formdata.phonenumber);
    localStorage.setItem("Query", formdata.Query);
  };

  // Handle changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  // Email Validation
  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  // Phone Number
  const isValidphonenumber = (phonenumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phonenumber);
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h2>Contact Us</h2>
        <form className="form" onSubmit={handlesubmit}>
          {/* Enter Your Name */}
          <div className="form-group">
            <label>Enter Your Name :</label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              value={formdata.firstname}
              className="form-control"
              placeholder="Enter Your Name"
            />
            {error.firstname && <div className="error">{error.firstname}</div>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email address :</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={formdata.email}
              onChange={handleChange}
            />
            {error.email && <div className="error">{error.email}</div>}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phonenumber"
              className="form-control"
              value={formdata.phonenumber}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
            />
            {error.phonenumber && (
              <div className="error">{error.phonenumber}</div>
            )}
          </div>

          {/* Dropdown */}
          <div className="form-group">
            <label>Select your Query :</label>
            <select
              className="form-control"
              name="Query"
              value={formdata.Query}
              onChange={handleChange}
            >
              <option value="">Select a Query</option>
              <option value="Web">Web</option>
              <option value="Tech Stack">Tech Stack</option>
              <option value="Technology">Technology</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {error.Query && <div className="error">{error.Query}</div>}

          {/* Text Area */}
          <div className="form-group">
            <label>Tell us about yourself</label>
            <textarea
              className="form-control"
              rows={3}
              name="description"
              value={formdata.description}
              onChange={handleChange}
              placeholder="Tell us about yourself"
            />
          </div>
          <button className="btn btn-primary w-25 m-2">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
