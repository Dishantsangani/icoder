import React, { useState } from "react";
import "./Form.css";

function Form() {
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

  // Submit Button
  const handlesubmit = (e) => {
    e.preventDefault();
    const isValid = Validationform();
    if (isValid) {
      alert("Form Submitted", formdata);
    } else {
      alert("Form Validation Failed");
    }
  };

  // Onchange Events
  const handlechange = (e) => {
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

  // Phone Number
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
      <h1>Form Validation</h1>
      <form className="form" onSubmit={handlesubmit}>
        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formdata.firstname}
            placeholder="Enter Your First Name"
            onChange={handlechange}
          />
          {error.firstname && <div className="error">{error.firstname}</div>}
        </div>
        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formdata.lastname}
            onChange={handlechange}
            placeholder="Enter Your Last Name"
          />
          {error.lastname && <div className="error">{error.lastname}</div>}
        </div>
        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
            placeholder="Enter Your Email"
          />
          {error.email && <div className="error">{error.email}</div>}
        </div>
        {/* Phone Number */}
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            value={formdata.phonenumber}
            onChange={handlechange}
            placeholder="Enter Your Phone Number"
          />
          {error.phonenumber && (
            <div className="error">{error.phonenumber}</div>
          )}
        </div>
        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handlechange}
            placeholder="Enter Your Password"
          />
          {error.password && <div className="error">{error.password}</div>}
        </div>
        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword"
            value={formdata.confirmpassword}
            onChange={handlechange}
            placeholder="Confirm Your Password"
          />
          {error.confirmpassword && (
            <div className="error">{error.confirmpassword}</div>
          )}
        </div>
        {/* Age */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handlechange}
            placeholder="Enter Your Age"
          />
          {error.age && <div className="error">{error.age}</div>}
        </div>
        {/* Gender */}
        <div>
          <label>Gender:</label>
          <select name="gender" value={formdata.gender} onChange={handlechange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {error.gender && <div className="error">{error.gender}</div>}
        </div>
        {/* Interests */}
        <div>
          <label>Interests:</label>
          <input
            type="checkbox"
            name="coding"
            checked={formdata.interests.includes("coding")}
            onChange={handlecheckboxchange}
          />
          Coding
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formdata.interests.includes("sports")}
              onChange={handlecheckboxchange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formdata.interests.includes("reading")}
              onChange={handlecheckboxchange}
            />
            Reading
          </label>
          {error.interests && <div className="error">{error.interests}</div>}
        </div>
        {/* Date Of Birth */}
        <div>
          <label>Date Of Birth:</label>
          <input
            type="date"
            name="birthdate"
            value={formdata.birthdate}
            onChange={handlechange}
            placeholder="Enter Your Date Of Birth"
          />
          {error.birthdate && <div className="error">{error.birthdate}</div>}
        </div>
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
