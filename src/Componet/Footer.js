import React from "react";

function Footer() {
  return (
    <>
      <footer className="container ">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        © 2024
        <a
          href="https://bento.me/dishantsangani"
          className="text-center"
          target="_blank"
        >
          <u className="text-center" style={{ textDecoration: "none" }}>
            Dishant Sangani
          </u>
        </a>
        | All rights reserved.
      </footer>
    </>
  );
}

export default Footer;
