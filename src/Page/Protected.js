import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = localStorage.getItem("Login");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Component />
    </>
  );
}

export default Protected;
